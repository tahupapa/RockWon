import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return <SpinnerIcon />;
};

export default Spinner;

const spinnerAnimation = keyframes`
    from {transform: rotate(0deg); }
    to {transform: rotate(360deg);}
`;

const SpinnerIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid #f7f9fa;
  border-top-color: #ffeb00;
  animation: ${spinnerAnimation} 1s ease infinite;
`;
