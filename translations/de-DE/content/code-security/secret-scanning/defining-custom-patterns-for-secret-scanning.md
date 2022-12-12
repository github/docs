---
title: Definieren von benutzerdefinierten Mustern für die Geheimnisüberprüfung
shortTitle: Define custom patterns
intro: 'Du kannst {% data variables.product.prodname_secret_scanning_GHAS %}so erweitern, dass Geheimnisse über die Standardmuster hinaus erkannt werden.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 1c7594329dfdc2843e38c1c2eb7b70e32b89f11b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106517'
---
## Informationen zu benutzerdefinierten Mustern für {% data variables.product.prodname_secret_scanning %}

Du kannst benutzerdefinierte Muster definieren, um Geheimnisse zu identifizieren, die nicht von den Standardmustern erkannt werden, die von {% data variables.product.prodname_secret_scanning %} unterstützt werden. Beispielsweise hast du möglicherweise ein geheimes Muster, das intern für deine Organisation ist. Weitere Details zu unterstützten Geheimnissen und Dienstanbietern findest du unter [{% data variables.product.prodname_secret_scanning_caps %}-Muster](/code-security/secret-scanning/secret-scanning-patterns).

Du kannst benutzerdefinierte Muster für dein Unternehmen, deine Organisation oder dein Repository definieren. {% data variables.product.prodname_secret_scanning_caps %} unterstützt bis zu 500 benutzerdefinierte Muster für jedes Organisations- oder Unternehmenskonto und bis zu 100 benutzerdefinierte Muster pro Repository.

## Syntax regulärer Ausdrücke für benutzerdefinierte Muster

Du kannst benutzerdefinierte Muster für {% data variables.product.prodname_secret_scanning_GHAS %} als einen oder mehrere reguläre Ausdrücke angeben.

- **Geheimnisformat:** ein Ausdruck, der das Format des Geheimnisses selbst beschreibt.
- **Vor dem Geheimnis:** ein Ausdruck, der die Zeichen beschreibt, die vor dem Geheimnis kommen. Dies ist standardmäßig auf `\A|[^0-9A-Za-z]` festgelegt, was bedeutet, dass das Geheimnis am Anfang einer Zeile sein muss oder ihm ein nicht alphanumerisches Zeichen vorangestellt werden muss.
- **Nach dem Geheimnis:** ein Ausdruck, der die Zeichen beschreibt, die nach dem Geheimnis kommen. Dies ist standardmäßig auf `\z|[^0-9A-Za-z]` festgelegt, was bedeutet, dass dem Geheimnis eine neue Zeile oder ein nicht alphanumerisches Zeichen folgen muss.
- **Zusätzliche Übereinstimmungsanforderungen:** mindestens ein optionaler Ausdruck, dem das Geheimnis entsprechen muss oder nicht entsprechen darf.

