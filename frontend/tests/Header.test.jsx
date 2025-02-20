import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Header from "../src/components/Header"

test("should display the text of the header", () => {
  render(<Header />)
  const title = screen.getByText(/Cheffe Délia/i)
  expect(title).toBeInTheDocument()
}
)
