---
title: Sponsoring an open source contributor
intro: 'You can make a monthly recurring payment to a developer or organization who designs, creates, or maintains open source projects you depend on.'
redirect_from:
  - /articles/sponsoring-a-developer
  - /articles/sponsoring-an-open-source-contributor
  - /github/supporting-the-open-source-community-with-github-sponsors/sponsoring-a-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor
versions:
  fpt: '*'
  ghec: '*'
permissions: Anyone can sponsor accounts on behalf of their own personal account. Organization owners and billing managers can sponsor accounts on behalf of their organization.
type: how_to
topics:
  - Open Source
  - Sponsors payments
shortTitle: Sponsor a contributor
---

{% data reusables.sponsors.paypal-deprecation %}

## About sponsorships

{% data reusables.sponsors.sponsorship-details %}

You can sponsor an account on behalf of your personal account to invest in projects that you personally benefit from. You can sponsor an account on behalf of your organization for many reasons.
- Sustaining specific libraries that your organization's work depends on
- Investing in the ecosystem you rely on as an organization (such as blockchain)
- Developing brand awareness as an organization that values open source
- Thanking open source developers for building libraries that complement the product your organization offers

You can use a credit card to sponsor an account on {% data variables.product.product_name %}. Organizations can also pay by invoice. For more information, see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/paying-for-github-sponsors-by-invoice)."

{% data reusables.sponsors.no-fees %} For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/about-billing-for-github-sponsors)."

When you sponsor an account using a credit card, the change will become effective immediately. {% data reusables.sponsors.prorated-sponsorship %}

We may share certain limited tax information with sponsored accounts. For more information, see "[Tax information](#tax-information)."

{% data reusables.sponsors.manage-updates-for-orgs %}

You can choose whether to display your sponsorship publicly. One-time sponsorships remain visible for one month.

If the sponsored account retires your tier, the tier will remain in place for you until you choose a different tier or cancel your subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)" and "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)."

If the account you want to sponsor does not have a profile on {% data variables.product.prodname_sponsors %}, you can encourage the account to join. For more information, see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)" and "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)."

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} is not responsible for how developers represent themselves nor does {% data variables.product.prodname_dotcom %} endorse any sponsored open source projects. The claims are solely the responsibility of the developer receiving the funds. Make sure you trust a person before offering a sponsorship. For more information, see the [{% data variables.product.prodname_sponsors %} Additional Terms](/free-pro-team@latest/site-policy/github-terms/github-sponsors-additional-terms).

{% endnote %}

## Sponsorship fees

{% data reusables.sponsors.no-fees %}

## Tax information

As a sponsor, you acknowledge that we may disclose to the owner of each account you sponsor the following limited information about your sponsorship payments to the account, since the inception of the Sponsors Program:

- Transaction date
- Amount paid
- The country, state, and province from where payment was made
- Whether payment was made by a business or individual

This information is necessary to enable payment and reporting of any taxes arising from such sponsorship payments.

## Sponsoring an account

Before you can sponsor an account, you must have a verified email address. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/verifying-your-email-address)."

1. On {% data variables.product.product_name %}, navigate to the profile of the user or organization you want to sponsor.
1. Navigate to your sponsorship dashboard for the account.
   - To sponsor a developer, under the developer's name, click **Sponsor**.

      ![Screenshot of the sidebar of @octocat's profile page. A button, labeled with a heart icon and "Sponsor", is outlined in dark orange.](/assets/images/help/profile/sponsor-button.png)
   - To sponsor an organization, to the right of the organization's name, click **Sponsor**.
1. Optionally, on the right side of the page, to sponsor the account on behalf of your organization, use the **Sponsor as** drop-down menu, and click the organization.
{% data reusables.sponsors.select-a-tier %}
{% data reusables.sponsors.pay-prorated-amount %}
{% data reusables.sponsors.select-sponsorship-billing %}
{% data reusables.sponsors.who-can-see-your-sponsorship %}
{% data reusables.sponsors.choose-updates %}

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
1. Decide whether you want to receive email updates from the sponsored accounts, then select or deselect **Receive email updates from the maintainers you're sponsoring**.

  {% note %}

  {% data reusables.sponsors.org-email-updates %}

  {% endnote %}

{% data reusables.sponsors.sponsor-as-business %}

1. Review the information about the charge and your billing date, then click **Sponsor NUMBER maintainers**.
