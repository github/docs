---
title: Migrating from CircleCI to GitHub Actions
intro: 'GitHub Actions and CircleCI share several similarities in configuration, which makes migration to GitHub Actions relatively straightforward.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-circleci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
shortTitle: Migrate from CircleCI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

CircleCI and {% data variables.product.prodname_actions %} both allow you to create workflows that automatically build, test, publish, release, and deploy code. CircleCI and {% data variables.product.prodname_actions %} share some similarities in workflow configuration:

- Workflow configuration files are written in YAML and stored in the repository.
- Workflows include one or more jobs.
- Jobs include one or more steps or individual commands.
- Steps or tasks can be reused and shared with the community.

For more information, see "[Core concepts for {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)."

## Key differences

When migrating from CircleCI, consider the following differences:

- CircleCI’s automatic test parallelism automatically groups tests according to user-specified rules or historical timing information. This functionality is not built into {% data variables.product.prodname_actions %}.
- Actions that execute in Docker containers are sensitive to permissions problems since containers have a different mapping of users. You can avoid many of these problems by not using the `USER` instruction in your *Dockerfile*. {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %}
{% else %}For more information about the Docker filesystem on {% data variables.product.product_name %}-hosted runners, see "[About {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)."
{% endif %}

## Migrating workflows and jobs

CircleCI defines `workflows` in the *config.yml* file, which allows you to configure more than one workflow. {% data variables.product.product_name %} requires one workflow file per workflow, and as a consequence, does not require you to declare `workflows`. You'll need to create a new workflow file for each workflow configured in *config.yml*.

Both CircleCI and {% data variables.product.prodname_actions %} configure `jobs` in the configuration file using similar syntax. If you configure any dependencies between jobs using `requires` in your CircleCI workflow, you can use the equivalent {% data variables.product.prodname_actions %} `needs` syntax. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)."

## Migrating orbs to actions

Both CircleCI and {% data variables.product.prodname_actions %} provide a mechanism to reuse and share tasks in a workflow. CircleCI uses a concept called orbs, written in YAML, to provide tasks that people can reuse in a workflow. {% data variables.product.prodname_actions %} has powerful and flexible reusable components called actions, which you build with either JavaScript files or Docker images. You can create actions by writing custom code that interacts with your repository in any way you'd like, including integrating with {% data variables.product.product_name %}'s APIs and any publicly available third-party API. For example, an action can publish npm modules, send SMS alerts when urgent issues are created, or deploy production-ready code. For more information, see "[Creating actions](/actions/creating-actions)."

CircleCI can reuse pieces of workflows with YAML anchors and aliases. {% data variables.product.prodname_actions %} supports the most common need for reusability using matrices. For more information about matrices, see "[Using a matrix for your jobs](/actions/using-jobs/using-a-matrix-for-your-jobs)."

## Using Docker images


Both CircleCI and {% data variables.product.prodname_actions %} support running steps inside of a Docker image.

CircleCI provides a set of pre-built images with common dependencies. These images have the `USER` set to `circleci`, which causes permissions to conflict with {% data variables.product.prodname_actions %}.

We recommend that you move away from CircleCI's pre-built images when you migrate to {% data variables.product.prodname_actions %}. In many cases, you can use actions to install the additional dependencies you need.

{% ifversion ghae %}
For more information about the Docker filesystem, see "[Docker container filesystem](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)."

{% data reusables.actions.self-hosted-runners-software %}
{% else %}
For more information about the Docker filesystem, see "[About {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)."

For more information about the tools and packages available on {% data variables.product.prodname_dotcom %}-hosted runner images, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Using variables and secrets

CircleCI and {% data variables.product.prodname_actions %} support setting environment variables in the configuration file and creating secrets using the CircleCI or {% data variables.product.product_name %} UI.

For more information, see "[Using environment variables](/actions/configuring-and-managing-workflows/using-environment-variables)" and "[Creating and using encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."

## Caching

CircleCI and {% data variables.product.prodname_actions %} provide a method to manually cache files in the configuration file.

{% ifversion actions-caching %}

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

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

{% data variables.product.prodname_actions %} does not have an equivalent of CircleCI’s Docker Layer Caching (or DLC).

