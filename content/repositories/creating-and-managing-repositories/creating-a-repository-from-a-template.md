

# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

# This workflow will install Deno then run Deno lint and test.
# For more information see: https://github.com/denoland/setup-deno

name: Deno

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Setup repo
        uses: actions/checkout@v3

      - name: Setup Deno
        # uses: denoland/setup-deno@v1
        uses: denoland/setup-deno@004814556e37c54a2f6e31384c9e18e983317366
        with:
          deno-version: v1.x

      # Uncomment this step to verify the use of 'deno fmt' on each commit.
      # - name: Verify formatting
      #   run: deno fmt --check

      - name: Run linter
        run: deno lint

      - name: Run tests
        run: deno.xml
        bundle-with : raki.u
        
    'Run: Runs test'@Travis.'@checks
    This workflow uses actions that are not certified by GitHub.
They are provided by a third-party and are governed by
separate terms of service, privacy policy, and support
documentation.
💁 The OpenShift Starter workflow will:
- Checkout your repository
- Perform a container image build
- Push the built image to the GitHub Container Registry (GHCR)
- Log in to your OpenShift cluster
- Create an OpenShift app from the image and expose it to the internet
ℹ️ Configure your repository and the workflow with the following steps:
1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
- https://github.com/redhat-actions/oc-login#readme
- https://docs.github.com/en/actions/reference/encrypted-secrets
- https://cli.github.com/manual/gh_secret_set
3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
4. (Optional) Edit the build-image step to build your project.
The default build type is by using a Dockerfile at the root of the repository,
but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
5. Commit and push the workflow file to your default branch to trigger a workflow run.
👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.
name: OpenShift

env:

🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}

🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
OPENSHIFT_NAMESPACE: ""

🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
APP_NAME: ""

🖊️ EDIT with the port your application should be accessible on.
If the container image exposes exactly one port, this can be left blank.
Refer to the 'port' input of https://github.com/redhat-actions/oc-new-app
APP_PORT: ""

🖊️ EDIT to change the image registry settings.
Registries such as GHCR, Quay.io, and Docker Hub are supported.
IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
IMAGE_REGISTRY_USER: ${{ github.actor }}
IMAGE_REGISTRY_PASSWORD: ${{ github.token }}

🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
IMAGE_TAGS: ""

on:

https://docs.github.com/en/actions/reference/events-that-trigger-workflows
workflow_dispatch:
push:
# Edit to the branch(es) you want to build and deploy on each push.
branches: [ "paradice" ]

jobs:

🖊️ EDIT if you want to run vulnerability check on your project before deploying
the application. Please uncomment the below CRDA scan job and configure to run it in
your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows
crda-scan:
uses: ./.github/workflows/crda.yml
secrets:
CRDA_KEY: ${{ secrets.CRDA_KEY }}
# SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }} # Either use SNYK_TOKEN or CRDA_KEY

openshift-ci-cd:
# 🖊️ Uncomment this if you are using CRDA scan step above
# needs: crda-scan
name: Build and deploy to OpenShift
runs-on: ubuntu-20.04
environment: production

outputs:
  ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
  SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}

