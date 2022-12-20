Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
dragonflydb
/
dragonfly
Public
Code
Issues
59
Pull requests
13
Discussions
Actions
Projects
Security
Insights
ci-tests
fix: handle corner case when comitted memory is negative #1216
Jobs
Run details
pre-commit
succeeded yesterday in 11s
Search logs
1s
Current runner version: '2.299.1'
Operating System
  Ubuntu
  22.04.1
  LTS
Runner Image
  Image: ubuntu-22.04
  Version: 20221212.1
  Included Software: https://github.com/actions/runner-images/blob/ubuntu22/20221212.1/images/linux/Ubuntu2204-Readme.md
  Image Release: https://github.com/actions/runner-images/releases/tag/ubuntu22%2F20221212.1
Runner Image Provisioner
  2.0.91.1
GITHUB_TOKEN Permissions
  Contents: read
  Metadata: read
Secret source: Actions
Prepare workflow directory
Prepare all required actions
Getting action download info
Download action repository 'actions/checkout@v3' (SHA:755da8c3cf115ac066823e79a1e1788f8940201b)
Download action repository 'actions/setup-python@v3' (SHA:98f2ad02fd48d057ee3b4d4f66525b231c3e52b6)
Download action repository 'actions/cache@v3' (SHA:9b0c1fce7a93df8e3bb8926b0d6e9d89e92f20a7)
1s
Run actions/checkout@v3
  with:
    fetch-depth: 2
    repository: dragonflydb/dragonfly
    token: ***
    ssh-strict: true
    persist-credentials: true
    clean: true
    lfs: false
    submodules: false
    set-safe-directory: true
Syncing repository: dragonflydb/dragonfly
Getting Git version info
  Working directory is '/home/runner/work/dragonfly/dragonfly'
  /usr/bin/git version
  git version 2.38.2
Temporarily overriding HOME='/home/runner/work/_temp/fa02b2a7-527e-4e01-b48c-3812a7238df3' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/dragonfly/dragonfly
Deleting the contents of '/home/runner/work/dragonfly/dragonfly'
Initializing the repository
  /usr/bin/git init /home/runner/work/dragonfly/dragonfly
  hint: Using 'master' as the name for the initial branch. This default branch name
  hint: is subject to change. To configure the initial branch name to use in all
  hint: of your new repositories, which will suppress this warning, call:
  hint: 
  hint: 	git config --global init.defaultBranch <name>
  hint: 
  hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
  hint: 'development'. The just-created branch can be renamed via this command:
  hint: 
  hint: 	git branch -m <name>
  Initialized empty Git repository in /home/runner/work/dragonfly/dragonfly/.git/
  /usr/bin/git remote add origin https://github.com/dragonflydb/dragonfly
Disabling automatic garbage collection
  /usr/bin/git config --local gc.auto 0
Setting up auth
  /usr/bin/git config --local --name-only --get-regexp core\.sshCommand
  /usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
  /usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
  /usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
  /usr/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic ***
Fetching the repository
  /usr/bin/git -c protocol.version=2 fetch --no-tags --prune --progress --no-recurse-submodules --depth=2 origin +70327f9f7400e781a6fc74d4b2f84101ec7dbd15:refs/remotes/pull/570/merge
  remote: Enumerating objects: 388, done.        
  remote: Counting objects:   0% (1/388)        
  remote: Counting objects:   1% (4/388)        
  remote: Counting objects:   2% (8/388)        
  remote: Counting objects:   3% (12/388)        
  remote: Counting objects:   4% (16/388)        
  remote: Counting objects:   5% (20/388)        
  remote: Counting objects:   6% (24/388)        
  remote: Counting objects:   7% (28/388)        
  remote: Counting objects:   8% (32/388)        
  remote: Counting objects:   9% (35/388)        
  remote: Counting objects:  10% (39/388)        
  remote: Counting objects:  11% (43/388)        
  remote: Counting objects:  12% (47/388)        
  remote: Counting objects:  13% (51/388)        
  remote: Counting objects:  14% (55/388)        
  remote: Counting objects:  15% (59/388)        
  remote: Counting objects:  16% (63/388)        
  remote: Counting objects:  17% (66/388)        
  remote: Counting objects:  18% (70/388)        
  remote: Counting objects:  19% (74/388)        
  remote: Counting objects:  20% (78/388)        
  remote: Counting objects:  21% (82/388)        
  remote: Counting objects:  22% (86/388)        
  remote: Counting objects:  23% (90/388)        
  remote: Counting objects:  24% (94/388)        
  remote: Counting objects:  25% (97/388)        
  remote: Counting objects:  26% (101/388)        
  remote: Counting objects:  27% (105/388)        
  remote: Counting objects:  28% (109/388)        
  remote: Counting objects:  29% (113/388)        
  remote: Counting objects:  30% (117/388)        
  remote: Counting objects:  31% (121/388)        
  remote: Counting objects:  32% (125/388)        
  remote: Counting objects:  33% (129/388)        
  remote: Counting objects:  34% (132/388)        
  remote: Counting objects:  35% (136/388)        
  remote: Counting objects:  36% (140/388)        
  remote: Counting objects:  37% (144/388)        
  remote: Counting objects:  38% (148/388)        
  remote: Counting objects:  39% (152/388)        
  remote: Counting objects:  40% (156/388)        
  remote: Counting objects:  41% (160/388)        
  remote: Counting objects:  42% (163/388)        
  remote: Counting objects:  43% (167/388)        
  remote: Counting objects:  44% (171/388)        
  remote: Counting objects:  45% (175/388)        
  remote: Counting objects:  46% (179/388)        
  remote: Counting objects:  47% (183/388)        
  remote: Counting objects:  48% (187/388)        
  remote: Counting objects:  49% (191/388)        
