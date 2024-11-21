import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmVlbCBQYXRlbCIsImVtYWlsIjoiamVlbHBwYXRlbDE3MzRAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzIxMTMxOTYsImV4cCI6MTczNDcwNTE5Nn0.VgcVvJJIe4ez4oXQj_dauoaXmF_wiMBoMQzP4g6zRSw"; 
        const user = { name: "Jeel Patel", email: "jeelppatel1734@gmail.com" };
        dispatch(login(user, token));
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;