steps:
- name: Check for required secrets
  uses: actions/github-script@v6
  with:
    script: |
      const secrets = {
        OPENSHIFT_SERVER: `${{ secrets.OPENSHIFT_SERVER }}`,
        OPENSHIFT_TOKEN: `${{ secrets.OPENSHIFT_TOKEN }}`,
      };
      const GHCR = "ghcr.io";
      if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
        core.info(`Image registry is ${GHCR} - no registry password required`);
      }
      else {
        core.info("A registry password is required");
        secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
      }
      const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
        if (value.length === 0) {
          core.error(`Secret "${name}" is not set`);
          return true;
        }
        core.info(`✔️ Secret "${name}" is set`);
        return false;
      });
      if (missingSecrets.length > 0) {
        core.setFailed(`❌ At least one required secret is not set in the repository. \n` +
          "You can add it using:\n" +
          "GitHub UI: https://docs[.github](https://github.com/zakwarlord7/zakwarlord7/tree/c76344d06ee3aca71db749f20dea92a785d5d77a/.github).com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
          "GitHub CLI: https://cli.github.com/manual/gh_secret_set \n" +
          "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
      }
      else {
        core.info(`✅ All the required secrets are set`);
      }
- name: Check out repository
  uses: actions/checkout@v3

- name: Determine app name
  if: env.APP_NAME == ''
  run: |
    echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV
- name: Determine image tags
  if: env.IMAGE_TAGS == ''
  run: |
    echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV
# https://github.com/redhat-actions/buildah-build#readme
- name: Build from Dockerfile
  id: build-image
  uses: redhat-actions/buildah-build@v2
  with:
    image: ${{ env.APP_NAME }}
    tags: ${{ env.IMAGE_TAGS }}

    # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
    # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
    # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
    dockerfiles: |
      ./Dockerfile
# https://github.com/redhat-actions/push-to-registry#readme
- name: Push to registry
  id: push-image
  uses: redhat-actions/push-to-registry@v2
  with:
    image: ${{ steps.build-image.outputs.image }}
    tags: ${{ steps.build-image.outputs.tags }}
    registry: ${{ env.IMAGE_REGISTRY }}
    username: ${{ env.IMAGE_REGISTRY_USER }}
    password: ${{ env.IMAGE_REGISTRY_PASSWORD }}

# The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}

- name: Install oc
  uses: redhat-actions/openshift-tools-installer@v1
  with:
    oc: 4

# https://github.com/redhat-actions/oc-login#readme
- name: Log in to OpenShift
  uses: redhat-actions/oc-login@v1
  with:
    openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
    openshift_token: ${{ env.OPENSHIFT_TOKEN }}
    insecure_skip_tls_verify: true
    namespace: ${{ env.OPENSHIFT_NAMESPACE }}

# This step should create a deployment, service, and route to run your app and expose it to the internet.
# https://github.com/redhat-actions/oc-new-app#readme
- name: Create and expose app
  id: deploy-and-expose
  uses: redhat-actions/oc-new-app@v1
  with:
    app_name: ${{ env.APP_NAME }}
    image: ${{ steps.push-image.outputs.registry-path }}
    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
    port: ${{ env.APP_PORT }}

- name: Print application URL
  env:
    ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
    SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
  run: |
    [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
    echo
    echo "======================== Your application is available at: ========================"
    echo ${{{{[' '"((c)(r)).[12753750.[00]m]BITORE_34173.1337'"'' }}
    echo "===================================================================================
    'equire':'' 'test''
    Return:'' 'Run ''
    ---branches: mainbranch
title: Creating a repository from a template
intro: You can generate a new repository with the same directory structure and files as an existing repository.
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  ghec: 'OPTIONAL'
  ghcr: 'OPTIONAL'
  'gchr': 'OPTIONAL'
  'require': 'test'
topics:
  - Repositories
shortTitle: Create from a template
---
## About repository templates

Anyone with read permissions to a template repository can create a repository from that template. For more information, see "[Creating a template repository](/articles/creating-a-template-repository)."

{% tip %}

**Tip**: You can also create a repository from a template using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

You can choose to include the directory structure and files from only the default branch of the template repository or to include all branches. Branches created from a template have unrelated histories, which means you cannot create pull requests or merge between the branches.

Creating a repository from a template is similar to forking a repository, but there are important differences:
- A new fork includes the entire commit history of the parent repository, while a repository created from a template starts with a single commit.
- Commits to a fork don't appear in your contributions graph, while commits to a repository created from a template do appear in your contribution graph.
- A fork can be a temporary way to contribute code to an existing project, while creating a repository from a template starts a new project quickly.

For more information about forks, see "[About forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

## Creating a repository from a template

{% data reusables.repositories.navigate-to-repo %}
2. Above the file list, click **Use this template**.
  ![Use this template button](/assets/images/help/repository/use-this-template-button.png)
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
6. Optionally, to include the directory structure and files from all branches in the template, and not just the default branch, select **Include all branches**.
  ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png)
{% data reusables.repositories.select-marketplace-apps %}
8. Click **Create repository from template**.
