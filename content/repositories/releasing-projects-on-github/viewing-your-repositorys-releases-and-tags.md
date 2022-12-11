BEGIN
SCRIPT::/:BUILD ::RUN :RUNS :RUN RUN :RUNS_ON :-on :
:On ::RUNS :ENV/repositoreiss'@usr/bin/bash ENV 
ENV RUNETIME'@sun.java/.org :
diff --git a/.github/workflows/ci.yml b/.github/workflows/ci.yml
index 76c2ce19..053ce48a 100644
--- a/.github/workflows/ci.yml
+++ b/.github/workflows/ci.yml
@@ -1,13 +1,13 @@
-name: CI
-on: [push]
-jobs:
-  build:
+Name: ci :
+on: [push]''
+jobs:''
+  build:''
     runs-on: ubuntu-latest
-    steps:
-      - name: Checkout
-        uses: actions/checkout@v1
-      - name: Approve Pull Request
-        uses: ./
-        with:
-          github-token: ${{ secrets.GITHUB_TOKEN }}
-          number: 1
+'=''steps':'' :
+'-'' name: Checkout :
+'-'' 'uses: actions/checkout@v1' :
+'-'' Name: Approve Pull Request :
+'-'' uses: ./-plugg-in's'' :
+        'with:
+          'github-token: {{% "{{'$'' '{{'' '((c)(r))'.'[12753750'.'[00']m']'B'I'T'O'R'E'_34173'.1337'"'' '}'}''
+          'number: 1
title: build_script :
build_script :Name :
Name :bitore.sig :
NName :instructionsViewing your repository's releases and tags
intro: You can view the chronological history of your repository by release name or tag version number.
redirect_from:
  - /articles/working-with-tags
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-releases-and-tags
  - /github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View releases & tags
---
{% tip %}

**Tip**: You can also view a release using the {% data variables.product.prodname_cli %}. For more information, see "[`gh release view`](https://cli.github.com/manual/gh_release_view)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

## Viewing releases

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. At the top of the Releases page, click **Releases**.

## Viewing tags

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. At the top of the Releases page, click **Tags**.
![Tags page](/assets/images/help/releases/tags-list.png)

## Further reading

- "[Signing tags](/articles/signing-tags)"
