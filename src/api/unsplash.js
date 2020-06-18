import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{ Authorization: 'Client-ID OuM7-fT7U3QftR5gWYgFnI2lqDpM_t9mHjAmt5RltYg' }

})

