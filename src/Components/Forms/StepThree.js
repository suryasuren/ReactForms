import {React} from 'react';
import {
    Typography, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Forms.css';
import 'react-phone-number-input/style.css';
import 'react-intl-tel-input/dist/main.css';
import './Otp.css';
import OtpPage from './OtpPage'
const useStyles = makeStyles({
    mainCointainer : {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5,
        
    },
    formContainer: {
        position: "relative",
        margin: "10px auto 0px auto",
        width: "448px",
        height: "auto",
        padding: "2rem 2rem 1rem 2rem",
        borderRadius: "3px",
        background: "#fff",
        
    },
    
    
})
const StepThree = (props) => {

    const { setActiveStep, register} = props;
    
    const handleBack = () => {
        setActiveStep(prevActiveStep =>  prevActiveStep - 1)
    }

    const Classes = useStyles();

    return (
        <div className="main-head">

            <div className={` ${Classes.mainCointainer} headContainer `}>
                <Typography variant="h4" className="head2" style={{lineHeight: "24px !important"}}><b>Enter your OTP</b></Typography>
                <p>For your security, we need to verify your identity. We sent a 5-digit <br></br>
                code to <b>name@domain.com</b>. Please enter it below.</p>
            </div>

            <div className={Classes.formContainer}>
                <div>
                    <OtpPage handleBack={handleBack} register={register} />
                </div>
            </div>
            <div className="verifyotp">
                <h5 style={{fontWeight: "normal"}} >
                    Didn’t receive the email?  Check your spam filter for an email <br></br>
                    from <b style={{color: "#ED5901"}}> name@domain.com</b>
                </h5>
            </div>
        </div>
        
    )
}

export default StepThree;