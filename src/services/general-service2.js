
async function get() {
    const general = {
        desactivarSitio: true,
        activarSubcategorias: false,
        activarLinksNavegacion: true
    };
    return general;
}

export const generalService = {
    get
}