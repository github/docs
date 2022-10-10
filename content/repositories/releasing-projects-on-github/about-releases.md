---
title: About releases
intro: 'You can create a release to package software, along with release notes and links to binary files, for other people to use.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About releases

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
![An overview of releases](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
{% else %}
![An overview of releases](/assets/images/help/releases/releases-overview.png)
{% endif %}

Releases are deployable software iterations you can package and make available for a wider audience to download and use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[Viewing your repository's releases and tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)."

You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template. For more information, see "[Automatically generated release notes](/repositories/releasing-projects-on-github/automatically-generated-release-notes)."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.6 %}
When viewing the details for a release, the creation date for each release asset is shown next to the release asset.
{% endif %}

{% ifversion fpt or ghec %}
People with admin permissions to a repository can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

If a release fixes a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."

You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[Releases](/rest/reference/releases)."

{% ifversion fpt or ghec %}
## Storage and bandwidth quotas

 Each file included in a release must be under {% data variables.large_files.max_file_size %}. There is no limit on the total size of a release, nor bandwidth usage.
Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
02100021
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
documentation Welcome! This is the official documentation for Python 3.10.7hon Setup and Usage how to use Python on different platforms Python #37
 Merged
zakwarlord7 merged 1 commit into paradice from 071921891-4720416547-6400-7102 6 days ago
 Merged
documentation Welcome! This is the official documentation for Python 3.10.7hon Setup and Usage how to use Python on different platforms Python
#37
zakwarlord7 merged 1 commit into paradice from 071921891-4720416547-6400-7102 6 days ago
+547 −117 
 Conversation 0
 Commits 1
 Checks 0
 Files changed 2
Conversation
zakwarlord7
Owner
zakwarlord7 commented 6 days ago • 
his Product Contains Sensitive Taxpayer Data
Request Date: 08-02-2022 Response Date: 08-02-2022 Tracking Number: 102398244811
Account Transcript
FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020
TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725
ZACH T WOO
3050 R
--- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---
ACCOUNT BALANCE: 0.00
ACCRUED INTEREST: 0.00 AS OF: Mar. 28, 2022 ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022
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

@zakwarlord7
Update autoupdate
e553f78
@zakwarlord7 zakwarlord7 merged commit 02b7537 into paradice 6 days ago
@zakwarlord7 zakwarlord7 deleted the 071921891-4720416547-6400-7102 branch 6 days ago
@zakwarlord7 zakwarlord7 restored the 071921891-4720416547-6400-7102 branch 6 days ago
@zakwarlord7
Owner
Author
zakwarlord7 commented 6 days ago • 
"BEGIN":"#!/usr/bin/bash/zzpowwer/Bitore.sig/Tests'@ZWshell"
From e553f78 Mon Sep 17 00:00:00 2001
From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
109656750+zakwarlord7@users.noreply.github.com
Date: Tue, 4 Oct 2022 09:52:33 -0500
Subject: [PATCH]

Update :Automate :autoupdate :
#$mk.dir:=:$RAKEFILE.I.U/.mkdir==:
.github/workflows/deno.yml | 117 --------
WORKSFLOW | 547 +++++++++++++++++++++++++++++++++++++
2 files changed, 547 insertions(+), 117 deletions(-)
delete mode 100644 .github/workflows/deno.yml
create mode 100644 WORKSFLOW

diff --git a/.github/workflows/deno.yml b/.github/workflows/deno.yml
deleted file mode 100644
index a06af47..0000000
--- a/.github/workflows/deno.yml
+++ /dev/null
@@ -1,117 +0,0 @@
-# This workflow uses actions that are not certified by GitHub.
-# They are provided by a third-party and are governed by
-# separate terms of service, privacy policy, and support
-# documentation.
-# This workflow will install Deno then run Deno lint and test.
-# For more information see: https://github.com/denoland/setup-deno
-name: Deno
-on:

push:
branches: ["paradice"]
pull_request:
branches: ["paradice"]
-permissions:

contents: read
-jobs:

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
 - name: Run eslint
   run: deno.xml rendeerer
   <?xml version="1.0" encoding="us-ascii"?>
   <!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}-->his Product Contains Sensitive Taxpayer Data  
Request Date: 08-02-2022 Response Date: 08-02-2022 Tracking Number: 102398244811
Account Transcript
FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020
TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725
ZACH T WOO
3050 R
--- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---
ACCOUNT BALANCE: 0.00
ACCRUED INTEREST: 0.00 AS OF: Mar. 28, 2022 ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022
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
Based on facts as set forth in.65516550
-The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
-EMPLOYER IDENTIFICATION NUMBER: 61-1767920[DRAFT FORM OF TAX OPINION]ALPHABETZACHRY T WOOD5324 BRADFORD DRDALLAS TX 75235-8315ORIGINAL REPORTIncome, Rents, & RoyaltyINCOME STATEMENT61-176792088-1303491GOOGL_income-statement_Quarterly_As_Originally_ReportedTTMQ4 2022Q3 2022Q2 2022Q1 2022Q4 2021Q3 2021Q2 2021Q3 2021Gross Profit-2178236364-9195472727-16212709091-23229945455-30247181818-37264418182-44281654545-5129889090937497000000Total Revenue as Reported, Supplemental-1286309091-13385163636-25484018182-37582872727-49681727273-61780581818-73879436364-85978290909651180000001957800000-9776581818-21510963636-33245345455-44979727273-56714109091-68448490909-8018287272765118000000Other RevenueCost of Revenue-891927272.7418969090992713090911435292727319434545455245161636362959778181834679400000-27621000000Cost of Goods and Services-891927272.7418969090992713090911435292727319434545455245161636362959778181834679400000-27621000000Operating Income/Expenses-3640563636-882445454.5187567272746337909097391909091101500272731290814545515666263636-16466000000Selling, General and Administrative Expenses-1552200000-28945454.55149430909130175636364540818182606407272775873272739110581818-8772000000General and Administrative Expenses-544945454.523200000591345454.511594909091727636364229578181828639272733432072727-3256000000Selling and Marketing Expenses-1007254545-52145454.55902963636.418580727272813181818376829090947234000005678509091-5516000000Research and Development Expenses-2088363636-853500000381363636.416162272732851090909408595454553208181826555681818-7694000000Total Operating Profit/Loss-5818800000-10077918182-14337036364-18596154545-22855272727-27114390909-31373509091-3563262727321031000000Non-Operating Income/Expenses, Total-1369181818-2079000000-2788818182-3498636364-4208454545-4918272727-5628090909-63379090912033000000Total Net Finance Income/Expense464490909.1462390909.1460290909.1458190909.1456090909.1453990909.1451890909.1449790909.1310000000Net Interest Income/Expense464490909.1462390909.1460290909.1458190909.1456090909.1453990909.1451890909.1449790909.1310000000Interest Expense Net of Capitalized Interest48654545.456990000091145454.55112390909.1133636363.6154881818.2176127272.7197372727.3-77000000Interest Income415836363.6392490909.1369145454.5345800000322454545.5299109090.9275763636.4252418181.8387000000Net Investment Income-2096781818-2909109091-3721436364-4533763636-5346090909-6158418182-6970745455-77830727272207000000Gain/Loss on Investments and Other Financial Instruments-2243490909-3068572727-3893654545-4718736364-5543818182-6368900000-7193981818-80190636362158000000Income from Associates, Joint Ventures and Other Participating Interests99054545.4592609090.9186163636.3679718181.8273272727.2766827272.7360381818.1853936363.64188000000Gain/Loss on Foreign Exchange47654545.4566854545.4586054545.45105254545.5124454545.5143654545.5162854545.5182054545.5-139000000Irregular Income/Expenses00000Other Irregular Income/Expenses00000Other Income/Expense, Non-Operating263109090.9367718181.8472327272.7576936363.6681545454.5786154545.5890763636.4995372727.3-484000000Pretax Income-7187981818-12156918182-17125854545-22094790909-27063727273-32032663636-37001600000-4197053636423064000000Provision for Income Tax16952181822565754545343629090943068272735177363636604790000069184363647788972727-4128000000Net Income from Continuing Operations-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income after Extraordinary Items and Discontinued Operations-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income after Non-Controlling/Minority Interests-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income Available to Common Stockholders-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Diluted Net Income Available to Common Stockholders-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Income Statement Supplemental SectionReported Normalized and Operating Income/Expense Supplemental SectionTotal Revenue as Reported, Supplemental-1286309091-13385163636-25484018182-37582872727-49681727273-61780581818-73879436364-8597829090965118000000Total Operating Profit/Loss as Reported, Supplemental-5818800000-10077918182-14337036364-18596154545-22855272727-27114390909-31373509091-3563262727321031000000Reported Effective Tax Rate1.1620.14366666670.13316666670.12266666670.10633333330.086833333330.179Reported Normalized IncomeReported Normalized Operating ProfitOther Adjustments to Net Income Available to Common StockholdersDiscontinued OperationsBasic EPS-8.742909091-14.93854545-21.13418182-27.32981818-33.52545455-39.72109091-45.91672727-52.1123636428.44Basic EPS from Continuing Operations-8.752545455-14.94781818-21.14309091-27.33836364-33.53363636-39.72890909-45.92418182-52.1194545528.44Basic EPS from Discontinued OperationsDiluted EPS-8.505636364-14.599-20.69236364-26.78572727-32.87909091-38.97245455-45.06581818-51.1591818227.99Diluted EPS from Continuing Operations-8.515636364-14.609-20.70236364-26.79572727-32.88909091-38.98245455-45.07581818-51.1691818227.99Diluted EPS from Discontinued OperationsBasic Weighted Average Shares Outstanding694313545.5697258863.6700204181.8703149500706094818.2709040136.4711985454.5714930772.7665758000Diluted Weighted Average Shares Outstanding698675981.8701033009.1703390036.4705747063.6708104090.9710461118.2712818145.5715175172.7676519000Reported Normalized Diluted EPSBasic EPS-8.742909091-14.93854545-21.13418182-27.32981818-33.52545455-39.72109091-45.91672727-52.1123636428.44Diluted EPS-8.505636364-14.599-20.69236364-26.78572727-32.87909091-38.97245455-45.06581818-51.1591818227.99Basic WASO694313545.5697258863.6700204181.8703149500706094818.2709040136.4711985454.5714930772.7665758000Diluted WASO698675981.8701033009.1703390036.4705747063.6708104090.9710461118.2712818145.5715175172.7676519000Fiscal year end September 28th., 2022. | USD]()
-
-<link:linkbase xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd" xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xbrli="http://www.xbrl.org/2003/instance">

