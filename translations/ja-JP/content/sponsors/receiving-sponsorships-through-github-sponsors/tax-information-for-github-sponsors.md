---
title: GitHub スポンサーの納税情報
intro: 'スポンサード開発者および Organization は、{% data variables.product.prodname_dotcom %} に納税フォームをサブミットする必要があり、自分の税金を算出して支払う責任を負います。'
redirect_from:
  - /articles/tax-information-for-sponsored-developers
  - /github/supporting-the-open-source-community-with-github-sponsors/tax-information-for-sponsored-developers
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Open Source
  - Sponsors payments
shortTitle: Tax information
---

## W-9/W-8 tax forms

By law, {% data variables.product.prodname_dotcom %} is required by the U.S. Internal Revenue Service (IRS) to collect tax information from all U.S. and non-U.S. maintainers. These forms are held by {% data variables.product.prodname_dotcom %} and are not required to be submitted to the IRS.

### W-9 (U.S.)

The information from W-9 tax forms helps {% data variables.product.prodname_dotcom %} use the correct Taxpayer Identification Number (TIN) to report income paid to you to the IRS in a 1099 form.

If you are a taxpayer in the United States, you must submit a [W-9](https://www.irs.gov/forms-pubs/about-form-w-9) before you can publish your {% data variables.product.prodname_sponsors %} profile.

### W-8 BEN/W-8 BEN-E (non-U.S.)

W-8 BEN and W-8 BEN-E tax forms help {% data variables.product.prodname_dotcom %} determine the beneficial owner of an amount subject to withholding.

If you are a taxpayer in any other region besides the United States, you must submit a [W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) (individual) or [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e) (company) form before you can publish your {% data variables.product.prodname_sponsors %} profile. For more information, see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account#submitting-your-tax-information)" and "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)." {% data variables.product.prodname_dotcom %} から適切なフォームが送信されて期限が通知され、フォームに記入して送信する十分な時間が与えられます。

If you have been assigned an incorrect tax form, [contact {% data variables.product.prodname_dotcom %} Support](https://support.github.com/contact?form%5Bsubject%5D=GitHub%20Sponsors:%20tax%20form&tags=sponsors) to get reassigned the correct one for your situation.

### Tax identification numbers

The W-8 BEN and W-8 BEN-E tax forms ask for a "U.S. taxpayer identification number (SSN or ITIN)" or "Foreign tax identifying number".

If you are not a U.S. citizen or other U.S. person, including a resident alien individual, then you will usually need to provide the "Foreign tax identifying number". This is a tax identification number that your country of residence has issued you.

If your country of residence or billing country is India, then you can use your Permanent Account Number (PAN) as your tax identification number.

{% note %}

**Note:** If your country does not require citizens to have a tax number issued by the government, then you can instead write "not legally required".

Guidance from the IRS states that you should not write "not applicable." For more information, see "[Instructions for Form W-8BEN, Line 6](https://www.irs.gov/instructions/iw8ben#idm139867098922656)" on the IRS website.
{% endnote %}

The IRS allows non-resident and resident aliens to request an [Individual Taxpayer Identification Number](https://www.irs.gov/individuals/international-taxpayers/taxpayer-identification-numbers-tin#itin) or ITIN. It is unlikely that this is necessary for maintainers receiving income through {% data variables.product.prodname_sponsors %}, but read the full [instructions](https://www.irs.gov/pub/irs-pdf/iw8ben.pdf) to determine your individual circumstances.

## 1099 forms

If you are a taxpayer in the United States and earn more than 600 US dollars in a tax year, {% data variables.product.prodname_dotcom %} will send you a [1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec) before January 31 of the next calendar year. 米国外の納税者に対しては、納税フォームを提供しません。

## General tax information

{% data variables.product.prodname_dotcom %} は、{% data variables.product.prodname_sponsors %} の支払いについて源泉徴収しません。 スポンサード開発者は、自らの税金を算出して支払う責任を負います。

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

## Sales tax

GitHub is providing information to assist you in calculating your sales tax obligations. This information is not personalized to your country or tax situation and we recommend you talk to a professional to understand your specific obligations. However, we'd like to provide some high-level information to help you understand the general principles of digital sales tax.

In most countries around the world, sales tax for digital transactions is based on the location of the recipient, not on the seller. For example, if you are a maintainer in the United States and you provide a taxable benefit to a Sponsor in Germany, German sales tax would apply.

Sales tax is generally only applicable when a good or service of value is being provided. Goodwill/general support/undying appreciation is not normally taxable.

In the US, both B2B (business-to-business) and B2C (business-to-consumer) are subject to sales tax.

In the EU and most other countries and regions, B2C sales are subject to sales tax. B2B sales are not subject to tax. C2C and C2B sales where a consumer is not registered for VAT are not taxable.

## 参考リンク

- [スポンサーとスポンサーシップを表示する](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
