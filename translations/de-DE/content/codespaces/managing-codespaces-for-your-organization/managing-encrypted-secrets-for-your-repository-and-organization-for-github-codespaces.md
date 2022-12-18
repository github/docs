---
title: Verwalten verschlüsselter Geheimnisse für dein Repository und deine Organisation für Codespaces
shortTitle: Encrypted secrets
intro: 'Dank verschlüsselter Geheimnisse kannst du vertrauliche Informationen in deiner Organisation, deinem Repository oder in {% data variables.product.prodname_github_codespaces %} speichern.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage secrets for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Secret store
  - Security
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces
ms.openlocfilehash: b57b094fe18a76cb1a7cae3f69858af31d5a4037
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008156'
---
## Informationen zu Geheimnissen

Geheimnisse sind verschlüsselte Umgebungsvariablen, die du in einer Organisation oder einem Repository erstellst. Die von dir erstellten Geheimnisse können in {% data variables.product.prodname_github_codespaces %} verwendet werden. GitHub verwendet eine [Libsodium Sealed Box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes), um Geheimnisse zu verschlüsseln, bevor sie GitHub erreichen, und entschlüsselt diese nur, wenn du sie in einem Codespace verwendest.

Geheimnisse auf Organisationsebene ermöglichen es Ihnen, Geheimnisse zwischen mehreren Repositorys zu teilen, was die Notwendigkeit zur Erstellung von doppelten Geheimnissen verringert. Du kannst Zugriffsrichtlinien verwenden, um zu steuern, welche Repositorys Organisationsgeheimnisse verwenden können. 

{% data reusables.codespaces.secrets-on-start %}

### Benennen von Geheimnissen

{% data reusables.codespaces.secrets-naming %} So muss beispielsweise ein auf Repositoryebene erstelltes Geheimnis einen eindeutigen Namen in diesem Repository haben, und ein auf Organisationsebene erstelltes Geheimnis muss einen eindeutigen Namen auf dieser Ebene aufweisen.

  {% data reusables.codespaces.secret-precedence %}

### Einschränkungen für Geheimnisse

Du kannst bis zu 100 Geheimnisse pro Organisation und 100 Geheimnisse pro Repository speichern.

Geheimnisse sind auf 64 KB beschränkt.

## Hinzufügen von Geheimnissen für ein Repository

Um Geheimnisse für ein Organisationsrepository zu erstellen, musst du über Administratorzugriff verfügen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.codespaces.sidebar-secret %}

2. Klicke oben auf der Seite auf **Neues Repositorygeheimnis**.
3. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
4. Gib den Wert für das Geheimnis ein.
5. Klicke auf **Geheimnis hinzufügen**.

## Hinzufügen von Geheimnissen für eine Organisation

Beim Erstellen eines Geheimnisses in einer Organisation kannst du mit einer Richtlinie einschränken, welche Repositorys darauf zugreifen können. Du kannst beispielsweise allen Repositorys Zugriff gewähren oder nur private Repositorys oder eine angegebene Liste von Repositorys zulassen.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.codespaces.sidebar-secret %}

2. Klicke oben auf der Seite auf **Neues Organisationsgeheimnis**.
3. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
4. Gib den **Wert** für das Geheimnis ein.
5. Wähle in der Dropdownliste **Repositoryzugriff** eine Zugriffsrichtlinie aus.
    ![Repositoryzugriffsliste mit ausgewählten privaten Repositorys](/assets/images/help/codespaces/secret-repository-access.png)
6. Klicke auf **Geheimnis hinzufügen**.

## Überprüfen des Zugriffs auf Organisationsgeheimnisse

Du kannst überprüfen, welche Zugriffsrichtlinien auf ein Geheimnis in deiner Organisation angewendet werden.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.codespaces.sidebar-secret %}

1. Die Liste der Geheimnisse enthält alle konfigurierten Berechtigungen und Richtlinien. Beispiel: ![Liste der Geheimnisse](/assets/images/help/settings/actions-org-secrets-list.png)
1. Klicke auf **Aktualisieren**, um weitere Details zu den konfigurierten Berechtigungen des jeweiligen Geheimnisses anzuzeigen.

## Weitere Informationsquellen

- [Verwalten verschlüsselter Geheimnisse für Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
