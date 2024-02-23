"use client"

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
    name: string
    slug: string
    imageUrls: string[]
}

const ProductImages = ({imageUrls, name, slug}: ProductImagesProps) => {

    const localImagePath = "/products/" + slug + '/'

    const [currentImage, setCurrentImage] = useState(localImagePath + imageUrls[0])

    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl);
    }

    const imageLocalString = currentImage.replace("/products/" + slug + '/', '')

    return (
        <div className="flex flex-col">
            <div className="bg-accent h-[380px] w-full items-center justify-center flex">
                <Image 
                    src={currentImage} 
                    alt={name} 
                    height={0} 
                    width={0} 
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6 px-5">
                {imageUrls.map(imageUrl => (
                    <button 
                        key={imageUrl} 
                        className={
                            `bg-accent rounded-lg flex items-center justify-center h-[100px]
                            ${imageUrl === imageLocalString && 'border-2 border-primary border-solid'}
                            `}
                        onClick={() => handleImageClick(localImagePath + imageUrl)}
                        >
                        <Image
                            src={localImagePath + imageUrl}
                            alt={name}
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        />
                    </button>
                ))}
            </div>
        </div>

        
    );
}

export default ProductImages;