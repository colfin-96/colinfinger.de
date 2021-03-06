import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BannerComponent } from './banner.component';

export default {
  title: 'Animations/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
} as Meta;

export const Default: Story = () => ({
  props: {
    componentVisible: true,
  },
});
