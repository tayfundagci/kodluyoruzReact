import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log("her testten once calisacagim!");
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  });

  beforeAll(() => {
    console.log("ilk basta bir kere calisacagim!");
  });

  afterEach(() => {
    console.log("her testten sonra calisacagim!");
  });

  afterAll(() => {
    console.log("en son bir kere calisacagim!");
  });

  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
