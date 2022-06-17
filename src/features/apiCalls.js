import { end, failure, start, success } from "./appSlice";
import axios from 'axios';

const URL = process.env.REACT_APP_URL;


export const handleSubmit = async (dispatch,details) => {
    try {
       
        dispatch(start());
        await axios.post(`${URL}`,details);
        dispatch(success());

        setTimeout(() => dispatch(end()),5000);
        return true;
    } catch (error) {
        dispatch(failure());
        setTimeout(() => dispatch(end()),5000);
        console.log(error);
        throw error;
    }


}