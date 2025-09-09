import React from 'react';

function TopMenuBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-[#161616] border-b border-[#2E2E2E] flex items-center justify-between px-4 z-20">
      {/* Left Section */}
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/spike_logo_icon.png" 
            alt="Spike Logo" 
            className="max-h-[25px] w-auto"
          />
          <span className="text-[13px] font-light bg-gray-700 text-gray-300 px-2 py-0.5 rounded">Free</span>
        </div>

        {/* 32px Spacing */}
        <div className="w-8"></div>

        {/* Project Selector */}
        <div className="flex items-center gap-2 text-[13px] font-light">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
            <path d="M7 0L14 4V14H0V4L7 0ZM7 2L2 5V12H6V8H8V12H12V5L7 2Z" fill="currentColor"/>
          </svg>
          <span className="text-white">Spike Waitlist</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Branch Selector */}
        <div className="flex items-center gap-2 text-[13px] font-light">
          <span className="text-gray-400">main</span>
          <span className="text-[11px] font-light bg-orange-600 text-white px-2 py-0.5 rounded">Production</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Connect Button */}
        <button className="flex items-center gap-2 text-[13px] font-light text-gray-300 hover:text-white transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 0.5L13.5 5.5L8.5 10.5M13 5.5H0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Connect</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Feedback Link */}
        <button className="text-[13px] font-light text-gray-400 hover:text-white transition-colors">
          Feedback
        </button>

        {/* Icon Buttons */}
        <div className="flex items-center gap-2">
          {/* Help/Question Icon */}
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.25 6.25C6.25 5.42 6.92 4.75 7.75 4.75H8.25C9.08 4.75 9.75 5.42 9.75 6.25C9.75 7.08 9.08 7.75 8.25 7.75H8V9.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="11.5" r="0.75" fill="currentColor"/>
            </svg>
          </button>

          {/* Message/Chat Icon */}
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3H14V11H5L2 14V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Notification Icon */}
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2C6.34 2 5 3.34 5 5V8L3 10H13L11 8V5C11 3.34 9.66 2 8 2Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 13C7 13.55 7.45 14 8 14C8.55 14 9 13.55 9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Settings/Grid Icon */}
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="5" height="5" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="10" y="1" width="5" height="5" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="1" y="10" width="5" height="5" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="10" y="10" width="5" height="5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>

        {/* User Avatar */}
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
          R
        </div>
      </div>
    </div>
  );
}

export default TopMenuBar;