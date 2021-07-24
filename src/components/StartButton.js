import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => (
    <StyledStartButton onCLick={callback}>Start Game</StyledStartButton>
);

export default StartButton;