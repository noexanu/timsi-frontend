import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import noteInputReducer from '../components/NoteInputSlice';

export const store = configureStore({
  reducer: {
    // noteInput: noteInputReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
