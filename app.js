const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {
    1605990629039: {
        id: 1605990629039,
        texto: 'Tarea #1',
        estado: false
    },
    1605990682337: {
        id: 1605990682337,
        texto: 'Tarea #2',
        estado: false
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pintarTareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

formulario.addEventListener('submit', e => {
    e.preventDefault()

    setTarea(e)
})

const setTarea = e => {
    const texto = e.target.querySelector('input').value

    if (texto.trim() === '') {
        return
    }

    const tarea = {
        id: Date.now(),
        texto: texto,
        estado: false
    }

    tareas[tarea.id] = tarea
    pintarTareas()

    formulario.reset()
    e.target.querySelector('input').focus()
}

const pintarTareas = () => {
    listaTarea.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        fragment.appendChild(clone)
    })
    listaTarea.appendChild(fragment)
}


const btnAccion = e => {
    if (e.target.classList.contains('fa-circle-check')) {
        tareas[e.target.dataset.id].estado = true
        pintarTareas()
    }

    if (e.target.classList.contains('fa-circle-minus')) {
        delete tareas[e.target.dataset.id]
        pintarTareas()
    }

    e.stopPropagation()
}