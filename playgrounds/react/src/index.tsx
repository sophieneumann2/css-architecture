import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from '@css-architecture/react/lib'
import '@css-architecture/scss/lib/Button.css'

ReactDOM.render(
        <Button label={"Example Hello Button"}/>,
    document.querySelector('#root')
)

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
