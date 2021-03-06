const myStyles = {
  inputGroup: {
    display: 'flex',
    flexFlow: 'column',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    lineHeight: '1.5em'
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
}

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  label,
  required,
  selectOptions
}) => {
  return (
    <div style={myStyles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      {type === 'select' ?
        <select name={name} id={name} style={myStyles.input} onChange={onChange} required={required}>
          <option value="">Select</option>
          {selectOptions.map((opt, index) => (
            <option key={index} value={opt.val}>{opt.name}</option>
          ))}
        </select>
        :
        <input
          style={myStyles.input}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />}
    </div>
  )
}

FormInput.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false
}

export default FormInput
