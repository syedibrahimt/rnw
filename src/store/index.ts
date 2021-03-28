import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import { reducer as AppReducer } from './app/Reducer'
import rootSaga from '../saga'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    main: AppReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
