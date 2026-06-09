import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ModuleCNDVLS() {
  const [tech, setTech] = useState(50)
  const [rules, setRules] = useState(50)
  
  const isMatch = Math.abs(tech - rules) < 20
  const isCrisis = tech - rules >= 40

  return (
    <div className="min-h-screen bg-void">
      <header className="px-6 py-32 bg-glow-radial border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/modules" className="text-white/30 hover:text-white text-sm mb-12 inline-block transition-colors">
            ← Quay lại Học phần
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-white mb-6"
          >
            Chủ nghĩa Duy vật Lịch sử
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Nghiên cứu những quy luật chung nhất của sự vận động và phát triển xã hội loài người. Động lực thực sự của lịch sử là gì?
          </motion.p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
        {/* LLSX vs QHSX */}
        <section>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-serif text-white/20">01</span>
            <h2 className="text-3xl font-serif text-white">LLSX & Quan hệ SX</h2>
          </div>
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              <strong>Lực lượng sản xuất (LLSX)</strong> là nội dung vật chất của quá trình sản xuất (Máy móc, AI, Công nhân).<br/><br/>
              <strong>Quan hệ sản xuất (QHSX)</strong> là hình thức xã hội của quá trình sản xuất (Ai sở hữu máy móc? Lợi nhuận chia thế nào?).
            </p>
            <p className="text-white/50 italic mb-8 border-l-2 border-white/20 pl-6">
              Quy luật: LLSX quyết định QHSX. Khi LLSX phát triển (ví dụ: phát minh ra AI) mà QHSX cũ (luật lao động cũ) kìm hãm nó, mâu thuẫn nổ ra dẫn đến cách mạng xã hội.
            </p>

            {/* Simulation */}
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-sm tracking-widest uppercase text-white/40 mb-8 text-center">Tương tác: Mô phỏng Mâu thuẫn Kinh tế</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Sự phát triển của Công nghệ (LLSX)</span>
                    <span className="font-serif">{tech}</span>
                  </div>
                  <input type="range" min="0" max="100" value={tech} onChange={e => setTech(Number(e.target.value))} className="w-full accent-white" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Khung Pháp lý & Sở hữu (QHSX)</span>
                    <span className="font-serif">{rules}</span>
                  </div>
                  <input type="range" min="0" max="100" value={rules} onChange={e => setRules(Number(e.target.value))} className="w-full accent-white" />
                </div>
              </div>

              <div className={`mt-10 p-6 rounded-lg text-center transition-colors duration-500 border ${isCrisis ? 'bg-red-950/30 border-red-500/30 text-red-200' : isMatch ? 'bg-green-950/30 border-green-500/30 text-green-200' : 'bg-white/5 border-white/10 text-white/50'}`}>
                <p className="font-serif text-xl mb-2">
                  {isCrisis ? 'Khủng hoảng & Cách mạng!' : isMatch ? 'Xã hội phát triển ổn định' : 'Mâu thuẫn đang tích tụ'}
                </p>
                <p className="text-sm opacity-70">
                  {isCrisis ? 'Công nghệ đã đi quá xa nhưng luật lệ và chế độ sở hữu vẫn dậm chân tại chỗ. Xã hội bắt buộc phải thay đổi thể chế!' : isMatch ? 'QHSX phù hợp với tính chất và trình độ của LLSX.' : 'Cần điều chỉnh chính sách để bắt kịp công nghệ.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hạ tầng & Thượng tầng */}
        <section>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-serif text-white/20">02</span>
            <h2 className="text-3xl font-serif text-white">Cơ sở hạ tầng & Kiến trúc thượng tầng</h2>
          </div>
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              <strong>Cơ sở hạ tầng</strong> là toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của một xã hội.<br/><br/>
              <strong>Kiến trúc thượng tầng</strong> là toàn bộ hệ thống tư tưởng (chính trị, pháp luật, triết học, tôn giáo, nghệ thuật...) và các thiết chế tương ứng (nhà nước, đảng phái...) được xây dựng trên cơ sở hạ tầng đó.
            </p>
            <div className="bg-white/5 rounded-lg p-6 mt-8">
              <p className="text-white/50">Cơ sở hạ tầng quyết định kiến trúc thượng tầng. "Kinh tế quyết định chính trị và tư tưởng". Khi cơ cấu kinh tế (Kinh tế thị trường) thay đổi, hệ thống pháp luật (Luật doanh nghiệp, Luật sở hữu trí tuệ) bắt buộc phải thay đổi theo.</p>
            </div>
          </div>
        </section>
      </main>

      <div className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-12 flex justify-between items-center">
          <Link to="/modules/pbc" className="text-white/30 hover:text-white transition-colors text-sm">
            ← Phép Biện chứng
          </Link>
          <Link to="/" className="text-white hover:text-white/70 transition-colors flex items-center gap-2">
            Về Trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}
