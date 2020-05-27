import React from 'react';



const Persons = ({info,hobbies,bio,render,children}) => {
    
    /*
    Al día de hoy en la comunidad de React
    ya no se pasan los datos de los props a traves 
    de "{props.name}", el proceso Intermedio fue declarar
    los props de la sigueinte forma:

    Forma antigua
    {props.name}

    Forma intermedia
    const {name,age} = props

    Forma actual declarar los props directamente 
    en el parentesis de parametro de la Const ejemplo

    const Persons = ({name,age})

    
    */
    //  Mostramos los children de person por consola  
    console.log(children)

        if(render){
            return(
                <>
                <p>Soy {info.name} y tengo {info.age} años. Nací en {info.birthday.getFullYear()}. Mis hobbies son {hobbies.join('')}</p>
                {bio}
                </>
            )
        }else{
            return <p>No hay persona</p>
        }
}

export default Persons