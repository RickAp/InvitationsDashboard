import React from "react";

const Line = ({ width, height }: {width:string, height: string}) => {
    return (
        <img src="linea.png" alt="logo" className={`${width} ${height}`}  />
    );
};

export default Line;