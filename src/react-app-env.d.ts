/// <reference types="react-scripts" />
declare namespace React {
  interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      REACT_APP_API_URI: 'https://qnfpyomao9.execute-api.us-east-2.amazonaws.com/default/register-users'
  }
}