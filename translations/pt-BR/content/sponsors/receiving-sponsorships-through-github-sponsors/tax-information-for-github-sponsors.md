---
title: Informações fiscais para os Patrocinadores do GitHub
intro: 'Os desenvolvedores patrocinados e as organizações devem enviar informações fiscais para {% data variables.product.prodname_dotcom %} e são responsáveis por avaliar e pagar seus próprios impostos.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149201'
---
## Formulários fiscais W-9/W-8

Por lei, o {% data variables.product.prodname_dotcom %} é obrigado pela Receita Federal dos EUA a coletar informações fiscais de todos os mantenedores que são e que não dos EUA. Esses formulários são mantidos por {% data variables.product.prodname_dotcom %} e não têm de ser enviados ao IRS. 

### W-9 (EUA)

As informações de formulários de imposto W-9 ajudam {% data variables.product.prodname_dotcom %} a usar o Número de Identificação do Contribuinte (TIN) correto para informar a renda que você recebe ao IRS em um formulário 1099.

Se você for um contribuinte no Estados Unidos, deverá enviar um [W-9](https://www.irs.gov/forms-pubs/about-form-w-9) para poder publicar seu perfil de {% data variables.product.prodname_sponsors %}. 

### W-8 BEN/W-8 BEN-E (fora dos EUA)

Os formulários de imposto W-8 BEN e W-8 BEN-E ajudam {% data variables.product.prodname_dotcom %} a determinar o proprietário beneficiário de uma quantia sujeita a retenção.

Se você for um contribuinte em qualquer outra região diferente do Estados Unidos, deverá enviar um formulário [W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) (individual) ou [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e) (empresa) para publicar seu perfil de {% data variables.product.prodname_sponsors %}. Para obter mais informações, confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua conta pessoal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account#submitting-your-tax-information)" e "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)". {% data variables.product.prodname_dotcom %} lhe enviará os formulários apropriados, avisando quando estiverem vencidos, e lhe dará um tempo razoável para completar e enviar os formulários.

Se você tiver recebido um formulário de imposto incorreto, [entre em contato com o suporte do {% data variables.product.prodname_dotcom %}](https://support.github.com/contact?form%5Bsubject%5D=GitHub%20Sponsors:%20tax%20form&tags=sponsors) para obter o formulário correto para sua situação.

### Números de identificação fiscal

Os formulários de impostos W-8 BEN e W-8 BEN-E pedem um "número de identificação do contribuinte dos EUA (SSN ou ITIN)" ou "Número de identificação fiscal estrangeiro". 

Se você não for um cidadão americano ou outra pessoa dos EUA, incluindo um estrangeiro residente, geralmente você terá de fornecer o "número de identificação fiscal estrangeiro". Este é um número de identificação fiscal emitido pelo seu país de residência.

Se o seu país de residência ou país de cobrança for a Índia, você poderá usar o seu Número de Conta Permanente (PAN) como seu número de identificação fiscal.

{% note %}

**Observação:** se o seu país não exigir que os cidadãos tenham um número fiscal emitido pelo governo, você poderá escrever "não exigido legalmente".  

A orientação do IRS afirma que você não deve escrever "não se aplica". Para obter mais informações, confira "[Instruções para o Formulário W-8BEN, Linha 6](https://www.irs.gov/instructions/iw8ben#idm139867098922656)" no site do IRS.
{% endnote %}

O IRS permite que estrangeiros não residentes e residentes solicitem um [Número de Identificação Individual do Contribuinte](https://www.irs.gov/individuals/international-taxpayers/taxpayer-identification-numbers-tin#itin) ou ITIN. É improvável que isso seja necessário para que os mantenedores que recebem renda por meio de {% data variables.product.prodname_sponsors %}, mas leia as todas as [instruções](https://www.irs.gov/pub/irs-pdf/iw8ben.pdf) para determinar as suas circunstâncias específicas.

## Formulários 1099

Se você for contribuinte nos Estados Unidos e ganhar mais de 600 dólares americanos em um ano fiscal, o {% data variables.product.prodname_dotcom %} enviará a você um formulário [1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec) até 31 de janeiro do ano-calendário seguinte. Não fornecemos formulários de impostos para contribuintes internacionais.

## Informações fiscais gerais

O {% data variables.product.prodname_dotcom %} não retém impostos de pagamentos de {% data variables.product.prodname_sponsors %}. Os desenvolvedores patrocinados são responsáveis por avaliar e pagar seus próprios impostos.

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

## Imposto sobre vendas

O GitHub fornece informações para ajudar você a calcular suas obrigações fiscais de vendas. Essas informações não estão personalizada para seu país ou situação fiscal e recomendamos que você fale com um profissional para entender suas obrigações específicas. No entanto, gostaríamos de fornecer algumas informações de alto nível para ajudar você a entender os princípios gerais do imposto sobre vendas digitais.

Na maioria dos países, o imposto sobre vendas para transações digitais baseia-se na localização do beneficiário, não no vendedor. Por exemplo, se formos um mantenedor nos Estados Unidos e dermos um benefício tributável a um patrocinador na Alemanha, aplicar-se-ia o imposto alemão sobre as vendas.

Geralmente, o imposto sobre vendas só é aplicável quando um produto ou serviço é fornecido. Os atos de boa fé, suporte geral e apreciação legal geralmente não são tributáveis.

Nos EUA, tanto o B2B (business-to-business) como o B2C (business-to-consumer) estão sujeitos a um imposto sobre as vendas.

Na UE e na maioria dos outros países e regiões, as vendas B2C estão sujeitas ao imposto sobre as vendas. As vendas B2B não estão sujeitas a impostos. As vendas C2C e C2B quando um consumidor não está registrado para IVA não são tributáveis.

## Leitura adicional

- [Exibir seus patrocinadores e patrocínios](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
