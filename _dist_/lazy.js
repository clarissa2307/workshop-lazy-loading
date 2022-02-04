let totalImages = 0;
let loadedImages = 0;

//funcion registrar  imagen
const  isIntersecting  = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) => {
    const container = entry.target;
    container.src = container.dataset.src;
    container.onload = () => {
        loadedImages += 1;
        logState();
    };
    observer.unobserve(container);
};


const observer = new  IntersectionObserver((entries) =>  {
    entries.filter(isIntersecting).forEach(loadImage);

});

export const  registerImage  =  (imagen) => {
observer.observe(imagen);
totalImages += 1;
    logState();
};

function logState() {
    console.log(`Total Imágenes: ${totalImages}`);
    console.log(`Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}
