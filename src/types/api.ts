type APIMethodType = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

interface IAPIRequestConfig {
  url: string;
  method?: APIMethodType;
  data?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export type { APIMethodType, IAPIRequestConfig };
