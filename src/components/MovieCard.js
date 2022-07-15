import React from "react";

// child component
// function MovieCard(props) {
//     return ( <
//         div className = "movie-card" >
//         <
//         img src = { props.posterSrc }
//         alt = { props.title }
//         /> <
//         h2 > { props.title } < /h2> <
//         small > { props.genres.join(", ") } < /small> < /
//         div >
//     );
// }

// With Destructuring
function MovieCard({ title, posterSrc, genres }) {
    return ( <
        div className = "movie-card" >
        <
        img src = { posterSrc }
        alt = { title }
        /> <
        h2 > { title } < /h2> <
        small > { genres.join(", ") } < /small> < /
        div >
    );
}

export default MovieCard;