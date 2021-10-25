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

## Formatos de impuestos W-9/W-8

Por ley, el Servicio de Impuestos Internos de los EE.UU. requiere que {% data variables.product.prodname_dotcom %} recopile información sobre los impuestos de todos los mantenedores tanto dentro como fuera de los EE.UU. {% data variables.product.prodname_dotcom %} retiene estos formatos y no se necesitan enviar al IRS.

### W-9 (U.S.)

La información del formato W-9 ayuda a que {% data variables.product.prodname_dotcom %} utilice el Número de Identificación de Contribuyente (TIN, por sus siglas en inglés) correcto para reportar al IRS los ingresos que se te pagan en un formato 1099.

Si eres un contribuyente en los Estados Unidos, debes emitir un formato ["W-9](https://www.irs.gov/forms-pubs/about-form-w-9) antes de poder publicar tu perfil de {% data variables.product.prodname_sponsors %}.

### W-8 BEN/W-8 BEN-E (Fuera de los EE.UU.)

Los formatos de impuestos W-8 BEN y W-8 BEN-E ayudan a que {% data variables.product.prodname_dotcom %} determine al propietario beneficiario de una cantidad sujeta a retenciones.

Si eres un contribuyente en cualquier otra región diferente a los Estados Unidos, debes emitir un formato [W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) (individual) o [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e) (para empresas) antes de publicar tu perfil de {% data variables.product.prodname_sponsors %}. Para obtener más información, consulta las secciones "[Configurar {% data variables.product.prodname_sponsors %} para tu cuenta de usuario](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account#submitting-your-tax-information)" y "[Configurar {% data variables.product.prodname_sponsors %} para tu organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)". {% data variables.product.prodname_dotcom %}te enviará los formatos adecuados, te notificará cuando vayan a expirar, y te dará una cantidad razonable de tiempo para completarlos y enviarlos.

Si se te asignó un formato de impuestos incorrecto, [contacta al Soporte de {% data variables.product.prodname_dotcom %}](https://support.github.com/contact?form%5Bsubject%5D=GitHub%20Sponsors:%20tax%20form&tags=sponsors) para que se te reasigne el formato correcto para tu situación.

### Números de identificación de impuestos

Los formatos de impuestos W-8 BEN y  W-8 BEN-E requieren un "número de identificación de contribuyente (SSN o ITIN) de los EE.UU." o de un "Número de identificación de contribuyente extranjero".

Si no eres ciudadano de los EE.UU. o cualquier otro tipo de persona que resida en los EE.UU., incluyendo a los extranjeros residentes individuales, entonces lo común es que necesites proporcionar el "Número de identificación de contribuyente extranjero". Este es un número de identificación de contribuyente que tu país de residencia te debe emitir.

Si tu país de residencia o tu país de facturación es India, entonces puedes utilizar tu Número de Cuenta Permanente (PAN) como tu número de identificación de contribuyente.

{% note %}

**Nota:** Si tu país no requiere que su gobierno emita un número de contribuyente a sus ciudadanos, entonces puedes escribir "no se requiere legalmente".

Los lineamientos del IRS indican que no debes escribir "no aplicable". Para obtener más información, consulta la sección "[Instrucciones para el Formato W-.8BEN, Línea 6](https://www.irs.gov/instructions/iw8ben#idm139867098922656)" en el sitio web del IRS.
{% endnote %}

El IRS permite que los residentes extranjeros y los no residentes soliciten un [Número Individual de Identificación de Contribuyente](https://www.irs.gov/individuals/international-taxpayers/taxpayer-identification-numbers-tin#itin) o ITIN. Es poco común que esto sea necesario para los mantenedores que reciben ingresos a través de {% data variables.product.prodname_sponsors %}, pero puedes leer todas las [instrucciones](https://www.irs.gov/pub/irs-pdf/iw8ben.pdf) para determinar tus circunstancias individuales.

## Formatos 1099

Si eres un contribuyente en los Estados Unidos y ganas más de 600 dólares estadounidenses en un año fiscal, {% data variables.product.prodname_dotcom %} te enviará un formato [1099 NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec) antes del 31 de enero del siguiente año calendario. No proporcionamos formularios fiscales para los contribuyentes internacionales.

## Información fiscal general

{% data variables.product.prodname_dotcom %} no retiene impuestos de {% data variables.product.prodname_sponsors %} pagos. Los programadores patrocinados son responsables de estimar y pagar sus propios impuestos.

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

## Sales tax

GitHub is providing information to assist you in calculating your sales tax obligations. This information is not personalized to your country or tax situation and we recommend you talk to a professional to understand your specific obligations. However, we'd like to provide some high-level information to help you understand the general principles of digital sales tax.

In most countries around the world, sales tax for digital transactions is based on the location of the recipient, not on the seller. For example, if you are a maintainer in the United States and you provide a taxable benefit to a Sponsor in Germany, German sales tax would apply.

Sales tax is generally only applicable when a good or service of value is being provided. Goodwill/general support/undying appreciation is not normally taxable.

In the US, both B2B (business-to-business) and B2C (business-to-consumer) are subject to sales tax.

In the EU and most other countries and regions, B2C sales are subject to sales tax. B2B sales are not subject to tax. C2C and C2B sales where a consumer is not registered for VAT are not taxable.

## Leer más

- [Ver tus patrocinadores y patrocinios](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
