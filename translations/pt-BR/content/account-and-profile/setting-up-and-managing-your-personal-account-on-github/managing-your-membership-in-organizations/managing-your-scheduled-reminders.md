---
title: Gerenciar seus lembretes agendados
intro: Receba lembretes no Slack quando você ou sua equipe tiverem pull requests aguardando revisão.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 7dab3826b1791d3b06b3a2594c3ba132c6d675b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164593'
---
## Sobre os lembretes agendados para os usuários

Os lembretes agendados são usados para garantir que os usuários se concentrem nos pedidos de revisão mais importantes que exigem sua atenção. Os lembretes agendados para pull requests enviarão uma mensagem para você no Slack com pull requests abertos que precisam de revisão em um determinado momento. Por exemplo, você pode configurar lembretes agendados para enviar uma mensagem no Slack todas as manhãs às 10h, com pull requests que devem ser revisados por você ou uma das suas equipes.

Para certos eventos, você também pode habilitar alertas em tempo real para agendamentos de lembretes. Os alertas em tempo real são enviados para o seu canal do Slack assim que ocorrer um evento importante, como, por exemplo, a atribuição de uma revisão, ocorre.

Você pode definir lembretes agendados para solicitações de revisão no nível da equipe para pull requests nas organizações das quais você é integrante. Antes de criar um lembrete agendado para você, um proprietário da organização deve autorizar o seu espaço de trabalho do Slack. Para obter mais informações, confira "[Como gerenciar lembretes agendados para sua organização](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)".

{% data reusables.reminders.scheduled-reminders-limitations %}

## Criar lembretes agendados para sua conta pessoal

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Ao lado da organização para a qual deseja agendar lembretes, clique em **Editar**.
![Botão de edição de lembretes agendados](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. Opcionalmente, para receber lembretes agendados para as revisões às quais você foi atribuído, selecione **Revisar solicitações atribuídas a você**.
![Caixa de seleção Revisar solicitações atribuídas a você](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. Opcionalmente, para receber lembretes agendados para revisões atribuídas a uma equipe da qual você é membro, selecione **Revisar solicitações atribuídas à sua equipe**.
![Caixa de seleção Revisar solicitações atribuídas à sua equipe](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![Caixa de seleção Habilitar alertas em tempo real](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## Gerenciar lembretes agendados para sua conta pessoal
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Ao lado da organização para a qual deseja editar os lembretes agendados, clique em **Editar**.
![Botão de edição de lembretes agendados](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Excluir lembretes agendados para sua conta pessoal
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Ao lado da organização para a qual deseja excluir lembretes, clique em **Editar**.
![Botão de edição de lembretes agendados](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## Leitura adicional

- "[Como gerenciar lembretes agendados para sua organização](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
- "[Como gerenciar lembretes agendados para sua equipe](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
