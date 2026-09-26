







import dns from "node:dns";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// --------------------------------------------------
// LOAD .ENV
// --------------------------------------------------

dotenv.config();

// --------------------------------------------------
// MONGODB ATLAS DNS
// --------------------------------------------------

dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

// --------------------------------------------------
// CREATE EXPRESS APP
// --------------------------------------------------

const app = express();

// --------------------------------------------------
// ENVIRONMENT VARIABLES
// --------------------------------------------------

const PORT = process.env.PORT || 5000;

// IMPORTANT:
// Your .env should use MONGODB_URI
const MONGO_URI = process.env.MONGO_URI;

// --------------------------------------------------
// CHECK MONGODB URI
// --------------------------------------------------

if (!MONGO_URI) {
  console.error("❌ MONGODB_URI is not defined!");
  console.error("Please check backend/.env");
  process.exit(1);
}

// --------------------------------------------------
// CORS
// --------------------------------------------------

// Vite may run on 5173 or 5174
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests such as Postman/server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

// --------------------------------------------------
// JSON MIDDLEWARE
// --------------------------------------------------

app.use(express.json());





// --------------------------------------------------
// STATS SCHEMA
// --------------------------------------------------

const statsSchema = new mongoose.Schema(
  {
    technologies: {
      type: Number,
      default: 6,
    },

    industries: {
      type: Number,
      default: 14,
    },

    printerModels: {
      type: Number,
      default: 39,
    },

    services: {
      type: Number,
      default: 6,
    },
  },
  {
    timestamps: true,
  }
);

// Create Stats model
const Stats = mongoose.model("Stats", statsSchema);




// --------------------------------------------------
// CLIENT SCHEMA
// --------------------------------------------------

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", clientSchema);






// ==================================================
// TECHNOLOGY SCHEMA
// ==================================================

const technologySchema = new mongoose.Schema(
  {
    short: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    text: {
      type: String,
      required: true,
      trim: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Technology = mongoose.model(
  "Technology",
  technologySchema
);






// ==================================================
// HERO IMAGES SCHEMA
// ==================================================

const heroImageSchema = new mongoose.Schema(
  {
    image1: {
      url: {
        type: String,
        required: true,
        trim: true,
      },
      alt: {
        type: String,
        default: "Engineering",
        trim: true,
      },
    },

    image2: {
      url: {
        type: String,
        required: true,
        trim: true,
      },
      alt: {
        type: String,
        default: "CAD Design",
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const HeroImage = mongoose.model(
  "HeroImage",
  heroImageSchema
);














// --------------------------------------------------
// QUOTE SCHEMA
// --------------------------------------------------

const quoteSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    service: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// CREATE MODEL
// --------------------------------------------------

const Quote = mongoose.model("Quote", quoteSchema);

// --------------------------------------------------
// HOME ROUTE
// --------------------------------------------------

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Carbon 3D Labs Backend is running",
  });
});

// --------------------------------------------------
// HEALTH CHECK
// --------------------------------------------------

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Carbon 3D Labs API is running",

    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

// --------------------------------------------------
// GET ALL QUOTES
// --------------------------------------------------

app.get("/api/quotes", async (req, res) => {
  try {
    const quotes = await Quote.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: quotes.length,
      quotes,
    });
  } catch (error) {
    console.error("❌ Get quotes error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch quotes",
    });
  }
});





// --------------------------------------------------
// GET ALL CLIENTS
// --------------------------------------------------

app.get("/api/clients", async (req, res) => {
  try {
    const clients = await Client.find().sort({
      createdAt: 1,
    });

    res.json({
      success: true,
      clients,
    });
  } catch (error) {
    console.error("❌ Get clients error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch clients",
    });
  }
});







// ==================================================
// TECHNOLOGY ROUTES
// ==================================================

// GET TECHNOLOGIES
app.get("/api/technologies", async (req, res) => {
  try {
    let technologies = await Technology.find()
      .sort({ order: 1 })
      .limit(3);

    // First time default data create karein
    if (technologies.length === 0) {
      await Technology.insertMany([
        {
          short: "FDM",
          title: "Fused Deposition Modeling",
          text:
            "FDM 3D printing creates parts by depositing melted material layer by layer.",
          order: 1,
        },
        {
          short: "SLA",
          title: "Stereolithography",
          text:
            "SLA uses liquid resin and UV light to create highly detailed 3D printed parts.",
          order: 2,
        },
        {
          short: "SLS",
          title: "Selective Laser Sintering",
          text:
            "SLS uses a laser to fuse powdered material and create strong functional components.",
          order: 3,
        },
      ]);

      technologies = await Technology.find()
        .sort({ order: 1 })
        .limit(3);
    }

    res.json({
      success: true,
      technologies,
    });

  } catch (error) {
    console.error(
      "❌ Get technologies error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch technologies",
    });
  }
});


