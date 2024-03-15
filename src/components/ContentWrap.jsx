import PreSale from "./PreSale"
import Statistics from "./Statistics"
import NextReleases from "./NextReleases"
import MostPopular from "./MostPopular"
import Genres from "./Genres"

// const data = [
//     {
//         titulo: "Cantidad de estrenos",
//         cifra: "15",
//         icono: "bi bi-film",
//         colorIcono: "cornflowerblue"
//     },
//     {
//         titulo: "Categorias",
//         cifra: "12",
//         icono: "bi bi-tags-fill",
//         colorIcono: "orange"
//     },
//     {
//         titulo: "Total Ventas",
//         cifra: "$ 489.567",
//         icono: "bi bi-currency-dollar",
//         colorIcono: "green"
//     }
// ];

function ContentWrap(){
    return (
        <main className="content-wrap">
			<PreSale />
			<Statistics />
            <NextReleases />
			<MostPopular />
            <Genres />
		</main>
    )
}

export default ContentWrap;