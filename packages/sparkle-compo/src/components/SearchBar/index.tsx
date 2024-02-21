import { useState } from "react";
import searchIcon from './assets/search.svg';
import { SearchBarContainer } from "./style";

interface SearchBarProps {
    handleSearch: () => void
}

export default function SearchBar({ handleSearch }: SearchBarProps) {
    const [ searchValue, setSearchValue ] = useState('');
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
    }
    return (
        <SearchBarContainer>
            <input 
                type="text" 
                placeholder="Faça sua busca" 
                value={searchValue}
                onChange={handleChangeInput}
            />
            <button onClick={handleSearch}><img src={searchIcon} alt="" /></button>
        </SearchBarContainer>
    );
;}