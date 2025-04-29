// import React, {useState } from 'react';
// const About = () => {
//   const [allNames, setAllNames] = useState(['hamza', "ahmad", "ali", "ahad", "usman", "asad", "haider"])
//   const [inputValue, setInputValue] = useState('');



//   const add = () => {
//     if(inputValue){
//       setAllNames([...allNames, inputValue])
//       setInputValue('')
//     }
//     window.alert('Invalid input value')

//   }
//   const remove = (index) => {
//     setAllNames(allNames.filter((val, ind) => ind !== index))
//   }

//   const handdleChange = (event) => {
//     setInputValue(event.target.value)
//   }


//   return (
//     <div>
//       <h2>Maping the valuse</h2>
//       <br />
//       <br />
//       <table>
//         <tboday>
//           <tr>
//             <th align='center'>index</th>
//             <th align='center'>value</th>
//             <th align='center'>options</th>

//           </tr>
//           {allNames.map((val, index) => {
//             return (
//               <tr key={index}>
//                 <td align='center'>{index}</td>
//                 <td align='center'>{val}</td>
//                 <td align='center'>
//                   <button onClick={() => remove(index)}>Delete</button>
//                 </td>
//               </tr>
//             )

//           })}

//         </tboday>
//       </table>
//       <label htmlFor="name">Name</label>
//       <input type="text" value={inputValue} onChange={handdleChange} /><br />
//       <button onClick={add}>Add</button>

//     </div>
//   );
// };

// export default About;



import React, { useState } from 'react'


const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    nic: '',
  })
  const [submittedData, setSubmittedData] = useState(true)

  const handdleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handdleSubmit = (e) => {
    setSubmittedData(formData);
  }



  return (
    <div>

      {/* <form> */}
      <table>
        <tbody>
          <input type="text" name='name' value={formData.name} onChange={handdleChange} />
          <label htmlFor="name">age</label>
          <input type="number" name='age' value={formData.age} onChange={handdleChange} />
          <label htmlFor="name">nic</label>
          <input type="text" name='nic' value={formData.nic} onChange={handdleChange} />
        </tbody>
      </table>
      <button onClick={handdleSubmit} >submit</button>
      {/* </form> */}
      {submittedData && (

        <p>my name is  {submittedData.name} , age is  {submittedData.age} and nic is  {submittedData.nic} </p>
      )}
    </div>
  )
}

export default About