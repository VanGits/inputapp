import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../styles/PhoneNumber.css"
import Flag from "react-world-flags";

const CustomCountrySelect = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCountrySelect = (event) => {
    props.onSelect(event.target.value);
    setShowDropdown(false);
  };

  return (
    <div className="custom-country-select">
      <button onClick={handleDropdownClick}>
        <Flag code={props.selectedCountry} height="16" />
        <span>{props.selectedCountry}</span>
      </button>
      {showDropdown && (
        <div className="custom-country-dropdown">
          {[
            "US",
            "CA",
            "MX",
            "GB",
            "DE",
            "FR",
            "ES",
            "IT",
            ...props.countries.filter((c) => c !== "US")
          ].map((country) => (
            <div
              key={country}
              className="custom-country-option"
              onClick={handleCountrySelect}
              value={country}
            >
              <Flag code={country} height="16" />
              <span>{country}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PhoneNumber = ({ value, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState("US");

  return (
    <PhoneInput
      placeholder="Enter phone number"
      defaultCountry="US"
      value={value}
      onChange={onChange}
      country={selectedCountry}
      required
      
      countries={[
        "CA",
        "MX",
        "GB",
        "DE",
        "FR",
        "ES",
        "IT",
        "US",
      ]}
      
    />
  );
};

export default PhoneNumber;