<link:roleRef roleURI="http://www.xbrl.org/2009/role/netLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/net-2009-12-16.xsd#netLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedTotalLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedTotalLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedNetLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedNetLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedTerseLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedTerseLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedPeriodEndLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedPeriodEndLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedPeriodStartLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedPeriodStartLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedLabel" />
<link:roleRef roleURI="http://zendesk.com./role/DocumentAndEntityInformation" xlink:type="simple" xlink:href="zen-20220919.xsd#DocumentAndEntityInformation" />
<link:presentationLink xlink:type="extended" xlink:role="http://zendesk.com./role/DocumentAndEntityInformation">
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_CoverAbstract" xlink:label="CoverAbstract" xlink:title="CoverAbstract" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentType" xlink:label="DocumentType" xlink:title="DocumentType" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentType" xlink:title="presentation: CoverAbstract to DocumentType" order="0.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_AmendmentFlag" xlink:label="AmendmentFlag" xlink:title="AmendmentFlag" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="AmendmentFlag" xlink:title="presentation: CoverAbstract to AmendmentFlag" order="1.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentPeriodEndDate" xlink:label="DocumentPeriodEndDate" xlink:title="DocumentPeriodEndDate" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentPeriodEndDate" xlink:title="presentation: CoverAbstract to DocumentPeriodEndDate" order="2.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentFiscalYearFocus" xlink:label="DocumentFiscalYearFocus" xlink:title="DocumentFiscalYearFocus" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentFiscalYearFocus" xlink:title="presentation: CoverAbstract to DocumentFiscalYearFocus" order="3.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentFiscalPeriodFocus" xlink:label="DocumentFiscalPeriodFocus" xlink:title="DocumentFiscalPeriodFocus" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentFiscalPeriodFocus" xlink:title="presentation: CoverAbstract to DocumentFiscalPeriodFocus" order="4.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityFileNumber" xlink:label="EntityFileNumber" xlink:title="EntityFileNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityFileNumber" xlink:title="presentation: CoverAbstract to EntityFileNumber" order="5.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityRegistrantName" xlink:label="EntityRegistrantName" xlink:title="EntityRegistrantName" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityRegistrantName" xlink:title="presentation: CoverAbstract to EntityRegistrantName" order="6.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityCentralIndexKey" xlink:label="EntityCentralIndexKey" xlink:title="EntityCentralIndexKey" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityCentralIndexKey" xlink:title="presentation: CoverAbstract to EntityCentralIndexKey" order="7.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityIncorporationStateCountryCode" xlink:label="EntityIncorporationStateCountryCode" xlink:title="EntityIncorporationStateCountryCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityIncorporationStateCountryCode" xlink:title="presentation: CoverAbstract to EntityIncorporationStateCountryCode" order="8.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityTaxIdentificationNumber" xlink:label="EntityTaxIdentificationNumber" xlink:title="EntityTaxIdentificationNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityTaxIdentificationNumber" xlink:title="presentation: CoverAbstract to EntityTaxIdentificationNumber" order="9.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine1" xlink:label="EntityAddressAddressLine1" xlink:title="EntityAddressAddressLine1" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine1" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine1" order="10.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine2" xlink:label="EntityAddressAddressLine2" xlink:title="EntityAddressAddressLine2" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine2" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine2" order="11.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine3" xlink:label="EntityAddressAddressLine3" xlink:title="EntityAddressAddressLine3" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine3" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine3" order="12.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressCityOrTown" xlink:label="EntityAddressCityOrTown" xlink:title="EntityAddressCityOrTown" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressCityOrTown" xlink:title="presentation: CoverAbstract to EntityAddressCityOrTown" order="13.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressStateOrProvince" xlink:label="EntityAddressStateOrProvince" xlink:title="EntityAddressStateOrProvince" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressStateOrProvince" xlink:title="presentation: CoverAbstract to EntityAddressStateOrProvince" order="14.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressCountry" xlink:label="EntityAddressCountry" xlink:title="EntityAddressCountry" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressCountry" xlink:title="presentation: CoverAbstract to EntityAddressCountry" order="15.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressPostalZipCode" xlink:label="EntityAddressPostalZipCode" xlink:title="EntityAddressPostalZipCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressPostalZipCode" xlink:title="presentation: CoverAbstract to EntityAddressPostalZipCode" order="16.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_CityAreaCode" xlink:label="CityAreaCode" xlink:title="CityAreaCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="CityAreaCode" xlink:title="presentation: CoverAbstract to CityAreaCode" order="17.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_LocalPhoneNumber" xlink:label="LocalPhoneNumber" xlink:title="LocalPhoneNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="LocalPhoneNumber" xlink:title="presentation: CoverAbstract to LocalPhoneNumber" order="18.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_NoTradingSymbolFlag" xlink:label="NoTradingSymbolFlag" xlink:title="NoTradingSymbolFlag" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="NoTradingSymbolFlag" xlink:title="presentation: CoverAbstract to NoTradingSymbolFlag" order="19.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityEmergingGrowthCompany" xlink:label="EntityEmergingGrowthCompany" xlink:title="EntityEmergingGrowthCompany" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityEmergingGrowthCompany" xlink:title="presentation: CoverAbstract to EntityEmergingGrowthCompany" order="20.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_WrittenCommunications" xlink:label="WrittenCommunications" xlink:title="WrittenCommunications" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="WrittenCommunications" xlink:title="presentation: CoverAbstract to WrittenCommunications" order="21.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_SolicitingMaterial" xlink:label="SolicitingMaterial" xlink:title="SolicitingMaterial" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="SolicitingMaterial" xlink:title="presentation: CoverAbstract to SolicitingMaterial" order="22.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_PreCommencementTenderOffer" xlink:label="PreCommencementTenderOffer" xlink:title="PreCommencementTenderOffer" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="PreCommencementTenderOffer" xlink:title="presentation: CoverAbstract to PreCommencementTenderOffer" order="23.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_PreCommencementIssuerTenderOffer" xlink:label="PreCommencementIssuerTenderOffer" xlink:title="PreCommencementIssuerTenderOffer" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="PreCommencementIssuerTenderOffer" xlink:title="presentation: CoverAbstract to PreCommencementIssuerTenderOffer" order="24.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_Security12bTitle" xlink:label="Security12bTitle" xlink:title="Security12bTitle" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="Security12bTitle" xlink:title="presentation: CoverAbstract to Security12bTitle" order="25.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_TradingSymbol" xlink:label="TradingSymbol" xlink:title="TradingSymbol" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="TradingSymbol" xlink:title="presentation: CoverAbstract to TradingSymbol" order="26.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_SecurityExchangeName" xlink:label="SecurityExchangeName" xlink:title="SecurityExchangeName" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="SecurityExchangeName" xlink:title="presentation: CoverAbstract to SecurityExchangeName" order="27.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
</link:presentationLink>
-</link:linkbase>
 - name: Run tests
   run: deno test -A --unstable
diff --git a/WORKSFLOW b/WORKSFLOW
new file mode 100644
index 0000000..371e3b7
--- /dev/null
+++ b/WORKSFLOW
@@ -0,0 +1,547 @@
+Mountain View, C.A. 94043
+Taxable Maritial Status: Single
+Exemptions/Allowances
+TX: 28
+Federal 941 Deposit Report
+ADP
+Report Range5/4/2022 - 6/4/2022 Local ID:
+EIN: 63-3441725State ID: 633441725
+Employee NAumboeurn:t3
+Description 5/4/2022 - 6/4/2022
+Payment Amount (Total) $9,246,754,678,763.00 Display All
+1. Social Security (Employee + Employer) $26,661.80
+2. Medicare (Employee + Employer) $861,193,422,444.20 Hourly
+3. Federal Income Tax $8,385,561,229,657.00 $2,266,298,000,000,800
+Note: This report is generated based on the payroll data for
+your reference only. Please contact IRS office for special
+cases such as late payment, previous overpayment, penalty
+and others.
+Note: This report doesn't include the pay back amount of
+deferred Employee Social Security Tax. Commission
+Employer Customized Report
+ADP
+Report Range5/4/2022 - 6/4/2022 88-1656496state ID: 633441725 State: All Local ID: 00037305581 $2,267,700.00
+EIN:
+Customized Report Amount
+Employee Payment Report
+ADP
+Employee Number: 3
+Description
+Wages, Tips and Other Compensation $22,662,983,361,013.70 Report Range: Tips
+Taxable SS Wages $215,014.49
+Name:
+SSN: $0.00
+Taxable SS Tips $0 Payment Summary
+Taxable Medicare Wages $22,662,983,361,013.70 Salary Vacation hourly OT
+Advanced EIC Payment $0.00 $3,361,013.70
+Federal Income Tax Withheld $8,385,561,229,657 Bonus $0.00 $0.00
+Employee SS Tax Withheld $13,330.90 $0.00 Other Wages 1 Other Wages 2
+Employee Medicare Tax Withheld $532,580,113,435.53 Total $0.00 $0.00
+State Income Tax Withheld $0.00 $22,662,983,361,013.70
+Local Income Tax Withheld
+Customized Employer Tax Report $0.00 Deduction Summary
+Description Amount Health Insurance
+Employer SS Tax
+Employer Medicare Tax $13,330.90 $0.00
+Federal Unemployment Tax $328,613,309,008.67 Tax Summary
+State Unemployment Tax $441.70 Federal Tax Total Tax
+Customized Deduction Report $840 $8,385,561,229,657@3,330.90 Local Tax
+Health Insurance $0.00
+401K $0.00 Advanced EIC Payment $8,918,141,356,423.43
+$0.00 $0.00 Total
+401K
+$0.00 $0.00
+Social Security Tax Medicare TaxState Tax
+$532,580,113,050)
+3/6/2022 at 6:37 PM
+Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
+GOOGL_income�statement_Quarterly_As_Originally_Reported 24,934,000,000 25,539,000,000 37,497,000,000 31,211,000,000 30,818,000,000
+24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
+Cash Flow from Operating Activities, Indirect 24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
+Net Cash Flow from Continuing Operating Activities, Indirect 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000
+Cash Generated from Operating Activities 6,517,000,000 3,797,000,000 4,236,000,000 2,592,000,000 5,748,000,000
+Income/Loss before Non-Cash Adjustment 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
+Total Adjustments for Non-Cash Items 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
+Depreciation, Amortization and Depletion, Non-Cash
+Adjustment 3,215,000,000 3,085,000,000 2,730,000,000 2,525,000,000 3,539,000,000
+Depreciation and Amortization, Non-Cash Adjustment 224,000,000 219,000,000 215,000,000 228,000,000 186,000,000
+Depreciation, Non-Cash Adjustment 3,954,000,000 3,874,000,000 3,803,000,000 3,745,000,000 3,223,000,000
+Amortization, Non-Cash Adjustment 1,616,000,000 -1,287,000,000 379,000,000 1,100,000,000 1,670,000,000
+Stock-Based Compensation, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
+Taxes, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
+Investment Income/Loss, Non-Cash Adjustment -14,000,000 64,000,000 -8,000,000 -255,000,000 392,000,000
+Gain/Loss on Financial Instruments, Non-Cash Adjustment -2,225,000,000 2,806,000,000 -871,000,000 -1,233,000,000 1,702,000,000
+Other Non-Cash Items -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
+Changes in Operating Capital -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
+Change in Trade and Other Receivables -399,000,000 -1,255,000,000 -199,000,000 7,000,000 -738,000,000
+Change in Trade/Accounts Receivable 6,994,000,000 3,157,000,000 4,074,000,000 -4,956,000,000 6,938,000,000
+Change in Other Current Assets 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
+Change in Payables and Accrued Expenses 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
+Change in Trade and Other Payables 5,837,000,000 2,919,000,000 4,204,000,000 -3,974,000,000 5,975,000,000
+Change in Trade/Accounts Payable 368,000,000 272,000,000 -3,000,000 137,000,000 207,000,000
+Change in Accrued Expenses -3,369,000,000 3,041,000,000 -1,082,000,000 785,000,000 740,000,000
+Change in Deferred Assets/Liabilities
+Change in Other Operating Capital
+-11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
+Change in Prepayments and Deposits -11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
+Cash Flow from Investing Activities
+Cash Flow from Continuing Investing Activities -6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
+-6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
+Purchase/Sale and Disposal of Property, Plant and Equipment,
+Net
+Purchase of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
+Sale and Disposal of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
+Purchase/Sale of Business, Net -4,348,000,000 -3,360,000,000 -3,293,000,000 2,195,000,000 -1,375,000,000
+Purchase/Acquisition of Business -40,860,000,000 -35,153,000,000 -24,949,000,000 -37,072,000,000 -36,955,000,000
+Purchase/Sale of Investments, Net
+Purchase of Investments 36,512,000,000 31,793,000,000 21,656,000,000 39,267,000,000 35,580,000,000
+100,000,000 388,000,000 23,000,000 30,000,000 -57,000,000
+Sale of Investments
+Other Investing Cash Flow -15,254,000,000
+Purchase/Sale of Other Non-Current Assets, Net -16,511,000,000 -15,254,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
+Sales of Other Non-Current Assets -16,511,000,000 -12,610,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
+Cash Flow from Financing Activities -13,473,000,000 -12,610,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
+Cash Flow from Continuing Financing Activities 13,473,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
+Issuance of/Payments for Common Stock, Net -42,000,000
+Payments for Common Stock 115,000,000 -42,000,000 -1,042,000,000 -37,000,000 -57,000,000
+Proceeds from Issuance of Common Stock 115,000,000 6,350,000,000 -1,042,000,000 -37,000,000 -57,000,000
+Issuance of/Repayments for Debt, Net 6,250,000,000 -6,392,000,000 6,699,000,000 900,000,000 0
+Issuance of/Repayments for Long Term Debt, Net 6,365,000,000 -2,602,000,000 -7,741,000,000 -937,000,000 -57,000,000
+Proceeds from Issuance of Long Term Debt
+Repayments for Long Term Debt 2,923,000,000 -2,453,000,000 -2,184,000,000 -1,647,000,000
+Proceeds from Issuance/Exercising of Stock Options/Warrants 0 300,000,000 10,000,000 3.38E+11
+Other Financing Cash Flow
+Cash and Cash Equivalents, End of Period
+Change in Cash 20,945,000,000 23,719,000,000 23,630,000,000 26,622,000,000 26,465,000,000
+Effect of Exchange Rate Changes 25930000000) 235000000000) -3,175,000,000 300,000,000 6,126,000,000
+Cash and Cash Equivalents, Beginning of Period PAGE="$USD(181000000000)".XLS BRIN="$USD(146000000000)".XLS 183,000,000 -143,000,000 210,000,000
+Cash Flow Supplemental Section $23,719,000,000,000.00 $26,622,000,000,000.00 $26,465,000,000,000.00 $20,129,000,000,000.00
+Change in Cash as Reported, Supplemental 2,774,000,000 89,000,000 -2,992,000,000 6,336,000,000
+Income Tax Paid, Supplemental 13,412,000,000 157,000,000
+ZACHRY T WOOD -4990000000
+Cash and Cash Equivalents, Beginning of Period
+Department of the Treasury
+Internal Revenue Service
+Q4 2020 Q4 2019
+Calendar Year
+Due: 04/18/2022
+Dec. 31, 2020 Dec. 31, 2019
+USD in "000'"s
+Repayments for Long Term Debt 182527 161857
+Costs and expenses:
+Cost of revenues 84732 71896
+Research and development 27573 26018
+Sales and marketing 17946 18464
+General and administrative 11052 9551
+European Commission fines 0 1697
+Total costs and expenses 141303 127626
+Income from operations 41224 34231
+Other income (expense), net 6858000000 5394
+Income before income taxes 22,677,000,000 19,289,000,000
+Provision for income taxes 22,677,000,000 19,289,000,000
+Net income 22,677,000,000 19,289,000,000
+include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock
+and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common
+stock and Class C capital stock (in dollars par share)
+include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock
+and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common
+stock and Class C capital stock (in dollars par share)
+ALPHABET 88-1303491
+5323 BRADFORD DR,
+DALLAS, TX 75235-8314
+Employee Info
+United States Department of The Treasury
+Employee Id: 9999999998 IRS No. 000000000000
+INTERNAL REVENUE SERVICE, $20,210,418.00
+PO BOX 1214, Rate Units Total YTD Taxes / Deductions Current YTD
+CHARLOTTE, NC 28201-1214 - - $70,842,745,000.00 $70,842,745,000.00 Federal Withholding $0.00 $0.00
+Earnings FICA - Social Security $0.00 $8,853.60
+Commissions FICA - Medicare $0.00 $0.00
+Employer Taxes
+FUTA $0.00 $0.00
+SUTA $0.00 $0.00
+EIN: 61-1767ID91:900037305581 SSN: 633441725
+YTD Gross Gross
+$70,842,745,000.00 $70,842,745,000.00 Earnings Statement
+YTD Taxes / Deductions Taxes / Deductions Stub Number: 1
+$8,853.60 $0.00
+YTD Net Pay Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 18-Apr-22
+$70,842,736,146.40 $70,842,745,000.00 XXX-XX-1725 Annually
+CHECK DATE CHECK NUMBER
+18-Apr-22
+**$70,842,745,000.00**
+THIS IS NOT A CHECK
+CHECK AMOUNT
+VOID
+INTERNAL REVENUE SERVICE,
+PO BOX 1214,
+CHARLOTTE, NC 28201-1214
+ZACHRY WOOD
+15 $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+For Disclosure, Privacy Act, and Paperwork Reduction Act
+Notice, see separate instructions. $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+Cat. No. 11320B $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+Form 1040 (2021) $76,033,000,000.00 20,642,000,000 18,936,000,000
+Reported Normalized and Operating Income/Expense
+Supplemental Section
+Total Revenue as Reported, Supplemental $257,637,000,000.00 75,325,000,000 65,118,000,000 61,880,000,000 55,314,000,000 56,898,000,000 46,173,000,000 38,297,000,000 41,159,000,000 46,075,000,000 40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental $78,714,000,000.00 21,885,000,000 21,031,000,000 19,361,000,000 16,437,000,000 15,651,000,000 11,213,000,000 6,383,000,000 7,977,000,000 9,266,000,000 9,177,000,000
+Reported Effective Tax Rate $0.16 0.179 0.157 0.158 0.158 0.159 0.119 0.181
+Reported Normalized Income 6,836,000,000
+Reported Normalized Operating Profit 7,977,000,000
+Other Adjustments to Net Income Available to Common
+Stockholders
+Discontinued Operations
+Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2
+Basic EPS from Continuing Operations $113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
+Basic EPS from Discontinued Operations
+Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
+Diluted EPS from Continuing Operations $112.20 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
+Diluted EPS from Discontinued Operations
+Basic Weighted Average Shares Outstanding $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
+Diluted Weighted Average Shares Outstanding $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Reported Normalized Diluted EPS 9.87
+Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2 1
+Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
+Basic WASO $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
+Diluted WASO $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Fiscal year end September 28th., 2022. | USD
+For Paperwork Reduction Act Notice, see the seperate
+Instructions.
+THIS NOTE IS LEGAL TENDER
+TENDER
+FOR ALL DEBTS, PUBLIC AND
+PRIVATE
+Current Value-on:

