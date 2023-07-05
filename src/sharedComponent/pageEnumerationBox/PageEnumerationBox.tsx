import React, { useState, CSSProperties } from 'react';
import { LuAlignLeft, LuAlignCenter, LuAlignRight } from "react-icons/lu";
import TextBox from '../textBox/TextBox';


const PageEnumerationBox = () => {
    const [alignment, setAlignment] = useState<CSSProperties['right']>('0%');

    return (
        <div className='relative'>
            <div style={{ right: alignment }} className='absolute bottom-0'>
                <TextBox key={0} text={'Page Enum'} />
                <div className='flex justify-around'>
                    <button onClick={() => setAlignment('87%')}><LuAlignLeft /></button>
                    <button onClick={() => setAlignment('40%')}><LuAlignCenter /></button>
                    <button onClick={() => setAlignment('0%')}><LuAlignRight /></button>
                </div>
            </div>
        </div>
    );
}

export default PageEnumerationBox;
