import { createSelector } from '@ngrx/store';
import { ImagesState } from 'src/interfaces/image.state';
import { AppState } from '../app.state';

export const selectImagesFeature = (state: AppState) => state.imagesList;
 
export const selectListImages = createSelector(
    selectImagesFeature,
   (state:ImagesState ) => state.images
);

export const selectLoading = createSelector(
    selectImagesFeature,
   (state:ImagesState ) => state.loading
)

export const selectPreviewImage = createSelector(
    selectImagesFeature,
   (state:ImagesState ) => state.imagePreview
)