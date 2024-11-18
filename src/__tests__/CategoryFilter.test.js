import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";

const mockCategories = ["All", "Code", "Food", "Misc"];
const mockOnCategoryClick = jest.fn();

test("renders all category buttons", () => {
  render(<CategoryFilter selectedCategory="All" onCategoryClick={mockOnCategoryClick} />);

  mockCategories.forEach((category) => {
    expect(screen.getByRole("button", { name: category })).toBeInTheDocument();
  });
});

test("adds 'selected' class to the active category", () => {
  render(<CategoryFilter selectedCategory="Code" onCategoryClick={mockOnCategoryClick} />);

  const selectedButton = screen.getByRole("button", { name: "Code" });
  expect(selectedButton).toHaveClass("selected");

  const otherButton = screen.getByRole("button", { name: "All" });
  expect(otherButton).not.toHaveClass("selected");
});

test("calls onCategoryClick when a button is clicked", () => {
  render(<CategoryFilter selectedCategory="All" onCategoryClick={mockOnCategoryClick} />);

  const codeButton = screen.getByRole("button", { name: "Code" });
  fireEvent.click(codeButton);

  expect(mockOnCategoryClick).toHaveBeenCalledTimes(1);
  expect(mockOnCategoryClick).toHaveBeenCalledWith("Code");
});
