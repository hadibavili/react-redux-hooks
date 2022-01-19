import { searchInputType } from "../../interfaces/interface";

const Input: React.FC<searchInputType> = ({
   type = "text",
   id,
   placeholder = "insert value",
   title = "input",
   value,
   onChange,
}) => {
   return (
      <div>
         <label htmlFor={id}>{title}:</label>
         <input
            type={type}
            className="form-control mt-1"
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{ width: "100%", margin: "0px auto" }}
         />
      </div>
   );
};

export default Input;
