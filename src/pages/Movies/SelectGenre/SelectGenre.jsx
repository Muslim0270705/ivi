import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {changeGenre} from "../../../features/movies/movies";


const genres = [
    'драма','комедия','боевик','биография',
    'ужасы','триллер','детектив','приключения',
    'фэнтези','фантастика','семейный','мелодрама',
    'криминал','дорама','музыкальные','спортивные',
]
const SelectGenre = () => {

    const {filter} = useSelector((store) => store.movies)
    const dispatch = useDispatch()

    const [genre, setGenre] = useState(filter.genre || '')
    const handleChange = (event) => {
        setGenre(event.target.value);
    };

    useEffect(() => {
        dispatch(changeGenre(genre))
    },[genre])


    return (
        <Box sx={{ minWidth: 100 }}>
            <FormControl sx={{width: 300}}
                         className="movies__filter-box"
            >
                <InputLabel
                    className="movies__filter-label"
                    id="demo-simple-select-label"
                >
                    Жанр
                </InputLabel>
                <Select
                    className="movies__filter-select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Age"
                    onChange={handleChange}
                >
                    {
                        genres.map((item) => (
                            <MenuItem
                                className="movies__filter-item"
                                value={item}
                            >
                                {item}
                            </MenuItem>
                        ))
                    }
                    <MenuItem
                        className="movies__filter-item"
                        value={''}
                    >
                        Очистить все
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectGenre;