

if (!process.env.REACT_APP_SERVER_PATH) {throw new Error('La variable de entorno SERVER PATH es requerida.');}

export const config = {
  serverPath: process.env.REACT_APP_SERVER_PATH,
};

