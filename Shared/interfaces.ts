export type TypeOfMessage = "Answer" | "Prompt";

/**
 * Interface of Message
 * @param content Content of the message
 * @param type Type of the message - can be 'Prompt' or 'Answer'
 * @param id ID of the messages
 */
export interface Message {
  content: string;
  type: TypeOfMessage;
  id: string;
}
