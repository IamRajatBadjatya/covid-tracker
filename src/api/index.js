import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    const changedURL =  country ? `${url}/countries/${country}` : url;
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changedURL);
        return   {confirmed, recovered, deaths, lastUpdate};
    }
    catch(e) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map(({totalConfirmed, reportDate, deaths: {total: totalDeath}}) => {
           return {
               totalConfirmed,
               totalDeath,
               reportDate
           } 
        });
        console.log('dailyData', modifiedData);
        return  modifiedData;
    }
    catch(e) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        console.log('countries', countries.map(country => country.name));
        return  countries.map(country => country.name);
    }
    catch(e) {

    }
}


