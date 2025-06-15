import "./LoginForm.scss";
import Button from "../Button/Button.jsx";

const LoginForm = () => {

    return (

        <form className="login-form">
            <label for="email">Email address</label><br/>
            <input type="text" id="email" name="email" placeholder="Email address" required/><br/>

            <label for="pwd">Password</label><br/>
            <input type="password" id="pwd" name="pwd" placeholder="password" required/><br/>

            <a href="#" className="login-form__forgot">Forgot passcode?</a><br/>

            <Button type="submit">Login</Button>

        </form>

    );
}

export default LoginForm;