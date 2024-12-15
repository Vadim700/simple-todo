import { InputGroup } from '@/components/shared/InputGroup';
import { render, screen, waitFor } from '@testing-library/react';
import user, { userEvent } from '@testing-library/user-event';

describe('InputGroup', () => {
  it("Ther's input in page", async () => {
    render(<InputGroup />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Please type something')).toBeInTheDocument();
    });

		const input = screen.getByPlaceholderText('Please type something');
    user.click(input);

    await userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });
});
