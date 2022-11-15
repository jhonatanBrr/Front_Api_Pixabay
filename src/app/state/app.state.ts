import { ImagesState } from "src/interfaces/image.state";
import { ActionReducerMap } from "@ngrx/store"
import { imagesReducer } from "./reducers/images.reducer";

export interface AppState {
    imagesList: ImagesState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    imagesList: imagesReducer
}