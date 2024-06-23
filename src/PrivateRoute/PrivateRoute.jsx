import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.admin);
    return currentUser ? <Outlet /> : <Navigate to='/login' />;
}