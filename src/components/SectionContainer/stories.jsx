import { SectionContainer } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          totam, qui, delectus tempore enim consequuntur optio accusamus
          laboriosam perspiciatis vitae blanditiis voluptatum eum esse veritatis
          eveniet facere consectetur beatae numquam!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
