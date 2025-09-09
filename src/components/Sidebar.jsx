import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Table, 
  FileCode, 
  Database, 
  Shield, 
  FolderOpen, 
  Zap, 
  Radio, 
  Users, 
  BarChart3, 
  FileText, 
  Settings
} from 'lucide-react';

function Sidebar({ isCollapsed, setIsCollapsed }) {
  const [showText, setShowText] = useState(!isCollapsed);

  useEffect(() => {
    if (isCollapsed) {
      // Delay hiding text when collapsing
      const timer = setTimeout(() => {
        setShowText(false);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // Show text early as sidebar starts expanding
      const timer = setTimeout(() => {
        setShowText(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isCollapsed]);

  const menuItems = [
    {
      icon: <Home size={20} strokeWidth={1.5} />,
      label: 'Project overview'
    },
    {
      icon: <Table size={20} strokeWidth={1.5} />,
      label: 'Table Editor'
    },
    {
      icon: <FileCode size={20} strokeWidth={1.5} />,
      label: 'SQL Editor'
    }
  ];

  const mainItems = [
    {
      icon: <Database size={20} strokeWidth={1.5} />,
      label: 'Database'
    },
    {
      icon: <Shield size={20} strokeWidth={1.5} />,
      label: 'Authentication'
    },
    {
      icon: <FolderOpen size={20} strokeWidth={1.5} />,
      label: 'Storage'
    },
    {
      icon: <Zap size={20} strokeWidth={1.5} />,
      label: 'Edge Functions'
    },
    {
      icon: <Radio size={20} strokeWidth={1.5} />,
      label: 'Realtime'
    }
  ];

  const advisorItems = [
    {
      icon: <Users size={20} strokeWidth={1.5} />,
      label: 'Advisors'
    }
  ];

  const reportItems = [
    {
      icon: <BarChart3 size={20} strokeWidth={1.5} />,
      label: 'Reports'
    },
    {
      icon: <FileText size={20} strokeWidth={1.5} />,
      label: 'Logs'
    }
  ];


  const settingsItems = [
    {
      icon: <Settings size={20} strokeWidth={1.5} />,
      label: 'Project Settings'
    }
  ];

  const renderMenuItem = (item, index) => (
    <a
      key={index}
      href="#"
      className={`flex items-center px-2 py-2 text-[13px] font-light rounded-md transition-colors overflow-hidden text-scale-900 hover:text-scale-1100 ${
        item.active
          ? 'bg-[#313131] text-scale-1100'
          : 'hover:bg-[#313131]'
      }`}
    >
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
        {item.icon}
      </div>
      <span 
        className="ml-2 truncate whitespace-nowrap transition-all duration-300"
        style={{
          opacity: showText ? 1 : 0,
          width: showText ? 'auto' : 0,
          overflow: showText ? 'visible' : 'hidden'
        }}
      >
        {item.label}
      </span>
    </a>
  );

  return (
    <div className={`fixed left-0 top-12 h-[calc(100vh-3rem)] bg-[#161616] border-r border-[#2E2E2E] transition-all duration-300 z-10 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-2">
          {/* Group 1: Top 3 menu items */}
          <div className="p-2 flex flex-col gap-0.5 mb-4">
            {menuItems.map(renderMenuItem)}
          </div>

          {/* Divider */}
          <div className="mx-4 mb-4" style={{ height: '0.5px', backgroundColor: '#232323' }}></div>

          {/* Group 2: Next 5 items (Main items) */}
          <div className="p-2 flex flex-col gap-0.5 mb-4">
            {mainItems.map(renderMenuItem)}
          </div>

          {/* Divider */}
          <div className="mx-4 mb-4" style={{ height: '0.5px', backgroundColor: '#232323' }}></div>

          {/* Group 3: Advisor, Report & Settings items */}
          <div className="p-2 flex flex-col gap-0.5">
            {advisorItems.map(renderMenuItem)}
            {reportItems.map(renderMenuItem)}
            {settingsItems.map(renderMenuItem)}
          </div>
        </div>
        
        {/* Collapse/Expand Button */}
        <div className="p-2">
          <div className="flex items-center">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex items-center justify-center w-9 h-8 text-gray-400 hover:text-white hover:bg-[#1f1f1f] rounded transition-colors"
            >
              {isCollapsed ? (
                // Sidebar Open Icon (when collapsed, show expand button)
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M9 4v16" />
                  <path d="M13 10l2 2l-2 2" />
                </svg>
              ) : (
                // Sidebar Close Icon (when open, show collapse button)
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M9 4v16" />
                  <path d="M15 10l-2 2l2 2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;