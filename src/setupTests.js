// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { server } from './tests/server';

// enable API mocking in test runs
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
