import React from "react";
import styled, { css } from "styled-components"

const primaryStyle = css`
    color: white;  
    cursor: pointer;
    text-align: center;
    border-radius: 100px;
    background: #800FFF;
    
    border-color: transparent;
    &:hover{
        background: #993FFF;
    }
    &:active{
        background: #5B0BB5;
    }
    &:disabled {
        background: #EEF1F5;  
        border-color: transparent;
        cursor: not-allowed;  
    }
`

const secondaryStyle = css`
    color: white;  
    cursor: pointer;
    text-align: center;
    border-radius: 100px;
    background: #800FFF;

    background-color: white;
    border: 1px solid #C2C8CF;
    color: black;
    &:hover{
        background: #F4F7FA;
        border: 1px solid #C2C8CF;
    }
    &:active{
        background: #C2C8CF;
        border: 1px solid #C2C8CF;
    }
    &:disabled {
        background: #C2C8CF;  
        border: 1px solid #C2C8CF;
        cursor: not-allowed;  
    }
`

const tertiaryStyle = css`
    color: white;  
    cursor: pointer;
    text-align: center;
    border-radius: 100px;
    background: #800FFF;

    background-color: transparent;
    border-color: transparent;
    color: black;
    border-radius: 100px;
    &:active{
        color: #5B0BB5;
    }
    &:disabled {
        color: #727A82; 
    }   
`

const largeStyle = css`
    height: 64px;
    padding: 0px 25px;
    top: 8px 25px;
    left: 10px;
    gap: 8px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
`

const mediumStyle = css`
    height: 56px;
    top: 632px;
    left: 10px;
    padding: 0px 21px;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
`

const smallStyle = css`
    height: 48px;
    top: 1208px;
    left: 10px;
    padding: 0px 19px;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean
    secondary?: boolean
    tertiary?: boolean
    large?: boolean
    medium?: boolean
    small?: boolean
  }


const Button3 = styled.button<ButtonProps>`
    ${props => props.primary && primaryStyle}
    ${props => props.secondary && secondaryStyle}
    ${props => props.tertiary && tertiaryStyle}
    ${props => props.large && largeStyle}
    ${props => props.medium && mediumStyle}
    ${props => props.small && smallStyle}
`
export default Button3

