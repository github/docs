---
title: Registrieren eines Learning Management System bei GitHub Classroom
intro: 'Du kannst ein LTI-konformes Learning Management System (LMS) bei {% data variables.product.prodname_classroom %} konfigurieren.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}.'
shortTitle: Register an LMS
ms.openlocfilehash: 408126833cbf7fa8cd4a71d172f6550e82f795a2
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185169'
---
## Informationen zum Registrieren eines LMS für einen Kursraum

Bevor du dein LMS mit einem Kursraum verknüpfen kannst, muss ein*e Administrator*in für deine LMS-Instanz dieses so konfigurieren, dass {% data variables.product.prodname_classroom %} zugelassen wird. Dann muss dein LMS bei {% data variables.product.prodname_classroom %} registriert werden, um den OAuth-Handshake zu initiieren. Ein*e Administrator*in muss diesen Registrierungsvorgang nur einmal ausführen, und jede Lehrkraft, die eine LMS-Instanz verwendet, kann ihre LMS-Kurse mit Kursräumen synchronisieren. Weitere Informationen zum Verknüpfen eines LMS-Kurses mit einem Kursraum findest du unter [Verknüpfen eines Learning Management System-Kurses mit einem Kursraum](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom).

{% note %}

**Hinweis:** {% data reusables.classroom.google-classroom-note %}

{% endnote %}

## Unterstützte LMS

{% data reusables.classroom.supported-lmses %}

## Konfigurieren von Canvas für {% data variables.product.prodname_classroom %}

