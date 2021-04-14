import React,{useState} from "react";
import { Link,useHistory } from "react-router-dom";
import { Card, Form, Error,Input, Button } from '../components/AuthForms';

function Register() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [rePassword,setRePassword] = useState('');
  const [error,setError] = useState();
  const history = useHistory();

  const signup = ()=>{
    //first check if password and rePassword are same
    if(userName && password && rePassword){
        if(password !== rePassword){
            setError('Please reconfirm your password correctly');
        }
        localStorage.setItem('userName',userName);
        localStorage.setItem('password',password);
        history.push("/admin");
    } else{
        setError('Please fill in all details for signup');
    }
  }
  return (
    <Card>
      <Form>
        <Input type="email" placeholder="email" onChange={(e)=>setUserName(e.target.value)}/>
        <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <Input type="password" placeholder="password again" onChange={(e)=>setRePassword(e.target.value)}/>
        <Button onClick={()=>signup()}>Sign Up</Button>
        { error &&<Error>{error}</Error> }
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Register;