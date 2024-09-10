/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  },
};



// export default {
//   schema: "./utils/schema.tsx",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: "postgresql://aidatabase_owner:feEluBt9GO0s@ep-muddy-wind-a5z69qlc.us-east-2.aws.neon.tech/aidatabase?sslmode=require"
//   },
// };
// // NEXT_PUBLIC_DRIZZLE_DB_URL=postgresql://aidatabase_owner:feEluBt9GO0s@ep-muddy-wind-a5z69qlc.us-east-2.aws.neon.tech/aidatabase?sslmode=require