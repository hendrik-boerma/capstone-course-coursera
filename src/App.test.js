import { render, screen } from "@testing-library/react";
import BookingPage from "./pages/BookingPage";
import BookingForm from "./components/BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByTestId("formtitle");
    expect(headingElement).toBeInTheDocument();
})

  test('Renders the BookingPage function', () => {
    render(<BookingPage />);
    const optionsElement = screen.getByTestId("timeoptions");
    expect(optionsElement).toHaveTextContent(availableTimes);
})