// // App.js

// import React, { useState, useEffect } from 'react';
// import { signInWithMicrosoft, signOut, auth } from './firebase'; // Import signInWithMicrosoft, signOut, and auth
// import './Login.css';


// function Login() {
//   const [user, setUser] = useState(null); // State to store user data

//   useEffect(() => {
//     // Listen for changes in authentication state
//     const unsubscribe = auth.onAuthStateChanged(currentUser => {
//       if (currentUser) {
//         // User is signed in
//         setUser(currentUser); // Update user state
//       } else {
//         // No user is signed in
//         setUser(null); // Update user state
//       }
//     });

//     // Clean up subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   // Function to handle sign-in
//   const handleSignIn = async () => {
//     try {
//       await signInWithMicrosoft(); // Call signInWithMicrosoft function
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Function to handle sign-out
//   const handleSignOut = async () => {
//     try {
//       await signOut(); // Call signOut function
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <h1>React App with Microsoft Authentication</h1>
//         <div className="auth">
//           {user ? (
//             <>
//               <p className="user">Welcome, {user.displayName}</p> {/* Display user's display name */}
//               <p className="email">Email: {user.email}</p> {/* Display user's email */}
//               <button className="btn" onClick={handleSignOut}>Sign out</button>
//             </>
//           ) : (
//             <button className="btn" onClick={handleSignIn}>Sign in with Microsoft</button>
//           )}
//         </div>
//         <div>
        
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Login;





// App.js

import React, { useState, useEffect } from 'react';
import { signInWithMicrosoft, signOut, auth } from './firebase'; // Import signInWithMicrosoft, signOut, and auth
import './Login.css';


function Login() {
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser); // Update user state
      } else {
        // No user is signed in
        setUser(null); // Update user state
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  // Function to handle sign-in
  const handleSignIn = async () => {
    try {
      await signInWithMicrosoft(); // Call signInWithMicrosoft function
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle sign-out
  const handleSignOut = async () => {
    try {
      await signOut(); // Call signOut function
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>React App with Microsoft Authentication</h1>
        <div className="auth">
          {user ? (
            <>
              <p className="user">Welcome, {user.displayName}</p> {/* Display user's display name */}
              <p className="email">Email: {user.email}</p> {/* Display user's email */}
              <button className="btn" onClick={handleSignOut}>Sign out</button>
            </>
          ) : (
            <button className="btn" onClick={handleSignIn}>Sign in with Microsoft</button>
          )}
        </div>
        <div>
        
        </div>
      </header>
    </div>
  );
}

export default Login;