push:
branches: ["mainbranch]
pull_request:
branches: ["trunk"]
+permissions:

contents: read
+jobs:

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
 - name: Run eslint
   run: deno.xml rendeerer
   <?xml version="1.0" encoding="us-ascii"?>
   <!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}-->Based on facts as set forth in.65516550
+The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
+EMPLOYER IDENTIFICATION NUMBER: 61-1767920[DRAFT FORM OF TAX OPINION]ALPHABETZACHRY T WOOD5324 BRADFORD DRDALLAS TX 75235-8315ORIGINAL REPORTIncome, Rents, & RoyaltyINCOME STATEMENT61-176792088-1303491GOOGL_income-statement_Quarterly_As_Originally_ReportedTTMQ4 2022Q3 2022Q2 2022Q1 2022Q4 2021Q3 2021Q2 2021Q3 2021Gross Profit-2178236364-9195472727-16212709091-23229945455-30247181818-37264418182-44281654545-5129889090937497000000Total Revenue as Reported, Supplemental-1286309091-13385163636-25484018182-37582872727-49681727273-61780581818-73879436364-85978290909651180000001957800000-9776581818-21510963636-33245345455-44979727273-56714109091-68448490909-8018287272765118000000Other RevenueCost of Revenue-891927272.7418969090992713090911435292727319434545455245161636362959778181834679400000-27621000000Cost of Goods and Services-891927272.7418969090992713090911435292727319434545455245161636362959778181834679400000-27621000000Operating Income/Expenses-3640563636-882445454.5187567272746337909097391909091101500272731290814545515666263636-16466000000Selling, General and Administrative Expenses-1552200000-28945454.55149430909130175636364540818182606407272775873272739110581818-8772000000General and Administrative Expenses-544945454.523200000591345454.511594909091727636364229578181828639272733432072727-3256000000Selling and Marketing Expenses-1007254545-52145454.55902963636.418580727272813181818376829090947234000005678509091-5516000000Research and Development Expenses-2088363636-853500000381363636.416162272732851090909408595454553208181826555681818-7694000000Total Operating Profit/Loss-5818800000-10077918182-14337036364-18596154545-22855272727-27114390909-31373509091-3563262727321031000000Non-Operating Income/Expenses, Total-1369181818-2079000000-2788818182-3498636364-4208454545-4918272727-5628090909-63379090912033000000Total Net Finance Income/Expense464490909.1462390909.1460290909.1458190909.1456090909.1453990909.1451890909.1449790909.1310000000Net Interest Income/Expense464490909.1462390909.1460290909.1458190909.1456090909.1453990909.1451890909.1449790909.1310000000Interest Expense Net of Capitalized Interest48654545.456990000091145454.55112390909.1133636363.6154881818.2176127272.7197372727.3-77000000Interest Income415836363.6392490909.1369145454.5345800000322454545.5299109090.9275763636.4252418181.8387000000Net Investment Income-2096781818-2909109091-3721436364-4533763636-5346090909-6158418182-6970745455-77830727272207000000Gain/Loss on Investments and Other Financial Instruments-2243490909-3068572727-3893654545-4718736364-5543818182-6368900000-7193981818-80190636362158000000Income from Associates, Joint Ventures and Other Participating Interests99054545.4592609090.9186163636.3679718181.8273272727.2766827272.7360381818.1853936363.64188000000Gain/Loss on Foreign Exchange47654545.4566854545.4586054545.45105254545.5124454545.5143654545.5162854545.5182054545.5-139000000Irregular Income/Expenses00000Other Irregular Income/Expenses00000Other Income/Expense, Non-Operating263109090.9367718181.8472327272.7576936363.6681545454.5786154545.5890763636.4995372727.3-484000000Pretax Income-7187981818-12156918182-17125854545-22094790909-27063727273-32032663636-37001600000-4197053636423064000000Provision for Income Tax16952181822565754545343629090943068272735177363636604790000069184363647788972727-4128000000Net Income from Continuing Operations-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income after Extraordinary Items and Discontinued Operations-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income after Non-Controlling/Minority Interests-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income Available to Common Stockholders-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Diluted Net Income Available to Common Stockholders-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Income Statement Supplemental SectionReported Normalized and Operating Income/Expense Supplemental SectionTotal Revenue as Reported, Supplemental-1286309091-13385163636-25484018182-37582872727-49681727273-61780581818-73879436364-8597829090965118000000Total Operating Profit/Loss as Reported, Supplemental-5818800000-10077918182-14337036364-18596154545-22855272727-27114390909-31373509091-3563262727321031000000Reported Effective Tax Rate1.1620.14366666670.13316666670.12266666670.10633333330.086833333330.179Reported Normalized IncomeReported Normalized Operating ProfitOther Adjustments to Net Income Available to Common StockholdersDiscontinued OperationsBasic EPS-8.742909091-14.93854545-21.13418182-27.32981818-33.52545455-39.72109091-45.91672727-52.1123636428.44Basic EPS from Continuing Operations-8.752545455-14.94781818-21.14309091-27.33836364-33.53363636-39.72890909-45.92418182-52.1194545528.44Basic EPS from Discontinued OperationsDiluted EPS-8.505636364-14.599-20.69236364-26.78572727-32.87909091-38.97245455-45.06581818-51.1591818227.99Diluted EPS from Continuing Operations-8.515636364-14.609-20.70236364-26.79572727-32.88909091-38.98245455-45.07581818-51.1691818227.99Diluted EPS from Discontinued OperationsBasic Weighted Average Shares Outstanding694313545.5697258863.6700204181.8703149500706094818.2709040136.4711985454.5714930772.7665758000Diluted Weighted Average Shares Outstanding698675981.8701033009.1703390036.4705747063.6708104090.9710461118.2712818145.5715175172.7676519000Reported Normalized Diluted EPSBasic EPS-8.742909091-14.93854545-21.13418182-27.32981818-33.52545455-39.72109091-45.91672727-52.1123636428.44Diluted EPS-8.505636364-14.599-20.69236364-26.78572727-32.87909091-38.97245455-45.06581818-51.1591818227.99Basic WASO694313545.5697258863.6700204181.8703149500706094818.2709040136.4711985454.5714930772.7665758000Diluted WASO698675981.8701033009.1703390036.4705747063.6708104090.9710461118.2712818145.5715175172.7676519000Fiscal year end September 28th., 2022. | USD]()
+
+<link:linkbase xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd" xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xbrli="http://www.xbrl.org/2003/instance">

<link:roleRef roleURI="http://www.xbrl.org/2009/role/netLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/net-2009-12-16.xsd#netLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedTotalLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedTotalLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedNetLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedNetLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedTerseLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedTerseLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedPeriodEndLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedPeriodEndLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedPeriodStartLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedPeriodStartLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedLabel" />
<link:roleRef roleURI="http://zendesk.com./role/DocumentAndEntityInformation" xlink:type="simple" xlink:href="zen-20220919.xsd#DocumentAndEntityInformation" />
<link:presentationLink xlink:type="extended" xlink:role="http://zendesk.com./role/DocumentAndEntityInformation">
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_CoverAbstract" xlink:label="CoverAbstract" xlink:title="CoverAbstract" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentType" xlink:label="DocumentType" xlink:title="DocumentType" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentType" xlink:title="presentation: CoverAbstract to DocumentType" order="0.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_AmendmentFlag" xlink:label="AmendmentFlag" xlink:title="AmendmentFlag" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="AmendmentFlag" xlink:title="presentation: CoverAbstract to AmendmentFlag" order="1.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentPeriodEndDate" xlink:label="DocumentPeriodEndDate" xlink:title="DocumentPeriodEndDate" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentPeriodEndDate" xlink:title="presentation: CoverAbstract to DocumentPeriodEndDate" order="2.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentFiscalYearFocus" xlink:label="DocumentFiscalYearFocus" xlink:title="DocumentFiscalYearFocus" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentFiscalYearFocus" xlink:title="presentation: CoverAbstract to DocumentFiscalYearFocus" order="3.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentFiscalPeriodFocus" xlink:label="DocumentFiscalPeriodFocus" xlink:title="DocumentFiscalPeriodFocus" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentFiscalPeriodFocus" xlink:title="presentation: CoverAbstract to DocumentFiscalPeriodFocus" order="4.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityFileNumber" xlink:label="EntityFileNumber" xlink:title="EntityFileNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityFileNumber" xlink:title="presentation: CoverAbstract to EntityFileNumber" order="5.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityRegistrantName" xlink:label="EntityRegistrantName" xlink:title="EntityRegistrantName" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityRegistrantName" xlink:title="presentation: CoverAbstract to EntityRegistrantName" order="6.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityCentralIndexKey" xlink:label="EntityCentralIndexKey" xlink:title="EntityCentralIndexKey" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityCentralIndexKey" xlink:title="presentation: CoverAbstract to EntityCentralIndexKey" order="7.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityIncorporationStateCountryCode" xlink:label="EntityIncorporationStateCountryCode" xlink:title="EntityIncorporationStateCountryCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityIncorporationStateCountryCode" xlink:title="presentation: CoverAbstract to EntityIncorporationStateCountryCode" order="8.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityTaxIdentificationNumber" xlink:label="EntityTaxIdentificationNumber" xlink:title="EntityTaxIdentificationNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityTaxIdentificationNumber" xlink:title="presentation: CoverAbstract to EntityTaxIdentificationNumber" order="9.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine1" xlink:label="EntityAddressAddressLine1" xlink:title="EntityAddressAddressLine1" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine1" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine1" order="10.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine2" xlink:label="EntityAddressAddressLine2" xlink:title="EntityAddressAddressLine2" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine2" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine2" order="11.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine3" xlink:label="EntityAddressAddressLine3" xlink:title="EntityAddressAddressLine3" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine3" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine3" order="12.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressCityOrTown" xlink:label="EntityAddressCityOrTown" xlink:title="EntityAddressCityOrTown" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressCityOrTown" xlink:title="presentation: CoverAbstract to EntityAddressCityOrTown" order="13.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressStateOrProvince" xlink:label="EntityAddressStateOrProvince" xlink:title="EntityAddressStateOrProvince" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressStateOrProvince" xlink:title="presentation: CoverAbstract to EntityAddressStateOrProvince" order="14.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressCountry" xlink:label="EntityAddressCountry" xlink:title="EntityAddressCountry" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressCountry" xlink:title="presentation: CoverAbstract to EntityAddressCountry" order="15.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressPostalZipCode" xlink:label="EntityAddressPostalZipCode" xlink:title="EntityAddressPostalZipCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressPostalZipCode" xlink:title="presentation: CoverAbstract to EntityAddressPostalZipCode" order="16.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_CityAreaCode" xlink:label="CityAreaCode" xlink:title="CityAreaCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="CityAreaCode" xlink:title="presentation: CoverAbstract to CityAreaCode" order="17.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_LocalPhoneNumber" xlink:label="LocalPhoneNumber" xlink:title="LocalPhoneNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="LocalPhoneNumber" xlink:title="presentation: CoverAbstract to LocalPhoneNumber" order="18.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_NoTradingSymbolFlag" xlink:label="NoTradingSymbolFlag" xlink:title="NoTradingSymbolFlag" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="NoTradingSymbolFlag" xlink:title="presentation: CoverAbstract to NoTradingSymbolFlag" order="19.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityEmergingGrowthCompany" xlink:label="EntityEmergingGrowthCompany" xlink:title="EntityEmergingGrowthCompany" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityEmergingGrowthCompany" xlink:title="presentation: CoverAbstract to EntityEmergingGrowthCompany" order="20.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_WrittenCommunications" xlink:label="WrittenCommunications" xlink:title="WrittenCommunications" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="WrittenCommunications" xlink:title="presentation: CoverAbstract to WrittenCommunications" order="21.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_SolicitingMaterial" xlink:label="SolicitingMaterial" xlink:title="SolicitingMaterial" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="SolicitingMaterial" xlink:title="presentation: CoverAbstract to SolicitingMaterial" order="22.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_PreCommencementTenderOffer" xlink:label="PreCommencementTenderOffer" xlink:title="PreCommencementTenderOffer" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="PreCommencementTenderOffer" xlink:title="presentation: CoverAbstract to PreCommencementTenderOffer" order="23.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_PreCommencementIssuerTenderOffer" xlink:label="PreCommencementIssuerTenderOffer" xlink:title="PreCommencementIssuerTenderOffer" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="PreCommencementIssuerTenderOffer" xlink:title="presentation: CoverAbstract to PreCommencementIssuerTenderOffer" order="24.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_Security12bTitle" xlink:label="Security12bTitle" xlink:title="Security12bTitle" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="Security12bTitle" xlink:title="presentation: CoverAbstract to Security12bTitle" order="25.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_TradingSymbol" xlink:label="TradingSymbol" xlink:title="TradingSymbol" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="TradingSymbol" xlink:title="presentation: CoverAbstract to TradingSymbol" order="26.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_SecurityExchangeName" xlink:label="SecurityExchangeName" xlink:title="SecurityExchangeName" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="SecurityExchangeName" xlink:title="presentation: CoverAbstract to SecurityExchangeName" order="27.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
</link:presentationLink>
+</link:linkbase>
 - name: Run tests
   run: deno tests=: stablized
   Mountain View, C.A. 94043
