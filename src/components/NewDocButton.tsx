import React from "react";

interface INewDocButton extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  // custom propertied go here
  disabled?: boolean;
}

const NewDocButton = ({ disabled, className, ...props }: INewDocButton) => {
  console.log("props will go here", props);
  return (
    <div>
      <button {...props} disabled>
        Cool btn
      </button>
    </div>
  );
};

export default NewDocButton;
