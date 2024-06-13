// React Imports
import { lazy } from 'react';

// React Router Dom Imports
import { Outlet } from "react-router-dom";

// Components import
const Header = lazy(()=> import('../../components/app/Header'));


// Function
export default function AppLayout() {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    )
}
