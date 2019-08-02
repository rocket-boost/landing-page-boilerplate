# RocketBoost – Landing Page Boilerplate
Quick scaffolding of S3 hosted RocketBoost static pages.

## Deployment
To deploy changes to s3 run:
```sh
$ npm run build
$ aws s3 sync ./build s3://<bucket>/<path> [--profile <profile>]
``` 

## Development
To start local development server run:
```sh
$ npm run dev
``` 
