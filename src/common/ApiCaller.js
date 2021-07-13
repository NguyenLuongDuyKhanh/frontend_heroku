import axios from 'axios';

URL ='https://develop-personal-plan.herokuapp.com'

export async function GetExperiences(){
    const response = await axios({
        method: 'get',
        url: `${URL}/experience`,
        header: {'content-type': 'application/json'},
    });
    return response.data;
}

export async function GetExperienceWithID(){
    const response = await axios({
        method: 'get',
        url: `${URL}/experience/{id}`,
        header: {'content-type': 'application/json'},
    });
    return response.data;
}
