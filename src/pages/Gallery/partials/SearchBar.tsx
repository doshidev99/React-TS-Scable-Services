import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input.attrs<any, any>({
  placeholder: 'Start Searching For Images!',
})`
  border: none;
  width: 60%;
  font-size: 24px;
  font-weight: 500;
  padding: 1%;
  border-bottom: 1px solid #585858;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a7a7a7;
    font-weight: 300;
  }
`;

interface SearchBarProps {
  onHandleChange: Function;
}

const SearchBar: React.SFC<SearchBarProps> = (props: SearchBarProps) => {
  return (
    <SearchBarWrapper>
      <SearchInput />
    </SearchBarWrapper>
  );
};

export default SearchBar;
