const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {}

document.addEventListener('DOMContentLoaded', () => {
    pintarTareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

formulario.addEventListener('submit', e => {
    e.preventDefault()

    setTarea()
})

const setTarea = e => {
    if (input.value.trim() === '') {
        return
    }

    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }

    tareas[tarea.id] = tarea
    formulario.reset()
    input.focus()

    const pintarTareas = () => {
        listaTarea.innerHTML = ''
        Object.values(tareas).forEach(tarea => {
            const clone = template.cloneNode(true)
            clone.querySelector('p').textContent = tarea.texto
            fragment.appendChild(clone)
        })
    }
    listaTarea.appendChild(fragment)
}

const btnAccion = e => {
    
}