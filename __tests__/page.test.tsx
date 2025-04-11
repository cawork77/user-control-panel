import { render, screen} from '@testing-library/react';
import HomePage from '../user-control-panel/src/app/page';

describe('HomePage', () => {
    it('renders the page with a title', () => {
    render(<HomePage />);
    expect(screen.getByText('User Finder')).toBeInTheDocument();
    })
});