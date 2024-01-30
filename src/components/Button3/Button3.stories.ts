import type { Meta, StoryObj } from '@storybook/react';
import Button3 from './Button3';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Test3/Button',
  component: Button3,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Button3>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    secondary: false,
    tertiary: false,
    large: true,
    medium: false,
    small: false,
    children: 'Button'
  }
}


export const Secondary: Story = {
    args: {
      primary: false,
      secondary: true,
      tertiary: false,
      large: true,
      medium: false,
      small: false,
      children: 'Button'

    }

};

export const Tertiary: Story = {
  args: {
    primary: false,
    secondary: false,
    tertiary: true,
    large: true,
    medium: false,
    small: false,
    children: 'Button'
  }

};

