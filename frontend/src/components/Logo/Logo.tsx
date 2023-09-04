import React from "react";

const Logo = ({ width, height }: {width:string, height: string}) => {
    return (
        <img src="logo.png" alt="logo" className={`${width} ${height}`}  />
    );
};

export default Logo;