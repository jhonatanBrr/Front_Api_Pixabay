import { createAction, props } from '@ngrx/store';
import { image } from 'src/interfaces/image.interface';
 
export const loadImages = createAction(
  '[Images List] Load Images',
);

export const loadedImages = createAction(
  '[Images List] Loaded success',
  props<{ images:image[] }>()
)

export const previewImages = createAction(
  '[Image Preview] Loaded success',
  props<{ imagePreview:image[] }>()
)