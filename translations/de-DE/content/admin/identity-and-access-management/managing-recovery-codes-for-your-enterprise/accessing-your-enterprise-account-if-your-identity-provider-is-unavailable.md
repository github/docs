---
title: 'Zugriff auf dein Unternehmenskonto, wenn dein Identitätsanbieter nicht verfügbar ist'
shortTitle: Access your enterprise account
intro: 'Du kannst dich bei {% data variables.product.product_name %} anmelden, auch wenn dein Identitätsanbieter nicht verfügbar ist, indem du Single Sign-On (SSO) mithilfe eines Wiederherstellungscodes umgehst.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
ms.openlocfilehash: d13a4cd336e67ab62087530b00cad8fd6939d64b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578804'
---
Du kannst einen Wiederherstellungscode verwenden, um auf dein Unternehmenskonto zuzugreifen, wenn ein Authentifizierungskonfigurationsfehler oder ein Problem mit deinem Identitätsanbieter (IdP) verhindert, dass du SSO verwendest. 

Um so auf dein Unternehmenskonto zuzugreifen, musst du zuvor die Wiederherstellungscodes für dein Unternehmen heruntergeladen und gespeichert haben. Weitere Informationen findest du unter [Herunterladen der SSO-Wiederherstellungscodes für dein Unternehmenskonto](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Hinweis:** Wenn deine Unternehmen {% data variables.product.prodname_emus %} verwenden, musst du dich als Setupbenutzer anmelden, um einen Wiederherstellungscode zu verwenden.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
