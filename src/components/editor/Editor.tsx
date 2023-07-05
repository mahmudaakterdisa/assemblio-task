import React, { useState } from 'react';
import TextBox from '../../sharedComponent/textBox/TextBox';
import ImageButton from '../../sharedComponent/imageButton/ImageButton';
import PageEnumerationBox from '../../sharedComponent/pageEnumerationBox/PageEnumerationBox';

const Editor = () => {
    const headerTextBoxes = [
        { id: 1, text: 'Project title' },
        { id: 2, text: 'User name' },
        { id: 3, text: 'Date' },
    ];
    const stepTextBoxes = [
        { id: 1, text: 'Step Number' },
        { id: 2, text: 'Step name' },
    ];
    return (
        <div className='bg-green-200 w-9/12 px-40 py-10'>
            <div className='border-2 border-black '>

                {/* Header */}
                <div className='flex justify-between mt-2 mx-8 py-2 border-b-2 border-b-black'>

                    {/* leftPart */}
                    <div className='flex my-4'>
                        {headerTextBoxes.map((textBox) => (
                            <TextBox key={textBox.id} text={textBox.text} />
                        ))}
                    </div>

                    {/* rightPart */}
                    <div className='' >
                        <ImageButton />
                    </div>

                </div>

                {/* stepDetails */}
                <div className='mx-8 py-4'>
                    <div className=' flex'>
                        {stepTextBoxes.map((textBox) => (
                            <TextBox key={textBox.id} text={textBox.text} />
                        ))}
                    </div>
                </div>

                {/* assemblyImage */}
                <div className='mx-8 py-4 h-80'>
                    <ImageButton />
                </div>

                {/* Download */}
                <div className='mt-8 mb-40 mx-8 p-10 text-center text-2xl font-medium border-2 border-black'>
                    <button> Download Configuration </button>
                </div>

                {/* pageEnumerationBox */}
                <div className='mt-32 bg-blue-200'>
                    <PageEnumerationBox />
                </div>

            </div>
        </div>
    );
};

export default Editor;