---
title: Définition de votre délai d’expiration pour Codespaces
shortTitle: Set the timeout
intro: Vous pouvez définir votre délai d’expiration par défaut pour {% data variables.product.prodname_codespaces %} dans la page de vos paramètres personnels.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3a4e009b5494b96e6daa6736a441a5fba9594857
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064417"
---
Un codespace cesse de s’exécuter après une période d’inactivité. Vous pouvez spécifier la durée de ce délai d’expiration. Le paramètre mis à jour s’applique à tout codespace nouvellement créé.

Certaines organisations peuvent avoir une stratégie de délai d’inactivité maximal. Si une stratégie d’organisation définit un délai d’expiration maximal inférieur au délai par défaut que vous avez défini, le délai d’expiration de l’organisation sera utilisé à la place de votre paramètre, et vous en serez averti une fois le codespace créé. Pour plus d’informations, consultez « [Restriction de la période du délai d’inactivité](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) ».

{% warning %}

**Avertissement** : les codespaces sont facturés par minute. Si vous n’utilisez pas activement un codespace, mais que celui-ci n’a pas encore expiré, vous êtes toujours facturé pour le temps d’exécution du codespace. Pour plus d’informations, consultez « [À propos de la facturation des codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing) ».

{% endwarning %}

{% webui %}

## <a name="setting-your-default-timeout-period"></a>Définition de votre délai d’expiration par défaut

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Délai d’inactivité par défaut », entrez la durée souhaitée, puis cliquez sur **Enregistrer**. La durée doit être comprise entre 5 et 240 minutes (4 heures).
   ![Sélection de votre délai d’expiration](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## <a name="setting-the-timeout-period-for-a-codespace"></a>Définition du délai d’expiration pour un codespace

{% data reusables.cli.cli-learn-more %}

Pour définir le délai d’expiration lorsque vous créez un codespace, utilisez l’argument `idle-timeout` avec la sous-commande `codespace create`. Spécifiez la durée en minutes, suivie de `m`. La durée doit être comprise entre 5 et 240 minutes (4 heures).

```shell
gh codespace create --idle-timeout 90m
```

Si vous ne spécifiez pas de délai d’expiration lorsque vous créez un codespace, le délai d’expiration par défaut sera utilisé. Pour plus d’informations sur la définition d’un délai d’expiration par défaut, cliquez sur l’onglet « Navigateur web » dans cette page. Actuellement, vous ne pouvez pas spécifier de délai d’expiration par défaut via {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## <a name="setting-a-timeout-period"></a>Définition d’un délai d’expiration

Vous pouvez définir votre délai d’expiration par défaut dans votre navigateur web, sur {% data variables.product.prodname_dotcom_the_website %}. Si vous utilisez {% data variables.product.prodname_cli %} pour créer un codespace, vous pouvez définir un délai d’expiration pour ce codespace particulier. Pour plus d’informations, cliquez sur l’onglet approprié ci-dessus.

{% endvscode %}
