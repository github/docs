---
title: Modification de votre adresse e-mail principale
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
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145087333"
---
{% note %}

**Remarque :** Vous ne pouvez pas remplacer votre adresse e-mail principale par une adresse qui est déjà définie comme votre adresse e-mail de secours.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
3. Si vous souhaitez ajouter une nouvelle adresse e-mail à définir comme adresse e-mail principale, sous « Ajouter une adresse e-mail », tapez une nouvelle adresse e-mail, puis cliquez sur **Ajouter**.
   ![Bouton permettant d’ajouter une autre adresse e-mail](/assets/images/help/settings/add_another_email_address.png)
4. Sous « Adresse e-mail principale », utilisez le menu déroulant pour cliquer sur l’adresse e-mail que vous souhaitez définir comme adresse e-mail principale, puis cliquez sur **Enregistrer**.
   ![Bouton permettant de définir l’adresse principale](/assets/images/help/settings/set_as_primary_email.png)
5. Pour supprimer l’ancienne adresse e-mail de votre compte, en regard de l’ancien e-mail, cliquez sur {% octicon "trash" aria-label="The trash symbol" %}.
{% ifversion fpt or ghec %}
6. Vérifiez votre nouvelle adresse e-mail principale. Sans adresse e-mail vérifiée, vous ne pourrez pas utiliser toutes les fonctionnalités de {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address) ».
{% endif %}
