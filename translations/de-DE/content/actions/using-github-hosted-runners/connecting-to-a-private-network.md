---
title: Herstellen einer Verbindung mit einem privaten Netzwerk
intro: 'Du kannst Verbindungen von Runnern, die von {% data variables.product.prodname_dotcom %} gehostet werden, mit Ressourcen in einem privaten Netzwerk herstellen, einschließlich Paketregistrierungen, Geheimnis-Manager und anderer lokaler Dienste.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
ms.openlocfilehash: 2a74b149596e0158cdc6b5e40508b1d4a54eb8e6
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884269'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Runnern, die von {% data variables.product.prodname_dotcom %} gehostet werden

Standardmäßig haben von {% data variables.product.prodname_dotcom %} gehostete Runner Zugriff auf das öffentliche Internet. Möglicherweise sollen diese Runner aber auch auf Ressourcen in deinem privaten Netzwerk zugreifen, z. B. auf eine Paketregistrierung, einen Geheimnis-Manager oder andere lokale Dienste. 

Von {% data variables.product.prodname_dotcom %} gehostete Runner werden von allen {% data variables.product.prodname_dotcom %}-Kunden gemeinsam genutzt. Du musst also eine Möglichkeit finden, dein privates Netzwerk ausschließlich mit deinen Runnern zu verbinden, während sie deine Workflows ausführen. Es gibt mehrere Möglichkeiten, diesen Zugriff zu konfigurieren – mit jeweils unterschiedlichen Vor- und Nachteilen.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Verwenden eines API-Gateways mit OIDC

Mit {% data variables.product.prodname_actions %} kannst du OIDC-Token (OpenID Connect) verwenden, um deine Workflow außerhalb von {% data variables.product.prodname_actions %} zu authentifizieren. Du kannst beispielsweise ein API-Gateway am Edge deines privaten Netzwerks ausführen, das eingehende Anforderungen mit dem OIDC-Token authentifiziert und dann API-Anforderungen im Auftrag deines Workflows in deinem privaten Netzwerk ausführt.

Im folgenden Diagramm findest du einen Überblick über die Architektur dieser Lösung:

![Diagramm eines OIDC-Gateways](/assets/images/help/images/actions-oidc-gateway.png)

Es ist wichtig, nicht nur zu authentifizieren, dass das OIDC-Token aus {% data variables.product.prodname_actions %} stammt, sondern speziell aus deinen erwarteten Workflows, sodass andere {% data variables.product.prodname_actions %}-Benutzer nicht auf Dienste in deinem privaten Netzwerk zugreifen können. Du kannst OIDC-Ansprüche verwenden, um diese Bedingungen zu erstellen. Weitere Informationen findest du unter [Definieren von Vertrauensbedingungen für Cloudrollen mithilfe von OIDC-Ansprüchen](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims).

Der Hauptnachteil dieses Ansatzes ist, dass du das API-Gateway implementieren musst, damit Anforderungen in deinem Auftrag ausgeführt werden, und es am Rand deines Netzwerks ausführen.

Aber es gibt auch verschiedene Vorteile:
- Du musst keine Firewalls konfigurieren oder das Routing deines privaten Netzwerks ändern. 
- Das API-Gateway ist zustandslos und wird daher für Hochverfügbarkeit und hohen Durchsatz horizontal skaliert.

