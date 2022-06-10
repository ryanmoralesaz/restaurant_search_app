import axios from 'axios';
import Config from 'react-native-config';
import { REACT_APP_API_KEY } from "@env";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer <<YOUR YELP API KEY HERE>>`,//${REACT_APP_API_KEY}
    }
});