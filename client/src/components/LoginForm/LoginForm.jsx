import "./LoginForm.scss";
import Button from "../Button/Button.jsx";

const LoginForm = () => {

    return (

        <form className="login-form">
            <label className="login-form__label" for="email">Email address</label><br/>
            <input className="login-form__input" type="text" id="email" name="email" required/><br/>

            <label className="login-form__label" for="pwd">Password</label><br/>
            <input className="login-form__input" type="password" id="pwd" name="pwd" required/><br/>

            <a href="#" className="login-form__forgot">Forgot passcode?</a><br/>

            <div className="login-form__button">
                <Button type="submit">Login</Button>
            </div>

        </form>

    );
}

export default LoginForm;