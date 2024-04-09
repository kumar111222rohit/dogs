// API types
  export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
  
  export interface RequestOptions {
    method: RequestMethod;
    headers: Record<string, string>;
    body?: string;
  }