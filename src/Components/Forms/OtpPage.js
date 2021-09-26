import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import './Otp.css';
import { Button } from 'react-bootstrap';

export default class OtpPage extends Component {
    state = { otp: '' };
    handleChange = (otp) => this.setState({ otp });
    render() {
        return (
            <div>
                <div className="otppages">
                    <h5 style={{ color: "rgba(3, 19, 2, 0.6)" }}>Enter your code</h5>
                    <OtpInput
                        value={this.state.otp}
                        onChange={this.handleChange}
                        numInputs={5}
                        separator={<span style={{ marginRight: "26px" }}></span>} 
                    />
                </div>
                <Button className="btnback" onClick={this.props.handleBack}
                    variant="contained" type="submit">
                    {this.props.activeStep === this.props.steps ? "Back" : "Back"}
                </Button>
                <Button 
                    disabled={this.state.otp.length < 5} 
                    className={this.state.otp.length < 5 ? "btnOTPdisabled" : "btnOTP"} 
                    onClick={this.props.register}
                    variant="contained" type="submit">
                    {this.props.activeStep === this.props.steps ? "Verify" : "Verify"}
                </Button>
            </div>
        
        );
    }
}