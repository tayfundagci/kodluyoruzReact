import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDo from "./index";

describe("ToDo testleri", () => {
  let button, input;

  beforeEach(() => {
    render(<ToDo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("varsayilan olarak verilen 3 nesne render edilmeli...", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });

  test("input ve button dokumanda bulunmali.", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("inputa string girilip butona basilinca, listeye eklenmeli.", () => {
    // inputu doldur
    const name = "Mehmet";
    userEvent.type(input, name);
    // butona tıkla
    userEvent.click(button);
    // kontrol et
    expect(screen.getByText(name)).toBeInTheDocument;
  });
});
