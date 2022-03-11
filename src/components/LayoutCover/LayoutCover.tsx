import Box from '@mui/material/Box'

import BikeCover from '../../assets/images/bike-cover.jpg'
import Logo from '../../assets/images/logo.svg'

export const LayoutCover = () => {
  return (
    <Box height={400} position='relative'>
      <img
        src={BikeCover}
        alt='Cover'
        width='100%'
        height='100%'
        style={{ objectFit: 'cover' }}
      />
      <Box
        position='absolute'
        height='100%'
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        top={0}
        left={0}
        style={{ zIndex: 10, backgroundColor: '' }}
      >
        <img src={Logo} height={60} alt='Logo' />
      </Box>
    </Box>
  )
}
