import { GrInfo } from "react-icons/gr";

const HeadComponent = () => {
  return (
    <section className="container-head">
      <div className="container py-4">
          <div className="row">
              <div className="col-8">
                  <h1 className="text-white">Where in the world?</h1>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center ">
                  <GrInfo className="text-white" />
                  <button  className="text-white button border-0" id="">Ligth Mode</button>
              </div>
          </div>
          
      </div>
   
    </section>
  )
}

export default HeadComponent
