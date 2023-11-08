import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../utils/firebase';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main style={{ textAlign: 'center', marginTop: '50px', width: '100vw', height: '100vh'}}>
    <section>
        <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#333' }}>ExpenseWatch</h1>
            <form style={{ marginTop: '20px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email-address" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Email address</label>
                    <input
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }}
                        placeholder="Email address"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Password</label>
                    <input
                        type="password"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }}
                        placeholder="Password"
                    />
                </div>

                <button
                    type="submit"
                    onClick={onSubmit}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '3px', fontSize: '18px', cursor: 'pointer' }}
                >
                    Sign up
                </button>
            </form>

            <p style={{ marginTop: '15px' }}>
                Already have an account? <NavLink to="/login" style={{ color: '#4caf50', textDecoration: 'none', fontWeight: 'bold' }}>Sign in</NavLink>
            </p>
        </div>
    </section>
    </main> 
  )
}
 
export default Signup;
