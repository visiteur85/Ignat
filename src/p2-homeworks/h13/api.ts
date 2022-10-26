import axios from "axios";

export const HomeworkApi = {
    firstRequest: (success: boolean) => {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
}