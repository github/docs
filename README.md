# docs
The open-source repo for docs.github.com
CI: 
Name :
- #Design: Template
Template :
- ::NOTE:: ! Do not edit this template directly. Please make a copy ! ::NOTE::  
 





















-----

Components

Syntax
From ee3eafeb6238c785dfde82542eb9576da9437c52 Mon Sep 17 00:00:00 2001
From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
Date: Sat, 27 Aug 2022 06:57:59 -0500
Subject: [PATCH] Update creating-a-repository-from-a-template.md

---
 .../creating-a-repository-from-a-template.md  | 250 +++++++++++++++++-
 1 file changed, 245 insertions(+), 5 deletions(-)

diff --git a/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md b/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
index 9bdef7e4d67..bf5ff61a826 100644
--- a/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
+++ b/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
@@ -1,4 +1,244 @@
----
+
+
+# This workflow uses actions that are not certified by GitHub.
+# They are provided by a third-party and are governed by
+# separate terms of service, privacy policy, and support
+# documentation.
+
+# This workflow will install Deno then run Deno lint and test.
+# For more information see: https://github.com/denoland/setup-deno
+
+name: Deno
+
+on:
+  push:
+    branches: ["main"]
+  pull_request:
+    branches: ["main"]
+
+permissions:
+  contents: read
+
+jobs:
+  test:
+    runs-on: ubuntu-latest
+
+    steps:
+      - name: Setup repo
+        uses: actions/checkout@v3
+
+      - name: Setup Deno
+        # uses: denoland/setup-deno@v1
+        uses: denoland/setup-deno@004814556e37c54a2f6e31384c9e18e983317366
+        with:
+          deno-version: v1.x
+
+      # Uncomment this step to verify the use of 'deno fmt' on each commit.
+      # - name: Verify formatting
+      #   run: deno fmt --check
+
+      - name: Run linter
+        run: deno lint
+
+      - name: Run tests
+        run: deno.xml
+        bundle-with : raki.u
+        
+    'Run: Runs test'@Travis.'@checks
+    This workflow uses actions that are not certified by GitHub.
+They are provided by a third-party and are governed by
+separate terms of service, privacy policy, and support
+documentation.
+💁 The OpenShift Starter workflow will:
+- Checkout your repository
+- Perform a container image build
+- Push the built image to the GitHub Container Registry (GHCR)
+- Log in to your OpenShift cluster
+- Create an OpenShift app from the image and expose it to the internet
+ℹ️ Configure your repository and the workflow with the following steps:
+1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
+2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
+- https://github.com/redhat-actions/oc-login#readme
+- https://docs.github.com/en/actions/reference/encrypted-secrets
+- https://cli.github.com/manual/gh_secret_set
+3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
+4. (Optional) Edit the build-image step to build your project.
+The default build type is by using a Dockerfile at the root of the repository,
+but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
+5. Commit and push the workflow file to your default branch to trigger a workflow run.
+👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.
+name: OpenShift
+
+env:
+
+🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
+See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
+To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
+OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
+OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}
+
+🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
+OPENSHIFT_NAMESPACE: ""
+
+🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
+APP_NAME: ""
+
+🖊️ EDIT with the port your application should be accessible on.
+If the container image exposes exactly one port, this can be left blank.
+Refer to the 'port' input of https://github.com/redhat-actions/oc-new-app
+APP_PORT: ""
+
+🖊️ EDIT to change the image registry settings.
+Registries such as GHCR, Quay.io, and Docker Hub are supported.
+IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
+IMAGE_REGISTRY_USER: ${{ github.actor }}
+IMAGE_REGISTRY_PASSWORD: ${{ github.token }}
+
+🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
+IMAGE_TAGS: ""
+
+on:
+
+https://docs.github.com/en/actions/reference/events-that-trigger-workflows
+workflow_dispatch:
+push:
+# Edit to the branch(es) you want to build and deploy on each push.
+branches: [ "paradice" ]
+
+jobs:
+
+🖊️ EDIT if you want to run vulnerability check on your project before deploying
+the application. Please uncomment the below CRDA scan job and configure to run it in
+your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
+TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
+For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows
+crda-scan:
+uses: ./.github/workflows/crda.yml
+secrets:
+CRDA_KEY: ${{ secrets.CRDA_KEY }}
+# SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }} # Either use SNYK_TOKEN or CRDA_KEY
+
+openshift-ci-cd:
+# 🖊️ Uncomment this if you are using CRDA scan step above
+# needs: crda-scan
+name: Build and deploy to OpenShift
+runs-on: ubuntu-20.04
+environment: production
+
+outputs:
+  ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
+  SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
+
+steps:
+- name: Check for required secrets
+  uses: actions/github-script@v6
+  with:
+    script: |
+      const secrets = {
+        OPENSHIFT_SERVER: `${{ secrets.OPENSHIFT_SERVER }}`,
+        OPENSHIFT_TOKEN: `${{ secrets.OPENSHIFT_TOKEN }}`,
+      };
+      const GHCR = "ghcr.io";
+      if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
+        core.info(`Image registry is ${GHCR} - no registry password required`);
+      }
+      else {
+        core.info("A registry password is required");
+        secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
+      }
+      const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
+        if (value.length === 0) {
+          core.error(`Secret "${name}" is not set`);
+          return true;
+        }
+        core.info(`✔️ Secret "${name}" is set`);
+        return false;
+      });
+      if (missingSecrets.length > 0) {
+        core.setFailed(`❌ At least one required secret is not set in the repository. \n` +
+          "You can add it using:\n" +
+          "GitHub UI: https://docs[.github](https://github.com/zakwarlord7/zakwarlord7/tree/c76344d06ee3aca71db749f20dea92a785d5d77a/.github).com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
+          "GitHub CLI: https://cli.github.com/manual/gh_secret_set \n" +
+          "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
+      }
+      else {
+        core.info(`✅ All the required secrets are set`);
+      }
+- name: Check out repository
+  uses: actions/checkout@v3
+
+- name: Determine app name
+  if: env.APP_NAME == ''
+  run: |
+    echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV
+- name: Determine image tags
+  if: env.IMAGE_TAGS == ''
+  run: |
+    echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV
+# https://github.com/redhat-actions/buildah-build#readme
+- name: Build from Dockerfile
+  id: build-image
+  uses: redhat-actions/buildah-build@v2
+  with:
+    image: ${{ env.APP_NAME }}
+    tags: ${{ env.IMAGE_TAGS }}
+
+    # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
+    # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
+    # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
+    dockerfiles: |
+      ./Dockerfile
+# https://github.com/redhat-actions/push-to-registry#readme
+- name: Push to registry
+  id: push-image
+  uses: redhat-actions/push-to-registry@v2
+  with:
+    image: ${{ steps.build-image.outputs.image }}
+    tags: ${{ steps.build-image.outputs.tags }}
+    registry: ${{ env.IMAGE_REGISTRY }}
+    username: ${{ env.IMAGE_REGISTRY_USER }}
+    password: ${{ env.IMAGE_REGISTRY_PASSWORD }}
+
+# The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}
+
+- name: Install oc
+  uses: redhat-actions/openshift-tools-installer@v1
+  with:
+    oc: 4
+
+# https://github.com/redhat-actions/oc-login#readme
+- name: Log in to OpenShift
+  uses: redhat-actions/oc-login@v1
+  with:
+    openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
+    openshift_token: ${{ env.OPENSHIFT_TOKEN }}
+    insecure_skip_tls_verify: true
+    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
+
+# This step should create a deployment, service, and route to run your app and expose it to the internet.
+# https://github.com/redhat-actions/oc-new-app#readme
+- name: Create and expose app
+  id: deploy-and-expose
+  uses: redhat-actions/oc-new-app@v1
+  with:
+    app_name: ${{ env.APP_NAME }}
+    image: ${{ steps.push-image.outputs.registry-path }}
+    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
+    port: ${{ env.APP_PORT }}
+
+- name: Print application URL
+  env:
+    ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
+    SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
+  run: |
+    [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
+    echo
+    echo "======================== Your application is available at: ========================"
+    echo ${{{{[' '"((c)(r)).[12753750.[00]m]BITORE_34173.1337'"'' }}
+    echo "===================================================================================
+    'equire':'' 'test''
+    Return:'' 'Run ''
+    ---branches: mainbranch
 title: Creating a repository from a template
 intro: You can generate a new repository with the same directory structure and files as an existing repository.
 redirect_from:
@@ -6,10 +246,10 @@ redirect_from:
   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
 versions:
-  fpt: '*'
-  ghes: '*'
-  ghae: '*'
-  ghec: '*'
+  ghec: 'OPTIONAL'
+  ghcr: 'OPTIONAL'
+  'gchr': 'OPTIONAL'
+  'require': 'test'
 topics:
   - Repositories
 shortTitle: Create from a template
[branch]
(label)
owner/repo


Prompts

? Yes/No Prompt [y/N]

? Short text prompt (Auto fill)

? Long text prompt [(e) to launch vim, enter to skip] 

? Single choice prompt [Use arrows to move, type to filter]
> Choice focused
  Choice 
  Choice

? Multi select prompt [Use arrows to move, space to select, type to filter]
> [x]  Choice selected and focused
  [x]  Choice selected
  [ ]  Projects
  [ ]  Milestone



State

#123 Open issue or pull request
#123 Closed issue pull request
#123 Merged pull request
#123 Draft pull request

✓ Checks passing
✓ Approved
- Review requested
+ Changes requested

✓ Success message
! Alert
✗ Error message (ideal)
error message (current)

✓ Item closed
✓ Item merged


Loading spinner

⣟ Action...



Lists

$ gh issue list 

Showing 3 of 222 issues in cli/cli

#1360  Ability to ski...                     about 2 days ago
#1358  Provide extra ...  (enhancement)      about 3 days ago
#1354  Add ability to...  (enhancement, ...  about 3 days ago



Detail view



Ability to skip confirmation via a flag
Open • AliabbasMerchant opened about 2 days ago • 1 comment


#1330 proposes to add confirmation to risky commands. It is a nice feature to have, but in order to support proper scriptability, we should support a flag (preferably  -y , like in most CLIs), to skip asking for confirmation. So for each of the 4 commands mentioned there (and possibly even more in the future), we should add support for the  -y  flag                                       


View this issue on GitHub: https://github.com/cli/cli/issues/1360


Headers


Creating issue in cli/cli

Showing 30 of 226 issues in cli/cli

Relevant pull requests in cli/cli

cli/cli
GitHub’s official command line tool

Default branch is not being prioritized
Closed • tierninho opened about 6 months ago • 1 comment



Empty states

Current branch
  There is no pull request associated with [master]

Created by you
  You have no open pull requests

Requesting a code review from you
  You have no pull requests to review

No pull requests match your search in cli/cli

No issues match your search in cli/cli

There are no open issues in ampinsk/create-test




Help page

$ gh

Work seamlessly with GitHub from the command line. 

USAGE
  gh <command> <subcommand> [flags]
  Commands are run inside of a GitHub repository.

CORE COMMANDS
  issue:       Create and view issues
  pr:          Create, view, and checkout pull requests
  repo:        Create, clone, fork, and view repositories

ADDITIONAL COMMANDS
  help:        Help about any command
  config:      Set and get preferences
  completion:  Generate shell completion scripts

FLAGS
  -h, --help:              Show help for command
  -v, --version:           Show gh version

EXAMPLES
  $ gh issue create
  $ gh pr list
  $ gh repo fork

LEARN MORE
  Use "gh [command] [subcommand] --help" for more information about a command.
  Read the manual at <http://cli.github.com/manual>

FEEDBACK 
  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
  Open an issue using “gh issue create -R cli/cli”