0s
5s
0s
0s
0s
0s
0s
1s
-'From 224ff063ce5e6846e9784daec8ba1fd5ad1bbf17 Mon Sep 17 00:00:00 2001
From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
 <109656750+zakwarlord7@users.noreply.github.com>
Date: Fri, 9 Dec 2022 22:54:41 -0600
Subject: [PATCH] Update openshift.yml

Signed-off-by: ZACHRY T WOODzachryiixixiiwood@gmail.com <109656750+zakwarlord7@users.noreply.github.com>
---
 .github/workflows/openshift.yml | 206 ++++++++++++++++++++++++++++++--
 1 file changed, 197 insertions(+), 9 deletions(-)

diff --git a/.github/workflows/openshift.yml b/.github/workflows/openshift.yml
index 43d0466..14998bc 100644
--- a/.github/workflows/openshift.yml
+++ b/.github/workflows/openshift.yml
@@ -1,7 +1,104 @@
-BEGIN :
+# ## :### ::BEGIN :Run::starts-on :-on :
+-on :
+#!/usr/bin/bash  env :
+GLOW7 :','' '"'.'Docx"'
 
-GLOW7 
-: 
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+Business Checking For 24-hour account information, sign on to                                                                        
+pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued                                                                        
+Activity Detail                                                                        
+Deposits and Other Additions                                                                        
+ACH Additions                                                                        
+Date posted                                                                        
+27-Apr                                                                        
+Checks and Other Deductions                                                                        
+Deductions                                                                        
+Date posted                                                                        
+26-Apr                                                                        
+Service Charges and Fees                                                                        
+Date posted                                                                        
+27-Apr                                                                        
+Detail of Services Used During Current Period                                                                        
+Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,                                                                        
+Description                                                                        
+Account Maintenance Charge                                                                        
+Total For Services Used This Peiiod                                                                        
+Total Service Charge
+                                                                                                                                 
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                      Q4 2020                              Q4  2019                                                                                
+Cat. No. 11320B                                                                                                                                        Income Statement                                                                                                                                 
+Form 1040 (2021)                                                                                                                                        USD in "000'"s                                                                                                                                
+Reported Normalized and Operating Income/Expense Supplemental Section Repayments for Long Term Debt                        Dec. 31, 2020                        Dec. 31, 2019                                                                                
+Total Revenue as Reported, Supplemental                                                                                                                     Costs and expenses:                                                                                                                                
+Total Operating Profit/Loss as Reported, Supplemental                                                                                                    182527                        161857                                                                                
+Reported Effective Tax Rate                                                                                                                                        Research and development                                                                                                                                
+Reported Normalized Income                                                                                                                                        84732                         71896                                                                                
+Reported Normalized Operating Profit                                                                                                                             27573                         26018                                                                                
+Other Adjustments to Net Income Available to Common Stockholders                                                                                17946                         18464                                                                                
+Discontinued Operations                                                                                                                                               11052                         9551                                                                                
+Basic EPS                                                                                                                                                                   0                               1697                                                                                
+Basic EPS from Continuing Operations                                                                                                                            141303                       127626                                                                                
+Basic EPS from Discontinued Operations                                                                                                                         41224                        34231                                                                                
+Diluted EPS                                                                                                                                                                 6858000000                        5394                                                                                
+Diluted EPS from Continuing Operations                                              total                                                                    Net income                        22677000000                        19289000000                                                                                
+*include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                                                                                
+Basic Weighted Average Shares Outstanding                                                                                                                                                         22677000000                        19289000000                                                                                
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                
+Returned for Signature                                                                                                                                                                                                
+Date.______________09/01/2022                                                                                        
+For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                                                                                        
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+important information                                                                                                                                                                                                                                                                               
+Reviewing Your Statement                                                                        
+Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
+Balancing Your Account Update Your Account Register                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        '
 #This_Repository :WORKSFLOW :'@"worksflow_call-on: dispatch" :-on :On :''
 'use action.js/runners.ios'@crates.u-with :rake.io'"'' that are not certified by GitHub.
 # They are provided by a third-party and are governed by
@@ -507,12 +604,103 @@ $112.20 	$30.67 	$27.99 	$10.13 	$9.87 	$15.33 	$10.12
 $113.88 	$31.15 	$28.44 	$10.21 	$9.96 	$15.49 	$10.20 							
 $112.20 	$30.69 	$27.99 	$10.13 	$9.87 	$15.35 	$10.12 							
 667650000	662664000	665758000	681768000	686465000	688804000	692741000							
