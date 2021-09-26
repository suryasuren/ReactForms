import { React } from 'react';
import {
    Typography, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Forms.css';
import 'react-phone-number-input/style.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css'
import { Button } from 'react-bootstrap';
import useForm from '../Utils/useForm';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import './states.css';

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
const StepOne = (props) => {

    const { handleNext } = props;

    //STATE SCEME 
    const stateSchema = {
        fullname : { value: "", error: "" },
        gender : { value: "Male", error: ""},
        Country : { value: "", error: "" },
        State : { value: "", error: ""},
        Phone : { value: "", error: "" }
    }

    const stateValidatorSchema = {
        fullname : {
            require : true,
            validator : {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: "Full Name must be more than 1 characters"
            }
        }
    }

    const {
        values,
        errors ,
        dirty, 
        handleOnChange
    } = useForm(stateSchema, stateValidatorSchema)

    const Classes = useStyles();
    

    const { fullname, gender, Country, State, Phone } = values;

    const handleNextAndSend = () => {
        const data = { fullname, gender, Country, State, Phone };
        handleNext(data, 1)
    }
    return (
        <div className="main-head">
            <div className={` ${Classes.mainCointainer} headContainer `}>
                <Typography variant="h4" className="head2">Add your personal details</Typography>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className={Classes.formContainer}>
                <form>
                    <label className="lable">Full Name</label>
                    <TextField className="textFields"  name="fullname"
                        required
                        style={{width: "100%", margin: "1rem 0"}}
                        variant="outlined" 
                        value={fullname}
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

                    <label className="lable">Gender</label>
                    <div class="gender">
                        <label>
                            <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={handleOnChange}/>
                            <span>Male</span>
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={handleOnChange}/>
                            <span>Female</span>
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Others" checked={gender === "Others"} onChange={handleOnChange}/>
                            <span>Others</span>
                        </label>
                    </div>
                    
                    <div className="label">
                        <label style={{margin: "0.5rem auto !important"}} className="label">Country</label>
                        <CountryDropdown className="country"
                            value={Country}
                            onChange={(val) => handleOnChange({ target: { name: "Country", value: val }})} 
                            InputProps={{
                                classes: {
                                    root: Classes.cssOutlinedInput,
                                    focused: Classes.cssFocused,
                                    notchedOutline: Classes.notchedOutline
                                }
                            }}
                        />
                        <label className="label">State</label>
                        <RegionDropdown 
                            className="states"
                            country={Country}
                            value={State}
                            onChange={(val) => handleOnChange({ target: { name: "State", value: val }})} 
                            InputProps={{
                                classes: {
                                    root: Classes.cssOutlinedInput,
                                    focused: Classes.cssFocused,
                                    notchedOutline: Classes.notchedOutline
                                }
                            }}
                        />
                    </div>
                    <label className="lable" style={{margin: "auto auto 0.5rem auto" }}>Phone</label>
                    <IntlTelInput 
                        preferredCountries={["in"]}
                        defaultCountry="in"
                        onPhoneNumberChange={(status, value, countryData, number, id) => handleOnChange({ target: { name: "Phone", value: number }})}
                        InputProps={{
                            classes: {
                                root: Classes.cssOutlinedInput,
                                focused: Classes.cssFocused,
                                notchedOutline: Classes.notchedOutline
                            }
                        }}
                    />
                    
                </form>
                <>
                <Button disabled={!fullname } className={!fullname  ? "btndisabled" : "btn" } onClick={handleNextAndSend} variant="contained" type="submit">
                    { props.activeStep === props.steps ? "Next" : "Next"}
                </Button>
                </>
                
            </div>
            <p className="texts">Already have an account ? <p className="logs"> Log In</p></p>
        </div>
        
    )
}

export default StepOne;