import React, { Component } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';

import { SearchIcon } from '@material-ui/icons/Search'

export default class SearchBar extends Component {
    render() {
        return (
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        )
    }
}

