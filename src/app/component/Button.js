const Button = ({ color, size, radius, text, onClick }) => {
    const buttonClasses = `px-4 py-2 rounded-${radius} text-${size} bg-customPurple hover:bg-customPurple-dark text-white`;
  
    return (
      <button className={buttonClasses} onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Button;