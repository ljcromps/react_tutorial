interface ButtonProps {
    children: string;
    color?: string;
    onClick: () => void;
}

const BootstrapButton = ({children, color, onClick}: ButtonProps) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>
            {children}
        </button>
    );
}

export default BootstrapButton;