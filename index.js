import { info } from "./icons.js";
import { Toast } from "./Toast.js"

const btn = document.getElementById('trigger');

const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('toast-container')

body.appendChild(container)

const triggerToast = (e) => {
    const toastContainer = document.querySelector('.toast-container');
    console.log('toastContainer', toastContainer)
    const toast = new Toast(toastContainer, "type is not being used", info, "Info", "This is an informative message u know.")
    toast.showUp();
    
}

btn.addEventListener('click', triggerToast);
