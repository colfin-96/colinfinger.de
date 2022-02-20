import { Meta, Story } from '@storybook/angular';
import { BannerComponent } from './banner.component';

export default {
  title: 'Sth/Banner',
  component: BannerComponent,
} as Meta;

export const XYZ: Story = () => ({
  props: {
    componentVisible: true,
  },
});
