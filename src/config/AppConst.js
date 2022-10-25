let serverSocket = 'http://localhost:3000';
if(localStorage.getItem('serverSocket') !== null) {
    serverSocket = localStorage.getItem('serverSocket');
}


export const AppConst = {
    SOCKET_ADDRESS: serverSocket,

    arrayIsFileImg : ['jpeg','jpg','png','gif','bmp'],
}