import React from 'react'
import { Stack , Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png' 


 export const BodyPart = ({item , setBodyPart, bodyPart}) => {
  return (
    <Stack 
        type = "button"
        alignItems = "center"
        justifyContent = "center"
        className='bodyPart-card'

        sx = {{
          borderTop : bodyPart === item ? '4px solid #9c27b0' : '',
          backgroundColor : '#fff',
          borderBottomLeftRadius : '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap  : '47px'
        }}
        onClick = {() => {
          setBodyPart(item);
          window.scrollTo({top: 1800,left : 100, behaviour: 'smooth'})

        }}

    >
        <img src = {Icon} alt = "dumbbell" style = {{width : '40px', height: '40px'}} />
        <Typography fontsize='24px' fontweight = 'bold' textTransform='capitalize' >{item}</Typography>

    </Stack>
  )
}

export default BodyPart