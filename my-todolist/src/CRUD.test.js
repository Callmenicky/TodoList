import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import CRUD2 from './CRUD2';
import '@testing-library/jest-dom/extend-expect';

describe('CRUD2', () => {

  test('displays correct number of rows', () => {
    render(<CRUD2/>);

      const rows = screen.queryAllByRole('row');
      // Exclude the header row
      const actualRowCount = rows.length - 1;

      expect(actualRowCount).toBe(2);
  });

  test('adds a new task', async () => {
    render(<CRUD2 />);
    
    // Fill in the task details
    const nameInput = screen.getByPlaceholderText('Enter Name');
    const descriptionInput = screen.getByPlaceholderText('Enter Description');
    const dueDateInput = screen.getByPlaceholderText('Enter Due Date');
    const statusInput = screen.getByLabelText('Status');
    const priorityInput = screen.getByLabelText('Priority');
    const submitButton = screen.getByText('Submit');
    
    fireEvent.change(nameInput, { target: { value: 'New Task' } });
    fireEvent.change(descriptionInput, { target: { value: 'Task Description' } });
    fireEvent.change(dueDateInput, { target: { value: '2023-05-20' } });
    fireEvent.change(statusInput, { target: { value: 'In Progress' } });
    fireEvent.change(priorityInput, { target: { value: 'High' } });

    // Submit the form
    fireEvent.click(submitButton);
    
    // Wait for the task to be added to the table
    await waitFor(() => {
      expect(nameInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
      expect(dueDateInput).toBeInTheDocument();
      expect(statusInput).toBeInTheDocument();
      expect(priorityInput).toBeInTheDocument();
    });
    
  });

  test('edits an existing task', async () => {
    render(<CRUD2 />);
    
    // Get the task name and button name
    const taskName = 'Sweep the floor'; // Replace 'Task Name' with the actual name or identifier of the row
    const buttonName = 'Edit';
    
    // Find the row element containing the task name
    const row = screen.getByText(taskName).closest('tr');

    // Retrieve all cells within the row
    const cells = row.querySelectorAll('td');
    const status = cells[4].textContent;
    const priority = cells[5].textContent;

    // Find the button within the row element to open the modal
    const editButton = within(row).getByRole('button', { name: buttonName });

    // Open the modal
    fireEvent.click(editButton);

    // Find the modal element
    const modal = screen.getByRole('dialog');
    
    // Find the button within the modal footer without role constraint
    const saveButton = within(modal).getByRole('button', { name: 'Save Changes' });


    // Find the input fields within the modal body
    const nameInput = within(modal).getByPlaceholderText('Enter Name');
    const descriptionInput = within(modal).getByPlaceholderText('Enter Description');
    const dueDateInput = within(modal).getByPlaceholderText('Enter Due Date');
    const statusSelect = within(modal).getByDisplayValue(status);
    const prioritySelect = within(modal).getByDisplayValue(priority);

    // Modify the task details
    fireEvent.change(nameInput, { target: { value: 'Updated Task' } });
    fireEvent.change(descriptionInput, { target: { value: 'Updated Description' } });
    fireEvent.change(dueDateInput, { target: { value: '2023-05-31' } });
    fireEvent.select(statusSelect, { target: { value: 'In Progress' } });
    fireEvent.select(prioritySelect, { target: { value: 'Very High' } });

    // Click the save button
    fireEvent.click(saveButton);
        expect(nameInput).toBeInTheDocument();
        expect(descriptionInput).toBeInTheDocument();
        expect(dueDateInput).toBeInTheDocument();
        expect(statusSelect).toBeInTheDocument();
        expect(prioritySelect).toBeInTheDocument();
    });
  
    test('deletes a task', () => {
      render(<CRUD2 />);
    
       // Get the task name and button name
      const taskName = 'Clean the fan'; 
      const buttonName = 'Delete';

      // Find the row element containing the task name
      const row = screen.getByText(taskName).closest('tr');

      // Find the button within the row element to open the modal
      const deleteButton = within(row).getByRole('button', { name: buttonName });
    
      // Click the delete button for the task
      fireEvent.click(deleteButton);
    
      // Verify the task is deleted
      const deletedTask = screen.queryByText('Clean the fan');
      const otherTask = screen.queryByText('Sweep the floor');
      expect(otherTask).toBeInTheDocument();
      expect(deletedTask).not.toBeInTheDocument();
      
    });
  
  
  
});
