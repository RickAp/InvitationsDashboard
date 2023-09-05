import React from 'react';

const GenericButton = ({ 
    content, 
    backgroundColor, 
    textColor, 
    width, 
    height, 
    hover,
    border,
    onClick, 
}: {
        content: string, 
        backgroundColor: string, 
        textColor: string, 
        width: string, 
        height: string,
        hover?: string,
        border?: string,
        onClick?: React.MouseEventHandler<HTMLButtonElement>
    }) => {
    return (
        <button type='button' onClick={onClick} className={`${backgroundColor} ${textColor} ${width} ${height} ${hover} ${border} rounded-lg`}>{content}</button>
    );
};

export default GenericButton;