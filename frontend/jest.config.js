export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["@babel/preset-env", "@babel/preset-react"] }]
  },
  moduleFileExtensions: ["js", "jsx", "json"],
  globals: {
    "import.meta": {
      env: {
        VITE_API_URL: "http://localhost:3000" // Simule une URL backend pour Jest
      }
    }
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy" // Mocks CSS files
  },
  transformIgnorePatterns: [],
  setupFiles: ["./jest.setup.js"] // 👈 Add this line
};
