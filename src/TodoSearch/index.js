import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';


function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <div className='InputContainer' >
      <input
        placeholder="Tareas por completar"
        className="input"
        name='text'
        type='text'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };


// function TodoSearch({
//   searchValue,
//   setSearchValue,
// }) {
//   return (
//     <div className='InputContainer' >
//       <input
//         placeholder="Tareas por completar"
//         className="TodoSearch"
//         value={searchValue}
//         onChange={(event) => {
//           setSearchValue(event.target.value);
//         }}
//       />
//     </div>
//   );
// }

// export { TodoSearch };
