document.getElementById("shader-info-btn").addEventListener(
    'click',
    function() {
        document.getElementById("shader-info").classList.add('open')
    }
)

document.getElementById("shader-close-btn").addEventListener(
    'click',
    function() {
        document.getElementById("shader-info").classList.remove('open')
    }
)

window.addEventListener(
    'keydown',
    function(e) {
        if (e.key === "Escape") {
            document.getElementById("shader-info").classList.remove('open')
        }
    }
)