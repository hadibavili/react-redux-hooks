import { universityDetailType } from "../../interfaces/interface";
import styled from "styled-components";

const UniversityBox = styled.div`
   background-color: #f0f0f0;
   padding: 10px 20px;
   margin-top: 10px;
   border-radius: 10px;
`;

const University = ({ name, webPages }: universityDetailType) => {
   return (
      <UniversityBox>
         <h5>Name: {name}</h5>
         <p>
            Webpages:{" "}
            {webPages.map(w => (
               <a href="{w}">{w}</a>
            ))}
         </p>
      </UniversityBox>
   );
};

export default University;
