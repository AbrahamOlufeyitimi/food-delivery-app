import "./WelcomePage.scss"
import Button from "../Button/Button";
import Girl from "../../assets/images/Toy-Girl.svg";
import Boy from "../../assets/images/Toy-Boy.svg";
import Hat from "../../assets/logo/Chef-Logo.svg";


const WelcomePage = () => {
    return (
        <>
            <div className="welcome">
                <div className="welcome__img">
                    <img className="welcome__logo" src={Hat}/>
                </div>

                <div className="welcome__msg">
                    <h1 className="welcome__text">Food for Everyone</h1>
                </div>

                <div className="welcome__pics">
                    <img className="welcome__lady" src={Girl}/>
                    <img className="welcome__man" src={Boy}/>
                    <div className="welcome__block">

                    </div>
                </div>


                <Button className="btn" variant="secondary">Get started</Button>
            </div>
        </>
    )
}

export default WelcomePage;