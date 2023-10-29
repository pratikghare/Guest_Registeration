import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function TenantDetails(){
    const { tenantId } = useParams();

    useEffect(() => {
        // fetch - call
        console.log(tenantId);
        
    }, [tenantId])
    

    return (
        <>
            <h1>TENANT DEATILS {tenantId}</h1>
        </>
    )
}