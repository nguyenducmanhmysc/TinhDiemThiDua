function showDockApp(){
    document.getElementsByClassName('dock-app')[0].classList.add('show-dock-app')
    document.getElementsByClassName('dock-app')[0].classList.remove('hidden-dock-app')
}

function hiddenDockApp(){
    document.getElementsByClassName('dock-app')[0].classList.remove('show-dock-app')
    document.getElementsByClassName('dock-app')[0].classList.add('hidden-dock-app')
}


/* Navigation App */

function openApp(){
    if(document.getElementsByClassName('close-app')[0]!=null)
        document.getElementsByClassName('app')[0].classList.remove('app--full-screen')

    document.getElementsByClassName('app')[0].style.display = 'block'
    document.getElementsByClassName('app')[0].classList.remove('close-app')
    document.getElementsByClassName('app')[0].classList.remove('minimize-app')
}

function closeApp(){
    document.getElementsByClassName('app')[0].classList.add('close-app')
}

function minimizeApp(){
    document.getElementsByClassName('app')[0].classList.add('minimize-app')
}

function fullScreenApp(){
    var appElement = document.getElementsByClassName('app')
    var appFullScreenElement = document.querySelector('.app--full-screen')
    if(appFullScreenElement==null)
        appElement[0].classList.add('app--full-screen')
    else
        appElement[0].classList.remove('app--full-screen')
}

/* Select tab */

function selectTab(index){
    var appTabSelectElement = document.getElementsByClassName('app-tab-select')[0]
    appTabSelectElement.getElementsByTagName('div')
    for(var i=0; i<appTabSelectElement.getElementsByTagName('div').length; i++){
        if(i==index){
            appTabSelectElement.getElementsByTagName('div')[i].classList.add('select')
            appTabSelectElement.getElementsByTagName('div')[i].classList.remove('no-select')
        }else{
            appTabSelectElement.getElementsByTagName('div')[i].classList.remove('select')
            appTabSelectElement.getElementsByTagName('div')[i].classList.add('no-select')
        }
    }
}

