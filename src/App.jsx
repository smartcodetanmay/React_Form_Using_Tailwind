import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400">
      
      <div className="p-6 bg-white/20 backdrop-blur-xl shadow-xl rounded-2xl w-[320px] border border-white/30">
        
        <h2 className="text-2xl font-bold text-white mb-5 text-center">
          Contact Form
        </h2>

        <form className="flex flex-col gap-4">
          
          <input 
            type="text"
            placeholder="Enter your name"
            className="p-3 rounded-lg bg-white/30 text-white placeholder-white/70 outline-none border border-white/40"
          />

          <input 
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-white/30 text-white placeholder-white/70 outline-none border border-white/40"
          />

          <button 
            type="submit"
            className="bg-white text-purple-700 font-semibold p-3 rounded-lg hover:bg-purple-100 transition"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
};

export default App;