// ==================================================
// UPDATE TECHNOLOGIES
// ==================================================

app.put("/api/technologies", async (req, res) => {
  try {
    const { technologies } = req.body;

    // Check array
    if (!Array.isArray(technologies)) {
      return res.status(400).json({
        success: false,
        message: "Technologies must be an array",
      });
    }

    // Exactly 3 cards
    if (technologies.length !== 3) {
      return res.status(400).json({
        success: false,
        message: "Exactly 3 technologies are required",
      });
    }


    // Validate all 3 cards
    for (let i = 0; i < technologies.length; i++) {

      const technology = technologies[i];

      if (!technology) {
        return res.status(400).json({
          success: false,
          message: `Technology ${i + 1} is missing`,
        });
      }

      if (!technology.short?.trim()) {
        return res.status(400).json({
          success: false,
          message:
            `Technology ${i + 1}: Short Name is required`,
        });
      }

      if (!technology.title?.trim()) {
        return res.status(400).json({
          success: false,
          message:
            `Technology ${i + 1}: Title is required`,
        });
      }

      if (!technology.text?.trim()) {
        return res.status(400).json({
          success: false,
          message:
            `Technology ${i + 1}: Description is required`,
        });
      }
    }


    // Get existing 3 records
    const existingTechnologies =
      await Technology.find()
        .sort({ order: 1 })
        .limit(3);


    // Update existing records
    for (let i = 0; i < 3; i++) {

      const data = technologies[i];

      if (existingTechnologies[i]) {

        await Technology.findByIdAndUpdate(
          existingTechnologies[i]._id,
          {
            short: data.short.trim(),
            title: data.title.trim(),
            text: data.text.trim(),
            order: i + 1,
          },
          {
            new: true,
          }
        );

      } else {

        // If record doesn't exist, create it
        await Technology.create({
          short: data.short.trim(),
          title: data.title.trim(),
          text: data.text.trim(),
          order: i + 1,
        });

      }
    }


    // Get updated data
    const updatedTechnologies =
      await Technology.find()
        .sort({ order: 1 })
        .limit(3);


    res.json({
      success: true,
      message:
        "Technologies updated successfully",
      technologies: updatedTechnologies,
    });

  } catch (error) {

    console.error(
      "❌ Update technologies error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to update technologies",
    });
  }
});















// --------------------------------------------------
// CREATE QUOTE
// --------------------------------------------------

app.post("/api/quotes", async (req, res) => {
  try {
    console.log("📩 Quote received");

    const {
      fullName,
      phone,
      email,
      service,
      message,
    } = req.body;

    // ------------------------------------------------
    // CHECK REQUIRED FIELDS
    // ------------------------------------------------

    if (
      !fullName ||
      !phone ||
      !email ||
      !service ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // ------------------------------------------------
    // EMAIL VALIDATION
    // ------------------------------------------------

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // ------------------------------------------------
    // SAVE QUOTE
    // ------------------------------------------------

    const quote = await Quote.create({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      service: service.trim(),
      message: message.trim(),
    });

    console.log(
      "✅ Quote saved:",
      quote._id.toString()
    );

    // ------------------------------------------------
    // RESPONSE
    // ------------------------------------------------

    res.status(201).json({
      success: true,
      message: "Quote successfully sent",
      quoteId: quote._id,
    });

  } catch (error) {
    console.error("❌ Quote error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
});






// --------------------------------------------------
// ADD CLIENT
// --------------------------------------------------

app.post("/api/clients", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Client name is required",
      });
    }

    const client = await Client.create({
      name: name.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Client added successfully",
      client,
    });
  } catch (error) {
    console.error("❌ Add client error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add client",
    });
  }
});



// --------------------------------------------------
// DELETE CLIENT
// --------------------------------------------------

app.delete("/api/clients/:id", async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(
      req.params.id
    );

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    res.json({
      success: true,
      message: "Client deleted successfully",
    });
  } catch (error) {
    console.error("❌ Delete client error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete client",
    });
  }
});









// --------------------------------------------------
// DELETE QUOTE
// --------------------------------------------------

app.delete("/api/quotes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const quote =
      await Quote.findByIdAndDelete(id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    res.json({
      success: true,
      message: "Quote deleted successfully",
    });

  } catch (error) {
    console.error(
      "❌ Delete quote error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to delete quote",
    });
  }
});


// --------------------------------------------------
// GET WEBSITE STATS
// --------------------------------------------------

