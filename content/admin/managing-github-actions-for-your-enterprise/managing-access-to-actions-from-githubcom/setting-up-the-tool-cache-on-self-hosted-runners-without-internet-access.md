---
title: Setting up the tool cache on self-hosted runners without internet access
intro: 'To use the included `actions/setup` actions on self-hosted runners without internet access, you must first populate the runner''s tool cache for your workflows.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  ghes: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
  - Networking
  - Storage
shortTitle: Tool cache for offline runners
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## About the included setup actions and the runner tool cache

{% data reusables.actions.enterprise-no-internet-actions %}

Most official {% data variables.product.prodname_dotcom %}-authored actions are automatically bundled with {% data variables.product.product_name %}. However, self-hosted runners without internet access require some configuration before they can use the included `actions/setup-LANGUAGE` actions, such as `setup-node`.

The `actions/setup-LANGUAGE` actions normally need internet access to download the required environment binaries into the runner's tool cache. Self-hosted runners without internet access can't download the binaries, so you must manually populate the tool cache on the runner.

You can populate the runner tool cache by running a {% data variables.product.prodname_actions %} workflow on {% data variables.product.prodname_dotcom_the_website %} that uploads a {% data variables.product.prodname_dotcom %}-hosted runner's tool cache as an artifact, which you can then transfer and extract on your internet-disconnected self-hosted runner.

{% note %}

**Note:** You can only use a {% data variables.product.prodname_dotcom %}-hosted runner's tool cache for a self-hosted runner that has an identical operating system and architecture. For example, if you are using a `ubuntu-22.04` {% data variables.product.prodname_dotcom %}-hosted runner to generate a tool cache, your self-hosted runner must be a 64-bit Ubuntu 22.04 machine. For more information on {% data variables.product.prodname_dotcom %}-hosted runners, see "[AUTOTITLE](/free-pro-team@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."

{% endnote %}

## Prerequisites

* Determine which development environments your self-hosted runners will need. The following example demonstrates how to populate a tool cache for the `setup-node` action, using Node.js versions 14 and 16.
* Access to a repository on {% data variables.product.prodname_dotcom_the_website %} that you can use to run a workflow.
* Access to your self-hosted runner's file system to populate the tool cache folder.

## Populating the tool cache for a self-hosted runner

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a repository that you can use to run a {% data variables.product.prodname_actions %} workflow.
1. Create a new workflow file in the repository's `.github/workflows` folder that uploads an artifact containing the {% data variables.product.prodname_dotcom %}-hosted runner's tool cache.

   The following example demonstrates a workflow that uploads the tool cache for an Ubuntu 22.04 environment, using the `setup-node` action with Node.js versions 14 and 16.

   ```yaml
   name: Upload Node.js 14 and 16 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-22.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "{% raw %}${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"{% endraw %}
             mkdir -p "{% raw %}${{ runner.tool_cache }}{% endraw %}"
         - name: Setup Node 14
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 14.x
         - name: Setup Node 16
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 16.x
         - name: Archive tool cache
           run: |
             cd "{% raw %}${{ runner.tool_cache }}{% endraw %}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: {% data reusables.actions.action-upload-artifact %}
           with:
             path: {% raw %}${{runner.tool_cache}}/tool_cache.tar.gz{% endraw %}
   ```

1. Download the tool cache artifact from the workflow run. For instructions on downloading artifacts, see "[AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts)."
1. Transfer the tool cache artifact to your self hosted runner and extract it to the local tool cache directory. The default tool cache directory is `RUNNER_DIR/_work/_tool`. If the runner hasn't processed any jobs yet, you might need to create the `_work/_tool` directories.

    After extracting the tool cache artifact uploaded in the above example, you should have a directory structure on your self-hosted runner that is similar to the following example:

    ```text
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 14.21.3
                │   └── ...
                └── 16.16.0
                    └── ...
    ```

Your self-hosted runner without internet access should now be able to use the `setup-node` action. If you are having problems, make sure that you have populated the correct tool cache for your workflows. For example, if you need to use the `setup-python` action, you will need to populate the tool cache with the Python environment you want to use.
