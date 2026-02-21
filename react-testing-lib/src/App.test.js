import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders learn react link', () => {
        render(<App />);
        const helloDias = screen.getByText(/Hi Dias/i);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        const inputElement = screen.getByPlaceholderText(/text/i);
        expect(buttonElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(helloDias).toBeInTheDocument();
        // screen.debug();
        expect(inputElement).toMatchSnapshot();
    });
})
