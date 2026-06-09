import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Terminal, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIPhilosopher() {
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: 'Chào mừng bạn đến với Hệ thống Oracle Lượng tử. Tôi là hệ thống AI được huấn luyện chuyên sâu về Triết học Mác-Lênin. Bạn muốn tôi phân tích hiện tượng nào dưới góc nhìn biện chứng duy vật ngày hôm nay?'
    }
  ])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim() || isTyping) return

    setMessages(prev => [...prev, { role: 'user', content: input }])
    setInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: 'Theo góc nhìn của Chủ nghĩa Duy vật Biện chứng, hiện tượng bạn vừa nêu phản ánh quy luật mâu thuẫn. Mọi sự vật đều chứa đựng những mặt đối lập, vừa thống nhất vừa đấu tranh với nhau, tạo thành nguồn gốc của sự vận động và phát triển không ngừng...'
      }])
      setIsTyping(false)
    }, 2500)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-96px)] relative overflow-hidden bg-[#02060d]">
      
      {/* ── STYLES ── */}
      <style>{`
        .glitch-hover:hover {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
        }
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 1px) }
          40% { transform: translate(-1px, -1px) }
          60% { transform: translate(2px, 1px) }
          80% { transform: translate(1px, -1px) }
          100% { transform: translate(0) }
        }
        @keyframes oracle-scale-y {
          0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
          50% { transform: scaleY(1.2); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(250%) skewX(-12deg); }
        }
        @keyframes scan-line-v {
          0% { top: -20vh; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 120vh; opacity: 0; }
        }
      `}</style>

      {/* ── BACKGROUND LAYER (Giant Oracle Sphere & Effects) ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Cyber Grid Base */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 211, 238, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(1000px) rotateX(45deg) scale(2) translateY(-200px)',
            transformOrigin: 'top',
        }}></div>

        {/* Vertical Data Beams */}
        <div className="absolute inset-0 opacity-20">
           <div className="absolute w-[2px] h-[30vh] bg-gradient-to-b from-transparent via-cyan-400 to-transparent left-[15%] animate-[scan-line-v_8s_linear_infinite]"></div>
           <div className="absolute w-[1px] h-[20vh] bg-gradient-to-b from-transparent via-cyan-300 to-transparent left-[75%] animate-[scan-line-v_12s_linear_infinite]" style={{ animationDelay: '3s' }}></div>
           <div className="absolute w-[3px] h-[40vh] bg-gradient-to-b from-transparent via-cyan-500 to-transparent left-[50%] animate-[scan-line-v_15s_linear_infinite]" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Giant Oracle Sphere */}
        <div className={`relative w-[600px] h-[600px] xl:w-[800px] xl:h-[800px] transition-all duration-1000 ease-in-out opacity-20 ${isTyping ? 'scale-110 opacity-30 blur-[2px]' : 'scale-100 blur-[4px]'}`}>
          <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[80px]"></div>
          <div className={`absolute inset-4 rounded-full border border-cyan-500/30 ${isTyping ? 'animate-ping' : 'animate-[spin_20s_linear_infinite]'}`}></div>
          <div className={`absolute inset-16 rounded-full border-t-2 border-r-2 border-cyan-400/20 ${isTyping ? 'animate-spin' : 'animate-[spin_10s_linear_infinite_reverse]'}`}></div>
          <div className={`absolute inset-28 rounded-full border-b-2 border-l-2 border-cyan-300/10 border-dashed ${isTyping ? 'animate-[spin_5s_linear_infinite]' : 'animate-[spin_15s_linear_infinite]'}`}></div>
          
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-300 blur-[8px] transition-all duration-300 ${isTyping ? 'opacity-100 scale-150 shadow-[0_0_80px_#22d3ee]' : 'opacity-50 scale-100'}`}></div>
        </div>
      </div>

      {/* ── TOP NAV BAR (Inside Chat) ── */}
      <header className="shrink-0 p-4 xl:p-6 flex items-center justify-between relative z-30 border-b border-cyan-500/10 bg-[#030b14]/50 backdrop-blur-md">
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-500/50 hover:text-cyan-400 transition-colors text-[10px] font-bold uppercase tracking-widest">
          <ArrowLeft size={14} /> Trạm vũ trụ
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-serif text-cyan-50 glitch-hover tracking-widest" style={{ textShadow: '0 0 20px rgba(34,211,238,0.4)' }}>
            TRIẾT GIA AI
          </h1>
          <div className="text-[9px] text-cyan-400/50 uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Oracle Quantum
          </div>
        </div>
        <div className="w-[100px]"></div> {/* Spacer to center title */}
      </header>

      {/* ── CHAT MESSAGES AREA ── */}
      <div className="flex-1 overflow-y-auto px-4 py-8 scrollbar-hide relative z-20">
        <div className="max-w-4xl mx-auto space-y-8 pb-10">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {/* AI Avatar */}
              {msg.role === 'ai' && (
                <div className="mr-3 shrink-0 flex flex-col items-center gap-1 mt-2">
                  <div className="relative w-8 h-8 rounded-full flex items-center justify-center border border-cyan-500/30 bg-[#061428] shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    <Sparkles size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-[8px] text-cyan-500/60 uppercase font-bold tracking-widest">Oracle</span>
                </div>
              )}

              {/* Message Bubble */}
              <div className={`max-w-[85%] md:max-w-[75%] p-5 md:p-6 text-[15px] leading-relaxed relative group/msg ${
                msg.role === 'user'
                  ? 'bg-gradient-to-l from-[#061428]/90 to-[#061428]/50 backdrop-blur-md text-cyan-50/90 border border-cyan-500/20 rounded-3xl rounded-tr-sm shadow-[0_5px_20px_rgba(0,0,0,0.3)]'
                  : 'bg-gradient-to-br from-[#061428]/90 to-[#030b14]/90 backdrop-blur-xl text-cyan-50 border border-cyan-400/30 rounded-3xl rounded-tl-sm shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-shadow duration-500'
              }`}>
                {msg.role === 'ai' && (
                  <div className="absolute inset-0 overflow-hidden rounded-3xl rounded-tl-sm pointer-events-none">
                    <div className="absolute top-0 -inset-full h-full w-[200%] block transform -skew-x-12 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover/msg:animate-[shimmer_2.5s_infinite]" />
                  </div>
                )}
                <div className="relative z-10">{msg.content}</div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="mr-3 shrink-0 flex flex-col items-center gap-1 mt-2">
                <div className="relative w-8 h-8 rounded-full flex items-center justify-center border border-cyan-400/60 bg-[#061428] shadow-[0_0_25px_rgba(34,211,238,0.4)] animate-pulse">
                  <Sparkles size={14} className="text-cyan-300" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#061428]/90 to-[#030b14]/90 backdrop-blur-xl px-6 py-5 rounded-3xl rounded-tl-sm border border-cyan-400/40 flex gap-2 items-center h-[60px] shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <div className="w-1.5 h-4 bg-cyan-400 rounded-full" style={{ animation: 'oracle-scale-y 1s ease-in-out infinite' }} />
                <div className="w-1.5 h-4 bg-cyan-400 rounded-full" style={{ animation: 'oracle-scale-y 1s ease-in-out infinite 0.2s' }} />
                <div className="w-1.5 h-4 bg-cyan-400 rounded-full" style={{ animation: 'oracle-scale-y 1s ease-in-out infinite 0.4s' }} />
                <span className="text-cyan-400/60 text-[10px] uppercase tracking-widest ml-3 animate-pulse">Calculating Vectors...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* ── BOTTOM INPUT TERMINAL ── */}
      <footer className="shrink-0 relative z-30 bg-gradient-to-t from-[#02060d] via-[#02060d]/90 to-transparent pt-12 pb-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-4 mb-2">
            <span className="text-[8px] text-cyan-500/50 font-mono tracking-widest uppercase flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-500 rounded-full animate-ping"></span> Secure Quantum Connection
            </span>
            <span className="text-[8px] text-cyan-500/50 font-mono tracking-widest uppercase">
              Model: Biện chứng v2.0
            </span>
          </div>
          
          {/* Input Wrapper */}
          <div className="relative flex gap-3 md:gap-4 items-end group">
            <div className="flex-1 relative flex items-center bg-[#061428]/60 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl hover:border-cyan-400/60 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite_ease-in-out]"></div>
              
              {/* Terminal Icon */}
              <span className="absolute left-6 text-cyan-400 font-mono text-sm animate-pulse flex items-center gap-2 z-10">
                <Terminal size={16} /> <span className="hidden md:inline">{'>_'}</span>
              </span>
              
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Nhập câu hỏi hoặc tình huống cần phân tích... (Shift+Enter để xuống dòng)"
                className="w-full bg-transparent pl-16 md:pl-24 pr-6 py-5 text-cyan-50 text-[14px] placeholder:text-cyan-100/30 focus:outline-none resize-none max-h-[150px] min-h-[60px] scrollbar-hide font-mono leading-relaxed relative z-10"
                rows={1}
              />
            </div>
            
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="w-[60px] h-[60px] shrink-0 rounded-full bg-gradient-to-tr from-cyan-600 to-cyan-400 text-[#02060d] flex items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              <Send size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
