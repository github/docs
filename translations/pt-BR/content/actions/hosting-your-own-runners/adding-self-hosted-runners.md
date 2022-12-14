---
title: Adicionar executores auto-hospedados
intro: 'Você pode adicionar um executor auto-hospedado a um repositório, a uma organização ou a uma empresa.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
ms.openlocfilehash: c58fbc6ac67fe1466458888eb0c55f58483dac6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107922'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Você pode adicionar um executor auto-hospedado a um repositório, a uma organização ou a uma empresa.

Se você é um administrador de empresa ou organização, talvez você queira adicionar seus executores auto-hospedados a nível da organização ou empresa. Esta abordagem torna o executor disponível para vários repositórios na sua organização ou empresa, e também permite gerenciar seus executores em um só lugar.

Para obter informações sobre os sistemas operacionais compatíveis para executores auto-hospedados ou sobre como usar os executores auto-hospedados com um servidor proxy, confira "[Sobre os executores auto-hospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

{% ifversion not ghae %} {% warning %}

**Aviso:** {% data reusables.actions.self-hosted-runner-security %}

Para obter mais informações, confira "[Sobre os executores auto-hospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)".

{% endwarning %} {% endif %}

{% ifversion fpt or ghec or ghes %}

Você pode configurar a automação para dimensionar o número de executores auto-hospedados. Para obter mais informações, confira "[Dimensionamento automático com executores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

{% endif %}

## Pré-requisitos

{% data reusables.actions.self-hosted-runners-prerequisites %}

## Adicionar um executor auto-hospedado a um repositório

Você pode adicionar executores auto-hospedados a um único repositório. Para adicionar um executor auto-hospedado a um repositório de usuário, você deve ser o proprietário do repositório. Para um repositório da organização, você deve ser um proprietário da organização ou ter acesso de administrador ao repositório. Para obter informações sobre como adicionar um executor auto-hospedado com a API REST, confira "[Executores auto-hospedados](/rest/reference/actions#self-hosted-runners)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. Clique em **Novo executor auto-hospedado**.
{% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. Em {% ifversion ghes or ghae or ghec %}"Executores"{% else %}"Executores auto-hospedados"{% endif %}, clique em **Adicionar executor**.
{% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Para obter mais informações, confira "[Monitoramento e solução de problemas de executores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

## Adicionar um executor auto-hospedado a uma organização

Você pode adicionar executores auto-hospedados no nível da organização, onde podem ser usados para processar trabalhos para múltiplos repositórios em uma organização. Para adicionar um executor auto-hospedado a uma organização, você deve ser proprietário da organização. Para obter informações sobre como adicionar um executor auto-hospedado com a API REST, confira "[Executores auto-hospedados](/rest/reference/actions#self-hosted-runners)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% ifversion actions-hosted-runners %}1. Clique em **Novo executor**, depois em **Novo executor auto-hospedado**.{% else %}1. Clique em **Novo executor**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. Em {% ifversion ghes or ghae %}"Executores", clique em **Adicionar novo** e clique em **Novo executor**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Para obter mais informações, confira "[Monitoramento e solução de problemas de executores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## Adicionar um executor auto-hospedado a uma empresa

{% ifversion fpt %}Se você usar {% data variables.product.prodname_ghe_cloud %}, você{% elsif ghec or ghes or ghae %}Você{% endif %} poderá adicionar executores auto-hospedados a uma empresa, onde eles poderão ser atribuídos a várias organizações. Os administradores da organização poderão então controlar quais repositórios podem usá-los. {% ifversion fpt %}Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise).{% endif %}

{% ifversion ghec or ghes or ghae %} Os novos executores são atribuídos ao grupo padrão. Você pode modificar o grupo do executor depois de registrar o runner (executor). Para obter mais informações, confira "[Como gerenciar o acesso aos executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}

Para adicionar um executor auto-hospedado a uma empresa, você deve ser um proprietário corporativo. Para obter informações sobre como adicionar um executor auto-hospedado com a API REST, confira os pontos de extremidade corporativos na [API REST do {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runners).

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

Para obter mais informações, confira "[Monitoramento e solução de problemas de executores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### Disponibilizar executores corporativos para repositórios

Por padrão, os executores do grupo de executores "Padrão" de uma empresa estão disponíveis para todas as organizações da empresa, mas não estão disponíveis para todos os repositórios em cada organização.

Para tornar um grupo de executores auto-hospedado de nível empresarial disponível para um repositório da organização, você pode precisar alterar as configurações herdadas da organização para o grupo de executores a fim de tornar o executor disponível para repositórios na organização.

Para obter mais informações sobre como alterar as configurações de acesso ao grupo de executores, confira "[Como gerenciar o acesso aos executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Leitura adicional

- "[Introdução aos executores auto-hospedados da sua empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)"

{% endif %}
