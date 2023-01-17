import axios from "axios";

const url = "https://disease.sh/v3/covid-19/countries";

export const fetchData = async () => {
  try {
    let { data } = await axios.get(url);
    const globalData = data.map((item) => {
      return {
        confirmed: item.cases,
        recovered: item.recovered,
        deaths: item.deaths,
      };
    });

    const newData = {
      confirmed: globalData
        .map((item) => item.confirmed)
        .reduce((acc, curr) => acc + curr, 0),
      recovered: globalData
        .map((item) => item.recovered)
        .reduce((acc, curr) => acc + curr, 0),
      deaths: globalData
        .map((item) => item.deaths)
        .reduce((acc, curr) => acc + curr, 0),
    };
    return newData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataByCountry = async (country) => {
  try {
    let { data } = await axios.get(`${url}/${country}`);
    let newData = {
      confirmed: data.cases,
      recovered: data.recovered,
      deaths: data.deaths,
    };
    return newData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    let { data } = await axios.get(url);
    return data.map((country) => country.country);
  } catch (error) {
    console.log(error);
  }
};
