import React from 'react';
import "@testing-library/jest-dom"; // 👈 This enables toBeInTheDocument()
import {render, screen} from '@testing-library/react';
import App from '../src/App';


// Mock import.meta.env for Jest
global.import = {
  meta: {
    env: {
      VITE_API_URL: "http://localhost:3000", // Set this to your backend URL
    }
  }
};


test("Affiche le titre du site", () => {
  render(<App />)
  const title = screen.getByText(/Ingredients on hand/i)
  expect(title).toBeInTheDocument()
})
