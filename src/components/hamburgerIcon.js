const HamburgerIcon = ({isOpen, color}) => {
    return (
        <>
            <div className="line">
            </div>
            <style jsx>{` 
                .line{
                    width:${isOpen ? 0 :'28.31px' };
                    border-bottom: 2px solid ${color};
                }
                .line::before {
                    width:${isOpen ? '28.31px' :'32.5px;' };
                    border-bottom: 2px solid ${color};
                    transform:${isOpen? 'translateY(-5px) rotate(45deg)':
                    ''};
                    };
                    .line::after {
                    width:${isOpen ? '28.31px' :'24.38px' };
                    border-bottom: 2px solid ${color};
                    transform: ${isOpen? 'translateY(9px)  rotate(-45deg) ':''}
                    }
                    
                    ` }
            </style>
        </>
    )
}

export default HamburgerIcon
