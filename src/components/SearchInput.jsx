import { useState } from 'react';
import { Input, Menu, MenuItem, MenuList, MenuButton, Box, Spinner, InputGroup, InputRightElement, Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core';

const SearchInput = ({ value, setValue, query, setQuery }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSuggestions = async (value) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=0f6ce5eee14b40b994545816241504&q=${value}`);
            const data = await response.json();
            setSuggestions(data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
        setLoading(false);
    };

    const showSuggestion = debounce((value) => {
        if (value) {
            fetchSuggestions(value);
        } else {
            setSuggestions([]);
        }
    }, 300);

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
        showSuggestion(value);
    }

    return (
        <Box>
            <Popover trigger='click' isOpen={value.length > 0} closeDelay matchWidth={true} autoFocus={false}>
                <PopoverTrigger>
                    <InputGroup>
                        <InputRightElement>
                            <FontAwesomeIcon icon={faSearch} color="gray" />
                        </InputRightElement>
                        <Input
                            type="search"
                            placeholder="Search for cities"
                            onChange={handleChange}
                            value={value}
                            borderRadius="10px"
                            variant="filled"
                        />
                    </InputGroup>
                </PopoverTrigger>
                <PopoverContent minWidth="650px">
                    <PopoverBody>
                        {loading ? (
                            <Box display="flex" justifyContent="center">
                                <Spinner />
                            </Box>
                        ) : (
                            suggestions.length > 0 ? (suggestions.map((suggestion) => (
                                <Box
                                    key={suggestion.id}
                                    padding="2"
                                    cursor="pointer"
                                    onClick={() => {
                                        setQuery(suggestion.id);
                                        setSuggestions([]); // Cierra las sugerencias
                                        setValue("");
                                    }}
                                    _hover={{ backgroundColor: 'gray.100' }}
                                >
                                    {suggestion.name}, {suggestion.region}, {suggestion.country}
                                </Box>
                            ))) : <Box textAlign={"center"}>No matches founds</Box>
                        )}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
};

export default SearchInput;
