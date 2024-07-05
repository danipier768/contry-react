import { useState, useEffect } from 'react';
import CardComponent from '../card/CardComponent';

const ApiComponent = ({valueInput}) => {
  const filSearch = []
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setDataTemp(data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {

    console.log()
    filerSekeer()
  }, [valueInput]);

  const filerSekeer = () => {
    if (valueInput.length > 1) {
      filSearch = dataTemp.filter(dat => dat.name.common.toLowerCase().includes(valueInput.toLowerCase()))
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container container-card">
      <div className="row m-0" id="card-id">

      {data.map((item, index) => (
        <CardComponent key={index} item={item} />
      ))}
      </div>
    </section>
  );
};

export default ApiComponent;
