import React, { Component } from 'react';

const InputField = ({
    name,
    label,
    type,
    value,
    onChange,
    placeholder,
    required,
    error
}) => {
    return (
        <div className="form-group">
            <label className="block">
                <span className="text-white">{label}</span>
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            </label>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

const DropdownSelect = ({
    name,
    label,
    value,
    onChange,
    options,
    required,
    error
}) => {

    return (
        <div className="form-group">
            <label className="block">
                <span className="text-white">{label}</span>
                <select
                    name={name}
                    className="form-control"
                    value={value}
                    onChange={onChange}
                    required={required}
                >
                    {options &&
                        options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }

                </select>
            </label>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default class FormInput extends Component {
    render() {
        const renderInput = InputField({
            name: this.props.name,
            label: this.props.label,
            type: this.props.type,
            value: this.props.value,
            onChange: this.props.onChange,
            placeholder: this.props.placeholder,
            required: this.props.required,
            error: this.props.error
        });

        const renderDropdown = DropdownSelect({
            name: this.props.name,
            label: this.props.label,
            value: this.props.value,
            onChange: this.props.onChange,
            options: this.props.options,
            required: this.props.required,
            error: this.props.error
        });

        return (
            <div>
                {this.props.type ? renderInput : renderDropdown}
            </div>
        );
    }
}