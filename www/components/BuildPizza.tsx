import { useRouter } from "next/router";
import React from "react";
import Toppings from "./Toppings"

type Props = {};

export default function BuildPizza({}: Props) {
  const router = useRouter();
  const queryToppings = router.query.build;
  const selectedToppings = Array.isArray(queryToppings)
    ? queryToppings
    : queryToppings?.length
    ? [queryToppings]
    : [];

  return (
    <div>
      <article className="prose mb-12">
        <h2>Choose your toppings!</h2>      
      </article>
      <Toppings />
      <button className="btn btn-wide" disabled={!selectedToppings.length}>
        Order!
      </button>
    </div>
  );
}
