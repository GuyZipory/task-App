export type User = {
  email: string;
  uid: string;
  defaultLanguage: string;
};

export type Task = {
  id: string;
  name: string;
  isComplete: boolean;
  uid: string;
};
