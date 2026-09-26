
// import React, { useEffect, useState } from "react";
// import "./Admin.css";

// function Admin() {
//   const [stats, setStats] = useState({
//     technologies: "",
//     industries: "",
//     printerModels: "",
//     services: "",
//   });

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [message, setMessage] = useState("");

//   // -----------------------------------------------
//   // GET CURRENT STATS
//   // -----------------------------------------------

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/stats"
//         );

//         const data = await response.json();

//         if (data.success) {
//           setStats({
//             technologies: data.stats.technologies,
//             industries: data.stats.industries,
//             printerModels: data.stats.printerModels,
//             services: data.stats.services,
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//         setMessage("❌ Unable to load stats");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   // -----------------------------------------------
//   // INPUT CHANGE
//   // -----------------------------------------------

//   const handleChange = (e) => {
//     setStats({
//       ...stats,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // -----------------------------------------------
//   // UPDATE STATS
//   // -----------------------------------------------

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setSaving(true);
//     setMessage("");

//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/stats",
//         {
//           method: "PUT",

//           headers: {
//             "Content-Type": "application/json",
//           },

//           body: JSON.stringify({
//             technologies: Number(stats.technologies),
//             industries: Number(stats.industries),
//             printerModels: Number(stats.printerModels),
//             services: Number(stats.services),
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to update stats"
//         );
//       }

//       setStats({
//         technologies: data.stats.technologies,
//         industries: data.stats.industries,
//         printerModels: data.stats.printerModels,
//         services: data.stats.services,
//       });

//       setMessage("✅ Stats updated successfully!");
//     } catch (error) {
//       console.error("Update error:", error);

//       setMessage(
//         "❌ Failed to update stats. Check backend."
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   // -----------------------------------------------
//   // LOADING
//   // -----------------------------------------------

//   if (loading) {
//     return (
//       <div className="admin-page">
//         <div className="admin-loading">
//           Loading Admin Panel...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="admin-page">

//       <div className="admin-container">

//         {/* HEADER */}

//         <div className="admin-header">
//           <div>
//             <span className="admin-small-title">
//               CARBON 3D LABS
//             </span>

//             <h1>Website Admin Panel</h1>

//             <p>
//               Manage your website statistics
//             </p>
//           </div>

//           <a href="/" className="view-site">
//             View Website →
//           </a>
//         </div>

//         {/* STATS CARD */}

//         <div className="admin-card">

//           <div className="card-title">
//             <h2>Website Statistics</h2>

//             <p>
//               Update the numbers displayed on the
//               homepage.
//             </p>
//           </div>





//           <form onSubmit={handleSubmit}>

//             <div className="admin-grid">

//               {/* TECHNOLOGIES */}

//               <div className="admin-field">
//                 <label>
//                   Technologies
//                 </label>

//                 <input
//                   type="number"
//                   name="technologies"
//                   value={stats.technologies}
//                   onChange={handleChange}
//                   min="0"
//                   required
//                 />

//                 <span>
//                   Example: FDM, SLA, DLP...
//                 </span>
//               </div>

//               {/* INDUSTRIES */}

//               <div className="admin-field">
//                 <label>
//                   Industries Served
//                 </label>

//                 <input
//                   type="number"
//                   name="industries"
//                   value={stats.industries}
//                   onChange={handleChange}
//                   min="0"
//                   required
//                 />

//                 <span>
//                   Number of industries
//                 </span>
//               </div>

//               {/* PRINTER MODELS */}

//               <div className="admin-field">
//                 <label>
//                   3D Printer Models
//                 </label>

//                 <input
//                   type="number"
//                   name="printerModels"
//                   value={stats.printerModels}
//                   onChange={handleChange}
//                   min="0"
//                   required
//                 />

//                 <span>
//                   Number of printer models
//                 </span>
//               </div>

//               {/* SERVICES */}

//               <div className="admin-field">
//                 <label>
//                   Services
//                 </label>

//                 <input
//                   type="number"
//                   name="services"
//                   value={stats.services}
//                   onChange={handleChange}
//                   min="0"
//                   required
//                 />

