---
title: Linking a pull request to an issue
intro: You can link a pull request to an issue to show that a fix is in progress and to automatically close the issue when the pull request is merged.
redirect_from:
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

{% note %}

**Note:** The special keywords in a pull request description are interpreted when the pull request targets the repository's *default* branch. However, if the PR's base is *any other branch*, then these keywords are ignored, no links are created and merging the PR has no effect on the issues. **If you want to link a pull request to an issue using a keyword, the PR must be on the default branch.**

{% endnote %}

### About linked issues and pull requests

You can link an issue to a pull request {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}manually or {% endif %}using a supported keyword in the pull request description. 

When you link a pull request to the issue the pull request addresses, collaborators can see that someone is working on the issue. {% if currentVersion ver_lt "enterprise-server@2.21" %}If the pull request and the issue are in different repositories, {% data variables.product.product_name %} will display the link after the pull request is merged, if the person who merges the pull request also has permission to close the issue.{% endif %}

When you merge a linked pull request into the default branch of a repository, its linked issue is automatically closed. For more information about the default branch, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### Manually linking a pull request to an issue

Anyone with write permissions to a repository can manually link a pull request to an issue.

You can manually link up to ten issues to each pull request. The issue and pull request must be in the same repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. In the list of pull requests, click the pull request that you'd like to link to an issue.
4. In the right sidebar, click **Linked issues**.
  ![Linked issues in the right sidebar](/assets/images/help/pull_requests/linked-issues.png)
5. Click the issue you want to link to the pull request.
  ![Drop down to link issue](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

### Linking a pull request to an issue using a keyword

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message (please note that the pull request must be on the default branch). 

* close
* closes
* closed
* fix
* fixes
* fixed
* resolve
* resolves
* resolved

The syntax for closing keywords depends on whether the issue is in the same repository as the pull request.

Linked issue | Syntax | Example
--------------- | ------ | ------
Issue in the same repository | *KEYWORD* #*ISSUE-NUMBER* | `Closes #10`
Issue in a different repository | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`
Multiple issues | Use full syntax for each issue | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}Only manually linked pull requests can be manually unlinked. To unlink an issue that you linked using a keyword, you must edit the pull request description to remove the keyword.{% endif %}

You can also use closing keywords in a commit message. The issue will be closed when you merge the commit into the default branch, but the pull request that contains the commit will not be listed as a linked pull request.

### Further reading

- "[Autolinked references and URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
on::/start:://Run:://Script::/Name::/On::/Const::/Build::/Run:::/Actions::/On://Automate:Job:'"''
#Jobs:"Steps
#Steps:
# In development, the bundle will recompile every time a file used by `javascripts/index.js` is changed. This 
# ensures that you're always getting an up-to-date # version of the script.
# package:Deno.$RubyGems_Rakefile/$Ruby.yaml_Gem_keycutter/Rakefile.pkg.json is compiled during build
# build::Name
-name: Job
Job:Steps
Steps: Actions
Action:"'-'" 
- Build:pkg.js
-:pkg.js/package.yam/pkg.yml.pkgpom.iu/pkg.js-
-/package.json::Steps
teps:/'fiddle/fetch,Bash'@pyper/user/bin/purl-/$RubyGems_keycutter/Dns.python.javascript-/jekyll/fiddle/eslint-superendeerer'
- run:://action:://script'/On::/Build
- run::/Name::/Build-and-Deployee::Automate-:local_build_script:runs-on: pika/laddle-/fiddle/javascripts/tes/ci-then-Build-and-Deployee-Release:zw/'pika/pyper/rust.yam-/rafefile.iu/pom.iu/pkg.yml/package.json-/Rakefile/pkg.js:builds:bitore-.net'""'{webhooks'""'}:run:on-:'local_build_script::'"'x'
'":://:://on:'"'''
'"bundle-with'" "'Python.js::on:'"'
"'package-with::Deno/workflows/ReAdMe.Md'"'-/cOnTrIbUtInG.mD.specs-on-::Gemfile_keycutter_obj_item_id'@ZachryTylerWood'""'@Administrator'@'.git.it.gists@github.git.it'"''
-Name: BITORE.sigs
-run://action::/local_build_script.ip.git.it:on:run:on'local_build_script
-run::/: local_build_script'@::/on:'iixixi_BITORE.gititian's.sig/multi_line_script:
'""'module.exports = (pkg.js) 
'"::##TIERAFORMA=>'bandos_chestplate.img.txt'"'''"''"'TIERRAFORMA::'" "'docx'X''=>shapeshifts=>::/github/user/bin/.img/bandos_chestplate.img/th.100X.pdf.exports/local/user/.img/adk/api/spec_Gemfile_keycutter_oject_item_id/sdk.s./jdk.J.C/Winrawr.Zip.yaml'"""'
On:://" "run:://'" "'local_build_script.exports: 'rake.i/pom.iu/rust.yam/rakefile/test/$RubyGems_keycutter/Makefile::/run:build_script: Gemfile.javascript.rakefile/workflows/rust.u/ReAdMe.Md.Gemfile.spec'"''='>''::Automate:Squash_Merge:run'"''.yaml=>'""'Gemfile.spec'""'='""'$RubyGems'"'''"'
'"#Pull::"'"''
'":Branches::'": "'[trunk]'"'''"on:'"""'
'""'//Automate::squash_merge:file''
::'''"{'$RubyGems'_Makefile'.Gems_Keycutter'}''"'"'='""'$RubyGems_((c)(r))_gemcutter.specs'::Automate_squash_merge::Request::#Pull::Gemfile.specs:Request::Automate_squash_merge''::#Publish:$RubyGems_Rakefile.Gems_keycutter.Gemspecs:Request::Export:file''::$RubyGems_Gemfile_keycutter.specs'""'''::_object_item_id:'""'@'""'/'""'.h'""'.ref'""'>'""'{'{'{'object'}'}'""'{'[Volume']'}'""'{item'""'_id'}':':'{'{'""'{""''('""'('""'(c'""'')'""''(r'""')'""')'""')'""'':'""'{'""'[8888888888']'""'}'""'<'""'run:test'@CI-then-deploy-to-HerokuRunWizardPro-to-Automate:Automatic:Updates-to-Automataey-Update':tta':':':'-3 sec'-and-::Fix':':All':':':Perfect':':':Deploy-HerokuDependabotRunwizard/Installer-to-Automate:Updates:tta:Every'0'sec'''"''
on:://Automate::test:runs-on:ci-then-Build-and-Deployee-Release'@'""':'""'::Publish:'""':#P'""'@iixixi/iixixi.rust.u/rakefile/$RubyGems_Gemfile_keycutter/Rakefile.iu/README.md/contributing.MD::run:package-with-Python.js:Repository:container:type:DOCKER.Gui.jpeg.xmlsvnx.yml.json'@iixixi/iixixi/cOnTrIbUtIng.mD/ReAdMe.Md::Automate_squash_merge:'Rakefile.gemspecs:::Request::Export:Makefile.Gemfile.specs.Md'::Publish:'"'Release'"'::Deploy-:'@iixixi/iixixi/README.md/cOnTrIbUtInG.mD':Launch::'::Build:On:'::Return:'Run ''"'''
