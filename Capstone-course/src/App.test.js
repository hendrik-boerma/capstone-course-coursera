import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";



test("Checks if redirects after all field is filled", () => {
  render(<BookingForm />)
  const nameElement = screen.getByTestId('name-element');
  const emailElement = screen.getByTestId('mail-element');
  fireEvent.change(nameElement, { target: { value: 'John Doe' } })
  fireEvent.change(emailElement, { target: { value: 'foo@bar.com' } })
})