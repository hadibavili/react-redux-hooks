import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import SearchUniversity from "./SearchUniversity";
import University from "./University";

const Dashboard: React.FC = () => {
   const { universities, search } = useAppSelector(state => state.universities);
   useEffect(() => {}, []);

   return (
      <>
         <div
            className="col-md-12 justify-content-center m-auto mt-5"
            style={{ width: 300 }}
         >
            <SearchUniversity />
         </div>
         <h1>University of {search || "iran"} </h1>
         <div className="row mt-5">
            {universities.map((d, i) => (
               <div className="col-md-3" key={i}>
                  <University name={d.name} webPages={d.web_pages} />
               </div>
            ))}
         </div>
      </>
   );
};
export default Dashboard;
