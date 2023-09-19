import React from "react";
import Header from "./header/Header";

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
