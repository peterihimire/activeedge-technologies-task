import React from "react";
import "./ArtistItem.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaInfo, FaTrash } from "react-icons/fa";
// import imgProperty from "../../assets/property-1.jpg";

const ArtistItem = (props) => {
  const { arty } = props;
  console.log(props);
  console.log(arty);
  return (
    <Card className="artist-card">
      <article className="artist">
        <div className="artist-item-img">
          <img src="" alt="home" />
        </div>
        <div>
            <h5>
              {/* {arty.title.length > 40
                ? arty.title.slice(0, 40) + "..."
                : arty.title} */}
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
            <Link
              to={`/property/${arty.id}`}
              className="artist-options-icon-btn"
            >
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
