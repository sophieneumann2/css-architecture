import React, { useState } from 'react';

const Select = ({ options = [], label = "Please select an option...", onOptionSelected: handler }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    const onOptionSelected = (option, optionIndex) => {
        setIsOpen(!isOpen);
        if (handler) {
            handler(option, optionIndex);
        }
    };
    return React.createElement("div", { className: 'dse-select' },
        React.createElement("button", { className: 'dse-select__label', onClick: () => onLabelClick() },
            React.createElement("span", null, label),
            React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen ? React.createElement("ul", { className: 'dse-select__overlay' }, options.map((option, optionIndex) => React.createElement("li", { onClick: () => onOptionSelected(option, optionIndex), key: option.value, value: option.value }, option.label))) : null);
};

export { Select as default };
//# sourceMappingURL=Select.js.map