+Taxable Maritial Status: Single
+Exemptions/Allowances
+TX: 28
+Federal 941 Deposit Report
+ADP
+Report Range5/4/2022 - 6/4/2022 Local ID:
+EIN: 63-3441725State ID: 633441725
+Employee NAumboeurn:t3
+Description 5/4/2022 - 6/4/2022
+Payment Amount (Total) $9,246,754,678,763.00 Display All
+1. Social Security (Employee + Employer) $26,661.80
+2. Medicare (Employee + Employer) $861,193,422,444.20 Hourly
+3. Federal Income Tax $8,385,561,229,657.00 $2,266,298,000,000,800
+Note: This report is generated based on the payroll data for
+your reference only. Please contact IRS office for special
+cases such as late payment, previous overpayment, penalty
+and others.
+Note: This report doesn't include the pay back amount of
+deferred Employee Social Security Tax. Commission
+Employer Customized Report
+ADP
+Report Range5/4/2022 - 6/4/2022 88-1656496state ID: 633441725 State: All Local ID: 00037305581 $2,267,700.00
+EIN:
+Customized Report Amount
+Employee Payment Report
+ADP
+Employee Number: 3
+Description
+Wages, Tips and Other Compensation $22,662,983,361,013.70 Report Range: Tips
+Taxable SS Wages $215,014.49
+Name:
+SSN: $0.00
+Taxable SS Tips $0 Payment Summary
+Taxable Medicare Wages $22,662,983,361,013.70 Salary Vacation hourly OT
+Advanced EIC Payment $0.00 $3,361,013.70
+Federal Income Tax Withheld $8,385,561,229,657 Bonus $0.00 $0.00
+Employee SS Tax Withheld $13,330.90 $0.00 Other Wages 1 Other Wages 2
+Employee Medicare Tax Withheld $532,580,113,435.53 Total $0.00 $0.00
+State Income Tax Withheld $0.00 $22,662,983,361,013.70
+Local Income Tax Withheld
+Customized Employer Tax Report $0.00 Deduction Summary
+Description Amount Health Insurance
+Employer SS Tax
+Employer Medicare Tax $13,330.90 $0.00
+Federal Unemployment Tax $328,613,309,008.67 Tax Summary
+State Unemployment Tax $441.70 Federal Tax Total Tax
+Customized Deduction Report $840 $8,385,561,229,657@3,330.90 Local Tax
+Health Insurance $0.00
+401K $0.00 Advanced EIC Payment $8,918,141,356,423.43
+$0.00 $0.00 Total
+401K
+$0.00 $0.00
+Social Security Tax Medicare TaxState Tax
+$532,580,113,050)
+3/6/2022 at 6:37 PM
+Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
+GOOGL_income�statement_Quarterly_As_Originally_Reported 24,934,000,000 25,539,000,000 37,497,000,000 31,211,000,000 30,818,000,000
+24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
+Cash Flow from Operating Activities, Indirect 24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
+Net Cash Flow from Continuing Operating Activities, Indirect 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000
+Cash Generated from Operating Activities 6,517,000,000 3,797,000,000 4,236,000,000 2,592,000,000 5,748,000,000
+Income/Loss before Non-Cash Adjustment 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
+Total Adjustments for Non-Cash Items 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
+Depreciation, Amortization and Depletion, Non-Cash
+Adjustment 3,215,000,000 3,085,000,000 2,730,000,000 2,525,000,000 3,539,000,000
+Depreciation and Amortization, Non-Cash Adjustment 224,000,000 219,000,000 215,000,000 228,000,000 186,000,000
+Depreciation, Non-Cash Adjustment 3,954,000,000 3,874,000,000 3,803,000,000 3,745,000,000 3,223,000,000
+Amortization, Non-Cash Adjustment 1,616,000,000 -1,287,000,000 379,000,000 1,100,000,000 1,670,000,000
+Stock-Based Compensation, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
+Taxes, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
+Investment Income/Loss, Non-Cash Adjustment -14,000,000 64,000,000 -8,000,000 -255,000,000 392,000,000
+Gain/Loss on Financial Instruments, Non-Cash Adjustment -2,225,000,000 2,806,000,000 -871,000,000 -1,233,000,000 1,702,000,000
+Other Non-Cash Items -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
+Changes in Operating Capital -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
+Change in Trade and Other Receivables -399,000,000 -1,255,000,000 -199,000,000 7,000,000 -738,000,000
+Change in Trade/Accounts Receivable 6,994,000,000 3,157,000,000 4,074,000,000 -4,956,000,000 6,938,000,000
+Change in Other Current Assets 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
+Change in Payables and Accrued Expenses 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
+Change in Trade and Other Payables 5,837,000,000 2,919,000,000 4,204,000,000 -3,974,000,000 5,975,000,000
+Change in Trade/Accounts Payable 368,000,000 272,000,000 -3,000,000 137,000,000 207,000,000
+Change in Accrued Expenses -3,369,000,000 3,041,000,000 -1,082,000,000 785,000,000 740,000,000
+Change in Deferred Assets/Liabilities
+Change in Other Operating Capital
+-11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
+Change in Prepayments and Deposits -11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
+Cash Flow from Investing Activities
+Cash Flow from Continuing Investing Activities -6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
+-6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
+Purchase/Sale and Disposal of Property, Plant and Equipment,
+Net
+Purchase of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
+Sale and Disposal of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
+Purchase/Sale of Business, Net -4,348,000,000 -3,360,000,000 -3,293,000,000 2,195,000,000 -1,375,000,000
+Purchase/Acquisition of Business -40,860,000,000 -35,153,000,000 -24,949,000,000 -37,072,000,000 -36,955,000,000
+Purchase/Sale of Investments, Net
+Purchase of Investments 36,512,000,000 31,793,000,000 21,656,000,000 39,267,000,000 35,580,000,000
+100,000,000 388,000,000 23,000,000 30,000,000 -57,000,000
+Sale of Investments
+Other Investing Cash Flow -15,254,000,000
+Purchase/Sale of Other Non-Current Assets, Net -16,511,000,000 -15,254,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
+Sales of Other Non-Current Assets -16,511,000,000 -12,610,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
+Cash Flow from Financing Activities -13,473,000,000 -12,610,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
+Cash Flow from Continuing Financing Activities 13,473,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
+Issuance of/Payments for Common Stock, Net -42,000,000
+Payments for Common Stock 115,000,000 -42,000,000 -1,042,000,000 -37,000,000 -57,000,000
+Proceeds from Issuance of Common Stock 115,000,000 6,350,000,000 -1,042,000,000 -37,000,000 -57,000,000
+Issuance of/Repayments for Debt, Net 6,250,000,000 -6,392,000,000 6,699,000,000 900,000,000 0
+Issuance of/Repayments for Long Term Debt, Net 6,365,000,000 -2,602,000,000 -7,741,000,000 -937,000,000 -57,000,000
+Proceeds from Issuance of Long Term Debt
+Repayments for Long Term Debt 2,923,000,000 -2,453,000,000 -2,184,000,000 -1,647,000,000
+Proceeds from Issuance/Exercising of Stock Options/Warrants 0 300,000,000 10,000,000 3.38E+11
+Other Financing Cash Flow
+Cash and Cash Equivalents, End of Period
+Change in Cash 20,945,000,000 23,719,000,000 23,630,000,000 26,622,000,000 26,465,000,000
+Effect of Exchange Rate Changes 25930000000) 235000000000) -3,175,000,000 300,000,000 6,126,000,000
+Cash and Cash Equivalents, Beginning of Period PAGE="$USD(181000000000)".XLS BRIN="$USD(146000000000)".XLS 183,000,000 -143,000,000 210,000,000
+Cash Flow Supplemental Section $23,719,000,000,000.00 $26,622,000,000,000.00 $26,465,000,000,000.00 $20,129,000,000,000.00
+Change in Cash as Reported, Supplemental 2,774,000,000 89,000,000 -2,992,000,000 6,336,000,000
+Income Tax Paid, Supplemental 13,412,000,000 157,000,000
+ZACHRY T WOOD -4990000000
+Cash and Cash Equivalents, Beginning of Period
+Department of the Treasury
+Internal Revenue Service
+Q4 2020 Q4 2019
+Calendar Year
+Due: 04/18/2022
+Dec. 31, 2020 Dec. 31, 2019
+USD in "000'"s
+Repayments for Long Term Debt 182527 161857
+Costs and expenses:
+Cost of revenues 84732 71896
+Research and development 27573 26018
+Sales and marketing 17946 18464
+General and administrative 11052 9551
+European Commission fines 0 1697
+Total costs and expenses 141303 127626
+Income from operations 41224 34231
+Other income (expense), net 6858000000 5394
+Income before income taxes 22,677,000,000 19,289,000,000
+Provision for income taxes 22,677,000,000 19,289,000,000
+Net income 22,677,000,000 19,289,000,000
+include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock
+and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common
+stock and Class C capital stock (in dollars par share)
+include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock
+and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common
+stock and Class C capital stock (in dollars par share)
+ALPHABET 88-1303491
+5323 BRADFORD DR,
+DALLAS, TX 75235-8314
+Employee Info
+United States Department of The Treasury
+Employee Id: 9999999998 IRS No. 000000000000
+INTERNAL REVENUE SERVICE, $20,210,418.00
+PO BOX 1214, Rate Units Total YTD Taxes / Deductions Current YTD
+CHARLOTTE, NC 28201-1214 - - $70,842,745,000.00 $70,842,745,000.00 Federal Withholding $0.00 $0.00
+Earnings FICA - Social Security $0.00 $8,853.60
+Commissions FICA - Medicare $0.00 $0.00
+Employer Taxes
+FUTA $0.00 $0.00
+SUTA $0.00 $0.00
+EIN: 61-1767ID91:900037305581 SSN: 633441725
+YTD Gross Gross
+$70,842,745,000.00 $70,842,745,000.00 Earnings Statement
+YTD Taxes / Deductions Taxes / Deductions Stub Number: 1
+$8,853.60 $0.00
+YTD Net Pay Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 18-Apr-22
+$70,842,736,146.40 $70,842,745,000.00 XXX-XX-1725 Annually
+CHECK DATE CHECK NUMBER
+18-Apr-22
+**$70,842,745,000.00**
+THIS IS NOT A CHECK
+CHECK AMOUNT
+VOID
+INTERNAL REVENUE SERVICE,
+PO BOX 1214,
+CHARLOTTE, NC 28201-1214
+ZACHRY WOOD
+15 $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+For Disclosure, Privacy Act, and Paperwork Reduction Act
+Notice, see separate instructions. $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+Cat. No. 11320B $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+Form 1040 (2021) $76,033,000,000.00 20,642,000,000 18,936,000,000
+Reported Normalized and Operating Income/Expense
+Supplemental Section
+Total Revenue as Reported, Supplemental $257,637,000,000.00 75,325,000,000 65,118,000,000 61,880,000,000 55,314,000,000 56,898,000,000 46,173,000,000 38,297,000,000 41,159,000,000 46,075,000,000 40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental $78,714,000,000.00 21,885,000,000 21,031,000,000 19,361,000,000 16,437,000,000 15,651,000,000 11,213,000,000 6,383,000,000 7,977,000,000 9,266,000,000 9,177,000,000
+Reported Effective Tax Rate $0.16 0.179 0.157 0.158 0.158 0.159 0.119 0.181
+Reported Normalized Income 6,836,000,000
+Reported Normalized Operating Profit 7,977,000,000
+Other Adjustments to Net Income Available to Common
+Stockholders
+Discontinued Operations
+Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2
+Basic EPS from Continuing Operations $113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
+Basic EPS from Discontinued Operations
+Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
+Diluted EPS from Continuing Operations $112.20 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
+Diluted EPS from Discontinued Operations
+Basic Weighted Average Shares Outstanding $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
+Diluted Weighted Average Shares Outstanding $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Reported Normalized Diluted EPS 9.87
+Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2 1
+Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
+Basic WASO $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
+Diluted WASO $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Fiscal year end September 28th., 2022. | USD
+For Paperwork Reduction Act Notice, see the seperate
+Instructions.
+THIS NOTE IS LEGAL TENDER
+TENDER
+FOR ALL DEBTS, PUBLIC AND
+PRIVATE
+Current Value
+:Build::
+PUBLISH :
+diff --git a/.github/workflows/deno.yml b/.github/workflows/deno.yml
deleted file mode 100644
index a06af47..0000000
--- a/.github/workflows/deno.yml
+++ /dev/N@N
@@ -1,117 +0,0 @@
-# This workflow uses actions that are not certified by GitHub.
-# They are provided by a third-party and are governed by
-# separate terms of service, privacy policy, and support
-# documentation.
-# This workflow will install Deno then run Deno lint and test.
-# For more information see: https://github.com/denoland/setup-deno
-name: Deno
-on:

