import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props)=>{
    if(props.count===0){
        return(
            <div className='error-dialog'>No images found</div>
        )
    }else{
    console.log('truw');
        
        const images =props.images.map((image)=>{
            return (<ImageCard key={image.id} image={image}/>)
        })
        return(
            <div className="image-list">
                {images}
            </div>
        )
    }
}

export default ImageList;