
# Whatbytes - Frontend E-Commerce Store

This is a modern, responsive, and fully functional e-commerce store frontend built as a part of the Whatbytes frontend assignment. The application showcases a product listing page, a dynamic product detail page, and a complete, persistent shopping cart, all built with Next.js and the App Router.

**[Live Demo](https://whatbytes-frontend-nine.vercel.app/)**

<!-- ## Preview

| Home Page | Product Detail Page |
| :---: | :---: |
| *[Insert a screenshot of your home page here]* | *[Insert a screenshot of a product detail page here]* |

| Cart Page | Responsive (Mobile) View |
| :---: | :---: |
| *[Insert a screenshot of your cart page here]* | *[Insert a screenshot of the mobile view here]* | -->


## Features

- **Responsive Design**: A mobile-first approach ensuring a seamless experience on all devices (desktop, tablet, and mobile).
- **Product Listing & Filtering**:
    - Filter products by **Category**.
    - Filter products by a **Price Range** slider.
    - **Search** for products by name.
- **URL-Based State Management**: All filters (category, price, search) are stored in the URL, making the filtered views shareable.
- **Dynamic Product Pages**: Dynamically generated pages for each product using Next.js's App Router (`/product/[id]`).
- **Shopping Cart**:
    - Fully functional "Add to Cart" capability.
    - A dedicated cart page (`/cart`) to view and manage items.
    - Update item quantities or remove items directly from the cart.
    - **Persistent State**: The cart's contents are saved to `localStorage`, so it persists between browser sessions.
- **Conditional Rendering**: User-friendly messages are shown for "No products found" and "Your cart is empty".

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Trazer09/whatbytes-frontend.git](https://github.com/Trazer09/whatbytes-frontend.git)
   cd whatbytes-frontend