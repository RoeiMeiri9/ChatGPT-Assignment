export type Origin = 'User' | 'GPT'; 

export interface Message {
  content: string;
  origin: Origin;
  id: string;
}
