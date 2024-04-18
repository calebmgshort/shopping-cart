import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Shop from '../src/components/Shop';
import React from 'react';

import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import { act } from 'react-dom/test-utils';


describe('Shop', () => {
  it('has all html components', async () => {

    const fetchMocker = createFetchMock(vi);
    // sets globalThis.fetch and globalThis.fetchMock to our mocked version
    fetchMocker.enableMocks();

    const mockItems = Array(12).fill({title:"baobaohuluobo", price: 1.09})
    fetchMocker.mockOnce(JSON.stringify(mockItems));

    vi.mock("react-router-dom", () => ({
      ...vi.importActual("react-router-dom"),
      useOutletContext: () => {return [() => {}]},
    }));
  

    await act(async () => {
      render(
        <Shop />
      );
    });
    
    const titles = screen.getAllByTestId("title");
    expect(titles.length).toBe(12);
    expect(titles[0].textContent).toMatch(/baobaohuluobo/i);

    const prices = screen.getAllByTestId("price");
    expect(prices[0].textContent).toMatch(/1.09/i);

    const buttons = screen.getAllByTestId("add_to_cart");
    expect(buttons[0].textContent).toMatch(/Add To Cart/i);

  });
});