//                 <span>
//                   Number of services
//                 </span>
//               </div>

//             </div>

            
//             {/* MESSAGE */}

//             {message && (
//               <div className="admin-message">
//                 {message}
//               </div>
//             )}

//             {/* BUTTON */}

//             <button
//               className="save-btn"
//               type="submit"
//               disabled={saving}
//             >
//               {saving
//                 ? "Updating..."
//                 : "Update Statistics"}
//             </button>

//           </form>


          


//         </div>






//       </div>

//     </div>
//   );
// }







// export default Admin;



























import React, { useEffect, useState } from "react";
import "./Admin.css";

function Admin() {
  // ==================================================
  // STATS STATE
  // ==================================================

  const [stats, setStats] = useState({
    technologies: "",
    industries: "",
    printerModels: "",
    services: "",
  });

  // ==================================================
  // CLIENT STATE
  // ==================================================

  const [clients, setClients] = useState([]);
  const [clientName, setClientName] = useState("");









  
// ==================================================
// TECHNOLOGY STATE
// ==================================================

const [technologies, setTechnologies] = useState([
  {
    _id: "",
    short: "",
    title: "",
    text: "",
  },
  {
    _id: "",
    short: "",
    title: "",
    text: "",
  },
  {
    _id: "",
    short: "",
    title: "",
    text: "",
  },
]);

const [technologySaving, setTechnologySaving] =
  useState(false);










// ==================================================
// HERO IMAGE STATE
// ==================================================

const [heroImages, setHeroImages] = useState({

  image1: {
    url: "",
    alt: "",
  },

  image2: {
    url: "",
    alt: "",
  },

});

const [heroImageSaving, setHeroImageSaving] =
  useState(false);





  // ==================================================
  // COMMON STATE
  // ==================================================

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // ==================================================
  // GET STATS
  // ==================================================

  const fetchStats = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/stats"
      );

      const data = await response.json();

      if (data.success) {
        setStats({
          technologies: data.stats.technologies,
          industries: data.stats.industries,
          printerModels: data.stats.printerModels,
          services: data.stats.services,
        });
      }
    } catch (error) {
      console.error("Error fetching stats:", error);

      setMessage("❌ Unable to load stats");
    }
  };

  // ==================================================
  // GET CLIENTS
  // ==================================================

  const fetchClients = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/clients"
      );

      const data = await response.json();

      if (data.success) {
        setClients(data.clients);
      }
    } catch (error) {
      console.error("Error fetching clients:", error);

      setMessage("❌ Unable to load clients");
    }
  };








// ==================================================
// GET TECHNOLOGIES
// ==================================================

const fetchTechnologies = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/technologies"
    );

    const data = await response.json();

    if (data.success) {
      setTechnologies(data.technologies);
    }
  } catch (error) {
    console.error(
      "Error fetching technologies:",
      error
    );

    setMessage(
      "❌ Unable to load technologies"
    );
  }
};





// ==================================================
// GET HERO IMAGES
// ==================================================

