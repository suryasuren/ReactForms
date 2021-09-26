/* import { React,  useState } from 'react';
import { Button } from '@material-ui/core';
import '../Forms.css';
const Buttons = (props) => {
    const [activeStep, setActiveStep] = useState(0);


    function getSteps() {
        return ["Personal Details", "Company Details", "Email Verification"];
    }

const handleNext = () => {
    setActiveStep(prevActiveStep =>  prevActiveStep + 1)
}

    function getStepsContent(stepIndex) {
        switch(stepIndex) {
            case 0: 
            return  "Step One (SIGN UP)";
            case 1: 
            return  "Step One (Choose Plan)";
            case 2: 
            return  "Step One (Checkout)";

            default : return "Unknown Step";
        }
    }

    const steps = getSteps();
    return (
        <>
        {activeStep === steps.length ? "The Steps" : (
            <Button han={handleNext} className="btnMove" >
                {activeStep === steps.length ? "Finish" : "Next"}
            </Button>
        )}
        </>
    )
}

export default Buttons; */