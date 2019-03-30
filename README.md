# Noun public domain icon search

Simple single page application that allows search for public domain icons in [The noun project](https://thenounproject.com)

You can try this project at https://publicnoun.borko.rocks/

<img width="1079" alt="Screenshot 2019-03-30 at 22 06 51" src="https://user-images.githubusercontent.com/3428126/55281719-f9755100-5338-11e9-82af-f443c93847aa.png">

## About The nou project and why this project exists
Noun project is awesome site where you can search and download more than 2 milion royalty–free icons. Licences are mostly Creative Commons and Public Domain. With former you need attribution to the author and with latter you can use icons without any attribution. Icon search on noun project doesn't allow
to limit results to just Public Domain icons and that's why this project exists.

## Development

### Project setup
```
yarn install
```

### Run as docker container
```
docker-compose up
```
Open http://localhost:8080

### Run development servers without docker
You will have to bypass CORS somehow.
```
yarn run serve
```
Open http://localhost:8080
