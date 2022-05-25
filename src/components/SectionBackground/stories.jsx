import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SelectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          tempore consequatur, iusto alias quis ad eaque praesentium? Id quasi
          repudiandae numquam voluptate mollitia, dignissimos explicabo
          veritatis ratione velit, est voluptatum!
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
      <SectionBackground {...args} />
    </div>
  );
};
