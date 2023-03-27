import { FormsModule } from '@angular/forms';
import { screen, fireEvent, render } from '@testing-library/angular';
import { SearchBarComponent } from './search-bar.component';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

describe('SearchBarComponent', () => {
  beforeEach(async () => {
    await render(SearchBarComponent, {
      declarations: [SearchBarComponent],
      imports: [FormsModule],
    });
  });
  it('searchButton should be present', () => {
    const buttonSearchElem = screen.getByText('Search');
    expect(buttonSearchElem).toBeInTheDocument();
  });

  it('Should render Clear button', async () => {
    const inputElem = screen.getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.input(inputElem, { target: { value: 'Hello' } });
    const clearButtonElement = await screen.findByText('Clear');
    expect(clearButtonElement).toBeInTheDocument();
  });

  it('Should not render Clear button', async () => {
    const inputElem = screen.getByPlaceholderText('Search') as HTMLInputElement;
    await fireEvent.input(inputElem, { target: { value: '' } });
    const clearButtonElement = screen.queryByText('Clear');
    expect(clearButtonElement).not.toBeInTheDocument();
  });

  it('The input should be empty', async () => {
    const inputElem = screen.getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.input(inputElem, { target: { value: 'test' } });
    const clearButtonElement = await screen.findByText('Clear');
    fireEvent.click(clearButtonElement);
    setTimeout(() => {
      expect(inputElem.value).toBe('');
    }, 500);
  });
});
