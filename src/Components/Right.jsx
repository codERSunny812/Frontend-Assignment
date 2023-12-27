/* eslint-disable react/prop-types */
const Section = ({items}) => {
    // console.log(items);
    return (
       <>
            <div className="border-2 border-gray-300 my-6 mx-1  flex justify-between w-full min-h-16 items-center bg-[#F5F5F5]  p-2 rounded-md  ">
        <h1 className="font-bold  text-base">{items[1]?.label}</h1>
        <input type="text" placeholder={items[1]?.label} className="placeholder:p-2 bg-blue-100 border-2 border-blue-200 rounded-md min-w-52"  />
       
                {
                    items[1]?.subParameters != null  ? (
                        items[1]?.subParameters[1]?.options?.map((list)=>{
                            <div className="border-2 border-black m-2">
                              <h1>{list?.label}</h1>
                            </div>
                        })
                    ) : null
                }
                

       </div>
       </>
    );
};

const Right = ({userSchema}) => {
    // console.log( typeof userSchema);
    return userSchema?.length === 0 ? (
        <div className="w-full min-h-screen border border-black">
            <h1>please enter something</h1>
        </div>
       
    ) : (
        <>
            <div className="w-full min-h-screen border border-black">
                <div className="border-2 border-gray">
                    {/* map over the array  */}
                    {
                      Object?.entries(userSchema)?.map((items)=>{
                        console.log(items);
                        return(
                       <Section key={items?.id} items={items}/>
                        );
                      })
                    }
                </div>
            </div>
        </>
    );
};

export default Right;
