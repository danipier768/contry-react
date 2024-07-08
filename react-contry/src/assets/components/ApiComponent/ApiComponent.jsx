import { useState, useEffect } from 'react';
import CardComponent from '../card/CardComponent';



const ApiComponent = ({valueInput, updateRegion, valReg}) => {

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
        deleteRep(data)

      })

      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (valueInput.length>0) {
      filerSekeer()
    }else{
      RegValueFil()
    }
    
    
  }, [valueInput, valReg]);

  const filerSekeer = () => {
    if (valueInput.length > 0) {
      const filSearch = dataTemp.filter(dat => dat.name.common.toLowerCase().includes(valueInput.toLowerCase()))
      setData(filSearch)
    }else{
      setData(dataTemp)
    }
    
  }


  const RegValueFil = () => {
    if (valReg.length > 3) {
      const filRegion = dataTemp.filter((res => res.region.toLowerCase().includes(valReg.toLowerCase())))
      setData(filRegion)
    }else if(valReg === 'ef'){
      setData(dataTemp)
    }
    
  }
  

  

  const deleteRep = (regionsArray) => {
    const regions = regionsArray.map((element)=> element.region);
    const oneRegion =  new Set(regions)
    const result = [...oneRegion]
    updateRegion(result)
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
