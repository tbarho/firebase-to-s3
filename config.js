var config = {
  FIREBASE_SECRET       : process.env.FIREBASE_SECRET,
  FIREBASE_ROOT         : process.env.FIREBASE_ROOT,
  AWS_ACCESS_KEY_ID     : process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY : process.env.AWS_SECRET_ACCESS_KEY,
  S3_BUCKET             : process.env.S3_BUCKET
};

// Insert your dev keys if applicable
// if(process.env.NODE_ENV === 'development') {
//   config = {};
// }


module.exports = config;