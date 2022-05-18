import React from "react";
import "./App.css";
import CountryPicker from "./Components/CountyPicker";
import Card from "./Components/Card";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";
import { fetchData } from "./api/index";
import { fetchCountries, fetchDataByCountry } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsData: {},
      countries: [],
      country: "Global",
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({
      cardsData: data,
    });
    const countries = await fetchCountries();
    this.setState({
      countries: countries,
    });
  }

  handleChange = async (country) => {
    const data = await fetchDataByCountry(country);
    this.setState({
      cardsData: data,
      country: country,
    });
  };

  render() {
    const { cardsData, countries, country } = this.state;
    return (
      <div>
        <CountryPicker data={countries} handleChange={this.handleChange} />
        <Card data={cardsData} country={country} />
        <Chart data={cardsData} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
