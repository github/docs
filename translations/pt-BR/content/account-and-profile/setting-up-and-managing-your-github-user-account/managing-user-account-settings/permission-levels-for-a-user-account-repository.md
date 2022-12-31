---
title: Níveis de permissão para um repositório de conta de usuário
intro: 'A repository owned by a personal account has two permission levels: the repository owner and collaborators.'
redirect_from:
- /articles/permission-levels-for-a-user-account-repository
- /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Permission user repositories
ms.openlocfilehash: 3fed88f8c31f5d3dd788f7b977c214499856f27e
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145083730"
---
## <a name="about-permissions-levels-for-a-personal-account-repository"></a>Sobre os níveis de permissões para um repositório de conta pessoal

Repositórios pertencentes a contas pessoais têm um proprietário. As permissões de propriedade não podem ser compartilhadas com outra conta pessoal.

Você também pode {% ifversion fpt or ghec %}convidar{% else %}add{% endif %} usuários no {% data variables.product.product_name %} para seu repositório como colaboradores. Para obter mais informações, confira "[Como convidar colaboradores para um repositório pessoal](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)".

{% tip %}

**Dica:** caso você precise ter um acesso mais granular a um repositório pertencente a sua conta pessoal, considere a possibilidade de transferir o repositório para uma organização. Para obter mais informações, confira "[Como transferir um repositório](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account)".

{% endtip %}

## <a name="owner-access-for-a-repository-owned-by-a-personal-account"></a>Acesso de proprietário para um repositório de propriedade de uma conta pessoal

O proprietário do repositório tem controle total do repositório. Além das ações que qualquer colaborador pode executar, o proprietário do repositório pode executar as ações a seguir.

| Ação | Mais informações |
| :- | :- |
| {% ifversion fpt or ghec %}Convidar colaboradores{% else %}Adicionar colaboradores{% endif %} | "[Como convidar colaboradores para um repositório pessoal](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)" |
| Alterar a visibilidade do repositório | "[Como definir a visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)" |{% ifversion fpt or ghec %}
| Limitar interações com o repositório | "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)" |{% endif %}
| Renomear um branch, incluindo o branch padrão | "[Como renomear um branch](/github/administering-a-repository/renaming-a-branch)" |
| Fazer merge de uma pull request em um branch protegido, mesmo sem revisões de aprovação | "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches)" |
| Excluir o repositório | "[Como excluir um repositório](/repositories/creating-and-managing-repositories/deleting-a-repository)" |
| Gerenciar tópicos do repositório | "[Como classificar seu repositório com tópicos](/github/administering-a-repository/classifying-your-repository-with-topics)" |{% ifversion fpt or ghec %}
| Gerenciar configurações de segurança e análise para o repositório | "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" |{% endif %}{% ifversion fpt or ghec %}
| Habilitar o gráfico de dependências para um repositório privado | "[Como explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)" |{% endif %}{% ifversion fpt or ghes > 3.1 or ghec or ghae %}
| Excluir e restaurar pacotes | "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)" |{% endif %}
| Personalizar a visualização das mídias sociais do repositório | "[Como personalizar a visualização de mídia social do seu repositório](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)" |
| Criar um modelo a partir do repositório | "[Como criar um repositório de modelo](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)" |{% ifversion fpt or ghes or ghae or ghec %}
| Controle o acesso a {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis | "[Como gerenciar as configurações de segurança e de análise do seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" |{% endif %}{% ifversion fpt or ghec %}
| Ignorar {% data variables.product.prodname_dependabot_alerts %} no repositório | "[Como ver os {% data variables.product.prodname_dependabot_alerts %} em busca de dependências vulneráveis](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)" |
| Gerenciar o uso de dados para um repositório privado | "[Como gerenciar configurações de uso de dados para seu repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"|{% endif %}
| Definir os proprietários do código do repositório | "[Sobre os proprietários de código](/github/creating-cloning-and-archiving-repositories/about-code-owners)" |
| Arquivar o repositório | "[Como arquivar repositórios](/repositories/archiving-a-github-repository/archiving-repositories)" |{% ifversion fpt or ghec %}
| Criar avisos de segurança | "[Sobre os {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)" |
| Exibir um botão de patrocinador | "[Como exibir um botão de patrocinador no seu repositório](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)" |{% endif %}
| Permitir ou negar merge automático para pull requests | "[Como gerenciar a mesclagem automática para solicitações de pull no seu repositório](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)" | 

## <a name="collaborator-access-for-a-repository-owned-by-a-personal-account"></a>Acesso colaborador para um repositório de propriedade de uma conta pessoal

Os colaboradores em um repositório pessoal podem extrair (ler) os conteúdos do repositório e fazer push (gravação) das alterações no repositório.

{% note %}

**Observação:** em um repositório privado, os proprietários do repositório só podem permitir acesso de gravação aos colaboradores. Os colaboradores não podem ter acesso somente leitura a repositórios pertencentes a uma conta pessoal.

{% endnote %}

Os colaboradores também podem executar as seguintes ações.

| Ação | Mais informações |
| :- | :- |
| Criar um fork do repositório | "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)" |{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| Renomear um branch diferente do branch padrão | "[Como renomear um branch](/github/administering-a-repository/renaming-a-branch)" |{% endif %}
| Criar, editar e excluir comentários em commits, pull requests e problemas no repositório | <ul><li>"[Sobre os problemas](/github/managing-your-work-on-github/about-issues)"</li><li>"[Como adicionar comentários a uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"</li><li>"[Como gerenciar comentários ofensivos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"</li></ul> |
| Criar, atribuir, fechar e reabrir problemas no repositório | "[Como gerenciar seu trabalho com problemas](/github/managing-your-work-on-github/managing-your-work-with-issues)" |
| Gerenciar etiquetas para problemas e pull requests no repositório | "[Como rotular problemas e solicitações de pull](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)" |
| Gerenciar marcos para problemas e pull requests no repositório | "[Como criar e editar marcos para problemas e solicitações de pull](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)" |
| Marcar um problema ou pull request no repositório como duplicado | "[Sobre as solicitações de pull e os problemas duplicados](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)" |
| Criar, mesclar e fechar pull requests no repositório | "[Como propor alterações no seu trabalho com solicitações de pull](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)" |
| Habilitar e desabilitar o merge automático para um pull request | "[Como mesclar automaticamente uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)"
| Aplicar alterações sugeridas aos pull requests no repositório |"[Como incorporar comentários na sua solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)" |
| Criar um pull request a partir de uma bifurcação do repositório | "[Como criar uma solicitação de pull com base em um fork](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)" |
| Enviar uma revisão em um pull request que afeta a capacidade de merge do pull request | "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)" |
| Criar e editar uma wiki para o repositório | "[Sobre os wikis](/communities/documenting-your-project-with-wikis/about-wikis)" |
| Criar e editar versões para o repositório | "[Como gerenciar versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository)" |
| Agir como proprietário do código para o repositório | "[Sobre os proprietários de código](/articles/about-code-owners)" |{% ifversion fpt or ghae or ghec %}
| Publicar, visualizar ou instalar pacotes | "[Como publicar e gerenciar pacotes](/github/managing-packages-with-github-packages/publishing-and-managing-packages)" |{% endif %}
| Remover a si mesmos como colaboradores do repositório | "[Como remover a si mesmo de um repositório de colaborador](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)" |

## <a name="further-reading"></a>Leitura adicional

- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
