import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

interface IRoutesAuth {
    auth?: boolean;
    titleId: string;
    element: React.ReactElement<any>;
    wrapper?: boolean
}

const RoutesAuth: React.FC<IRoutesAuth> = ({ auth, titleId, element, ...props }) => {
    const location = useLocation();    

    document.title = titleId ?? "Not found";
    if (location.pathname === "/") {
        return <Navigate to={"/home"} replace={true} />;
    }
    return React.cloneElement(element, { ...props });
    // return <Navigate to={"/login"} replace={true} />;
}

export default RoutesAuth