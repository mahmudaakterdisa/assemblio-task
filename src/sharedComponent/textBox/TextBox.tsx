import React, { useContext, useState } from 'react';
import { TextStyleContext } from '../../context/TextStyleContext';

type TextBoxProps = {
    key: number;
    text: string;
};

const TextBox: React.FC<TextBoxProps> = ({ key, text }) => {
    const { color, fontSize, font } = useContext(TextStyleContext);
    const [editable, setEditable] = useState(true);
    return (
        <div className=' px-10 py-5 border-2 border-black rounded-sm' contentEditable={editable} onBlur={() => setEditable(false)} style={{ color, fontSize, fontFamily: font }}>
            {text}
        </div>
    );
};

export default TextBox;