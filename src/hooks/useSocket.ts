import { useContext } from 'react';
import { WebsocketContext } from '../contexts/socket-context';

export const useSocket = () => {
  return useContext(WebsocketContext);
};
