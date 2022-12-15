---
title: Sobre as políticas empresariais
intro: 'Com as políticas empresariais, você pode gerenciar as políticas de todas as organizações pertencentes à empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
ms.openlocfilehash: d452a6f24b3108b915e20b673ebd317a409ac8ae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718114'
---
Como ajuda para impor regras de negócios e conformidade regulatória, as políticas oferecem um ponto único de gerenciamento para todas as organizações pertencentes a uma conta empresarial. 

{% data reusables.enterprise.about-policies %}

Por exemplo, com a política "Permissões base", você pode permitir que os proprietários de organização configurem a política "Permissões base" para as respectivas organizações ou impor um nível de permissões base específico, como "Leitura", a todas as organizações da empresa.

Por padrão, nenhuma política empresarial é imposta. Para identificar as políticas que devem ser impostas a fim de atender aos requisitos exclusivos da empresa, recomendamos examinar todas as políticas disponíveis na conta empresarial, começando com as políticas de gerenciamento de repositório. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)".

Enquanto você estiver configurando políticas empresariais, como ajuda para entender o impacto da alteração de cada política, você pode ver as configurações atuais das organizações pertencentes à empresa.

{% ifversion ghes %} Outra maneira de impor padrões na empresa é usar ganchos de pré-recebimento, que são scripts executados no {% data variables.product.product_location %} para implementar verificações de qualidade. Para obter mais informações, confira "[Como impor uma política com ganchos de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks)".
{% endif %}

## Leitura adicional

- "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)"
