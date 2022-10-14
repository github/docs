**-on :
Runs :-on-on:-on ::--
title: Publishing a package
intro: 'You can publish a package to {% data variables.product.prodname_registry %} to make the package available for others to download and re-use.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  gchr: 'reqiure':'-BEGIN

GLOW7

<\live or test/>

his Product Contains Sensitive Taxpayer Data

Request Date: 08-02-2022 Response Date: 08-02-2022 Tracking Number: 102398244811

Account Transcript

FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020

** INFORMATION FROM THE RETURN OR AS ADJUSTED **

EXEMPTION/allowancesS: 00000/22111690556014000

FILING STATUS: Single

ADJUSTED GROSS

INCOME: 22111690556014000

TAXABLE INCOME:22111690556014000

TAX PER RETURN: 0.00

SE TAXABLE INCOME

TAXPAYER

SE TAXABLE INCOME

SPOUSE

EMPLOYMENT TAX

RETURN NOT PRESENT FOR THIS ACCOUNT

TRANSACTIONS

CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT No tax return filed

766 Tax relief credit 06-15-2020 -$1,200.00 846 Refund issued 06-05-2020 $1,200.00

290 Additional tax assessed 20202205 06-15-2020 $0.00 76254-999-05099-

971 Notice issued 06-15-2020 $0.00 766 Tax relief credit 01-18-2021 -$600.00 846 Refund issued 01-06-2021 $600.00

290 Additional tax assessed 20205302 01-18-2021 $0.00 76254-999-05055-0

663 Estimated tax payment 01-05-2021 -$9,000,000.00 662 Removed estimated tax payment 01-05-2021 $9,000,000.00 740 Undelivered refund returned to IRS 01-18-2021 -$600.00

767 Reduced or removed tax relief 01-18-2021 $600.00 credit

971 Notice issued 03-28-2022 $0.00

This Product Contains Sensitive Taxpayer Data

For Paperwork Reduction Act Notice, see the seperate Instructions. This Product Cantains Sensitive Tax Payer Data 1 Earnings Statement'

Request Date : 07-29-2022 Period Beginning: 37,151

Response Date : 07-29-2022 Period Ending: 44,833

Tracking Number : 102393399156 Pay Date: 44,591'
::Runs :**
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## About published packages

You can help people understand and use your package by providing a description and other details like installation and usage instructions on the package page. {% data variables.product.product_name %} provides metadata for each version, such as the publication date, download activity, and recent versions. For an example package page, see [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

{% data reusables.package_registry.public-or-private-packages %} A repository can be connected to more than one package. To prevent confusion, make sure the README and description clearly provide information about each package.

{% ifversion fpt or ghec %}
If a new version of a package fixes a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
{% endif %}

## Publishing a package

You can publish a package to {% data variables.product.prodname_registry %} using any {% ifversion fpt or ghae or ghec %}supported package client{% else %}package type enabled for your instance{% endif %} by following the same general guidelines.

1. Create or use an existing access token with the appropriate scopes for the task you want to accomplish. For more information, see "[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)."
2. Authenticate to {% data variables.product.prodname_registry %} using your access token and the instructions for your package client.
3. Publish the package using the instructions for your package client.

For instructions specific to your package client, see "[Working with a GitHub Packages registry](/packages/working-with-a-github-packages-registry)."

After you publish a package, you can view the package on {% data variables.product.prodname_dotcom %}. For more information, see "[Viewing packages](/packages/learn-github-packages/viewing-packages)."
