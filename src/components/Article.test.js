import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

test('renders component without errors', ()=> {
  render (<Article />)
});

test('renders headline, author from the article when passed in through props', ()=> {
  render (<Article article={{headline: 'Headline Here', author: 'Author here'}}/>);

  const headline = screen.queryByText(/headline here/i);
  console.log(headline)
  const author = screen.queryByText(/author here/i);

  expect(headline).toBeInTheDocument();
  expect(headline).toBeTruthy();
  expect(headline).toHaveTextContent(/headline here/i);

  expect(author).toBeInTheDocument();
  expect(author).toBeTruthy();
  expect(author).toHaveTextContent(/author here/i);
});

test('renders a"Associated Press" when no author is given', ()=> {
});

test('executes handleDelete when the delete button is pressed', ()=> {
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.