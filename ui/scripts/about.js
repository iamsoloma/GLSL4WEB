const canvases = document.querySelectorAll('.glslCanvas')

canvases.forEach(element => {
    element.width = element.parentElement.clientWidth
    element.height = element.parentElement.clientHeight
    updateGLSL(element)
})

function updateGLSL(canvas) {
    var sandbox = new GlslCanvas(canvas)
}
