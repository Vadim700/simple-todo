import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home page', () => {
  it('has todo in title', async () => {
    render(<Home />);

    const title = screen.getByText('todos');
    expect(title).toBeInTheDocument();
  }); 
});
