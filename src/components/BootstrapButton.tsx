interface ButtonProps {
    children: string;
    onClick: () => void;
}

const BootstrapButton = ({children, onClick}: ButtonProps) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {children}
        </button>
    );
}

export default BootstrapButton;