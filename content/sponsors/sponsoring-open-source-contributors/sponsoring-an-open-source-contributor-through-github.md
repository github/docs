---
title: Sponsoring an open source contributor through GitHub
intro: 'You can make payments through {% data variables.product.prodname_dotcom %} to a developer or organization who designs, creates, or maintains open source projects you depend on.'
redirect_from:
  - /articles/sponsoring-a-developer
  - /articles/sponsoring-an-open-source-contributor
  - /github/supporting-the-open-source-community-with-github-sponsors/sponsoring-a-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor
  - /sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor
versions:
  fpt: '*'
  ghec: '*'
permissions: '{% data reusables.sponsors.sponsorship-permissions %}'
type: how_to
topics:
  - Open Source
  - Sponsors payments
shortTitle: Sponsor through {% data variables.product.prodname_dotcom %}
---

## About sponsorships with payments through {% data variables.product.prodname_dotcom %}

{% data reusables.sponsors.sponsorship-details %}

## Sponsoring an account

Before you can sponsor an account, you must have a verified email address. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/verifying-your-email-address)."

{% data reusables.sponsors.navigate-to-maintainer-profile %}
{% data reusables.sponsors.navigate-to-sponsorship-dashboard %}
{% data reusables.sponsors.sponsor-as-org %}
{% data reusables.sponsors.select-a-tier %}
{% data reusables.sponsors.pay-prorated-amount %}
{% data reusables.sponsors.select-sponsorship-billing %}
{% data reusables.sponsors.setting-an-end-date %}
{% data reusables.sponsors.who-can-see-your-sponsorship %}
{% data reusables.sponsors.choose-updates %}<br><br>

   {% note %}

   {% data reusables.sponsors.org-email-updates %}

   {% endnote %}

{% data reusables.sponsors.sponsor-as-business %}
{% data reusables.sponsors.sponsor-account %}

## Sponsoring accounts in bulk

1. Go to [https://github.com/sponsors/explore](https://github.com/sponsors/explore).
1. Optionally, if you are a member of an organization, to see the maintainers of your organization's dependencies, select your organization from the "Explore as" section of the upper-left sidebar.

   If you are a member of multiple organizations, to see all of your organizations, click **See more** {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %}.
1. Optionally, to download a CSV file of developers who maintain your account's or organization's dependencies, click **results as CSV**.

   ![Screenshot of the "Explore {% data variables.product.prodname_sponsors %}" page. A link with the text "results as CSV" is outlined in dark orange.](/assets/images/help/sponsors/download-dependencies-csv.png)

   To sponsor these maintainers using the downloaded file, in the corresponding cells of the "Sponsorship amount in USD" column, input sponsorship amounts in US dollars for each maintainer you want to sponsor.

1. On {% data variables.product.prodname_dotcom %}, in the "Bulk Sponsor" box above the list of developers who maintain your dependencies, click **Get started**.
1. Optionally, to change which account or organization you are sponsoring as, select the **Sponsor as USERNAME** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click the desired account or organization from the options that appear.

    ![Screenshot of the first bulk sponsorship screen. A collapsed dropdown menu, labeled "octocat", is highlighted in dark orange.](/assets/images/help/sponsors/bulk-sponsors-sponsor-as-dropdown.png)
1. To upload the CSV file of accounts you would like to sponsor, in the "Import a CSV" section, click **Choose your file**, then navigate to the CSV file you would like to upload. Select the CSV file, then click **Open**.

   Alternatively, drag and drop your CSV file into the "Import a CSV" box.

   You can sponsor in bulk with any of the following files:
    - The previously mentioned CSV file of developers who maintain your account's or organization's dependencies.
    - {% data variables.product.prodname_dotcom %}'s template CSV file for bulk sponsorships edited to contain your desired sponsorships. To download the example CSV file, in the "Import a CSV" box, click **Download example CSV**.
    - A CSV file of your own creation containing your desired sponsorships. For {% data variables.product.prodname_dotcom %} to parse your CSV file correctly, the file must contain columns labeled "Maintainer username" and "Sponsorship amount in USD."

   {% note %}

   **Note:** Any errors in your file are reported at the top of the review page with instructions to resolve them.

   {% endnote %}

1. Optionally, to resolve any errors or make any changes to your sponsorship selections, click **Choose file**, then navigate to the new or updated CSV file you would like to upload. Select the CSV file, then click **Open**.
1. To confirm your sponsorship elections, click **Continue to checkout**.

{% data reusables.sponsors.select-sponsorship-billing %}

1. In the "Who can see your sponsorships?" section, choose a visibility option.
1. Decide whether you want to receive email updates from the sponsored accounts, then select or deselect **Receive email updates from the maintainers you're sponsoring**.<br><br>

   {% note %}

   {% data reusables.sponsors.org-email-updates %}

   {% endnote %}

{% data reusables.sponsors.sponsor-as-business %}

1. Review the information about the charge and your billing date, then click **Sponsor NUMBER maintainers**.
