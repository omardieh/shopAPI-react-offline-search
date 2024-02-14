import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Products() {
  const {
    data: products,
    loading,
    error,
    fetcher,
  } = useFetch("https://fakestoreapi.com");

  useEffect(() => {
    fetcher({ endPoint: "/products" });
  }, []);

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (products)
      setFiltered(
        JSON.parse(JSON.stringify(products)).filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      );
  }, [query, products]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error... {error.message}</div>;

  return (
    <section className="Products">
      <div className="Search">
        <h4>Search Product</h4>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="ProductsList">
        {filtered.map(({ id, title, image, description }) => (
          <article className="ProductCard" key={id}>
            <h4> {title} </h4>
            <img src={image} />
            <p>
              {description.length > 200
                ? `${description.slice(0, 200)}...`
                : description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
