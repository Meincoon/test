import arrowSmallImg from '../../img/icons/arrowSmall.svg';
import loadinglImg from '../../img/icons/loading.svg';
import { useState, useEffect } from 'react';

function Pagination() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 320);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container pagination">
      {isMobile ? (
        <button className="pagination__mobile-btn">
          Показать ещё 6
          <img src={loadinglImg} alt="arrow" />
        </button>
      ) : (
        <ul className="pagination__list">
          <li><a className="active" href="0">1</a></li>
          <li><a className="pagination__number" href="0">2</a></li>
          <li><a className="pagination__number" href="0">3</a></li>
          <li><a className="pagination__number" href="0">4</a></li>
          <li>...</li>
          <li><a className="pagination__number" href="0">10</a></li>
          <li><a className="pagination__btn" href="0">следующая<img src={arrowSmallImg} alt="" /></a></li>
        </ul>
      )}
    </div>
  );
}

export default Pagination;
