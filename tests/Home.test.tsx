import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home';
import React from 'react';


describe('Home', () => {
  it('has all html components', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);

    const welcome = screen.getByTestId("welcome");
    expect(welcome.textContent).toMatch(/Welcome!/i);

    const link = screen.getByRole("link");
    expect(link.textContent).toMatch(/Shop/i);

  });
});