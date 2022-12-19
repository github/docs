---
title: Gerenciando o acesso ao repositório para os codespaces da sua organização
shortTitle: Repository access
intro: 'Você pode gerenciar os repositórios de sua organização que o {% data variables.product.prodname_github_codespaces %} pode acessar.'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
ms.openlocfilehash: 9fdec24104a61170977053195446db0b4cf0a62f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159399'
---
{% warning %}

**Observação de substituição**: a configuração de acesso e segurança descrita abaixo foi preterida e está documentada aqui somente para referência. Para habilitar o acesso expandido a outros repositórios, adicione as permissões solicitadas ao seu arquivo de configuração `devcontainer.json`. Para obter mais informações, veja "[Gerenciando o acesso a outros repositórios em seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

{% endwarning %}

Por padrão, um codespace só pode acessar o repositório onde foi criado. Ao habilitar o acesso e a segurança de um repositório pertencente à sua organização, todos os codespaces que forem criados para esse repositório também terão permissões de leitura para todos os outros repositórios que a organização possui e o criador de codespace terá permissões para acessar. Se você deseja restringir os repositórios que um codespace pode acessar, você pode limitá-lo ao repositório em que o codespace foi criado ou a repositórios específicos. Você só deve habilitar o acesso e a segurança para repositórios nos quais confia.

Para gerenciar quais usuários em sua organização podem usar {% data variables.product.prodname_github_codespaces %}, confira "[Como habilitar {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Em "Acesso e segurança", selecione a configuração que você deseja para a sua organização.
  ![Botões de opção usados para gerenciar repositórios confiáveis](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. Se você tiver escolhido "Repositórios selecionados", clique no menu suspenso e, em seguida, em um repositório para permitir que os codespaces dele acessem outros repositórios pertencentes à sua organização. Repita isso para todos os repositórios cujos códigos você deseja que acessem outros repositórios.
    ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Leitura adicional

- "[Como gerenciar o acesso ao repositório para seus codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)"
