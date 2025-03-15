# Vue E-Commerce Practice App

A simple e-commerce application built with Vue.js for practice purposes, utilizing modern tools and APIs.

## Features

- Product listing from FakeStore API
- State management with Pinia
- Unit testing with Vitest
- End-to-end testing with Cypress
- Responsive design

## Technologies Used

- Vue 3
- Pinia (State Management)
- FakeStore API (Data Source)
- Vitest (Unit Testing)
- Cypress (E2E Testing)
- Vite (Build Tool)
- Vue Router

## Project Setup

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Run development server
npm run dev
```

### Testing

```bash
# Run unit tests
npm run test:unit

# Run e2e tests
npm run test:e2e
```

### Build for Production

```bash
# Build for production
npm run build
```

## API Usage

This project uses the [FakeStore API](https://fakestoreapi.com/) to fetch product data. The following endpoints are used:

- `GET /products` - Get all products
- `GET /products/:id` - Get single product details

## Project Structure

src/  
├── assets/ # Static assets  
├── components/ # Vue components  
├── stores/ # Pinia stores  
├── router/ #  
├── views/ # Page components  
├── App.vue # Main application component  
└── main.js # Application entry point

## Demo

Check out the live demo of the application: [Live Demo](https://vue-commerce-c5e33.web.app/)

## Contributing

This is a personal practice project, but feel free to fork and modify it for your own learning purposes.

## License

MIT License
