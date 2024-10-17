import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import counterSlice  from "./counterSlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<Rootstate> = useSelector