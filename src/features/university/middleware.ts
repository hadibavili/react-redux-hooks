import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

async function fetchUniversities(name: string): Promise<any> {
   return new Promise(resolve => {
      axios
         .get("http://universities.hipolabs.com/search?country=" + name)
         .then((res: any) => {
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
