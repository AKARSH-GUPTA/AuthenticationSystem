import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Authentication from "../authentication";

function Welcome() {
  const [isAuthenticated, setAuthentication] = React.useState(null);
  React.useEffect(() => {
    async function checkAuth() {
        const response = await Authentication.checkAuthentication();
        setAuthentication(response);
    }
    checkAuth();
  }, []);

  async function signOut() {
    try{
      const data=await Authentication.SignOut();
      setAuthentication(!data.signedout);
    }
    catch(err){
      console.log(err);
    }
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  } 

  if(isAuthenticated===true){
    return (
      <div className="container">
        <div className="card">
          {/* Icon */}
          <div className="icon-box">
            <span>✔</span>
          </div>

          {/* Heading */}
          <h1>Welcome, Alex!</h1>

          <p className="subtitle">
            We're glad to have you back. Let's <br />
            get started on your workspace.
          </p>

          {/* Button */}
          <button  className="dashboard-btn" style={{border:"none"}} onClick={signOut}>
            Sign Out
          </button>

          {/* Footer */}
          <div className="footer">
            <span>☁ Synced</span>
            <span>🔒 Secure</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
