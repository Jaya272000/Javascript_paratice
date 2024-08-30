const fetchdata=async(movie)=>{
    try {
        const response=await fetch(
            `https://www.omdbapi.com/?s=${movie}&apikey=879267ae`

        )
        const data=await response.json();
        console.log(data)

        
    } catch (error) {
        console.log(error)
    }
}
const movie=prompt('serach a movie')
fetchdata(movie);