import { ComponentMeta, ComponentStory } from "@storybook/react"

import { List } from "."
import { receivedZones } from "../data"

export default {
  title: "Components/List",
  component: List,
  args: {
    zones: receivedZones,
    onSetZones: () => {}
  }
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Primary = Template.bind({})
