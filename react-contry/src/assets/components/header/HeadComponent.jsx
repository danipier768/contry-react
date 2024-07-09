import { GrInfo } from "react-icons/gr";
import { useState } from "react";

const HeadComponent = () => {
  const [showcontent, setShowContent] = useState(true);
  const [textContent, setTextContent] = useState('Light Mode');

  const changeMode = () => {
    if (showcontent) {
      setTextContent('Dark Mode');
      setShowContent(false);
      document.body.classList.add('dark-mode');
    } else {
      setTextContent('Light Mode');
      document.body.classList.remove('dark-mode');
      setShowContent(true);
    }
  };

  return (
    <section className="container-head">
      <div className="container py-4">
        <div className="row">
          <div className="col-8">
            <h1 className="text-white">Where in the world?</h1>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <GrInfo className="text-white icon" />
            <button onClick={changeMode} className="text-white button border-0">
              {textContent}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadComponent;
