import React, { useContext, useState } from 'react';

type TextBoxProps = {
    key: number;
    text: string;
};

const TextBox: React.FC<TextBoxProps> = ({ key, text }) => {
    const [editable, setEditable] = useState(true);
    return (
        <div className=' px-10 py-5 border-2 border-black rounded-sm' contentEditable={editable} onBlur={() => setEditable(false)}>
            {text}
        </div>
    );
};

export default TextBox;