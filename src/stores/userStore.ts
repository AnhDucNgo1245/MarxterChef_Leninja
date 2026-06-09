import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  xpReward: number
  unlockedAt?: number
}

export interface UserState {
  xp: number
  level: number
  achievements: string[]
  completedNodes: string[]
  visitedPlanets: string[]
  gameScores: Record<string, number>
  soundEnabled: boolean
  reducedMotion: boolean
  
  addXP: (amount: number) => void
  unlockAchievement: (id: string) => void
  completeNode: (id: string) => void
  visitPlanet: (id: string) => void
  updateGameScore: (game: string, score: number) => void
  toggleSound: () => void
  toggleReducedMotion: () => void
  getLevel: () => number
}

const XP_PER_LEVEL = 200

const calculateLevel = (xp: number) => Math.floor(xp / XP_PER_LEVEL) + 1

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      achievements: [],
      completedNodes: [],
      visitedPlanets: [],
      gameScores: {},
      soundEnabled: false,
      reducedMotion: false,

      addXP: (amount) =>
        set((state) => {
          const newXP = state.xp + amount
          return { xp: newXP, level: calculateLevel(newXP) }
        }),

      unlockAchievement: (id) =>
        set((state) => {
          if (state.achievements.includes(id)) return state
          return { achievements: [...state.achievements, id] }
        }),

      completeNode: (id) =>
        set((state) => {
          if (state.completedNodes.includes(id)) return state
          return { completedNodes: [...state.completedNodes, id] }
        }),

      visitPlanet: (id) =>
        set((state) => {
          if (state.visitedPlanets.includes(id)) return state
          get().addXP(50)
          return { visitedPlanets: [...state.visitedPlanets, id] }
        }),

      updateGameScore: (game, score) =>
        set((state) => ({
          gameScores: {
            ...state.gameScores,
            [game]: Math.max(state.gameScores[game] || 0, score),
          },
        })),

      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      toggleReducedMotion: () => set((state) => ({ reducedMotion: !state.reducedMotion })),
      getLevel: () => calculateLevel(get().xp),
    }),
    { name: 'marxterchef-user' }
  )
)

export const LEVELS = [
  { level: 1, title: 'Sinh Viên Khám Phá', minXP: 0 },
  { level: 2, title: 'Nhà Tư Tưởng', minXP: 200 },
  { level: 3, title: 'Nhà Biện Chứng', minXP: 400 },
  { level: 4, title: 'Chuyên Gia Mác-xít', minXP: 600 },
  { level: 5, title: 'Triết Gia Nhân Dân', minXP: 1000 },
]

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_planet', title: 'Nhà Du Hành Vũ Trụ', description: 'Khám phá hành tinh đầu tiên', icon: '🚀', xpReward: 50 },
  { id: 'all_planets', title: 'Người Khám Phá Vũ Trụ', description: 'Ghé thăm tất cả 6 hành tinh', icon: '🌌', xpReward: 200 },
  { id: 'contradiction_expert', title: 'Chuyên Gia Mâu Thuẫn', description: 'Hoàn thành mô phỏng Mâu Thuẫn', icon: '⚡', xpReward: 100 },
  { id: 'quantity_quality', title: 'Bậc Thầy Lượng-Chất', description: 'Khám phá sự chuyển hóa lượng-chất', icon: '🔬', xpReward: 100 },
  { id: 'historical_materialist', title: 'Nhà Duy Vật Lịch Sử', description: 'Hoàn thành mô phỏng Lực Lượng Sản Xuất', icon: '🏭', xpReward: 100 },
  { id: 'knowledge_explorer', title: 'Người Khám Phá Tri Thức', description: 'Mở khóa 10 nút trong đồ thị tri thức', icon: '🧠', xpReward: 150 },
  { id: 'philosophy_challenger', title: 'Người Thách Thức Triết Học', description: 'Chơi cả 3 trò chơi triết học', icon: '🎮', xpReward: 150 },
  { id: 'simulation_scientist', title: 'Nhà Khoa Học Mô Phỏng', description: 'Hoàn thành tất cả 3 mô phỏng', icon: '⚗️', xpReward: 200 },
  { id: 'ai_philosopher', title: 'Triết Gia AI', description: 'Hỏi nhà triết học AI 5 câu hỏi', icon: '🤖', xpReward: 75 },
  { id: 'game_master', title: 'Bậc Thầy Trò Chơi', description: 'Đạt điểm hoàn hảo trong một trò chơi', icon: '🏆', xpReward: 250 },
]
