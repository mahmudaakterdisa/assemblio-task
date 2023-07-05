import React, { ChangeEvent, useState } from 'react';

const ImageButton = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [size, setSize] = useState<{ width: number; height: number }>({ width: 200, height: 200 });

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result && typeof e.target.result === "string") {
                setImageUrl(e.target.result);
            }
        };
        if (e.target?.files) {
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleResize = (e: ChangeEvent<HTMLInputElement>) => {
        const newSize = Number(e.target.value);
        setSize({
            width: newSize,
            height: newSize,
        });
    };

    return (
        <div className='border-2 border-black h-full'>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageUrl && (
                <div>
                    <img src={imageUrl} alt="Uploaded" style={{ width: size.width, height: size.height }} />
                    <label>
                        Resize image:
                        <input type="range" min="50" max="100" onChange={handleResize} />
                    </label>
                </div>
            )}
        </div>
    );
}

export default ImageButton;
