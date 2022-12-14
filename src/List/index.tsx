import { Stack } from "@mui/material"
import { ZoneCard } from "../Card"
import { Zone } from "../types/zone"

interface Props {
  numberOfVisibleChildren?: number
  zones: Array<Zone>
  direction?: "row" | "column" | "row-reverse" | "column-reverse"
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
  alignItems?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse"
  onSetZones: React.Dispatch<React.SetStateAction<Zone[]>>
}

export const List: React.FC<Props> = ({
  zones,
  numberOfVisibleChildren = zones.length,
  onSetZones,
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  flexWrap = "wrap",
  ...props
}) => {
  let visibleZones = zones
  if (numberOfVisibleChildren < zones.length) {
    visibleZones = zones.slice(0, numberOfVisibleChildren)
  }

  const handlerCheck = (id: string) => {
    onSetZones((prevZones) =>
      prevZones.map((zone) => (zone.id === id ? { ...zone, isChecked: !zone.isChecked } : zone))
    )
  }
  
  return (
    <Stack
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      {...props}
      gap="20px"
      sx={{ p: "20px" }}
    >
      {visibleZones.length &&
        visibleZones.map((zone) => <ZoneCard key={zone.id} {...zone} onCheck={handlerCheck} />)}
    </Stack>
  )
}
