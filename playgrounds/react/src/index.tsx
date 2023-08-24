import React from 'react'
import ReactDOM from 'react-dom'

import { Margin, Select } from '@css-architecture/react/lib'
import '@css-architecture/scss/lib/Utilities.css'
import '@css-architecture/scss/lib/Text.css'
import '@css-architecture/scss/lib/Margin.css'
import '@css-architecture/scss/lib/Select.css'
import '@css-architecture/scss/lib/global.css'

const options = [
    {
        label: '1',
        value: '1'
    }, {
        label: '2',
        value: '2'
    }, {
        label: '3',
        value: '3'
    },
]

ReactDOM.render(
    <div>
        <Margin>
            <Select options={options}/>
        </Margin>
    </div>,
    document.querySelector('#root')
)

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
