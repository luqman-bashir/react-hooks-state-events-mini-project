import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";

const mockCategories = ["Code", "Food", "Misc"];
const mockOnTaskFormSubmit = jest.fn();

test("renders input fields and dropdown", () => {
  render(<NewTaskForm categories={mockCategories} onTaskFormSubmit={mockOnTaskFormSubmit} />);

  expect(screen.getByLabelText(/Details/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
});

test("submits a new task with correct details", () => {
  render(<NewTaskForm categories={mockCategories} onTaskFormSubmit={mockOnTaskFormSubmit} />);

  const taskInput = screen.getByLabelText(/Details/i);
  const categoryDropdown = screen.getByLabelText(/Category/i);
  const addButton = screen.getByRole("button", { name: /Add task/i });

  fireEvent.change(taskInput, { target: { value: "New Task" } });
  fireEvent.change(categoryDropdown, { target: { value: "Misc" } });
  fireEvent.click(addButton);

  expect(mockOnTaskFormSubmit).toHaveBeenCalledTimes(1);
  expect(mockOnTaskFormSubmit).toHaveBeenCalledWith({
    text: "New Task",
    category: "Misc",
  });
});
