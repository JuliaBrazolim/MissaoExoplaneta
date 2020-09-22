//Modulos para controlar aplicativos nativos e criar janela no brownser
const {app, BrowserWindow} = require('electron')
var path = require ('path')

// Mantenha uma referência global do objeto window, caso contrário, a janela
// será fechada automaticamente quando o objeto JavaScript é coletado no lixo.
let mainWindow

function createWindow () {
  // Cria uma janela no Browser
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'img/logo1.png'),
    webPreferences: {
    nodeIntegration: true
    }
})
mainWindow.setMenuBarVisibility(false)

// e carrega o index.html do aplicativo
mainWindow.loadFile('index.html')

// Abre o DevTools
// mainWindow.webContents.openDevTools()

// Emite quando a janela é fechada
mainWindow.on('closed', function () {
  // Desreferenciar o objeto da janela, geralmente você armazenaria janelas
  // em uma matriz, se o seu aplicativo suportar várias janelas, essa é a hora
  // quando você deve excluir o elemento correspondente.
  mainWindow = null
  })
}

// Este método será chamado quando o Electron ter finalizado
//  a inicialização e está pronto para criar janelas do navegador.
// algumas APIs pode apenas usar depois deste evento ocorrer
app.on('ready', createWindow)

// Sair quando todas janelas são fechadas
app.on('window-all-close', function () {
  // No macOS este é o comando para aplicações aplicações e sua barra e menu
  // permanecer ativo até que o usuário saia explicitamente com Cmd + Q
    if (process.plarform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', function() {
  // No macOS este comando recria uma janela no app quando o
  // ícone de encaixe é clicado e não há outras janelas abertas.
  if (mainWindow === null) {
    createWindow()
  }
})


// Nesse arquivo, você pode incluir o restante do processo principal específico do código do
//  aplicativo. Você também pode colocá-los em arquivos separados e solicitá-los aqui.
