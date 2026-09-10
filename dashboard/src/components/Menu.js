import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [isLoadingPortfolio, setIsLoadingPortfolio] = useState(false);
  const [portfolioError, setPortfolioError] = useState("");
  const searchParams = new URLSearchParams(window.location.search);
  const { pathname } = useLocation();
  const userId = searchParams.get("userId");
  const userName = searchParams.get("userName") || "USERID";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const selectedMenu =
    pathname === "/orders"
      ? 1
      : pathname === "/holdings"
        ? 2
        : pathname === "/positions"
          ? 3
          : pathname === "/funds"
            ? 4
            : pathname === "/apps"
              ? 5
              : 0;

  const handleProfileClick = async () => {
    const shouldOpen = !isProfileDropdownOpen;
    setIsProfileDropdownOpen(shouldOpen);

    if (!shouldOpen || holdings.length || positions.length) {
      return;
    }

    setIsLoadingPortfolio(true);
    setPortfolioError("");

    if (!userId) {
      setPortfolioError("Please log in to view your portfolio");
      setIsLoadingPortfolio(false);
      return;
    }

    try {
      const [holdingsResponse, positionsResponse] = await Promise.all([
        fetch(`http://localhost:3002/allHoldings?userId=${encodeURIComponent(userId)}`),
        fetch(`http://localhost:3002/allPositions?userId=${encodeURIComponent(userId)}`),
      ]);

      if (!holdingsResponse.ok || !positionsResponse.ok) {
        throw new Error("Unable to load portfolio information");
      }

      const [holdingsData, positionsData] = await Promise.all([
        holdingsResponse.json(),
        positionsResponse.json(),
      ]);

      setHoldings(holdingsData);
      setPositions(positionsData);
    } catch (error) {
      setPortfolioError(error.message);
    } finally {
      setIsLoadingPortfolio(false);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const route = (pathname) => ({
    pathname,
    search: window.location.search,
  });

  return (
    <div className="menu-container">
      <a
        href="http://localhost:3000"
        aria-label="Go to home page"
        className="menu-logo-link"
      >
        <img src="/logo.png" style={{ width: "50px" }} alt="Shrivest logo" />
      </a>
      <div className="menus">
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={isMobileMenuOpen ? "mobile-menu-open" : ""}>
          <li>
            <a
              href="http://localhost:3000"
              style={{ textDecoration: "none" }}
            >
              <p className={menuClass}>Home</p>
            </a>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={route("/")}
              onClick={handleMenuClick}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={route("/orders")}
              onClick={handleMenuClick}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={route("/holdings")}
              onClick={handleMenuClick}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={route("/positions")}
              onClick={handleMenuClick}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={route("/funds")}
              onClick={handleMenuClick}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={route("/apps")}
              onClick={handleMenuClick}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile-wrapper">
        <div
          className="profile"
          onClick={handleProfileClick}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              handleProfileClick();
            }
          }}
        >
          <div className="avatar">{userInitial}</div>
          <p className="username">{userName}</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="portfolio-dropdown">
            <h4>User portfolio</h4>
            {isLoadingPortfolio && <p>Loading stock information...</p>}
            {portfolioError && <p className="portfolio-error">{portfolioError}</p>}
            {!isLoadingPortfolio && !portfolioError && (
              <>
                <h5>Holdings ({holdings.length})</h5>
                {holdings.length ? (
                  <div className="portfolio-table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Stock</th>
                          <th>Qty</th>
                          <th>Avg</th>
                          <th>LTP</th>
                          <th>P&amp;L</th>
                        </tr>
                      </thead>
                      <tbody>
                        {holdings.map((stock) => {
                          const pnl = (stock.price - stock.avg) * stock.qty;
                          return (
                            <tr key={stock._id || stock.name}>
                              <td>{stock.name}</td>
                              <td>{stock.qty}</td>
                              <td>{Number(stock.avg).toFixed(2)}</td>
                              <td>{Number(stock.price).toFixed(2)}</td>
                              <td className={pnl >= 0 ? "profit" : "loss"}>
                                {pnl.toFixed(2)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No holdings found.</p>
                )}
                <h5>Positions ({positions.length})</h5>
                {positions.length ? (
                  <div className="portfolio-table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Stock</th>
                          <th>Product</th>
                          <th>Qty</th>
                          <th>LTP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {positions.map((position) => (
                          <tr key={position._id || position.name}>
                            <td>{position.name}</td>
                            <td>{position.product}</td>
                            <td>{position.qty}</td>
                            <td>{Number(position.price).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No open positions found.</p>
                )}
              </>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Menu;