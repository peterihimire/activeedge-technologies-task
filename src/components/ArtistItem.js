import React, { useCallback, useState, useEffect } from "react";
import "./ArtistItem.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaInfo, FaTrash } from "react-icons/fa";
// import imgProperty from "../../assets/property-1.jpg";

const ArtistItem = (props) => {
  const [artistAlbum, setArtistAlbum] = useState([]);
  const [artistAlbumPhotos, setArtistAlbumPhotos] = useState([]);

  console.log(artistAlbum);
  console.log(artistAlbumPhotos + "albom photos");
  const { artist } = props;
  console.log(props);
  console.log(artist);
  console.log(artist.id);

  const artistAlbumId = artistAlbum.map((album) => {
    console.log(album);
    console.log(album.id);
    return album.id;
  });

  // artistAlbumId();
  console.log("peero artist album " + artistAlbumId);

  // GET ALL ALBUM
  const getArtistAlbum = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((data) => {
        console.log("This is the artist album" + data.userId);
        setArtistAlbum(data);
      })

      .catch((err) => console.log(err));
  };

  // ARTIST ALBUM PHOTOS
  const getArtistAlbumPhotos = useCallback(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${artistAlbum.id}/photos`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("This is the artist album" + data);
        setArtistAlbumPhotos(data);
      })
      .then((albumData) => {
        console.log(albumData);
      })
      .catch((err) => console.log(err));
  }, [artistAlbum.id]);

  //
  useEffect(() => {
    getArtistAlbum();
    getArtistAlbumPhotos();
  }, [getArtistAlbumPhotos]);

  // FOR SEARCHED SCAPE RESULT

  let artistAll = artistAlbum.find((album) => {
    console.log(album.userId, +"and corresponding" + album.id);
    let matchedId = album.userId === artist.id;
    console.log(matchedId);
    return matchedId;
  });

  // const setSearchedScape = (id) => {
  //   let scape = publicScape.find((scape) => {
  //     console.log(id, scape._id);
  //     let matchedId = scape._id === id;
  //     console.log(matchedId);
  //     return scape._id === id;
  //   });
  //   console.log(scape);
  //   setSearchScape(scape);
  // };
  // console.log(searchScape);
  // console.log(setSearchedScape);

  // console.log(scape);
  // setSearchScape(scape);

  console.log("This is the matched Id" + artistAll);

  // const albumOwner = artistAlbum.filter((album) => {
  //   console.log("these are album" + album);
  //   return album.userId === artist.id;
  // });
  // console.log("This is the album" + albumOwner);

  return (
    <Card className="artist-card">
      <article className="artist">
        <div className="artist-item-img">
          <img src="" alt="album art" />
        </div>
        <div>
          <h5>
            {/* {arty.title.length > 40
                ? arty.title.slice(0, 40) + "..."
                : arty.title} */}
            {artist.name}
          </h5>
          <div className="price-bed">
            <div>
              <h6>
                {/* ₦{arty.amount} */}
                <span> million</span>
              </h6>
            </div>
            <div className="flex-align">
              {/* <p>{arty.bedroom}</p> */}
              <span>{<FaBed className="arrow-icon" />}</span>
            </div>
          </div>
          <div className="location-shower">
            <div>
              <h6>
                {/* {arty.address.length > 40
                    ? arty.address.slice(0, 40) + "..."
                    : arty.address} */}
              </h6>
            </div>
            <div className="flex-align">
              {/* <p>{arty.bathroom}</p> */}
              <span>{<FaBath className="arrow-icon" />}</span>
            </div>
          </div>
        </div>

        <div className="artist-hover-options">
          <Link to={`/`} className="artist-options-icon-btn">
            <FaInfo className="option-icon" />
          </Link>

          <button className="artist-options-icon-btn">
            <FaTrash className="option-icon" />
          </button>
        </div>
      </article>
    </Card>
  );
};

export default ArtistItem;
