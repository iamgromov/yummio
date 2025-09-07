# Yummio

This is a React + TS + Vite project using [themealdb API](https://www.themealdb.com/)
Recently, there have been problems using the API without a VPN

## Setup

Clone project:

```bash
git clone https://github.com/iamgromov/yummio
cd yummio
```

Install the dependencies:

```bash
npm install
```

## API Configuration

To work with the themealdb API, you need to obtain an API key:

1. API Methods using the developer test key '1' in the URL

2. Create a `.env.local` file in the root of your project and add:

    `VITE_API_URL_KEY=your_api_key_here`

3. Use the key in your code via `import.meta.env.VITE_API_URL_KEY`

## Get Started

Start the dev server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Node v22.12.0
