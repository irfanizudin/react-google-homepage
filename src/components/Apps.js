import React from "react";

const Apps = ({ image_url, name }) => {
    return (
        <div className="apps">
            <img src={image_url} alt={`${name}-logo`} className="image-apps" />
            <p>{name}</p>
        </div>
    );
};

export default Apps;
