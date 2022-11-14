import { Checkbox, FormControlLabel, styled } from "@mui/material"
import Card, { CardProps } from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Zone } from "../types/zone"

const CardStyled = styled(Card)<CardProps>({
  background: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  width: "229px",
  height: "150px",
  boxSizing: "border-box",
  transition: "all 0.2s"
})

export interface Props extends Zone {
  onCheck: (id: string) => void
}

export const ZoneCard: React.FC<Props> = ({ onCheck, ...zone }) => {
  return (
    <CardStyled
      sx={{
        border: zone.isChecked ? "1px solid #3D8479" : "1px solid #EFEFEF",
        boxShadow: zone.isChecked ? "0px 0px 0px 2px #65E9D9" : "none",
        "&:hover": {
          border: zone.isChecked ? "1px solid #3D8479" : "1px solid #65E9D9",
          boxShadow: zone.isChecked ? "0px 0px 0px 2px #65E9D9" : "0px 0px 0px 1px #65E9D9"
        }
      }}
    >
      <CardMedia component="img" height="100" width="227" image={zone.media} alt="Flood zone" />
      <CardActions sx={{ flexGrow: 1 }}>
        <FormControlLabel
          sx={{ m: 0 }}
          control={
            <Checkbox
              sx={{
                "&.MuiCheckbox-root": { p: "3px", ml: "5" },
                "& .MuiSvgIcon-root": {
                  height: 18,
                  width: 18,
                  fill: zone.isChecked ? "#21B6A8" : "#616161"
                }
              }}
              checked={zone.isChecked}
              onChange={() => onCheck(zone.id)}
            />
          }
          label={<Typography variant="body2">{zone.title}</Typography>}
        />
      </CardActions>
    </CardStyled>
  )
}
