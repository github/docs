'' '
arrow
Enable businesses around the world to send invoices and collect payments from US companies

Start with Sandbox
Request for demo
business payment dashboard
Why Machnet
We do the heavy lifting of compliance, regulatory requirements and banking, so you can focus to build, launch and scale your business. Our API platform enables you to onboard customers, collect funds and payout globally.

time-icon
Start offering international payment services - in 6 weeks
Integrate in our sandbox - Push configurations to production - Go live.

save-icon
Save 95% in fixed and monthly costs
No heavy up-front fees. Low monthly billables.

scale-icon
Scale your business with our flexible API
Build your application to offer a wide range of international payment services to your customers. Build beyond remittance.

Designed for Developers
curl --location -g --request POST 'https://api.machpay.com/v4/users/{{userId}}/transactions' \
--header 'X-Client-Id: xxxx-xxxx-xxxx' \
--header 'X-Client-Secret: xxxx-xxxx-xxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
     "from_amount":1,
     "exchange_rate":6.11,
     "to_amount":6.11,
     "fee_amount": 0,
     "to_currency":"GHS",
     "from_currency":"USD",
     "from_fund_id":"{{fromAccountId}}",
     "funding_source_type": "CARD",
     "to":{
            "id": "{{receiveUserId}}",
           "fund_id" : "{{recipientAccountId}}",
            "payout_method":"BANK_DEPOSIT",
          }
}'''
'
: About READMEs
intro: 'You can add a README file to your repository to tell other people why your project is useful, what they can do with your project, and how they can use it.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About READMEs

{% data reusables.repositories.about-READMEs %}

For more information about providing guidelines for your project, see {% ifversion fpt or ghec %}"[Adding a code of conduct to your project](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" and {% endif %}"[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)."

A README is often the first item a visitor will see when visiting your repository. README files typically include information on:
- What the project does
- Why the project is useful
- How users can get started with the project
- Where users can get help with your project
- Who maintains and contributes to the project

If you put your README file in your repository's hidden `.github`, root, or `docs` directory, {% data variables.product.product_name %} will recognize and automatically surface your README to repository visitors.

If a repository contains more than one README file, then the file shown is chosen from locations in the following order: the `.github` directory, then the repository's root directory, and finally the `docs` directory.

![Main page of the github/scientist repository and its README file](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![README file on your username/username repository](/assets/images/help/repository/username-repo-with-readme.png)

## Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.product_name %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="The unordered list icon" %}  menu icon at the top left of the rendered page.

![README with automatically generated TOC](/assets/images/help/repository/readme-automatic-toc.png)

## Section links in README files and blob pages

{% data reusables.repositories.section-links %}

## Relative links and image paths in README files

{% data reusables.repositories.relative-links %}

## Wikis

A README should contain only the necessary information for developers to get started using and contributing to your project. Longer documentation is best suited for wikis. For more information, see "[About wikis](/communities/documenting-your-project-with-wikis/about-wikis)."

## Further reading

- "[Adding a file to a repository](/articles/adding-a-file-to-a-repository)"
- 18F's "[Making READMEs readable](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)"
{%- ifversion fpt or ghec %}
- "[Adding an 'Open in {% data variables.product.prodname_github_codespaces %}' badge](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/adding-a-codespaces-badge)"
{%- endif %}
