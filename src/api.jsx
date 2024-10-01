import axios from 'axios';

const API_KEY = 'a74a2672536cf6ecfeddeff1e5b214db53f166550fe9d36e29b4a4fd9f5a79bb';

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
