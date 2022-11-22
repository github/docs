---
title: Définition de votre délai d’expiration pour GitHub Codespaces
shortTitle: Set the timeout
intro: 'Vous pouvez définir votre délai d’expiration par défaut pour {% data variables.product.prodname_github_codespaces %} dans la page de vos paramètres personnels.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 6ca559fefddc34eb6de0441d17344ff8054db509
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159604'
---
## À propos du délai d’inactivité

Un codespace cesse de s’exécuter après une période d’inactivité. Par défaut, cette période est de 30 minutes, mais vous pouvez spécifier un délai d’expiration par défaut plus ou moins long dans vos paramètres personnels sur {% data variables.product.prodname_dotcom %}. Le paramètre mis à jour s’applique à tous les codespaces que vous créez ou aux codespaces existants la prochaine fois que vous les démarrez. Vous pouvez également spécifier un délai d’expiration quand vous utilisez {% data variables.product.prodname_cli %} pour créer un codespace.

{% warning %}

**Avertissement** : L’utilisation du calcul Codespaces est facturée pour la durée pendant laquelle un codespace est actif. Si vous n’utilisez pas un codespace, mais qu’il continue de s’exécuter et qu’il n’a pas encore expiré, vous êtes facturé pour la durée totale d’activité du codespace, que vous l’ayez utilisé ou non. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing) ».

{% endwarning %}

### Délais d’expiration pour les dépôts appartenant à une organisation

Les organisations peuvent définir une stratégie de délai d’inactivité maximal pour les codespaces créés à partir de tout ou partie de leurs dépôts. Si une stratégie d’organisation définit un délai d’expiration maximal inférieur au délai par défaut que vous avez défini, le délai d’expiration de l’organisation est utilisé à la place de votre paramètre. Vous en êtes averti une fois le codespace créé. Pour plus d’informations, consultez « [Restriction de la période du délai d’inactivité](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) ».

{% webui %}

## Définition de votre délai d’expiration par défaut

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Délai d’inactivité par défaut », entrez la durée souhaitée, puis cliquez sur **Enregistrer**. La durée doit être comprise entre 5 et 240 minutes (4 heures).
   ![Sélection de votre délai d’expiration](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Définition du délai d’expiration pour un espace de code

{% data reusables.cli.cli-learn-more %}

Pour définir le délai d’expiration lorsque vous créez un codespace, utilisez l’argument `idle-timeout` avec la sous-commande `codespace create`. Spécifiez la durée en minutes, suivie de `m`. La durée doit être comprise entre 5 et 240 minutes (4 heures).

```shell
gh codespace create --idle-timeout 90m
```

Si vous ne spécifiez pas de délai d’expiration lorsque vous créez un codespace, le délai d’expiration par défaut sera utilisé. Pour plus d’informations sur la définition d’un délai d’expiration par défaut, cliquez sur l’onglet « Navigateur web » dans cette page. Actuellement, vous ne pouvez pas spécifier de délai d’expiration par défaut via {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## Définition d’un délai d’expiration

Vous pouvez définir votre délai d’expiration par défaut dans votre navigateur web, sur {% data variables.product.prodname_dotcom_the_website %}. Sinon, si vous utilisez {% data variables.product.prodname_cli %} pour créer un espace de code, vous pouvez définir un délai d’expiration pour cet espace de code particulier. Pour plus d’informations, cliquez sur l’onglet approprié ci-dessus.

{% endvscode %}
