export enum OpenAIModel {
  DAVINCI_TURBO = "gpt-3.5-turbo",
}

export enum COMMON_MESSAGE {
  // "Please enter a message"
  EMPTY_MESSAGE = "Please enter a message",
  // const contentMsg = `I'm English assistant. How can I help you?`;
  WELCOME_MESSAGE = `I'm English assistant. How can I help you?`,
  // Message limit is 4000 characters
  MESSAGE_LIMIT = "Message limit is 4000 characters",
  // Type a message...
  TYPE_A_MESSAGE = "Type a message...",
  // ChatGPT English Role Playing
  CHATTING = "ChatGPT 췟팅: ",
}

export enum ROLE_ENUM {
  ASSISTANT = "assistant",
  USER = "user",
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = ROLE_ENUM.ASSISTANT | ROLE_ENUM.USER;
