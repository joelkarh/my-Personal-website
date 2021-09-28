const HamburgerIcon = ({isOpen}) => {
    return (
        <>
            <div className="line">
            </div>
            <style jsx>{` 
                .line{
                    width:${isOpen ? 0 :'28.31px' };
                }
                .line::before {
                    width:${isOpen ? '28.31px' :'32.5px;' };
                    transform:${isOpen? 'translateY(-5px) rotate(45deg)':
                    ''};
                    };
                    .line::after {
                    width:${isOpen ? '28.31px' :'24.38px' };
                    transform: ${isOpen? 'translateY(9px)  rotate(-45deg) ':''}
                    }
                }
            `}
            </style>
        </>
    )
}

export default HamburgerIcon
