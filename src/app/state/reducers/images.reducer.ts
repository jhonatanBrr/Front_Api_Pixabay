import { createReducer, on } from '@ngrx/store';
import { ImagesState } from 'src/interfaces/image.state';
import { loadedImages, loadImages, previewImages } from '../actions/images.actions';


export const initialState:ImagesState = { loading:false , images:[], imagePreview:false };

export const imagesReducer = createReducer(
    initialState,
    on(loadImages, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedImages, (state , {images}) => {
        return { ...state, loading: false ,images: images}
    }),
    on(previewImages, (state , {imagePreview}) => {
        console.log(imagePreview);
        
        return { ...state,imagePreview: imagePreview}
    })    
);