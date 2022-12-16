---
title: Alterar endereço de e-mail principal
intro: You can change the email address associated with your personal account at any time.
redirect_from:
- /articles/changing-your-primary-email-address
- /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Primary email address
ms.openlocfilehash: af1443f1f23b8038d2cf1f4e42a1ab0a83214edb
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145085301"
---
{% note %}

**Observação:** não é possível alterar o endereço de email principal de um email que já está definido para ser o endereço de email de backup.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
3. Caso deseje adicionar um novo endereço de email para definir como seu endereço de email principal, em "Adicionar endereço de email", digite um novo endereço de email e clique em **Adicionar**.
   ![Botão Adicionar outro endereço de email](/assets/images/help/settings/add_another_email_address.png)
4. Em "Endereço de email principal", use o menu suspenso para clicar no endereço de email que deseja definir como seu endereço de email principal e clique em **Salvar**.
   ![Botão Definir como principal](/assets/images/help/settings/set_as_primary_email.png)
5. Para remover o endereço de email antigo da sua conta, ao lado do email antigo, clique em {% octicon "trash" aria-label="The trash symbol" %}.
{% ifversion fpt or ghec %}
6. Verifique o novo endereço de e-mail principal. Sem um endereço de e-mail verificado, você não poderá usar todos os recursos do {% data variables.product.product_name %}. Para obter mais informações, confira "[Como confirmar seu endereço de email](/articles/verifying-your-email-address)".
{% endif %}
