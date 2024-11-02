import { useLoaderData, useParams } from "react-router-dom";
import { addToredReadList } from "../../utility/utility";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {image,bookName}=book

  const handleMarkAsRead=(id)=>{
    addToredReadList(id)
  }

  return (
    <div>
      <h3>Book Details:{bookId} </h3>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Book Name:{bookName}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <div className="flex gap-5">
           <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline btn-primary">Read</button>
           <button className="btn btn-primary">Wishlist</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
