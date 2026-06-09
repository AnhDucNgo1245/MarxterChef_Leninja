export type GraphNode = {
  id: string;
  label: string;
  branch: 'root' | 'cndv' | 'pbc' | 'cndvls';
  color: string;
  xpReward: number;
  position: { x: number; y: number };
};

export const graphNodes: GraphNode[] = [
  // Lớp 1: Gốc
  { id: 'root', label: 'Triết học Mác - Lênin', branch: 'root', color: '#00ff9f', xpReward: 50, position: { x: 0, y: 0 } },
  
  // Lớp 2: 3 nhánh chính
  { id: 'cndv', label: 'Chủ nghĩa duy vật', branch: 'cndv', color: '#00d4ff', xpReward: 30, position: { x: -350, y: 150 } },
  { id: 'pbc', label: 'Phép biện chứng', branch: 'pbc', color: '#a855f7', xpReward: 30, position: { x: 0, y: 150 } },
  { id: 'cndvls', label: 'CNDV Lịch sử', branch: 'cndvls', color: '#f59e0b', xpReward: 30, position: { x: 350, y: 150 } },

  // Lớp 3: Các khái niệm con
  // Nhánh CNDV
  { id: 'matter', label: 'Vật chất', branch: 'cndv', color: '#00d4ff', xpReward: 20, position: { x: -450, y: 300 } },
  { id: 'consciousness', label: 'Ý thức', branch: 'cndv', color: '#00d4ff', xpReward: 20, position: { x: -350, y: 300 } },
  { id: 'practice', label: 'Thực tiễn', branch: 'cndv', color: '#00d4ff', xpReward: 20, position: { x: -250, y: 300 } },

  // Nhánh PBC
  { id: 'contradiction', label: 'Mâu thuẫn', branch: 'pbc', color: '#a855f7', xpReward: 20, position: { x: -120, y: 300 } },
  { id: 'quantity-quality', label: 'Lượng - Chất', branch: 'pbc', color: '#a855f7', xpReward: 20, position: { x: 0, y: 300 } },
  { id: 'negation', label: 'Phủ định', branch: 'pbc', color: '#a855f7', xpReward: 20, position: { x: 120, y: 300 } },

  // Nhánh CNDVLS
  { id: 'productive-forces', label: 'Lực lượng SX', branch: 'cndvls', color: '#f59e0b', xpReward: 20, position: { x: 230, y: 300 } },
  { id: 'relations-of-production', label: 'Quan hệ SX', branch: 'cndvls', color: '#f59e0b', xpReward: 20, position: { x: 350, y: 300 } },
  { id: 'base', label: 'Cơ sở hạ tầng', branch: 'cndvls', color: '#f59e0b', xpReward: 20, position: { x: 470, y: 300 } },
  { id: 'superstructure', label: 'Kiến trúc thượng tầng', branch: 'cndvls', color: '#f59e0b', xpReward: 20, position: { x: 600, y: 300 } },
];

export const graphEdges = [
  // Từ Root đến 3 nhánh chính
  { id: 'e-root-cndv', source: 'root', target: 'cndv' },
  { id: 'e-root-pbc', source: 'root', target: 'pbc' },
  { id: 'e-root-cndvls', source: 'root', target: 'cndvls' },

  // Các con của CNDV
  { id: 'e-cndv-matter', source: 'cndv', target: 'matter' },
  { id: 'e-cndv-consciousness', source: 'cndv', target: 'consciousness' },
  { id: 'e-cndv-practice', source: 'cndv', target: 'practice' },

  // Các con của PBC
  { id: 'e-pbc-contradiction', source: 'pbc', target: 'contradiction' },
  { id: 'e-pbc-quantity', source: 'pbc', target: 'quantity-quality' },
  { id: 'e-pbc-negation', source: 'pbc', target: 'negation' },

  // Các con của CNDVLS
  { id: 'e-cndvls-pf', source: 'cndvls', target: 'productive-forces' },
  { id: 'e-cndvls-rel', source: 'cndvls', target: 'relations-of-production' },
  { id: 'e-cndvls-base', source: 'cndvls', target: 'base' },
  { id: 'e-cndvls-super', source: 'cndvls', target: 'superstructure' },
];
