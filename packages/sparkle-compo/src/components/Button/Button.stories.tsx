import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

/**
    Componente de botão.
*/
const meta: Meta<typeof Button> = {
    title: 'DESIGN SYSTEM/Button',
    component: Button,
    tags: [ 'autodocs' ],
    parameters: {
    layout: 'centered',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
        theme: {
            control: {
                type: 'inline-radio'
            }
        }
    },
    decorators: [
        (Story) => (
            <div style={{ width: '500px', display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <Story />
          </div>
        ),
    ]
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

}

export const Dark: Story = {
    args: {
        theme: 'dark',
    }
}

export const Light: Story = {
    args: {
        theme: 'light',
    }
}

export const Jade: Story = {
    args: {
        theme: 'jade',
    }
}

export const Small: Story = {
    args: {
        size: 'small',
    }
}

export const Medium: Story = {
    args: {
        size: 'medium',
    }
}

export const large: Story = {
    args: {
        size: 'large',
    }
}

/**
    Ocupa toda a largura disponível.
*/
export const Full: Story = {
    args: {
        size: 'full',
    }
}