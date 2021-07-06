const Button = ({variant, title, buttonStyle, hover, shadow, active}) => {
    return ( 
        <div className="button-container">
            <p>{title}</p>
            {active === 'disabled' && <button className={`${variant} ${buttonStyle} ${hover} ${shadow}`} disabled>Default</button> }
            {active !== 'disabled' && <button className={`${variant} ${buttonStyle} ${hover} ${shadow}`}>Default</button>}
        </div>
     );
}
 
export default Button;