import { Link, useLocation } from 'react-router-dom'
import { Sparkles, Brain, BookOpen } from 'lucide-react'

export default function Footer() {
  const location = useLocation()
  
  if (location.pathname === '/ai') {
    return null
  }

  return (
    <footer className="relative z-10 bg-navy text-white pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
        
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-serif text-white flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <span className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold">
              M
            </span>
            Marxter<span className="text-gold">Chef</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
            Học viện Triết học Số hiện đại, giải mã cuộc sống thông qua thế giới quan và phương pháp luận biện chứng, giúp bạn làm chủ tư duy và kiến tạo tương lai.
          </p>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold hover:bg-white/10 transition-colors">
              <Sparkles size={16} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold hover:bg-white/10 transition-colors">
              <Brain size={16} />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Học phần</h4>
          <ul className="space-y-4">
            <li><Link to="/modules/intro" className="text-sm text-white/60 hover:text-white transition-colors">Nhập môn Triết học</Link></li>
            <li><Link to="/modules/cndv" className="text-sm text-white/60 hover:text-white transition-colors">Chủ nghĩa Duy vật</Link></li>
            <li><Link to="/modules/pbc" className="text-sm text-white/60 hover:text-white transition-colors">Phép Biện chứng</Link></li>
            <li><Link to="/modules/nhanthuc" className="text-sm text-white/60 hover:text-white transition-colors">Lý luận Nhận thức</Link></li>
            <li><Link to="/modules/cndvls-1" className="text-sm text-white/60 hover:text-white transition-colors">Duy vật Lịch sử</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Công cụ</h4>
          <ul className="space-y-4">
            <li><Link to="/ai" className="text-sm text-white/60 hover:text-white transition-colors">Triết gia AI (Hỏi Đáp)</Link></li>
            <li><Link to="/modules" className="text-sm text-white/60 hover:text-white transition-colors">Sơ đồ Lộ trình</Link></li>
            <li>
              <div className="text-sm text-white/40 flex items-center gap-2 mt-8">
                <BookOpen size={16} /> Thư viện Số (Sắp ra mắt)
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} MarxterChef. Triết học ứng dụng đời sống.
        </p>
        <p className="text-white/30 text-xs font-serif italic">
          "Hành trình vạn dặm bắt đầu từ một bước chân."
        </p>
      </div>
    </footer>
  )
}
