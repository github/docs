---
title: Transferir um problema para outro repositório
intro: 'Para mover um problema para um repositório mais adequado, você pode transferir problemas abertos para outros repositórios.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
ms.openlocfilehash: 4e4892468178e7440be7e0a730a948ce2465f1dc
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145126586'
---
Para transferir um problema aberto para outro repositório, é preciso ter acesso de gravação no repositório em que o problema está e no repositório para onde você está transferindo o problema. Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% note %}

**Observação**: só é possível transferir problemas entre repositórios pertencentes à mesma conta de usuário ou de organização. {% ifversion fpt or ghes or ghec %}Um problema de repositório privado não pode ser transferido para um repositório público.{% endif %}

{% endnote %}

Ao transferir um problema, os comentários, etiquetas e responsáveis são mantidos. Os marcos do problema não são mantidos. Esse problema permanecerá em qualquer quadro de projeto pertencente ao usuário ou à organização e será removido dos quadros de projeto de todos os repositórios. Para obter mais informações, confira "[Sobre os quadros de projetos](/articles/about-project-boards)".

As pessoas ou equipes mencionadas no problema receberão uma notificação informando que o problema foi transferido para um novo repositório. O URL original redirecionará para o novo URL do problema. As pessoas que não tenham permissões de leitura no novo repositório verão um banner informando que o problema foi transferido para um novo repositório ao qual elas não têm acesso.

## <a name="transferring-an-open-issue-to-another-repository"></a>Transferir um problema aberto para outro repositório

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Na lista de problemas, clique no problema que deseja transferir.
4. Na barra lateral direita, clique em **Transferir problema**.
![Botão usado para transferir um problema](/assets/images/help/repository/transfer-issue.png)
5. Use o menu suspenso **Escolher um repositório** e selecione o repositório para o qual deseja transferir o problema.
![Seleção em Escolher um repositório](/assets/images/help/repository/choose-a-repository.png)
6. Clique em **Transferir problema**.
![Botão Transferir problema](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para transferir um problema, use o subcomando `gh issue transfer`. Substitua o parâmetro `issue` pelo número ou pela URL do problema. Substitua o parâmetro `{% ifversion ghes %}hostname/{% endif %}owner/repo` {% ifversion ghes %}pela URL{% else %}pelo nome{% endif %} do repositório para o qual você deseja transferir o problema, como `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## <a name="further-reading"></a>Leitura adicional

- "[Sobre os problemas](/articles/about-issues)"
- "[Como revisar seus logs de segurança](/articles/reviewing-your-security-log)"
- "[Como revisar o log de auditoria da sua organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)"
