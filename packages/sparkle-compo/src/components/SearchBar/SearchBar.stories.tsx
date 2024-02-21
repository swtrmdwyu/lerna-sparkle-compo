import { Meta, StoryObj } from "@storybook/react";
import SearchBar from ".";

/**
    Card que contém informações da nota.
*/
const meta: Meta<typeof SearchBar> = {
    title: 'DESIGN SYSTEM/SearchBar',
    component: SearchBar,
    tags: [ 'autodocs' ],
    parameters: {
    layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '600px', display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <Story />
          </div>
        ),
    ],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { }
