import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

// const testArticle = {
//   createdOn: '2021-08-09T18:02:38-04:00',
//   img: 'https://picsum.photos/id/134/300/300',
//   headline: 'test headline',
//   author: 'test author',
//   summary: 'test summary', 
//   body: 'test body'
// }

test('renders component without errors', ()=> {
  render (<Article article={{
    createdOn: '2021-08-09T18:02:38-04:00',
    img: 'https://picsum.photos/id/134/300/300',
    headline: 'test headline',
    author: 'test author',
    summary: 'test summary', 
    body: 'test body'
  }}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
  render (<Article article={{headline: 'Headline Here', author: 'Author here'}}/>);

  const headline = screen.queryByText(/headline here/i);
  const author = screen.queryByText(/author here/i);

  expect(headline).toBeInTheDocument();
  expect(headline).toBeTruthy();
  expect(headline).toHaveTextContent(/headline here/i);

  expect(author).toBeInTheDocument();
  expect(author).toBeTruthy();
  expect(author).toHaveTextContent(/author here/i);
});

test('renders a"Associated Press" when no author is given', ()=> {
  render(<Article article={{author: ''}}/>)

  const author = screen.queryByTestId('author');
  
  expect(author).toHaveTextContent(/associated press/i);
});

test('executes handleDelete when the delete button is pressed', ()=> {
  const mockHandleDelete = jest.fn();

  render (<Article article={{
    createdOn: '2021-08-09T18:02:38-04:00',
    img: 'https://picsum.photos/id/134/300/300',
    headline: 'test headline',
    author: 'test author',
    summary: 'test summary', 
    body: 'test body'
  }} handleDelete={mockHandleDelete}/>)

  const deleteButton = screen.queryByTestId('deleteButton');
  userEvent.click(deleteButton)

  expect(mockHandleDelete).toHaveBeenCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.