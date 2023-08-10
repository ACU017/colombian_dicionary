import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Result({ handleResult }) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <div>
      {handleResult.length === 0
        ? ""
        : handleResult
            .slice()
            .sort((a, b) => a.word.localeCompare(b.word))
            .map((result) => {
              return (
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 25,
                      }}
                      variant="h5"
                      component="div"
                    >
                      {result.word}
                    </Typography>
                    <Typography variant="body1" component="div">
                      Categoría: <i>{result.category}</i>
                    </Typography>
                    <Typography variant="body1" component="div">
                      Definición : {result.definition_es}
                    </Typography>
                    <Typography variant="body1">
                      Ejemplos : {result.example_1}
                      {result.example_2}
                    </Typography>
                    <Typography variant="body1">{result.example_2}</Typography>
                  </CardContent>
                  {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
                </Card>
              );
            })}
    </div>
  );
}
