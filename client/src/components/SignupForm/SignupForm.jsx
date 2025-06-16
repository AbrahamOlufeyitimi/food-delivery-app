import "./SignupForm.scss";
import Button from "../Button/Button.jsx";

const SignupForm = () => {
    return (
        <form className="auth-form">
            <label className="auth-form__label" htmlFor="email">Email address</label>
            <input
                className="auth-form__input"
                type="email"
                id="email"
                name="email"
                required
            />

            <label className="auth-form__label" htmlFor="password">Create password</label>
            <input
                className="auth-form__input"
                type="password"
                id="password"
                name="password"
                required
            />

            <label className="auth-form__label" htmlFor="confirm">Confirm password</label>
            <input
                className="auth-form__input"
                type="password"
                id="confirm"
                name="confirm"
                required
            />

            <div className="auth-form__button">
                <Button type="submit">Sign up</Button>
            </div>
        </form>
    );
};

export default SignupForm;
