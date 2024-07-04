import { useState, useEffect } from 'react';
import CardComponent from './assets/components/card/CardComponent';

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all') // Reemplaza con la URL de tu API
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map(item => (
        <CardComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ApiComponent;
