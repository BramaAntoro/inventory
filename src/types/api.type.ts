export type TypeAPIResponse<T> = {
  success: boolean;
  status_code: number;
  message: string;
  data?: T;
};
