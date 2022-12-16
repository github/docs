---
title: Melhores práticas para empresas
shortTitle: Best practices
intro: 'Conheça as melhores práticas da {% data variables.product.company_short %} para sua empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9c9ccfb0437b451188f8180dcf5ae29a6030f72d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163422'
---
{% ifversion ghec %}
## Como identificar o melhor método de autenticação para sua empresa

{% data reusables.enterprise.ghec-authentication-options %}

Para identificar o método de autenticação que melhor atenderá às suas necessidades, confira "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)". {% endif %}

## Como usar políticas

Recomenda-se o uso de políticas para impor regras de negócio e a conformidade regulatória. 

{% data reusables.enterprise.about-policies %} Para ver mais informações, confira "[Sobre políticas corporativas](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)".

## Minimizar o número de organizações

As grandes empresas geralmente precisam de diversas organizações, mas tente criar o menor número possível para refletir as divisões corporativas de nível superior. Um número menor de organizações incentiva práticas de fontes internas e permite que as discussões envolvam um público mais amplo.

Como alternativa, é possível gerenciar o acesso ao repositório e os requisitos de segurança em um nível mais granular em cada organização usando equipes. Para obter mais informações, confira "[Sobre as equipes](/organizations/organizing-members-into-teams/about-teams)".

## Evitar a colaboração extensiva em repositórios de propriedade do usuário

Recomenda-se colaborar em repositórios de propriedade da organização sempre que possível e minimizar a colaboração em repositórios de propriedade dos usuários. Os repositórios de propriedade da organização têm recursos administrativos e de segurança mais sofisticados e permanecem acessíveis mesmo quando a associação corporativa muda.

## Usar nomes de usuário legíveis

{% ifversion ghec %}Para controlar os nomes de usuário dos membros corporativos, use{% else %}Use{% endif %} nomes de usuário legíveis e evite IDs geradas por computador que são difíceis de ler.

É possível gerenciar a exibição de nomes de usuário nos repositórios privados da sua empresa. Para obter mais informações, confira "[Gerenciando a exibição de nomes de membros em sua organização](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)".

## Leitura adicional

- "[Práticas recomendadas para repositórios](/repositories/creating-and-managing-repositories/best-practices-for-repositories)"
- "[Práticas recomendadas para organizações](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)"
