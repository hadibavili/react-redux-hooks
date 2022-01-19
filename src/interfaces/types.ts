export type Action =
   | { type: "EMAIL"; payload: any }
   | { type: "PASSWORD"; payload: any };

export type State = {
   email: string;
   password: string;
};
