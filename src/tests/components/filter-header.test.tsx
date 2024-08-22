import FilterHeader from '@/app/components/filter-header'
import { rootReducer } from '@/app/store'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Mock necessary imports
jest.mock('@/features/country', () => ({
  countrySelector: jest.fn(() => ({ countries: [] })),
  getCountries: jest.fn(),
}))

jest.mock('@/features/user', () => ({
  getAllUsers: jest.fn(),
  searchByName: jest.fn(),
}))

jest.mock('../hooks', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: (selector: any) => selector(),
}))

const renderWithProviders = (component: any) => {
  const store = createStore(rootReducer)
  return render(<Provider store={store}>{component}</Provider>)
}

describe('FilterHeader', () => {
  const mockFilterSearchTerm = jest.fn()
  const mockFilterByNationality = jest.fn()
  const defaultProps = {
    pageStep: 0,
    searchTerm: '',
    filterSearchTerm: mockFilterSearchTerm,
    filterByNationality: mockFilterByNationality,
  }

  it('renders the component with correct initial content', () => {
    renderWithProviders(<FilterHeader {...defaultProps} />)
    expect(screen.getByText('All Users')).toBeInTheDocument()
    expect(screen.getByText('Filter by')).toBeInTheDocument()
  })

  it('calls filterSearchTerm on input change', () => {
    renderWithProviders(<FilterHeader {...defaultProps} />)
    const input = screen.getByPlaceholderText('Find in List')
    fireEvent.change(input, { target: { value: 'John' } })
    expect(mockFilterSearchTerm).toHaveBeenCalledWith(expect.anything())
  })

  it('calls filterByNationality on select change', () => {
    const mockCountries = [
      { name: { common: 'United States' }, cca2: 'US' },
      { name: { common: 'Canada' }, cca2: 'CA' },
    ]

    jest.mock('@/features/country', () => ({
      countrySelector: jest.fn(() => ({ countries: mockCountries })),
      getCountries: jest.fn(),
    }))

    renderWithProviders(<FilterHeader {...defaultProps} />)
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'US' } })
    expect(mockFilterByNationality).toHaveBeenCalledWith(expect.anything())
  })

  it('dispatches getCountries on mount', () => {
    const mockDispatch = jest.fn()
    jest.mock('../hooks', () => ({
      useAppDispatch: () => mockDispatch,
      useAppSelector: (selector: any) => selector(),
    }))

    renderWithProviders(<FilterHeader {...defaultProps} />)
    expect(mockDispatch).toHaveBeenCalledWith(expect.anything()) // Verify dispatch is called
  })

  it('renders country options correctly', () => {
    const mockCountries = [
      { name: { common: 'United States' }, cca2: 'US' },
      { name: { common: 'Canada' }, cca2: 'CA' },
    ]

    jest.mock('@/features/country', () => ({
      countrySelector: jest.fn(() => ({ countries: mockCountries })),
      getCountries: jest.fn(),
    }))

    renderWithProviders(<FilterHeader {...defaultProps} />)
    expect(screen.getByText('United States')).toBeInTheDocument()
    expect(screen.getByText('Canada')).toBeInTheDocument()
  })
})
