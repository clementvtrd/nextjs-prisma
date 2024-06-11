[![.github/workflows/ci-cd.yaml](https://github.com/clementvtrd/nextjs-prisma/actions/workflows/ci-cd.yaml/badge.svg)](https://github.com/clementvtrd/nextjs-prisma/actions/workflows/ci-cd.yaml)

# NextJS Fullstack

## Installation

> This project was built around Docker version 25.0 and Docker Compose plugin version 2.27.

### Taskfile

A `Taskfile.yml`is present at the root of the repository which containers the common commands to bootstrap the project. Subfiles stands in the directory `tasks` and are imported at the beginning of the main file.

You can install the `task` CLI through their website at [taskfile.dev/installation](https://taskfile.dev/installation/).

### Boostrap

To bootstrap the project, first run the `init` command:

```sh
task init
```

This will copy the default .env, build images and install NodeJS dependencies.

You needs to update the [.env](./app/.env) with the following information:

- `AUTH_SECRET` can be generate with this command:

    ```sh
    docker compose run --rm --no-deps app npx auth secret
    ```

- `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` are available in [Google Cloud Platform](https://console.cloud.google.com) under APIs & Services > Credentials. As of writing those lines, only two possibility remains :

    1. use the `KNP Hot Tools (localhost)` for development purpose only ;
    2. use the `KNP Hot Tools (prod)` for production server under knpnet.net domain ;

- `AUTH_GOOGLE_RESTRICT_DOMAIN` might be blank during development, so you can loggin with any Google account or with `@knplabs.com` to restrict Google account from KNP Labs.

### Starting containers

Simply run:

```sh
task start
```

## Adminer

You can start Adminer with the following command:

```sh
docker compose --profile adminer up -d adminer
```

## Help

You can si all available shortcuts defined with Taskfile with this command[^1]:

```sh
task --list
```

[^1]: Only shortcuts with a description (`desc`) are displayed
