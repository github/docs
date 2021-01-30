---
title: Migrating from CircleCI to GitHub Actions
intro: 'GitHub Actions and CircleCI share several similarities in configuration, which makes migration to GitHub Actions relatively straightforward.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-circleci-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'руководство'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introduction

CircleCI and {% data variables.product.prodname_actions %} both allow you to create workflows that automatically build, test, publish, release, and deploy code. CircleCI and {% data variables.product.prodname_actions %} share some similarities in workflow configuration:

- Workflow configuration files are written in YAML and stored in the repository.
- Workflows include one or more jobs.
- Jobs include one or more steps or individual commands.
- Steps or tasks can be reused and shared with the community.

For more information, see "[Core concepts for {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)."

### Key differences

When migrating from CircleCI, consider the following differences:

- CircleCI’s automatic test parallelism automatically groups tests according to user-specified rules or historical timing information. This functionality is not built into {% data variables.product.prodname_actions %}.
- Actions that execute in Docker containers are sensitive to permissions problems since containers have a different mapping of users. You can avoid many of these problems by not using the `USER` instruction in your *Dockerfile*. For more information about the Docker filesystem on {% data variables.product.product_name %}-hosted runners, see "[Virtual environments for {% data variables.product.product_name %}-hosted runners](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)."

### Migrating workflows and jobs

CircleCI defines `workflows` in the *config.yml* file, which allows you to configure more than one workflow. {% data variables.product.product_name %} requires one workflow file per workflow, and as a consequence, does not require you to declare `workflows`. You'll need to create a new workflow file for each workflow configured in *config.yml*.

Both CircleCI and {% data variables.product.prodname_actions %} configure `jobs` in the configuration file using similar syntax. If you configure any dependencies between jobs using `requires` in your CircleCI workflow, you can use the equivalent {% data variables.product.prodname_actions %} `needs` syntax. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)."

### Migrating orbs to actions

Both CircleCI and {% data variables.product.prodname_actions %} provide a mechanism to reuse and share tasks in a workflow. CircleCI uses a concept called orbs, written in YAML, to provide tasks that people can reuse in a workflow. {% data variables.product.prodname_actions %} has powerful and flexible reusable components called actions, which you build with either JavaScript files or Docker images. You can create actions by writing custom code that interacts with your repository in any way you'd like, including integrating with {% data variables.product.product_name %}'s APIs and any publicly available third-party API. For example, an action can publish npm modules, send SMS alerts when urgent issues are created, or deploy production-ready code. For more information, see "[Creating actions](/actions/creating-actions)."

CircleCI can reuse pieces of workflows with YAML anchors and aliases. {% data variables.product.prodname_actions %} supports the most common need for reusability using build matrixes. For more information about build matrixes, see "[Managing complex workflows](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix)."

### Using Docker images


Both CircleCI and {% data variables.product.prodname_actions %} support running steps inside of a Docker image.

CircleCI provides a set of pre-built images with common dependencies. These images have the `USER` set to `circleci`, which causes permissions to conflict with {% data variables.product.prodname_actions %}.

We recommend that you move away from CircleCI's pre-built images when you migrate to {% data variables.product.prodname_actions %}. In many cases, you can use actions to install the additional dependencies you need.

For more information about the Docker filesystem, see "[Virtual environments for {% data variables.product.product_name %}-hosted runners](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)."

For more information about the tools and packages available on {% data variables.product.prodname_dotcom %}-hosted virtual environments, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Using variables and secrets

CircleCI and {% data variables.product.prodname_actions %} support setting environment variables in the configuration file and creating secrets using the CircleCI or {% data variables.product.product_name %} UI.

For more information, see "[Using environment variables](/actions/configuring-and-managing-workflows/using-environment-variables)" and "[Creating and using encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."

### Caching

CircleCI and {% data variables.product.prodname_actions %} provide a method to manually cache files in the configuration file.

Below is an example of the syntax for each system.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- name: Cache node modules
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
    restore-keys: v1-npm-deps-
```
{% endraw %}
</td>
</tr>
</table>

{% data variables.product.prodname_actions %} caching is only applicable to {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>."

{% data variables.product.prodname_actions %} does not have an equivalent of CircleCI’s Docker Layer Caching (or DLC).

### Persisting data between jobs

Both CircleCI and {% data variables.product.prodname_actions %} provide mechanisms to persist data between jobs.

Below is an example in CircleCI and {% data variables.product.prodname_actions %} configuration syntax.

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- name: Upload math result for job 1
  uses: actions/upload-artifact@v2
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: actions/download-artifact@v2
  with:
    name: homework
```
{% endraw %}
</td>
</tr>
</table>

For more information, see "[Persisting workflow data using artifacts](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)."

### Using databases and service containers

Both systems enable you to include additional containers for databases, caching, or other dependencies.

In CircleCI, the first image listed in the *config.yaml* is the primary image used to run commands. {% data variables.product.prodname_actions %} uses explicit sections: use `container` for the primary container, and list additional containers in `services`.

Below is an example in CircleCI and {% data variables.product.prodname_actions %} configuration syntax.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26:
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake


workflows:
  version: 2
  build:
    jobs:
      - ruby-26
...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
name: Containers

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    container: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
        - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
    # This Docker file changes sets USER to circleci instead of using the default user, so we need to update file permissions for this image to work on GH Actions.
    # See https://docs.github.com/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem
    - name: Setup file system permissions
      run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
    - uses: actions/checkout@v2
    - name: Install dependencies
      run: bundle install --path vendor/bundle
    - name: Setup environment configuration
      run: cp .sample.env .env
    - name: Setup database
      run: bundle exec rake db:setup
    - name: Run tests
      run: bundle exec rake
```
{% endraw %}
</td>
</tr>
</table>

For more information, see "[About service containers](/actions/configuring-and-managing-workflows/about-service-containers)."

### Complete Example

Below is a real-world example. The left shows the actual CircleCI *config.yml* for the [thoughtbot/administrator](https://github.com/thoughtbot/administrate) repository. The right shows the {% data variables.product.prodname_actions %} equivalent.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands:
  shared_steps:
    steps:
      - checkout

      # Restore Cached Dependencies
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Cache Dependencies
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake

default_job: &default_job
  working_directory: ~/administrate
  steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs:
  ruby-25:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.5.0-node-browsers
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""

  ruby-26:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""


workflows:
  version: 2
  multiple-rubies:
    jobs:
      - ruby-26
      - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
name: Containers

on: [push]

jobs:
  build:

    strategy:
      matrix:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
        - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
    - uses: actions/checkout@v2
    - name: Setup Ruby
      uses: eregon/use-ruby-action@master
      with:
        ruby-version: ${{ matrix.ruby }}
    - name: Cache dependencies
      uses: actions/cache@v2
      with:
        path: vendor/bundle
        key: administrate-${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}
    - name: Install postgres headers
      run: sudo apt-get install libpq-dev
    - name: Install dependencies
      run: bundle install --path vendor/bundle
    - name: Setup environment configuration
      run: cp .sample.env .env
    - name: Setup database
      run: bundle exec rake db:setup
    - name: Run tests
      run: bundle exec rake
    - name: Install appraisal
      run: bundle exec appraisal install
    - name: Run appraisal
      run: bundle exec appraisal rake
```
{% endraw %}
</td>
</tr>
</table>
