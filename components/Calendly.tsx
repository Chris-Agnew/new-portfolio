import { InlineWidget } from "react-calendly";

type Props = {
  url: string;
};

const Calendly = (props: Props) => {
  return (
    <div>
      <InlineWidget url={props.url} />
    </div>
  );
};

export default Calendly;
