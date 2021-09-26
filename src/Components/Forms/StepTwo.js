import React from 'react';
import {
    Typography, TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Forms.css';
import 'react-phone-number-input/style.css';
import 'react-intl-tel-input/dist/main.css'
import { Button } from 'react-bootstrap';
import useForm from '../Utils/useForm';
import Avatar from '@material-ui/core/Avatar';
import Stack from '@material-ui/core/Avatar/Avatar';
import Checkbox from '@material-ui/core/Checkbox';

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
    focusOne : {
        "& .Mui-focused": {
            color: "tomato", 
            fontWeight: "bold"
          },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `red !important`,
        }
    },
    
    cssFocused: {},
    
    notchedOutline: {
        borderWidth: '1px',
    },
    
    
})
const StepTwo = (props) => {

    const { setActiveStep,  handleNext} = props;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleBack = () => {
        setActiveStep(prevActiveStep =>  prevActiveStep - 1)
    }

    //STATE SCEME 
    const stateSchema = {
        companyName : { value: "", error: "" },
        email : {value: "", error: "" },
        jobTitle: {value: "", error: ""},
        YOE: {value: "", error: ""}
    }

    const stateValidatorSchema = {
        companyname : {
            require : true,
            validator : {
                func: value => /^([A-Za-z][A-Za-z'-]{5,10})+([A-Za-z][A-Za-z'-]{5,10})*/.test(value),
                error: "Full Name must be more than 5 characters"
            }
        },
        email : {
            require : true,
            validator : {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: "Invalid Email format"
            }
        },
        jobTitle : {
            require : true,
            validator : {
                func: value => /^([A-Za-z][A-Za-z'-]{5,10})+([A-Za-z][A-Za-z'-]{5,10})*/.test(value),
                error: "Title must be more than 5 characters"
            }
        },
        YOE : {
            require : true,
            validator : {
                func: value => /^([0-9]{1})+([0-9]+)*/.test(value),
                error: "YOE must be atleast 1 characters"
            }
        }
    }

    const {
        values,
        errors ,
        dirty, 
        handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const Classes = useStyles();
    

    const { companyName, email, jobTitle, YOE } = values;
    return (
        <div className="main-head">

            <div className={` ${Classes.mainCointainer} headContainer `}>
                <Typography variant="h4" className="head2">Add your company details </Typography>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className={Classes.formContainer}>
                <div onSubmit={handleNext} style={{display: "flex", marginBottom:"20px"}}>
                    <Stack direction="row" spacing={2} style={{display: "inline-flex"}} >
                        <Avatar alt="" src="" sx={{ width: 56, height: 56 }} />
                    </Stack>
                    <h5 style={{display: "inline-flex", marginLeft: "15px", marginTop: "35px", color : "#ED5901", fontSize:"15px"}} ><a href="#" style={{ textDecoration : "none" , color : "#ED5901"}}>Upload your Company Logo</a></h5>
                </div>
                <div>
                    <label className="lable">Company Name</label>
                    <TextField className="input" name="companyName"
                        style={{width: "100%", margin: "1rem 0"}}
                        variant="outlined" 
                        value={companyName}
                        onChange={handleOnChange}
                        InputProps={{
                            classes: {
                                root: Classes.cssOutlinedInput,
                                focused: Classes.cssFocused,
                                notchedOutline: Classes.notchedOutline
                            }
                        }} 
                    />
                    {errors.fullname && dirty.fullname && (
                        <Typography style={{color: "red", textAlign: "left", fontSize: "12px" }} >{errors.fullname}</Typography>
                    )}
                </div>
                <div>
                    <label className="lable">Email id</label>
                    <TextField className="input" name="email"
                        style={{width: "100%", margin: "1rem 0"}}
                        variant="outlined" 
                        value={email}
                        onChange={handleOnChange} 
                        InputProps={{
                            classes: {
                                root: Classes.cssOutlinedInput,
                                focused: Classes.cssFocused,
                                notchedOutline: Classes.notchedOutline
                            }
                        }}
                    />
                    {errors.email && dirty.email && (
                        <Typography style={{color: "red", textAlign: "left", fontSize: "12px" }} >{errors.email}</Typography>
                    )}
                </div>
                <div>
                    <label className="lable" style={{margin: "auto auto 0.5rem auto" }}>Job Title</label>
                    <TextField className="input" name="jobTitle"
                        style={{width: "100%", margin: "1rem 0"}}
                        variant="outlined" 
                        value={jobTitle}
                        onChange={handleOnChange}
                        InputProps={{
                            classes: {
                                root: Classes.cssOutlinedInput,
                                focused: Classes.cssFocused,
                                notchedOutline: Classes.notchedOutline
                            }
                        }}
                    />
                    {errors.jobTitle && dirty.jobTitle && (
                        <Typography style={{color: "red", textAlign: "left", fontSize: "12px" }} >{errors.jobTitle}</Typography>
                    )}
                </div>
                <div>
                    <label className="lable" style={{margin: "auto auto 0.5rem auto" }}>Years of Experience</label>
                    <TextField className="input" name="YOE" type="number"
                        style={{width: "100%", margin: "1rem 0"}}
                        variant="outlined" 
                        value={YOE}
                        onChange={handleOnChange} 
                        InputProps={{
                            classes: {
                                root: Classes.cssOutlinedInput,
                                focused: Classes.cssFocused,
                                notchedOutline: Classes.notchedOutline
                            }
                        }}
                    />
                    {errors.YOE && dirty.YOE && (
                        <Typography style={{color: "red", textAlign: "left", fontSize: "12px" }} >{errors.YOE}</Typography>
                    )}
                </div>
                <div>
                    <div style={{display: "flex"}}>
                        <Checkbox {...label} style={{display: "inline-flex", marginTop: "3px"}} required={true}/> 
                        <h4 style={{fontWeight: "normal", display: "inline-flex"}}>I accept the <a href="" style={{color: "#ED5901", fontWeight: "normal", textDecoration: "none", paddingLeft: "5px"}}> Terms and Conditions</a></h4>
                    </div>
                </div>
                <div>
                    <Button 
                        className="btnback" 
                        onClick={handleBack}
                        variant="contained" type="submit"
                    >
                        {props.activeStep === props.steps ? " " : "Back"}
                    </Button>
                    <Button 
                        disabled={!companyName || !jobTitle || !email || !YOE} 
                        className={(!companyName || !jobTitle || !email || !YOE) ? "btnOTPdisabled" : "btnOTP"} 
                        onClick={() => handleNext(values, 2)}
                        variant="contained" type="submit"
                    >
                        {props.activeStep === props.steps ? " " : "Send OTP"}
                    </Button>
                </div>
            </div>
        </div>
        
    )
}

export default StepTwo;