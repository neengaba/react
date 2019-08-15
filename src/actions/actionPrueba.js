export const PRIMERA_ACCION = 'ACCION_UNO';
export const AGREGAR_TODO = 'AGREGAR_TODO'
export const COMPLETA_TODO = 'COMPLETAR_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const PRESENTA_TODO = 'PRESENTAR_TODO'
export const PRESENTA_ACTIVO = 'PRESENTAR_ACTIVOS'

export const primeraAccion = () => {
    return{
        type: PRIMERA_ACCION
    }
}


export const filtrosVisibles = {
    PRESENTA_TODO : 'PRESENTA_TODO',
    PRESENTA_ACTIVO: 'PRESENTA_ACTIVO'
}

export function agregaTodo(text){
    return {
        type : AGREGAR_TODO,text
    }
}

export function completaTodo(index){
    return{
        type: COMPLETA_TODO,index
    }
}

