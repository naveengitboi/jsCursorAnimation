const cursor = document.querySelector('.cursor')


window.onmousemove = function(e){
    var x = e.clientX
    var y = e.clientY

    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'

}