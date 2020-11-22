import Block from './block.js'
import { container } from './selectors.js'
import { handle_controllers } from './controller.js'

let block_arr = []

function loadBlocks() {
    block_arr.push(new Block(), new Block(), new Block(), new Block())

    let count = 0

    while (count < block_arr.length) {
        container.insertAdjacentHTML('beforeend', `<div class="block" id="${count}">${block_arr[count].pos_no}</div>`)
        count++
    }
}

function make_blocks(start, end) {
    block_arr = []
    container.innerHTML = ""
    while (start < end) {
        block_arr.push(new Block())
        container.insertAdjacentHTML('beforeend', `<div class="block" id="${start}">${block_arr[start].pos_no}</div>`)
        start++
    }
}

function rearrange_blocks(arr) {
    container.innerHTML = ""
    let count = 0

    while (count < arr.length) {
        container.insertAdjacentHTML('beforeend', `<div class="block${arr[count].selected ? ' selected': ''}" id="${count}">${arr[count].pos_no}</div>`)
        count++
    }

}


function get_blocks(){
    return block_arr
}


function set_blocks(arr){
    block_arr = arr
 }


async function randomize(loop = Math.floor(2 + Math.random() * 4)) {

    handle_controllers(true)
    const wait = time => new Promise((resolve) => setTimeout(resolve, time));

    let count = 0
    while (count < loop) {
        block_arr = block_arr.sort(() => Math.random() - 0.5)
        rearrange_blocks(block_arr)
        count++
        await wait(400)
       
    }

    console.log(block_arr)

}



export { set_blocks, get_blocks, randomize, loadBlocks, make_blocks, rearrange_blocks }

