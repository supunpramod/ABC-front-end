// Signup.jsx
import React, { useState } from 'react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen text-white">
      {/* Left Panel */}
      <div className="hidden md:flex flex-1 flex-col justify-between p-8 bg-gradient-to-b from-[#5e42a6] to-[#4a3582] relative bg-[url('/placeholder.svg?height=800&width=600')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(94,66,166,0.7)] to-[rgba(74,53,130,0.9)] z-10"></div>
        
        <div className="text-2xl font-bold tracking-wide relative z-20">AMU</div>
        
        <a 
          href="#" 
          className="absolute top-8 right-8 bg-white/20 text-white px-4 py-2 rounded-full text-sm flex items-center z-20 hover:bg-white/30"
        >
          Back to website
          <span className="ml-2">→</span>
        </a>
        
        <div className="text-3xl font-semibold leading-tight mb-8 relative z-20">
          Capturing Moments,<br />
          Creating Memories
        </div>
        
        <div className="flex justify-center gap-2 relative z-20">
          <div className="w-8 h-1 bg-white/30 rounded-full"></div>
          <div className="w-8 h-1 bg-white/30 rounded-full"></div>
          <div className="w-8 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#1a1a1a] p-8 md:p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-semibold mb-4">Create an account</h1>
          <div className="mb-8 text-gray-400">
            Already have an account?{' '}
            <a href="#" className="text-[#a991ff] hover:underline">Log in</a>
          </div>

          <form autoComplete="off">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                autoComplete="off"
                className="flex-1 p-3 bg-[#2a2a2a] rounded border-none text-white focus:outline-none focus:ring-2 focus:ring-[#7e57c2]"
              />
              <input
                type="text"
                placeholder="Last name"
                autoComplete="off"
                className="flex-1 p-3 bg-[#2a2a2a] rounded border-none text-white focus:outline-none focus:ring-2 focus:ring-[#7e57c2]"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                className="w-full p-3 bg-[#2a2a2a] rounded border-none text-white focus:outline-none focus:ring-2 focus:ring-[#7e57c2]"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                autoComplete="new-password"
                className="w-full p-3 bg-[#2a2a2a] rounded border-none text-white focus:outline-none focus:ring-2 focus:ring-[#7e57c2]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            <div className="flex items-center mb-6 gap-2">
              <input
                type="checkbox"
                id="terms"
                defaultChecked
                className="w-5 h-5"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the{' '}
                <a href="#" className="text-[#a991ff] hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-[#7e57c2] rounded text-white font-medium hover:bg-[#6a46b7] transition-colors mb-8"
            >
              Create account
            </button>

            <div className="flex items-center mb-8 text-gray-500 text-sm">
              <div className="flex-1 h-px bg-[#333]"></div>
              <span className="px-4">Or register with</span>
              <div className="flex-1 h-px bg-[#333]"></div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 p-3 bg-[#2a2a2a] border border-[#444] rounded flex justify-center items-center gap-2 hover:bg-[#333]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex-1 p-3 bg-[#2a2a2a] border border-[#444] rounded flex justify-center items-center gap-2 hover:bg-[#333]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;