const fetchHeroImages = async () => {

  try {

    const response = await fetch(
      "http://localhost:5000/api/hero-images"
    );

    const data = await response.json();

    if (data.success) {

      setHeroImages({
        image1: {
          url: data.heroImages.image1.url,
          alt: data.heroImages.image1.alt,
        },

        image2: {
          url: data.heroImages.image2.url,
          alt: data.heroImages.image2.alt,
        },
      });

    }

  } catch (error) {

    console.error(
      "Error fetching hero images:",
      error
    );

    setMessage(
      "❌ Unable to load hero images"
    );

  }

};









  // ==================================================
  // LOAD DATA
  // ==================================================

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([
        fetchStats(),
        fetchClients(),
        fetchTechnologies(),
        fetchHeroImages(),
      ]);

      setLoading(false);
    };

    loadData();
  }, []);

  // ==================================================
  // STATS INPUT CHANGE
  // ==================================================

  const handleChange = (e) => {
    setStats({
      ...stats,
      [e.target.name]: e.target.value,
    });
  };

  // ==================================================
  // UPDATE STATS
  // ==================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/stats",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            technologies: Number(stats.technologies),
            industries: Number(stats.industries),
            printerModels: Number(stats.printerModels),
            services: Number(stats.services),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update stats"
        );
      }

      setStats({
        technologies: data.stats.technologies,
        industries: data.stats.industries,
        printerModels: data.stats.printerModels,
        services: data.stats.services,
      });

      setMessage(
        "✅ Statistics updated successfully!"
      );
    } catch (error) {
      console.error("Update stats error:", error);

      setMessage(
        "❌ Failed to update statistics. Check backend."
      );
    } finally {
      setSaving(false);
    }
  };

  // ==================================================
  // ADD CLIENT
  // ==================================================

  const addClient = async () => {
    // Empty check
    if (!clientName.trim()) {
      alert("Please enter client name");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/clients",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: clientName.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add client"
        );
      }

      if (data.success) {
        // Add new client to UI
        setClients([
          ...clients,
          data.client,
        ]);

        // Clear input
        setClientName("");

        setMessage(
          "✅ Client added successfully!"
        );
      }
    } catch (error) {
      console.error("Add client error:", error);

      setMessage(
        "❌ Failed to add client."
      );
    }
  };

  // ==================================================
  // DELETE CLIENT
  // ==================================================

  const deleteClient = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/clients/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete client"
        );
      }

      if (data.success) {
        setClients(
          clients.filter(
            (client) => client._id !== id
          )
        );

        setMessage(
          "✅ Client deleted successfully!"
        );
      }
    } catch (error) {
      console.error(
        "Delete client error:",
        error
      );

      setMessage(
        "❌ Failed to delete client."
      );
    }
  };


  




// ==================================================
// TECHNOLOGY INPUT CHANGE
// ==================================================

const handleTechnologyChange = (
  index,
  field,
  value
) => {
  const updatedTechnologies = [...technologies];

  updatedTechnologies[index] = {
    ...updatedTechnologies[index],
    [field]: value,
  };

  setTechnologies(updatedTechnologies);
};



// ==================================================
// UPDATE TECHNOLOGIES
// ==================================================

const updateTechnologies = async () => {
  setTechnologySaving(true);
  setMessage("");

  try {
    const response = await fetch(
      "http://localhost:5000/api/technologies",
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          technologies,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to update technologies"
      );
    }

    if (data.success) {
      setTechnologies(data.technologies);

      setMessage(
        "✅ Technologies updated successfully!"
      );
    }
  } catch (error) {
    console.error(
      "Update technologies error:",
      error
    );

    setMessage(
      "❌ Failed to update technologies."
    );
  } finally {
    setTechnologySaving(false);
  }
};





// ==================================================
// HERO IMAGE INPUT CHANGE
// ==================================================

const handleHeroImageChange = (
  imageNumber,
  field,
  value
) => {

  setHeroImages((previous) => ({

    ...previous,

    [imageNumber]: {
      ...previous[imageNumber],
      [field]: value,
    },

  }));

};


// ==================================================
// UPDATE HERO IMAGES
// ==================================================

