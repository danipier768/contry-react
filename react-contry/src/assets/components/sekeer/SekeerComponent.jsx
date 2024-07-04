import { BsSearch } from "react-icons/bs";
const SekeerComponent = () => {
  return (
    <section className="container-sm container-sekeer">  
    <div className="row">
        <div className="col-12 ">
          <div className="row mb-5">
            <div className="col-12 col-md-6 ">
              <nav className="navbar p-0 mt-4">
                  <div className="container-fluid ps-0" id="busqueda">
                    <form className="d-flex button-busqueda p-2 w-75 rounded-2" role="search">
                      <button className="btn btn-outline-success border-0 d-flex" type="submit">
                      <BsSearch className="text-white" />
                      </button>
                      <input className="form-control me-2 border-0 text-white" id="input-princ" type="search" placeholder="Search for a country" aria-label="Search"/>
                    </form>
                  </div>
                </nav>
            </div>
            <div  className="col-12 col-md-6 mt-4 justify-content-lg-end justify-content-start">
              <div className="seletor d-flex justify-content-lg-end">
                <select   id="option-id" className="color-selector ps-2 pe-4 py-3 border-0 rounded-3">
                    <option value="ef">Filter by region</option>
                    <option ></option>
                </select>
              </div>
            </div>
          </div>
        </div>
    </div> 
  </section>
  )
}

export default SekeerComponent
