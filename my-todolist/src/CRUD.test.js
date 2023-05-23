import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import CRUD from './CRUD';

// Mock axios to simulate API requests
jest.mock('axios');

describe('CRUD Component', () => {
  beforeEach(() => {
    // Clear mocks and reset component state before each test
    jest.clearAllMocks();
  });

  describe('Unit Tests', () => {
    it('renders the component without errors', () => {
      render(<CRUD />);
      // Add your assertion here, if needed
    });

    it('handles form input changes correctly', () => {
      render(<CRUD />);
      const nameInput = screen.getByLabelText('Name');
      const descriptionInput = screen.getByLabelText('Description');

      fireEvent.change(nameInput, { target: { value: 'Test Name' } });
      fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });

      // Add your assertions here to verify the state changes
    });

    // Add more unit tests as needed
  });

  describe('Integration Tests', () => {
    it('displays a list of tasks fetched from the API', async () => {
      const mockData = [
        {
          id: 1,
          name: 'Sweep the floor',
          description: 'Sweep the floor and the room',
          due_date: '25th August 2023',
          status: 'Pending',
          priority: 'High',
        },
        {
          id: 2,
          name: 'Clean the fan',
          description: 'Clean the Fan of my room',
          due_date: '26th August 2023',
          status: 'In Progress',
          priority: 'Low',
        },
      ];

      axios.get.mockResolvedValueOnce({ data: mockData });

      render(<CRUD />);

      // Wait for API request to complete
      await screen.findByText('Sweep the floor');

      // Add your assertions here to verify the rendered tasks
    });

    it('adds a new task when the submit button is clicked', async () => {
      const mockData = {
        id: 3,
        name: 'New Task',
        description: 'New Task Description',
        due_date: '27th August 2023',
        status: 'Pending',
        priority: 'Medium',
      };

      axios.post.mockResolvedValueOnce({ data: mockData });

      render(<CRUD />);
      const nameInput = screen.getByLabelText('Name');
      const descriptionInput = screen.getByLabelText('Description');
      const submitButton = screen.getByText('Submit');

      fireEvent.change(nameInput, { target: { value: 'New Task' } });
      fireEvent.change(descriptionInput, { target: { value: 'New Task Description' } });
      fireEvent.click(submitButton);

      // Wait for API request to complete
      await screen.findByText('New Task');

      // Add your assertions here to verify the new task is added
    });

    // Add more integration tests as needed
  });
});
