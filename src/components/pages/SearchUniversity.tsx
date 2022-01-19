import Input from "../UI/Input";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchUniversitiesAsync } from "../../features/university/middleware";

const SearchUniversity: React.FC = () => {
   const dispatch = useAppDispatch();
   const [value, setValue] = useState("");
   const [btnValue, setBtnValue] = useState("");

   const inputChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
      const value = e.currentTarget.value;
      if (value === "") return setValue("nothing");
      setValue(value);
   };

   const btnOnclickHandler = () => {
      setBtnValue(value);
   };

   useEffect(() => {
      dispatch(fetchUniversitiesAsync(btnValue));
   }, [btnValue]);

   return (
      <>
         <div className="d-flex align-items-end">
            <Input
               title="Country Name"
               placeholder="Iran"
               value={value}
               type="text"
               onChange={inputChangeHandler}
            />
            <button
               type="submit"
               className="btn btn-primary"
               style={{ marginLeft: 10 }}
               onClick={btnOnclickHandler}
            >
               search
            </button>
         </div>
      </>
   );
};

export default SearchUniversity;
