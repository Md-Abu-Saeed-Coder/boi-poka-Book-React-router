const Book = ({ book }) => {
  const { bookName, image, author } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-xl p-4">
      <figure className="py-8">
        <img className="w-[134px] h-[166px]"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By:{author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
