import { Stepper, Step, StepLabel } from '@material-ui/core';
import { React,  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Forms.css';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Home from '../Home/index'
const useStyles = makeStyles({
    root: {
        margin: "0% 0%",
        height: "60px",
        fontWeight: 400,
        background: " #2E4B64 " ,
        "& .MuiStepIcon-root.MuiStepIcon-active" : {
            color: "#ED5901"
        },
        "& .MuiStepLabel-label.MuiStepLabel-active": {
            color: "#fff"
        },
        "& .MuiStepLabel-label" : {
            color: "#fff"
        },
        "& .MuiStepConnector-root" : {
            visibility : "hidden"
        }, 
        " &.MuiStepper-root " : {
            padding : "0px  25% !important"
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed" : {
            color: "#28435A",
        },
        "& path" : {
            background: "#fff",
            color: "#28435A"
        },
    }
})


const StepForm  = (props) => {
    const [formOneData, setFormOneData] = useState(null);
    const [formTwoData, setFormTwoData] = useState(null);
    //Hooks
    const [activeStep, setActiveStep] = useState(0);

    const steps = ["Personal Details", "Company Details", "Email Verification"];

    const handleNext = (data, step) => {
        if(step === 1) {
            setFormOneData(data)
        }
        if(step === 2) {
            setFormTwoData(data)
        }

        setActiveStep(prevActiveStep =>  prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep(prevActiveStep =>  prevActiveStep - 1)
    }

    const register = async () => {
        await localStorage.setItem("FormData", JSON.stringify({...formOneData, ...formTwoData}));
        props.history.push("/success")
    }

     function getStepsContent(stepIndex) {
        switch(stepIndex) {
            case 0: 
                return  (
                    <StepOne 
                        handleNext={handleNext}
                        activeStep={activeStep}
                        steps={steps.length} 
                    />
                );
            case 1: 
                return  (
                    <StepTwo 
                        handleBack={handleBack}  
                        handleNext={handleNext}
                        activeStep={activeStep} 
                        setActiveStep={setActiveStep}
                        steps={steps.length} 
                    />
                );
            case 2: 
                return  (
                    <StepThree 
                        handleBack={handleBack} 
                        register={register}
                        activeStep={activeStep} 
                        setActiveStep={setActiveStep}
                        steps={steps.length} 
                    />
                );
            case 3: 
                return  (
                    <Home />
                ); 

            default : return (
                <h2 style={{textAlign: "center"}}>ERROR</h2>
            );
        }
    } 

    const Classes = useStyles();

    return(
        <div>
            <Stepper className={Classes.root} activeStep={activeStep} >
                {steps.map((lable, k) => (
                    <Step key={k}>
                        <StepLabel>
                            {lable}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            {getStepsContent(activeStep)}
        </div>
    )

}

export default StepForm;