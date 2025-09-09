import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopMenuBar from './TopMenuBar';

function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#161616] text-gray-100">
      {/* Top Menu Bar */}
      <TopMenuBar />
      
      {/* Import the Sidebar component */}
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed} 
      />

      {/* Main Content Area - adjust margin based on sidebar and top bar */}
      <div className={`pt-12 transition-all duration-300 ${
        isSidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        {/* Top Header Bar */}
        <div className="h-12 bg-[#1f1f1f] border-b border-[#2E2E2E] flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Project:</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#2a2a2a] rounded-md">
              <span className="text-sm font-medium text-white">Spike Waitlist</span>
              <span className="text-xs text-gray-500">PROD</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">Feedback</button>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-light text-white mb-2">Dashboard</h2>
            <p className="text-gray-400">Last 60 minutes • Statistics for last 60 minutes</p>
          </div>
          
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Database Card */}
            <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2E2E2E] hover:border-[#3e3e3e] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Database</p>
                  <p className="text-xs text-gray-500">REST Requests</p>
                </div>
                <span className="text-2xl opacity-20">💾</span>
              </div>
              <p className="text-3xl font-light text-white mb-4">0</p>
              <div className="pt-4 border-t border-[#2E2E2E]">
                <p className="text-xs text-gray-500">No data to show</p>
                <p className="text-xs text-gray-600">It may take up to 24 hours for data to refresh</p>
              </div>
            </div>
            
            {/* Auth Card */}
            <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2E2E2E] hover:border-[#3e3e3e] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Auth</p>
                  <p className="text-xs text-gray-500">Auth Requests</p>
                </div>
                <span className="text-2xl opacity-20">🔐</span>
              </div>
              <p className="text-3xl font-light text-white mb-4">0</p>
              <div className="pt-4 border-t border-[#2E2E2E]">
                <p className="text-xs text-gray-500">No data to show</p>
                <p className="text-xs text-gray-600">It may take up to 24 hours for data to refresh</p>
              </div>
            </div>
            
            {/* Storage Card */}
            <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2E2E2E] hover:border-[#3e3e3e] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Storage</p>
                  <p className="text-xs text-gray-500">Storage Requests</p>
                </div>
                <span className="text-2xl opacity-20">📁</span>
              </div>
              <p className="text-3xl font-light text-white mb-4">0</p>
              <div className="pt-4 border-t border-[#2E2E2E]">
                <p className="text-xs text-gray-500">No data to show</p>
                <p className="text-xs text-gray-600">It may take up to 24 hours for data to refresh</p>
              </div>
            </div>
            
            {/* Realtime Card */}
            <div className="bg-[#1f1f1f] rounded-lg p-6 border border-[#2E2E2E] hover:border-[#3e3e3e] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Realtime</p>
                  <p className="text-xs text-gray-500">Realtime Requests</p>
                </div>
                <span className="text-2xl opacity-20">📡</span>
              </div>
              <p className="text-3xl font-light text-white mb-4">0</p>
              <div className="pt-4 border-t border-[#2E2E2E]">
                <p className="text-xs text-gray-500">No data to show</p>
                <p className="text-xs text-gray-600">It may take up to 24 hours for data to refresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;