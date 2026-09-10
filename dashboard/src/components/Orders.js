import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userId =
    new URLSearchParams(window.location.search).get("userId") ||
    localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:3002/orders?userId=${encodeURIComponent(userId)}`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [userId]);

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>
      {orders.length === 0 ? (
        <div className="no-orders"><p>You haven't placed any orders today</p></div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr><th>Stock</th><th>Type</th><th>Qty</th><th>Price</th><th>Date</th></tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td className={order.mode === "BUY" ? "profit" : "loss"}>{order.mode}</td>
                  <td>{order.qty}</td>
                  <td>{Number(order.price).toFixed(2)}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
