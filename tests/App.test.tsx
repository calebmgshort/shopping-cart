import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import { act } from 'react-dom/test-utils';
import {routerConfig} from '../src/router';

describe('interactions between children', async () => {
  it('updates cart item count when items are added', async () => {
    const fetchMocker = createFetchMock(vi);
    // sets globalThis.fetch and globalThis.fetchMock to our mocked version
    fetchMocker.enableMocks();

    const mockItems = Array(1).fill({title:"baobaohuluobo", price: 1.09})
    fetchMocker.mockOnce(JSON.stringify(mockItems));

    // vi.mock("react-router-dom", () => ({
    //   ...vi.importActual("react-router-dom"),
    //   useOutletContext: () => {return [() => {}]},
    // }));
  
    // Render initial screen

    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    // Test at least the navbar is rendering by querying for the navbar links

    const links = screen.getAllByRole("link");
    expect(links[0].textContent).toMatch(/Home/i);
    expect(links[1].textContent).toMatch(/Shop/i);

    // Test that we are on the home  screen

    const welcome = screen.queryByTestId("welcome");
    expect(welcome).not.toBe(null);

    // Test that the cart is empty

    const itemCount = screen.queryByTestId("itemCount");
    expect(itemCount?.textContent).toMatch(/0/i);

    // Switch to the shop screen

    await act(async () => {
      links[1].click();
    })

    // Make sure we are on the shop page now

    const quantityInput = screen.getByTestId("quantity");
    fireEvent.change(quantityInput, {target: {value: '4'}})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((quantityInput as any).value).toBe('4')

    const submitButton = screen.getByRole("button", { name: "Add To Cart" });

    act(() => {
      submitButton.click();
    })

    expect(itemCount?.textContent).toMatch(/4/i);

  });

});