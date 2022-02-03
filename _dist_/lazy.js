//funcion registrar  imagen

const  isIntersecting  = (entry) => {
    return entry.isIntersecting;
};

const   loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const  url = imagen.dataset.src

    // carga  la  imagen 
    imagen.src = url;


    //console.log(nodo.nodeName);

    // desregistra  las imagenes

    observer.unobserve(container);
};

const observer = new  IntersectionObserver((entries) =>  {
    entries.filter(isIntersecting).forEach(loadImage);

});
export const  registerImage  =  (imagen) => {
observer.observe(imagen);
};
//