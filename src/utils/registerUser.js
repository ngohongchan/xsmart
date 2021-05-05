import axios from 'axios';

import { url } from './url';

const registerUser = async ({ email, username, password }) => {
    const response = await axios.post(`${url}/auth/local/register`, { username, email, password  })
        .catch(err => {
            console.log(err);
        });

        return response;
}

export default registerUser;

// const registerUser = async ({ email, phoneNumber, username, passRandom }) => {
//    const response = await axios.post(`${url}//auth/local/register`, { email, phoneNumber, username, passRandom })
//         .catch(err => {
//             message(err)
//         });

//         return response;
// }