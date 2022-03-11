import { ChangeEvent, Fragment, useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CircularProgress from '@mui/material/CircularProgress'

import { DataContext } from '../context/DataProvider'
import { BikeCard } from '../components/BikeCard/BikeCard'

import { DataContextValue } from '../interfaces/data-context.interface'

export const Home = () => {
  const { bikes, loading, getBikes } = useContext<DataContextValue>(DataContext)
  const [searchText, setSearchText] = useState<string>('')

  const filteredData = bikes.filter((item) =>
    item.model.toLowerCase().includes(searchText.toLowerCase()),
  )

  const onChangeSearch = (
    ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => setSearchText(ev.target.value)

  useEffect(() => {
    getBikes()
  }, [])

  return (
    <Fragment>
      <Box
        marginTop={4}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant='h5' fontWeight='bold'>
          Products
        </Typography>
        <OutlinedInput
          size='small'
          placeholder='Search'
          endAdornment={<SearchOutlinedIcon />}
          onChange={onChangeSearch}
        />
      </Box>
      {!loading ? (
        <Box marginTop={3}>
          <Grid container spacing={2}>
            {filteredData.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                <BikeCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box
          marginTop={12}
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <CircularProgress color='primary' />
          <Typography variant='h5' color='primary' marginTop={3}>
            Loading
          </Typography>
        </Box>
      )}
    </Fragment>
  )
}
