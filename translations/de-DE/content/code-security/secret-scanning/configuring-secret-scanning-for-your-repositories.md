---
title: Konfigurieren der Geheimnisüberprüfung für deine Repositorys
intro: 'Du kannst konfigurieren, wie {% data variables.product.prodname_dotcom %} deine Repositorys auf Geheimnisse prüft, die mit erweiterten Sicherheitsmustern übereinstimmen.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
ms.openlocfilehash: 00983398e326997b6472da319d342ab0758018d3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885716'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Aktivieren von {% data variables.product.prodname_secret_scanning_GHAS %}

Du kannst {% data variables.product.prodname_secret_scanning_GHAS %} für jedes Repository aktivieren, das sich im Besitz einer Organisation befindet. Nach der Aktivierung sucht {% data reusables.secret-scanning.secret-scanning-process %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Wenn {% data variables.product.prodname_advanced_security %} für dein Repository noch nicht aktiviert ist, klicke rechts neben „{% data variables.product.prodname_GH_advanced_security %}“ auf **Aktivieren**.
   {% ifversion fpt or ghec %}![Aktivieren von {% data variables.product.prodname_GH_advanced_security %} für dein Repository](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![Aktivieren von {% data variables.product.prodname_GH_advanced_security %} für dein Repository](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. Überprüfe die Auswirkungen der Aktivierung von {% data variables.product.prodname_advanced_security %}, und klicke dann auf **{% data variables.product.prodname_GH_advanced_security %} für dieses Repository aktivieren**.
6. Wenn du {% data variables.product.prodname_advanced_security %} aktivierst, wird {% data variables.product.prodname_secret_scanning %} aufgrund der Einstellungen der Organisation möglicherweise automatisch für das Repository aktiviert. Wenn „{% data variables.product.prodname_secret_scanning_caps %}“ mit der Schaltfläche **Aktivieren** angezeigt wird, musst du {% data variables.product.prodname_secret_scanning %} dennoch durch das Klicken von **Aktivieren** aktivieren. Wenn die Schaltfläche **Deaktivieren** angezeigt wird, ist {% data variables.product.prodname_secret_scanning %} bereits aktiviert. 
   ![Aktivieren von {% data variables.product.prodname_secret_scanning %} für dein Repository](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
7. Wenn du außerdem den Pushschutz aktivieren möchtest, kannst du rechts neben „Pushschutz“ auf **Aktivieren** klicken. {% data reusables.secret-scanning.push-protection-overview %} Weitere Informationen findest du unter [Schützen von Pushes mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
   ![Aktivieren des Pushschutzes für dein Repository](/assets/images/help/repository/secret-scanning-enable-push-protection.png) {% endif %} {% ifversion ghae %}
1. Bevor du {% data variables.product.prodname_secret_scanning %} aktivieren kannst, musst du {% data variables.product.prodname_GH_advanced_security %} aktivieren. Klicke rechts neben „{% data variables.product.prodname_GH_advanced_security %}“ auf **Aktivieren**.
   ![Aktivieren von {% data variables.product.prodname_GH_advanced_security %} für dein Repository](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Klicke auf **{% data variables.product.prodname_GH_advanced_security %} für dieses Repository aktivieren**, um die Aktion zu bestätigen.
   ![Bestätigen der Aktivierung von {% data variables.product.prodname_GH_advanced_security %} für dein Repository](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. Klicke rechts neben „{% data variables.product.prodname_secret_scanning_caps %}“ auf **Aktivieren**.
   ![Aktivieren von {% data variables.product.prodname_secret_scanning %} für dein Repository](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png) {% endif %}

## Ausschließen von Verzeichnissen aus {% data variables.product.prodname_secret_scanning_GHAS %}

Du kannst eine *secret_scanning.yml*-Datei verwenden, um Verzeichnisse aus {% data variables.product.prodname_secret_scanning %} auszuschließen. Beispielsweise kannst du Verzeichnisse ausschließen, welche Tests oder zufällig generierte Inhalte enthalten.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib im Dateinamenfeld *.github/secret_scanning.yml* ein.
4. Gib unter **Neue Datei bearbeiten** `paths-ignore:` gefolgt von den Pfaden ein, die du aus {% data variables.product.prodname_secret_scanning %} ausschließen möchtest.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```
    
    Du kannst Sonderzeichen verwenden, z. B. `*` zum Filtern von Pfaden. Weitere Informationen zu Filtermustern findest du unter [Workflowsyntax für GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

    {% note %}
    
    **Hinweise:**
    - Wenn mehr als 1.000 Einträge in `paths-ignore` vorhanden sind, schließt {% data variables.product.prodname_secret_scanning %} nur die ersten 1.000 Verzeichnisse von der Überprüfung aus.
    - Wenn *secret_scanning.yml* größer als 1 MB ist, ignoriert {% data variables.product.prodname_secret_scanning %} die gesamte Datei.
    
    {% endnote %}

Du kannst auch einzelne Warnungen von {% data variables.product.prodname_secret_scanning %} ignorieren. Weitere Informationen findest du unter [Verwalten von Warnungen von {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts).

## Weitere Informationsquellen

- [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
- [Definieren von benutzerdefinierten Mustern für {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)
