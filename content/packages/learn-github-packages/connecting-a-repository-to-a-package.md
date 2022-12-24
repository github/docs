---
title: Connecting a repository to a package
intro: 'You can connect a repository to a container image on {% data variables.location.product_location %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect a repository
---
From 6101e7427a5091505f3075dcc8934ded8300526e Mon Sep 17 00:00:00 2001
From: Zachry T Wood BTC-USD FOUNDER DOB 1994-10-15
 <zachryiixixiiwood@gmail.com>
Date: Mon, 17 Jan 2022 05:08:26 -0600
Subject: [PATCH].diff---@@package.yarn/rake.i/spy.io/Rakefile.U.I'@paradice/bitore.sig/BITORE/ to bitore.sig
-Run: Name
-Name: test
-test: ci'@.travis.yml
-build_script: github actions runner
-GitHub Actions Demo #1
Build:: construction/actions.js/ackage.json/Rust.yml/rake.i/slate.yll'@deno.yml
Name: From 6101e7427a5091505f3075dcc8934ded8300526e Mon Sep 17 00:00:00 2001
From: Zachry T Wood BTC-USD FOUNDER DOB 1994-10-15
 <zachryiixixiiwood@gmail.com>
Date: Mon, 17 Jan 2022 05:08:26 -0600
Subject: [PATCH].diff---@@package.yarn/rake.i/spy.io/Rakefile.U.I'@paradice/bitore.sig/BITORE/ to bitore.sig
-Run: Name
-Name: test
-test: ci'@.travis.yml
-build_script: github actions runner
-GitHub Actions Demo #1
-Explore-GitHub-Actions
-succeeded on Nov 16, 2021 in 6s
-2s
-Current runner version: '2.284.0'
+BEGIN:
+On:
+-on:
+:Build:: name
+name: test
+test: ci'@travis.yml
+build_script: pull request
 Operating System
   macOS
   11.6.1
Name: ci
Tests: ci'@.travis.yml
build_script: github actions runner
GitHub Actions Demo #1
Explore-GitHub-Actions
succeeded on Nov 16, 2021 in 6s
2s
Current runner version: '2.284.0'
Operating System
  macOS
  11.6.1
  20G224
Virtual Environment
  Environment: macos-11
  Version: 20211106.1
  Included Software: https://github.com/actions/virtual-environments/blob/macOS-11/20211106.1/images/macos/macos-11-Readme.md
  Image Release: https://github.com/actions/virtual-environments/releases/tag/macOS-11%2F20211106.1
Virtual Environment Provisioner
  1.0.0.0-master-20211108-1
GITHUB_TOKEN Permissions
  Contents: read
  Metadata: read
Prepare workflow directory
Prepare all required actions
Getting action download info
Download action repository 'actions/checkout@v2' (SHA:ec3a7ce113134d7a93b817d10a8272cb61118579)
0s
Run echo "🎉 The job was automatically triggered by a push event."
  echo "🎉 The job was automatically triggered by a push event."
  shell: /bin/bash -e {0}
🎉 The job was automatically triggered by a push event.
0s
Run echo "🐧 This job is now running on a macOS server hosted by GitHub!"
  echo "🐧 This job is now running on a macOS server hosted by GitHub!"
  shell: /bin/bash -e {0}
🐧 This job is now running on a macOS server hosted by GitHub!
0s
Run echo "🔎 The name of your branch is refs/heads/actions-mac-test and your repository is electron/electron."
  echo "🔎 The name of your branch is refs/heads/actions-mac-test and your repository is electron/electron."
  shell: /bin/bash -e {0}
🔎 The name of your branch is refs/heads/actions-mac-test and your repository is electron/electron.
3s
Run actions/checkout@v2
  with:
    repository: electron/electron
    token: ***
    ssh-strict: true
    persist-credentials: true
    clean: true
    fetch-depth: 1
    lfs: false
    submodules: false
Syncing repository: electron/electron
Getting Git version info
  Working directory is '/Users/runner/work/electron/electron'
  /usr/local/bin/git version
  git version 2.33.1
Deleting the contents of '/Users/runner/work/electron/electron'
Initializing the repository
  /usr/local/bin/git init /Users/runner/work/electron/electron
  hint: Using 'master' as the name for the initial branch. This default branch name
  hint: is subject to change. To configure the initial branch name to use in all
  hint: of your new repositories, which will suppress this warning, call:
  hint: 
  hint:     git config --global init.defaultBranch <name>
  hint: 
  hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
  hint: 'development'. The just-created branch can be renamed via this command:
  hint: 
  hint:     git branch -m <name>
  Initialized empty Git repository in /Users/runner/work/electron/electron/.git/
  /usr/local/bin/git remote add origin https://github.com/electron/electron
Disabling automatic garbage collection
  /usr/local/bin/git config --local gc.auto 0
