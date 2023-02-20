import React from 'react';
import { Navigate } from 'react-router';

function PrivateRoute({children}) {
const isloggedIn = true;
if (isloggedIn) {
    return children;
}
else {
    return <Navigate to ="/login"/>;  
}
   
}

export default PrivateRoute;