Du kannst deine Canvas-Installation bei {% data variables.product.prodname_classroom %} registrieren, damit Lehrkräfte Kurslistendaten in ihre Kursräume importieren können. Weitere Informationen zu Canvas findest du auf der [Canvas-Website](https://www.instructure.com/canvas/).

### 1. Registrieren von {% data variables.product.prodname_classroom %}-Entwicklerschlüsseln bei Canvas

1. Melde dich bei [Canvas](https://www.instructure.com/canvas/#login) an.
2. Klicke auf der linken Randleiste auf der Startseite auf **Admin** und dann auf **Websiteadministrator**.
3. Klicke auf **Entwicklerschlüssel**.
4. Klicke unter „Entwicklerschlüssel“ auf die Schaltfläche **+ Entwicklerschlüssel**, und wähle dann im Dropdownmenü **+ LTI-Schlüssel** aus.
5. Lege auf dem Konfigurationsbildschirm „Schlüsseleinstellungen“ die folgenden Werte für die Felder fest: 

    | Feld für die Konfiguration der Canvas-App | Wert oder Einstellung |
    | :- | :- |
    | **Methode** | `Manual Entry` |
    | **Titel** | `GitHub Classroom` <br/><br/>**Hinweis**: Du kannst einen beliebigen Namen verwenden, aber du musst die Lehrkräfte informieren, wenn du diese Angabe änderst.  |
    | **Beschreibung** | `Sync Canvas course rosters to GitHub Classroom` (oder ähnlich) |
    | **Ziellink-URI** | `https://classroom.github.com/context-link` |
    | **Initiierungs-URL für OpenID Connect** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **JWK-Methode** | `Public JWK URL` |
    | **Öffentliche JWK-URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **Umleitungs-URIs** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | Dropdownmenü **LTI Advantage-Dienste** | Aktiviere das Kontrollkästchen „Benutzerdaten abrufen, die dem Installationskontext des Tools zugeordnet sind“. |
    | **Dropdownmenü „Zusätzliche Einstellungen“** | Wähle unter „Sichtbarkeit“ die Option `Public` aus. |
    | **Positionierung** | Wählen Sie `Course Settings Sub Navigation` aus. <br/><br/>**Hinweis**: Wenn du die Positionierung änderst, musst du die Lehrkräfte darüber informieren. Unsere Dokumentation geht von dieser Positionierung der Schaltfläche aus. |
6. Klicken Sie auf **Speichern**.
7. Notiere dir den Wert der Client-ID in der Zeile „GitHub Classroom-Entwicklerschlüssel“ (Spalte „Details“) der Tabelle auf der Seite „Entwicklerschlüssel“. Dieser muss den Lehrkräften mitgeteilt werden, damit sie das Setup abschließen können. 
8. Ändere den Status des Schlüssels in der Spalte „Status“ der Tabelle auf der Seite „Entwicklerschlüssel“ in „Ein“.

### 2. Registrieren von Entwicklerschlüsseln bei {% data variables.product.prodname_classroom %}

1. Gehe zu https://classroom.github.com/register-lms. 
2. Geben Sie die folgenden Informationen ein:
   - Wähle unter „LMS-Typ“ im Dropdownmenü „Canvas“ aus. 
   - Aussteller-ID: `https://canvas.instructure.com`
   - Domäne: Die Basis-URL für deine Canvas-Instanz
   - Client-ID: Die Client-ID unter „Details“ für den von dir erstellten Entwicklerschlüssel
   - OIDC-Autorisierungsendpunkt: Die Basis-URL zu deiner Canvas-Instanz, der `/api/lti/authorize_redirect` angefügt wird
   - OAuth 2.0-URL für Tokenabruf: Die Basis-URL zu deiner Canvas-Instanz, der `/login/oauth2/token` angefügt wird
   - URL für Schlüsselfestlegung: Die Basis-URL zu deiner Canvas-Instanz, der `/api/lti/security/jwks` angefügt wird

  ![Registrieren der Canvas-Instanz bei GitHub Classroom](/assets/images/help/classroom/register-canvas-with-github-classroom.png)

3. Klicken Sie auf **Registrieren**. 
4. Das Banner „LMS erfolgreich registriert“ sollte oben auf dem Bildschirm angezeigt werden. Das bedeutet, dass deine LMS-Instanz registriert wurde und Lehrkräfte ihre Kursräume nun verknüpfen können.

## Konfigurieren von Moodle für {% data variables.product.prodname_classroom %}

Du kannst deine Moodle-Installation bei {% data variables.product.prodname_classroom %} registrieren, damit Lehrkräfte Kurslistendaten in ihre Kursräume importieren können. Weitere Informationen zu Moodle findest du auf der [Moodle-Website](https://moodle.org).

Du musst die Moodle-Version 3.0 oder höher verwenden.

### 1. Aktivieren der Veröffentlichung als LTI-Tool in Moodle

1. Melde dich bei [Moodle](https://moodle.org/login/) an.
2. Klicke im obersten Menü auf die Registerkarte „Websiteverwaltung“.
3. Klicke auf der Seite „Websiteverwaltung“ auf die Registerkarte „Plug-Ins“, scrolle dann nach unten zum Abschnitt „Authentifizierung“, und klicke auf **Authentifizierung verwalten**.
4. Klicke neben dem Feld „LTI“ auf die Umschaltfläche, um LTI zu aktivieren.
5. Klicke erneut auf die Registerkarte „Plug-Ins“, scrolle dann nach unten zu „Registrierungen“, und klicke auf **Registrierungs-Plug-Ins verwalten**.
6. Klicke neben dem Feld „Als LTI-Tool veröffentlichen“ auf die Umschaltfläche, um die Veröffentlichung als LTI-Tool zu aktivieren.
7. Kehre zur Seite „Websiteverwaltung“ zurück, indem du im obersten Menü auf die Registerkarte „Websiteverwaltung“ klickst. Scrolle dann zum Abschnitt „Sicherheit“, und klicke auf **HTTP-Sicherheit**.
8. Aktiviere das Kontrollkästchen neben „Frameeinbettung zulassen“, um die Frameeinbettung zu aktivieren. Klicke dann auf **Änderungen speichern**.

### 2. Registrieren von {% data variables.product.prodname_classroom %} als externes Tool

1. Kehre zur Moodle-Seite „Websiteverwaltung“ zurück, indem du im obersten Menü auf die Registerkarte „Websiteverwaltung“ klickst. 
2. Klicke auf die Registerkarte „Plug-Ins“, und klicke dann neben dem Abschnitt „Aktivitätsmodule“ unter „Externes Tool“ auf **Tools verwalten**.
3. Klicke auf **Tool manuell konfigurieren**. 
4. Gib die folgenden Werte in die Felder ein:

    | Feld für die Konfiguration der Moodle-App | Wert oder Einstellung |
    | :- | :- |
    | **Name des Tools** | `GitHub Classroom` <br/><br/>**Hinweis**: Du kannst einen beliebigen Namen verwenden, aber du musst die Lehrkräfte informieren, wenn du diese Angabe änderst. |
    | **Tool-URL** | `https://classroom.github.com` |
    | **LTI-Version** | `LTI 1.3` |
    | **Art des öffentlichen Schlüssels** | `Keyset URL` |
    | **Öffentliches Keyset** | `https://classroom.github.com/.well-known/jwks.json` |
    | **URL für Anmeldeinitiierung** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Umleitungs-URI(s)** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **Standardstartcontainer** | `New window` |

5. Aktiviere das Kontrollkästchen **Deep Linking (Inhaltselementnachricht) unterstützen**.
6. Wähle unter dem Dropdownmenü „Dienste“ neben „Namen und Rollenbereitstellung für IMS-LTI“ die Option „Diesen Dienst zum Abrufen der Mitgliederinformationen gemäß Datenschutzeinstellungen verwenden“ aus dem Dropdownmenü aus. 
7. Klicke auf **Änderungen speichern**. 
8. GitHub Classroom ist jetzt als externes Tool registriert. Klicke unter „Tools“ im Feld „GitHub Classroom“ auf das Menüsymbol, um den Bildschirm „Toolkonfigurationsdetails“ anzuzeigen. Dieser Bildschirm enthält wichtige Informationen, die du unten im letzten Schritt zum Registrieren deiner Instanz in {% data variables.product.prodname_classroom %} eingeben musst. 

### 3. Registrieren deiner Moodle-Instanz bei {% data variables.product.prodname_classroom %}

1. Gehe zu https://classroom.github.com/register-lms. 
2. Geben Sie die folgenden Informationen ein:
   - Wähle unter „LMS-Typ“ im Dropdownmenü „Moodle“ aus. 
   - Aussteller-ID: Die Plattform-ID aus den Toolkonfigurationsdetails des externen Tools, das du in Moodle erstellt hast
   - Domäne: Die Basis-URL für deine Moodle-Instanz
   - Client-ID: Die Client-ID aus den Toolkonfigurationsdetails des externen Tools, das du in Moodle erstellt hast
   - URL für Authentifizierungsanforderungen: Die URL für Authentifizierungsanforderungen aus den Toolkonfigurationsdetails des externen Tools, das du in Moodle erstellt hast
   - Zugriffstoken-URL: Die Zugriffstoken-URL aus den Toolkonfigurationsdetails des externen Tools, das du in Moodle erstellt hast
   - Keyset-URL: Die öffentliche Keyset-URL aus den Toolkonfigurationsdetails des externen Tools, das du in Moodle erstellt hast
  
  ![Registrieren der Moodle-Instanz bei GitHub Classroom](/assets/images/help/classroom/register-moodle-with-github-classroom.png)

3. Klicken Sie auf **Registrieren**.
4. Das Banner „LMS erfolgreich registriert“ sollte oben auf dem Bildschirm angezeigt werden. Das bedeutet, dass deine LMS-Instanz registriert wurde und Lehrkräfte ihre Kursräume nun verknüpfen können.

## Konfigurieren von Sakai für {% data variables.product.prodname_classroom %}

### 1. Registrieren von {% data variables.product.prodname_classroom %} als externes Tool

1. Wechsle zu Sakai, und melde dich an.
2. Wechsle zu „Verwaltungsarbeitsbereich“, und wähle **Externe Tools** in der linken Seitenleiste aus. 
3. Klicke auf **LTI 1.x-Tool installieren**.
4. Gib die folgenden Werte in die Felder ein:

    | Feld in der App-Konfiguration von Sakai | Wert oder Einstellung |
    | :- | :- |
    | **Name des Tools** | GitHub Classroom – [dein Kursname] <br/><br/>**Hinweis**: Du kannst einen beliebigen Namen verwenden, aber du musst die Lehrkräfte informieren, wenn du diese Angabe änderst. |
    | **Schaltflächentext** (Text im Toolmenü) | Dieser Text wird Lehrkräften auf der Schaltfläche zum Starten von {% data variables.product.prodname_classroom %} angezeigt. Der Wert könnte beispielsweise `sync` lauten. |
    | **Start-URL** | `https://classroom.github.com/context-link` |
    | **Benutzernamen an externes Tool senden** | Aktivieren Sie dieses Kontrollkästchen. |
    | **Kursliste an externes Tool senden** | Aktivieren Sie dieses Kontrollkästchen. |
    | **Tool unterstützt LTI 1.3** | Aktivieren Sie dieses Kontrollkästchen. |
    | **Keyset-URL für LTI 1.3-Tool** | `https://classroom.github.com/.well-known/jwks.json` |
    | **OpenID Connect-/Initialisierungsendpunkt für LTI 1.3-Tool** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Umleitungsendpunkt für LTI 1.3-Tool** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
5. Bei der Übermittlung zeigt Sakai dir die Informationen an, die du benötigst, um deine Sakai-Instanz bei {% data variables.product.prodname_classroom %} zu registrieren.

### 2. Registrieren deiner Sakai-Instanz bei {% data variables.product.prodname_classroom %}

1. Gehe zu https://classroom.github.com/register-lms.
2. Geben Sie die folgenden Informationen ein:
   - Wähle unter „LMS-Typ“ im Dropdownmenü „Sakai“ aus. 
   - LTI 1.3-Plattformaussteller: Der Inhalt des gleichnamigen Felds in Sakai
   - Domäne: Die Basis-URL für deine Sakai-Instanz
   - LTI 1.3-Client-ID: Der Inhalt des gleichnamigen Felds in Sakai
   - OIDC-Authentifizierungs-URL der LTI 1.3-Plattform: Der Inhalt des gleichnamigen Felds in Sakai
   - Abruf-URL für das OAuth2-Bearertoken der LTI 1.3-Plattform: Der Inhalt des gleichnamigen Felds in Sakai
   - Bekannte/Keyset-OAuth2-URL der LTI 1.3-Plattform: Der Inhalt des gleichnamigen Felds in Sakai
  
  ![Registrieren der Sakai-Instanz bei GitHub Classroom](/assets/images/help/classroom/register-sakai-with-github-classroom.png)

3. Klicken Sie auf **Registrieren**. 
4. Das Banner „LMS erfolgreich registriert“ sollte oben auf dem Bildschirm angezeigt werden. Das bedeutet, dass deine LMS-Instanz registriert wurde und Lehrkräfte ihre Kursräume nun verknüpfen können.