push:
branches: ["paradice"]
pull_request:
branches: ["paradice"]
-permissions:

contents: read
-jobs:

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
 - name: Run eslint
   run: deno.xml rendeerer
   <?xml version="1.0" encoding="us-ascii"?>
   <!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}-->Based on facts as set forth in.65516550
-The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
-EMPLOYER IDENTIFICATION NUMBER: 61-1767920[DRAFT FORM OF TAX OPINION]ALPHABETZACHRY T WOOD5324 BRADFORD DRDALLAS TX 75235-8315ORIGINAL REPORTIncome, Rents, & RoyaltyINCOME STATEMENT61-176792088-1303491GOOGL_income-statement_Quarterly_As_Originally_ReportedTTMQ4 2022Q3 2022Q2 2022Q1 2022Q4 2021Q3 2021Q2 2021Q3 2021Gross Profit-2178236364-9195472727-16212709091-23229945455-30247181818-37264418182-44281654545-5129889090937497000000Total Revenue as Reported, Supplemental-1286309091-13385163636-25484018182-37582872727-49681727273-61780581818-73879436364-85978290909651180000001957800000-9776581818-21510963636-33245345455-44979727273-56714109091-68448490909-8018287272765118000000Other RevenueCost of Revenue-891927272.7418969090992713090911435292727319434545455245161636362959778181834679400000-27621000000Cost of Goods and Services-891927272.7418969090992713090911435292727319434545455245161636362959778181834679400000-27621000000Operating Income/Expenses-3640563636-882445454.5187567272746337909097391909091101500272731290814545515666263636-16466000000Selling, General and Administrative Expenses-1552200000-28945454.55149430909130175636364540818182606407272775873272739110581818-8772000000General and Administrative Expenses-544945454.523200000591345454.511594909091727636364229578181828639272733432072727-3256000000Selling and Marketing Expenses-1007254545-52145454.55902963636.418580727272813181818376829090947234000005678509091-5516000000Research and Development Expenses-2088363636-853500000381363636.416162272732851090909408595454553208181826555681818-7694000000Total Operating Profit/Loss-5818800000-10077918182-14337036364-18596154545-22855272727-27114390909-31373509091-3563262727321031000000Non-Operating Income/Expenses, Total-1369181818-2079000000-2788818182-3498636364-4208454545-4918272727-5628090909-63379090912033000000Total Net Finance Income/Expense464490909.1462390909.1460290909.1458190909.1456090909.1453990909.1451890909.1449790909.1310000000Net Interest Income/Expense464490909.1462390909.1460290909.1458190909.1456090909.1453990909.1451890909.1449790909.1310000000Interest Expense Net of Capitalized Interest48654545.456990000091145454.55112390909.1133636363.6154881818.2176127272.7197372727.3-77000000Interest Income415836363.6392490909.1369145454.5345800000322454545.5299109090.9275763636.4252418181.8387000000Net Investment Income-2096781818-2909109091-3721436364-4533763636-5346090909-6158418182-6970745455-77830727272207000000Gain/Loss on Investments and Other Financial Instruments-2243490909-3068572727-3893654545-4718736364-5543818182-6368900000-7193981818-80190636362158000000Income from Associates, Joint Ventures and Other Participating Interests99054545.4592609090.9186163636.3679718181.8273272727.2766827272.7360381818.1853936363.64188000000Gain/Loss on Foreign Exchange47654545.4566854545.4586054545.45105254545.5124454545.5143654545.5162854545.5182054545.5-139000000Irregular Income/Expenses00000Other Irregular Income/Expenses00000Other Income/Expense, Non-Operating263109090.9367718181.8472327272.7576936363.6681545454.5786154545.5890763636.4995372727.3-484000000Pretax Income-7187981818-12156918182-17125854545-22094790909-27063727273-32032663636-37001600000-4197053636423064000000Provision for Income Tax16952181822565754545343629090943068272735177363636604790000069184363647788972727-4128000000Net Income from Continuing Operations-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income after Extraordinary Items and Discontinued Operations-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income after Non-Controlling/Minority Interests-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income Available to Common Stockholders-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Diluted Net Income Available to Common Stockholders-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Income Statement Supplemental SectionReported Normalized and Operating Income/Expense Supplemental SectionTotal Revenue as Reported, Supplemental-1286309091-13385163636-25484018182-37582872727-49681727273-61780581818-73879436364-8597829090965118000000Total Operating Profit/Loss as Reported, Supplemental-5818800000-10077918182-14337036364-18596154545-22855272727-27114390909-31373509091-3563262727321031000000Reported Effective Tax Rate1.1620.14366666670.13316666670.12266666670.10633333330.086833333330.179Reported Normalized IncomeReported Normalized Operating ProfitOther Adjustments to Net Income Available to Common StockholdersDiscontinued OperationsBasic EPS-8.742909091-14.93854545-21.13418182-27.32981818-33.52545455-39.72109091-45.91672727-52.1123636428.44Basic EPS from Continuing Operations-8.752545455-14.94781818-21.14309091-27.33836364-33.53363636-39.72890909-45.92418182-52.1194545528.44Basic EPS from Discontinued OperationsDiluted EPS-8.505636364-14.599-20.69236364-26.78572727-32.87909091-38.97245455-45.06581818-51.1591818227.99Diluted EPS from Continuing Operations-8.515636364-14.609-20.70236364-26.79572727-32.88909091-38.98245455-45.07581818-51.1691818227.99Diluted EPS from Discontinued OperationsBasic Weighted Average Shares Outstanding694313545.5697258863.6700204181.8703149500706094818.2709040136.4711985454.5714930772.7665758000Diluted Weighted Average Shares Outstanding698675981.8701033009.1703390036.4705747063.6708104090.9710461118.2712818145.5715175172.7676519000Reported Normalized Diluted EPSBasic EPS-8.742909091-14.93854545-21.13418182-27.32981818-33.52545455-39.72109091-45.91672727-52.1123636428.44Diluted EPS-8.505636364-14.599-20.69236364-26.78572727-32.87909091-38.97245455-45.06581818-51.1591818227.99Basic WASO694313545.5697258863.6700204181.8703149500706094818.2709040136.4711985454.5714930772.7665758000Diluted WASO698675981.8701033009.1703390036.4705747063.6708104090.9710461118.2712818145.5715175172.7676519000Fiscal year end September 28th., 2022. | USD]()
-
-<link:linkbase xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd" xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xbrli="http://www.xbrl.org/2003/instance">

<link:roleRef roleURI="http://www.xbrl.org/2009/role/netLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/net-2009-12-16.xsd#netLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedTotalLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedTotalLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedNetLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedNetLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedTerseLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedTerseLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedPeriodEndLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedPeriodEndLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedPeriodStartLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedPeriodStartLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedLabel" />
<link:roleRef roleURI="http://zendesk.com./role/DocumentAndEntityInformation" xlink:type="simple" xlink:href="zen-20220919.xsd#DocumentAndEntityInformation" />
<link:presentationLink xlink:type="extended" xlink:role="http://zendesk.com./role/DocumentAndEntityInformation">
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_CoverAbstract" xlink:label="CoverAbstract" xlink:title="CoverAbstract" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentType" xlink:label="DocumentType" xlink:title="DocumentType" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentType" xlink:title="presentation: CoverAbstract to DocumentType" order="0.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_AmendmentFlag" xlink:label="AmendmentFlag" xlink:title="AmendmentFlag" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="AmendmentFlag" xlink:title="presentation: CoverAbstract to AmendmentFlag" order="1.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentPeriodEndDate" xlink:label="DocumentPeriodEndDate" xlink:title="DocumentPeriodEndDate" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentPeriodEndDate" xlink:title="presentation: CoverAbstract to DocumentPeriodEndDate" order="2.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentFiscalYearFocus" xlink:label="DocumentFiscalYearFocus" xlink:title="DocumentFiscalYearFocus" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentFiscalYearFocus" xlink:title="presentation: CoverAbstract to DocumentFiscalYearFocus" order="3.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentFiscalPeriodFocus" xlink:label="DocumentFiscalPeriodFocus" xlink:title="DocumentFiscalPeriodFocus" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentFiscalPeriodFocus" xlink:title="presentation: CoverAbstract to DocumentFiscalPeriodFocus" order="4.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityFileNumber" xlink:label="EntityFileNumber" xlink:title="EntityFileNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityFileNumber" xlink:title="presentation: CoverAbstract to EntityFileNumber" order="5.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityRegistrantName" xlink:label="EntityRegistrantName" xlink:title="EntityRegistrantName" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityRegistrantName" xlink:title="presentation: CoverAbstract to EntityRegistrantName" order="6.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityCentralIndexKey" xlink:label="EntityCentralIndexKey" xlink:title="EntityCentralIndexKey" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityCentralIndexKey" xlink:title="presentation: CoverAbstract to EntityCentralIndexKey" order="7.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityIncorporationStateCountryCode" xlink:label="EntityIncorporationStateCountryCode" xlink:title="EntityIncorporationStateCountryCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityIncorporationStateCountryCode" xlink:title="presentation: CoverAbstract to EntityIncorporationStateCountryCode" order="8.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityTaxIdentificationNumber" xlink:label="EntityTaxIdentificationNumber" xlink:title="EntityTaxIdentificationNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityTaxIdentificationNumber" xlink:title="presentation: CoverAbstract to EntityTaxIdentificationNumber" order="9.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine1" xlink:label="EntityAddressAddressLine1" xlink:title="EntityAddressAddressLine1" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine1" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine1" order="10.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine2" xlink:label="EntityAddressAddressLine2" xlink:title="EntityAddressAddressLine2" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine2" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine2" order="11.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine3" xlink:label="EntityAddressAddressLine3" xlink:title="EntityAddressAddressLine3" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine3" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine3" order="12.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressCityOrTown" xlink:label="EntityAddressCityOrTown" xlink:title="EntityAddressCityOrTown" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressCityOrTown" xlink:title="presentation: CoverAbstract to EntityAddressCityOrTown" order="13.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressStateOrProvince" xlink:label="EntityAddressStateOrProvince" xlink:title="EntityAddressStateOrProvince" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressStateOrProvince" xlink:title="presentation: CoverAbstract to EntityAddressStateOrProvince" order="14.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressCountry" xlink:label="EntityAddressCountry" xlink:title="EntityAddressCountry" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressCountry" xlink:title="presentation: CoverAbstract to EntityAddressCountry" order="15.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressPostalZipCode" xlink:label="EntityAddressPostalZipCode" xlink:title="EntityAddressPostalZipCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressPostalZipCode" xlink:title="presentation: CoverAbstract to EntityAddressPostalZipCode" order="16.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_CityAreaCode" xlink:label="CityAreaCode" xlink:title="CityAreaCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="CityAreaCode" xlink:title="presentation: CoverAbstract to CityAreaCode" order="17.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_LocalPhoneNumber" xlink:label="LocalPhoneNumber" xlink:title="LocalPhoneNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="LocalPhoneNumber" xlink:title="presentation: CoverAbstract to LocalPhoneNumber" order="18.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_NoTradingSymbolFlag" xlink:label="NoTradingSymbolFlag" xlink:title="NoTradingSymbolFlag" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="NoTradingSymbolFlag" xlink:title="presentation: CoverAbstract to NoTradingSymbolFlag" order="19.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityEmergingGrowthCompany" xlink:label="EntityEmergingGrowthCompany" xlink:title="EntityEmergingGrowthCompany" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityEmergingGrowthCompany" xlink:title="presentation: CoverAbstract to EntityEmergingGrowthCompany" order="20.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_WrittenCommunications" xlink:label="WrittenCommunications" xlink:title="WrittenCommunications" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="WrittenCommunications" xlink:title="presentation: CoverAbstract to WrittenCommunications" order="21.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_SolicitingMaterial" xlink:label="SolicitingMaterial" xlink:title="SolicitingMaterial" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="SolicitingMaterial" xlink:title="presentation: CoverAbstract to SolicitingMaterial" order="22.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_PreCommencementTenderOffer" xlink:label="PreCommencementTenderOffer" xlink:title="PreCommencementTenderOffer" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="PreCommencementTenderOffer" xlink:title="presentation: CoverAbstract to PreCommencementTenderOffer" order="23.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_PreCommencementIssuerTenderOffer" xlink:label="PreCommencementIssuerTenderOffer" xlink:title="PreCommencementIssuerTenderOffer" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="PreCommencementIssuerTenderOffer" xlink:title="presentation: CoverAbstract to PreCommencementIssuerTenderOffer" order="24.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_Security12bTitle" xlink:label="Security12bTitle" xlink:title="Security12bTitle" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="Security12bTitle" xlink:title="presentation: CoverAbstract to Security12bTitle" order="25.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_TradingSymbol" xlink:label="TradingSymbol" xlink:title="TradingSymbol" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="TradingSymbol" xlink:title="presentation: CoverAbstract to TradingSymbol" order="26.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_SecurityExchangeName" xlink:label="SecurityExchangeName" xlink:title="SecurityExchangeName" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="SecurityExchangeName" xlink:title="presentation: CoverAbstract to SecurityExchangeName" order="27.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
</link:presentationLink>
-</link:linkbase>
 - name: Run tests
   run: deno test -A --unstable
