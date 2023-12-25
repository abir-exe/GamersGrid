
import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://gamer-grid-101.vercel.app/'
})


const useAxiosPublic = () => { 
    return axiosPublic
};

export default useAxiosPublic;