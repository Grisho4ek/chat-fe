import { useAuth0 } from '@auth0/auth0-react';
import { createContext, PropsWithChildren, useEffect, useRef } from 'react';
import { Socket, io } from 'socket.io-client';

export const WebsocketContext = createContext<{
  sendMessage: (msg: string) => void;
}>({
  sendMessage: () => {
    return;
  },
});

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const { getAccessTokenSilently } = useAuth0();
  const socketRef = useRef<Socket | undefined>();
  const tokenRef = useRef<string | undefined>();

  const emitEvent = async (event: string, data: any) => {
    const token = await getAccessTokenSilently();

    if (tokenRef.current !== token) {
      const token = await getAccessTokenSilently();
      tokenRef.current = token;
      const socket = io(`${import.meta.env.VITE_WEBSOCKET_URL}/chat`, {
        auth: {
          token,
        },
      });
      socketRef.current?.disconnect();
      socketRef.current = socket;
    }

    socketRef.current?.emit(event, data);
  };

  const sendMessage = (msg: string) => {
    emitEvent('message', msg);
  };

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();
      tokenRef.current = token;
      const socket = io(`${import.meta.env.VITE_WEBSOCKET_URL}/chat`, {
        auth: {
          token,
        },
      });
      socketRef.current = socket;
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <WebsocketContext.Provider
      value={{
        sendMessage,
      }}
    >
      {children}
    </WebsocketContext.Provider>
  );
};
