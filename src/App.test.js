import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import BookingPage from "./pages/BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make reservation");
    expect(headingElement).toBeInTheDocument();
})

  test('Renders the BookingPage function', () => {
    render(<BookingPage />);
    const optionsElement = screen.getByTestId("timeoptions");
    expect(optionsElement).toHaveTextContent('17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30');
})