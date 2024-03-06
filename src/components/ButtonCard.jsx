import React from 'react';

const ButtonCard = (props) => {
  
  return (
    <div className={`${props.id ? "bg-black" : "bg-[#191970]"} text-white text-lg px-6 py-4 rounded-lg flex gap-4 items-center cursor-pointer justify-center`}>
      <button  className={`${!props.icon ? "text-center w-fit" : ""}`}>{props.label}</button>
      {props.icon && <img src={props.icon} alt="" className="bg-white rounded-full w-6 h-6" />}
    </div>
  );
};

export default ButtonCard;
