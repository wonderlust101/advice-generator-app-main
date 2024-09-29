import * as React from "react";

import './IconButton.scss'

type iconButton = {
    iconSource: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    ariaLabel?: string;
    alt?: string;
}

export default function IconButton({iconSource, color, onClick, disabled, ariaLabel, alt}: iconButton) {
    
    return (
        <button 
            className={`icon-button ${color ? `icon-button--${color}`: ''}`} 
            onClick={onClick} 
            disabled={disabled} 
            aria-label={ariaLabel}
        >
            <img className='icon-button__icon' 
                 src={iconSource} 
                 alt={alt}
            />
        </button>
    )
}