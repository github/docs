---
title: Deploy your Spark app from the command line
shortTitle: Deploy from CLI
intro: 'Learn how to deploy your {% data variables.product.prodname_spark_short %} app from the command line.'
allowTitleToDifferFromFilename: true
topics:
  - Copilot
  - CLI
versions:
  feature: spark
product: '{% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_enterprise_short %}'
contentType: tutorials
---

## Introduction

If you’re developing your spark further in a {% data variables.product.github %} codespace, you can deploy it directly from the command line using the {% data variables.product.prodname_spark_short %} CLI, an extension of the {% data variables.product.prodname_cli %}.

### Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. You need a {% data variables.copilot.copilot_pro_plus_short %} or {% data variables.copilot.copilot_enterprise_short %} license to use {% data variables.product.prodname_spark_short %}. See [AUTOTITLE](/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
* You must have **built a {% data variables.product.prodname_spark_short %} app** (a "spark"). To start building, navigate to [{% data variables.product.prodname_spark_short %}](https://github.com/spark).
* You have **created a repository** for your spark on {% data variables.product.github %}. For instructions, see [AUTOTITLE](/copilot/tutorials/spark/build-apps-with-spark#step-8-invite-collaborators-with-a-repository).

## Open your spark in a codespace

The {% data variables.product.prodname_spark_short %} CLI currently only works within a {% data variables.product.github %} codespace.

1. Navigate to the main page of your spark's repository on {% data variables.product.github %}.
1. Click the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** button, then click the **Codespaces** tab.
1. Click **{% octicon "plus" aria-label="Create a codespace on main" %}** to create a codespace. The codespace opens in a new browser tab.

## Install the {% data variables.product.prodname_spark_short %} CLI

1. In the terminal in your codespace, run the following command to install the {% data variables.product.prodname_spark_short %} CLI:

   ```bash copy
   gh extensions install github/gh-runtime-cli
   ```

1. Once the installation is complete, to verify that the {% data variables.product.prodname_spark_short %} CLI is installed, run:

   ```bash copy
   gh runtime-cli version
   ```

## Build your spark

1. In the terminal in your codespace, run the following command to install the latest version of the {% data variables.product.prodname_spark_short %} SDK:

   ```bash copy
   npm install @github/spark@latest
   ```

1. Next, run the following command to compile your {% data variables.product.prodname_spark_short %} app.

   ```bash copy
   npm run build
   ```

## Deploy your spark

1. To deploy your {% data variables.product.prodname_spark_short %} app, run:

   ```bash copy
   gh runtime-cli deploy --dir ./dist
   ```

## Troubleshooting

If you're being asked to supply the `--app` parameter when deploying your spark, update to the latest version of the {% data variables.product.prodname_spark_short %} SDK by following step 1 in [Build your spark](#build-your-spark).
