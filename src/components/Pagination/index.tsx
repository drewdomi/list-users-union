import "./styles.scss";

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

  return (
    <div className="pagination">
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
    </div>
  );
}

export default Pagination;