Weitere Informationen findest du in [einer Referenzimplementierung eines API-Gateways](https://github.com/github/actions-oidc-gateway-example) (beachte, dass dies Anpassungen für deinen Anwendungsfall erfordert und nicht sofort einsatzbereit ist) und unter [Informationen zur Sicherheitshärtung mit OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect).
{% endif %}

### Verwenden von WireGuard zum Erstellen einer Netzwerküberlagerung

Wenn du keine separate Infrastruktur für ein API-Gateway verwalten möchtest, kannst du ein Überlagerungsnetzwerk zwischen deinem Runner und einem Dienst in deinem privaten Netzwerk erstellen, indem du WireGuard an beiden Stellen ausführst.

Dieser Ansatz bringt verschiedene Nachteile mit sich: 

- Um das auf deinem privaten Dienst ausgerführte WireGuard zu erreichen, benötigst du eine bekannte IP-Adresse und einen Port, auf die dein Workflow verweisen kann: Das können entweder eine öffentliche IP-Adresse und ein Port sein, eine Portzuordnung auf einem Netzwerkgateway oder ein Dienst, der DNS dynamisch aktualisiert. 
- WireGuard führt das NAT-Traversal nicht standardmäßig aus, sodass du einen Weg finden musst, diesen Dienst bereitzustellen.
- Es handelt sich um eine 1:1-Verbindung. Wenn du Hochverfügbarkeit oder hohen Durchsatz benötigst, musst du dies also auf WireGuard aufbauen. 
- Du musst sowohl für den Runner als auch für deinen privaten Dienst Schlüssel generieren und sicher speichern. WireGuard verwendet UDP, sodass dein Netzwerk UDP-Datenverkehr unterstützen muss.

Es gibt auch einige Vorteile, da du WireGuard auf einem vorhandenen Server ausführen kannst, sodass du keine separate Infrastruktur verwalten musst, und die Unterstützung durch Runner, die von {% data variables.product.prodname_dotcom %} gehostet werden, ist gut.

### Beispiel: Konfigurieren von WireGuard

In diesem Beispielworkflow wird WireGuard so konfiguriert, dass eine Verbindung mit einem privaten Dienst hergestellt wird.

In diesem Beispiel weist die im privaten Netzwerk ausgeführte WireGuard-Instanz diese Konfiguration auf:
- Überlagerungsnetzwerk-IP-Adresse `192.168.1.1`
- Öffentliche IP-Adresse und Port `1.2.3.4:56789`
- Öffentlicher Schlüssel `examplepubkey1234...`

Die WireGuard-Instanz im {% data variables.product.prodname_actions %}-Runner weist diese Konfiguration auf:
- Überlagerungsnetzwerk-IP-Adresse `192.168.1.2`
- Der private Schlüssel wird als {% data variables.product.prodname_actions %}-Geheimnis unter `WIREGUARD_PRIVATE_KEY` gespeichert.

```yaml
name: WireGuard example

on:
  workflow_dispatch:

jobs:
  wireguard_example:
    runs-on: ubuntu-latest
    steps:
      - run: sudo apt install wireguard

      - run: echo "${{ secrets.WIREGUARD_PRIVATE_KEY }}" > privatekey

      - run: sudo ip link add dev wg0 type wireguard

      - run: sudo ip address add dev wg0 192.168.1.2 peer 192.168.1.1

      - run: sudo wg set wg0 listen-port 48123 private-key privatekey peer examplepubkey1234... allowed-ips 0.0.0.0/0 endpoint 1.2.3.4:56789

      - run: sudo ip link set up dev wg0

      - run: curl -vvv http://192.168.1.1
```

Weitere Informationen zum sicheren Speichern von Schlüsseln findest du im [WireGuard-Schnellstart](https://www.wireguard.com/quickstart/) sowie unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

### Verwenden von Tailscale zum Erstellen einer Netzwerküberlagerung

Tailscale ist ein kommerzielles Produkt, das auf WireGuard basiert. Diese Option ähnelt WireGuard sehr, mit der Ausnahme, dass Tailscale eher ein vollständiges Produkt als eine Open Source-Komponente ist.

Die Nachteile sind ähnlich wie bei WireGuard: Es handelt sich um eine 1:1-Verbindung, sodass möglicherweise ein zusätzlicher Arbeitsaufwand für Hochverfügbarkeit oder hohen Durchsatz entsteht. Du musst weiterhin Schlüssel generieren und sicher speichern. Das Protokoll ist weiterhin UDP, sodass dein Netzwerk UDP-Datenverkehr unterstützen muss.

Es gibt jedoch einige Vorteile gegenüber WireGuard: NAT-Traversal ist integriert, sodass du keinen Port im öffentlichen Internet verfügbar machen musst. Diese Option führt bei weitem am schnellsten zur Einsatzbereitschaft, da Tailscale einen {% data variables.product.prodname_actions %}-Workflow mit einem einzigen Schritt zum Herstellen der Verbindung mit dem Überlagerungsnetzwerk bietet.

Weitere Informationen zum sicheren Speichern von Schlüsseln findest du unter [Tailscale GitHub Action](https://github.com/tailscale/github-action) sowie [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).
