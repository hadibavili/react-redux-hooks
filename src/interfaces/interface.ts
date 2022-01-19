export interface IThemeContext {
   isLogin: boolean;
   handleLogin?: () => void;
}

export type universityDetailType = {
   name: string;
   webPages: string[];
};

export type universityType = {
   country: string;
   domains: string[];
   name: string;
   web_pages: string[];
   alpha_two_code: string;
};

export type initialStateType = {
   universities: universityType[];
   status: string;
   search: string;
};

export type actionType = {
   payload: Partial<initialStateType>;
};
export type searchInputType = {
   title: string;
   value?: string;
   placeholder: string;
   id?: string;
   type: string;
   onChange: any;
};
