import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Checkbox = ({ onClick }) => {
  const dropdownRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation(); // Track route changes

  const handleClick = () => {
    setIsChecked(prev => !prev);
    onClick();
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsChecked(false);
      }
    };

    if (isChecked) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChecked]);
  // Reset state when route changes
  useEffect(() => {
    setIsChecked(false);
  }, [location.pathname]); // Runs whenever the route changes

  return (
    <StyledWrapper ref={dropdownRef}>
      <label className="burger">
        <input
          type="checkbox"
          id="burger"
          checked={isChecked}
          onChange={handleClick}
        />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 40px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: relative;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    transition: 0.3s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    transform-origin: center;
  }

  .burger span:nth-of-type(2) {
    transform-origin: center;
  }

  .burger span:nth-of-type(3) {
    transform-origin: center;
  }

  /* Toggle Styles */
  .burger input:checked ~ span:nth-of-type(1) {
    transform: translateY(10px) rotate(45deg);
  }

  .burger input:checked ~ span:nth-of-type(2) {
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: translateY(-16px) rotate(-45deg);
  }
`;

Checkbox.propTypes = {
    onClick: PropTypes.func.isRequired, // Function to handle click event on checkbox
};

export default Checkbox;
