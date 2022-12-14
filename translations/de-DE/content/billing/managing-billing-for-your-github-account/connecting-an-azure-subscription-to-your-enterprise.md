---
title: Verbinden eines Azure-Abonnements mit deinem Unternehmen
intro: 'Im Rahmen deines Microsoft Enterprise Agreements kannst du die Nutzung von {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} und {% data variables.product.prodname_github_codespaces %} aktivieren und bezahlen.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
ms.openlocfilehash: a5473ff19e403eb21242982e005663d1c8ac5962
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110882'
---
## Informationen zu Azure-Abonnements und {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) und [Informationen zur Abrechnung für {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

{% note %}

**Hinweis:** Wenn dein Unternehmenskonto einem Microsoft Enterprise Agreement unterliegt, ist die Verbindung mit einem Azure-Abonnement die einzige Möglichkeit, {% data variables.product.prodname_actions %} und {% data variables.product.prodname_registry %} über die enthaltenen Beträge hinaus zu nutzen oder {% data variables.product.prodname_codespaces %} zu verwenden.

{% endnote %}

Nachdem du ein Azure-Abonnement verbunden hast, kannst du auch deine Ausgabenlimits verwalten.

- [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)
- [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)
- [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)

## Verbinden deines Azure-Abonnements mit deinem Unternehmenskonto

Um dein Azure-Abonnement verbinden zu können, musst du über Besitzerberechtigungen für das Abonnement verfügen.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. Klicke unter „Zahlungsinformationen“ auf **Azure-Abonnement hinzufügen**.
1. Folge den Eingabeaufforderungen, um dich bei deinem Microsoft-Konto anzumelden.
1. Überprüfe die Eingabeaufforderung „Erforderliche Berechtigungen“. Wenn du den Bedingungen zustimmst, klicke auf **Zustimmen**.
1. Wähle unter „Abonnement auswählen“ die Azure-Abonnement-ID aus, die du mit deinem Unternehmen verbinden möchtest.

   {% note %}

   **Hinweis:** Die {% data variables.product.company_short %}-Abonnementberechtigungsprüfung fordert schreibgeschützten Zugriff an, um die Liste der verfügbaren Abonnements anzuzeigen. Um ein Azure-Abonnement auswählen zu können, musst du über Besitzerberechtigungen für das Abonnement verfügen. Wenn der Standardmandant nicht über die richtigen Berechtigungen verfügt, musst du möglicherweise eine andere Mandanten-ID angeben. Weitere Informationen findest du unter [Microsoft Identity Platform und der OAuth 2.0-Autorisierungscodeflow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) in der Microsoft-Dokumentation.

   {% endnote %}
1. Klicken Sie auf **Verbinden**.

## Trennen der Verbindung deines Azure-Abonnements mit deinem Unternehmenskonto

Nachdem du dein Azure-Abonnement von deinem Unternehmenskonto getrennt hast, kann deine Nutzung die in deinem Plan enthaltenen Beträge nicht mehr überschreiten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. Klicke unter „Azure-Abonnement“ rechts neben der Abonnement-ID, deren Verbindung du trennen möchtest, auf **{% octicon "trash" aria-label="The trash icon" %}**.
1. Überprüfe die Eingabeaufforderung, und klicke dann auf **Entfernen**.
