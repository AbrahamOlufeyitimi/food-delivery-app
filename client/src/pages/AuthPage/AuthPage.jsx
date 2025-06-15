import "./AuthPage.scss";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import SignupForm from "../../components/SignupForm/SignupForm.jsx";
import ChefHat from "../../assets/logo/Chef-Hat.svg";

const AuthPage = () => {
    const [tab, setTab] = useState("login");
    return (
        <div className="auth-bg">
            <div className="auth-card">
                <div className="auth-card__img">
                    <img src={ChefHat} alt="a drawing of a chef's hat" className="auth-card__logo" />

                </div>

                <div className="auth-card__tabs">
                    <button
                        className={tab === "login" ? "active" : ""}
                        onClick={() => setTab("login")}
                    >
                        Login
                    </button>
                    <button
                        className={tab === "signup" ? "active" : ""}
                        onClick={() => setTab("signup")}
                    >
                        Sign-up
                    </button>
                </div>
            </div>

            <div className="auth-card__form">
                {tab === "login" ? <LoginForm /> : <SignupForm />}
            </div>
        </div>
    );
};

export default AuthPage;
