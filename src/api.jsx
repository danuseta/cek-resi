import axios from 'axios';

const API_KEY = '937ee08730ec3c221a8666fed6fba8c051501797b1bd5d8360fd609462a4e707';

export const trackPackage = async (courier, awb) => {
  try {
    const response = await axios.get('https://api.binderbyte.com/v1/track', {
      params: {
        api_key: API_KEY,
        courier: courier,
        awb: awb,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tracking data');
  }
};