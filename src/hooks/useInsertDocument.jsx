import { useState, useEffect, useReducer } from "react";
import {db, app} from '../firebase/config'
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading:null,
  error:null
}