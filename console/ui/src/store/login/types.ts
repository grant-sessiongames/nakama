export interface LoginRequest
{
  username: string,
  password: string,
  remember: boolean
};

export interface Token
{
  token: string
};

export type ApiResponse = Record<string, any>;

export enum LoginActionTypes
{
  LOGIN_REQUEST = '@@login/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@login/LOGIN_SUCCESS',
  LOGIN_ERROR = '@@login/LOGIN_ERROR'
};

export interface LoginState
{
  readonly loading: boolean,
  readonly data: Token,
  readonly errors?: string
};
