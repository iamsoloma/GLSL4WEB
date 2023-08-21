const viewerCanvas = document.querySelector("viewer-canvas")

viewerCanvas.addEventListener('click', () => {
    const shaderInfo = document.querySelector("shader-info")
    shaderInfo.style.display = "flex"
})

function openShaderInfo() {
    shaderInfo.style.display = "flex"
}

function closeShaderInfo() {
    shaderInfo.style.display = "none"
}