import React from "react";

const Reset = ({resetValue}) => {
return (
<div className="reset" onClick={resetValue}>
New Game
</div>
);
};

export default Reset;