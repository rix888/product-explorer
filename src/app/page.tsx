"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low"];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Featured");

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "Price: Low to High") {
      return [...result].sort((a, b) => {
        const priceA = Number(a.price.replace("$", ""));
        const priceB = Number(b.price.replace("$", ""));
        return priceA - priceB;
      });
    }

    if (sortBy === "Price: High to Low") {
      return [...result].sort((a, b) => {
        const priceA = Number(a.price.replace("$", ""));
        const priceB = Number(b.price.replace("$", ""));
        return priceB - priceA;
      });
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Product Explorer
            </p>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#" className="transition hover:text-slate-900">
              Products
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Categories
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Favorites
            </a>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Modern shopping UI
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Discover products through a clean, polished interface
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            This mock product explorer is focused on layout, spacing, and
            presentation first — creating a strong frontend foundation before
            adding API data, filtering, and interactivity.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_220px_220px_auto]">
            <div>
              <label
                htmlFor="search"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Search products
              </label>
              <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a product..."
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="sort"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Sort by
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              >
                {sortOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                  setSortBy("Featured");
                }}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {filteredProducts.length} item
              {filteredProducts.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              No products found
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}