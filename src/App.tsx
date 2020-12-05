import React from 'react'
import Main from './pages/Main'
import ProjectCards from './components/ProjectCards'
import 'fontsource-roboto'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  app: {
    backgroundColor: 'rgb(242,242,247)',
    height: '100vh',
  },
})

function App() {
  const styles = useStyles()

  return (
    <div className={styles.app}>
      <Main />
      <ProjectCards />
    </div>
  )
}

export default App
