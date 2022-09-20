---
title: Sobre o faturamento da Segurança Avançada do GitHub
intro: 'Caso você queira usar as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} recursos{% ifversion fpt or ghec %} em um repositório privado ou interno{% endif %}, você precisará de uma licença{% ifversion fpt %} para sua empresa{% endif %}.{% ifversion fpt or ghec %} Essas funcionalidades estão disponíveis gratuitamente para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
ms.openlocfilehash: 09e7634b5ab0ace00c847f9db9faf229fc8e840e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066927'
---
## Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

Se você quiser usar as funcionalidades do {% data variables.product.prodname_GH_advanced_security %} em qualquer repositório, além de um repositório público em {% data variables.product.prodname_dotcom_the_website %}, você precisará de uma licença de {% data variables.product.prodname_GH_advanced_security %}, disponível com {% data variables.product.prodname_ghe_cloud %} ou {% data variables.product.prodname_ghe_server %}. Para obter mais informações sobre o {% data variables.product.prodname_GH_advanced_security %}, confira "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

Para obter mais informações sobre cobranças para {% data variables.product.prodname_GH_advanced_security %}, confira a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% elsif ghec %}

Caso você queira usar as funcionalidades do {% data variables.product.prodname_GH_advanced_security %} em qualquer repositório, além de um repositório público em {% data variables.product.prodname_dotcom_the_website %}, você precisará de uma licença do {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações sobre o {% data variables.product.prodname_GH_advanced_security %}, confira "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% elsif ghes %}

Você pode disponibilizar funcionalidades adicionais para segurança de código, comprando e fazendo o upload de uma licença para {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações sobre o {% data variables.product.prodname_GH_advanced_security %}, confira "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

Para discutir licenciamento de {% data variables.product.prodname_GH_advanced_security %} para a sua empresa, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

## Sobre os números do committer para {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

É possível aplicar políticas que permitam ou não o uso de {% data variables.product.prodname_advanced_security %} por parte de organizações pertencentes à conta corporativa. Para obter mais informações, confira "[Como impor políticas para o {% data variables.product.prodname_advanced_security %} na sua empresa]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% ifversion fpt or ghes or ghec %}

Para obter mais informações sobre como ver o uso da licença, confira "[Como ver seu uso do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% endif %}

## Entendendo uso do committer ativo

A linha do tempo a seguir demonstra como a contagem ativa do committer para {% data variables.product.prodname_GH_advanced_security %} pode mudar ao longo do tempo em uma empresa. Por cada mês, você encontrará eventos, juntocom a contagem do autor resultante.

| Data | Eventos durante o mês | Total de committers | 
| :- | :- | -: | 
| <nobr>15 de abril</nobr> | Um membro da sua empresa habilita o {% data variables.product.prodname_GH_advanced_security %} para o repositório **X**. O repositório **X** tem 50 autores de commit nos últimos 90 dias. | **50** | 
| <nobr>1º de maio</nobr> | O desenvolvedor **A** sai da equipe que trabalha no repositório **X**. As contribuições do desenvolvedor **A** continuam contando por 90 dias. | **50** | **50** |
| <nobr>1 de agosto</nobr> | As contribuições do desenvolvedor **A** não são consideradas na contagem das licenças obrigatórias, porque 90 dias se passaram. | <sub>_50 – 1_</sub></br>**49** | 
| <nobr>15 de agosto</nobr> | Um membro da sua empresa habilita o {% data variables.product.prodname_GH_advanced_security %} em um segundo repositório, o repositório **Y**. Nos últimos 90 dias, um total de 20 desenvolvedores contribuíram com esse repositório. Desses 20 desenvolvedores, dez também trabalharam recentemente no repositório **X** e não exigem licenças adicionais. | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>16 de agosto</nobr> | Um membro da sua empresa desabilita o {% data variables.product.prodname_GH_advanced_security %} no repositório **X**. Dos 49 desenvolvedores que estavam trabalhando no repositório **X**, dez ainda trabalham no repositório **Y**, que tem um total de 20 desenvolvedores contribuindo nos últimos 90 dias. | <sub>_49 – 29_</sub><br/>**20** |

{% note %}

**Observação:** um usuário será sinalizado como ativo quando for efetuado push dos commits dele para qualquer branch de um repositório, mesmo que os commits tenham sido criados há mais de 90 dias.

{% endnote %}

## Aproveitando o máximo de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}
