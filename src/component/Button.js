import './button.css'; 
const Button = ({symbol,color,btnHandler}) => { 
    return(
        <div 

        onClick={() => btnHandler(symbol)}  className='btn-wrapper' style={{backgroundColor : color}} 

       >{symbol}</div>

        
        
        
       
        
    );
}

export default Button;