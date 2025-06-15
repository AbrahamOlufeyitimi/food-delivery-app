import "./SignupForm.scss";
import Button from "../Button/Button.jsx";

const SignupForm = () => {
    return (
        <form className="auth-form">
            <label htmlFor="email">Email address</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
            />

            <label htmlFor="password">Create password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Create password"
                required
            />

            <label htmlFor="confirm">Confirm password</label>
            <input
                type="password"
                id="confirm"
                name="confirm"
                placeholder="Confirm password"
                required
            />

            <Button type="submit">Sign up</Button>
        </form>
    );
};

export default SignupForm;
