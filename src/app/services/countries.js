import axios from 'axios';


/*
  Utilizá esta función para completar el llamado a la API.
*/
export const getCountries = () => {
  return(
  axios.get ('http://10.0.0.98:3000/countries/argentina')
    .then(result =>{
      return result.data
    })
    .catch(error =>{
      console.log(error)
    })
  )
}