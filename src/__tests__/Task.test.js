import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";

const mockTask = { text: "Task 1", category: "Code" };
const mockOnDelete = jest.fn();

test("renders task details", () => {
  render(<Task text={mockTask.text} category={mockTask.category} onDelete={mockOnDelete} />);

  expect(screen.getByText(mockTask.text)).toBeInTheDocument();
  expect(screen.getByText(mockTask.category)).toBeInTheDocument();
});

test("calls onDelete when the delete button is clicked", () => {
  render(<Task text={mockTask.text} category={mockTask.category} onDelete={mockOnDelete} />);

  const deleteButton = screen.getByRole("button", { name: "X" });
  fireEvent.click(deleteButton);

  expect(mockOnDelete).toHaveBeenCalledTimes(1);
});
