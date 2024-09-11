import React from "react";

const Contact = () => {
  return <div className="flex flex-col items-center h-[100vh] bg-[rgb(237,239,246)] py-16">
    <h1 className="text-center text-[34px] font-sans font-semibold mb-5">
        Contact Us
      </h1>
      <p className="text-center text-[#c3c7cc]">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        <br /> cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
      <form className="bg-white p-5 mt-6"  action="">
        <h1 className="font-bold mb-2">Enquiry Form</h1>
        <p className="text-sm">Are you looking for details about a certain property? Ask us a question using the form below.</p>
        <div className="grid grid-cols-2 gap-3 mt-5">
            <input type="text" className="border-[1px] px-3 py-1 rounded-md " placeholder="First Name"/><input type="text" className="border-[1px] px-3 py-1 rounded-md" placeholder="Last Name" />
        </div>
        <input type="email" className="w-full border-[1px] px-3 py-1 rounded-md mt-3" placeholder="Email ID"/>
        <textarea rows={5} className="w-full border-[1px] px-3 py-1 rounded-md mt-3 resize-none" placeholder="Questions or Comments">
        </textarea>
        <div className="flex justify-center mt-5">
        <button className="bg-[#4A60A1] text-white px-8 py-3 rounded-sm flex items-center">Submit</button>
        </div>
      </form>
  </div>;
};

export default Contact;
