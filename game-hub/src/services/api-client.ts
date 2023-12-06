import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api', 
    params:{
        key : '63d47f990f0f4678bcda424e03898364'
    }
})