import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
//@ts-ignore
import StaticServer from "react-native-static-server"
import { documentDirectory } from 'expo-file-system';


const WebAppScreen = () => {
  const [localServerUrl, setLocalServerUrl] = useState<string | null>(null);

  useEffect(() => {
    let server: StaticServer | null;
 
    const startServer = async (): Promise<void> => {
      const path: string = `${documentDirectory}/assets/dist/`;
      server = new StaticServer({
          port: 9000,
          fileDir: path
      });
 
      try {
        const serverUrl = await server.start();
        setLocalServerUrl(serverUrl);
      } catch (error) {
        console.error('Failed to start server:', error);
      }
    };
 
    startServer();
  }, []);

  return localServerUrl ? (
    <WebView
      source={{ uri: `${localServerUrl}/index.html` }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  ) : null;
};

export default WebAppScreen;
