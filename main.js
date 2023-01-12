const peliculaInfo = {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "Rated": "PG",
    "Released": "25 May 1977",
    "Runtime": "121 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
    "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 6 Oscars. 64 wins & 29 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.6/10" }, { "Source": "Rotten Tomatoes", "Value": "93%" }, { "Source": "Metacritic", "Value": "90/100" }],
    "Metascore": "90",
    "imdbRating": "8.6",
    "imdbVotes": "1,364,082",
    "imdbID": "tt0076759",
    "Type": "movie",
    "DVD": "06 Dec 2005",
    "BoxOffice": "$460,998,507",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}


const { createApp } = Vue

createApp({
    data() {
        return {
            texto: "",
            hayInfoPeli: false,
            infoPeli: "",
            campoBusca:"",
            listaPelis: [],
        }
    },
    methods: {
        muestraTareasTotales() {
            return this.notas.length
        },
        buscarPelis(){
            let pagina=1;
            
            axios.get("http://www.omdbapi.com/?s=" + this.campoBusca + "&apikey=350e7505&page=" + pagina)
                .then((response)=> {
                    this.listaPelis=response.data.Search;
                })
                .catch((error) =>{
                })
                .then(() =>{
                });
        },
        cogerInfo(peli) {
            axios.get("http://www.omdbapi.com/?i=" + peli.imdbID + "&apikey=350e7505")
                .then((response)=> {
                    this.mostrarInfo(response.data);
                })
                .catch((error) =>{
                })
                .then(() =>{
                });
        },
        mostrarInfo(peli){ 
            console.log("peli");           
            this.hayInfoPeli = true;            
            this.infoPeli = peli;

        },
        cerrarInfo() {
            this.hayInfoPeli = false;
        }
    },
    computed: {
    }
}).mount('body')