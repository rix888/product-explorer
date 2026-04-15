import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative mb-5 h-56 overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            {product.category}
          </span>
        </div>
      </div>

      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {product.shortDescription}
          </p>
        </div>

        <span className="shrink-0 text-sm font-semibold text-slate-900">
          {product.price}
        </span>
      </div>

      <Link
        href={`/products/${product.id}`}
        className="mt-4 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:border-slate-900 hover:bg-slate-700"
      >
        View Product
      </Link>
    </article>
  );
}