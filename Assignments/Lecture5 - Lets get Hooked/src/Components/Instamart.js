import React, { useState } from "react";

const Section = ({ title, visibleSection, setVisibleSection }) => {
  return (
    <div className="border border-black m-2 p-3">
      <h4>{title}</h4>
      <button
        className="bg-gray-500 hover:bg-gray-800 text-white font-bold m-2 py-2 px-2 rounded"
        onClick={() => {
          visibleSection === title
            ? setVisibleSection(null)
            : setVisibleSection(title);
        }}>
        {visibleSection === title ? "Hide" : "Show"}
      </button>
      {visibleSection === title && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          veritatis aspernatur nesciunt, quis consectetur magnam officia
          molestias ipsum illum optio nihil dignissimos eaque perspiciatis nulla
          in harum sint exercitationem quod consequatur atque repudiandae nobis
          labore soluta alias?
        </p>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("About Instamart");

  return (
    <div>
      <h1 className="text-5xl p-2 m-2 mb-5 font-bold">Collapsable Accordion</h1>
      <Section
        title="About Instamart"
        visibleSection={visibleSection}
        setVisibleSection={setVisibleSection}
      />
      <Section
        title="Team Instamart"
        visibleSection={visibleSection}
        setVisibleSection={setVisibleSection}
      />
      <Section
        title="Product Instamart"
        visibleSection={visibleSection}
        setVisibleSection={setVisibleSection}
      />
      <Section
        title="Career Instamart"
        visibleSection={visibleSection}
        setVisibleSection={setVisibleSection}
      />
    </div>
  );
};

export default Instamart;
