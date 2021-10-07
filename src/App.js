import { useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';


function App() {
	const [paginaActual, setPaginaActual]= useState(1);
	let pelciculas = peliculasJson;

	

return (
			<PageWrapper>
				{pelciculas.map(pelicula =>
				<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} 
				director={pelicula.director} actores ={pelicula.actores}	
				fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
				{pelicula.descripcion}
				</Pelicula>
				)}

				<Paginacion pagina={paginaActual} total={4} onChange={(pagina) => {
					setPaginaActual(pagina)
				}}/>
			</PageWrapper>
			
		
 );
}

export default App;
