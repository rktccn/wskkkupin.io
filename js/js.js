var hour = document.querySelector('.timer-hour')
var min = document.querySelector('.timer-minute')
var sec = document.querySelector('.timer-second')
setTimeout(countDown, 0)

var inputTime = +new Date('2021-4-22 14:00:00')
function countDown() {
    var nowTime = +new Date()
    var times = (inputTime - nowTime) / 1000
    var h = parseInt(times / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h
    hour.innerHTML = h
    var m = parseInt(times / 60 % 60)
    m = m < 10 ? '0' + m : m
    min.innerHTML = m
    var s = parseInt(times % 60)
    s = s < 10 ? '0' + s : s
    sec.innerHTML = s
}
countDown()
var countDownTime = setInterval(countDown, 1000)

var cateMenuItem = document.querySelectorAll(".cate_menu_item")
var catePop = document.querySelector(".JS_popCtn").querySelectorAll("div")
document.querySelector(".JS_popCtn").style.display = 'none'

for (var i = 0; i < cateMenuItem.length; i++) {
    cateMenuItem[i].setAttribute("date-index", i)
    catePop[i].setAttribute("id", "cate_item" + i)
    catePop[i].style.display = "none"

    cateMenuItem[i].addEventListener('mouseover', function () {
        for (var i = 0; i < cateMenuItem.length; i++) {
            catePop[i].style.display = "none"
        }
        document.querySelector(".JS_popCtn").style.display = 'block'
        var index = this.getAttribute('date-index')
        var display = document.querySelector('#cate_item' + index + '')
        display.style.display = "block"
    })
    cateMenuItem[i].addEventListener('mouseout', function () {
        for (var i = 0; i < cateMenuItem.length; i++) {
            catePop[i].style.display = "none"
        }
        document.querySelector(".JS_popCtn").style.display = 'none'
    })
}
