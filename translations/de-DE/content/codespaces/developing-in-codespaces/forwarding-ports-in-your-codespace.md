---
title: Weiterleiten von Ports in deinem Codespace
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
ms.openlocfilehash: 320a2e42d647452056961d4f0f987c3c5db49476
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158909'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Informationen zu weitergeleiteten Ports

Portweiterleitung bietet Zugriff auf TCP-Ports, die innerhalb deines Codespace ausgeführt werden. Wenn du beispielsweise eine Webanwendung auf einem bestimmten Port in deinem Codespace ausführst, kannst du diesen Port weiterleiten. Auf diese Weise kannst du über den Browser auf deinem lokalen Computer zum Testen und Debuggen auf die Anwendung zugreifen.

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. Klicke unter der Liste der Ports auf **Port hinzufügen**.

   ![Schaltfläche „Port hinzufügen“](/assets/images/help/codespaces/add-port-button.png)

1. Gib die Portnummer oder Adresse ein, und drücke die EINGABETASTE.

   ![Textfeld zum Eingeben der Portnummer](/assets/images/help/codespaces/port-number-text-box.png)

## Verwenden der HTTPS-Weiterleitung

{% data variables.product.prodname_github_codespaces %} leitet Ports standardmäßig mithilfe von HTTP weiter, aber du kannst alle Ports so aktualisieren, dass bei Bedarf das HTTPS verwendet wird. Wenn du einen Port mit öffentlicher Sichtbarkeit zur Verwendung von HTTPS aktualisierst, wird die Sichtbarkeit des Ports automatisch in „privat“ geändert.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Klicke mit der rechten Maustaste auf den Port, den du aktualisieren möchtest. Zeige anschließend auf **Portprotokoll ändern**.
  ![Option zum Ändern des Portprotokolls](/assets/images/help/codespaces/update-port-protocol.png)
1. Wähle das für diesen Port erforderliche Protokoll aus. Das ausgewählte Protokoll wird für die Lebensdauer des Codespaces für diesen Port gespeichert.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Klicke mit der rechten Maustaste auf den Port, den du freigeben möchtest. Zeige dann auf das Menü „Portsichtbarkeit“, und wähle entweder **Privat für Organisation** oder **Öffentlich** aus.
  ![Option im Kontextmenü zum Auswählen der Portsichtbarkeit](/assets/images/help/codespaces/make-public-option.png)
1. Klicke auf das Kopiersymbol rechts neben der lokalen Adresse für den Port.
  ![Kopiersymbol zum Kopieren der Port-URL](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Sende die kopierte URL an die Person, für die du den Port freigeben möchtest.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. Klicke unter der Liste der Ports auf **Port hinzufügen**.

   ![Schaltfläche „Port hinzufügen“](/assets/images/help/codespaces/add-port-button.png)

1. Gib die Portnummer oder Adresse ein, und drücke die EINGABETASTE.

   ![Textfeld zum Eingeben der Portnummer](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Klicke mit der rechten Maustaste auf den Port, den du freigeben möchtest. Zeige dann auf das Menü „Portsichtbarkeit“, und wähle entweder **Privat für Organisation** oder **Öffentlich** aus.
  ![Option im Kontextmenü zum öffentlichen Freigeben des Ports](/assets/images/help/codespaces/make-public-option.png)
1. Klicke auf das Kopiersymbol rechts neben der lokalen Adresse für den Port.
  ![Kopiersymbol zum Kopieren der Port-URL](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Sende die kopierte URL an die Person, für die du den Port freigeben möchtest.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Verwende zum Weiterleiten eines Ports den Unterbefehl `gh codespace ports forward`. Ersetze `codespace-port:local-port` durch den Remoteport und den lokalen Port, mit denen du eine Verbindung herstellen möchtest. Nachdem du den Befehl eingegeben hast, kannst du deine Auswahl in der angezeigten Liste der Codespaces treffen.

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

Weitere Informationen zu diesem Befehl findest du im [{% data variables.product.prodname_cli %}-Leitfaden](https://cli.github.com/manual/gh_codespace_ports_forward).

Gib `gh codespace ports` ein, und wähle dann einen Codespace aus, um Details zu weitergeleiteten Ports anzuzeigen.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

Verwende den Unterbefehl `gh codespace ports visibility`, um die Sichtbarkeit eines weitergeleiteten Ports zu ändern. {% data reusables.codespaces.port-visibility-settings %}

Ersetze `codespace-port` durch die Nummer des weitergeleiteten Ports. Ersetze `setting` durch `private`, `org` oder `public`. Nachdem du den Befehl eingegeben hast, kannst du deine Auswahl in der angezeigten Liste der Codespaces treffen.

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

Du kannst mit einem Befehl die Sichtbarkeit mehrerer Ports festlegen. Beispiel:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

Weitere Informationen zu diesem Befehl findest du im [{% data variables.product.prodname_cli %}-Leitfaden](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

Die Portbezeichnungen werden angezeigt, wenn du die weitergeleiteten Ports für einen Codespace auflistest. Verwende hierfür den Befehl `gh codespace ports`, und wähle dann einen Codespace aus.

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## Weiterleiten eines Ports

Informationen zum Weiterleiten eines Ports in einem Codespace an einen Port auf deinem lokalen Computer findest du im Abschnitt „Portweiterleitung“ des Artikels [Security model](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding) (Sicherheitsmodell) in der JetBrains-Dokumentation.

Alternativ kannst du {% data variables.product.prodname_cli %} verwenden, um einen Port weiterzuleiten. Klicke auf die Registerkarte „{% data variables.product.prodname_cli %}“ oben auf dieser Seite, um weitere Informationen zu erhalten.

{% endjetbrains %}
