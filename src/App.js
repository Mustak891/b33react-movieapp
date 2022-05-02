import "./App.css";


export default function App() {


  let movie= [
    {
      name:"M.S. Dhoni: The Untold Story",
      src:"https://wallpaperaccess.com/full/4848061.jpg",
      des:"The untold story of Mahendra Singh Dhoni's journey from ticket collector to trophy collector - the world-cup-winning captain of the Indian Cricket Team.",
      rate:9.9
    },
    {
      name:"The Shawshank Redemption",
      src:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      des:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rate:9.3
    },
    {
      name:"Inception",
      src:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      des:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      rate:8.8
    },
    {
      name:"Joker",
      src:"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      des:"A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      rate:8.4
    },
    {
      name:"The Dark Knight",
      src:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      des:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rate:9.1
    },{
      name:"The Matrix",
      src:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      des:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      rate:8.7
    }];
  return (
    <div className="App">
      
     <div className="container">
       <div className="row">
       {
        movie.map((movies)=>(<Poster name= {movies.name} src={movies.src} des={movies.des} rate={movies.rate}/>))
      }
       </div>
   
     </div>
      
    </div>
  );
}

function Poster({name,src,des,rate}) {
  return (
    <div className="column">
      <div className="img1">
     <img src={src} alt={name} />
   </div>
   <div className="col">
     <div className="name"> <h2>{name}</h2></div>
     <div className="rating"> <h2>⭐ {rate}</h2></div>
   </div>
   <div className="des">
     <p>{des}</p>
   </div>
    </div>
    
  );
  }