-677674000	672493000	676519000	687024000	692267000	695193000	698199000							
-CLI Design Template													
-													
-! Do not edit this template directly. Please make a copy ! 													
- 													
-													
+677674000	672493000	676519000	687024000	692267000	695193000	698199000
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+Business Checking For 24-hour account information, sign on to                                                                        
+pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued                                                                        
+Activity Detail                                                                        
+Deposits and Other Additions                                                                        
+ACH Additions                                                                        
+Date posted                                                                        
+27-Apr                                                                        
+Checks and Other Deductions                                                                        
+Deductions                                                                        
+Date posted                                                                        
+26-Apr                                                                        
+Service Charges and Fees                                                                        
+Date posted                                                                        
+27-Apr                                                                        
+Detail of Services Used During Current Period                                                                        
+Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,                                                                        
+Description                                                                        
+Account Maintenance Charge                                                                        
+Total For Services Used This Peiiod                                                                        
+Total Service Charge
+                                                                                                                                 
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                      Q4 2020                              Q4  2019                                                                                
+Cat. No. 11320B                                                                                                                                        Income Statement                                                                                                                                 
+Form 1040 (2021)                                                                                                                                        USD in "000'"s                                                                                                                                
+Reported Normalized and Operating Income/Expense Supplemental Section Repayments for Long Term Debt                        Dec. 31, 2020                        Dec. 31, 2019                                                                                
+Total Revenue as Reported, Supplemental                                                                                                                     Costs and expenses:                                                                                                                                
+Total Operating Profit/Loss as Reported, Supplemental                                                                                                    182527                        161857                                                                                
+Reported Effective Tax Rate                                                                                                                                        Research and development                                                                                                                                
+Reported Normalized Income                                                                                                                                        84732                         71896                                                                                
+Reported Normalized Operating Profit                                                                                                                             27573                         26018                                                                                
+Other Adjustments to Net Income Available to Common Stockholders                                                                                17946                         18464                                                                                
+Discontinued Operations                                                                                                                                               11052                         9551                                                                                
+Basic EPS                                                                                                                                                                   0                               1697                                                                                
+Basic EPS from Continuing Operations                                                                                                                            141303                       127626                                                                                
+Basic EPS from Discontinued Operations                                                                                                                         41224                        34231                                                                                
+Diluted EPS                                                                                                                                                                 6858000000                        5394                                                                                
+Diluted EPS from Continuing Operations                                              total                                                                    Net income                        22677000000                        19289000000                                                                                
+*include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                                                                                
+Basic Weighted Average Shares Outstanding                                                                                                                                                         22677000000                        19289000000                                                                                
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                
+Returned for Signature                                                                                                                                                                                                
+Date.______________09/01/2022                                                                                        
+For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                                                                                        
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+important information                                                                                                                                                                                                                                                                               
+Reviewing Your Statement                                                                        
+Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
+Balancing Your Account Update Your Account Register                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
 													
 													
 													-
title: Migrating to the Container registry from the Docker registry
intro: '{% ifversion docker-ghcr-enterprise-migration %}An enterprise owner can{% else %}{% data variables.product.company_short %} will{% endif %} migrate Docker images previously stored in the Docker registry on {% data variables.location.product_location %} to the {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
  feature: docker-ghcr-enterprise-migration
shortTitle: Migration to Container registry
topics:
  - Containers
  - Docker
  - Migration
---

{% data reusables.package_registry.container-registry-ghes-beta %}

## About the {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} For more information, see "[Working with the {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

## About migration from the Docker registry

{% data reusables.package_registry.container-registry-replaces-docker-registry %} If you've stored Docker images in the Docker registry, {% ifversion docker-ghcr-enterprise-migration %}an enterprise owner{% else %}{% data variables.product.company_short %}{% endif %} will gradually migrate the images to the {% data variables.product.prodname_container_registry %}. No action is required on your part.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Note**: {% data reusables.package_registry.container-registry-ghes-migration-availability %} For more information about finding the version of {% data variables.product.product_name %} that you use, see "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."

{% endnote %}

{% endif %}

After a Docker image has been migrated to the {% data variables.product.prodname_container_registry %}, you'll see the following changes to the details for the package.

- The icon will be the {% data variables.product.prodname_container_registry %} logo instead of the Docker logo.
- The domain in the pull URL will be {% data variables.product.prodname_container_registry_namespace %} instead of {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Screenshot of a Docker image migrated to the {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

After migration, you'll no longer be able to use the GraphQL API to query for packages with a `PackageType` of "DOCKER". Instead, you can use the REST API to query for packages with a `package_type` of "container". For more information, see "[Packages](/rest/reference/packages)" in the REST API documentation.

## About billing for {% data variables.product.prodname_container_registry %}

For more information about billing for the {% data variables.product.prodname_container_registry %}, see "[About billing for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Further reading

- "[Migrating your enterprise to the {% data variables.product.prodname_container_registry %} from the Docker registry](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)"

{% endif %}
