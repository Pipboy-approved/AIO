# AIO (All In One)

A modern Single Page Application (SPA) built with React, TypeScript, and Vite. This project demonstrates a responsive banking interface with features like language selection, search functionality, and comprehensive banking information.

## Features

- Modern, responsive UI design
- Language selection (EN/FR)
- Search functionality
- Header with navigation and user controls
- Interactive menu system
- Dynamic content stage
- Comprehensive footer with banking information
- Hot Module Replacement (HMR) for development
- TypeScript for type safety
- CSS for styling

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Pipboy-approved/AIO.git
cd AIO
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
AIO/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Menu.tsx
│   │   ├── Stage.tsx
│   │   └── Footer.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   ├── img/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── styles.css
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Project Link: [https://github.com/Pipboy-approved/AIO](https://github.com/Pipboy-approved/AIO)
