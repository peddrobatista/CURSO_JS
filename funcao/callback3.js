//Exemplo de callback no browser
//o zero se refere ao body que por sua vez ao ser acessado pelo onclick será disparado um evento através da seguinte função
document.getElementsByTagName('body') [0].onclick = function (e) {
    console.log('O evento ocorreu!!!')
}