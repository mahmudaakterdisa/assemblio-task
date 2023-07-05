import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import TextBox from '../../sharedComponent/textBox/TextBox';
import ImageButton from '../../sharedComponent/imageButton/ImageButton';
import PageEnumerationBox from '../../sharedComponent/pageEnumerationBox/PageEnumerationBox';
import ConfigurationExporter from '../configurationExporter/ConfigurationExporter';

const Editor = () => {
    const headerTextBoxes = useMemo(() => [
        { id: 1, text: 'Project title' },
        { id: 2, text: 'User name' },
        { id: 3, text: 'Date' },
    ], []);

    const stepTextBoxes = useMemo(() => [
        { id: 1, text: 'Step Number' },
        { id: 2, text: 'Step name' },
    ], []);

    interface TextBoxProps {
        id: number;
        text: string;
    }

    const renderTextBoxes = (textBoxes: TextBoxProps[]) => textBoxes.map((textBox) => (
        <TextBox key={textBox.id} text={textBox.text} />
    ));

    return (
        <div className='bg-green-200 w-9/12 px-40 py-10'>
            <div className='border-2 border-black '>

                <div className='flex justify-between mt-2 mx-8 py-2 border-b-2 border-b-black'>
                    <div className='flex my-4'>
                        {renderTextBoxes(headerTextBoxes)}
                    </div>
                    <div className='' >
                        <ImageButton />
                    </div>
                </div>

                <div className='mx-8 py-4'>
                    <div className=' flex'>
                        {renderTextBoxes(stepTextBoxes)}
                    </div>
                </div>

                <div className='mx-8 py-4 h-80'>
                    <ImageButton />
                </div>

                <div className='mt-8 mb-40 mx-8 p-10 text-center text-2xl font-medium border-2 border-black'>
                    <ConfigurationExporter />
                </div>

                <div className='mt-32 bg-blue-200'>
                    <PageEnumerationBox />
                </div>
            </div>
        </div>
    );
};

TextBox.propTypes = {
    text: PropTypes.string.isRequired,
};

export default React.memo(Editor);
