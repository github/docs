---
title: Creating Redis service containers
shortTitle: Create Redis service containers
intro: You can use service containers to create a Redis client in your workflow. This guide shows examples of creating a Redis service for jobs that run in containers or directly on the runner machine.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-redis-service-containers
  - /actions/configuring-and-managing-workflows/creating-redis-service-containers
  - /actions/guides/creating-redis-service-containers
  - /actions/using-containerized-services/creating-redis-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Containers
  - Docker
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you workflow examples that configure a service container using the Docker Hub `redis` image. The workflow runs a script to create a Redis client and populate the client with data. To test that the workflow creates and populates the Redis client, the script prints the client's data to the console.

{% data reusables.actions.docker-container-os-support %}

## Prerequisites

{% data reusables.actions.service-container-prereqs %}

You may also find it helpful to have a basic understanding of YAML, the syntax for {% data variables.product.prodname_actions %}, and Redis. For more information, see:

* "[AUTOTITLE](/actions/learn-github-actions)"
* "[Getting Started with Redis](https://redislabs.com/get-started-with-redis/)" in the Redis documentation

## Running jobs in containers

{% data reusables.actions.container-jobs-intro %}

{% data reusables.actions.copy-workflow-file %}

```yaml copy
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:20-bookworm-slim

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: redis
          # The default Redis port
          REDIS_PORT: 6379
```

### Configuring the container job

{% data reusables.actions.service-container-host %}

{% data reusables.actions.redis-label-description %}

```yaml copy
jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:20-bookworm-slim

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

### Configuring the steps for the container job

{% data reusables.actions.service-template-steps %}

```yaml copy
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: {% data reusables.actions.action-checkout %}

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: redis
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.actions.redis-environment-variables %}

The hostname of the Redis service is the label you configured in your workflow, in this case, `redis`. Because Docker containers on the same user-defined bridge network open all ports by default, you'll be able to access the service container on the default Redis port 6379.

## Running jobs directly on the runner machine

When you run a job directly on the runner machine, you'll need to map the ports on the service container to ports on the Docker host. You can access service containers from the Docker host using `localhost` and the Docker host port number.

{% data reusables.actions.copy-workflow-file %}

```yaml copy
name: Redis runner example
on: push

jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create
        # a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: localhost
          # The default Redis port
          REDIS_PORT: 6379
```

### Configuring the runner job

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.redis-label-description %}

The workflow maps port 6379 on the Redis service container to the Docker host. For more information about the `ports` keyword, see "[AUTOTITLE](/actions/using-containerized-services/about-service-containers#mapping-docker-host-and-service-container-ports)."

```yaml copy
jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379
```

### Configuring the steps for the runner job

{% data reusables.actions.service-template-steps %}

```yaml copy
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: {% data reusables.actions.action-checkout %}

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: localhost
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.actions.redis-environment-variables %}

{% data reusables.actions.service-container-localhost %}

## Testing the Redis service container

You can test your workflow using the following script, which creates a Redis client and populates the client with some placeholder data. The script then prints the values stored in the Redis client to the terminal. Your script can use any language you'd like, but this example uses Node.js and the `redis` npm module. For more information, see the [npm redis module](https://www.npmjs.com/package/redis).

You can modify _client.js_ to include any Redis operations needed by your workflow. In this example, the script creates the Redis client instance, adds placeholder data, then retrieves the data.

{% data reusables.actions.service-container-add-script %}

```javascript copy
const redis = require("redis");

// Creates a new Redis client
// If REDIS_HOST is not set, the default host is localhost
// If REDIS_PORT is not set, the default port is 6379
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.on("error", (err) => console.log("Error", err));

(async () => {
  await redisClient.connect();

  // Sets the key "octocat" to a value of "Mona the octocat"
  const setKeyReply = await redisClient.set("octocat", "Mona the Octocat");
  console.log("Reply: " + setKeyReply);
  // Sets a key to "species", field to "octocat", and "value" to "Cat and Octopus"
  const SetFieldOctocatReply = await redisClient.hSet("species", "octocat", "Cat and Octopus");
  console.log("Reply: " + SetFieldOctocatReply);
  // Sets a key to "species", field to "dinotocat", and "value" to "Dinosaur and Octopus"
  const SetFieldDinotocatReply = await redisClient.hSet("species", "dinotocat", "Dinosaur and Octopus");
  console.log("Reply: " + SetFieldDinotocatReply);
  // Sets a key to "species", field to "robotocat", and "value" to "Cat and Robot"
  const SetFieldRobotocatReply = await redisClient.hSet("species", "robotocat", "Cat and Robot");
  console.log("Reply: " + SetFieldRobotocatReply);

  try {
    // Gets all fields in "species" key
    const replies = await redisClient.hKeys("species");
    console.log(replies.length + " replies:");
    replies.forEach((reply, i) => {
        console.log("    " + i + ": " + reply);
    });
    await redisClient.quit();
  }
  catch (err) {
    // statements to handle any exceptions
  }
})();
```

The script creates a new Redis client using the `createClient` method, which accepts a `host` and `port` parameter. The script uses the `REDIS_HOST` and `REDIS_PORT` environment variables to set the client's IP address and port. If `host` and `port` are not defined, the default host is `localhost` and the default port is 6379.

The script uses the `set` and `hset` methods to populate the database with some keys, fields, and values. To confirm that the Redis client contains the data, the script prints the contents of the database to the console log.

When you run this workflow, you should see the following output in the "Connect to Redis" step confirming you created the Redis client and added data:

```shell
Reply: OK
Reply: 1
Reply: 1
Reply: 1
3 replies:
    0: octocat
    1: dinotocat
    2: robotocat
```
