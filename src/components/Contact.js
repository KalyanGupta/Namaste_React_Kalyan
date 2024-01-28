import React from 'react';

const Contact = () => {
  return (
    <div className="bg-blue-100 p-8 mt-8 rounded-md">
      <h1 className="font-bold text-3xl mb-4">Contact Us</h1>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-400 p-3 mb-4 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-400 p-3 mb-4 rounded-md resize-none"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;





































// const Contact = () => {
//     return(
//         <div>
//             <h1 className="font-bold text-3xl p-4 m-4">This is a contact us page</h1>
//             <form>
//                 <input type="text" placeholder="Name" className="border border-black p-2 m-2"/>
//                 <input type="text" placeholder="Message" className="border border-black p-2 m-2"/>
//                 <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">Submit</button>
//             </form>
//         </div>
//     )
     
// }


// export default Contact;

