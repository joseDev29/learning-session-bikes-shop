import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { DataContextValue } from '../../interfaces/data-context.interface'

export const Notification = () => {
  const { notification, setNotification } =
    useContext<DataContextValue>(DataContext)

  const onClose = () =>
    setNotification({ message: '', type: 'success', visible: false })

  return notification.visible ? (
    <Snackbar
      open={true}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={1000}
    >
      <Alert severity={notification.type} variant='filled'>
        {notification.message}
      </Alert>
    </Snackbar>
  ) : (
    <></>
  )
}
