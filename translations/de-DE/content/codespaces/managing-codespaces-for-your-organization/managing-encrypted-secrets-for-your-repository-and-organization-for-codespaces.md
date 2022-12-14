---
title: Verwalten verschlüsselter Geheimnisse für dein Repository und deine Organisation für Codespaces
shortTitle: Encrypted secrets
intro: Dank verschlüsselter Geheimnisse kannst du vertrauliche Informationen in deiner Organisation, deinem Repository oder in {% data variables.product.prodname_codespaces %} speichern.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Secret store
- Security
ms.openlocfilehash: 062b73c8559b700bdbd37a6b31da44403c2092f5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145106543"
---
## <a name="about-secrets"></a>Informationen zu Geheimnissen

Geheimnisse sind verschlüsselte Umgebungsvariablen, die du in einer Organisation oder einem Repository erstellst. Die von Ihnen erstellten Geheimnisse in {% data variables.product.prodname_codespaces %} verwendet werden. GitHub verwendet eine [Libsodium Sealed Box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes), um Geheimnisse zu verschlüsseln, bevor sie GitHub erreichen, und entschlüsselt diese nur, wenn du sie in einem Codespace verwendest.

Geheimnisse auf Organisationsebene ermöglichen es Ihnen, Geheimnisse zwischen mehreren Repositorys zu teilen, was die Notwendigkeit zur Erstellung von doppelten Geheimnissen verringert. Du kannst Zugriffsrichtlinien verwenden, um zu steuern, welche Repositorys Organisationsgeheimnisse verwenden können. 

{% data reusables.codespaces.secrets-on-start %}

### <a name="naming-secrets"></a>Benennen von Geheimnissen

{% data reusables.codespaces.secrets-naming %} So muss beispielsweise ein auf Repositoryebene erstelltes Geheimnis einen eindeutigen Namen in diesem Repository haben, und ein auf Organisationsebene erstelltes Geheimnis muss einen eindeutigen Namen auf dieser Ebene aufweisen.

  {% data reusables.codespaces.secret-precedence %}

### <a name="limits-for-secrets"></a>Einschränkungen für Geheimnisse

Du kannst bis zu 100 Geheimnisse pro Organisation und 100 Geheimnisse pro Repository speichern.

Geheimnisse sind auf 64 KB beschränkt.

## <a name="adding-secrets-for-a-repository"></a>Hinzufügen von Geheimnissen für ein Repository

Um Geheimnisse für ein Organisationsrepository zu erstellen, musst du über Administratorzugriff verfügen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Klicke im Abschnitt „Sicherheit“ der Seitenleiste auf **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Geheimnisse**, und wähle dann **{% data variables.product.prodname_codespaces %}** aus.
2. Klicke oben auf der Seite auf **Neues Repositorygeheimnis**.
3. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
4. Gib den Wert für das Geheimnis ein.
5. Klicke auf **Geheimnis hinzufügen**.

## <a name="adding-secrets-for-an-organization"></a>Hinzufügen von Geheimnissen für eine Organisation

Beim Erstellen eines Geheimnisses in einer Organisation kannst du mit einer Richtlinie einschränken, welche Repositorys darauf zugreifen können. Du kannst beispielsweise allen Repositorys Zugriff gewähren oder nur private Repositorys oder eine angegebene Liste von Repositorys zulassen.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
1. Klicke im Abschnitt „Sicherheit“ der Seitenleiste auf **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Geheimnisse**, und wähle dann **{% data variables.product.prodname_codespaces %}** aus.
2. Klicke oben auf der Seite auf **Neues Organisationsgeheimnis**.
3. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
4. Gib den **Wert** für das Geheimnis ein.
5. Wähle in der Dropdownliste **Repositoryzugriff** eine Zugriffsrichtlinie aus.
    ![Repositoryzugriffsliste mit ausgewählten privaten Repositorys](/assets/images/help/codespaces/secret-repository-access.png)
6. Klicke auf **Geheimnis hinzufügen**.

## <a name="reviewing-access-to-organization-level-secrets"></a>Überprüfen des Zugriffs auf Organisationsgeheimnisse

Du kannst überprüfen, welche Zugriffsrichtlinien auf ein Geheimnis in deiner Organisation angewendet werden.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Die Liste der Geheimnisse enthält alle konfigurierten Berechtigungen und Richtlinien. Beispiel: ![Liste der Geheimnisse](/assets/images/help/settings/actions-org-secrets-list.png)
1. Klicke auf **Aktualisieren**, um weitere Details zu den konfigurierten Berechtigungen des jeweiligen Geheimnisses anzuzeigen.

## <a name="further-reading"></a>Weitere Informationsquellen

- [Verwalten verschlüsselter Geheimnisse für Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
