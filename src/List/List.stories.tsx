import { ComponentMeta, ComponentStory } from "@storybook/react"
import { useState } from "react"

import { List } from "."
import { receivedZones } from "../data"
import { Zone } from "../types/zone"

export default {
  title: "Components/List",
  component: List,
  args: {
    zones: receivedZones,
    onSetZones: () => {},
    numberOfVisibleChildren: receivedZones.length
  },
  argTypes: {
    numberOfVisibleChildren: {
      control: { type: "number", min: 1, max: receivedZones.length, step: 1 }
    }
  }
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => {
  const [zones, setZones] = useState<Array<Zone>>(receivedZones)

  return <List {...args} zones={zones} onSetZones={setZones} />
}

export const Primary = Template.bind({})
