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
shortTitle: Tax information
ms.openlocfilehash: 25c549ef143ae785bc8c1e164a5d9ea86ab0b4bd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149215'
---
## Formatos de impuestos W-9/W-8

Por ley, el Servicio de Impuestos Internos (IRS) de EE. UU. exige que {% data variables.product.prodname_dotcom %} recopile información fiscal de todos los mantenedores de EE. UU. y extranjeros. {% data variables.product.prodname_dotcom %} retiene estos formatos y no se necesitan enviar al IRS. 

### W-9 (U.S.)

La información del formato W-9 ayuda a que {% data variables.product.prodname_dotcom %} utilice el Número de Identificación de Contribuyente (TIN, por sus siglas en inglés) correcto para reportar al IRS los ingresos que se te pagan en un formato 1099.

Si es contribuyente en Estados Unidos, debe enviar un formulario [W-9](https://www.irs.gov/forms-pubs/about-form-w-9) antes de poder publicar el perfil de {% data variables.product.prodname_sponsors %}. 

### W-8 BEN/W-8 BEN-E (Fuera de los EE.UU.)

Los formatos de impuestos W-8 BEN y W-8 BEN-E ayudan a que {% data variables.product.prodname_dotcom %} determine al propietario beneficiario de una cantidad sujeta a retenciones.

Si es contribuyente en cualquier otra región además de Estados Unidos, debe enviar un formulario [W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) (para particulares) o [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e) (para empresas) antes de poder publicar el perfil de {% data variables.product.prodname_sponsors %}. Para más información, consulta "[Configuración de {% data variables.product.prodname_sponsors %} para la cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account#submitting-your-tax-information)" y "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)". {% data variables.product.prodname_dotcom %}te enviará los formatos adecuados, te notificará cuando vayan a expirar, y te dará una cantidad razonable de tiempo para completarlos y enviarlos.

Si se le ha asignado un formulario fiscal incorrecto, [póngase en contacto con el soporte técnico de {% data variables.product.prodname_dotcom %}](https://support.github.com/contact?form%5Bsubject%5D=GitHub%20Sponsors:%20tax%20form&tags=sponsors) para que le vuelvan a asignar el correcto.

### Números de identificación fiscal

Los formularios fiscales W-8 BEN y W-8 BEN-E solicitan un "Número de identificación fiscal (SSN o ITIN) de EE. UU." o "Número de identificación fiscal extranjera". 

Si no es un ciudadano de EE. UU. u otra persona de EE. UU., incluido un extranjero residente, normalmente tendrá que proporcionar el "Número de identificación fiscal extranjero". Este es un número de identificación de contribuyente que tu país de residencia te debe emitir.

Si tu país de residencia o tu país de facturación es India, entonces puedes utilizar tu Número de Cuenta Permanente (PAN) como tu número de identificación de contribuyente.

{% note %}

**Nota:** Si en su país no es obligatorio que los ciudadanos tengan un número de identificación fiscal oficial, en su lugar puede escribir "no es obligatorio por ley".  

Los lineamientos del IRS indican que no debes escribir "no aplicable". Para más información, vea "[Instructions for Form W-8BEN, Line 6](https://www.irs.gov/instructions/iw8ben#idm139867098922656)" (Instrucciones para el formulario W-8BEN, línea 6) en el sitio web del IRS.
{% endnote %}

El IRS permite a extranjeros no residentes y residentes solicitar un [número de identificación de contribuyente individual](https://www.irs.gov/individuals/international-taxpayers/taxpayer-identification-numbers-tin#itin) o ITIN. Es poco probable que esto sea necesario para los mantenedores que reciben ingresos mediante {% data variables.product.prodname_sponsors %}, pero lea las [instrucciones](https://www.irs.gov/pub/irs-pdf/iw8ben.pdf) completas para determinar sus circunstancias individuales.

## Formatos 1099

Si es contribuyente en Estados Unidos y gana más de 600 USD en un año fiscal, {% data variables.product.prodname_dotcom %} le enviará un formulario [1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec) antes del 31 de enero del año natural calendario. No proporcionamos formularios fiscales para los contribuyentes internacionales.

## Información fiscal general

{% data variables.product.prodname_dotcom %} no retiene impuestos de {% data variables.product.prodname_sponsors %} pagos. Los programadores patrocinados son responsables de estimar y pagar sus propios impuestos.

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

## Impuestos de ventas

GitHub está proporcionando información par ayudarte a calcular tus deberes de impuestos de ventas. Esta información no está personalizada para tu país o situación fiscal y te recomendamos que consultes a un profesional para entender tus obligaciones fiscales específicas. Sin embargo, nos gustaría proporcionarte información de alto nivel para ayudarte a entender los principios generales de los impuestos por ventas digitales.

En la mayoría de los países del mundo, los impuestos de ventas por transacciones digitales se basan en la ubicación del receptor y no del vendedor. Por ejemplo, si eres un mantenedor en los Estados Unidos y proporcionas un beneficio gravable a un Patrocinador en Alemania, se aplicarían los impuestos de ventas para Alemania.

Los impuestos de ventas se aplican generalmente solo cuando se proporciona un bien o se cobra por un servicio. Los actos de buena fe/apoyo general/apreciación leal no se gravan habitualmente.

En los EE.UU., tanto las ventas de B2B (negocio a negocio) como de B2C (negocio a cliente) están sujetos a tener impuestos gravables.

En los EE.UU. y en la mayoría del resto de los países y regiones, las ventas de B2C están sujetas a tener impuestos gravables. Las ventas de B2B no están sujetas a ser gravables. Las ventas de C2C y C2B, en donde los consumidores no se registraron para declarar IVA, no son gravables.

## Información adicional

- [Visualización de los patrocinadores y patrocinios](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
