import axios from 'axios';


const KEY='AIzaSyC_vCD5PXzUC_AW3i8YNGPIraYX62Iwkok';

export default axios.create ({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params :{
        part :'snippet',
        maxResults:5,
        key:KEY
    }
});