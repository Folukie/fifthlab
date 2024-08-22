import { RootState } from '@/app/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCountry = (state: RootState) => state.country

export const countrySelector = createSelector(
    selectCountry,
    state => state
)