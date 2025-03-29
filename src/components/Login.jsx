// AirspaceLogin.jsx
import React, { useState } from 'react';

const AirspaceLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="flex max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Login Section */}
        <div className="flex-1 p-10 flex flex-col">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5C13.5 5 8 10.5 8 17C8 23.5 13.5 29 20 29C26.5 29 32 23.5 32 17C32 10.5 26.5 5 20 5Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="8"
                  y1="17"
                  x2="32"
                  y2="17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FC3F7" />
                  <stop offset="1" stopColor="#2196F3" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-2xl font-semibold text-gray-800 ml-2.5">
              Airspace
            </span>
          </div>

          {/* Form */}
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-800" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Airspace@info.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors"
            />
          </div>

          <div className="mb-5 relative">
            <label
              className="block mb-2 text-sm text-gray-800"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="••••••••••••"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors"
            />
            <button
              type="button"
              className="absolute right-3 top-11 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              id="remember"
              defaultChecked
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
            <span className="text-xs text-gray-500 ml-6">
              Save my login details for next time.
            </span>
          </div>

          <button className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Sign In
          </button>

          <div className="flex items-center my-5 text-gray-600 text-sm">
            <span className="flex-1 h-px bg-gray-300"></span>
            <span className="px-3">OR</span>
            <span className="flex-1 h-px bg-gray-300"></span>
          </div>

          <div className="text-center mb-5 text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 font-medium">
              Sign up
            </a>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col gap-2.5 mb-8">
            <button className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
              Sign in with Google
            </button>
            {/* Add Facebook and Apple buttons similarly */}
          </div>

          <div className="text-center text-xs text-gray-400 mt-auto">
            © Copyright 2023 Airspace Corporation
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 p-10 flex flex-col items-center justify-center text-center relative">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full border-2 border-blue-500 opacity-10 z-[-1]"></div>
          <h1 className="text-3xl font-bold text-gray-800 mb-5">
            Securely Upload And Store Your Important Documents With{' '}
            <span className="text-blue-600">Airspace!</span>
          </h1>
          <svg
            className="w-64 max-w-full mt-8"
            width="300"
            height="250"
            viewBox="0 0 300 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150 50C120 50 95 75 95 105C95 135 120 160 150 160C180 160 205 135 205 105C205 75 180 50 150 50Z"
              fill="url(#paint1_linear)"
            />
            <path
              d="M150 180C140 180 130 175 125 165"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M175 165C170 175 160 180 150 180"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M150 210L150 180" stroke="black" strokeWidth="3" />
            <path d="M120 210L180 210" stroke="black" strokeWidth="3" />
            <circle cx="150" cy="105" r="25" fill="white" />
            <rect
              x="130"
              y="130"
              width="40"
              height="30"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M110 140C90 120 110 90 140 100"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M190 140C210 120 190 90 160 100"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint1_linear"
                x1="95"
                y1="105"
                x2="205"
                y2="105"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4FC3F7" />
                <stop offset="1" stopColor="#8C9EFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AirspaceLogin;