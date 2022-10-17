---
title: Sobre notificações de e-mail para pushes no seu repositório
intro: Você pode optar por enviar notificações por email automaticamente para um endereço de email específico quando alguém fizer push para o repositório.
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository
  - /articles/receiving-email-notifications-for-pushes-to-a-repository
  - /articles/about-email-notifications-for-pushes-to-your-repository
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
ms.openlocfilehash: ee12b8f8270921abd1fe70c748449e46fd472e2c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127039'
---
{% data reusables.notifications.outbound_email_tip %}

Cada notificação de e-mail para um push no repositório lista os novos commits e os vincula a um diff contendo apenas esses commits. Na notificação de e-mail, você verá:

- O nome do repositório onde o commit foi feito
- O branch em que um commit foi feito
- O SHA1 do commit, incluindo um link para o diff no {% data variables.product.product_name %}
- O autor do commit
- A data em que o commit foi feito
- Os arquivos que foram alterados como parte do commit
- A mensagem do commit

É possível filtrar notificações de e-mail que você recebe para pushes em um repositório. Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Habilitando notificações de e-mail para pushes no seu repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-notifications %}
5. Digite até dois endereços de e-mail, separados por um espaço, para os quais deseja enviar as notificações. Se desejar enviar e-mails a mais de duas contas, defina um dos endereços para um endereço de e-mail de grupo.
![Caixa de texto de endereço de email](/assets/images/help/settings/email_services_addresses.png)
1. Se você operar um servidor próprio, poderá verificar a integridade dos emails por meio do **cabeçalho Approved**. O **cabeçalho Approved** é um token ou um segredo que você digita neste campo e que é enviado com o email. Se o cabeçalho `Approved` de um email corresponder ao token, você poderá confiar que o email é do {% data variables.product.product_name %}.
![Caixa de texto do cabeçalho Approved do email](/assets/images/help/settings/email_services_approved_header.png)
7. Clique em **Configurar notificações**.
![Botão Configurar notificações](/assets/images/help/settings/setup_notifications_settings.png)

## Leitura adicional
- "[Sobre as notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications)"

