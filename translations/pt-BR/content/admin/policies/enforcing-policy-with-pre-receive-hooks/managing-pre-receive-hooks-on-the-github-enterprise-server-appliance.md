---
title: Gerenciar hooks pre-receive no appliance do GitHub Enterprise Server
intro: 'Configure o uso que as pessoas farão dos hooks pre-receive em seus appliances do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
ms.openlocfilehash: 0e57f86b9a15d5001d6ab0d9f20578690ab5361f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145093924'
---
## Criar hooks pre-receive

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
4. Clique em **Adicionar gancho de pré-recebimento**.
![Adicionar gancho de pré-recebimento](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. No campo **Nome do gancho**, insira o nome do gancho que deseja criar.
![Nomear o gancho de pré-recebimento](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. No menu suspenso **Ambiente**, selecione o ambiente no qual deseja executar o gancho.
![Ambiente do gancho](/assets/images/enterprise/site-admin-settings/environment.png)
7. Em **Script**, no menu suspenso **Selecionar repositório de gancho**, selecione o repositório que contém o script de gancho de pré-recebimento. No menu suspenso **Selecionar arquivo**, escolha o nome de arquivo do script de gancho de pré-recebimento.
![Script de gancho](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Selecione **Usar o status de saída para aceitar ou rejeitar pushes** para impor seu script. Ao desmarcar essa opção, você pode testar o script enquanto o valor do status de saída é ignorado. Nesse modo, a saída do script ficará visível para o usuário na linha de comando, mas não na interface da web.
![Usar status de saída](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Selecione **Habilitar este gancho de pré-recebimento em todos os repositórios por padrão** se você quiser executar o gancho de pré-recebimento em todos os repositórios.
![Habilitar ganchos em todos os repositórios](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Selecione **Os administradores podem habilitar e desabilitar este gancho** para permitir que membros da organização com permissões de administrador ou de proprietário escolham se desejam habilitar ou desabilitar esse gancho de pré-recebimento.
![Habilitar ou desabilitar ganchos para administradores](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

## Editar hooks pre-receive

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
1. Ao lado do gancho de pré-recebimento que deseja editar, clique em {% octicon "pencil" aria-label="The edit icon" %}.
![Editar pré-recebimento](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

## Excluir hooks pre-receive

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
2. Ao lado do gancho de pré-recebimento que deseja excluir, clique em {% octicon "x" aria-label="X symbol" %}.
![Editar pré-recebimento](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

## Configurar hooks pre-receive para uma organização

Um administrador da organização só pode configurar permissões de gancho para uma organização se o administrador do site selecionou a opção **Os administradores podem habilitar ou desabilitar este gancho** quando criou o gancho de pré-recebimento. Para configurar hooks pre-receive em um repositório, você deve ser administrador ou proprietário da organização.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Na barra lateral esquerda, clique em **Ganchos**.
![Barra lateral de Ganchos](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. Ao lado do gancho de pré-recebimento que deseja configurar, clique no menu suspenso **Permissões de gancho**. Selecione se deseja habilitar ou desabilitar o hook pre-receive, ou permitir que ele seja configurado pelos administradores do repositório.
![Permissões de gancho](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

## Configurar hooks pre-receive para um repositório

Um proprietário do repositório só pode configurar um gancho se o administrador do site selecionou a opção **Os administradores podem habilitar ou desabilitar este gancho** quando criou o gancho de pré-recebimento. Em uma organização, o proprietário da organização também precisa ter selecionado a permissão de gancho **Configurável**. Para configurar hooks pre-receive em um repositório, você deve ser proprietário do repositório.

{% data reusables.profile.enterprise_access_profile %}
2. Clique em **Repositórios** e selecione para qual repositório você deseja configurar os ganchos de pré-recebimento.
![Repositórios](/assets/images/enterprise/repos/repositories.png) {% data reusables.repositories.sidebar-settings %}
4. Na barra lateral esquerda, clique em **Ganchos e Serviços**.
![Ganchos e serviços](/assets/images/enterprise/repos/hooks-services.png)
5. Ao lado do gancho de pré-recebimento que deseja configurar, clique no menu suspenso **Permissões de gancho**. Defina se você vai habilitar ou desabilitar os hooks pre-receive.
![Permissões do gancho do repositório](/assets/images/enterprise/repos/repo-hook-permissions.png)
