import { Meta, StoryObj } from "@storybook/react";

import defaultAvatar from './assets/default-avatar.jpeg'
import Avatar from ".";

/**
    Componente de imagem de avatar do usuário.
*/
const meta: Meta<typeof Avatar> = {
    title: 'DESIGN SYSTEM/Avatar',
    component: Avatar,
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
        }
    }
}

export default meta;

type Story  = StoryObj<typeof meta>;

export const Default: Story = {

}

export const Bordered: Story = {
    args: {
        size: 'medium',
        $bordered: true,
        src: defaultAvatar,
    }
}

export const Small: Story = {
    args: {
        size: 'small',
        $bordered: false,
        src: defaultAvatar,
    }
}

export const Medium: Story = {
    args: {
        size: 'medium',
        $bordered: false,
        src: defaultAvatar,
    }
}

export const Large: Story = {
    args: {
        size: 'large',
        $bordered: false,
        src: defaultAvatar,
    }
}
