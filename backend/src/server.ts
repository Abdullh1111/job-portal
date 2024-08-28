import app from "./app";
import config from "./config";
import dbMain from "./utils/db.connection";

const port = config.port || 3000;
app.listen(port, () => {
  // db connecetion
  dbMain();

  console.log(`Example app listening on port ${port}`);
});
