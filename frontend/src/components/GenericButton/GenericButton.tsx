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
    disabled,
}: {
        content: string, 
        backgroundColor: string, 
        textColor: string, 
        width: string, 
        height: string,
        hover?: string,
        border?: string,
        onClick?: React.MouseEventHandler<HTMLButtonElement>
        disabled?: boolean
    }) => {
    return (
        <button type='button' disabled={disabled} onClick={onClick} className={`${backgroundColor} ${textColor} ${width} ${height} ${hover} ${border} rounded-lg`}>{content}</button>
    );
};

export default GenericButton;