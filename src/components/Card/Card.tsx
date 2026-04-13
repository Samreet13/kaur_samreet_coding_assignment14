import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const Wrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  border-radius: 14px;
  overflow: hidden;

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e5e7eb' : backgroundColor || '#fff1f2'};

  border: ${({ disabled }) => (disabled ? 'none' : '1px solid #fecdd3')};

  color: ${({ color, disabled }) =>
    disabled ? '#9ca3af' : color || '#1f2937'};

  box-shadow: ${({ disabled }) =>
    disabled
      ? '0 1px 3px rgba(0,0,0,0.05)'
      : '0 6px 18px rgba(244, 63, 94, 0.15)'};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  transition: all 0.25s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-4px)')};
    box-shadow: ${({ disabled }) =>
      disabled
        ? '0 1px 3px rgba(0,0,0,0.05)'
        : '0 10px 24px rgba(244, 63, 94, 0.2)'};
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const CardImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 190px;
  object-fit: cover;
  filter: ${({ disabled }) => (disabled ? 'grayscale(80%)' : 'none')};
  transition: filter 0.2s ease;
`;

const Body = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const Title = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 0.6rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ disabled }) => (disabled ? '#9ca3af' : '#be123c')};
`;

const Description = styled.p<{ disabled?: boolean }>`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ disabled }) => (disabled ? '#b0b8c4' : '#4b5563')};
`;

const Footer = styled.div<{ disabled?: boolean }>`
  padding: 0.9rem 1.5rem;
  font-size: 0.85rem;

  background-color: ${({ disabled }) => (disabled ? '#f3f4f6' : '#ffe4e6')};

  color: ${({ disabled }) => (disabled ? '#9ca3af' : '#9f1239')};

  border-top: 1px solid ${({ disabled }) => (disabled ? '#d1d5db' : '#fecdd3')};
`;

const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  description = 'Card description.',
  imageSrc = 'https://placehold.co/360x190',
  imageAlt = 'Card image',
  backgroundColor,
  color,
  disabled = false,
  footerText = 'Footer',
}) => (
  <Wrapper backgroundColor={backgroundColor} color={color} disabled={disabled}>
    <CardImage src={imageSrc} alt={imageAlt} disabled={disabled} />
    <Body>
      <Title disabled={disabled}>{title}</Title>
      <Description disabled={disabled}>{description}</Description>
    </Body>
    <Footer disabled={disabled}>{footerText}</Footer>
  </Wrapper>
);

export default Card;
