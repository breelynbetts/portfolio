import React from 'react'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'

interface IProjectCard {
  data: IProjectData
}

interface IProjectData {
  title: string
}

const useStyles = makeStyles({
  root: {
    width: '40%',
  },
})

export default function ProjectCard(props: IProjectCard) {
  const { data } = props
  const styles = useStyles()

  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography>{data.title}</Typography>
      </CardContent>
    </Card>
  )
}
