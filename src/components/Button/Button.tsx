import React from "react";
import styled, { css } from "styled-components"

interface IButton{
    size: "Large" | "Midium" | "Small"
    type: "Primary" | "Secondary" | "Tertiary"
    label: "TextOnly" | "IconRight" | "IconOnly"
}

const setLargeWidth = (label:string) => {
    if (label === "TextOnly"){
        return "126"
    } else if  (label === "IconRight"){
        return "154"
    } else if  (label === "IconOnly"){
        return "64"
    }
} 

const setMidiumWidth = (label:string) => {
    if (label === "TextOnly"){
        return "112"
    } else if  (label === "IconRight"){
        return "140"
    } else if  (label === "IconOnly"){
        return "56"
    }
} 

const setSmallWidth = (label:string) => {
    if (label === "TextOnly"){
        return "98"
    } else if  (label === "IconRight"){
        return "118"
    } else if  (label === "IconOnly"){
        return "48"
    }
} 


const setSize = (props: IButton) => {
    const { size, label } = props

    if (size === "Large") {
        const widthValue = setLargeWidth(label)
        return css`       
            height: 64px;
            width: ${widthValue}px;
            padding: 20px, 32px, 20px, 32px;
            top: 8px;
            left: 10px;
            gap: 8px;
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: 0em;
        `
    } else if (size === "Midium"){
        const widthValue = setMidiumWidth(label)
        return css`
        height: 56px;
        width: ${widthValue}px;
        top: 632px;
        left: 10px;
        padding: 16px, 32px, 16px, 32px;
        gap: 8px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
    `

    } else if ( size === "Small"){
        const widthValue = setSmallWidth(label)
        return css`
        height: 48px;
        width: ${widthValue}px;
        top: 1208px;
        left: 10px;
        padding: 16px, 28px, 16px, 28px;
        gap: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
    `
    }  
}

const setType = (props: IButton) => {
    const { type } = props
    if (type === "Primary") {
        return css`
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
    } else if (type === "Secondary"){
        return css`
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
    } else if ( type === "Tertiary"){
        return css`
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

    }  
}
const setLabel = (props: IButton) => {
    const { label } = props
    if (label === "TextOnly") {
        return "Button"
    } else if (label === "IconRight"){
        return "Button +"

    } else if ( label === "IconOnly"){
        return "+"

    }  
}


const ButtonStyle = styled.button<IButton>`
    color: white;  
    cursor: pointer;
    text-align: center;
    border-radius: 100px;
    ${setSize}
    ${setType}

`

const Button = (props: IButton) => {
    return <ButtonStyle {...props}>{setLabel(props)}</ButtonStyle>
}

export default Button