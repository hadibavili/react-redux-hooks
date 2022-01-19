import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://universities.hipolabs.com/search?country=";

async function fetchUniversities(name: string): Promise<any> {
   return new Promise(resolve => {
      axios.get(BASE_URL + name).then((res: any) => {
         resolve(res.data.slice(0, 10));
      });
   });
}

export const fetchUniversitiesAsync = createAsyncThunk(
   "university/fetchUniversities",
   async (name: string) => {
      const response = await fetchUniversities(name);

      return { universities: response, search: name };
   }
);
