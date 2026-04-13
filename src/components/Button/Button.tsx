import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const paddingMap = {
  small: '0.5rem 1rem',
  medium: '0.75rem 1.6rem',
  large: '1rem 2.2rem',
};

const fontMap = {
  small: '0.85rem',
  medium: '1rem',
  large: '1.2rem',
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size = 'medium' }) => paddingMap[size]};
  font-size: ${({ size = 'medium' }) => fontMap[size]};
  font-family: inherit;
  font-weight: 600;
  border: none;
  border-radius: 10px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#a0a0a0' : backgroundColor || '#fb7185'};

  color: ${({ color, disabled }) =>
    disabled ? '#e0e0e0' : color || '#ffffff'};

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 4px 10px rgba(251, 113, 133, 0.25)'};

  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    background-color: #f43f5e;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  onClick,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    color={color}
    disabled={disabled}
    size={size}
    onClick={!disabled ? onClick : undefined}
  >
    {label}
  </StyledButton>
);

export default Button;
