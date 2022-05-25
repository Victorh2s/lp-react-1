import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Exercitationem qui alias delectus sint ex quis quisquam suscipit est,
     tenetur ullam sit atque sunt corrupti nisi temporibus,
     accusamus molestias deserunt architecto?,`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
