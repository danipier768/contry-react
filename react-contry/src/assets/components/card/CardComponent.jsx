

const CardComponent = () => {
  return (
    <section className="container container-card">
      <div className="row m-0" id="card-id">
              <div  className="col-12 col-md-6 col-lg-4 col-xl-3 mt-2 d-flex justify-content-center justify-content-lg-between">
                  <div className="card mb-3" id="card" style={{ width: '18rem' }}>
                      <img src="https://flagcdn.com/w320/wf.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h4 className="text-white mb-4">Title</h4>
                              <p className="text-white"><strong>Population: </strong></p>
                              <p className="text-white"><strong>Región: </strong></p>
                              <p className="text-white"><strong>Capital: </strong></p>
                        </div>
                  </div>
              </div>
      </div>
  </section>
  )
}

export default CardComponent
