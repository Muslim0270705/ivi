import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {changeYear} from "../../../features/movies/movies";


const years = [
    '2000','2001','2002','2003',
    '2004','2005','2006','2007',
    '2008','2009','2010','2011',
    '2012','2013','2014','2015',
    '2016','2017','2018','2019',
    '2020','2021','2022','2023',
]

const SelectYear = () => {

    const {filter} = useSelector((store) => store.movies)
    const dispatch = useDispatch()

    const [year, setYear] = useState(filter.year || '')
    const handleChange = (event) => {
        setYear(event.target.value);
    };

    useEffect(() => {
        dispatch(changeYear(year))
    },[year])


    return (
        <Box sx={{ minWidth: 100 }}>
            <FormControl sx={{width: 300}}
                         className="movies__filter-box"
            >
                <InputLabel
                    className="movies__filter-label"
                    id="demo-simple-select-label"
                >
                    Год
                </InputLabel>
                <Select
                    className="movies__filter-select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label="Age"
                    onChange={handleChange}
                >
                    {
                        years.map((item) => (
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

export default SelectYear;