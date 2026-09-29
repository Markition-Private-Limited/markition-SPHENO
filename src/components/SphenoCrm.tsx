import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  SlidersHorizontal, 
  Plus, 
  LayoutDashboard, 
  Bot, 
  MessageSquare, 
  GitBranch, 
  BookOpen, 
  FileCode, 
  Layers, 
  Cpu, 
  Key, 
  BarChart3, 
  CreditCard, 
  Users, 
  FileText, 
  Settings, 
  CheckCircle2, 
  ArrowUpRight, 
  Activity, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';

export const SphenoCrm: React.FC = () => {
  const [metricView, setMetricView] = useState<'Interactions' | 'Tokens' | 'Revenue'>('Interactions');
  const [activeNav, setActiveNav] = useState<string>('dashboard');

  return (
    <section id="crm" className="py-20 md:py-28 bg-[#F5F5F2] text-[#080C42] border-b border-[#DEDED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. EDITORIAL SECTION HEADER                               */}
        {/* ========================================================= */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="label-eyebrow text-[#0018C5] mb-3 flex items-center gap-2">
            <span>03</span>
            <span className="text-[#6D7CFF]">·</span>
            <span>SPHENO CRM</span>
          </div>
          <h2 className="headline-section text-[#080C42] text-balance font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Business intelligence &amp; <br className="hidden sm:inline" />
            customer management, unified.
          </h2>
          <p className="body-lead text-[#6E706D] mt-4 text-base sm:text-lg">
            Every conversation from Spheno Chat, Spheno Voice, and Spheno WhatsApp automatically feeds into one central intelligence layer. No manual entry, no fragmented spreadsheets, and zero lost pipeline.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. THE HIGH-END SPHENO CRM ENTERPRISE CONSOLE WINDOW      */}
        {/* Recreating the ultra-refined light UI dashboard           */}
        {/* ========================================================= */}
        <div className="bg-[#FAFAFA] rounded-2xl sm:rounded-3xl border border-[#E5E7EB] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.12)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[820px]">
            
            {/* ----------------------------------------------------- */}
            {/* LEFT SIDEBAR NAVIGATION                               */}
            {/* ----------------------------------------------------- */}
            <aside className="lg:col-span-3 xl:col-span-2 bg-[#F8F9FC] border-b lg:border-b-0 lg:border-r border-[#E5E7EB] p-4 sm:p-5 flex flex-col justify-between select-none">
              
              <div className="space-y-6">
                
                {/* Brand Logo & Identifier */}
                <div className="flex items-center gap-3 px-1 py-1">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0018C5] via-[#2563EB] to-[#38BDF8] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm tracking-tight text-[#0F172A] leading-none flex items-center gap-1.5">
                      <span>Spheno CRM</span>
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-[#64748B] block mt-1">
                      ENTERPRISE OS
                    </span>
                  </div>
                </div>

                {/* Sidebar Navigation Groups */}
                <div className="space-y-5 text-xs">
                  
                  {/* Group 1: MAIN */}
                  <div>
                    <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider px-3 mb-2">
                      Main
                    </div>
                    <nav className="space-y-1">
                      <button
                        onClick={() => setActiveNav('dashboard')}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl font-medium transition-all ${
                          activeNav === 'dashboard'
                            ? 'bg-[#0F172A] text-white shadow-sm'
                            : 'text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <LayoutDashboard className="w-4 h-4" />
                          <span>Dashboard</span>
                        </div>
                        {activeNav === 'dashboard' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        )}
                      </button>

                      <button
                        onClick={() => setActiveNav('agents')}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl font-medium transition-all ${
                          activeNav === 'agents'
                            ? 'bg-[#0F172A] text-white shadow-sm'
                            : 'text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Bot className="w-4 h-4" />
                          <span>AI Agents</span>
                        </div>
                        <span className="text-[11px] px-1.5 py-0.2 rounded-md bg-[#E2E8F0] text-[#334155] font-mono font-bold">
                          247
                        </span>
                      </button>

                      <button
                        onClick={() => setActiveNav('conversations')}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl font-medium transition-all ${
                          activeNav === 'conversations'
                            ? 'bg-[#0F172A] text-white shadow-sm'
                            : 'text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <MessageSquare className="w-4 h-4" />
                          <span>Conversations</span>
                        </div>
                        <span className="text-[11px] px-1.5 py-0.2 rounded-md bg-[#DBEAFE] text-[#1D4ED8] font-mono font-bold">
                          18
                        </span>
                      </button>

                      <button
                        onClick={() => setActiveNav('workflows')}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A] transition-all"
                      >
                        <GitBranch className="w-4 h-4" />
                        <span>Workflows</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('kb')}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A] transition-all"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Knowledge Base</span>
                      </button>
                    </nav>
                  </div>

                  {/* Group 2: AUTOMATION */}
                  <div>
                    <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider px-3 mb-2">
                      Automation
                    </div>
                    <nav className="space-y-1">
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl font-medium text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A] cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <Layers className="w-4 h-4" />
                          <span>Integrations</span>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold uppercase tracking-wider">
                          Active
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A] cursor-pointer">
                        <Cpu className="w-4 h-4" />
                        <span>Automations</span>
                      </div>

                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A] cursor-pointer">
                        <Key className="w-4 h-4" />
                        <span>API Keys</span>
                      </div>
                    </nav>
                  </div>

                  {/* Group 3: INSIGHTS & WORKSPACE */}
                  <div>
                    <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider px-3 mb-2">
                      Insights &amp; Workspace
                    </div>
                    <nav className="space-y-1">
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A] cursor-pointer">
                        <BarChart3 className="w-4 h-4" />
                        <span>Analytics</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A] cursor-pointer">
                        <Users className="w-4 h-4" />
                        <span>Team Members</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium text-[#475569] hover:bg-[#EDF2F7] hover:text-[#0F172A] cursor-pointer">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </div>
                    </nav>
                  </div>

                </div>

              </div>

              {/* Sidebar Footer User Pill */}
              <div className="pt-4 border-t border-[#E5E7EB] mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-300 overflow-hidden flex items-center justify-center font-bold text-xs text-[#0018C5]">
                    SC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Spheno Cluster</div>
                    <div className="text-[10px] text-[#64748B]">v3.4.2 Enterprise</div>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

            </aside>

            {/* ----------------------------------------------------- */}
            {/* MAIN DASHBOARD CONTENT AREA                           */}
            {/* ----------------------------------------------------- */}
            <main className="lg:col-span-9 xl:col-span-10 p-5 sm:p-7 md:p-8 bg-[#FAFAFA] flex flex-col justify-between space-y-7">
              
              {/* TOP HEADER CONTROLS (Search, Notifications, Profile) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                
                {/* Search Bar with ⌘K Badge */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    readOnly
                    placeholder="Search patients, leads, recordings..."
                    className="w-full pl-10 pr-12 py-2 text-xs sm:text-sm rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-[#64748B] bg-[#F1F5F9] border border-[#CBD5E1] rounded">
                    ⌘K
                  </span>
                </div>

                {/* Right Profile & Action Controls */}
                <div className="flex items-center justify-end gap-3">
                  <button 
                    aria-label="Notifications"
                    className="w-9 h-9 rounded-xl bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center shadow-xs transition-colors relative"
                  >
                    <Bell className="w-4 h-4" />
                    <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-2 right-2 ring-2 ring-white" />
                  </button>

                  <button 
                    aria-label="Filter Preferences"
                    className="w-9 h-9 rounded-xl bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center shadow-xs transition-colors"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                  </button>

                  {/* Profile Pill */}
                  <div className="flex items-center gap-2.5 pl-2 border-l border-[#E2E8F0]">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                      alt="Practice Administrator"
                      className="w-9 h-9 rounded-xl object-cover border border-[#CBD5E1]"
                    />
                    <div className="hidden sm:block text-left">
                      <div className="text-xs font-bold text-[#0F172A]">Dr. Marcus Vance</div>
                      <div className="text-[11px] text-[#64748B]">Principal Director</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* WELCOME HERO & ACTION BAR */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Welcome back, Dr. Vance
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                    Here&apos;s an overview of your AI autonomous platform and patient pipeline today.
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                    <Plus className="w-4 h-4" />
                    <span>Create Agent</span>
                  </button>
                </div>
              </div>

              {/* ----------------------------------------------------- */}
              {/* TOP 3 KPI CARDS (CIRCULAR PROGRESS METERS)            */}
              {/* Matching Image 1 exactly                              */}
              {/* ----------------------------------------------------- */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                
                {/* KPI Card 1: ACTIVE AGENTS */}
                <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      Active Agents
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-1 tabular-nums">
                      247 <span className="text-sm font-normal text-[#94A3B8]">/ 310</span>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <span>+13</span>
                      <span className="text-[#64748B] font-medium">across 18 workspaces</span>
                    </div>
                  </div>

                  {/* Circular Progress Ring (69%) */}
                  <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-[#E2E8F0]"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#0284C7]"
                        strokeDasharray="69, 100"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-black text-[#0F172A] tabular-nums">
                      69%
                    </span>
                  </div>
                </div>

                {/* KPI Card 2: TASKS TODAY */}
                <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      Tasks Today
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-1 tabular-nums">
                      7,390 <span className="text-sm font-normal text-[#94A3B8]">/ 12,086</span>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                      <span>-8</span>
                      <span className="text-[#64748B] font-medium">vs yesterday</span>
                    </div>
                  </div>

                  {/* Circular Progress Ring (52%) */}
                  <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-[#E2E8F0]"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#F43F5E]"
                        strokeDasharray="52, 100"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-black text-[#0F172A] tabular-nums">
                      52%
                    </span>
                  </div>
                </div>

                {/* KPI Card 3: REVENUE PIPELINE */}
                <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      Revenue Gen
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-1 tabular-nums">
                      $82.6K
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <span>+32%</span>
                      <span className="text-[#64748B] font-medium">attributed MRR</span>
                    </div>
                  </div>

                  {/* Circular Progress Ring (74%) */}
                  <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-[#E2E8F0]"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#8B5CF6]"
                        strokeDasharray="74, 100"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-black text-[#0F172A] tabular-nums">
                      74%
                    </span>
                  </div>
                </div>

              </div>

              {/* ----------------------------------------------------- */}
              {/* MAIN CONTENT 2-COLUMN SPLIT                           */}
              {/* Left (8 cols): Graph + Recent Conv + Activity Feed    */}
              {/* Right (4 cols): Top Agents + System Health            */}
              {/* ----------------------------------------------------- */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                
                {/* LEFT 8 COLUMNS */}
                <div className="xl:col-span-8 space-y-6">
                  
                  {/* USAGE ANALYTICS CURVE CHART */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs">
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">
                          Usage Analytics
                        </h4>
                        <p className="text-xs text-[#64748B]">
                          Last 7 days overview across all voice, chat, and WhatsApp pipelines
                        </p>
                      </div>

                      {/* Dropdown Metric Filter */}
                      <div className="relative">
                        <select
                          value={metricView}
                          onChange={(e) => setMetricView(e.target.value as any)}
                          className="appearance-none bg-[#F8FAFC] border border-[#CBD5E1] text-[#334155] text-xs font-semibold rounded-lg px-3 py-1.5 pr-7 focus:outline-none cursor-pointer"
                        >
                          <option value="Interactions">Interactions</option>
                          <option value="Tokens">Tokens</option>
                          <option value="Revenue">Revenue Pipeline</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-[#64748B] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* SVG Chart Area matching reference */}
                    <div className="relative w-full h-52 sm:h-56">
                      
                      {/* Interactive Peak Tooltip Pill */}
                      <div className="absolute top-2 left-[58%] -translate-x-1/2 bg-[#0F172A] text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg shadow-lg z-10 flex items-center gap-1.5 pointer-events-none">
                        <span>Peak Load:</span>
                        <span className="text-cyan-400">18,500</span>
                      </div>

                      {/* Vertical Guideline at Peak */}
                      <div className="absolute top-10 bottom-6 left-[58%] w-px border-l border-dashed border-[#0018C5]/40 pointer-events-none" />

                      {/* SVG Canvas */}
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="crmChartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                            <stop offset="60%" stopColor="#818CF8" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Subtle Horizontal Grid lines */}
                        <line x1="0" y1="40" x2="600" y2="40" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="0" y1="90" x2="600" y2="90" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="0" y1="140" x2="600" y2="140" stroke="#F1F5F9" strokeWidth="1" />

                        {/* Area Fill */}
                        <path
                          d="M 0 170 
                             C 80 160, 120 140, 180 120 
                             C 240 100, 280 130, 350 40 
                             C 420 100, 480 110, 540 130 
                             C 570 140, 590 150, 600 155 
                             L 600 200 L 0 200 Z"
                          fill="url(#crmChartGrad)"
                        />

                        {/* Stroke Line */}
                        <path
                          d="M 0 170 
                             C 80 160, 120 140, 180 120 
                             C 240 100, 280 130, 350 40 
                             C 420 100, 480 110, 540 130 
                             C 570 140, 590 150, 600 155"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        {/* Peak Point Ring */}
                        <circle cx="350" cy="40" r="5" fill="#FFFFFF" stroke="#0018C5" strokeWidth="3" />
                      </svg>

                      {/* X-Axis Days Labels */}
                      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[11px] font-mono text-[#94A3B8] px-2">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span className="text-[#0018C5] font-bold">Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>

                  </div>

                  {/* BOTTOM SUB-GRID: RECENT CONVERSATIONS + ACTIVITY FEED */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Recent Conversations */}
                    <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-sm font-bold text-[#0F172A]">
                            Recent Conversations
                          </h4>
                          <span className="text-xs font-semibold text-[#0018C5] hover:underline cursor-pointer flex items-center gap-1">
                            View all →
                          </span>
                        </div>

                        <div className="space-y-3.5">
                          {[
                            {
                              name: 'Marcus Webb',
                              avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
                              msg: 'Severe tooth pain · Emergency slot booked',
                              time: 'Just now',
                              status: 'Booked',
                              badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                            },
                            {
                              name: 'Priya Sharma',
                              avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80',
                              msg: 'Interested in Morpheus8 & Botox ($3.2K)',
                              time: '2m ago',
                              status: 'Resolved',
                              badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
                            },
                            {
                              name: 'Tom Brandt',
                              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
                              msg: 'Invisalign 3D scan scheduled chairside',
                              time: '8m ago',
                              status: 'Active',
                              badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
                            },
                            {
                              name: 'Aisha Okafor',
                              avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
                              msg: 'Hair restoration feasibility intake complete',
                              time: '32m ago',
                              status: 'Resolved',
                              badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
                            },
                            {
                              name: 'Jerome Bell',
                              avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
                              msg: 'WhatsApp follow-up requested doctor review',
                              time: '45m ago',
                              status: 'Escalated',
                              badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
                            },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                <img
                                  src={item.avatar}
                                  alt={item.name}
                                  className="w-8 h-8 rounded-full object-cover border border-[#E2E8F0] shrink-0"
                                />
                                <div className="truncate">
                                  <div className="font-bold text-[#0F172A] truncate">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-[#64748B] truncate">
                                    {item.msg}
                                  </div>
                                </div>
                              </div>

                              <div className="text-right shrink-0">
                                <div className="text-[10px] text-[#94A3B8] font-mono">
                                  {item.time}
                                </div>
                                <span className={`inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold border ${item.badgeColor}`}>
                                  {item.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Activity Feed (Pastel Rounded Pills like Image 1) */}
                    <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-sm font-bold text-[#0F172A]">
                            Activity Feed
                          </h4>
                          <span className="text-[11px] text-[#64748B] font-mono">
                            Live Stream
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          {/* Item 1: Bot Deployed (Cyan card) */}
                          <div className="p-3 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-between text-xs">
                            <div>
                              <div className="font-bold text-[#0369A1]">Spheno Voice Node Deployed</div>
                              <div className="text-[11px] text-[#0284C7]">Telephony SIP trunk online</div>
                            </div>
                            <span className="text-[10px] font-mono text-[#0284C7] font-semibold">3m ago</span>
                          </div>

                          {/* Item 2: Latency Spike (Periwinkle card) */}
                          <div className="p-3 rounded-xl bg-[#E0E7FF] border border-[#C7D2FE] flex items-center justify-between text-xs">
                            <div>
                              <div className="font-bold text-[#3730A3]">Latency Stabilized</div>
                              <div className="text-[11px] text-[#4F46E5]">Median voice response at 380ms</div>
                            </div>
                            <span className="text-[10px] font-mono text-[#4F46E5] font-semibold">18m ago</span>
                          </div>

                          {/* Item 3: Agent Created (Pink card) */}
                          <div className="p-3 rounded-xl bg-[#FCE7F3] border border-[#FBCFE8] flex items-center justify-between text-xs">
                            <div>
                              <div className="font-bold text-[#9D174D]">Clinical Triage Rule Initialized</div>
                              <div className="text-[11px] text-[#BE185D]">Emergency booking auto-approval</div>
                            </div>
                            <span className="text-[10px] font-mono text-[#BE185D] font-semibold">1h ago</span>
                          </div>

                          {/* Item 4: KB Synced (Amber card) */}
                          <div className="p-3 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-between text-xs">
                            <div>
                              <div className="font-bold text-[#92400E]">EMR &amp; EHR Synced</div>
                              <div className="text-[11px] text-[#B45309]">Dentrix calendar schedules locked</div>
                            </div>
                            <span className="text-[10px] font-mono text-[#B45309] font-semibold">2h ago</span>
                          </div>

                          {/* Item 5: Peak capacity (Rose card) */}
                          <div className="p-3 rounded-xl bg-[#FFE4E6] border border-[#FECDD3] flex items-center justify-between text-xs">
                            <div>
                              <div className="font-bold text-[#9F1239]">87.4% Direct Conversion</div>
                              <div className="text-[11px] text-[#BE123C]">Autonomous schedule locked</div>
                            </div>
                            <span className="text-[10px] font-mono text-[#BE123C] font-semibold">3m ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* RIGHT 4 COLUMNS: TOP AGENTS + SYSTEM HEALTH */}
                <div className="xl:col-span-4 space-y-6">
                  
                  {/* TOP AGENTS PERFORMANCE SCORES */}
                  <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs">
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">
                          Top Agents
                        </h4>
                        <p className="text-[11px] text-[#64748B]">Performance scores</p>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          name: 'Spheno Voice',
                          role: 'Inbound telephone triage',
                          score: 96,
                          badge: 'Excellent',
                          badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                          ringColor: 'text-emerald-500',
                        },
                        {
                          name: 'Spheno Chat',
                          role: 'Web lead triage & capture',
                          score: 88,
                          badge: 'Good',
                          badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
                          ringColor: 'text-purple-500',
                        },
                        {
                          name: 'WhatsApp AI',
                          role: 'Autonomous re-engagement',
                          score: 94,
                          badge: 'Strong',
                          badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
                          ringColor: 'text-blue-500',
                        },
                        {
                          name: 'OnboardAI',
                          role: 'Pre-consultation clinical intake',
                          score: 82,
                          badge: 'Fair',
                          badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
                          ringColor: 'text-amber-500',
                        },
                        {
                          name: 'EMR Bridge',
                          role: 'Schedule lock & EHR push',
                          score: 79,
                          badge: 'Active',
                          badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
                          ringColor: 'text-slate-600',
                        },
                      ].map((agent, i) => (
                        <div key={i} className="flex items-center justify-between text-xs p-2 rounded-xl hover:bg-[#F8FAFC] transition-colors">
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Circular Score Badge */}
                            <div className="w-8 h-8 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center font-black text-xs text-[#0F172A] shrink-0 shadow-xs">
                              {agent.score}
                            </div>
                            <div className="truncate">
                              <div className="font-bold text-[#0F172A] truncate">
                                {agent.name}
                              </div>
                              <div className="text-[10px] text-[#64748B] truncate">
                                {agent.role}
                              </div>
                            </div>
                          </div>

                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 ${agent.badgeBg}`}>
                            {agent.badge}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#E2E8F0] mt-3 text-center">
                      <button className="text-xs font-semibold text-[#0018C5] hover:underline cursor-pointer">
                        See all agents &rarr;
                      </button>
                    </div>

                  </div>

                  {/* SYSTEM HEALTH & REAL-TIME TELEMETRY (Image 1 Equalizer Bars) */}
                  <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs">
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">
                          System Health
                        </h4>
                        <p className="text-[11px] text-[#64748B]">Real-time system status</p>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        100% ONLINE
                      </span>
                    </div>

                    {/* Equalizer Multi-Segment Bars (Matching Image 1) */}
                    <div className="h-32 flex items-end justify-between gap-2 px-2 py-2 border-b border-[#F1F5F9]">
                      {[
                        { segments: ['bg-[#2563EB]', 'bg-[#F59E0B]', 'bg-[#06B6D4]'], height: '65%' },
                        { segments: ['bg-[#2563EB]', 'bg-[#EC4899]', 'bg-[#06B6D4]'], height: '80%' },
                        { segments: ['bg-[#2563EB]', 'bg-[#F59E0B]', 'bg-[#EC4899]'], height: '95%' },
                        { segments: ['bg-[#2563EB]', 'bg-[#F59E0B]', 'bg-[#06B6D4]'], height: '70%' },
                        { segments: ['bg-[#2563EB]', 'bg-[#EC4899]', 'bg-[#06B6D4]'], height: '85%' },
                        { segments: ['bg-[#2563EB]', 'bg-[#F59E0B]', 'bg-[#EC4899]'], height: '90%' },
                        { segments: ['bg-[#2563EB]', 'bg-[#06B6D4]'], height: '60%' },
                      ].map((bar, idx) => (
                        <div key={idx} className="flex-1 flex flex-col justify-end gap-1" style={{ height: bar.height }}>
                          {bar.segments.map((seg, sIdx) => (
                            <div key={sIdx} className={`w-full rounded-full h-3 ${seg}`} />
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Scale markers */}
                    <div className="flex justify-between text-[9px] font-mono text-[#94A3B8] pt-1 px-1">
                      <span>1</span>
                      <span>10</span>
                      <span>100</span>
                      <span>300</span>
                      <span>500</span>
                      <span>800</span>
                      <span>1000</span>
                    </div>

                    {/* Telemetry Stats with colored bullets */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#F1F5F9] text-[11px]">
                      <div>
                        <div className="text-[10px] text-[#94A3B8] font-mono">12ms</div>
                        <div className="font-bold text-[#0F172A] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                          <span>API Gateway</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#94A3B8] font-mono">380ms</div>
                        <div className="font-bold text-[#0F172A] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                          <span>Voice Inference</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#94A3B8] font-mono">14ms</div>
                        <div className="font-bold text-[#0F172A] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                          <span>Vector DB</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#94A3B8] font-mono">18ms</div>
                        <div className="font-bold text-[#0F172A] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                          <span>Webhooks</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Buttons (Matching Image 1) */}
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      <button className="py-2 px-3 rounded-xl bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] text-xs font-bold transition-all text-center cursor-pointer">
                        New Agent
                      </button>
                      <button className="py-2 px-3 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#334155] text-xs font-bold transition-all text-center cursor-pointer">
                        Invite User
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </main>

          </div>

          {/* CRM Bottom Attribution Bar */}
          <div className="px-6 py-4 bg-white border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#64748B] flex-wrap gap-2">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SOC2 Type II &amp; HIPAA-compliant central repository. 100% closed-loop attribution.</span>
            </span>
            <span className="font-bold text-[#0018C5]">
              Spheno Intelligence Core · Ready for Scale
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