Für einfache Token musst du normalerweise nur ein Geheimnisformat angeben. Die anderen Felder bieten Flexibilität, sodass du komplexere Geheimnisse angeben kannst, ohne komplexe reguläre Ausdrücke zu erstellen.  Ein Beispiel für ein benutzerdefiniertes Muster findest du unter [Beispiel für ein benutzerdefiniertes Muster, das mithilfe zusätzlicher Anforderungen angegeben wird](#example-of-a-custom-pattern-specified-using-additional-requirements).

{% data variables.product.prodname_secret_scanning_caps %} verwendet die [Hyperscan-Bibliothek](https://github.com/intel/hyperscan) und unterstützt nur Hyperscan-RegEx-Konstrukte, die eine Teilmenge der PCRE-Syntax sind. Hyperscan-Optionsmodifizierer werden nicht unterstützt.  Weitere Informationen zu Hyperscan-Musterkonstrukten findest du in der Hyperscan-Dokumentation unter [Musterunterstützung](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support).

## Definieren eines benutzerdefinierten Musters für ein Repository

Bevor du ein benutzerdefiniertes Muster definierst, musst du sicherstellen, dass {% data variables.product.prodname_secret_scanning %} im Repository aktiviert ist. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_secret_scanning %} für deine Repositorys](/code-security/secret-security/configuring-secret-scanning-for-your-repositories).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Wenn du bereit bist, dein neues benutzerdefiniertes Muster zu testen, um Übereinstimmungen im Repository zu identifizieren, ohne Warnungen zu erstellen, klicke auf **Save and dry run** (Speichern und Probelauf).
{% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {% endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Nachdem dein Muster erstellt wurde, {% data reusables.secret-scanning.secret-scanning-process %} Weitere Informationen zum Anzeigen von {% data variables.product.prodname_secret_scanning %}-Warnungen findest du unter [Verwalten von Warnungen aus {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

### Beispiel für ein benutzerdefiniertes Muster, das mithilfe zusätzlicher Anforderungen angegeben ist

Ein Unternehmen verfügt über ein internes Token mit fünf Merkmalen. Du verwendest die verschiedenen Felder, um anzugeben, wie Token wie folgt identifiziert werden:

| **Merkmal** | **Feld und regulärer Ausdruck** |
|----------------|------------------------------|
| Länge zwischen 5 und 10 Zeichen | Geheimnisformat: `[$#%@AA-Za-z0-9]{5,10}` |
| Endet nicht mit `.` | Nach dem Geheimnis: `[^\.]` |
| Enthält Zahlen und Großbuchstaben | Zusätzliche Anforderungen: Geheimnis muss mit `[A-Z]` und `[0-9]` übereinstimmen |
| Enthält nicht mehr als einen Kleinbuchstaben in einer Zeile | Zusätzliche Anforderungen: Geheimnis darf nicht mit `[a-z]{2,}` übereinstimmen |
| Enthält eines der folgenden Zeichen: `$%@!` | Zusätzliche Anforderungen: Geheimnis muss mit `[$%@!]` übereinstimmen |

Diese Token entsprechen dem oben beschriebenen benutzerdefinierten Muster:

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

Diese Zeichenfolgen entsprechen nicht dem oben beschriebenen benutzerdefinierten Muster:

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Definieren eines benutzerdefinierten Musters für eine Organisation

Bevor du ein benutzerdefiniertes Muster definierst, musst du sicherstellen, dass du {% data variables.product.prodname_secret_scanning %} für die Repositorys aktivierst, die du in deiner Organisation überprüfen möchtest. Informationen zum Aktivieren von {% data variables.product.prodname_secret_scanning %} für alle Repositorys in deiner Organisation findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

{% ifversion ghes < 3.5 or ghae %} {% note %}

**Hinweis:** Da es keine Probelauffunktionalität gibt, empfehlen wir, deine benutzerdefinierten Muster in einem Repository zu testen, bevor du sie für deine gesamte Organisation definierst. Auf diese Weise kannst du das Erstellen übermäßig vieler falsch positiver {% data variables.product.prodname_secret_scanning %}-Warnungen vermeiden.

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Wenn du bereit bist, dein neues benutzerdefiniertes Muster zu testen, um Übereinstimmungen in bestimmten Repositorys zu identifizieren, ohne Warnungen zu erstellen, klicke auf **Save and dry run** (Speichern und Probelauf).
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Nachdem dein Muster erstellt wurde, sucht die {% data variables.product.prodname_secret_scanning %} nach Geheimnissen in Repositorys in deiner Organisation, einschließlich ihres gesamten Git-Verlaufs auf allen Branches. Organisationsbesitzer und Repositoryadministratoren erhalten Warnungen zu allen gefundenen Geheimnissen und können die Warnung im Repository überprüfen, in dem das Geheimnis gefunden wurde. Weitere Informationen zum Anzeigen von {% data variables.product.prodname_secret_scanning %}-Warnungen findest du unter [Verwalten von Warnungen aus {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

## Definieren eines benutzerdefinierten Musters für ein Unternehmenskonto

{% ifversion fpt or ghec or ghes %}

Bevor du ein benutzerdefiniertes Muster definierst, musst du sicherstellen, dass du die Geheimnisüberprüfung für dein Unternehmenskonto aktivierst. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} **Hinweise:**
- Auf Unternehmensebene kann nur der Ersteller eines benutzerdefinierten Musters das Muster bearbeiten und in einem Probelauf verwenden. 
- Unternehmensbesitzer können Probeläufe nur für Repositorys verwenden, auf die sie Zugriff haben, und Unternehmensbesitzer verfügen nicht unbedingt über Zugriff auf alle Organisationen oder Repositorys innerhalb des Unternehmens.
{% else %} **Hinweis:** Da es keine Probelauffunktionalität gibt, empfehlen wir, deine benutzerdefinierten Muster in einem Repository zu testen, bevor du sie für dein gesamtes Unternehmen definierst. Auf diese Weise kannst du das Erstellen übermäßig vieler falsch positiver {% data variables.product.prodname_secret_scanning %}-Warnungen vermeiden.

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Klicke unter „Codesicherheit und -analyse“ auf **Sicherheitsfeatures**.{% else %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
1. Klicke unter „Benutzerdefinierte Muster zur Geheimnisüberprüfung“ auf **Neues Muster**.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. Wenn du dein neues benutzerdefiniertes Muster testen möchtest, um Übereinstimmungen im Unternehmen zu identifizieren, ohne Warnungen zu erstellen, klicke auf **Speichern und Probelauf**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Nachdem dein Muster erstellt wurde, sucht die {% data variables.product.prodname_secret_scanning %} nach Geheimnissen in Repositorys in den Organisationen deines Unternehmens, bei denen {% data variables.product.prodname_GH_advanced_security %} aktiviert ist, einschließlich ihres gesamten Git-Verlaufs auf allen Branches. Organisationsbesitzer und Repositoryadministratoren erhalten Warnungen zu allen gefundenen Geheimnissen und können die Warnung im Repository überprüfen, in dem das Geheimnis gefunden wurde. Weitere Informationen zum Anzeigen von {% data variables.product.prodname_secret_scanning %}-Warnungen findest du unter [Verwalten von Warnungen aus {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

## Bearbeiten eines benutzerdefinierten Musters

Wenn du eine Änderung in einem benutzerdefinierten Muster speicherst, schließt dies alle {% data variables.product.prodname_secret_scanning %}-Warnungen, die mit der vorherigen Version des Musters erstellt wurden.
1. Navigiere zu der Stelle, an der das benutzerdefinierte Muster erstellt wurde. Ein benutzerdefiniertes Muster kann in einem Repository, einer Organisation oder einem Unternehmenskonto erstellt werden.
   * Zeige für ein Repository oder eine Organisation die Einstellungen unter „Sicherheit und Analyse“ für das Repository oder die Organisation an, in dem bzw. der das benutzerdefinierte Muster erstellt wurde. Weitere Informationen findest du unter [Definieren eines benutzerdefinierten Musters für ein Repository](#defining-a-custom-pattern-for-a-repository) oder [Definieren eines benutzerdefinierten Musters für eine Organisation](#defining-a-custom-pattern-for-an-organization) oben.
   * Für ein Unternehmen zeigst du unter „Richtlinien“ den Bereich „Erweiterte Sicherheit“ an und klickst dann auf **Sicherheitsfeatures**. Weitere Informationen findest du unter [Definieren eines benutzerdefinierten Musters für ein Unternehmenskonto](#defining-a-custom-pattern-for-an-enterprise-account) oben.
2. Klicke unter „{% data variables.product.prodname_secret_scanning_caps %}“ rechts neben dem benutzerdefinierten Muster, das du bearbeiten möchtest, auf {% octicon "pencil" aria-label="The edit icon" %}.
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
3. Wenn du bereit bist, dein bearbeitetes benutzerdefiniertes Muster zu testen, um Übereinstimmungen zu identifizieren, ohne Warnungen zu erstellen, klicke auf **Speichern und Probelauf**.
{%- endif %}
4. Wenn du deine Änderungen überprüft und getestet hast, klicke auf **Änderungen speichern**.

## Entfernen eines benutzerdefinierten Musters

1. Navigiere zu der Stelle, an der das benutzerdefinierte Muster erstellt wurde. Ein benutzerdefiniertes Muster kann in einem Repository, einer Organisation oder einem Unternehmenskonto erstellt werden.

   * Zeige für ein Repository oder eine Organisation die Einstellungen unter „Sicherheit und Analyse“ für das Repository oder die Organisation an, in dem bzw. der das benutzerdefinierte Muster erstellt wurde. Weitere Informationen findest du unter [Definieren eines benutzerdefinierten Musters für ein Repository](#defining-a-custom-pattern-for-a-repository) oder [Definieren eines benutzerdefinierten Musters für eine Organisation](#defining-a-custom-pattern-for-an-organization) oben.
   * Für ein Unternehmen zeigst du unter „Richtlinien“ den Bereich „Erweiterte Sicherheit“ an und klickst dann auf **Sicherheitsfeatures**.  Weitere Informationen findest du unter [Definieren eines benutzerdefinierten Musters für ein Unternehmenskonto](#defining-a-custom-pattern-for-an-enterprise-account) oben.
1. Klicke rechts neben dem benutzerdefinierten Muster, das du entfernen möchtest, auf {% octicon "trash" aria-label="The trash icon" %}.
1. Überprüfe die Bestätigung, und wähle eine Methode für den Umgang mit geöffneten Warnungen im Zusammenhang mit dem benutzerdefinierten Muster aus.
1. Klicke auf **Ja, dieses Muster löschen**.

   ![Bestätigen der Löschung eines benutzerdefinierten {% data variables.product.prodname_secret_scanning %}-Musters ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
