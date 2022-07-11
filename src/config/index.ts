export const enviroment = 'production';
export const API_POINT =
  enviroment !== 'production'
    ? 'http://192.168.124.141/emocar/api_mobile/'
    : 'https://www.emocarinsurancebrokerage.com/api_mobile/';
export const API_GENERATE_CODE =
  enviroment !== 'production'
    ? 'http://192.168.124.141/emocar/api_generate_code/'
    : 'https://www.emocarinsurancebrokerage.com/api_generate_code/';
