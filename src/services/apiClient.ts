import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3816f937ff3441e5a89dcdb0d524a0a0',
  },
});
