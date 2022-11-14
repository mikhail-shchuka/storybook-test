import { action } from "@storybook/addon-actions"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"

import { useArgs } from "@storybook/client-api"
import { ZoneCard } from "."
import { receivedZones } from "../data"

export default {
  title: "Components/Cards/ZoneCard",
  component: ZoneCard,
  decorators: [withDesign],
  args: {
    ...receivedZones[0]
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/P98cKc3JKzUQDg0oaI0Id4/Component-Test?node-id=1%3A17&t=TFTOY5QxVHPde65Z-1"
    }
  }
} as ComponentMeta<typeof ZoneCard>

const Template: ComponentStory<typeof ZoneCard> = (args) => {
  const [{ isChecked }, updateArgs] = useArgs()
  const handler = () => {
    updateArgs({ isChecked: !isChecked })
    action("Check")(!isChecked)
  }

  return <ZoneCard {...args} isChecked={isChecked} onCheck={handler} />
}

export const Primary = Template.bind({})

export const Hover = Template.bind({})

Hover.parameters = {
  pseudo: { hover: true },
}

export const Checked = Template.bind({})

Checked.args = {
  isChecked: true
}
