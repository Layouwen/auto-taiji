let js_content = document.querySelector('.content')
let js_style = document.querySelector('.js_style')
let isTouchDevice = 'ontouchstart' in document.documentElement

let str = `
/* 你好，我是一名前端工程师，因这学期课程接触到了前端

学校教的很基础，主要靠自学，目前已经学习将近大半年

接触前端后发现自己深深的爱上了编程，为了实现自己的一个界面或功能

促使我发现能力和解决问题的能力

下面展示我的一个小想法，实现一个PC/PE端自适应的太极 */

.bigCircle {
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(to right, #ffffff 0%, #ffffff 50%, #000000 50%, #000000 100%);
    animation: turn 2s linear infinite;
}

.bigCircle::before,
.bigCircle::after {
    content: '';
    position: absolute;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transform: translateX(-50%);
}

.bigCircle::before {
    top: 0;
    background: radial-gradient(ellipse at center, #000000 0%, #000000 25%, #ffffff 25%, #ffffff 100%);
}

.bigCircle::after {
    bottom: 0;
    background: radial-gradient(ellipse at center, #ffffff 0%, #ffffff 25%, #000000 25%, #000000 100%);
}

@keyframes turn {
    100% {
        transform: rotate(360deg);
    }
}

/* 希望这个想法对刚学习动画和CSS的你有所帮助 */

`

let contentStr = ''
let n = 0
let speed = 10
let time

let run = () => {
    time = setTimeout(() => {
        if (str[n] === '\n') {
            contentStr += '<br>'
        } else if (str[n] === ' ') {
            contentStr += '&nbsp;'
        } else {
            contentStr += str[n]
        }
        js_style.innerHTML = str.substring(0, n)
        js_content.innerHTML = contentStr
        n++;
        // if (isTouchDevice){

        // }
        //     window.scrollTo(0, 99999);
        js_content.scrollTo(0, 99999)
        if (n < str.length) {
            run()
        } else {
            n = 0
            contentStr = ''
            js_start.innerHTML = '开始'
            js_start.className = 'start'
        }
    }, speed)
}

let js_slow = document.querySelector('.slow')
let js_middling = document.querySelector('.middling')
let js_quick = document.querySelector('.quick')
let js_start = document.querySelector('#start')

js_slow.addEventListener('click', () => {
    if (speed !== 100) {
        speed = 200
    }
})

js_middling.addEventListener('click', () => {
    if (speed !== 50) {
        speed = 50
    }
})

js_quick.addEventListener('click', () => {
    if (speed !== 10) {
        speed = 10
    }
})

js_start.addEventListener('click', () => {
    if (js_start.innerHTML === '开始') {
        run()
        js_start.innerHTML = '暂停'
        js_start.className = ''
    } else {
        js_start.innerHTML = '开始'
        clearTimeout(time)
        js_start.className = 'start'
    }
})