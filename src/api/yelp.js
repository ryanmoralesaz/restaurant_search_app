import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Yp09otQMR1ffRuTMfuWFYiNWv5s7NvR1bW4HajkX94qT-wQ57Hzb8HwbwwLbQPj9bVhEpu691ucqZsdKnjcDESR9ha0mKUDy_h05DIXljGcnByhTpz1qwUqaJ_iKYnYx',
    }
});