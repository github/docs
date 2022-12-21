---
ms.openlocfilehash: 6946b53d41210f3e5ec43a06e0917d60fe959096
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192872"
---
## Configuration des paramètres de {% data variables.product.prodname_copilot %} sur {% data variables.product.prodname_dotcom_the_website %}

Une fois que vous avez un {% data variables.product.prodname_copilot %} essai ou abonnement, vous pouvez ajuster les paramètres {% data variables.product.prodname_copilot %} pour votre compte personnel sur {% data variables.product.prodname_dotcom %} dans les [paramètres {% data variables.product.prodname_copilot %}](https://github.com/settings/copilot). Les paramètres s’appliquent partout où vous utilisez {% data variables.product.prodname_copilot %}. Vous pouvez configurer les suggestions que {% data variables.product.prodname_copilot %} propose et la façon dont {% data variables.product.company_short %} utilise vos données télémétriques.

### Activation ou désactivation de la détection de duplication

{% data reusables.copilot.duplication-setting-org %}

{% data variables.product.prodname_copilot %} inclut un filtre qui détecte les suggestions de code correspondant au code public sur {% data variables.product.prodname_dotcom %}. Vous pouvez choisir d’activer ou de désactiver le filtre. Lorsque le filtre est activé, {% data variables.product.prodname_copilot %} vérifie les suggestions de code avec son code environnant d’environ 150 caractères par rapport au code public sur {% data variables.product.prodname_dotcom %}. S’il existe une correspondance ou une correspondance proche, la suggestion ne vous est pas montrée.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. Sous **Suggestions correspondant au code public**, sélectionnez le menu déroulant, puis cliquez sur **Autoriser** pour autoriser les suggestions correspondant au code public ou **Bloquer** pour bloquer les suggestions correspondant au code public.
  ![Capture d’écran de l’option de détection des doublons](/assets/images/help/copilot/duplication-detection.png) {% data reusables.copilot.save-settings %}

### Activation ou désactivation de la télémétrie

{% data reusables.copilot.telemetry-setting-org %}

Vous pouvez choisir si vos extraits de code sont collectés et conservés par GitHub, puis traités et partagés avec Microsoft et OpenAI en ajustant vos paramètres utilisateur. Pour plus d’informations sur les données que {% data variables.product.prodname_copilot %} peut collecter en fonction de vos paramètres de télémétrie, consultez « [Conditions relatives aux produits et fonctionnalités supplémentaires de {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) » et le « [FAQ sur la confidentialité de {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq-privacy) ».

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. Pour autoriser ou empêcher {% data variables.product.prodname_dotcom %} d’utiliser vos données télémétriques, sélectionnez ou désélectionnez **Autoriser {% data variables.product.prodname_dotcom %} à utiliser mes extraits de code pour améliorer les produits**.
  ![Capture d’écran de l’option de télémétrie](/assets/images/help/copilot/telemetry-option.png) {% data reusables.copilot.save-settings %}

## Pour aller plus loin

- [FAQ sur {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq)
