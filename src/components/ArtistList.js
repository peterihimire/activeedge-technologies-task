import React, { useEffect, useState, useCallback } from "react";
import "./ArtistList.css";
import ArtistItem from "./ArtistItem";

const ArtistList = () => {
  const [artist, setArtist] = useState([]);
  const [artistAlbum, setArtistAlbum] = useState([]);
  console.log(artist);
  console.log(artistAlbum);

  const artistAlbumId = artistAlbum.map((album) => {
    console.log(album);
    console.log(album.id);
    return album.id;
  });
  // artistAlbumId();
  console.log(artistAlbumId);

  // GET ALL ARTIST
  const getArtistList = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setArtist(data);
      })

      .catch((err) => console.log(err));
  };

  // GET ALL ALBUM
  const getArtistAlbum = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.userId);
        setArtistAlbum(data);
      })

      .catch((err) => console.log(err));
  };

  const getArtistAlbumPhotos = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${artist.id}/photos`)
      .then((response) => response.json())
      .then((data) => {
        console.log("This is the artist album" + data);
        setArtistAlbum(data);
      })
      .then((albumData) => {
        console.log(albumData);
      })
      .catch((err) => console.log(err));
  }, [artist.id]);

  //
  useEffect(() => {
    getArtistList();
    getArtistAlbum();
    getArtistAlbumPhotos();
  }, [getArtistAlbumPhotos]);

  return (
    <div>
      <div>
        <div className="movie-list-grid">
          {artist.map((arty) => {
            return (
              <div className="" key={arty.id}>
                <ArtistItem key={arty.id} artist={arty} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistList;

// GET ALL ALBUM PHOTOS
// const getArtistAlbumPhotos = () => {
//   fetch(`https://jsonplaceholder.typicode.com/albums/${artist.id}/photos`)
//     .then((response) => response.json())
//     .then((data) => {
//       setArtistAlbum(data);
//     })
//     // .then((booksData) => {
//     //   console.log(booksData);
//     //   setBooksState(() => {
//     //     return {
//     //       books: booksData,
//     //     };
//     //   });
//     // })
//     .catch((err) => console.log(err));
// };

// const getArtistAlbumPhotos = () => {
//   fetch(`https://jsonplaceholder.typicode.com/albums/${artist.id}/photos`)
//     .then((response) => response.json())
//     .then((data) => {
//       setArtistAlbum(data);
//     })
//     // .then((booksData) => {
//     //   console.log(booksData);
//     //   setBooksState(() => {
//     //     return {
//     //       books: booksData,
//     //     };
//     //   });
//     // })
//     .catch((err) => console.log(err));
// };
