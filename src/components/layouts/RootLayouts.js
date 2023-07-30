import React from 'react';
import NavBar from '../shared/Navbar';
import Footer from '../shared/Footer';

const RootLayouts = ({ children }) => {
    return (

        <>
            <div>
                <NavBar></NavBar>
                <div>
                    {
                        children
                    }
                </div>
                <Footer></Footer>
            </div>

        </>

    );
};

export default RootLayouts;