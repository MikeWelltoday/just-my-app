import React from 'react';

import pumaModel1 from './../../assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg'
import pumaModel2 from './../../assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg'
import pumaModel3 from './../../assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg'
import {Link} from "react-router-dom";



export type PumaItem = {
    id:number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const pumaArr: PumaItem[] = [
    {
        id:1,
        model: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaModel1,
    },
    {
        id:2,
        model: 'PUMA ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id:3,
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: pumaModel3
    }
]

export const Puma = () => {
    return (
        <div>
            <h2>PUMA</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {pumaArr.map((puma, index) => (
                    <Link key={puma.id} to={`/puma/${puma.id}`}>
                        <img
                            src={puma.picture}
                            alt={puma.model}
                            style={{width: '200px', height: 'auto', marginRight: '10px'}}
                        />
                    </Link>
                ))}
            </div>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};

