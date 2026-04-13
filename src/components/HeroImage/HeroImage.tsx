import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '420px'};

  background-image: ${({ src, disabled }) =>
    !disabled && src ? `url(${src})` : 'none'};

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d1d5db' : backgroundColor || '#ffe4e6'};

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 16px;
  overflow: hidden;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  filter: ${({ disabled }) => (disabled ? 'grayscale(80%)' : 'none')};

  transition: all 0.3s ease;

  padding-left: 60px;

  @media (max-width: 600px) {
    height: 260px;
    padding-left: 20px;
  }
`;

const Overlay = styled.div<{ overlayColor?: string; disabled?: boolean }>`
  position: absolute;
  inset: 0;

  background-color: ${({ overlayColor, disabled }) =>
    disabled
      ? 'rgba(150,150,150,0.55)'
      : overlayColor || 'rgba(255, 182, 193, 0.35)'};
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: left;
  max-width: 600px;
`;

const HeroTitle = styled.h1<{ color?: string; disabled?: boolean }>`
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  font-weight: 800;
  margin: 0 0 0.75rem;

  color: ${({ color, disabled }) =>
    disabled ? '#9ca3af' : color || '#be123c'};
`;

const HeroSubtitle = styled.p<{ color?: string; disabled?: boolean }>`
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin: 0;

  color: ${({ color, disabled }) =>
    disabled ? '#9ca3af' : color || '#7f1d1d'};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src = 'https://placehold.co/1200x420',
  title = 'Hero Title',
  subtitle = 'Subtitle goes here',
  backgroundColor,
  color,
  disabled = false,
  height,
  overlayColor,
}) => (
  <HeroWrapper
    src={src}
    height={height}
    backgroundColor={backgroundColor}
    disabled={disabled}
  >
    <Overlay overlayColor={overlayColor} disabled={disabled} />
    <Content>
      <HeroTitle color={color} disabled={disabled}>
        {title}
      </HeroTitle>
      <HeroSubtitle color={color} disabled={disabled}>
        {subtitle}
      </HeroSubtitle>
    </Content>
  </HeroWrapper>
);

export default HeroImage;
