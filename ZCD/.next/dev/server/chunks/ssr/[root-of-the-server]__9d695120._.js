module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/ZCD/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ZCD/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/ZCD/lib/tools-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "getCategoryColor",
    ()=>getCategoryColor,
    "subcategories",
    ()=>subcategories,
    "tools",
    ()=>tools
]);
function getCategoryColor(category) {
    const colorMap = {
        Hosting: {
            from: "#4F46E5",
            to: "#7C3AED"
        },
        "AI/ML": {
            from: "#EC4899",
            to: "#8B5CF6"
        },
        CMS: {
            from: "#F59E0B",
            to: "#EF4444"
        },
        Datastorage: {
            from: "#10B981",
            to: "#059669"
        },
        Auth: {
            from: "#EF4444",
            to: "#DC2626"
        },
        APIs: {
            from: "#F59E0B",
            to: "#D97706"
        }
    };
    return colorMap[category] || {
        from: "#6366F1",
        to: "#8B5CF6"
    };
}
const tools = [
    // Hosting (10 tools)
    {
        id: "vercel",
        name: "Vercel",
        category: "Hosting",
        subcategory: "Frontend Cloud",
        description: "The standard for Next.js and React deployment with instant global CDN.",
        bestFor: [
            "Next.js",
            "React",
            "Frontend Frameworks"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://vercel.com",
        documentation: "https://vercel.com/docs",
        overview: "Vercel is the frontend cloud platform optimized for Next.js with instant global deployment.",
        freeTierDetails: "Hobby plan includes unlimited projects, 100GB bandwidth, 6000 build minutes per month.",
        hardLimits: [
            "100GB bandwidth/month",
            "6000 build minutes/month",
            "Serverless function execution limits"
        ],
        strengths: [
            "Zero-config deployments",
            "Preview deployments",
            "Edge Network",
            "Built-in analytics"
        ],
        limitations: [
            "Commercial use requires Pro plan",
            "Function execution time limits"
        ]
    },
    {
        id: "netlify",
        name: "Netlify",
        category: "Hosting",
        subcategory: "Frontend Cloud",
        description: "Excellent for Jamstack sites with built-in forms and functions.",
        bestFor: [
            "Jamstack",
            "Static Sites",
            "Serverless Functions"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://netlify.com",
        documentation: "https://docs.netlify.com",
        overview: "Netlify is an all-in-one platform for modern web projects with continuous deployment.",
        freeTierDetails: "Starter plan with 100GB bandwidth, 300 build minutes, and serverless functions.",
        hardLimits: [
            "100GB bandwidth/month",
            "300 build minutes/month",
            "125k function invocations/month"
        ],
        strengths: [
            "Continuous deployment",
            "Form handling",
            "Split testing",
            "Identity service"
        ],
        limitations: [
            "Build time limits",
            "Function execution restrictions"
        ]
    },
    {
        id: "render",
        name: "Render",
        category: "Hosting",
        subcategory: "Backend Cloud",
        description: "Runs web services and Docker containers (Free tier spins down after inactivity).",
        bestFor: [
            "Docker",
            "Web Services",
            "APIs"
        ],
        noCreditCard: true,
        active24x7: false,
        website: "https://render.com",
        documentation: "https://render.com/docs",
        overview: "Render is a unified cloud platform for building and running apps and websites with free SSL and managed PostgreSQL.",
        freeTierDetails: "Free tier includes web services, PostgreSQL databases, and static sites (services spin down after 15 mins inactivity).",
        hardLimits: [
            "750 hours/month",
            "Spins down after inactivity",
            "Limited resources"
        ],
        strengths: [
            "Docker support",
            "Managed databases",
            "Auto-deploy from Git",
            "Custom domains"
        ],
        limitations: [
            "Services sleep after inactivity",
            "Slow cold starts",
            "Limited compute"
        ]
    },
    {
        id: "cloudflare-pages",
        name: "Cloudflare Pages",
        category: "Hosting",
        subcategory: "Edge",
        description: "Ultra-fast static hosting on Cloudflare's network with unlimited bandwidth.",
        bestFor: [
            "Static Sites",
            "Jamstack",
            "Edge Functions"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://pages.cloudflare.com",
        documentation: "https://developers.cloudflare.com/pages",
        overview: "Cloudflare Pages is a JAMstack platform built on Cloudflare's edge network with unlimited bandwidth.",
        freeTierDetails: "Unlimited sites and requests, 500 builds per month, unlimited bandwidth.",
        hardLimits: [
            "500 builds/month",
            "20,000 files per deployment",
            "25MB max file size"
        ],
        strengths: [
            "Unlimited bandwidth",
            "Global edge network",
            "Fast build times",
            "Workers integration"
        ],
        limitations: [
            "No server-side rendering",
            "Build concurrency limits"
        ]
    },
    {
        id: "github-pages",
        name: "GitHub Pages",
        category: "Hosting",
        subcategory: "Static",
        description: "Simple, free hosting directly from a GitHub repo.",
        bestFor: [
            "Documentation",
            "Personal Sites",
            "Project Pages"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://pages.github.com",
        documentation: "https://docs.github.com/pages",
        overview: "GitHub Pages is a static site hosting service that takes files from a GitHub repository and publishes a website.",
        freeTierDetails: "Completely free with custom domain support, unlimited public repositories.",
        hardLimits: [
            "1GB repository size",
            "100GB bandwidth/month",
            "10 builds per hour"
        ],
        strengths: [
            "Simple setup",
            "Version control",
            "Custom domains",
            "HTTPS included"
        ],
        limitations: [
            "Static content only",
            "Public repos only (free)",
            "No server-side code"
        ]
    },
    {
        id: "gitlab-pages",
        name: "GitLab Pages",
        category: "Hosting",
        subcategory: "Static",
        description: "The GitLab equivalent to GitHub pages, integrated with their CI/CD.",
        bestFor: [
            "Static Sites",
            "CI/CD Integration",
            "Documentation"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://docs.gitlab.com/ee/user/project/pages",
        documentation: "https://docs.gitlab.com/ee/user/project/pages",
        overview: "GitLab Pages allows you to publish static websites directly from a repository in GitLab.",
        freeTierDetails: "Free tier includes unlimited static sites with custom domains and SSL.",
        hardLimits: [
            "Static content only",
            "Tied to GitLab repositories"
        ],
        strengths: [
            "CI/CD integration",
            "Custom domains",
            "HTTPS included",
            "Version control"
        ],
        limitations: [
            "Static only",
            "GitLab ecosystem",
            "Build pipeline required"
        ]
    },
    // AI/ML (10 tools)
    {
        id: "google-gemini",
        name: "Google Gemini API",
        category: "AI/ML",
        subcategory: "LLM API",
        description: "Generous free tier for Google's latest models.",
        bestFor: [
            "Text Generation",
            "Multimodal AI",
            "Chatbots"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://ai.google.dev",
        documentation: "https://ai.google.dev/docs",
        overview: "Google's Gemini API provides access to advanced AI models for text, code, and multimodal generation.",
        freeTierDetails: "Free tier includes 15 requests per minute for Gemini Pro, 1500 requests per day.",
        hardLimits: [
            "15 RPM",
            "1500 requests/day",
            "32K token context"
        ],
        strengths: [
            "Multimodal support",
            "High quality",
            "Fast inference",
            "Google integration"
        ],
        limitations: [
            "Rate limits",
            "Request quotas",
            "Geographic restrictions"
        ]
    },
    {
        id: "huggingface",
        name: "Hugging Face",
        category: "AI/ML",
        subcategory: "Model Hosting",
        description: "Free 'Spaces' (CPU) to demo and run ML apps.",
        bestFor: [
            "ML Demos",
            "Model Hosting",
            "Open Source"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://huggingface.co",
        documentation: "https://huggingface.co/docs",
        overview: "Hugging Face is the platform for building, training, and deploying ML models with free hosting for demos.",
        freeTierDetails: "Free tier includes unlimited public models, CPU Spaces, and dataset hosting.",
        hardLimits: [
            "CPU-only on free tier",
            "Shared resources",
            "May sleep after inactivity"
        ],
        strengths: [
            "Huge model library",
            "Community support",
            "Easy deployment",
            "Version control"
        ],
        limitations: [
            "CPU only (free)",
            "Performance limits",
            "Public repos only"
        ]
    },
    {
        id: "groq",
        name: "Groq",
        category: "AI/ML",
        subcategory: "LLM API",
        description: "Extremely fast inference API with a free usage tier.",
        bestFor: [
            "Fast Inference",
            "Real-time AI",
            "Low Latency"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://groq.com",
        documentation: "https://console.groq.com/docs",
        overview: "Groq provides the world's fastest inference for LLMs with specialized hardware acceleration.",
        freeTierDetails: "Free tier includes 14,400 requests per day across supported models.",
        hardLimits: [
            "14,400 requests/day",
            "Rate limits vary by model"
        ],
        strengths: [
            "Extremely fast",
            "Low latency",
            "Multiple models",
            "Simple API"
        ],
        limitations: [
            "Daily request limits",
            "Limited model selection",
            "Rate limiting"
        ]
    },
    {
        id: "pinecone",
        name: "Pinecone",
        category: "AI/ML",
        subcategory: "Vector DB",
        description: "Managed vector database with a free starter index.",
        bestFor: [
            "Vector Search",
            "RAG",
            "Embeddings"
        ],
        noCreditCard: false,
        active24x7: true,
        website: "https://pinecone.io",
        documentation: "https://docs.pinecone.io",
        overview: "Pinecone is a managed vector database for AI applications requiring semantic search and RAG.",
        freeTierDetails: "Starter plan includes 1 index, 100K vectors, and 5M queries per month.",
        hardLimits: [
            "1 index",
            "100K vectors",
            "5M queries/month"
        ],
        strengths: [
            "Easy setup",
            "Fast queries",
            "Managed service",
            "Good documentation"
        ],
        limitations: [
            "Requires credit card",
            "Single index",
            "Storage limits"
        ]
    },
    // CMS (10 tools)
    {
        id: "sanity",
        name: "Sanity.io",
        category: "CMS",
        subcategory: "Headless",
        description: "Highly flexible, real-time content platform with a generous free quota.",
        bestFor: [
            "Content-Heavy Sites",
            "Real-time Editing",
            "Flexible Schemas"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://sanity.io",
        documentation: "https://sanity.io/docs",
        overview: "Sanity is a platform for structured content with real-time collaboration and flexible APIs.",
        freeTierDetails: "Free tier includes 10k documents, 5GB assets, 3 users, unlimited API requests.",
        hardLimits: [
            "10K documents",
            "5GB assets",
            "3 users"
        ],
        strengths: [
            "Real-time collaboration",
            "Flexible schema",
            "Great DX",
            "GraphQL support"
        ],
        limitations: [
            "Document limits",
            "User limits",
            "Asset storage"
        ]
    },
    {
        id: "contentful",
        name: "Contentful",
        category: "CMS",
        subcategory: "Headless",
        description: "Enterprise-grade CMS with a solid free tier for smaller projects.",
        bestFor: [
            "Enterprise Apps",
            "Multi-channel",
            "Localization"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://contentful.com",
        documentation: "https://contentful.com/developers/docs",
        overview: "Contentful is an API-first content platform for digital products at any scale.",
        freeTierDetails: "Community tier includes 25K records, 2 locales, 5 users.",
        hardLimits: [
            "25K records",
            "2 locales",
            "5 users",
            "48 content types"
        ],
        strengths: [
            "Mature platform",
            "Good tooling",
            "Multi-channel",
            "Localization"
        ],
        limitations: [
            "Record limits",
            "Locale limits",
            "Content type limits"
        ]
    },
    {
        id: "prismic",
        name: "Prismic",
        category: "CMS",
        subcategory: "Visual Builder",
        description: "Headless CMS focused on building pages using visual 'Slices'.",
        bestFor: [
            "Marketing Pages",
            "Visual Content",
            "Page Builder"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://prismic.io",
        documentation: "https://prismic.io/docs",
        overview: "Prismic is a headless website builder with a visual editor for creating custom page layouts.",
        freeTierDetails: "Free tier includes unlimited documents, 1 user, 1 locale.",
        hardLimits: [
            "1 user",
            "1 locale",
            "Community support only"
        ],
        strengths: [
            "Visual editing",
            "Slice machine",
            "Good DX",
            "Unlimited docs"
        ],
        limitations: [
            "Single user",
            "Single locale",
            "No support"
        ]
    },
    {
        id: "hygraph",
        name: "Hygraph",
        category: "CMS",
        subcategory: "Headless",
        description: "GraphQL-native Federated Content Platform.",
        bestFor: [
            "GraphQL Projects",
            "Content Federation",
            "Multi-source"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://hygraph.com",
        documentation: "https://hygraph.com/docs",
        overview: "Hygraph (formerly GraphCMS) is a federated content platform built on GraphQL.",
        freeTierDetails: "Community tier includes 1M API operations, 500GB assets, 3 users.",
        hardLimits: [
            "1M API ops/month",
            "500GB assets",
            "3 users"
        ],
        strengths: [
            "GraphQL-first",
            "Content federation",
            "Good performance",
            "Flexible"
        ],
        limitations: [
            "API operation limits",
            "User limits"
        ]
    },
    {
        id: "decap-cms",
        name: "Decap CMS",
        category: "CMS",
        subcategory: "Git-based",
        description: "Open-source, React-based CMS that lives in your Git repo (formerly Netlify CMS).",
        bestFor: [
            "Static Sites",
            "Git Workflow",
            "Self-hosted"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://decapcms.org",
        documentation: "https://decapcms.org/docs",
        overview: "Decap CMS is an open-source Git-based CMS for static site generators.",
        freeTierDetails: "Completely free and open source, self-hosted.",
        hardLimits: [
            "None (self-hosted)"
        ],
        strengths: [
            "Git-based",
            "Open source",
            "No cost",
            "Simple setup"
        ],
        limitations: [
            "Limited features",
            "Requires Git",
            "Self-hosted only"
        ]
    },
    {
        id: "tinacms",
        name: "TinaCMS",
        category: "CMS",
        subcategory: "Git-based",
        description: "Real-time visual editing for Markdown/MDX sites.",
        bestFor: [
            "Next.js",
            "Markdown",
            "Visual Editing"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://tina.io",
        documentation: "https://tina.io/docs",
        overview: "TinaCMS is a Git-backed headless CMS with visual editing for Next.js and markdown sites.",
        freeTierDetails: "Free tier includes 2 users, unlimited documents, Git-based storage.",
        hardLimits: [
            "2 users",
            "Git storage only"
        ],
        strengths: [
            "Real-time editing",
            "Git-backed",
            "Next.js integration",
            "MDX support"
        ],
        limitations: [
            "User limits",
            "Git workflow required"
        ]
    },
    {
        id: "cosmic",
        name: "Cosmic",
        category: "CMS",
        subcategory: "Headless",
        description: "Simple headless CMS API for developers.",
        bestFor: [
            "Simple Projects",
            "API-first",
            "Fast Setup"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://cosmicjs.com",
        documentation: "https://cosmicjs.com/docs",
        overview: "Cosmic is a headless CMS with a simple API for building digital products.",
        freeTierDetails: "Free tier includes unlimited API calls, 5GB bandwidth, 1 user.",
        hardLimits: [
            "1 user",
            "5GB bandwidth/month"
        ],
        strengths: [
            "Simple API",
            "Fast setup",
            "Good docs",
            "Unlimited calls"
        ],
        limitations: [
            "Single user",
            "Bandwidth limits"
        ]
    },
    // Datastorage (10 tools)
    {
        id: "supabase",
        name: "Supabase",
        category: "Datastorage",
        subcategory: "BaaS - SQL",
        description: "Postgres database, Auth, Edge Functions, and Realtime subscriptions.",
        bestFor: [
            "Full-stack Apps",
            "Real-time",
            "Auth + DB"
        ],
        noCreditCard: true,
        active24x7: false,
        website: "https://supabase.com",
        documentation: "https://supabase.com/docs",
        overview: "Supabase is an open source Firebase alternative with PostgreSQL database and instant APIs.",
        freeTierDetails: "Free tier includes 500MB database, 1GB file storage, 2GB bandwidth, pauses after 1 week inactivity.",
        hardLimits: [
            "500MB database",
            "1GB storage",
            "2GB bandwidth/month",
            "Pauses after 7 days"
        ],
        strengths: [
            "PostgreSQL",
            "Built-in auth",
            "Real-time",
            "Row Level Security"
        ],
        limitations: [
            "Pauses after inactivity",
            "Storage limits",
            "Connection limits"
        ]
    },
    {
        id: "mongodb-atlas",
        name: "MongoDB Atlas",
        category: "Datastorage",
        subcategory: "NoSQL DB",
        description: "The dominant document database service.",
        bestFor: [
            "NoSQL",
            "Document DB",
            "Flexible Schema"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://mongodb.com/cloud/atlas",
        documentation: "https://docs.atlas.mongodb.com",
        overview: "MongoDB Atlas is a fully-managed cloud database service for MongoDB.",
        freeTierDetails: "M0 cluster with 512MB storage, shared resources, 100 connections.",
        hardLimits: [
            "512MB storage",
            "Shared CPU/RAM",
            "100 connections"
        ],
        strengths: [
            "True NoSQL",
            "Flexible schema",
            "Good tooling",
            "Atlas Search"
        ],
        limitations: [
            "Storage limits",
            "Shared resources",
            "Connection limits"
        ]
    },
    {
        id: "neon",
        name: "Neon",
        category: "Datastorage",
        subcategory: "SQL DB",
        description: "Serverless PostgreSQL with features like database branching.",
        bestFor: [
            "PostgreSQL",
            "Serverless",
            "Modern Workflows"
        ],
        noCreditCard: true,
        active24x7: false,
        website: "https://neon.tech",
        documentation: "https://neon.tech/docs",
        overview: "Neon is serverless Postgres with autoscaling, branching, and bottomless storage.",
        freeTierDetails: "Free tier includes 0.5GB storage, compute scales to zero when inactive.",
        hardLimits: [
            "0.5GB storage",
            "Scales to zero",
            "Shared compute"
        ],
        strengths: [
            "Database branching",
            "Autoscaling",
            "Instant provisioning",
            "Modern DX"
        ],
        limitations: [
            "Storage limits",
            "Cold starts",
            "Compute limits"
        ]
    },
    {
        id: "cloudinary",
        name: "Cloudinary",
        category: "Datastorage",
        subcategory: "File Storage",
        description: "Image and video management API with powerful transformations.",
        bestFor: [
            "Images",
            "Videos",
            "Media Management"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://cloudinary.com",
        documentation: "https://cloudinary.com/documentation",
        overview: "Cloudinary is a cloud service for managing images and videos with on-the-fly transformations.",
        freeTierDetails: "Free tier includes 25GB storage, 25GB bandwidth, 25K transformations/month.",
        hardLimits: [
            "25GB storage",
            "25GB bandwidth/month",
            "25K transformations/month"
        ],
        strengths: [
            "Image optimization",
            "Video support",
            "Transformations",
            "CDN included"
        ],
        limitations: [
            "Transformation limits",
            "Bandwidth limits"
        ]
    },
    {
        id: "uploadthing",
        name: "Uploadthing",
        category: "Datastorage",
        subcategory: "File Storage",
        description: "The easiest way to add file uploads to a Next.js/React app.",
        bestFor: [
            "File Uploads",
            "Next.js",
            "React"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://uploadthing.com",
        documentation: "https://docs.uploadthing.com",
        overview: "UploadThing is a file upload service built specifically for Next.js and React applications.",
        freeTierDetails: "Free tier includes 2GB storage, 2GB bandwidth per month.",
        hardLimits: [
            "2GB storage",
            "2GB bandwidth/month"
        ],
        strengths: [
            "Next.js optimized",
            "Simple API",
            "Type-safe",
            "Good DX"
        ],
        limitations: [
            "Low limits",
            "Bandwidth restrictions"
        ]
    },
    {
        id: "firebase",
        name: "Firebase",
        category: "Datastorage",
        subcategory: "BaaS - NoSQL",
        description: "Firestore database and Cloud Storage buckets.",
        bestFor: [
            "Real-time Apps",
            "Mobile Apps",
            "Google Ecosystem"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://firebase.google.com",
        documentation: "https://firebase.google.com/docs",
        overview: "Firebase is Google's app development platform with real-time database and cloud services.",
        freeTierDetails: "Spark plan includes 1GB storage, 10GB/month transfer, 50K reads, 20K writes per day.",
        hardLimits: [
            "1GB storage",
            "10GB transfer/month",
            "50K reads/day",
            "20K writes/day"
        ],
        strengths: [
            "Real-time sync",
            "Google integration",
            "Mobile SDKs",
            "Auth included"
        ],
        limitations: [
            "Daily operation limits",
            "NoSQL only",
            "Vendor lock-in"
        ]
    },
    {
        id: "tidb-cloud",
        name: "TiDB Cloud",
        category: "Datastorage",
        subcategory: "SQL DB",
        description: "Serverless, MySQL-compatible distributed database.",
        bestFor: [
            "MySQL",
            "Distributed DB",
            "HTAP"
        ],
        noCreditCard: false,
        active24x7: true,
        website: "https://tidbcloud.com",
        documentation: "https://docs.pingcap.com/tidbcloud",
        overview: "TiDB Cloud is a fully managed MySQL-compatible distributed SQL database.",
        freeTierDetails: "Free developer tier with 5GB storage, 50M Request Units per month.",
        hardLimits: [
            "5GB storage",
            "50M RUs/month",
            "Shared resources"
        ],
        strengths: [
            "MySQL compatible",
            "Distributed",
            "HTAP capabilities",
            "Horizontal scaling"
        ],
        limitations: [
            "Requires credit card",
            "Request unit limits"
        ]
    },
    // Auth (10 tools)
    {
        id: "firebase-auth",
        name: "Firebase Auth",
        category: "Auth",
        subcategory: "Auth Provider",
        description: "Reliable, widely used authentication by Google.",
        bestFor: [
            "Mobile Apps",
            "Web Apps",
            "Google Integration"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://firebase.google.com/products/auth",
        documentation: "https://firebase.google.com/docs/auth",
        overview: "Firebase Authentication provides backend services for easy user authentication.",
        freeTierDetails: "Free tier includes unlimited users, phone auth (10K verifications/month).",
        hardLimits: [
            "10K phone verifications/month"
        ],
        strengths: [
            "Reliable",
            "Google integration",
            "Mobile SDKs",
            "Multiple providers"
        ],
        limitations: [
            "Phone auth limits",
            "Google ecosystem",
            "UI not included"
        ]
    },
    {
        id: "auth0",
        name: "Auth0",
        category: "Auth",
        subcategory: "Identity Platform",
        description: "Industry standard for highly secure, complex auth flows.",
        bestFor: [
            "Enterprise",
            "Complex Auth",
            "Security"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://auth0.com",
        documentation: "https://auth0.com/docs",
        overview: "Auth0 is an enterprise-grade authentication and authorization platform.",
        freeTierDetails: "Free tier includes 7,500 MAUs, social/email auth, unlimited logins.",
        hardLimits: [
            "7,500 MAU",
            "Standard features"
        ],
        strengths: [
            "Enterprise features",
            "Very secure",
            "Extensive integrations",
            "Mature platform"
        ],
        limitations: [
            "MAU limits",
            "Complex pricing",
            "Steeper learning curve"
        ]
    },
    {
        id: "fusionauth",
        name: "FusionAuth",
        category: "Auth",
        subcategory: "Identity Platform",
        description: "Customer identity and access management, free for hobbyists.",
        bestFor: [
            "CIAM",
            "Enterprise Features",
            "Self-hosted"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://fusionauth.io",
        documentation: "https://fusionauth.io/docs",
        overview: "FusionAuth is a complete identity and access management solution for any application.",
        freeTierDetails: "Community edition is free forever, unlimited users when self-hosted.",
        hardLimits: [
            "Must self-host for free tier"
        ],
        strengths: [
            "No user limits",
            "Enterprise features",
            "Self-hosted",
            "Full CIAM"
        ],
        limitations: [
            "Self-hosting required",
            "Complex setup"
        ]
    },
    // APIs (10 tools)
    {
        id: "resend",
        name: "Resend",
        category: "APIs",
        subcategory: "Email",
        description: "Modern email API with great developer experience for React.",
        bestFor: [
            "Transactional Email",
            "React Email",
            "Modern Apps"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://resend.com",
        documentation: "https://resend.com/docs",
        overview: "Resend is an email API built for developers with React email template support.",
        freeTierDetails: "Free tier includes 3,000 emails per month, 100 emails per day.",
        hardLimits: [
            "3K emails/month",
            "100 emails/day",
            "1 custom domain"
        ],
        strengths: [
            "React email templates",
            "Modern DX",
            "Simple API",
            "Good deliverability"
        ],
        limitations: [
            "Email volume limits",
            "Single domain"
        ]
    },
    {
        id: "stripe",
        name: "Stripe",
        category: "APIs",
        subcategory: "Payments",
        description: "The standard for online payments (Free to set up, pays per transaction).",
        bestFor: [
            "Online Payments",
            "Subscriptions",
            "E-commerce"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://stripe.com",
        documentation: "https://stripe.com/docs",
        overview: "Stripe is a payment processing platform for internet businesses with comprehensive APIs.",
        freeTierDetails: "Free to integrate, pay 2.9% + 30¢ per successful transaction.",
        hardLimits: [
            "Transaction-based pricing"
        ],
        strengths: [
            "Industry standard",
            "Great docs",
            "Many features",
            "Global support"
        ],
        limitations: [
            "Transaction fees",
            "Complex for simple use cases"
        ]
    },
    {
        id: "mapbox",
        name: "Mapbox",
        category: "APIs",
        subcategory: "Geo/Maps",
        description: "Highly customizable maps and location APIs with a generous free tier.",
        bestFor: [
            "Custom Maps",
            "Location Services",
            "Geospatial"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://mapbox.com",
        documentation: "https://docs.mapbox.com",
        overview: "Mapbox provides building blocks to add location features like maps and search to apps.",
        freeTierDetails: "Free tier includes 50K map loads, 100K geocodes, 50K directions per month.",
        hardLimits: [
            "50K map loads/month",
            "100K geocodes/month",
            "50K directions/month"
        ],
        strengths: [
            "Highly customizable",
            "Great performance",
            "Good docs",
            "Multiple SDKs"
        ],
        limitations: [
            "Usage limits",
            "Credit card for higher tiers"
        ]
    },
    {
        id: "formspree",
        name: "Formspree",
        category: "APIs",
        subcategory: "Forms",
        description: "Simple backend for HTML forms without writing server code.",
        bestFor: [
            "Static Sites",
            "Contact Forms",
            "Quick Setup"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://formspree.io",
        documentation: "https://help.formspree.io",
        overview: "Formspree is a form backend that works with static sites without backend code.",
        freeTierDetails: "Free tier includes 50 submissions per month per form.",
        hardLimits: [
            "50 submissions/month per form"
        ],
        strengths: [
            "Easy setup",
            "No backend needed",
            "Spam protection",
            "Email notifications"
        ],
        limitations: [
            "Low submission limits",
            "Basic features"
        ]
    },
    {
        id: "emailjs",
        name: "EmailJS",
        category: "APIs",
        subcategory: "Email",
        description: "Send emails directly from client-side JavaScript (no backend needed).",
        bestFor: [
            "Client-side Email",
            "Static Sites",
            "Quick Setup"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://emailjs.com",
        documentation: "https://emailjs.com/docs",
        overview: "EmailJS lets you send emails from JavaScript without backend code.",
        freeTierDetails: "Free tier includes 200 emails per month.",
        hardLimits: [
            "200 emails/month",
            "Limited templates"
        ],
        strengths: [
            "Client-side",
            "No backend",
            "Quick setup",
            "Template support"
        ],
        limitations: [
            "Low email limits",
            "Client-side security concerns"
        ]
    },
    {
        id: "sendgrid",
        name: "Twilio SendGrid",
        category: "APIs",
        subcategory: "Email",
        description: "The legacy giant of transactional email delivery.",
        bestFor: [
            "High Volume",
            "Enterprise",
            "Deliverability"
        ],
        noCreditCard: false,
        active24x7: true,
        website: "https://sendgrid.com",
        documentation: "https://docs.sendgrid.com",
        overview: "SendGrid is a cloud-based email delivery platform for transactional and marketing emails.",
        freeTierDetails: "Free tier includes 100 emails per day forever.",
        hardLimits: [
            "100 emails/day",
            "1 month data retention"
        ],
        strengths: [
            "High deliverability",
            "Mature platform",
            "Good analytics",
            "Reliable"
        ],
        limitations: [
            "Requires credit card",
            "Daily limits",
            "UI complexity"
        ]
    },
    {
        id: "ipinfo",
        name: "IPinfo",
        category: "APIs",
        subcategory: "Geo/Maps",
        description: "IP address geolocation and ASN data API.",
        bestFor: [
            "IP Geolocation",
            "IP Intelligence",
            "Analytics"
        ],
        noCreditCard: true,
        active24x7: true,
        website: "https://ipinfo.io",
        documentation: "https://ipinfo.io/developers",
        overview: "IPinfo provides IP address data including geolocation, ASN, and company information.",
        freeTierDetails: "Free tier includes 50K requests per month.",
        hardLimits: [
            "50K requests/month"
        ],
        strengths: [
            "Accurate data",
            "Fast API",
            "Good coverage",
            "Simple to use"
        ],
        limitations: [
            "Request limits",
            "Basic data on free tier"
        ]
    }
];
const categories = Array.from(new Set(tools.map((t)=>t.category)));
const subcategories = (category)=>Array.from(new Set(tools.filter((t)=>t.category === category).map((t)=>t.subcategory)));
}),
"[project]/ZCD/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/ZCD/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/ZCD/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/ZCD/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ZCD/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/ZCD/app/tools/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ZCD/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/lib/tools-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ZCD/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/ZCD/node_modules/lucide-react/dist/esm/icons/external-link.js [app-rsc] (ecmascript) <export default as ExternalLink>");
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tools"].map((tool)=>({
            id: tool.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const tool = __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tools"].find((t)=>t.id === id);
    if (!tool) {
        return {
            title: "Tool Not Found"
        };
    }
    return {
        title: `${tool.name} | Zero-Cost Directory`,
        description: tool.description
    };
}
async function ToolPage({ params }) {
    const { id } = await params;
    const tool = __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tools"].find((t)=>t.id === id);
    if (!tool) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategoryColor"])(tool.category);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-background py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block px-6 py-5 rounded-lg",
                                style: {
                                    background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium uppercase tracking-wide text-white/80",
                                            children: tool.category
                                        }, void 0, false, {
                                            fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-semibold text-white",
                                            children: tool.name
                                        }, void 0, false, {
                                            fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm",
                                            children: tool.subcategory
                                        }, void 0, false, {
                                            fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            (tool.noCreditCard || tool.active24x7) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 text-sm text-muted-foreground",
                                children: [
                                    tool.noCreditCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "No Credit Card Required"
                                    }, void 0, false, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 39
                                    }, this),
                                    tool.noCreditCard && tool.active24x7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 58
                                    }, this),
                                    tool.active24x7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Active 24/7"
                                    }, void 0, false, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-4 border-t border-border pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: "Overview"
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-pretty leading-relaxed text-muted-foreground",
                                children: tool.overview
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-4 border-t border-border pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: "Permanent Free Tier"
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-pretty leading-relaxed text-muted-foreground",
                                children: tool.freeTierDetails
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-4 border-t border-border pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: "Hard Limits"
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: tool.hardLimits.map((limit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-relaxed",
                                                children: limit
                                            }, void 0, false, {
                                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-4 border-t border-border pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: "Strengths"
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: tool.strengths.map((strength, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-relaxed",
                                                children: strength
                                            }, void 0, false, {
                                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-4 border-t border-border pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: "Limitations"
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: tool.limitations.map((limitation, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-relaxed",
                                                children: limitation
                                            }, void 0, false, {
                                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-4 border-t border-border pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: "Best For"
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: tool.bestFor.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-4 border-t border-border pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: tool.website,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                            "Visit Website",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: tool.documentation,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                            "Documentation",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-2 border-dashed border-muted bg-muted/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "flex h-32 items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Reserved Ad Space"
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ZCD$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#tools",
                                children: "← Back to Tools"
                            }, void 0, false, {
                                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ZCD/app/tools/[id]/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/ZCD/app/tools/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ZCD/app/tools/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9d695120._.js.map