import {createReducer, on} from "@ngrx/store";
import {routerNavigationAction} from "@ngrx/router-store";

import {FeedStateInterface} from "../types/feedState.interface";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "./actions/getFeed.action";

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction, (state): FeedStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    routerNavigationAction,
    (): FeedStateInterface => initialState
  )
)
