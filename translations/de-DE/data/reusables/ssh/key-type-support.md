---
ms.openlocfilehash: efa96c86f8e6393265a4052e0ce6d650a21805b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107341"
---
{% ifversion fpt or ghec %} {% note %}

**Hinweis:** {% data variables.product.company_short %} verbessert die Sicherheit, indem ältere, unsichere Schlüsseltypen am 15. März 2022 gelöscht werden.

Ab diesem Datum werden DSA-Schlüssel (`ssh-dss`) nicht mehr unterstützt. Du kannst deinem persönlichen Konto keine neuen DSA-Schlüssel für {% data variables.location.product_location %} hinzufügen.

RSA-Schlüssel (`ssh-rsa`) mit einem `valid_after` vor dem 2. November 2021 können weiterhin einen Signaturalgorithmus verwenden. RSA-Schlüssel, die nach diesem Datum generiert wurden, müssen einen SHA-2-Signaturalgorithmus verwenden. Einige ältere Clients müssen möglicherweise aktualisiert werden, um SHA-2-Signaturen zu verwenden.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Hinweis**: Mit {% data variables.product.product_name %} 3.6 und höher schlagen SSH-Verbindungen, die die **beiden** folgenden Bedingungen erfüllen, ab dem Stichtag, dem 1. August 2022, standardmäßig fehl.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 und höher unterstützt auch keine SSH-Verbindungen, die DSA, HMAC-SHA-1 oder CBC-Verschlüsselungen verwenden. RSA-SSH-Schlüssel, die vor dem Stichtag hochgeladen wurden, können weiterhin mit der SHA-1-Hashfunktion authentifiziert werden, solange der Schlüssel gültig bleibt. Weitere Informationen zum Suchen der derzeit verwendeten Version von {% data variables.product.product_name %} findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server).

Dein Websiteadministrator kann den Stichtag für Verbindungen mit RSA-SHA-1 anpassen und alle Verbindungen, die RSA-SHA-1 verwenden, blockieren. Falls du weitere Informationen benötigst, wende dich an deinen Websiteadministrator oder lies [Konfigurieren von SSH-Verbindungen mit deiner Instanz](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance).

{% endnote %}

{% endif %}
