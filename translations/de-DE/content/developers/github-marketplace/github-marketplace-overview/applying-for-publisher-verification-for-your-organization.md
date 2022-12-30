---
title: Beantragen der Herausgeberüberprüfung für deine Organisation
intro: 'Wenn Sie kostenpflichtige Pläne für Ihre App anbieten oder ein Marketplace-Badge in Ihr App-Angebot aufnehmen möchten, müssen Sie den Prozess zur Prüfung des Herausgebers für Ihre Organisation abschließen.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/applying-for-publisher-verification-for-your-organization
shortTitle: Publisher verification
ms.openlocfilehash: 34085acb78eba5057cea382ab250e4704dd958d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089723'
---
Mit der Herausgeberüberprüfung wird sichergestellt, dass {% data variables.product.prodname_dotcom %} dich kontaktieren kann, dass du die zweistufige Authentifizierung für deine Organisation aktiviert hast und dass die Domäne deiner Organisation überprüft wurde.

Nachdem deine Organisation überprüft wurde, kannst du kostenpflichtige Pläne für deine App veröffentlichen. Weitere Informationen findest du unter [Festlegen von Tarifen für deinen Eintrag](/developers/github-marketplace/setting-pricing-plans-for-your-listing).

Um kostenpflichtige Pläne für deine App anzubieten, muss sich die App im Besitz einer Organisation befinden, und du musst über Besitzerberechtigungen in der Organisation verfügen. Wenn sich deine App derzeit im Besitz eines persönlichen Kontos befindet, musst du den Besitz der App an eine Organisation übertragen. Weitere Informationen findest du unter [Übertragen des Besitzes einer GitHub-App](/developers/apps/transferring-ownership-of-a-github-app) oder [Übertragen des Besitzes einer OAuth-App](/developers/apps/transferring-ownership-of-an-oauth-app).

## Anfordern der Herausgeberüberprüfung


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Seitenleiste auf **Entwicklereinstellungen**.
  ![Option „Entwicklereinstellungen“ auf der Seitenleiste mit Organisationseinstellungen](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. Klicke unter „Entwicklereinstellungen“ auf **Herausgeberüberprüfung**.
  ![Option „Herausgeberüberprüfung“ auf der Seitenleiste mit Organisationseinstellungen](/assets/images/marketplace/publisher-verification-settings-option.png)
1. Fülle unter „Herausgeberüberprüfung“ die Informationen aus der Prüfliste aus:
   - Stelle sicher, dass deine grundlegenden Profilinformationen vorhanden und korrekt sind. Vergewissere dich außerdem, dass du die optimale E-Mail-Adresse für Support und Updates von {% data variables.product.company_short %} angegeben hast.
   - Stelle sicher, dass die zweistufige Authentifizierung für deine Organisation aktiviert ist. Weitere Informationen findest du unter [Erfordern der zweistufigen Authentifizierung in deiner Organisation](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization).
   - Übermittle eine überprüfte Domäne, und stelle sicher, dass auf der Profilseite deiner Organisation das Badge „Verifiziert“ angezeigt wird. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

  ![Prüfliste für die Herausgeberüberprüfung](/assets/images/marketplace/publisher-verification-checklist.png)

2. Klicke auf **Überprüfung anfordern**. {% data variables.product.company_short %} überprüft deine Angaben und teilt dir mit, wenn die Herausgeberüberprüfung abgeschlossen ist.

## Weiterführende Themen

Informationen zum Veröffentlichungsprozess für Apps findest du unter [Informationen zu GitHub Marketplace](/developers/github-marketplace/about-github-marketplace).
