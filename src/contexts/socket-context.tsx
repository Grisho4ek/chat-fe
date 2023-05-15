import { useAuth0 } from '@auth0/auth0-react';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Socket, io } from 'socket.io-client';
import { Message, MessageDto } from '../types';

export const WebsocketContext = createContext<{
  sendMessage: (msg: MessageDto) => void;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}>({
  sendMessage: () => {
    return;
  },
  messages: [],
  // eslint-disable-next-line
  setMessages: () => {},
});

enum SocketEventsEnum {
  'init' = 'init',
  'message' = 'message',
}

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const { getAccessTokenSilently } = useAuth0();
  const socketRef = useRef<Socket | undefined>();
  const tokenRef = useRef<string | undefined>();

  const createSocket = useCallback((token: string) => {
    tokenRef.current = token;
    const socket = io(`${import.meta.env.VITE_WEBSOCKET_URL}/chat`, {
      auth: {
        token,
      },
    });

    socket.on(SocketEventsEnum.message, (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    socketRef.current = socket;
    socketRef.current.emit(SocketEventsEnum.init);
  }, []);

  const emitEvent = async <T,>(event: SocketEventsEnum, data: T) => {
    const token = await getAccessTokenSilently();

    if (tokenRef.current !== token) {
      socketRef.current?.disconnect();
      createSocket(token);
    }

    socketRef.current?.emit(event, data);
  };

  const sendMessage = (msg: MessageDto) => {
    emitEvent(SocketEventsEnum.message, msg);
  };

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();
      createSocket(token);
    })();
  }, [createSocket, getAccessTokenSilently]);

  return (
    <WebsocketContext.Provider
      value={{
        sendMessage,
        messages,
        setMessages,
      }}
    >
      {children}
    </WebsocketContext.Provider>
  );
};
