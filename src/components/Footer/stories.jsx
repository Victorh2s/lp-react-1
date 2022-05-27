import { Footer } from '.';
export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/Victorh2s">Feito por Victor Henrique</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
