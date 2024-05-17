import { CircularProgress } from '@mui/material'
import styles from './pageLoader.module.less'

export const PageLoader = () => {
  return <CircularProgress className={styles.loader} />
}
