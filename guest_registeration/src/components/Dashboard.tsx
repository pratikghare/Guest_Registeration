import useWindowDimensions from "../hooks/userWindowDimensions";
import { Sidebar } from "./common/SideBar";
import { useEffect, useState } from 'react';
import { SidebarCollapsed } from "./common/SideBarCollapsed";
import { Tenants } from "./Tenants/Tenants";
import { useLocation } from 'react-router-dom';
import TenantDetails from "./Tenants/TenantDetails";
import BreadCrumb from "./common/BreadCrumb";

let routes = [
    {
        path: 'tenants',
        element: <Tenants />,
        breadCrumb: ['Tenants']
    },
    {
        path: 't-details',
        element: <TenantDetails />,
        breadCrumb: ['Tenants', 'Tenant Details']
    },
]


function Dashboard(){
    const { width, height } = useWindowDimensions();
    const [sideBar, setSideBar] = useState(<Sidebar />);
    const [body, setBody] = useState(<Tenants />);
    const [bodyParent, setBodyParent] = useState("Tenants");
    const [breadCrumbList, setBreadCrumbList] = useState([]);
    let location = useLocation(); 

    useEffect(() => {
        const path = location.pathname.split('/').slice(2, 3)[0] || "";
        let body = routes.find(route => String(route.path).includes(path));
        if(body?.element) setBody(body?.element);
        if(body?.breadCrumb) setBreadCrumbList(body.breadCrumb); 
    }, [location])

    useEffect(() => {
        setSideBar(width > 800 ? <Sidebar/> : <SidebarCollapsed/>)
    }, [width, height])

    return (
        <div className="flex">
            {sideBar}
            <div className="w-full">
                <BreadCrumb list={breadCrumbList} />
                {body}
            </div>
        </div>
    )
}

export default Dashboard;