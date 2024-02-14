import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

export default function Product() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const {
    data: product,
    loading,
    error,
    fetcher,
  } = useFetch("https://fakestoreapi.com");

  useEffect(() => {
    fetcher({ endPoint: `/products/${productID}` });
  }, []);

  if (loading || !product) return <div>loading...</div>;
  if (error) return <div>error... {error.message}</div>;

  const { title, image, description } = product;

  return (
    <article>
      <h4> {title} </h4>
      <img src={image} />
      <p>{description}</p>
      <button onClick={() => navigate(-1)}> back </button>
    </article>
  );
}
