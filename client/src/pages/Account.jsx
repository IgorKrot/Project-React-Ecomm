import { useSelector } from 'react-redux'

function Account () {
   const {isAuth, email} = useSelector((state) => state.auth);

   return (  
      <div className="account_main">
         <div className="acc_header">Account</div>
         <div className="client_email">your email: {email}</div>
         <div className="client_status">your login status: {isAuth ? "login" : "logout"}</div>
      </div>
   );
}

export default Account;