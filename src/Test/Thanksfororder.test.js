import React from "react";
import { render } from "@testing-library/react";
import Thanksfororder from "../pages/Thanksfororder"


test("test render Thanksfororder", () => {
const { getByText } = render(<Thanksfororder />);
const thanksistrue = getByText(/Thanks Bro. Pizza delaet dobro./i);
expect(thanksistrue).toBeInTheDocument;
});