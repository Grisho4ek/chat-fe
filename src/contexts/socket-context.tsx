import { useAuth0 } from '@auth0/auth0-react';
import { createContext, PropsWithChildren, useState, useEffect } from 'react';
import { Socket, io } from 'socket.io-client';

export const WebsocketContext = createContext<{
  socket: Socket | undefined;
  sendMessage: (msg: string) => void;
}>({
  socket: undefined,
  sendMessage: () => {
    return;
  },
});

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const [socket, setSocket] = useState<Socket | undefined>();
  const { getAccessTokenSilently, user } = useAuth0();

  const sendMessage = (msg: string) => {
    socket?.emit('message', msg);
  };

  useEffect(() => {
    if (user) {
      getAccessTokenSilently().then((token) => {
        const curSocket = io(`${import.meta.env.VITE_WEBSOCKET_URL}/chat`, {
          auth: {
            token,
          },
        });
        setSocket(curSocket);
      });
    } else {
      socket?.disconnect();
      setSocket(undefined);
    }

    // eslint-disable-next-line
  }, [user]);

  return (
    <WebsocketContext.Provider
      value={{
        socket,
        sendMessage,
      }}
    >
      {children}
    </WebsocketContext.Provider>
  );
};
