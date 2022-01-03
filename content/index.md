From 29cb0b528b6b793409b9dc0ec6cbc8e229b8e69a Mon Sep 17 00:00:00 2001
From: "dependabot[bot]" <49699333+dependabot[bot]@users.noreply.github.com>
Date: Fri, 17 Jul 2020 15:47:36 +0000
Subject: [PATCH 1/3] Bump lodash from 4.17.15 to 4.17.19

Bumps [lodash](https://github.com/lodash/lodash) from 4.17.15 to 4.17.19.
- [Release notes](https://github.com/lodash/lodash/releases)
- [Commits](https://github.com/lodash/lodash/compare/4.17.15...4.17.19)

Signed-off-by: dependabot[bot] <support@github.com>
---
 package-lock.json | 6 +++---
 1 file changed, 3 insertions(+), 3 deletions(-)

diff --git a/package-lock.json b/package-lock.json
index e9fa867..eadc22f 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -2857,9 +2857,9 @@
       }
     },
     "lodash": {
-      "version": "4.17.15",
-      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
-      "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A==",
+      "version": "4.17.19",
+      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.19.tgz",
+      "integrity": "sha512-JNvd8XER9GQX0v2qJgsaN/mzFCNA5BRe/j8JN9d+tWyGLSodKQHKFicdwNYzWwI3wjRnaKPsGj1XkBjx/F96DQ==",
       "dev": true
     },
     "lodash.clonedeep": {

From 436a3e466bead31ee3b427f5b821f9a274311d95 Mon Sep 17 00:00:00 2001
From: Zachry T Wood III the predecessor to JPMorgan Chase Bank NA and INT
 <zachryiixixiiwood@gmail.com>
Date: Mon, 22 Nov 2021 05:39:03 -0600
Subject: [PATCH 2/3] Update .travis.yml

---
 .travis.yml | 18 +++++++++++-------
 1 file changed, 11 insertions(+), 7 deletions(-)

diff --git a/.travis.yml b/.travis.yml
index dda56e1..7a4c810 100644
--- a/.travis.yml
+++ b/.travis.yml
@@ -1,18 +1,22 @@
 language: python
 python:
   - '3.6'
-
 # Whitelist of branches to build
 branches:
   only:
     - master
-
 # Avoid email notifications on every build
 notifications:
-  email: false
-
+  email: zachryTwood@gmail.com
 # Installation command
-install: python setup.py install
-
+install: python sets-up -pip input*logs::ALL''"''
 # Run pytest
-script: python -m pytest -v
+script: python ~pillow 
+reads:  pytest ~v
+<distributionManagement>
+   <repository>
+     <id>github</id>
+     <name>GitHub OWNER Apache Maven Packages</name>
+     <url>https://maven.pkg.github.com/OWNER/REPOSITORY</url>
+   </repository>
+</distributionManagement>---
title: '{% data variables.product.product_name %}{% ifversion fpt or ghec%}.com{% endif %} Help Documentation'
featuredLinks:
  gettingStarted:
    - /get-started/quickstart/set-up-git
    - /github/authenticating-to-github/connecting-to-github-with-ssh
    - /repositories/creating-and-managing-repositories
    - /github/writing-on-github/basic-writing-and-formatting-syntax
  popular:
    - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
    - /authentication
    - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
    - /get-started/getting-started-with-git/managing-remote-repositories
    - /pages
versions: '*'
children:
  - get-started
  - account-and-profile
  - authentication
  - repositories
  - github
  - admin
  - billing
  - organizations
  - code-security
  - pull-requests
  - issues
  - actions
  - codespaces
  - packages
  - search-github
  - developers
  - rest
  - graphql
  - github-cli
  - discussions
  - sponsors
  - communities
  - pages
  - education
  - desktop
  - early-access
childGroups:
  - name: Get started
    octicon: 'RocketIcon'
    children:
    - get-started
    - account-and-profile
    - authentication
    - billing
  - name: Collaborative coding
    octicon: 'CommentDiscussionIcon'
    children:
    - codespaces
    - repositories
    - pull-requests
    - discussions
  - name: CI/CD and DevOps
    octicon: 'GearIcon'
    children:
    - actions
    - packages
    - pages
  - name: Security
    octicon: 'ShieldLockIcon'
    children:
    - code-security
  - name: Client apps
    octicon: 'DeviceMobileIcon'
    children:
    - github-cli
    - desktop
  - name: Project management
    octicon: 'ProjectIcon'
    children:
    - issues
    - search-github
  - name: Developers
    ::build:
