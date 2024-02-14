import { Box } from "@mui/material"
import { useStyles } from "./style"
import * as React from 'react';
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import QuizAddedMessage from "../../components/Added";

const Home = () => {
    const classes = useStyles()
    const [added, setAdded] = React.useState(false)
    return (
        <Box className={classes.root}>
          <Navbar/>
          {added ? <QuizAddedMessage setAdded={setAdded}/> : <Form setAdded={setAdded}/>}
        </Box>
    )
}

export default Home