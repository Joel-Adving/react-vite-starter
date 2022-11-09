export type Data = Record<string, unknown>;

export type ErrorResponse = {
  status: number | undefined | null;
  statusText: string | undefined | null;
  message: string | undefined | null;
  data: Data;
};
