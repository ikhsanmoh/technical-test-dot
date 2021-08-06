const Button = ({ type, onClick, label, styles }) => {
  const defaultButtonStyle = {
    width: '100%',
    border: '0',
    borderRadius: 5,
    marginTop: 20,
    lineHeight: '2.5em',
    ':hover': {
      backgroundColor: 'black'
    },
    fontSize: 16,
    cursor: 'pointer',
  }

  return (
    <button
      style={{ ...defaultButtonStyle, ...styles }}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  onClick: () => { },
  label: 'Button',
  styles: {}
}

export default Button
