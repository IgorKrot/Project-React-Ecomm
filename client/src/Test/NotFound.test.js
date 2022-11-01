import { render } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import {BrowserRouter} from 'react-router-dom'


test("test render NotFound", () => {
const { getByText } = render(<NotFound />, {wrapper: BrowserRouter});
const gobackistrue = getByText(/go back/i);
expect(gobackistrue).toBeInTheDocument;
});