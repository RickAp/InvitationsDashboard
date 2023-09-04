import React from 'react';

const ButtonLogIn = ({ content }: {content: string}) => {
    return (
        <button 
            type='submit'
            className='w-[316px] h-[48px] rounded-lg text-[white] bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] transition duration-300 ease-in-out'
        >
            {content}
        </button>
    );
};

export default ButtonLogIn;