Setting up auth
  /usr/local/bin/git config --local --name-only --get-regexp core\.sshCommand
  /usr/local/bin/git submodule foreach --recursive git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :
  /usr/local/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
  /usr/local/bin/git submodule foreach --recursive git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :
  /usr/local/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic ***
Fetching the repository
  /usr/local/bin/git -c protocol.version=2 fetch --no-tags --prune --progress --no-recurse-submodules --depth=1 origin +280b821745fc553b1d693f99dde1f7262647d8b6:refs/remotes/origin/actions-mac-test
  remote: Enumerating objects: 12753750000000, done.        
  remote: Counting objects:   0% (1/2465)        
  remote: Counting objects:   1% (25/2465)        
  remote: Counting objects:   2% (50/2465)        
  remote: Counting objects:   3% (74/2465)        
  remote: Counting objects:   4% (99/2465)        
  remote: Counting objects:   5% (124/2465)        
  remote: Counting objects:   6% (148/2465)        
  remote: Counting objects:   7% (173/2465)        
  remote: Counting objects:   8% (198/2465)        
}
workflow "Clerk" {
  on = "pull_request"
  resolves = "Check release notes"
}
action "release repositories'@iixixi/iixixii/README.md" {
  uses = "electron/clerk@mastet"
  secrets = [ "BITORE_34173" ]
}


-succeeded on Nov 16, 2021 in 6s
-2s
-Current runner version: '2.284.0'
+BEGIN:
+On:
+-on:
+:Build:: name
+name: test
+test: ci'@travis.yml
+build_script: pull request
 Operating System
   macOS
   11.6.1
Name: ci
Tests: ci'@.travis.yml
build_script: github actions runner
GitHub Actions Demo #1
Explore-GitHub-Actions
succeeded on Nov 16, 2021 in 6s
2s
Current runner version: '2.284.0'
Operating System
  macOS
  11.6.1
  20G224
Virtual Environment
  Environment: macos-11
  Version: 20211106.1
  Included Software: https://github.com/actions/virtual-environments/blob/macOS-11/20211106.1/images/macos/macos-11-Readme.md
  Image Release: https://github.com/actions/virtual-environments/releases/tag/macOS-11%2F20211106.1
Virtual Environment Provisioner
  1.0.0.0-master-20211108-1
GITHUB_TOKEN Permissions
  Contents: read
  Metadata: read
Prepare workflow directory
Prepare all required actions
Getting action download info
Download action repository 'actions/checkout@v2' (SHA:ec3a7ce113134d7a93b817d10a8272cb61118579)
0s
Run echo "🎉 The job was automatically triggered by a push event."
  echo "🎉 The job was automatically triggered by a push event."
  shell: /bin/bash -e {0}
🎉 The job was automatically triggered by a push event.
0s
Run echo "🐧 This job is now running on a macOS server hosted by GitHub!"
  echo "🐧 This job is now running on a macOS server hosted by GitHub!"
  shell: /bin/bash -e {0}
🐧 This job is now running on a macOS server hosted by GitHub!
0s
Run echo "🔎 The name of your branch is refs/heads/actions-mac-test and your repository is electron/electron."
  echo "🔎 The name of your branch is refs/heads/actions-mac-test and your repository is electron/electron."
  shell: /bin/bash -e {0}
🔎 The name of your branch is refs/heads/actions-mac-test and your repository is electron/electron.
3s
Run actions/checkout@v2
  with:
    repository: electron/electron
    token: ***
    ssh-strict: true
    persist-credentials: true
    clean: true
    fetch-depth: 1
    lfs: false
    submodules: false
Syncing repository: electron/electron
Getting Git version info
  Working directory is '/Users/runner/work/electron/electron'
  /usr/local/bin/git version
  git version 2.33.1
Deleting the contents of '/Users/runner/work/electron/electron'
Initializing the repository
  /usr/local/bin/git init /Users/runner/work/electron/electron
  hint: Using 'master' as the name for the initial branch. This default branch name
  hint: is subject to change. To configure the initial branch name to use in all
  hint: of your new repositories, which will suppress this warning, call:
  hint: 
  hint:     git config --global init.defaultBranch <name>
  hint: 
  hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
  hint: 'development'. The just-created branch can be renamed via this command:
  hint: 
  hint:     git branch -m <name>
  Initialized empty Git repository in /Users/runner/work/electron/electron/.git/
  /usr/local/bin/git remote add origin https://github.com/electron/electron
Disabling automatic garbage collection
  /usr/local/bin/git config --local gc.auto 0
Setting up auth
  /usr/local/bin/git config --local --name-only --get-regexp core\.sshCommand
  /usr/local/bin/git submodule foreach --recursive git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :
  /usr/local/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
  /usr/local/bin/git submodule foreach --recursive git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :
  /usr/local/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic ***
