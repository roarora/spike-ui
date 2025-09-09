import React, { useState } from 'react';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L8.75 2.25L11.5 2.75L9.25 5L9.75 7.75L7 6.5L4.25 7.75L4.75 5L2.5 2.75L5.25 2.25L7 0Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Project overview',
      active: true
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3H13V5H1V3ZM1 7H13V9H1V7ZM1 11H13V13H1V11Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Table Editor'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H12V12H2V2ZM4 4V6H6V4H4ZM8 4V6H10V4H8ZM4 8V10H10V8H4Z" fill="currentColor"/>
        </svg>
      ),
      label: 'SQL Editor'
    }
  ];

  const mainItems = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L14 4V14H0V4L7 0ZM7 2L2 5V12H6V8H8V12H12V5L7 2Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Database'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C10.5 0 14 2 14 4.5C14 7 10.5 9 7 9C3.5 9 0 7 0 4.5C0 2 3.5 0 7 0ZM14 7.5C14 9.5 11 11 7 11C3 11 0 9.5 0 7.5V9.5C0 12 3.5 14 7 14C10.5 14 14 12 14 9.5V7.5Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Authentication'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3H10V2C10 0.9 9.1 0 8 0H6C4.9 0 4 0.9 4 2V3H2C0.9 3 0 3.9 0 5V12C0 13.1 0.9 14 2 14H12C13.1 14 14 13.1 14 12V5C14 3.9 13.1 3 12 3ZM6 2H8V3H6V2ZM7 9C6.4 9 6 8.6 6 8C6 7.4 6.4 7 7 7C7.6 7 8 7.4 8 8C8 8.6 7.6 9 7 9Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Storage'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 0L14 1.5L8.5 7L14 12.5L12.5 14L7 8.5L1.5 14L0 12.5L5.5 7L0 1.5L1.5 0L7 5.5L12.5 0Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Edge Functions'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L9 4H14L10 7L12 14L7 11L2 14L4 7L0 4H5L7 0Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Realtime'
    }
  ];

  const advisorItems = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C8.1 0 9 0.9 9 2C9 3.1 8.1 4 7 4C5.9 4 5 3.1 5 2C5 0.9 5.9 0 7 0ZM10 12V14H4V12C4 10.9 4.9 10 6 10H8C9.1 10 10 10.9 10 12Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Advisors'
    }
  ];

  const reportItems = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 0H12C13.1 0 14 0.9 14 2V12C14 13.1 13.1 14 12 14H2C0.9 14 0 13.1 0 12V2C0 0.9 0.9 0 2 0ZM4 4V10H6V4H4ZM8 6V10H10V6H8Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Reports'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H12V4H2V2ZM2 6H10V8H2V6ZM2 10H8V12H2V10Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Logs'
    }
  ];

  const docItems = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 0H8L14 6V12C14 13.1 13.1 14 12 14H2C0.9 14 0 13.1 0 12V2C0 0.9 0.9 0 2 0ZM8 0V6H14L8 0ZM4 8H10V9H4V8ZM4 10H10V11H4V10Z" fill="currentColor"/>
        </svg>
      ),
      label: 'API Docs'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C3.1 0 0 3.1 0 7C0 10.9 3.1 14 7 14C10.9 14 14 10.9 14 7C14 3.1 10.9 0 7 0ZM10 8H8V10H6V8H4V6H6V4H8V6H10V8Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Integrations'
    }
  ];

  const settingsItems = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 0L9 1.5C9.4 1.6 9.8 1.8 10.1 2L11.5 1.5L12.5 3.5L11.4 4.4C11.5 4.8 11.5 5.2 11.4 5.6L12.5 6.5L11.5 8.5L10.1 8C9.8 8.2 9.4 8.4 9 8.5L8.5 10H6.5L6 8.5C5.6 8.4 5.2 8.2 4.9 8L3.5 8.5L2.5 6.5L3.6 5.6C3.5 5.2 3.5 4.8 3.6 4.4L2.5 3.5L3.5 1.5L4.9 2C5.2 1.8 5.6 1.6 6 1.5L6.5 0H8.5ZM7.5 3C6.1 3 5 4.1 5 5.5C5 6.9 6.1 8 7.5 8C8.9 8 10 6.9 10 5.5C10 4.1 8.9 3 7.5 3Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Project Settings'
    }
  ];

  const renderMenuItem = (item, index) => (
    <a
      key={index}
      href="#"
      className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors ${
        item.active
          ? 'bg-[#2a2a2a] text-white border-r-2 border-green-500'
          : 'text-gray-400 hover:text-white hover:bg-[#1f1f1f]'
      }`}
    >
      <div className="w-4 h-4 flex items-center justify-center">
        {item.icon}
      </div>
      {!isCollapsed && <span className="truncate">{item.label}</span>}
    </a>
  );

  return (
    <div className={`fixed left-0 top-0 h-full bg-[#161616] border-r border-[#2E2E2E] transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-4">
          {/* Top menu items */}
          <div className="mb-6">
            {menuItems.map(renderMenuItem)}
          </div>

          {/* Main items */}
          <div className="mb-6">
            {mainItems.map(renderMenuItem)}
          </div>

          {/* Advisor items */}
          <div className="mb-6">
            {advisorItems.map(renderMenuItem)}
          </div>

          {/* Report items */}
          <div className="mb-6">
            {reportItems.map(renderMenuItem)}
          </div>

          {/* Doc items */}
          <div className="mb-6">
            {docItems.map(renderMenuItem)}
          </div>

          {/* Settings */}
          <div>
            {settingsItems.map(renderMenuItem)}
          </div>
        </div>
        
        {/* Collapse/Expand Button */}
        <div className="p-3">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center justify-start w-full h-8 p-2 text-gray-400 hover:text-white hover:bg-[#1f1f1f] rounded transition-colors"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="flex-shrink-0"
            >
              <path d="M2 3h12M2 8h12M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;