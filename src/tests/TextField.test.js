import { render, screen } from '@testing-library/react';
import TextField from '../components/textField';

describe('TextField component', () => {
  test('renders NewTask component and find placeholder text', () => {
    render(<TextField />);
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
  });
});