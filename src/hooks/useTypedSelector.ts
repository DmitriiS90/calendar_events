import { RootState } from './../store/index.ts';
import React from 'react'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux';

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector