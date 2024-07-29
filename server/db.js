import mongoose from "mongoose";

// Set strictQuery option
mongoose.set("strictQuery", false);

// Your existing connection code
mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
