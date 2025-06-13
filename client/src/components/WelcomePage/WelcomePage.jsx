import "./WelcomePage.scss"
import Button from "../Button/Button";

const WelcomePage = () => {
    return (
        <>
            <div className="welcome">
                <div className="welcome__img">
                    <img className="welcome__logo"></img>
                </div>

                <div className="welcome__msg">
                    <h1 className="welcome__text">Food for Everyone</h1>
                </div>

                <div className="welcome__item">
                    <img className="welcome__lady"></img>
                </div>

                <div className="welcome__pic">
                    <img className="welcome__man"></img>
                </div>

                <Button>Get started</Button>
            </div>
        </>
    )
}

export default WelcomePage;