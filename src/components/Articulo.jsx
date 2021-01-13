import React from 'react';
import { Imagenes } from './../Services/img';
import '../css/Articulo.css';

export const Articulo = () => {
    return (
        <>
            {
                Imagenes.map(i => {
                    return (
                        <div key={i.id} className="Articulo">
                            <h1>{i.title}</h1>
                            <img src={i.img} alt={i.name} />
                            <p className="Precio">{i.precio}</p>
                            <p className="Desc">{i.desc}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
