import React from 'react';

interface ParagraphProps {
    content: string;
    color?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
    fontWeight?: string; 
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    hideText?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
    content,
    color = 'black', 
    size = 'md',
    fontWeight = 'font-[400]',     
    textAlign = 'center', 
    hideText = '',
}) => {

    const textSizeMap = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
        xxl: 'text-2xl',
        xxxl: 'text-4xl',
    };

    const textSizeClass = textSizeMap[size];

    return (
        <p 
            className={`${color} ${textSizeClass} ${fontWeight} text-${textAlign} ${hideText}`}
        >
            {content}
        </p>
    );
};

export default Paragraph;