---
title: Información de facturación para los Patrocinadores de GitHub
intro: 'Los desarrolladores y organizaciones patrocinados deben emitir su información fiscal a {% data variables.product.prodname_dotcom %} y son responsables de evaluar y pagar sus propios impuestos.'
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
shortTitle: Información fiscal
---

## Formatos de impuestos W-9/W-8

Por ley, el Servicio de Impuestos Internos de los EE.UU. requiere que {% data variables.product.prodname_dotcom %} recopile información sobre los impuestos de todos los mantenedores tanto dentro como fuera de los EE.UU. {% data variables.product.prodname_dotcom %} retiene estos formatos y no se necesitan enviar al IRS.

### W-9 (U.S.)

La información del formato W-9 ayuda a que {% data variables.product.prodname_dotcom %} utilice el Número de Identificación de Contribuyente (TIN, por sus siglas en inglés) correcto para reportar al IRS los ingresos que se te pagan en un formato 1099.

Si eres un contribuyente en los Estados Unidos, debes emitir un formato ["W-9](https://www.irs.gov/forms-pubs/about-form-w-9) antes de poder publicar tu perfil de {% data variables.product.prodname_sponsors %}.

### W-8 BEN/W-8 BEN-E (Fuera de los EE.UU.)

Los formatos de impuestos W-8 BEN y W-8 BEN-E ayudan a que {% data variables.product.prodname_dotcom %} determine al propietario beneficiario de una cantidad sujeta a retenciones.

Si eres un contribuyente en cualquier otra región diferente a los Estados Unidos, debes emitir un formato [W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) (individual) o [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e) (para empresas) antes de publicar tu perfil de {% data variables.product.prodname_sponsors %}. Para obtener más información, consulta las secciones "[Configurar {% data variables.product.prodname_sponsors %} para tu cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account#submitting-your-tax-information)" y "[Confgurar {% data variables.product.prodname_sponsors %} para tu organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)". {% data variables.product.prodname_dotcom %}te enviará los formatos adecuados, te notificará cuando vayan a expirar, y te dará una cantidad razonable de tiempo para completarlos y enviarlos.

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

## Impuestos de ventas

GitHub está proporcionando información par ayudarte a calcular tus deberes de impuestos de ventas. Esta información no está personalizada para tu país o situación fiscal y te recomendamos que consultes a un profesional para entender tus obligaciones fiscales específicas. Sin embargo, nos gustaría proporcionarte información de alto nivel para ayudarte a entender los principios generales de los impuestos por ventas digitales.

En la mayoría de los países del mundo, los impuestos de ventas por transacciones digitales se basan en la ubicación del receptor y no del vendedor. Por ejemplo, si eres un mantenedor en los Estados Unidos y proporcionas un beneficio gravable a un Patrocinador en Alemania, se aplicarían los impuestos de ventas para Alemania.

Los impuestos de ventas se aplican generalmente solo cuando se proporciona un bien o se cobra por un servicio. Los actos de buena fe/apoyo general/apreciación leal no se gravan habitualmente.

En los EE.UU., tanto las ventas de B2B (negocio a negocio) como de B2C (negocio a cliente) están sujetos a tener impuestos gravables.

En los EE.UU. y en la mayoría del resto de los países y regiones, las ventas de B2C están sujetas a tener impuestos gravables. Las ventas de B2B no están sujetas a ser gravables. Las ventas de C2C y C2B, en donde los consumidores no se registraron para declarar IVA, no son gravables.

## Leer más

- [Ver tus patrocinadores y patrocinios](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
