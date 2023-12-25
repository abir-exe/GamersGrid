const ContactUs = () => {
  

    return (
        <>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="w-2/6 overflow-hidden mx-auto uppercase text-3xl font-exo text-center border-b py-1 mb-20 mt-20">Contact Us</div>
      <div className="flex justify-center items-center gap-2 bg-base-100 shadow-xl rounded-xl py-10 pt20">
        <section data-aos="fade-right" className="w-1/3 px-10">
        
  
          {/* <!-- input Fields  --> */}
          <form className="ml-5"
            
            
          >
            {/* <!-- field1  --> */}
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text">
                  Name <span className="text-red-600 text-xl font-bold">*</span>
                </span>
                <span className="label-text-alt"></span>
              </label>
              <input
                name="Name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xl"
                maxLength={256}
                required
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </label>
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text">
                  Email <span className="text-red-600 text-xl font-bold">*</span>
                </span>
                <span className="label-text-alt"></span>
              </label>
              <input
                name="Email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xl"
                maxLength={256}
                required
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </label>
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text">
                  Subject{" "}
                  <span className="text-red-600 text-xl font-bold">*</span>
                </span>
                <span className="label-text-alt"></span>
              </label>
              <input
                name="Subject"
                placeholder="Subject"
                className="input input-bordered w-full max-w-xl "
                maxLength={256}
                required
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </label>
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text">
                  Message{" "}
                  <span className="text-red-600 text-xl font-bold">*</span>
                </span>
                <span className="label-text-alt"></span>
              </label>
              <textarea name="Message"
                type="text"
                placeholder="your message" className="textarea textarea-bordered textarea-lg w-full max-w-full" maxLength={2000}
            
                required ></textarea>
              <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </label>
            </div>
            <button className="  btn btn-outline px-24 w-full mx-auto">
              Send
            </button>
          </form>
        </section>
        <div className="divider divider-horizontal"></div>
        <section data-aos="fade-right" className="w-1/2">
        <div className="flex flex-col md:flex-row justify-between items-center shadow-md rounded-xl py-10 px-5">
      < div  className="w-1/2">
        <img className="rounded-xl" src="https://plus.unsplash.com/premium_photo-1682310468892-5d8ade38f606?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div> 
      <div className="w-1/2 my-20">
        <div className="text-center">
          <h2 className="text-4xl text-left font-extrabold px-5 ml-10">FINDING THE PERFECT TRAILS TO HIKE  IS EASY WITH <span className="text-[#d05c71]">NEWSLETTER</span></h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-24 mt-10">
          <div>
            <div className="avatar indicator">
              
              
            </div>
          </div>
          <form >
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
              type="email"
              required
            />
            
            <input  type="submit" className="btn join-item rounded-r-full text-white bg-[#d05c71]" value="Subscribe" />
          </div>
          </form>
        </div>
      </div>
    </div>
        </section>
      </div>
        </>
    );
  };
  
  export default ContactUs;
  