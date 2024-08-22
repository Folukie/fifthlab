import { RootState } from '@/app/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectUser = (state: RootState) => state.user

export const userSelector = createSelector(
    selectUser,
    state => state
)