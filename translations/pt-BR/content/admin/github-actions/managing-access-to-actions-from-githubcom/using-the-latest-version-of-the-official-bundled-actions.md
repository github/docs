---
title: Usar a versão mais recente das ações agrupadas oficialmente
intro: 'Você pode atualizar as ações que estão empacotadas com a sua empresa ou usar ações diretamente a partir de {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
ms.openlocfilehash: a86c731602bc39cc35fbff823ebdbfbdf2dec2c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107026'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

A instância da sua empresa inclui uma série de ações integradas que podem ser usadas nos seus fluxos de trabalho. Para obter mais informações sobre as ações empacotadas, confira "[Ações oficiais empacotadas com sua instância corporativa](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)".

Essas ações empacotadas são um instantâneo pontual das ações oficiais encontradas em https://github.com/actions. Portanto, pode haver versões mais recentes dessas ações disponíveis. Use a ferramenta `actions-sync` para atualizar essas ações ou configure o {% data variables.product.prodname_github_connect %} para permitir o acesso às ações mais recentes no {% data variables.product.prodname_dotcom_the_website %}. Essas opções são descritas nas seções a seguir.

## Como usar `actions-sync` para atualizar as ações empacotadas

Para atualizar as ações empacotadas, use a ferramenta `actions-sync` para atualizar o instantâneo. Para obter mais informações sobre como usar `actions-sync`, confira "[Como sincronizar ações do {% data variables.product.prodname_dotcom_the_website %} manualmente](/admin/github-actions/manually-syncing-actions-from-githubcom)".

## Usar {% data variables.product.prodname_github_connect %} para acessar as últimas ações

Você pode usar {% data variables.product.prodname_github_connect %} para permitir que {% data variables.product.product_name %} use ações a partir do {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como habilitar o acesso automático às ações do {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Depois que o {% data variables.product.prodname_github_connect %} estiver configurado, você poderá usar a última versão de uma ação excluindo o repositório local na organização `actions` na sua instância. Por exemplo, se a sua instância corporativa estiver usando a `v1` da ação `actions/checkout` e você precisar usar `{% data reusables.actions.action-checkout %}`, o que não está disponível na instância corporativa, execute as seguintes etapas para usar a última ação `checkout` do {% data variables.product.prodname_dotcom_the_website %}:

1. Em uma conta de proprietário da empresa no {% data variables.product.product_name %}, procure o repositório que deseja excluir da organização *actions* (neste exemplo, `checkout`).
1. Por padrão, os administradores do site não são proprietários da organização *actions* empacotada. Para obter o acesso necessário para excluir o repositório `checkout`, você precisa usar as ferramentas de administração do site. Clique em {% octicon "rocket" aria-label="The rocket ship" %} no canto superior direito de qualquer página do repositório.
  ![Ícone de foguete para acessar as configurações de administração do site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Clique em {% octicon "shield-lock" %} **Segurança** para ter a visão geral de segurança do repositório.
  ![Cabeçalho de segurança do repositório](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. Em "Acesso privilegiado", clique em **Desbloquear**.
  ![Botão Desbloquear](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. Em **Motivo**, digite um motivo para desbloquear o repositório e clique em **Desbloquear**.
  ![Diálogo de confirmação](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Agora que o repositório está desbloqueado, você pode sair das páginas de administração do site e excluir o repositório dentro da organização `actions`. Na parte superior da página, clique no nome do repositório, neste exemplo, **checkout**, para voltar à página de resumo.
  ![Link para o nome do repositório](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. Em "Informações do repositório", clique em **Exibir código** para sair das páginas de administração do site e ver o repositório `checkout`.
1. Exclua o repositório `checkout` dentro da organização `actions`. Para obter informações sobre como excluir um repositório, confira "[Como excluir um repositório](/github/administering-a-repository/deleting-a-repository)".
  ![Ver link de código](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Configure o YAML do fluxo de trabalho para usar `{% data reusables.actions.action-checkout %}`.
1. Sempre que o fluxo de trabalho for executado, o executor usará a versão especificada de `actions/checkout` do {% data variables.product.prodname_dotcom_the_website %}.

   {% note %}

   **Observação:** na primeira vez que a ação `checkout` é usada no {% data variables.product.prodname_dotcom_the_website %}, o namespace `actions/checkout` é desativado automaticamente em {% data variables.location.product_location %}. Se você quiser reverter para uma cópia local da ação, primeiro você precisará remover o namespace da desativação. Para obter mais informações, confira "[Desativação automática de namespaces para as ações acessadas no {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)".

   {% endnote %}
