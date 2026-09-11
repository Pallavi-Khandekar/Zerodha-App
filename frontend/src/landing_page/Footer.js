import React from 'react';

function Footer() {
    const linkClass = "text-muted text-decoration-none p-2"; 
    return ( 
        <footer  style={{backgroundColor:"rgb(250, 250, 250)"  }}>
       <div className="container  border-top mt-5">
           <div className="row  mt-5 " >
              <div className="col">
                <img src={`${process.env.PUBLIC_URL}/media/images/logo.svg`} style={{width:"50%"}} alt="Logo" />
                <p> 
                   copy; 2010-2024, Not Zerodha Broking ltd, All rights reserved. 
                </p> 
              </div>
              <div className= "col" >  
                 <p>Company</p>
                 <a href="#"  className={linkClass} >  
                  About </a>
                 <br/>       
                 <a href="#"  className={linkClass} > 
                  Products </a>  
                 <br/>        
                 <a href="#" className={linkClass} > 
                   Pricing </a>
                 <br/>       
                 <a href="#" className={linkClass} > 
                    Refferal programme </a>
                 <br/>       
                 <a href="#" className={linkClass} >
                    Carrers  </a> 
                 <br/>
                 <a href="#" className={linkClass}>
                    Zerodha.tech </a> 
                 <br/>    
                 <a href="#" className={linkClass} > 
                    Press & media </a>  
                 <br/>    
                 <a href="#" className={linkClass} > 
                    Zerodha Cares (CSR) </a> 
                 <br/>      
              </div>
              <div className="col">
                  <p>Support</p>
                  <a href="#" className={linkClass} >Contact</a>
                  <br/>
                  <a href="#" className={linkClass} >  Support portal</a>
                  <br/>
                  <a href="#" className={linkClass} >Z-Connect blog  </a> 
                  <br/>
                  <a href="#" className={linkClass} > List of charges </a>
                  <br/>
                  <a href="#" className={linkClass} > Downloads & resources </a>
                  <br/>
              </div>
              <div className="col">
                  <p>Account</p>
                     <a href="#" className={linkClass} >Open an account</a>
                     <br/>
                     <a href="#"  className={linkClass} >Fund transfer</a>
                      <br/>
                     <a href="#" className={linkClass} >60 day challenge</a>
                      <br/>
              </div>
        </div>
        <div className="mt-5 fs-6 text-muted"  style={{fontSize:"14px"}}>
           <p>
               CDSL: Depository services through Zerodha Securities Pvt. Ltd. ▢ SEBI Registration no.: IN-DP-100-2015
               Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 ▢ SEBI Registration no.: INZ000038238
               Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, opp. Clarence Public School,
               J.P Nagar 4th Phase, Bengaluru – 560078, Karnataka, India.
               For any complaints pertaining to securities broking please write to complaints@zerodha.com,
               for DP related to dp@zerodha.com.
               Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF 
           </p>

           <p>
               Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
               Mandatory details for filing complaints on SCORES: Name, PAN, Address,
               Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
               redressal of the grievances 
           </p>

           <p>
               Investments in securities market are subject to market risks; read all the related documents carefully before
               investing. 
           </p>

            <p>
               "Prevent unauthorised transactions in your account. Update your
               mobile numbers/email IDs with your stock brokers. Receive information of
               your transactions directly from Exchange on your mobile/email at the end
               of the day. Issued in the interest of investors. KYC is one time exercise
               while dealing in securities markets - once KYC is done through a SEBI
               registered intermediary (broker, DP, Mutual Fund etc.), you need not
               undergo the same process again when you approach another intermediary."
               Dear Investor, if you are subscribing to an IPO, there is no need to issue
               a cheque. Please write the Bank account number and sign the IPO
               application form to authorize your bank to make payment in case of
               allotment. In case of non allotment the funds will remain in your bank
               account. As a business we don't give stock tips, and have not authorized
               anyone to trade on behalf of others. If you find anyone claiming to be
               part of Zerodha and offering such services, please create a ticket here.
             </p>
        </div>
        <div className="row  text-center">
            <div className="col " style={{fontWeight:"bold"}}>
                <a href="#" className={linkClass} > NSE</a>
               
                <a href="#" className={linkClass} >BSE</a>
               
                <a href="#" className={linkClass} >MCX</a>
               
                <a href="#" className={linkClass} >Terms & Conditions</a>
                
        
                <a href="#" className={linkClass} >Policies & Procedures</a>
          
          
                <a href="#" className={linkClass} >Privacy Policy</a>
      
          
                <a href="#" className={linkClass} >Disclosure</a>
            </div>

        </div>
       </div>
       </footer>
     );
}

export default Footer;