diff --git a/WORKSFLOW b/WORKSFLOW
new file mode 100644
index 0000000..371e3b7
--- /dev/null
+++ b/WORKSFLOW
@@ -0,0 +1,547 @@
+Mountain View, C.A. 94043
+Taxable Maritial Status: Single
+Exemptions/Allowances
+TX: 28
+Federal 941 Deposit Report
+ADP
+Report Range5/4/2022 - 6/4/2022 Local ID:
+EIN: 63-3441725State ID: 633441725
+Employee NAumboeurn:t3
+Description 5/4/2022 - 6/4/2022
+Payment Amount (Total) $9,246,754,678,763.00 Display All
+1. Social Security (Employee + Employer) $26,661.80
+2. Medicare (Employee + Employer) $861,193,422,444.20 Hourly
+3. Federal Income Tax $8,385,561,229,657.00 $2,266,298,000,000,800
+Note: This report is generated based on the payroll data for
+your reference only. Please contact IRS office for special
+cases such as late payment, previous overpayment, penalty
+and others.
+Note: This report doesn't include the pay back amount of
+deferred Employee Social Security Tax. Commission
+Employer Customized Report
+ADP
+Report Range5/4/2022 - 6/4/2022 88-1656496state ID: 633441725 State: All Local ID: 00037305581 $2,267,700.00
+EIN:
+Customized Report Amount
+Employee Payment Report
+ADP
+Employee Number: 3
+Description
+Wages, Tips and Other Compensation $22,662,983,361,013.70 Report Range: Tips
+Taxable SS Wages $215,014.49
+Name:
+SSN: $0.00
+Taxable SS Tips $0 Payment Summary
+Taxable Medicare Wages $22,662,983,361,013.70 Salary Vacation hourly OT
+Advanced EIC Payment $0.00 $3,361,013.70
+Federal Income Tax Withheld $8,385,561,229,657 Bonus $0.00 $0.00
+Employee SS Tax Withheld $13,330.90 $0.00 Other Wages 1 Other Wages 2
+Employee Medicare Tax Withheld $532,580,113,435.53 Total $0.00 $0.00
+State Income Tax Withheld $0.00 $22,662,983,361,013.70
+Local Income Tax Withheld
+Customized Employer Tax Report $0.00 Deduction Summary
+Description Amount Health Insurance
+Employer SS Tax
+Employer Medicare Tax $13,330.90 $0.00
+Federal Unemployment Tax $328,613,309,008.67 Tax Summary
+State Unemployment Tax $441.70 Federal Tax Total Tax
+Customized Deduction Report $840 $8,385,561,229,657@3,330.90 Local Tax
+Health Insurance $0.00
+401K $0.00 Advanced EIC Payment $8,918,141,356,423.43
+$0.00 $0.00 Total
+401K
+$0.00 $0.00
+Social Security Tax Medicare TaxState Tax
+$532,580,113,050)
+3/6/2022 at 6:37 PM
+Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
+GOOGL_income�statement_Quarterly_As_Originally_Reported 24,934,000,000 25,539,000,000 37,497,000,000 31,211,000,000 30,818,000,000
+24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
+Cash Flow from Operating Activities, Indirect 24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
+Net Cash Flow from Continuing Operating Activities, Indirect 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000
+Cash Generated from Operating Activities 6,517,000,000 3,797,000,000 4,236,000,000 2,592,000,000 5,748,000,000
+Income/Loss before Non-Cash Adjustment 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
+Total Adjustments for Non-Cash Items 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
+Depreciation, Amortization and Depletion, Non-Cash
+Adjustment 3,215,000,000 3,085,000,000 2,730,000,000 2,525,000,000 3,539,000,000
+Depreciation and Amortization, Non-Cash Adjustment 224,000,000 219,000,000 215,000,000 228,000,000 186,000,000
+Depreciation, Non-Cash Adjustment 3,954,000,000 3,874,000,000 3,803,000,000 3,745,000,000 3,223,000,000
+Amortization, Non-Cash Adjustment 1,616,000,000 -1,287,000,000 379,000,000 1,100,000,000 1,670,000,000
+Stock-Based Compensation, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
+Taxes, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
+Investment Income/Loss, Non-Cash Adjustment -14,000,000 64,000,000 -8,000,000 -255,000,000 392,000,000
+Gain/Loss on Financial Instruments, Non-Cash Adjustment -2,225,000,000 2,806,000,000 -871,000,000 -1,233,000,000 1,702,000,000
+Other Non-Cash Items -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
+Changes in Operating Capital -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
+Change in Trade and Other Receivables -399,000,000 -1,255,000,000 -199,000,000 7,000,000 -738,000,000
+Change in Trade/Accounts Receivable 6,994,000,000 3,157,000,000 4,074,000,000 -4,956,000,000 6,938,000,000
+Change in Other Current Assets 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
+Change in Payables and Accrued Expenses 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
+Change in Trade and Other Payables 5,837,000,000 2,919,000,000 4,204,000,000 -3,974,000,000 5,975,000,000
+Change in Trade/Accounts Payable 368,000,000 272,000,000 -3,000,000 137,000,000 207,000,000
+Change in Accrued Expenses -3,369,000,000 3,041,000,000 -1,082,000,000 785,000,000 740,000,000
+Change in Deferred Assets/Liabilities
+Change in Other Operating Capital
+-11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
+Change in Prepayments and Deposits -11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
+Cash Flow from Investing Activities
+Cash Flow from Continuing Investing Activities -6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
+-6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
+Purchase/Sale and Disposal of Property, Plant and Equipment,
+Net
+Purchase of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
+Sale and Disposal of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
+Purchase/Sale of Business, Net -4,348,000,000 -3,360,000,000 -3,293,000,000 2,195,000,000 -1,375,000,000
+Purchase/Acquisition of Business -40,860,000,000 -35,153,000,000 -24,949,000,000 -37,072,000,000 -36,955,000,000
+Purchase/Sale of Investments, Net
+Purchase of Investments 36,512,000,000 31,793,000,000 21,656,000,000 39,267,000,000 35,580,000,000
+100,000,000 388,000,000 23,000,000 30,000,000 -57,000,000
+Sale of Investments
+Other Investing Cash Flow -15,254,000,000
+Purchase/Sale of Other Non-Current Assets, Net -16,511,000,000 -15,254,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
+Sales of Other Non-Current Assets -16,511,000,000 -12,610,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
+Cash Flow from Financing Activities -13,473,000,000 -12,610,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
+Cash Flow from Continuing Financing Activities 13,473,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
+Issuance of/Payments for Common Stock, Net -42,000,000
+Payments for Common Stock 115,000,000 -42,000,000 -1,042,000,000 -37,000,000 -57,000,000
+Proceeds from Issuance of Common Stock 115,000,000 6,350,000,000 -1,042,000,000 -37,000,000 -57,000,000
+Issuance of/Repayments for Debt, Net 6,250,000,000 -6,392,000,000 6,699,000,000 900,000,000 0
+Issuance of/Repayments for Long Term Debt, Net 6,365,000,000 -2,602,000,000 -7,741,000,000 -937,000,000 -57,000,000
+Proceeds from Issuance of Long Term Debt
+Repayments for Long Term Debt 2,923,000,000 -2,453,000,000 -2,184,000,000 -1,647,000,000
+Proceeds from Issuance/Exercising of Stock Options/Warrants 0 300,000,000 10,000,000 3.38E+11
+Other Financing Cash Flow
+Cash and Cash Equivalents, End of Period
+Change in Cash 20,945,000,000 23,719,000,000 23,630,000,000 26,622,000,000 26,465,000,000
+Effect of Exchange Rate Changes 25930000000) 235000000000) -3,175,000,000 300,000,000 6,126,000,000
+Cash and Cash Equivalents, Beginning of Period PAGE="$USD(181000000000)".XLS BRIN="$USD(146000000000)".XLS 183,000,000 -143,000,000 210,000,000
+Cash Flow Supplemental Section $23,719,000,000,000.00 $26,622,000,000,000.00 $26,465,000,000,000.00 $20,129,000,000,000.00
+Change in Cash as Reported, Supplemental 2,774,000,000 89,000,000 -2,992,000,000 6,336,000,000
+Income Tax Paid, Supplemental 13,412,000,000 157,000,000
+ZACHRY T WOOD -4990000000
+Cash and Cash Equivalents, Beginning of Period
+Department of the Treasury
+Internal Revenue Service
+Q4 2020 Q4 2019
+Calendar Year
+Due: 04/18/2022
+Dec. 31, 2020 Dec. 31, 2019
+USD in "000'"s
+Repayments for Long Term Debt 182527 161857
+Costs and expenses:
+Cost of revenues 84732 71896
+Research and development 27573 26018
+Sales and marketing 17946 18464
+General and administrative 11052 9551
+European Commission fines 0 1697
+Total costs and expenses 141303 127626
+Income from operations 41224 34231
+Other income (expense), net 6858000000 5394
+Income before income taxes 22,677,000,000 19,289,000,000
+Provision for income taxes 22,677,000,000 19,289,000,000
+Net income 22,677,000,000 19,289,000,000
+include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock
+and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common
+stock and Class C capital stock (in dollars par share)
+include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock
+and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common
+stock and Class C capital stock (in dollars par share)
+ALPHABET 88-1303491
+5323 BRADFORD DR,
+DALLAS, TX 75235-8314
+Employee Info
+United States Department of The Treasury
+Employee Id: 9999999998 IRS No. 000000000000
+INTERNAL REVENUE SERVICE, $20,210,418.00
+PO BOX 1214, Rate Units Total YTD Taxes / Deductions Current YTD
+CHARLOTTE, NC 28201-1214 - - $70,842,745,000.00 $70,842,745,000.00 Federal Withholding $0.00 $0.00
+Earnings FICA - Social Security $0.00 $8,853.60
+Commissions FICA - Medicare $0.00 $0.00
+Employer Taxes
+FUTA $0.00 $0.00
+SUTA $0.00 $0.00
+EIN: 61-1767ID91:900037305581 SSN: 633441725
+YTD Gross Gross
+$70,842,745,000.00 $70,842,745,000.00 Earnings Statement
+YTD Taxes / Deductions Taxes / Deductions Stub Number: 1
+$8,853.60 $0.00
+YTD Net Pay Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 18-Apr-22
+$70,842,736,146.40 $70,842,745,000.00 XXX-XX-1725 Annually
+CHECK DATE CHECK NUMBER
+18-Apr-22
+**$70,842,745,000.00**
+THIS IS NOT A CHECK
+CHECK AMOUNT
+VOID
+INTERNAL REVENUE SERVICE,
+PO BOX 1214,
+CHARLOTTE, NC 28201-1214
+ZACHRY WOOD
+15 $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+For Disclosure, Privacy Act, and Paperwork Reduction Act
+Notice, see separate instructions. $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+Cat. No. 11320B $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+Form 1040 (2021) $76,033,000,000.00 20,642,000,000 18,936,000,000
+Reported Normalized and Operating Income/Expense
+Supplemental Section
+Total Revenue as Reported, Supplemental $257,637,000,000.00 75,325,000,000 65,118,000,000 61,880,000,000 55,314,000,000 56,898,000,000 46,173,000,000 38,297,000,000 41,159,000,000 46,075,000,000 40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental $78,714,000,000.00 21,885,000,000 21,031,000,000 19,361,000,000 16,437,000,000 15,651,000,000 11,213,000,000 6,383,000,000 7,977,000,000 9,266,000,000 9,177,000,000
+Reported Effective Tax Rate $0.16 0.179 0.157 0.158 0.158 0.159 0.119 0.181
+Reported Normalized Income 6,836,000,000
+Reported Normalized Operating Profit 7,977,000,000
+Other Adjustments to Net Income Available to Common
+Stockholders
+Discontinued Operations
+Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2
+Basic EPS from Continuing Operations $113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
+Basic EPS from Discontinued Operations
+Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
+Diluted EPS from Continuing Operations $112.20 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
+Diluted EPS from Discontinued Operations
+Basic Weighted Average Shares Outstanding $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
+Diluted Weighted Average Shares Outstanding $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Reported Normalized Diluted EPS 9.87
+Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2 1
+Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
+Basic WASO $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
+Diluted WASO $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Fiscal year end September 28th., 2022. | USD
+For Paperwork Reduction Act Notice, see the seperate
+Instructions.
+THIS NOTE IS LEGAL TENDER
+TENDER
+FOR ALL DEBTS, PUBLIC AND
+PRIVATE
+Current Value-on:

