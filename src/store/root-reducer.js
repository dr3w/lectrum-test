import { combineReducers } from 'redux'

import { baseReducer as base } from 'store/me/reducer'

export const rootReducer = combineReducers({
  base
})
