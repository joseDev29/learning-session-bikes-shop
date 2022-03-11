import { createTheme, ThemeProvider } from '@mui/material/styles'

import { DataProvider } from './context/DataProvider'
import { UserLayout } from './layouts/UserLayout'
import { Home } from './pages/Home'

import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#610094',
    },
    // mode: 'dark',
  },
})

export const App = () => {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <UserLayout>
          <Home />
        </UserLayout>
      </ThemeProvider>
    </DataProvider>
  )
}