push:
branches: ["mainbranch]
pull_request:
branches: ["trunk"]
+permissions:

contents: read
+jobs:

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
 - name: Run eslint
   run: deno.xml rendeerer
   <?xml version="1.0" encoding="us-ascii"?>
   <!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}-->Based on facts as set forth in.65516550
+The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
+EMPLOYER IDENTIFICATION NUMBER: 61-1767920[DRAFT FORM OF TAX OPINION]ALPHABETZACHRY T WOOD5324 BRADFORD DRDALLAS TX 75235-8315ORIGINAL REPORTIncome, Rents, & RoyaltyINCOME STATEMENT61-176792088-1303491GOOGL_income-statement_Quarterly_As_Originally_ReportedTTMQ4 2022Q3 2022Q2 2022Q1 2022Q4 2021Q3 2021Q2 2021Q3 2021Gross Profit-2178236364-9195472727-16212709091-23229945455-30247181818-37264418182-44281654545-5129889090937497000000Total Revenue as Reported, Supplemental-1286309091-13385163636-25484018182-37582872727-49681727273-61780581818-73879436364-85978290909651180000001957800000-9776581818-21510963636-33245345455-44979727273-56714109091-68448490909-8018287272765118000000Other RevenueCost of Revenue-891927272.7418969090992713090911435292727319434545455245161636362959778181834679400000-27621000000Cost of Goods and Services-891927272.7418969090992713090911435292727319434545455245161636362959778181834679400000-27621000000Operating Income/Expenses-3640563636-882445454.5187567272746337909097391909091101500272731290814545515666263636-16466000000Selling, General and Administrative Expenses-1552200000-28945454.55149430909130175636364540818182606407272775873272739110581818-8772000000General and Administrative Expenses-544945454.523200000591345454.511594909091727636364229578181828639272733432072727-3256000000Selling and Marketing Expenses-1007254545-52145454.55902963636.418580727272813181818376829090947234000005678509091-5516000000Research and Development Expenses-2088363636-853500000381363636.416162272732851090909408595454553208181826555681818-7694000000Total Operating Profit/Loss-5818800000-10077918182-14337036364-18596154545-22855272727-27114390909-31373509091-3563262727321031000000Non-Operating Income/Expenses, Total-1369181818-2079000000-2788818182-3498636364-4208454545-4918272727-5628090909-63379090912033000000Total Net Finance Income/Expense464490909.1462390909.1460290909.1458190909.1456090909.1453990909.1451890909.1449790909.1310000000Net Interest Income/Expense464490909.1462390909.1460290909.1458190909.1456090909.1453990909.1451890909.1449790909.1310000000Interest Expense Net of Capitalized Interest48654545.456990000091145454.55112390909.1133636363.6154881818.2176127272.7197372727.3-77000000Interest Income415836363.6392490909.1369145454.5345800000322454545.5299109090.9275763636.4252418181.8387000000Net Investment Income-2096781818-2909109091-3721436364-4533763636-5346090909-6158418182-6970745455-77830727272207000000Gain/Loss on Investments and Other Financial Instruments-2243490909-3068572727-3893654545-4718736364-5543818182-6368900000-7193981818-80190636362158000000Income from Associates, Joint Ventures and Other Participating Interests99054545.4592609090.9186163636.3679718181.8273272727.2766827272.7360381818.1853936363.64188000000Gain/Loss on Foreign Exchange47654545.4566854545.4586054545.45105254545.5124454545.5143654545.5162854545.5182054545.5-139000000Irregular Income/Expenses00000Other Irregular Income/Expenses00000Other Income/Expense, Non-Operating263109090.9367718181.8472327272.7576936363.6681545454.5786154545.5890763636.4995372727.3-484000000Pretax Income-7187981818-12156918182-17125854545-22094790909-27063727273-32032663636-37001600000-4197053636423064000000Provision for Income Tax16952181822565754545343629090943068272735177363636604790000069184363647788972727-4128000000Net Income from Continuing Operations-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income after Extraordinary Items and Discontinued Operations-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income after Non-Controlling/Minority Interests-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Net Income Available to Common Stockholders-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Diluted Net Income Available to Common Stockholders-5492763636-9591163636-13689563636-17787963636-21886363636-25984763636-30083163636-3418156363618936000000Income Statement Supplemental SectionReported Normalized and Operating Income/Expense Supplemental SectionTotal Revenue as Reported, Supplemental-1286309091-13385163636-25484018182-37582872727-49681727273-61780581818-73879436364-8597829090965118000000Total Operating Profit/Loss as Reported, Supplemental-5818800000-10077918182-14337036364-18596154545-22855272727-27114390909-31373509091-3563262727321031000000Reported Effective Tax Rate1.1620.14366666670.13316666670.12266666670.10633333330.086833333330.179Reported Normalized IncomeReported Normalized Operating ProfitOther Adjustments to Net Income Available to Common StockholdersDiscontinued OperationsBasic EPS-8.742909091-14.93854545-21.13418182-27.32981818-33.52545455-39.72109091-45.91672727-52.1123636428.44Basic EPS from Continuing Operations-8.752545455-14.94781818-21.14309091-27.33836364-33.53363636-39.72890909-45.92418182-52.1194545528.44Basic EPS from Discontinued OperationsDiluted EPS-8.505636364-14.599-20.69236364-26.78572727-32.87909091-38.97245455-45.06581818-51.1591818227.99Diluted EPS from Continuing Operations-8.515636364-14.609-20.70236364-26.79572727-32.88909091-38.98245455-45.07581818-51.1691818227.99Diluted EPS from Discontinued OperationsBasic Weighted Average Shares Outstanding694313545.5697258863.6700204181.8703149500706094818.2709040136.4711985454.5714930772.7665758000Diluted Weighted Average Shares Outstanding698675981.8701033009.1703390036.4705747063.6708104090.9710461118.2712818145.5715175172.7676519000Reported Normalized Diluted EPSBasic EPS-8.742909091-14.93854545-21.13418182-27.32981818-33.52545455-39.72109091-45.91672727-52.1123636428.44Diluted EPS-8.505636364-14.599-20.69236364-26.78572727-32.87909091-38.97245455-45.06581818-51.1591818227.99Basic WASO694313545.5697258863.6700204181.8703149500706094818.2709040136.4711985454.5714930772.7665758000Diluted WASO698675981.8701033009.1703390036.4705747063.6708104090.9710461118.2712818145.5715175172.7676519000Fiscal year end September 28th., 2022. | USD]()
+
+<link:linkbase xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd" xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xbrli="http://www.xbrl.org/2003/instance">

<link:roleRef roleURI="http://www.xbrl.org/2009/role/netLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/net-2009-12-16.xsd#netLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedTotalLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedTotalLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedNetLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedNetLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedTerseLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedTerseLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedPeriodEndLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedPeriodEndLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedPeriodStartLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedPeriodStartLabel" />
<link:roleRef roleURI="http://www.xbrl.org/2009/role/negatedLabel" xlink:type="simple" xlink:href="http://www.xbrl.org/lrr/role/negated-2009-12-16.xsd#negatedLabel" />
<link:roleRef roleURI="http://zendesk.com./role/DocumentAndEntityInformation" xlink:type="simple" xlink:href="zen-20220919.xsd#DocumentAndEntityInformation" />
<link:presentationLink xlink:type="extended" xlink:role="http://zendesk.com./role/DocumentAndEntityInformation">
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_CoverAbstract" xlink:label="CoverAbstract" xlink:title="CoverAbstract" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentType" xlink:label="DocumentType" xlink:title="DocumentType" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentType" xlink:title="presentation: CoverAbstract to DocumentType" order="0.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_AmendmentFlag" xlink:label="AmendmentFlag" xlink:title="AmendmentFlag" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="AmendmentFlag" xlink:title="presentation: CoverAbstract to AmendmentFlag" order="1.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentPeriodEndDate" xlink:label="DocumentPeriodEndDate" xlink:title="DocumentPeriodEndDate" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentPeriodEndDate" xlink:title="presentation: CoverAbstract to DocumentPeriodEndDate" order="2.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentFiscalYearFocus" xlink:label="DocumentFiscalYearFocus" xlink:title="DocumentFiscalYearFocus" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentFiscalYearFocus" xlink:title="presentation: CoverAbstract to DocumentFiscalYearFocus" order="3.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_DocumentFiscalPeriodFocus" xlink:label="DocumentFiscalPeriodFocus" xlink:title="DocumentFiscalPeriodFocus" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="DocumentFiscalPeriodFocus" xlink:title="presentation: CoverAbstract to DocumentFiscalPeriodFocus" order="4.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityFileNumber" xlink:label="EntityFileNumber" xlink:title="EntityFileNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityFileNumber" xlink:title="presentation: CoverAbstract to EntityFileNumber" order="5.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityRegistrantName" xlink:label="EntityRegistrantName" xlink:title="EntityRegistrantName" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityRegistrantName" xlink:title="presentation: CoverAbstract to EntityRegistrantName" order="6.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityCentralIndexKey" xlink:label="EntityCentralIndexKey" xlink:title="EntityCentralIndexKey" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityCentralIndexKey" xlink:title="presentation: CoverAbstract to EntityCentralIndexKey" order="7.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityIncorporationStateCountryCode" xlink:label="EntityIncorporationStateCountryCode" xlink:title="EntityIncorporationStateCountryCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityIncorporationStateCountryCode" xlink:title="presentation: CoverAbstract to EntityIncorporationStateCountryCode" order="8.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityTaxIdentificationNumber" xlink:label="EntityTaxIdentificationNumber" xlink:title="EntityTaxIdentificationNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityTaxIdentificationNumber" xlink:title="presentation: CoverAbstract to EntityTaxIdentificationNumber" order="9.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine1" xlink:label="EntityAddressAddressLine1" xlink:title="EntityAddressAddressLine1" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine1" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine1" order="10.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine2" xlink:label="EntityAddressAddressLine2" xlink:title="EntityAddressAddressLine2" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine2" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine2" order="11.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressAddressLine3" xlink:label="EntityAddressAddressLine3" xlink:title="EntityAddressAddressLine3" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressAddressLine3" xlink:title="presentation: CoverAbstract to EntityAddressAddressLine3" order="12.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressCityOrTown" xlink:label="EntityAddressCityOrTown" xlink:title="EntityAddressCityOrTown" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressCityOrTown" xlink:title="presentation: CoverAbstract to EntityAddressCityOrTown" order="13.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressStateOrProvince" xlink:label="EntityAddressStateOrProvince" xlink:title="EntityAddressStateOrProvince" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressStateOrProvince" xlink:title="presentation: CoverAbstract to EntityAddressStateOrProvince" order="14.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressCountry" xlink:label="EntityAddressCountry" xlink:title="EntityAddressCountry" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressCountry" xlink:title="presentation: CoverAbstract to EntityAddressCountry" order="15.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityAddressPostalZipCode" xlink:label="EntityAddressPostalZipCode" xlink:title="EntityAddressPostalZipCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityAddressPostalZipCode" xlink:title="presentation: CoverAbstract to EntityAddressPostalZipCode" order="16.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_CityAreaCode" xlink:label="CityAreaCode" xlink:title="CityAreaCode" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="CityAreaCode" xlink:title="presentation: CoverAbstract to CityAreaCode" order="17.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_LocalPhoneNumber" xlink:label="LocalPhoneNumber" xlink:title="LocalPhoneNumber" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="LocalPhoneNumber" xlink:title="presentation: CoverAbstract to LocalPhoneNumber" order="18.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_NoTradingSymbolFlag" xlink:label="NoTradingSymbolFlag" xlink:title="NoTradingSymbolFlag" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="NoTradingSymbolFlag" xlink:title="presentation: CoverAbstract to NoTradingSymbolFlag" order="19.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_EntityEmergingGrowthCompany" xlink:label="EntityEmergingGrowthCompany" xlink:title="EntityEmergingGrowthCompany" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="EntityEmergingGrowthCompany" xlink:title="presentation: CoverAbstract to EntityEmergingGrowthCompany" order="20.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_WrittenCommunications" xlink:label="WrittenCommunications" xlink:title="WrittenCommunications" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="WrittenCommunications" xlink:title="presentation: CoverAbstract to WrittenCommunications" order="21.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_SolicitingMaterial" xlink:label="SolicitingMaterial" xlink:title="SolicitingMaterial" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="SolicitingMaterial" xlink:title="presentation: CoverAbstract to SolicitingMaterial" order="22.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_PreCommencementTenderOffer" xlink:label="PreCommencementTenderOffer" xlink:title="PreCommencementTenderOffer" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="PreCommencementTenderOffer" xlink:title="presentation: CoverAbstract to PreCommencementTenderOffer" order="23.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_PreCommencementIssuerTenderOffer" xlink:label="PreCommencementIssuerTenderOffer" xlink:title="PreCommencementIssuerTenderOffer" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="PreCommencementIssuerTenderOffer" xlink:title="presentation: CoverAbstract to PreCommencementIssuerTenderOffer" order="24.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_Security12bTitle" xlink:label="Security12bTitle" xlink:title="Security12bTitle" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="Security12bTitle" xlink:title="presentation: CoverAbstract to Security12bTitle" order="25.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_TradingSymbol" xlink:label="TradingSymbol" xlink:title="TradingSymbol" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="TradingSymbol" xlink:title="presentation: CoverAbstract to TradingSymbol" order="26.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
<link:loc xlink:type="locator" xlink:href="https://xbrl.sec.gov/dei/2022/dei-2022.xsd#dei_SecurityExchangeName" xlink:label="SecurityExchangeName" xlink:title="SecurityExchangeName" />
<link:presentationArc xlink:type="arc" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="CoverAbstract" xlink:to="SecurityExchangeName" xlink:title="presentation: CoverAbstract to SecurityExchangeName" order="27.0" preferredLabel="http://www.xbrl.org/2003/role/label" />
</link:presentationLink>
+</link:linkbase>
 - name: Run tests
   run: deno tests=: stablized
   Mountain View, C.A. 94043
