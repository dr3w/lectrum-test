import { createAction } from 'redux-actions'

export const createRequestAction = base => (
  ['request', 'success', 'failure'].reduce((acc, action) => {
    const title = `${base}/${action}`

    acc[action] = createAction(
      title.toUpperCase(),
      payload => payload
    )

    return acc
  }, {})
)
