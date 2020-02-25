import React from 'react'
import { render } from '@testing-library/react'
import Plant from './Plant'
import { mockDataOK, mockDataWATER, mockDataDANGER, mockDataNULL } from './PlantMockData'

describe('Plant Component', () => {
  
  it('Plant compiles with OK data', () => {
    const { getByTestId } = render(<Plant plant={mockDataOK} />)
    const plantContainer = getByTestId('plantContainer')
    expect(plantContainer).toBeInTheDocument()
  }),
  
  it('Plant compiles with WATER data', () => {
    const { getByTestId } = render(<Plant plant={mockDataWATER} />)
    const plantContainer = getByTestId('plantContainer')
    expect(plantContainer).toBeInTheDocument()
  }),
  
  it('Plant compiles with DANGER data', () => {
    const { getByTestId } = render(<Plant plant={mockDataDANGER} />)
    const plantContainer = getByTestId('plantContainer')
    expect(plantContainer).toBeInTheDocument()
  }),
  
  it('Plant compiles with NULL data', () => {
    const { getByTestId } = render(<Plant plant={mockDataNULL} />)
    const plantContainer = getByTestId('plantContainer')
    expect(plantContainer).toBeInTheDocument()
  }),

  it('Plant emoji is green for OK DATA', () => {
    const { getByText } = render(<Plant plant={mockDataOK} />)
    const emojiTag = getByText('🌿')
    expect(emojiTag).toBeInTheDocument()
  }),

  it('Plant emoji is water tap for WATER Data', () => {
    const { getByText } = render(<Plant plant={mockDataWATER} />)
    const emojiTag = getByText('🚰')
    expect(emojiTag).toBeInTheDocument()
  }),

  it('Plant emoji is exclamation for DANGER DATA', () => {
    const { getByText } = render(<Plant plant={mockDataDANGER} />)
    const emojiTag = getByText('❗️')
    expect(emojiTag).toBeInTheDocument()
  }),

  it('Plant emoji does not render for NULL DATA', () => {
    const { queryByTestId } = render(<Plant plant={mockDataNULL} />)
    const emojiTag = queryByTestId('plantEmoji')
    expect(emojiTag).not.toBeInTheDocument()
  })

})