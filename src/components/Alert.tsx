interface AlertProps {
    text: string;
}

const Alert = ({text}: AlertProps) => {
    return (
        <div className="alert alert-primary" role="alert">
            {text}
        </div>
    )
}

export default Alert;