import { image } from "./image.interface";

export interface ImagesState {
    loading:boolean,
    images: ReadonlyArray<image>,
    imagePreview: boolean
}