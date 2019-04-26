import { baseSagas } from 'store/me/sagas'

const sagas = [baseSagas]

export const rootSaga = runSaga => sagas.map(saga => runSaga(saga))
