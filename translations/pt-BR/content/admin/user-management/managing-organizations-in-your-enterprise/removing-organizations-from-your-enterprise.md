---
title: Removendo organizações da sua empresa
intro: 'Se uma organização não fizer mais parte de sua empresa, você poderá remover a organização.'
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Removing organizations
ms.openlocfilehash: 8645e8f6d424ee8a02ae5d414e9901173df460aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094582'
---
{% warning %}

**Aviso**: quando você remover uma organização da sua empresa:
- A cobrança, gestão de identidade, requisitos de 2FA e outras políticas para a organização não serão mais regidos pela sua empresa.
- A organização será rebaixada para o plano gratuito.
- A organização será regida pelos nossos Termos de Serviço padrão.
- Todos os repositórios internos da organização serão convertidos em repositórios privados.

{% endwarning %}

## Removendo uma organização da sua empresa

{% data reusables.enterprise-accounts.access-enterprise %}
2. Em "Organizações", na barra de pesquisa, comece a digitar o nome da organização até que a organização apareça nos resultados de busca.
![Captura de tela do campo de pesquisa para organizações](/assets/images/help/enterprises/organization-search.png)
3. À direita do nome da organização, selecione o menu suspenso {% octicon "gear" aria-label="The gear icon" %} e clique em **Remover organização**.
![Captura de tela de uma organização nos resultados da pesquisa](/assets/images/help/enterprises/remove-organization.png)
4. Revise os avisos e clique em **Remover organização**.
![Captura de tela de uma mensagem de aviso e botão usado para remover a organização](/assets/images/help/enterprises/remove-organization-warning.png)
