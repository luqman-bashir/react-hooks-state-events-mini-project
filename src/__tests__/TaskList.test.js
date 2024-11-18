import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";

const mockTasks = [
  { text: "Task 1", category: "Code" },
  { text: "Task 2", category: "Food" },
];
const mockOnDeleteTask = jest.fn();

test("renders a list of tasks", () => {
  render(<TaskList tasks={mockTasks} onDeleteTask={mockOnDeleteTask} />);

  mockTasks.forEach((task) => {
    expect(screen.getByText(task.text)).toBeInTheDocument();
    expect(screen.getByText(task.category)).toBeInTheDocument();
  });
});

test("calls onDeleteTask when a task's delete button is clicked", () => {
  render(<TaskList tasks={mockTasks} onDeleteTask={mockOnDeleteTask} />);

  const deleteButtons = screen.getAllByRole("button", { name: "X" });
  fireEvent.click(deleteButtons[0]);

  expect(mockOnDeleteTask).toHaveBeenCalledTimes(1);
  expect(mockOnDeleteTask).toHaveBeenCalledWith("Task 1");
});
