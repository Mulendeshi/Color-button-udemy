import { fireEvent, render, screen } from '@testing-library/react';
//import {getRoles, logRoles} from '@testing-library/dom'
import App from './App';

test('button has correct initail color', () => {
 render(<App />);
 
  //finds button and its role
 const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toHaveStyle({backgroundColor : 'red'})
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  expect(colorButton).toHaveTextContent('Change to red');
});
test('button turns blue when clicked and updates when clicked', ()=> {
render(<App />);
 const clickedButton = screen.getByRole('button', {name: 'Change to blue'});
 fireEvent.click(clickedButton);
 expect(clickedButton).toHaveStyle({backgroundColor: 'blue'});
  expect(clickedButton).toHaveTextContent('change to red');
})

 test('initial conditions', ()=> {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();


  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

 })

 test('Button should be disabled when checkbox is checked', ()=> {
  render(<App />);

  const checkBox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);
  expect(button).toBeEnabled();

 })

