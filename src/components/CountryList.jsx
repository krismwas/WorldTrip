import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = cities.reduce((arrAcc, city) => {
    if (!arrAcc.map((el) => el.country).includes(city.country))
      return [...arrAcc, { country: city.country, emoji: city.emoji }];
    else return arrAcc;
  }, []);

  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
