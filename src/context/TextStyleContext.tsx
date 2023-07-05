import React, { createContext, ReactNode, useState } from 'react';

type TextStyleContextType = {
    color: string;
    fontSize: string;
    font: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
    setFontSize: React.Dispatch<React.SetStateAction<string>>;
    setFont: React.Dispatch<React.SetStateAction<string>>;
};

const defaultTextStyle: TextStyleContextType = {
    color: '#000000',
    fontSize: '16px',
    font: 'Helvetica',
    setColor: () => { },
    setFontSize: () => { },
    setFont: () => { },
};

export const TextStyleContext = createContext<TextStyleContextType>(defaultTextStyle);

type TextStyleProviderProps = {
    children: ReactNode; // Explicitly define the children prop
};

export const TextStyleProvider: React.FC<TextStyleProviderProps> = ({ children }) => {
    const [color, setColor] = useState('#000000');
    const [fontSize, setFontSize] = useState('16px');
    const [font, setFont] = useState('Helvetica');

    return (
        <TextStyleContext.Provider value={{ color, fontSize, font, setColor, setFontSize, setFont }}>
            {children}
        </TextStyleContext.Provider>
    );
};
