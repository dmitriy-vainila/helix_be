// const express = require("express");
// const cors = require("cors");

// require("dotenv").config();

// const app = express();
// app.use(cors());

/////////////////////

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.user.create({ data: {} });

async function main() {
   const user = await prisma.user.deleteMany();
   console.log(user);
}

main()
   .catch((e) => {
      console.log(e.message);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });

/////////////////////

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//    console.log(`server is running on port ${PORT}`);
// });
