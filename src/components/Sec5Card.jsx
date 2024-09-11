import React from "react";
import Image from "next/image";
const Sec5Card = (props) => {
  return (
    <div>
      <Image src={props.src} width={370} height={420} />
    </div>
  );
};

export default Sec5Card;
