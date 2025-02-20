import { render, screen } from '@testing-library/react'
import Main from '../src/components/Main'
import React from 'react'
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event'


test("Main should display a button to add an ingredient", async () => {
render(<Main />)

const input = screen.getByRole("textbox")
const button = screen.getByRole("button", {name: "+ Add ingredient"})

await userEvent.type(input, "eggs")
await userEvent.click(button)

expect(screen.getByText(/eggs/i)).toBeInTheDocument()
})

test("Should'nt display an emplty string if input is empty", async () => {
  render(<Main />)

const button = screen.getByRole("button", {name: "+ Add ingredient"})
const listItems = screen.getAllByRole("listitem").length

await userEvent.click(button)
const newListItem = screen.getAllByRole("listitem").length

expect(listItems === newListItem).toBe(true)
})
