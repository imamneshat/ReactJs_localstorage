import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
    }, []);

    return (
        <>
        {isAuthenticated ? (
            <Dashboard setIsAuthenticated={setIsAuthenticated} />
        ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
        )}
        </>
    );
};

export default App;
