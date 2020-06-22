import * as React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchInput } from './style'

const MySearchBox = ({ currentRefinement, refine, onChange }: any) => (
  <SearchInput
    type="search"
    value={currentRefinement}
    onFocus={onChange}
    onChange={(e) => {
      onChange(e)
      refine(e.target.value)
    }}
    placeholder="Search for books and authors..."
    aria-label="Search"
  />
)

const ConnectedSearchBox = connectSearchBox(MySearchBox)

export default ConnectedSearchBox
