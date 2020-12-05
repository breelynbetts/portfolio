import React, { useState } from 'react'
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    color: '#111111',
    boxShadow: 'none',
  },
  splitCont: { display: 'flex', width: '100%' },
  split: {
    borderRadius: 0,
    flex: 1,
    height: '100%',
  },
  proj: {
    backgroundColor: '#b3ddd1',
    '&:hover': {
      backgroundColor: '#80beaf',
    },
  },
  work: {
    backgroundColor: '#f5b994',
    '&:hover': {
      backgroundColor: '#ee9c62',
    },
  },
  splitText: {
    padding: '7.5px',
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '2px',
  },
  underlined: {
    boxShadow: '0 1px 0 0 #111111',
  },
  name: {
    paddingTop: '15px',
    justifyContent: 'flex-end',
  },
  nameText: {
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '2px',
  },
  menu: {
    width: '60vw',
    display: 'flex',
    justifyContent: 'space-around',
  },
})

export default function Header() {
  const styles = useStyles()
  const [active, setActive] = useState('proj')

  const projStyle = clsx({
    [styles.splitText]: true,
    [styles.underlined]: active === 'proj',
  })
  const workStyle = clsx({
    [styles.splitText]: true,
    [styles.underlined]: active === 'work',
  })
  return (
    <AppBar className={styles.root} position="sticky">
      <Toolbar variant="dense" className={styles.splitCont}>
        <Button
          className={clsx(styles.split, styles.proj)}
          onClick={() => setActive('proj')}
        >
          <Typography className={projStyle}>Projects</Typography>
        </Button>
        <Button
          className={clsx(styles.split, styles.work)}
          onClick={() => setActive('work')}
        >
          <Typography className={workStyle}>Resume</Typography>
        </Button>
      </Toolbar>
      <Toolbar className={styles.name}>
        <Typography variant="h4" className={styles.nameText}>
          Breelyn Betts
        </Typography>
      </Toolbar>
      <Toolbar variant="dense">
        <div className={styles.menu}>
          <Button>School</Button>
          <Button>Start Ups</Button>
          <Button>Hackathon</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
