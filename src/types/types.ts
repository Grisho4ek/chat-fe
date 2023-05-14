import { Message } from '.';

export type MessageDto = Omit<Message, 'id' | 'to'> & { to?: string };
