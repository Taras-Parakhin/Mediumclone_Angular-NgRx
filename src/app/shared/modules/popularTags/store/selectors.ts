import {createFeatureSelector, createSelector} from "@ngrx/store";

import {PopularTagsStateInterface} from "../types/popularTagsState.interface";

export const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsStateInterface>('popularTags')

export const isLoadingSelector = createSelector(popularTagsFeatureSelector, (popularTagState: PopularTagsStateInterface) => popularTagState.isLoading)

export const popularTagsSelector = createSelector(popularTagsFeatureSelector, (popularTagsState: PopularTagsStateInterface) => popularTagsState.data)

export const errorSelector = createSelector(popularTagsFeatureSelector, (popularTagsState: PopularTagsStateInterface) => popularTagsState.error)
