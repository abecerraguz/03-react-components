import React from 'react';
import './App.css';
import Header from './components/Header';
import Persons from './components/Persons';


/*

En React el flujo de datos lo normal 
es de padre a hijo. O sea podemos pasarle propiedades (props)
desde el padre al hijo.

El Principio de un componente es basicamnete que el componente 
no varia. 
Los props no se pueden re parametrizar su valor son inmutables.

*/

function App() {
  return (
      <>
        <Header/>
          <Persons
            /*
              Es mejor crear un objeto de las 
              propiedades, esto se hace de la
              siguiente forma.
            */
           info={
             {
                age:27,
                birthday:new Date(1993,4,21),
                name:'Pepe'
             }
           }
            /*
             Al igual que los props 
             Tambien podemos pasar Arrays
             */
            hobbies={['la musica','viajar','e ir al cine']}
            bio={<p>Lorem ipsum dolor ...</p>}
            render
          />
          <Persons 
            info={
              {
                age:40,
                birthday : new Date(1980,4,21),
                name:'Juan'
              }
            }
            hobbies={['Correr','musica','andinismo']}
            bio={<p>Lorem ipsum dolor ...</p>}
            /*
            IMPORTNATE los props al definrse 
            por defecto taren un valor boleano en true ejemplo
            */
            render
          />
          <Persons 
            info={
              {
                age:45,
                birthday:new Date(1975,4,21),
                name:'Leonardo'
              }
            }
            hobbies={['leer','pintar','cocinar']}
            bio={<p>Lorem ipsum dolor ...</p>}
            render
          />
          <Persons
            info={
              {
                age:50,
                name:'Vero',
                birthday:new Date(1970,4,21)
              }
            }
            hobbies={['artesania','filatelia','viajar']}
            bio={<p>Lorem ipsum dolor ...</p>}
            render
          />
          {
          /* 
          props.children es la información
          que va dentro de la etiqueta
          y no en la etiqueta de apertura ejemplo
          */
          }
          <Persons>Estos son los Children de Persons</Persons>
      </>
  );
}

export default App;