app.get("/api/stats", async (req, res) => {
  try {
    let stats = await Stats.findOne();

    // Create default stats if database is empty
    if (!stats) {
      stats = await Stats.create({
        technologies: 6,
        industries: 14,
        printerModels: 39,
        services: 6,
      });
    }

    res.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error("❌ Get stats error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch stats",
    });
  }
});




// --------------------------------------------------
// UPDATE WEBSITE STATS
// --------------------------------------------------

app.put("/api/stats", async (req, res) => {
  try {
    const {
      technologies,
      industries,
      printerModels,
      services,
    } = req.body;

    // Validation
    if (
      technologies === undefined ||
      industries === undefined ||
      printerModels === undefined ||
      services === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "All stats fields are required",
      });
    }

    // Make sure values are numbers
    if (
      Number(technologies) < 0 ||
      Number(industries) < 0 ||
      Number(printerModels) < 0 ||
      Number(services) < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Stats cannot be negative",
      });
    }

    const stats = await Stats.findOneAndUpdate(
      {},
      {
        technologies: Number(technologies),
        industries: Number(industries),
        printerModels: Number(printerModels),
        services: Number(services),
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.json({
      success: true,
      message: "Stats updated successfully",
      stats,
    });
  } catch (error) {
    console.error("❌ Update stats error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update stats",
    });
  }
});









// ==================================================
// HERO IMAGE ROUTES
// ==================================================


// GET HERO IMAGES
app.get("/api/hero-images", async (req, res) => {
  try {

    let heroImages =
      await HeroImage.findOne();

    // First time default data create karein
    if (!heroImages) {

      heroImages = await HeroImage.create({

        image1: {
          url:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=85",
          alt: "Engineering",
        },

        image2: {
          url:
            "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=85",
          alt: "CAD design",
        },

      });
    }

    res.json({
      success: true,
      heroImages,
    });

  } catch (error) {

    console.error(
      "❌ Get hero images error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch hero images",
    });
  }
});


// UPDATE HERO IMAGES
app.put("/api/hero-images", async (req, res) => {
  try {

    const { image1, image2 } = req.body;


    // Validation
    if (
      !image1 ||
      !image1.url ||
      !image1.url.trim()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Image 1 URL is required",
      });
    }


    if (
      !image2 ||
      !image2.url ||
      !image2.url.trim()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Image 2 URL is required",
      });
    }


    const heroImages =
      await HeroImage.findOneAndUpdate(
        {},

        {
          image1: {
            url: image1.url.trim(),
            alt:
              image1.alt?.trim() ||
              "Engineering",
          },

          image2: {
            url: image2.url.trim(),
            alt:
              image2.alt?.trim() ||
              "CAD Design",
          },
        },

        {
          new: true,
          upsert: true,
        }
      );


    res.json({
      success: true,
      message:
        "Hero images updated successfully",

      heroImages,
    });

  } catch (error) {

    console.error(
      "❌ Update hero images error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to update hero images",
    });
  }
});





















// --------------------------------------------------
// START SERVER
// --------------------------------------------------

async function startServer() {
  try {
    console.log("");
    console.log("======================================");
    console.log("🚀 CARBON 3D LABS BACKEND");
    console.log("======================================");

    console.log("🔄 Checking MongoDB URI...");

    console.log(
      "MongoDB URI:",
      MONGO_URI
        ? "Loaded ✅"
        : "Missing ❌"
    );

    console.log(
      "🔄 Connecting to MongoDB..."
    );

    // ------------------------------------------------
    // CONNECT TO MONGODB
    // ------------------------------------------------

    await mongoose.connect(
      MONGO_URI,
      {
        serverSelectionTimeoutMS: 15000,
      }
    );

    console.log(
      "✅ MongoDB connected successfully"
    );

    // ------------------------------------------------
    // START EXPRESS SERVER
    // ------------------------------------------------

    app.listen(PORT, () => {
      console.log("");
      console.log("======================================");
      console.log("🚀 SERVER STARTED");
      console.log("======================================");

      console.log(
        `📡 Server: http://localhost:${PORT}`
      );

      console.log(
        `❤️ Health: http://localhost:${PORT}/api/health`
      );

      console.log(
        `📋 Quotes: http://localhost:${PORT}/api/quotes`
      );

      console.log("======================================");
      console.log("");
    });

  } catch (error) {
    console.error("");
    console.error(
      "❌ MongoDB connection failed"
    );

    console.error(
      "--------------------------------------"
    );

    console.error(error.message);

    console.error(
      "--------------------------------------"
    );

    console.error("");

    process.exit(1);
  }
}

// --------------------------------------------------
// RUN SERVER
// --------------------------------------------------

startServer();
