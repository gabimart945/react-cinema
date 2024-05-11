import React from "react";
import {Movie} from "./Movie";

const movies = [{
    title: 'Batman Begins',
    image: 'https://image.tmdb.org/t/p/original/xWufUAYvji3mgltweOd41kh3MRK.jpg',
    synopsis: '¿Cómo cambia un hombre el mundo? Es una pregunta que obsesiona a Bruce Wayne al igual que el fantasma de sus padres, muertos a tiros ante sus ojos en las calles de Gotham una noche que cambió su vida para siempre. Atormentado por la culpa y la ira, el desilusionado heredero industrial desaparece de Gotham y viaja en secreto por el mundo, buscando los medios de luchar contra la injusticia y utilizar el miedo contra los que se aprovechan de los que tienen miedo. Con la ayuda de su leal mayordomo Alfred, el detective Jim Gordon - uno de los pocos buenos policías de las fuerzas del orden público de Gotham - y Lucius Fox, su aliado en la división de Ciencias Aplicadas de Wayne Enterprises, Bruce Wayne libera a su imponente alter ego: Batman, un justiciero enmascarado que utiliza la fuerza, la inteligencia y un despliegue de artefactos de alta tecnología para combatir las fuerzas siniestras que amenazan con destruir la ciudad.',
    duration: '2h 20min',
    genres: 'Acción, Crimen, Drama',
    rating: 4.1
},{
    title: 'El caballero oscuro',
    image: 'https://image.tmdb.org/t/p/original/tSIH3DTA4oFQDhPaJgHxxQZoqHh.jpg',
    synopsis: 'Batman/Bruce Wayne regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.',
    duration: '2h 32min',
    genres: 'Drama, Acción, Crimen, Suspense',
    rating: 4.5
},{
    title: 'El caballero oscuro: La leyenda renace',
    image: 'https://image.tmdb.org/t/p/original/rOD0IgjAop4LA2vuimhNRLyGijf.jpg',
    synopsis: 'Hace ocho años que Batman desapareció, dejando de ser un héroe para convertirse en un fugitivo. Al asumir la culpa por la muerte del fiscal del distrito Harvey Dent, el Caballero Oscuro decidió sacrificarlo todo por lo que consideraba, al igual que el Comisario Gordon, un bien mayor. La mentira funciona durante un tiempo, ya que la actividad criminal de la ciudad de Gotham se ve aplacada gracias a la dura Ley Dent. Pero todo cambia con la llegada de una astuta gata ladrona que pretende llevar a cabo un misterioso plan. Sin embargo, mucho más peligrosa es la aparición en escena de Bane, un terrorista enmascarado cuyos despiadados planes obligan a Bruce a regresar de su voluntario exilio.',
    duration: '2h 45min',
    genres: 'Drama, Acción, Crimen, Suspense',
    rating: 4.2
}]

export const MovieList = () => {
    return (
        <div className='movie-container'>
            {movies.map((movie, index) => (
                <Movie
                    key={index}
                    title={movie.title}
                    image={movie.image}
                    synopsis={movie.synopsis}
                    duration={movie.duration}
                    genres={movie.genres}
                    rating={movie.rating}
                />
            ))}
        </div>
    )
}