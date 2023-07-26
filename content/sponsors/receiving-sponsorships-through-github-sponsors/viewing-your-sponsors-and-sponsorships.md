---
title: Viewing your sponsors and sponsorships
intro: You can view and export detailed information and analytics about your sponsors and sponsorships.
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
  - /github/supporting-the-open-source-community-with-github-sponsors/viewing-your-sponsors-and-sponsorships
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Analytics
shortTitle: View sponsors & sponsorships
---

## About sponsors and sponsorships

You can view analytics on your current and past sponsorships, the payments you've received from sponsors, and events, such as cancellations and sponsor tier changes for your sponsorships. You can also view activity such as new sponsorships, changes to sponsorships, and canceled sponsorships. You can filter the list of activities by date. You can also export sponsorship data for the account you're viewing in CSV or JSON format.

## About transaction metadata

To track where your sponsorships are coming from, you can use custom URLs with metadata for your {% data variables.product.prodname_sponsors %} profile or checkout page. The metadata will be included in your transaction export in the metadata column. For more information about exporting transaction data, see "[Exporting your sponsorship data](#exporting-your-sponsorship-data)."

Metadata must use the `key=value` format and can be added to the end of these URLs.

- Sponsored account profile: `https://github.com/sponsors/{account}`
- Sponsorship checkout: `https://github.com/sponsors/{account}/sponsorships`

The metadata will persist in the URL as a potential sponsor switches accounts to sponsor with, selects monthly or one-time payments, and chooses a different tier.

### Syntax requirements

Your metadata must meet the following requirements, which do not apply to any other URL parameters that are passed.

- Keys must be prefixed by `metadata_`, such as `metadata_campaign`. In your transaction export, the `metadata_` prefix will be removed from the key.
- Keys and values must only contain alphanumeric values, dashes, or underscores. If non-accepted characters are passed in either keys or values, a 404 error will be presented.
- Whitespaces are not allowed.
- A maximum of **10** key-value pairs are accepted per request. If more are passed, only the first 10 will be saved.
- A maximum of **25** characters per key are accepted. If more than that are passed, only the first 25 will be saved.
- A maximum of **100** characters per value are accepted. If more than that are passed, only the first 100 will be saved.

For example, you can use `https://github.com/sponsors/{account}?metadata_campaign=myblog` to track sponsorships that originate from your blog. `metadata_campaign` is the key and `myblog` is the value. In the metadata column of your transaction export, the key will be listed as `campaign`.

## Viewing your sponsors and sponsorships

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. Optionally, to filter your sponsors by tier, use the **Filter** drop-down menu, click **Active tiers** or **Retired tiers**, and select a tier.

   ![Screenshot of the {% data variables.product.prodname_sponsors %} dashboard. An expanded dropdown menu, labeled "Filter: all sponsors," is outlined in dark orange.](/assets/images/help/sponsors/tier-filter-dropdown.png)

## Viewing recent sponsorship activity

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.your-sponsors-tab %}

## Exporting your sponsorship data

You can export your sponsorship transactions by month. {% data variables.product.company_short %} will send you an email with transaction data for all of your sponsors for the month you select. After the export is complete, you can export another month of data. You can export up to 10 sets of data per hour for any of your sponsored accounts.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.your-sponsors-tab %}
1. In the top-right, click {% octicon "download" aria-hidden="true" %} **Export**.
1. Choose a time frame and a format for the data you'd like to export, then click **Start export**.
