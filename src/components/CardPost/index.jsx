import { Card, CardContent, Typography, Divider } from "@mui/material"
import { format } from "date-fns"

const CardPost = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="h6">{format(new Date(data.createdAt), "d MMM y")} | {data.type}</Typography>
        <Typography variant="p">{data.text}</Typography>
        <Divider />
      </CardContent>
    </Card>
  )
}

export default CardPost
