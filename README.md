# noun-public-domain-search

Simple single page application that allows search for public domain icons in [The noun project](https://thenounproject.com)

## About The nou project and why this project exists
Noun project is awesome site where you can search and download more than 2 milion royalty–free icons. Licences are mostly Creative Commons and Public Domain. With former you need attribution to the author and with latter you can use icons without any attribution. Icon search on noun project doesn't allow
to limit results to just Public Domain icons and that's why this project exists.
## Project setup
```
yarn install

cd backend
pip-sync
```

### Setup api keys
Get your api keys at <https://thenounproject.com/developers/> and edit lines:
```
export NOUN_KEY="YOUR_KEY_HERE"
export NOUN_SECRET="YOUR_SECRET_HERE"
```
in `backend/run_backend.sh` file.

## Run development servers
```
yarn run backend
yarn run serve
```

## Run as docker container

```
docker-compose up
```