+Taxable Maritial Status: Single
+Exemptions/Allowances
+TX: 28
+Federal 941 Deposit Report
+ADP
+Report Range5/4/2022 - 6/4/2022 Local ID:
+EIN: 63-3441725State ID: 633441725
+Employee NAumboeurn:t3
+Description 5/4/2022 - 6/4/2022
+Payment Amount (Total) $9,246,754,678,763.00 Display All
+1. Social Security (Employee + Employer) $26,661.80
+2. Medicare (Employee + Employer) $861,193,422,444.20 Hourly
+3. Federal Income Tax $8,385,561,229,657.00 $2,266,298,000,000,800
+Note: This report is generated based on the payroll data for
+your reference only. Please contact IRS office for special
+cases such as late payment, previous overpayment, penalty
+and others.
+Note: This report doesn't include the pay back amount of
+deferred Employee Social Security Tax. Commission
+Employer Customized Report
+ADP
+Report Range5/4/2022 - 6/4/2022 88-1656496state ID: 633441725 State: All Local ID: 00037305581 $2,267,700.00
+EIN:
+Customized Report Amount
+Employee Payment Report
+ADP
+Employee Number: 3
+Description
+Wages, Tips and Other Compensation $22,662,983,361,013.70 Report Range: Tips
+Taxable SS Wages $215,014.49
+Name:
+SSN: $0.00
+Taxable SS Tips $0 Payment Summary
+Taxable Medicare Wages $22,662,983,361,013.70 Salary Vacation hourly OT
+Advanced EIC Payment $0.00 $3,361,013.70
+Federal Income Tax Withheld $8,385,561,229,657 Bonus $0.00 $0.00
+Employee SS Tax Withheld $13,330.90 $0.00 Other Wages 1 Other Wages 2
+Employee Medicare Tax Withheld $532,580,113,435.53 Total $0.00 $0.00
+State Income Tax Withheld $0.00 $22,662,983,361,013.70
+Local Income Tax Withheld
+Customized Employer Tax Report $0.00 Deduction Summary
+Description Amount Health Insurance
+Employer SS Tax
+Employer Medicare Tax $13,330.90 $0.00
+Federal Unemployment Tax $328,613,309,008.67 Tax Summary
+State Unemployment Tax $441.70 Federal Tax Total Tax
+Customized Deduction Report $840 $8,385,561,229,657@3,330.90 Local Tax
+Health Insurance $0.00
+401K $0.00 Advanced EIC Payment $8,918,141,356,423.43
+$0.00 $0.00 Total
+401K
+$0.00 $0.00
+Social Security Tax Medicare TaxState Tax
+$532,580,113,050)
+3/6/2022 at 6:37 PM
+Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
+GOOGL_income�statement_Quarterly_As_Originally_Reported 24,934,000,000 25,539,000,000 37,497,000,000 31,211,000,000 30,818,000,000
+24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
+Cash Flow from Operating Activities, Indirect 24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
+Net Cash Flow from Continuing Operating Activities, Indirect 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000
+Cash Generated from Operating Activities 6,517,000,000 3,797,000,000 4,236,000,000 2,592,000,000 5,748,000,000
+Income/Loss before Non-Cash Adjustment 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
+Total Adjustments for Non-Cash Items 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
+Depreciation, Amortization and Depletion, Non-Cash
+Adjustment 3,215,000,000 3,085,000,000 2,730,000,000 2,525,000,000 3,539,000,000
+Depreciation and Amortization, Non-Cash Adjustment 224,000,000 219,000,000 215,000,000 228,000,000 186,000,000
+Depreciation, Non-Cash Adjustment 3,954,000,000 3,874,000,000 3,803,000,000 3,745,000,000 3,223,000,000
+Amortization, Non-Cash Adjustment 1,616,000,000 -1,287,000,000 379,000,000 1,100,000,000 1,670,000,000
+Stock-Based Compensation, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
+Taxes, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
+Investment Income/Loss, Non-Cash Adjustment -14,000,000 64,000,000 -8,000,000 -255,000,000 392,000,000
+Gain/Loss on Financial Instruments, Non-Cash Adjustment -2,225,000,000 2,806,000,000 -871,000,000 -1,233,000,000 1,702,000,000
+Other Non-Cash Items -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
+Changes in Operating Capital -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
+Change in Trade and Other Receivables -399,000,000 -1,255,000,000 -199,000,000 7,000,000 -738,000,000
+Change in Trade/Accounts Receivable 6,994,000,000 3,157,000,000 4,074,000,000 -4,956,000,000 6,938,000,000
+Change in Other Current Assets 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
+Change in Payables and Accrued Expenses 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
+Change in Trade and Other Payables 5,837,000,000 2,919,000,000 4,204,000,000 -3,974,000,000 5,975,000,000
+Change in Trade/Accounts Payable 368,000,000 272,000,000 -3,000,000 137,000,000 207,000,000
+Change in Accrued Expenses -3,369,000,000 3,041,000,000 -1,082,000,000 785,000,000 740,000,000
+Change in Deferred Assets/Liabilities
+Change in Other Operating Capital
+-11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
+Change in Prepayments and Deposits -11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
+Cash Flow from Investing Activities
+Cash Flow from Continuing Investing Activities -6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
+-6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
+Purchase/Sale and Disposal of Property, Plant and Equipment,
+Net
+Purchase of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
+Sale and Disposal of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
+Purchase/Sale of Business, Net -4,348,000,000 -3,360,000,000 -3,293,000,000 2,195,000,000 -1,375,000,000
+Purchase/Acquisition of Business -40,860,000,000 -35,153,000,000 -24,949,000,000 -37,072,000,000 -36,955,000,000
+Purchase/Sale of Investments, Net
+Purchase of Investments 36,512,000,000 31,793,000,000 21,656,000,000 39,267,000,000 35,580,000,000
+100,000,000 388,000,000 23,000,000 30,000,000 -57,000,000
+Sale of Investments
+Other Investing Cash Flow -15,254,000,000
+Purchase/Sale of Other Non-Current Assets, Net -16,511,000,000 -15,254,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
+Sales of Other Non-Current Assets -16,511,000,000 -12,610,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
+Cash Flow from Financing Activities -13,473,000,000 -12,610,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
+Cash Flow from Continuing Financing Activities 13,473,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
+Issuance of/Payments for Common Stock, Net -42,000,000
+Payments for Common Stock 115,000,000 -42,000,000 -1,042,000,000 -37,000,000 -57,000,000
+Proceeds from Issuance of Common Stock 115,000,000 6,350,000,000 -1,042,000,000 -37,000,000 -57,000,000
+Issuance of/Repayments for Debt, Net 6,250,000,000 -6,392,000,000 6,699,000,000 900,000,000 0
+Issuance of/Repayments for Long Term Debt, Net 6,365,000,000 -2,602,000,000 -7,741,000,000 -937,000,000 -57,000,000
+Proceeds from Issuance of Long Term Debt
+Repayments for Long Term Debt 2,923,000,000 -2,453,000,000 -2,184,000,000 -1,647,000,000
+Proceeds from Issuance/Exercising of Stock Options/Warrants 0 300,000,000 10,000,000 3.38E+11
+Other Financing Cash Flow
+Cash and Cash Equivalents, End of Period
+Change in Cash 20,945,000,000 23,719,000,000 23,630,000,000 26,622,000,000 26,465,000,000
+Effect of Exchange Rate Changes 25930000000) 235000000000) -3,175,000,000 300,000,000 6,126,000,000
+Cash and Cash Equivalents, Beginning of Period PAGE="$USD(181000000000)".XLS BRIN="$USD(146000000000)".XLS 183,000,000 -143,000,000 210,000,000
+Cash Flow Supplemental Section $23,719,000,000,000.00 $26,622,000,000,000.00 $26,465,000,000,000.00 $20,129,000,000,000.00
+Change in Cash as Reported, Supplemental 2,774,000,000 89,000,000 -2,992,000,000 6,336,000,000
+Income Tax Paid, Supplemental 13,412,000,000 157,000,000
+ZACHRY T WOOD -4990000000
+Cash and Cash Equivalents, Beginning of Period
+Department of the Treasury
+Internal Revenue Service
+Q4 2020 Q4 2019
+Calendar Year
+Due: 04/18/2022
+Dec. 31, 2020 Dec. 31, 2019
+USD in "000'"s
+Repayments for Long Term Debt 182527 161857
+Costs and expenses:
+Cost of revenues 84732 71896
+Research and development 27573 26018
+Sales and marketing 17946 18464
+General and administrative 11052 9551
+European Commission fines 0 1697
+Total costs and expenses 141303 127626
+Income from operations 41224 34231
+Other income (expense), net 6858000000 5394
+Income before income taxes 22,677,000,000 19,289,000,000
+Provision for income taxes 22,677,000,000 19,289,000,000
+Net income 22,677,000,000 19,289,000,000
+include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock
+and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common
+stock and Class C capital stock (in dollars par share)
+include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock
+and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common
+stock and Class C capital stock (in dollars par share)
+ALPHABET 88-1303491
+5323 BRADFORD DR,
+DALLAS, TX 75235-8314
+Employee Info
+United States Department of The Treasury
+Employee Id: 9999999998 IRS No. 000000000000
+INTERNAL REVENUE SERVICE, $20,210,418.00
+PO BOX 1214, Rate Units Total YTD Taxes / Deductions Current YTD
+CHARLOTTE, NC 28201-1214 - - $70,842,745,000.00 $70,842,745,000.00 Federal Withholding $0.00 $0.00
+Earnings FICA - Social Security $0.00 $8,853.60
+Commissions FICA - Medicare $0.00 $0.00
+Employer Taxes
+FUTA $0.00 $0.00
+SUTA $0.00 $0.00
+EIN: 61-1767ID91:900037305581 SSN: 633441725
+YTD Gross Gross
+$70,842,745,000.00 $70,842,745,000.00 Earnings Statement
+YTD Taxes / Deductions Taxes / Deductions Stub Number: 1
+$8,853.60 $0.00
+YTD Net Pay Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 18-Apr-22
+$70,842,736,146.40 $70,842,745,000.00 XXX-XX-1725 Annually
+CHECK DATE CHECK NUMBER
+18-Apr-22
+**$70,842,745,000.00**
+THIS IS NOT A CHECK
+CHECK AMOUNT
+VOID
+INTERNAL REVENUE SERVICE,
+PO BOX 1214,
+CHARLOTTE, NC 28201-1214
+ZACHRY WOOD
+15 $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+For Disclosure, Privacy Act, and Paperwork Reduction Act
+Notice, see separate instructions. $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+Cat. No. 11320B $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
+Form 1040 (2021) $76,033,000,000.00 20,642,000,000 18,936,000,000
+Reported Normalized and Operating Income/Expense
+Supplemental Section
+Total Revenue as Reported, Supplemental $257,637,000,000.00 75,325,000,000 65,118,000,000 61,880,000,000 55,314,000,000 56,898,000,000 46,173,000,000 38,297,000,000 41,159,000,000 46,075,000,000 40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental $78,714,000,000.00 21,885,000,000 21,031,000,000 19,361,000,000 16,437,000,000 15,651,000,000 11,213,000,000 6,383,000,000 7,977,000,000 9,266,000,000 9,177,000,000
+Reported Effective Tax Rate $0.16 0.179 0.157 0.158 0.158 0.159 0.119 0.181
+Reported Normalized Income 6,836,000,000
+Reported Normalized Operating Profit 7,977,000,000
+Other Adjustments to Net Income Available to Common
+Stockholders
+Discontinued Operations
+Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2
+Basic EPS from Continuing Operations $113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
+Basic EPS from Discontinued Operations
+Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
+Diluted EPS from Continuing Operations $112.20 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
+Diluted EPS from Discontinued Operations
+Basic Weighted Average Shares Outstanding $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
+Diluted Weighted Average Shares Outstanding $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Reported Normalized Diluted EPS 9.87
+Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2 1
+Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
+Basic WASO $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
+Diluted WASO $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Fiscal year end September 28th., 2022. | USD
+For Paperwork Reduction Act Notice, see the seperate
+Instructions.
+THIS NOTE IS LEGAL TENDER
+TENDER
+FOR ALL DEBTS, PUBLIC AND
+PRIVATE
+Current Value
+:Build::
+PUBLISH :
+

@zakwarlord7 zakwarlord7 added this to the BITORE_34173 milestone 6 days ago
@zakwarlord7 zakwarlord7 deleted the 071921891-4720416547-6400-7102 branch 6 days ago
@zakwarlord7 zakwarlord7 restored the 071921891-4720416547-6400-7102 branch 6 days ago
@zakwarlord7 zakwarlord7 changed the title Update autoupdate documentation Welcome! This is the official documentation for Python 3.10.7hon Setup and Usage how to use Python on different platforms Python 6 days ago
Pull request successfully merged and closed
You’re all set—the 071921891-4720416547-6400-7102 branch can be safely deleted.

@zakwarlord7

 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
Remember, contributions to this repository should follow our GitHub Community Guidelines.
 ProTip! Add comments to specific lines under Files changed.
Reviewers
No reviews
Assignees
No one—
Labels
None yet
Projects
None yet
Milestone
BITORE_34173
Development
Successfully merging this pull request may close these issues.

None yet

Notifications
Customize
You’re receiving notifications because you’re watching this repository.
1 participant
@zakwarlord7
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

{% endif %}
