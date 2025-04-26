import {render, screen} from '@testing-library/react';
import Welcome from './Welcome';

test ('renders welcome message', () => {
    render(<Welcome user='John'/>);
    const welcomeElement = screen.getByText(/Welcome John/i);
    expect(welcomeElement).toBeInTheDocument();
});