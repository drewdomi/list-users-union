import "./styles.scss";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

type Props = {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
};

function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: Props) {

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pn-btn"
        onClick={prevPage}
      >
        {<VscChevronLeft/>}
      </button>
      {pages.map((pageNum, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(pageNum)}
            className={pageNum == currentPage ? "active" : ""}
          >
            {pageNum}
          </button>
        );
      })}
      <button
        className="pn-btn"
        onClick={nextPage}
      >
        {<VscChevronRight/>}
      </button>
    </div>
  );
}

export default Pagination;