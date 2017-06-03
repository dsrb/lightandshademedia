# lightandshademedia
Website for media company 

## System Preparation

To use this starter project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.

## Usage

**development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc etc.

```shell
$ gulp
```

**jekyll**

As this is just a Jekyll project, you can use any of the commands listed in their [docs](http://jekyllrb.com/docs/usage/)

## Deploy to Siteleaf

You can easily deploy this site to Siteleaf by pushing any changes directly to Github.

Any updates to master will automatically `sync` in the Siteleaf admin. 

There are two options in the Siteleaf admin for making changes.

1. `Preview Changes`
2. `Publish Changes`

Meta changes for the site setup are managed through the `config.yml` file.