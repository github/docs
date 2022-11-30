---
title: Git LFS
intro: 'Você pode habilitar ou desabilitar o {% data variables.large_files.product_name_long %} (LFS) em um repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e8a08167bb966b1dd397d8cfa7b4a9e9952946ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108259'
---
## Sobre a API do {% data variables.large_files.product_name_short %}

Você pode usar o {% data variables.large_files.product_name_short %} para armazenar arquivos grandes em um repositório Git. A API do {% data variables.large_files.product_name_short %} permite habilitar ou desabilitar o recurso em um repositório individual. Para obter mais informações sobre o {% data variables.large_files.product_name_short %}, confira "[Sobre o {% data variables.large_files.product_name_short %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)".

As pessoas com acesso de administrador a um repositório podem usar a API do {% data variables.large_files.product_name_short %}.

{% ifversion fpt or ghec %}

O uso do {% data variables.large_files.product_name_short %} está sujeito à cobrança. Para obter mais informações, confira "[Sobre cobrança para {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)".

Se você quiser usar a API do {% data variables.large_files.product_name_short %} para um repositório que pertença a uma organização, sua função precisará dar acesso de cobrança à organização {% ifversion ghec %} ou à empresa {% endif %}.{% ifversion fpt %} Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)".{% endif %}

{% ifversion ghec %}

| Propriedade do repositório | Acesso necessário ao repositório | Função necessária | Mais informações |
| :- | :- | :- | :- |
| Conta pessoal | Admin | N/D | N/D |
| <ul><li>Organização em {% data variables.product.prodname_team %}</li><li>Organização em {% data variables.product.product_name %}, mas não em uma empresa</li></ul> | Administração, que será herdado se você for um proprietário da organização | Proprietário da organização ou gerente de cobrança | "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)" |
| Organização em uma empresa | Administração, que poderá ser herdado se você for proprietário da organização | Proprietário corporativo ou gerente de cobrança | "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)" |

{% endif %}

{% endif %}
