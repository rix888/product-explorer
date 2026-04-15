export type Product = {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    shortDescription: string;
    description: string;
};
  
export const products = [
    {
      id: 1,
      name: "Minimal Desk Lamp",
      category: "Home",
      price: "$48",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Clean, modern lighting designed for focused workspaces.",
      description:
        "A sleek desk lamp with a modern silhouette, perfect for workspaces, reading corners, and minimalist interiors.",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      category: "Tech",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Comfortable wireless audio for everyday listening.",
      description:
        "Comfortable wireless headphones with a clean design, ideal for daily listening, remote work, and travel.",
    },
    {
      id: 3,
      name: "Classic White Sneakers",
      category: "Fashion",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Timeless sneakers that pair with almost anything.",
      description:
        "Timeless white sneakers designed for everyday wear, pairing easily with casual and smart-casual outfits.",
    },
    {
      id: 4,
      name: "Leather Backpack",
      category: "Accessories",
      price: "$110",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Durable carry with a refined, everyday look.",
      description:
        "A refined leather backpack with a versatile look, suited for commuting, travel, and daily essentials.",
    },
    {
      id: 5,
      name: "Ceramic Coffee Mug",
      category: "Home",
      price: "$22",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Simple mug built for slow mornings and coffee breaks.",
      description:
        "A simple ceramic mug with a clean form, made for slow mornings, coffee breaks, and warm drinks anytime.",
    },
    {
      id: 6,
      name: "Smart Watch",
      category: "Tech",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Track fitness, notifications, and daily activity with ease.",
      description:
        "A modern smartwatch built for convenience, fitness tracking, and staying connected throughout the day.",
    },
];
  
export const categories = [
    "All Categories",
    "Home",
    "Tech",
    "Fashion",
    "Accessories",
];