Fetching the repository
  /usr/local/bin/git -c protocol.version=2 fetch --no-tags --prune --progress --no-recurse-submodules --depth=1 origin +280b821745fc553b1d693f99dde1f7262647d8b6:refs/remotes/origin/actions-mac-test
  remote: Enumerating objects: 12753750000000, done.        
  remote: Counting objects:   0% (1/2465)        
  remote: Counting objects:   1% (25/2465)        
  remote: Counting objects:   2% (50/2465)        
  remote: Counting objects:   3% (74/2465)        
  remote: Counting objects:   4% (99/2465)        
  remote: Counting objects:   5% (124/2465)        
  remote: Counting objects:   6% (148/2465)        
  remote: Counting objects:   7% (173/2465)        
  remote: Counting objects:   8% (198/2465)        
}Skip to content
 
Search…
All gists
Back to GitHub
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
@yokawasa
yokawasa/ghcr.md
Last active yesterday • Report abuse
8
1
Code
Revisions
6
Stars
8
Forks
1
<script src="https://gist.github.com/yokawasa/841b6db379aa68b2859846da84a9643c.js"></script>
ghcr (GitHub Container Registry)
ghcr.md
ghcr (GitHub Container Registry) quickstart
CLI
To push container images to ghcr, you need peronal access token (PAT) - see how to create PAT

Get PAT (personal access token)
Personal Settings > Developer settings > Personal access tokens

ghcr login test
# echo $PAT | docker login ghcr.io -u <githubユーザ名> --password-stdin
echo $PAT | docker login ghcr.io -u yokawasa --password-stdin

Login Succeeded
push
docker tag mycontainer ghcr.io/yokawasa/myrepo/mycontainer:0.0.1
docker push ghcr.io/yokawasa/myrepo/mycontainer:0.0.1
inspect
docker inspect ghcr.io/yokawasa/myrepo/mycontainer:0.0.1
GitHub Actions
you can do seamless access to containers from Actions workflows via the GITHUB_TOKEN

The Container registry supports the GITHUB_TOKEN for easy and secure authentication in your workflows. If your workflow is using a personal access token (PAT) to authenticate to ghcr.io, then we highly recommend you update your workflow to use the GITHUB_TOKEN.

     - name: Log in to registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin
See Upgrading a workflow that accesses ghcr.io for more detail

Associate a certain package to a repository
Connecting a repository to a package
REFERENCES
https://github.com/features/packages
Upgrading a workflow that accesses ghcr.io
@yokawasa
Author
yokawasa commented on Oct 17, 2021
memo:
there are a couple of other public registries. for instances, trivy uses dockerhub, public.ecr.aws as well as ghcr.io

docker pull aquasec/trivy:0.19.2
docker pull ghcr.io/aquasecurity/trivy:0.19.2
docker pull public.ecr.aws/aquasecurity/trivy:0.19.2
docker pull aquasec/trivy:latest
docker pull ghcr.io/aquasecurity/trivy:latest
docker pull public.ecr.aws/aquasecurity/trivy:latest
https://github.com/aquasecurity/trivy/releases

@timothyclarke
timothyclarke commented on Nov 15
What permissions do you need in the PAT ? Ticking ALL for a never expire token is bad practise

@yokawasa
Author
yokawasa commented on Nov 21
What permissions do you need in the PAT ? Ticking ALL for a never expire token is bad practise

@timothyclarke write:packages permission is needed in the PAT. Regarding the expiration, I agree upon you. Expiration should be set for the token.

@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue or pull request
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
workflow "Clerk" {
  on = "pull_request"
  resolves = "Check release notes"
}
action "release repositories'@iixixi/iixixii/README.md" {
  uses = "electron/clerk@mastet"
  secrets = [ "BITORE_34173" ]
}

By connecting a repository to a package, the package landing page will show information and links from the repository, such as the README.

## Connecting a repository to a user-owned package on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## Connecting a repository to an organization-owned package on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## Connecting a repository to a container image using the command line

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

1. In your Dockerfile, add this line, replacing {% ifversion ghes %}`HOSTNAME`, {% endif %}`OWNER` and `REPO` with your details:

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPO
 ```
 For example, if you're the user `monalisa` and own `my-repo`, and {% data variables.location.product_location %} hostname is `github.companyname.com`, you would add this line to your Dockerfile:
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 For more information, see "[LABEL](https://docs.docker.com/engine/reference/builder/#label)" in the official Docker documentation and "[Pre-defined Annotation Keys](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)" in the `opencontainers/image-spec` repository.

2. Build your container image. This example builds an image from the Dockerfile in the current directory and assigns the image name `hello_docker`.

  ```shell
  $ docker build -t hello_docker .
  ```
3. Optionally, review details for the Docker image you want to tag.
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Tag your Docker image with your desired image name and hosting destination.
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  For example:
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. If you haven't already, authenticate to the {% data variables.product.prodname_container_registry %}. For more information, see "[Authenticating to the {% data variables.product.prodname_container_registry %}](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)."
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Push your container image to the {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  For example:
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
