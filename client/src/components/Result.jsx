import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Wordform from "./Wordform";

export default function Result() {
  //material UI dependency
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const { word } = useParams();
  const [lookWord, SetLookWord] = useState("");

  useEffect(() => {
    const searchWord = async () => {
      try {
        const response = await fetch(`/api/words/${word}`, {
          method: "GET",
        });

        const json = await response.json(); // should I transform everything into a small caps ?
        SetLookWord(json);
      } catch (error) {
        console.log("errorz");
      }
    };
    searchWord();
  }, []);

  return (
    <div>
      {lookWord.length === 0
        ? ""
        : lookWord
            .slice()
            .sort((a, b) => a.word.localeCompare(b.word))
            .map((result) => {
              return (
                <Card sx={{ minWidth: 15 }} key={result.id}>
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
                    </Typography>
                    <Typography variant="body1">{result.example_2}</Typography>
                  </CardContent>
                  {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
                </Card>
              );
            })}
      {/* <Wordform /> // */}
    </div>
  );
}
