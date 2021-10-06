---
title: Información de facturación para los Patrocinadores de GitHub
intro: 'Los desarrolladores y organizaciones patrocinados deben emitir su información fiscal a {% data variables.product.prodname_dotcom %} y son responsables de evaluar y pagar sus propios impuestos.'
redirect_from:
  - /articles/tax-information-for-sponsored-developers
  - /github/supporting-the-open-source-community-with-github-sponsors/tax-information-for-sponsored-developers
versions:
  fpt: '*'
type: overview
topics:
  - Open Source
  - Sponsors payments
shortTitle: Información fiscal
---

## W-9/W-8 tax forms

By law, {% data variables.product.prodname_dotcom %} is required by the U.S. Internal Revenue Service (IRS) to collect tax information from all U.S. and non-U.S. maintainers. These forms are held by {% data variables.product.prodname_dotcom %} and are not required to be submitted to the IRS.

### W-9 (U.S.)

The information from W-9 tax forms helps {% data variables.product.prodname_dotcom %} use the correct Taxpayer Identification Number (TIN) to report income paid to you to the IRS in a 1099 form.

If you are a taxpayer in the United States, you must submit a [W-9](https://www.irs.gov/forms-pubs/about-form-w-9) before you can publish your {% data variables.product.prodname_sponsors %} profile.

### W-8 BEN/W-8 BEN-E (non-U.S.)

W-8 BEN and W-8 BEN-E tax forms help {% data variables.product.prodname_dotcom %} determine the beneficial owner of an amount subject to withholding.

If you are a taxpayer in any other region besides the United States, you must submit a [W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) (individual) or [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e) (company) form before you can publish your {% data variables.product.prodname_sponsors %} profile. Para obtener más información, consulta las secciones "[Configurar {% data variables.product.prodname_sponsors %} para tu cuenta de usuario](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account#submitting-your-tax-information)" y "[Configurar {% data variables.product.prodname_sponsors %} para tu organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)". {% data variables.product.prodname_dotcom %}te enviará los formatos adecuados, te notificará cuando vayan a expirar, y te dará una cantidad razonable de tiempo para completarlos y enviarlos.

If you have been assigned an incorrect tax form, [contact {% data variables.product.prodname_dotcom %} Support](https://support.github.com/contact?form%5Bsubject%5D=GitHub%20Sponsors:%20tax%20form&tags=sponsors) to get reassigned the correct one for your situation.

### Tax identification numbers

The W-8 BEN and W-8 BEN-E tax forms ask for a "U.S. taxpayer identification number (SSN or ITIN)" or "Foreign tax identifying number".

If you are not a U.S. citizen or other U.S. person, including a resident alien individual, then you will usually need to provide the "Foreign tax identifying number". This is a tax identification number that your country of residence has issued you.

{% note %}

**Note:** If your country does not require citizens to have a tax number issued by the government, then you can instead write "not legally required".

Guidance from the IRS states that you should not write "not applicable." For more information, see "[Instructions for Form W-8BEN, Line 6](https://www.irs.gov/instructions/iw8ben#idm139867098922656)" on the IRS website.
{% endnote %}

The IRS allows non-resident and resident aliens to request an [Individual Taxpayer Identification Number](https://www.irs.gov/individuals/international-taxpayers/taxpayer-identification-numbers-tin#itin) or ITIN. It is unlikely that this is necessary for maintainers receiving income through {% data variables.product.prodname_sponsors %}, but read the full [instructions](https://www.irs.gov/pub/irs-pdf/iw8ben.pdf) to determine your individual circumstances.

## 1099 forms

If you are a taxpayer in the United States and earn more than 600 US dollars in a tax year, {% data variables.product.prodname_dotcom %} will send you a [1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec) before January 31 of the next calendar year. No proporcionamos formularios fiscales para los contribuyentes internacionales.

## General tax information

{% data variables.product.prodname_dotcom %} no retiene impuestos de {% data variables.product.prodname_sponsors %} pagos. Los programadores patrocinados son responsables de estimar y pagar sus propios impuestos.

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

## Leer más

- [Ver tus patrocinadores y patrocinios](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
