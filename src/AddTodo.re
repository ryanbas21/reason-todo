[@react.component] 
let make = (input, onSubmit, onChange, onClick) => {
<input className=Styles.input 
       type_="text" 
       value={input} 
       onSubmit={onSubmit} 
       onChange={onChange} 
 />

  
  <button onClick={onClick}>(React.string("Add Todo"))</button>
}
