// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { server } from './tests/server';

// https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0
// See BREAKING CHANGES - Option 3
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;

// enable API mocking in test runs
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
