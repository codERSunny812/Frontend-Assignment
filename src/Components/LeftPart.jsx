/* eslint-disable react/prop-types */
const LeftPart = ({ userSchema, setUserSchema }) => {
    // console.log(typeof userSchema);
  return (
    <>
      <div className="w-full min-h-screen">
        <div className=" flex flex-col">
          <textarea
            type="text"
            className=" bg-[#1E1E1E] text-white w-full min-h-screen outline-none"
            onChange={(e) => {
              setUserSchema(e.target.value);
            }}
          />

          <div className="btn flex items-center justify-center ">
            <button
              type="submit"
              className="border-none capitalize py-2 px-4 bg-slate-600 text-white font-normal rounded-3xl  my-2 focus:bg-red-600 hover:bg-black hover:text-white hover:animate-pulse "
              onClick={() => setUserSchema(JSON.parse(userSchema))}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPart;
