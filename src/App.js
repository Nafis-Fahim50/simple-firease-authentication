import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './Firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState([]);

  const handletoSingIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then (result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.error('error: ', error);
    })
  }

  const handletoSingOut = () =>{
    signOut(auth)
    .then(()=>{
      setUser({})
      console.log('succesfully singout')
    })
    .catch(()=>{
      setUser({})
    })
  }
  
  const handleGithubSignIn = ()=>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error=>{
      console.error('Error: ', error);
    })
  }
  return (
    <div className="App">
      {user.uid?
        <button onClick={handletoSingOut}>Sign Out</button>
        :
        <>
        <button onClick={handletoSingIn}>Google Sign In</button>
        <button onClick={handleGithubSignIn}>GitHub Sign-In</button>
        </>
      }
      {
        user.uid && <div><h3>Name: {user.displayName}</h3>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" /></div>
      }  
      </div>
  );
}

export default App;
