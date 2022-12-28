---
title: Eine Testversion von GitHub Enterprise einrichten
intro: 'Du kannst {% data variables.product.prodname_ghe_cloud %} kostenlos testen.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
ms.openlocfilehash: a50aebc43ba5d674af132786ffb75e5fb3029aeb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183988'
---
{% data reusables.enterprise.ghec-cta-button %}


## Informationen zu {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_ghe_cloud %} ist ein Plan für große Unternehmen oder Teams, die an {% data variables.product.prodname_dotcom_the_website %} zusammenarbeiten. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.organizations.about-organizations %} Weitere Informationen zu Konten findest du unter [Typen von {% data variables.product.prodname_dotcom %}-Konten](/get-started/learning-about-github/types-of-github-accounts).

Mit {% data variables.product.prodname_free_team %} kannst du Organisation kostenlos nutzen. Darin enthalten sind auch eingeschränkte Features. Wenn du zusätzliche Features, z. B. SAML Single Sign-On (SSO, einmalige SAML-Anmeldung), die Zugriffssteuerung für{% data variables.product.prodname_pages %} und enthaltene {% data variables.product.prodname_actions %}-Minuten benötigst, kannst du ein Upgrade auf {% data variables.product.prodname_ghe_cloud %} durchführen. Eine detaillierte Liste der für {% data variables.product.prodname_ghe_cloud %} verfügbaren Features findest du auf unserer [Preisseite](https://github.com/pricing).

Du kannst eine Testversion von {% data variables.product.prodname_ghe_cloud %} einrichten, um diese zusätzlichen Features auf einem neuen oder vorhandenen Organisationskonto auszuwerten.

Testversionen sind auch für {% data variables.product.prodname_ghe_server %} verfügbar. Weitere Informationen findest du unter [Einrichten einer Testversion von {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server).

{% data reusables.products.which-product-to-use %}

## Informationen zu {% data variables.product.prodname_ghe_cloud %}-Testversionen

Du kannst eine 30-tägige Testversion einrichten, um {% data variables.product.prodname_ghe_cloud %} zu evaluieren. Während des Testzeitraums musst du keine Zahlungsmethode angeben, sofern du deiner Organisation keine {% data variables.product.prodname_marketplace %}-Apps hinzufügst, die eine Zahlungsmethode vorschreiben. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_marketplace %}](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/).

Deine Testversion umfasst 50 Benutzer. Wenn du mehr Sitze (Benutzer) benötigst, um {% data variables.product.prodname_ghe_cloud %} zu evaluieren, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %}. Am Ende des Testzeitraums kannst du eine andere Anzahl an Benutzern auswählen.

{% data reusables.saml.saml-accounts %}

Weitere Informationen findest du unter [Informationen zur Identitäts- und Zugriffsverwaltung mit SAML Single Sign-On (SSO)](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% data variables.product.prodname_emus %} ist nicht Teil der kostenlosen Testversion von {% data variables.product.prodname_ghe_cloud %}. Wenn du an {% data variables.product.prodname_emus %} interessiert bist, wende dich an das [Vertriebsteam von {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

## Einrichten deiner {% data variables.product.prodname_ghe_cloud %}-Testversion

Ehe du {% data variables.product.prodname_ghe_cloud %} ausprobieren kannst, musst du in einem persönlichen Konto angemeldet sein. Wenn du noch kein persönliches Konto auf {% data variables.product.prodname_dotcom_the_website %} hast, musst du eines erstellen. Weitere Informationen findest du unter [Registrieren für ein neues {% data variables.product.prodname_dotcom %}-Konto](/free-pro-team@latest/articles/signing-up-for-a-new-github-account).

1. Navigiere zu [{% data variables.product.prodname_dotcom %} für Unternehmen](https://github.com/enterprise).
1. Klicke auf **Start a free trial** (Kostenlose Testversion starten)
   ![Schaltfläche „Kostenlose Testversion starten“](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Klicke auf **Enterprise Cloud**.
   ![Enterprise Cloud-Schaltfläche](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Befolge die Eingabeaufforderungen, um deine Testversion zu konfigurieren.

## {% data variables.product.prodname_ghe_cloud %} erkunden

Nachdem du deinen Test eingerichtet hast, kannst du {% data variables.product.prodname_ghe_cloud %} erkunden, indem du die vorgeschlagenen Aufgaben auf der Registerkarte „Übersicht“ deiner Organisation befolgst. Wenn du die Aufgaben zuvor verworfen hast, kannst du wieder auf sie zugreifen, indem du oben auf der Seite auf **Erste Schritte mit vorgeschlagenen Aufgaben** klickst.

![Schaltfläche „Erste Schritte mit vorgeschlagenen Aufgaben“](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

{% data reusables.products.product-roadmap %}

## Test beenden

Du kannst {% data variables.product.prodname_enterprise %} jederzeit während deiner Testversion erwerben. Durch den Kauf von {% data variables.product.prodname_enterprise %} endet deine Testversion, das Maximum von 50 Plätzen wird entfernt und die Zahlung initiiert.

Wenn du {% data variables.product.prodname_enterprise %} nicht erwirbst, ist die Testversion bis zum Ende des 30-tägigen Zeitraums gültig. Du kannst die Testversion nicht frühzeitig beenden. Wenn die Testversion endet, wird deine Organisation herabgestuft. Wenn du eine vorhandene Organisation für die Testversion verwendet hast, wird die Organisation auf das Produkt herabgestuft, das du vor der Testversion verwendet hast. Wenn du eine neue Organisation für die Testversion erstellt hast, wird die Organisation auf {% data variables.product.prodname_free_team %} herabgestuft. 

Deine Organisation verliert Zugriff auf alle Funktionen, die nicht im neuen Plan enthalten sind, z. B. erweiterte Features wie {% data variables.product.prodname_pages %} für private Repositorys. Falls du kein Upgrade vornehmen und trotzdem vermeiden möchtest, dass du den Zugriff auf die erweiterten Features verlierst, solltest du die Repositorys vor dem Ende deiner Testversion öffentlich machen. Weitere Informationen findest du unter [Festlegen der Sichtbarkeit des Repositorys](/articles/setting-repository-visibility).

Das Downgrading deaktiviert auch alle SAML-Einstellungen, die während des Testzeitraums konfiguriert sind. Wenn du {% data variables.product.prodname_enterprise %} später kaufst, werden deine SAML-Einstellungen wieder für Benutzer*innen in deiner Organisation für die Authentifizierung aktiviert.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
5. Klicke unter „Kostenlose Testversion für {% data variables.product.prodname_ghe_cloud %}“ auf **Buy Enterprise** (Unternehmensversion kaufen) oder **Downgrade to Team** (Auf Team herabstufen).
  ![Schaltflächen „Buy Enterprise“ (Unternehmensversion kaufen) und „Downgrade to Team“ (Auf Team herabstufen)](/assets/images/help/organizations/finish-trial-buttons.png)
6. Befolge die Anweisungen zum Eingaben deiner Zahlungsmethode, und klicke dann auf **Submit** (Absenden).
