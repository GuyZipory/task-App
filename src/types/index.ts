export type User = {
  email: string;
  uid: string;
};

export type Task = {
  id: string;
  name: string;
  isComplete: boolean;
  uid: string;
};

export type LanguageOptions = 'he' | 'en';

export type LanguageOptionsSelectObject = {
  value: LanguageOptions;
  label: string;
};
