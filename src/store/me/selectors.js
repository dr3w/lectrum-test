import { createSelector } from 'reselect'

const reducerState = state => state.base || {}

export const baseSelector = createSelector(
  reducerState,
  base => base
)
