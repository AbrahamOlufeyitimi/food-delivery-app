import { Link } from "react-router-dom";
import "./Button.scss";


const Button = ({ type = "button", onClick, path, variant = "primary", children}) => {
    const classNames = `btn btn--${variant}`;

    return path ? (


        <Link className={classNames} to={path} >
            <h4 className="button__text">{children}</h4>
        </Link>

    ) : (

        <button
            type={type}
            onClick={onClick}
            className={classNames}
        >
            <h4 className="button__text">{children}</h4>
        </button>
    );
};

export default Button;