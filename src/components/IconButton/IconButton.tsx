import * as React from "react";

import './IconButton.scss'

type iconButton = {
    iconSource: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    ariaLabel?: string;
}

export default function IconButton({iconSource, color, onClick, disabled, ariaLabel}: iconButton) {
    
    return (
        <button 
            className={`icon-button ${color ? `icon-button--${color}`: ''}`} 
            onClick={onClick} 
            disabled={disabled} 
            aria-label={ariaLabel}
        >
            <span className='sr-only'>{ariaLabel}</span>
            
            <img className='icon-button__icon' 
                 src={iconSource} 
                 alt=''
                 role='presentation'
            />
        </button>
    )
}