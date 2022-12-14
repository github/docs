---
title: Configuration de la signature de validation web
shortTitle: Configure web commit signing
intro: 'Vous pouvez activer la signature automatique des commits effectués dans l’interface web de {% data variables.product.product_name %}.'
versions:
  ghes: '>=3.5'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.product.product_location %}.'
ms.openlocfilehash: 759b158235e5727b474441d10b33016b58277c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068033'
---
## À propos de la signature de validation web

Si vous activez la signature de validation web, {% data variables.product.product_name %} utilise automatiquement GPG pour signer les validations que les utilisateurs effectuent sur l’interface web de {% data variables.product.product_location %}. Les validations signées par {% data variables.product.product_name %} ont un état vérifié. Pour plus d’informations, consultez « [À propos de la vérification des signatures de commit](/authentication/managing-commit-signature-verification/about-commit-signature-verification) ».

Vous pouvez activer la signature de validation web, faire pivoter la clé privée utilisée pour la signature de validation web et désactiver la signature de validation web.

## Activation de la signature de validation web

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Si vous avez une adresse e-mail no-reply définie dans {% data variables.enterprise.management_console %}, utilisez cette adresse e-mail. Sinon, utilisez une adresse e-mail, comme `web-flow@my-company.com`. L’adresse e-mail n’a pas besoin d’être valide.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Activez la signature de validation web.

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. Appliquez la configuration, puis attendez que l’exécution de la configuration se termine.

   ```bash{:copy}
   ghe-config-apply
   ```
1. Créez un utilisateur sur {% data variables.product.product_location %} via l’authentification intégrée ou l’authentification externe. Pour plus d’informations, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise) ».
   - Le nom d’utilisateur doit être `web-flow`.
   - L’adresse e-mail de l’utilisateur doit être la même que celle que vous avez utilisée pour la clé PGP. {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %} {% data reusables.enterprise_site_admin_settings.email-settings %}
1. Sous « Adresse e-mail no-reply », tapez la même adresse e-mail que celle que vous avez utilisée pour la clé PGP. 

   {% note %}

   **Remarque :** Le champ « Adresse e-mail No-reply » s’affiche uniquement si vous avez activé l’e-mail pour {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Configuration de l’e-mail pour les notifications](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise) ».

   {% endnote %} {% data reusables.enterprise_management_console.save-settings %}

## Rotation de la clé privée utilisée pour la signature de validation web

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Utilisez l’adresse e-mail no-reply définie dans {% data variables.enterprise.management_console %}, qui doit être identique à l’adresse e-mail de l’utilisateur `web-flow`.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %} {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Désactivation de la signature de validation web

Vous pouvez désactiver la signature de validation web pour {% data variables.product.product_location %}.

1. Dans l’interpréteur de commandes d’administration, exécutez la commande suivante.

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. Appliquez la configuration.

   ```bash{:copy}
   ghe-config-apply
   ```
