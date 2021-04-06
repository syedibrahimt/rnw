import { takeLatest, all, call } from 'redux-saga/effects';
import { AppTypes } from '../store/app/Actions';
import UserActions from '../store/app/Actions';
import { serviceClient } from '../services';
/**
 * A saga can contain multiple functions.
 *
 * This saga used for user login.
 */
// syed: this file has all methods defined which are invoked via user action(defined in matchDispatchToProps/UI and Action.js)

const getMainState = (state: any) => state.user;

export function* sampleSaga(data: ReturnType<typeof UserActions.userLogin>) {
  const { username, password, domain, successFn, failureFn } = data;
  const userData: string = yield call(
    serviceClient.sampleService,
    username,
    password,
    domain,
  );
  if (userData) {
    console.log('######################', userData);
    yield call(successFn, userData);
  } else {
    yield call(failureFn);
  }
}

export default function* root() {
  yield all([takeLatest(AppTypes.SAMPLE_ACTION, sampleSaga)]);
}
