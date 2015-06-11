# firebase-to-s3
Backup a firebase root to an S3 bucket

# Setting up
- Clone / fork this repo where you want it.
- Initialize a new heroku app
- Add these config vars to your heroku app:

`AWS_ACCESS_KEY_ID`
`AWS_SECRET_ACCESS_KEY`
`S3_BUCKET`
`FIREBASE`
`FIREBASE_ROOT`
`FIREBASE_SECRET`

- Deploy to Heroku
- Add the scheduler addon with `heroku addons:create scheduler:standard`
- Open the addon with `heroku addons:open scheduler`
- Add `backup` as a task & save
- **You're done!**
