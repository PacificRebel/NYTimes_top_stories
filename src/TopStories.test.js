import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import TopStories from './TopStories'
import mockResponse from './__mocks__/nytimes_response.json'

// mock fetch and return the mock response Json from __mocks__
jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})

test("shows top stories", async () => {
  render(<TopStories />)

  const element = await waitForElement(() => (screen.getByText("I AM A TEST RESPONSE"))

  screen.debug()
  expect(element).toBeInTheDocument()
})
