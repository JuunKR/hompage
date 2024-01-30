import type { Meta, StoryObj } from '@storybook/react';
import Button2 from './Button2';

enum StyleType {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

enum Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Test2/Button',
  component: Button2,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    styleType: 
      { control: 'select', options: Object.values(StyleType) }
      ,
    size: 
      { control: 'select', options: Object.values(Size) }

  },
} satisfies Meta<typeof Button2>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    styleType: StyleType.Primary,
    size: Size.Large,
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    styleType: StyleType.Secondary,
    size: Size.Large,
    children: 'Button',
  },
}

export const Tertiary: Story = {
  args: {
    styleType: StyleType.Tertiary,
    size: Size.Large,
    children: 'Button',
  },
}

