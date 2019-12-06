import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

test("title is displaying correctly", () => {
  const {getByText} = render(<App />)
  getByText(/plaaaaaay ball/i)
})

test("strikes is displayed", () => {
  const {getByText} = render (<Display />);
  getByText(/strikes/i);
})

test("strike, ball, foul, and hit button is displayed", () => {
  const {getByText} = render (<Dashboard />);
  getByText(/strike!/i);
  getByText(/ball!/i);
  getByText(/foul!/i);
  getByText(/hit!/i);
})