const updateHeroImages = async () => {

  setHeroImageSaving(true);
  setMessage("");

  try {

    const response = await fetch(
      "http://localhost:5000/api/hero-images",
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          image1: heroImages.image1,
          image2: heroImages.image2,
        }),
      }
    );


    const data = await response.json();


    if (!response.ok) {

      throw new Error(
        data.message ||
        "Failed to update hero images"
      );

    }


    if (data.success) {

      setHeroImages({
        image1: {
          url: data.heroImages.image1.url,
          alt: data.heroImages.image1.alt,
        },

        image2: {
          url: data.heroImages.image2.url,
          alt: data.heroImages.image2.alt,
        },
      });


      setMessage(
        "✅ Hero images updated successfully!"
      );

    }

  } catch (error) {

    console.error(
      "Update hero images error:",
      error
    );

    setMessage(
      "❌ Failed to update hero images."
    );

  } finally {

    setHeroImageSaving(false);

  }

};









  // ==================================================
  // LOADING
  // ==================================================

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-loading">
          Loading Admin Panel...
        </div>
      </div>
    );
  }

  // ==================================================
  // UI
  // ==================================================

  return (
    <div className="admin-page">

      <div className="admin-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="admin-header">

          <div>

            <span className="admin-small-title">
              CARBON 3D LABS
            </span>

            <h1>
              Website Admin Panel
            </h1>

            <p>
              Manage your website content
            </p>

          </div>

          <a
            href="/"
            className="view-site"
          >
            View Website →
          </a>

        </div>


        {/* ==================================================
            STATISTICS CARD
        ================================================== */}

        <div className="admin-card">

          <div className="card-title">

            <h2>
              Website Statistics
            </h2>

            <p>
              Update the numbers displayed
              on the homepage.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="admin-grid">

              {/* TECHNOLOGIES */}

              <div className="admin-field">

                <label>
                  Technologies
                </label>

                <input
                  type="number"
                  name="technologies"
                  value={stats.technologies}
                  onChange={handleChange}
                  min="0"
                  required
                />

                <span>
                  Example: FDM, SLA, DLP...
                </span>

              </div>


              {/* INDUSTRIES */}

              <div className="admin-field">

                <label>
                  Industries Served
                </label>

                <input
                  type="number"
                  name="industries"
                  value={stats.industries}
                  onChange={handleChange}
                  min="0"
                  required
                />

                <span>
                  Number of industries
                </span>

              </div>


              {/* PRINTER MODELS */}

              <div className="admin-field">

                <label>
                  3D Printer Models
                </label>

                <input
                  type="number"
                  name="printerModels"
                  value={stats.printerModels}
                  onChange={handleChange}
                  min="0"
                  required
                />

                <span>
                  Number of printer models
                </span>

              </div>


              {/* SERVICES */}

              <div className="admin-field">

                <label>
                  Services
                </label>

                <input
                  type="number"
                  name="services"
                  value={stats.services}
                  onChange={handleChange}
                  min="0"
                  required
                />

                <span>
                  Number of services
                </span>

              </div>

            </div>


            {/* UPDATE BUTTON */}

            <button
              className="save-btn"
              type="submit"
              disabled={saving}
            >

              {saving
                ? "Updating..."
                : "Update Statistics"}

            </button>

          </form>

        </div>


        {/* ==================================================
            CLIENT MANAGEMENT
        ================================================== */}

        <div className="admin-card">

          <div className="card-title">

            <h2>
              Our Clients
            </h2>

            <p>
              Add or remove clients displayed
              on the homepage.
            </p>

          </div>


          {/* ADD CLIENT */}

          <div className="client-add">

            <input
              type="text"
              placeholder="Enter client name"
              value={clientName}
              onChange={(e) =>
                setClientName(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addClient();
                }
              }}
            />

            <button
              type="button"
              onClick={addClient}
            >
              Add Client
            </button>

          </div>


          {/* CLIENT LIST */}

          <div className="admin-client-list">

            {clients.length === 0 ? (

              <p className="no-clients">
                No clients added yet.
              </p>

            ) : (

              clients.map((client) => (

                <div
                  className="admin-client-item"
                  key={client._id}
                >

                  <span>
                    {client.name}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      deleteClient(client._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              ))

            )}

          </div>

        </div>




      
{/* ==================================================
    HERO IMAGES MANAGEMENT
================================================== */}

<div className="admin-card">

  <div className="card-title">

    <h2>
      Hero Images
    </h2>

    <p>
      Update the two images displayed
      in the homepage hero section.
    </p>

  </div>


  <div className="hero-images-admin">


    {/* ==============================================
        IMAGE 1
    ============================================== */}

    <div className="hero-image-admin-item">

      <h3>
        Image 1
      </h3>


      <div className="admin-field">

        <label>
          Image URL
        </label>

        <input
          type="url"
          value={heroImages.image1.url}
          onChange={(e) =>
            handleHeroImageChange(
              "image1",
              "url",
              e.target.value
            )
          }
          placeholder="https://example.com/image.jpg"
        />

      </div>


      <div className="admin-field">

        <label>
          Alt Text
        </label>

        <input
          type="text"
          value={heroImages.image1.alt}
          onChange={(e) =>
            handleHeroImageChange(
              "image1",
              "alt",
              e.target.value
            )
          }
          placeholder="Engineering"
        />

      </div>


      {/* IMAGE PREVIEW */}

      {heroImages.image1.url && (

        <img
          className="hero-admin-preview"
          src={heroImages.image1.url}
          alt={heroImages.image1.alt}
        />

      )}

    </div>


    {/* ==============================================
        IMAGE 2
    ============================================== */}

    <div className="hero-image-admin-item">

      <h3>
        Image 2
      </h3>


      <div className="admin-field">

        <label>
          Image URL
        </label>

        <input
          type="url"
          value={heroImages.image2.url}
          onChange={(e) =>
            handleHeroImageChange(
              "image2",
              "url",
              e.target.value
            )
          }
          placeholder="https://example.com/image.jpg"
        />

      </div>


      <div className="admin-field">

        <label>
          Alt Text
        </label>

        <input
          type="text"
          value={heroImages.image2.alt}
          onChange={(e) =>
            handleHeroImageChange(
              "image2",
              "alt",
              e.target.value
            )
          }
          placeholder="CAD Design"
        />

      </div>


      {/* IMAGE PREVIEW */}

      {heroImages.image2.url && (

        <img
          className="hero-admin-preview"
          src={heroImages.image2.url}
          alt={heroImages.image2.alt}
        />

      )}

    </div>

  </div>


  {/* SAVE BUTTON */}

  <button
    type="button"
    className="save-btn"
    onClick={updateHeroImages}
    disabled={heroImageSaving}
  >

    {heroImageSaving
      ? "Updating..."
      : "Update Hero Images"}

  </button>

</div>



        
        





{/* ==================================================
    TECHNOLOGY MANAGEMENT
================================================== */}

<div className="admin-card">

  <div className="card-title">

    <h2>
      Technologies
    </h2>

    <p>
      Update the content of the 3
      technology cards displayed on
      the homepage.
    </p>

  </div>


  <div className="technology-admin-list">

    {technologies.map((technology, index) => (

      <div
        className="technology-admin-item"
        key={technology._id || index}
      >

        <h3>
          Technology {index + 1}
        </h3>


        {/* SHORT NAME */}

        <div className="admin-field">

          <label>
            Short Name
          </label>

          <input
            type="text"
            value={technology.short}
            onChange={(e) =>
              handleTechnologyChange(
                index,
                "short",
                e.target.value
              )
            }
            placeholder="Example: FDM"
            maxLength={10}
          />

        </div>


        {/* TITLE */}

        <div className="admin-field">

          <label>
            Title
          </label>

          <input
            type="text"
            value={technology.title}
            onChange={(e) =>
              handleTechnologyChange(
                index,
                "title",
                e.target.value
              )
            }
            placeholder="Technology title"
          />

        </div>


        {/* DESCRIPTION */}

        <div className="admin-field">

          <label>
            Description
          </label>

          <textarea
            value={technology.text}
            onChange={(e) =>
              handleTechnologyChange(
                index,
                "text",
                e.target.value
              )
            }
            placeholder="Technology description"
            rows="4"
          />

        </div>

      </div>

    ))}

  </div>


  {/* SAVE BUTTON */}

  <button
    type="button"
    className="save-btn"
    onClick={updateTechnologies}
    disabled={technologySaving}
  >

    {technologySaving
      ? "Updating..."
      : "Update Technologies"}

  </button>

</div>







        {/* ==================================================
            MESSAGE
        ================================================== */}

        {message && (

          <div className="admin-message">

            {message}

          </div>

        )}

      </div>

    </div>
  );
}

export default Admin;