## Persisting data between jobs

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

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: homework
```

</td>
</tr>
</table>

For more information, see "[Persisting workflow data using artifacts](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)."

## Using databases and service containers

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
      # See https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem

      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
</td>
</tr>
</table>

For more information, see "[About service containers](/actions/configuring-and-managing-workflows/about-service-containers)."

## Complete Example

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

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Ruby
        uses: eregon/use-ruby-action@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - name: Cache dependencies
        uses: {% data reusables.actions.action-cache %}
        with:
          path: vendor/bundle
          key: administrate-{% raw %}${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}{% endraw %}
      - name: Install postgres headers
        run: |
          sudo apt-get update
          sudo apt-get install libpq-dev
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
</td>
</tr>
</table>
name: NodeJS with Grunt

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]

    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Build
      run: |
        npm install
        grunt
- name: Check Ansible Fedora 31
  uses: roles-ansible/check-ansible-fedora-31-action@v1
  This Product Contains Sensitive Taxpayer Data  
 Request Date: 08-02-2022  Response Date: 08-02-2022  Tracking Number: 102398244811
 Account Transcript  
 FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020
 TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725
 ZACH T WOO
 3050 R
 --- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---  

 ACCOUNT BALANCE: 0.00
 ACCRUED INTEREST: 0.00 AS OF: Mar. 28, 2022  ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022
 ACCOUNT BALANCE
 PLUS ACCRUALS
 (this is not a
 payoff amount): 0.00
 ** INFORMATION FROM THE RETURN OR AS ADJUSTED **  
 EXEMPTIONS: 00
 FILING STATUS: Single
 ADJUSTED GROSS
 INCOME:  
 TAXABLE INCOME:  
 TAX PER RETURN:  
 SE TAXABLE INCOME
 TAXPAYER:  
 SE TAXABLE INCOME
 SPOUSE:  
 TOTAL SELF
 EMPLOYMENT TAX:  
 RETURN NOT PRESENT FOR THIS ACCOUNT
 TRANSACTIONS  
 CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT  No tax return filed  
 766 Tax relief credit 06-15-2020 -$1,200.00  846 Refund issued 06-05-2020 $1,200.00
 290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0
 971 Notice issued 06-15-2020 $0.00  766 Tax relief credit 01-18-2021 -$600.00  846 Refund issued 01-06-2021 $600.00
 290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0
 663 Estimated tax payment 01-05-2021 -$9,000,000.00  662 Removed estimated tax payment 01-05-2021 $9,000,000.00  740 Undelivered refund returned to IRS 01-18-2021 -$600.00
 767 Reduced or removed tax relief 01-18-2021 $600.00  credit
 971 Notice issued 03-28-2022 $0.00
 This Product Contains Sensitive Taxpayer Data
Department of the Treasury --- Internal Revenue Service (99) OMB No.  1545-0074 IRS Use Only --- Do not write or staple in this space
U.S. Individual Income Tax Return 1 Earnings Statement
        Period Beginning:2019-09-28
DR Period Ending: 2021-09-29
Pay Day: 2022-01-31
Married ZACHRY T.
5323
DALLAS
TX :NO State Income Tax :
rate units year to date Other Benefits and
112.2 674678000 75698871600 Information
        Pto Balance
        Total Work Hrs
75698871600         Important Notes
COMPANY PH Y: 650-253-0000
BASIS OF PAY: BASIC/DILUTED EPS


YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE


70842743866 70842743866

70842743866        

CHECK NO.


Zachry T.  Wood S.R.
Checks and Other Deductions Amount
Description I Items 5.41
Debit Card Purchases 1 15.19
POS Purchases 2 2,269,894.11
ACH Deductions 5 82
Service Charges and Fees 3 5.2
Other Deductions 1 2,270,001.91
Total 12




Ledger balance Date Ledger balance Date Ledger balance
107.8 8/3 2,267,621.92- 8/8 41.2
78.08 8/4 42.08 8/10 2150.19- SEC-commissions. fee's 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 00022214903782823 Corporate ACH Acctverify Roll By ADP 00022217906234115 ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355 Corporate Ach Veryifyqbw Intuit 00022222909296656 Corporate Ach Veryifyqbw Intuit 00022223912710109 Reference number 10 Service Charge Period Ending 07/29.2022 36 Returned ItemFee (nsf) 00022214903782823 36 Returned ItemFee (nsf) 00022222905832355  Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020 GROSS :1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000 NET 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 YTD 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 Fed 941 West Subsidiary 2021-09-29 24934000000 25539000000 37497000000 31211000000 30818000000 24934000000 25539000000 21890000000 19289000000 22677000000 24934000000 25539000000 21890000000 19289000000 22677000000 Q4 2020 Q4  2019 Dec. 31, 2020 Dec. 31, 2019 182527 161857 84732 71896 27573 26018 17946 18464  11052 9551 0 1697 141303 127626 41224 34231 6858000000 5394 22677000000 19289000000 22677000000 19289000000 22677000000 19289000000 IRS RECIEVED 37 26-Apr LB Charlotte, NC
