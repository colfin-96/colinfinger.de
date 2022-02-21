import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BannerComponent } from './banner.component';

export default {
  title: 'Sth/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
} as Meta;

export const XYZ: Story = () => ({
  props: {
    componentVisible: true,
  },
});
