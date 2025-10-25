import React from "react";
import styled from "styled-components";
import { Download } from "lucide-react"; 

const Button = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #E2BF5A;
  color: #0b0f18;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 203, 15, 0.35);
  transition: all 0.3s ease;
  text-decoration: none;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 18px rgba(161, 128, 9, 0.8);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const DownloadCVButton = () => {
  return (
    <Button href="/cv.pdf" download>
      <Download size={26} />
    </Button>
  );
};

export default DownloadCVButton;
