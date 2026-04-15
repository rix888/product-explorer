import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="mt-3 text-slate-600">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          ← Back to products
        </Link>

        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4 text-lg font-semibold text-slate-900">
              {product.price}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              {product.description}
            </p>

            <button className="mt-8 inline-flex w-fit rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}