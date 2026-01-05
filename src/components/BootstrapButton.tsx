interface ButtonProps {
    children: string;
    color?: 'primary' | 'secondary' | 'danger'; //colour options set to BootStrap colours
    onClick: () => void;
}

const BootstrapButton = ({children, color, onClick}: ButtonProps) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick} color={color}>
            {children}
        </button>
    );
}

export default BootstrapButton;