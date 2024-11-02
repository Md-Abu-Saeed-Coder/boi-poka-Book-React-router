import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, image, author, tags, category,bookId } = book;

  return (
    <Link to ={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-4 border">
        <figure className="py-8 border rounded-2xl">
          <img className="w-[134px] h-[166px]" src={image} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex gap-3">
            {tags.map((tag,index) => (
              <button key={index} className="btn bg-[#22be0a1e] btn-xs text-[#23BE0A]">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2> 
          <p>By:{author}</p>
          <p className="border border-dashed mt-2"></p>
          <div className="card-actions justify-between mt-4">
            <div className="">Fashion: {category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
