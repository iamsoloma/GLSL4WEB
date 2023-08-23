async function getData() {
    const responce = await fetch('shaders.json')
    const data = await responce.json()
    return data
}

async function mainLibrary () {
    const data = await getData()
    console.log(data)

    var currentPage = 1
    var blocks = 3

    displayLibrary(data, blocks, currentPage)
    displayPaginaton(data, blocks)
}

function displayLibrary(arrData, blocksPerPage, page) {
    const shadersElem = document.querySelector('.lib')
    shadersElem.innerHTML = ''

    const start = blocksPerPage * (page - 1)
    const end = start + blocksPerPage
    const paginatedData = arrData.slice(start, end)

    paginatedData.forEach(element => {
        const shaderElem = document.createElement('div')
        shaderElem.classList.add('shader')
        console.log(element.link)
        shaderElem.innerHTML = `<canvas class="glslCanvas" data-fragment-url="${element.link}"></canvas>`
        shadersElem.appendChild(shaderElem)
    })
    canvases = document.querySelectorAll('.glslCanvas')
    canvases.forEach(element => {
        element.width = window.innerWidth /3.5
        element.height = window.innerHeight /3
        updateGLSL(element)
    })

}

function updateGLSL(canvas) {
    var sandbox = new GlslCanvas(canvas)
}

function displayPaginaton(arrData, blocksPerPage) {
    const pagination = document.querySelector('.pagination')
    const pagesCount = Math.ceil(arrData.length / blocksPerPage)
    const ulEl = document.createElement('ul')
    ulEl.classList.add('paginationList')

    for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginatonBtn(arrData,  i + 1, blocksPerPage )
        ulEl.appendChild(liEl)
    }

    pagination.appendChild(ulEl)
}

function displayPaginatonBtn(arrData, page, blocksPerPage) {
    const liEl = document.createElement('li')
    liEl.classList.add('paginationBtn')
    liEl.innerText = page

    liEl.addEventListener('click', () => {
        displayLibrary(arrData, blocksPerPage, page)
    })

    return liEl
}

mainLibrary()