import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'Atom/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
} as Meta;

export const Default: Story = () => ({});

export const Height100pixel: Story = () => ({
  props: {
    height: '100px',
  },
});
