import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AppTypes } from './Actions'
import {
  InitialStateType,
} from '../../model/state'

export const sampleReducer = (
  state: InitialStateType,
  { userData }: { userData: string },
) => ({
  ...state,
})

export const reducer = createReducer(INITIAL_STATE, {
  [AppTypes.SAMPLE_ACTION]: sampleReducer,
})
