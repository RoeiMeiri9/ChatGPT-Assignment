export type Origin = 'User' | 'GPT';

// TODO: Replace origin with type answer and question
/**
 * Interface of Message
 * @param content Content of the message
 * @param origin Origin of the message - can be 'User' or 'GPT'
 * @param id ID of the messages
 */
export interface Message {
  content: string;
  origin: Origin;
  id: string;
}
