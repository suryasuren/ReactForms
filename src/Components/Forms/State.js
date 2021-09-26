import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, /* CountryRegionData */ } from 'react-country-region-selector';
import './states.css';

class StateCountry extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
      <div className="label">
          <label style={{margin: "0.5rem auto !important"}} className="label">Country</label>
        <CountryDropdown className="country"
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <label className="label">State</label>
        <RegionDropdown className="states"
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
} 

export default StateCountry;