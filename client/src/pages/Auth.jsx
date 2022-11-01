import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {setEmail, setPassword, dataAuth} from '../redux/slices/dataAuthSlice'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Auth () {
   const {isAuth, password, email, login} = useSelector((state) => state.auth);

   let navigate = useNavigate();
   const dispatch = useDispatch();


   const onSubmit = (e) => {
      dispatch(dataAuth({email, password, isAuth}));
      e.preventDefault();
   }

   useEffect(() => {
      if (login) {navigate("/");}
   }, [login]);

   
   return (  
   <div className="form_auth">
      <div className='form_auth_title'>login/Reg</div>   
      <Form className="form">
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}/>
         </Form.Group>
         <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
         </Button>
      </Form>
      <footer></footer>
   </div>
   );
}

export default Auth;