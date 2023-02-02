# See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node/.devcontainer/base.Dockerfile
# [Choice] Node.js version
ARG VARIANT="18-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# runs-on: ubuntu-latest
    steps:
      -
        name: Checkout
        uses: actions/checkout@v2
      -
        name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
      -
        name: List networks
        run: docker network ls
      -
        name: Build
        uses: ./
        with:
          context: ./test
          tags: name/app:latest
          network: host
      -
        name: Dump context
        if: always()
        uses: crazy-max/ghaction-dump-context@v1

  multi:
    runs-on: ubuntu-latest
    strategy:
  1  
README.md
@@ -204,6 +204,7 @@ Following inputs can be used as `step.with` keys
| `file`              | String   | Path to the Dockerfile. (default `{context}/Dockerfile`) |
| `labels`            | List     | List of metadata for an image |
| `load`              | Bool     | [Load](https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#load) is a shorthand for `--output=type=docker` (default `false`) |
| `network`           | String   | Set the networking mode for the `RUN` instructions during build |
| `no-cache`          | Bool     | Do not use cache when building the image (default `false`) |
| `outputs`           | List     | List of [output destinations](https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#output) (format: `type=local,dest=path`) |
| `platforms`         | List/CSV | List of [target platforms](https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#platform) for build |
  2  
__tests__/context.test.ts
@@ -346,6 +346,7 @@ ccc`],
        ['secret-files', `MY_SECRET=${path.join(__dirname, 'fixtures', 'secret.txt').split(path.sep).join(path.posix.sep)}`],
        ['file', './test/Dockerfile'],
        ['builder', 'builder-git-context-2'],
        ['network', 'host'],
        ['push', 'true']
      ]),
      [
@@ -355,6 +356,7 @@ ccc`],
        '--secret', 'id=MY_SECRET,src=/tmp/.docker-build-push-jest/.tmpname-jest',
        '--file', './test/Dockerfile',
        '--builder', 'builder-git-context-2',
        '--network', 'host',
        '--push',
        'https://github.com/docker/build-push-action.git#heads/master'
      ]
  3  
#action.js
@@ -35,6 +35,9 @@ inputs:
    description: "Load is a shorthand for --output=type=docker
