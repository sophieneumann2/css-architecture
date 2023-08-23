import React from 'react'
import ReactDOM from 'react-dom'

import { Color } from '@css-architecture/react/lib'
import '@css-architecture/scss/lib/Utilities.css'

ReactDOM.render(
        <Color hexCode={'#000'}/>,
    document.querySelector('#root')
)

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
