import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import React from 'react';


describe('Navbar', () => {
  it('has all html components', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);

    const links = screen.getAllByRole("link");
    expect(links[0].textContent).toMatch(/Home/i);
    expect(links[1].textContent).toMatch(/Shop/i);

    const button = screen.getByRole("button");
    expect(button.textContent).toMatch(/Check Out/i);
  });
});