import React, { ChangeEvent, useContext } from 'react';
import { TextStyleContext } from '../../context/TextStyleContext';

type InputChange = ChangeEvent<HTMLInputElement>;

const handleChange = (
    setFn: React.Dispatch<React.SetStateAction<string>>,
    valueTransformer: (value: string) => string = (v) => v
) => (event: InputChange) => {
    setFn(valueTransformer(event.target.value));
};

const Toolbar = () => {
    const {
        color,
        setColor,
        fontSize,
        setFontSize,
        font,
        setFont,
    } = useContext(TextStyleContext);

    return (
        <div className='bg-red-200 w-3/12 p-10 '>
            <div className='border-2 border-black p-10 flex flex-col gap-y-5'>
                <div className='border-2 border-black rounded-md p-6 text-center text-4xl font-medium '>
                    <h3>Text Style</h3>
                </div>
                <div className=' border-2 border-black rounded-2xl flex flex-col gap-y-2 py-6 px-10'>
                    <label>
                        Font:
                        <input
                            className='bg-transparent ml-2'
                            type="text"
                            value={font}
                            onChange={handleChange(setFont)}
                        />
                    </label>
                    <label>
                        Size:
                        <input
                            className='bg-transparent ml-2'
                            type="number"
                            value={parseInt(fontSize, 10)}
                            onChange={handleChange(setFontSize, (value) => `${value}px`)}
                        />
                    </label>
                    <label>
                        Color:
                        <input
                            className='bg-transparent ml-2'
                            type="color"
                            value={color}
                            onChange={handleChange(setColor)}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
