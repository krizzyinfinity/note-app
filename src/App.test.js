 import { render, screen } from '@testing-library/react';
 import App from './App';
 import {addNote} from "./App"

 test('renders learn react link', () => {
   render(<App />);
   const linkElement = screen.getByText(/Notes/i);
   expect(linkElement).toBeInTheDocument();
 });

