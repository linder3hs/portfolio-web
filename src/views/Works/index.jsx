import { useState, useEffect } from "react"
import { Container, Grid, Typography } from "@mui/material"
import { getWorks } from "../../service/work"
import { CardWork } from "../../components"

const Works = () => {

  const [works, setWorks] = useState([])

  const fetchWorks = async () => {
    const works = await getWorks();

    console.log('works', works);

    setWorks(works);
  }

  useEffect(() => {
    fetchWorks();
  }, [])

  return (
    <Container maxWidth="md" style={{ marginTop: 100 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h2">Work</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          {
            works.length > 0 && works.map(work => (
              <CardWork data={work} />
            ))
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default Works
