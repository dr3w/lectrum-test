import produce from 'immer'
import { handleActions } from 'redux-actions'
import { meLoginActions } from 'store/me/actions'

export const defaultState = {
  data: {},
  isLoggedIn: false
}

/* eslint-disable no-param-reassign */
// NOTE: immer allows draft (state copy) mutations
export const baseReducer = produce(
  handleActions({
    [meLoginActions.success]: (draft, { payload: data }) => ({
      isLoggedIn: true,
      data
    })
  }, defaultState)
)
/* eslint-enable no-param-reassign */
