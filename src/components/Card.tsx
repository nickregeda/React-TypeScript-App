import React, {useState} from 'react';
import {FC} from 'react'

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({width, height, variant, children, onClick}) => {
    const [state, setState] = useState(0)
    return (
        <div
            onClick={() => {
                setState(state + 1);
                onClick(state)
            }}
            style={{
                width,
                height,
                border: variant === CardVariant.outlined ? 'solid 1px black' : 'none',
                background: variant === CardVariant.primary ? 'lightgray' : ''
            }}>
            {children}
        </div>
    );
};

export default Card;