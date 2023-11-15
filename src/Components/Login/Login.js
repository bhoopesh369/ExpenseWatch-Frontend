import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { FacebookAuthProvider } from "firebase/auth";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Login = () => {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

   

    const onSubmit = async (e) => {
        e.preventDefault()

        //sigfn in with email and password

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                window.alert('Login successful! Welcome, ' + user.email);
                navigate("/home")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                window.alert('Login failed');
                // ..
            });
    }

    
    const onGoogleSubmit = async (e) => {
        e.preventDefault()
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
                window.alert('Login successful! Welcome, ' + user.email);
                navigate("/home")
            
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            window.alert('Login failed');
            
        });
    }
        const onFBSubmit = async (e) => {
            e.preventDefault()
            const auth = getAuth();
            const provider = new FacebookAuthProvider();
            
            await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Faceboob Access Token. You can use it to access the Google API.
                const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
                console.log(user);
                    //window.alert('Login successful! Welcome, ' + user.email);
                    navigate("/home")
                
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                window.alert('Login failed');
                
            });
        
    }

    return (
        <main style={{ textAlign: 'center', marginTop: '50px', width: '100vw', height: '100vh',
    } }>
            <section>
                <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#eee', padding: '40px', borderRadius: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',  }}>
                    <h1 style={{ color: '#333' }}>Login</h1>
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
                            style={{ width: '100%', padding: '12px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '3px', fontSize: '18px', cursor: 'pointer', marginBottom: '10px' }}
                        >
                            Login
                        </button>
                        <div style={{height: '30px', fontFamily: 'helvetica', fontWeight: '500'}}>
                            -------------- OR WITH -------------
                        </div>
                        <div style={{display: 'flex', gap: '7.5px' }}>
                        <button
                            type="submit"
                            onClick={onGoogleSubmit}
                            style={{ width: '50%', padding: '10px', color: 'black', backgroundColor: '#D3D3D3', border: 'black 2px solid', color: '#fff', border: 'none', borderRadius: '3px', fontSize: '18px', cursor: 'pointer', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <FcGoogle size={
                                25
                            } />
                            <span style={{color: 'black', marginLeft: '7.5px', fontFamily: 'verdana', fontWeight: '400'}}>Google</span>
                        </button>

                        <button
                            type="submit"
                            onClick={onFBSubmit}
                            style={{ width: '50%', padding: '5px', backgroundColor: '#1877F2', color: '#fff', border: 'none', borderRadius: '3px', fontSize: '18px', cursor: 'pointer', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <BsFacebook size={25} />
                            acebook
                        </button>
                        </div>
                        <div style={{display: 'flex', gap:'7.5px'}}>
                        <button
                            type="submit"
                            onClick={onFBSubmit}
                            style={{ width: '50%', padding: '10px', backgroundColor: '#444444', color: '#fff', border: 'none', borderRadius: '3px', fontSize: '18px', cursor: 'pointer', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <FaTwitter size={25} />
                            <span style={{marginLeft: '7.5px', fontFamily:'helvetica'}}>Twitter</span>
                        </button>
                        <button
                            type="submit"
                            onClick={onFBSubmit}
                            style={{ width: '50%', padding: '5px', backgroundColor: '#333333', color: '#fff', border: 'none', borderRadius: '3px', fontSize: '18px', cursor: 'pointer', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <FaGithub size={25} />
                            <span style={{marginLeft: '7.5px', fontFamily:'helvetica'}}>Github</span>
                        </button>
                        </div>

                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login;
