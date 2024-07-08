

// eslint-disable-next-line react/prop-types
const CardComponent = ({item}) => {
  return (    
              <div  className="col-12 col-md-6 col-lg-4 col-xl-3 mt-2 d-flex justify-content-center justify-content-lg-between">
                  <div className="card mb-3" id="card" style={{ width: '18rem' }}>
                      <img src={item.flags.png} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h4 className="text-white mb-4">{item.name.common}</h4>
                              <p className="text-white"><strong>Population: </strong>{item.population}</p>
                              <p className="text-white"><strong>Región: </strong>{item.region}</p>
                              <p className="text-white"><strong>Capital: </strong>{item.capital}</p>
                        </div>
                  </div>
              </div>
  )
}

export default CardComponent
