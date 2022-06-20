import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const fetchCountriesData = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryInfo = async (country_url) => {
  try {
    const { data } = await axios.get(country_url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHistoricalData = async () => {
  try {
    const { data } = await axios.get(`${url}/historical/all?lastdays=120`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
