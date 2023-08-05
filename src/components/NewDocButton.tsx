import { FC } from "react";

interface INewDocButton {
  backgroundColor?: string;
  disabled?: boolean;
}

const NewDocButton: FC<INewDocButton> = ({ backgroundColor, disabled }) => {
  return (
    <div>
      <button disabled={disabled} style={{ backgroundColor: backgroundColor }}>
        Cool btn
      </button>
    </div>
  );
};

export default NewDocButton;
