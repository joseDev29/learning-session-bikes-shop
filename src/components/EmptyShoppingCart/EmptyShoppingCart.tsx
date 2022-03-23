import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined'

export const EmptyShoppingCart = () => {
  return (
    <Box
      display='flex'
      height='calc(100vh - 72px)'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      paddingX={4}
    >
      <ElectricBikeOutlinedIcon style={{ fontSize: 100 }} />
      <Typography
        variant='h6'
        fontWeight='bold'
        textAlign='center'
        marginTop={2}
      >
        You have not added any products to your cart yet
      </Typography>
    </Box>
  )
}
