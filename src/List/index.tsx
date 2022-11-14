import { Stack, StackProps } from "@mui/material"
import { ZoneCard } from "../Card"
import { Zone } from "../types/zone"

interface Props {
  numberOfChildren?: number
  zones: Array<Zone>
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap?: string
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  onSetZones: React.Dispatch<React.SetStateAction<Zone[]>>
}

export const List: React.FC<Props> = ({
  zones,
  numberOfChildren = zones.length,
  onSetZones,
  direction = "row",
  gap = "20px",
  justifyContent = "center",
  alignItems = "space-between",
  flexWrap = "wrap",
  ...props
}) => {
  let visibleZones = zones
  if (numberOfChildren < zones.length) {
    visibleZones = zones.slice(0, numberOfChildren)
  }

  const handlerCheck = (id: string) => {
    onSetZones((prevZones) => prevZones.map((zone) => (zone.id === id ? { ...zone, isChecked: !zone.isChecked } : zone)))
  }
  return (
    <Stack direction={direction} justifyContent={justifyContent} alignItems={alignItems} flexWrap={flexWrap} {...props} gap={gap} sx={{ p: "20px" }}>
      {visibleZones.length && visibleZones.map((zone) => <ZoneCard key={zone.id} {...zone} onCheck={handlerCheck} />)}
    </Stack>
  )
}
