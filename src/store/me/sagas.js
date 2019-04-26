import axiosCreator from 'axios'
import { takeLatest, all, put, call } from 'redux-saga/effects'
import { meLoginActions } from 'store/me/actions'
import { URL_API } from 'common/const-api'

const axios = axiosCreator.create({
  baseURL: URL_API,
  timeout: 1000
})

export function* userRegisterFlow({ payload: data }) {
  try {
    const response = yield call([axios, 'post'], '/user/login', {
      ...data
    })

    yield put(meLoginActions.success(response.data.data))
  } catch (e) {
    console.error('userRegisterFlow', e)
    yield put(meLoginActions.failure(e))
  }
}

export function* baseSagas() {
  yield all([
    takeLatest(meLoginActions.request, userRegisterFlow)
  ])
}
