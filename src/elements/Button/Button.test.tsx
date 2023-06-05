import Button from "./Button";
import {render, screen,fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";


const mockOnClick = vi.fn();

beforeEach(() => {
    render(<Button label={"Test Button"} color={"Blue"} onClick={mockOnClick}/>);
  });
  test("renders the button label", () => {
    const buttonElement = screen.getByText("Test Button");
    expect(buttonElement).toBeDefined();
  });
  
  test("has the correct color style", () => {
    const buttonElement = screen.getByText("Test Button");
    expect(buttonElement).toBeDefined();
  });
  
  test("triggers onClick when clicked", () => {
    const buttonElement = screen.getByText("Test Button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
