import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
    <div className="App">
        <Header />
            {children}
        <Footer />
    </div>
);

export default Layout;