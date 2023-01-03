---
title: Informationen zu SSH-Zertifizierungsstellen
intro: 'Mit einer SSH-Zertifizierungsstelle kann deine Organisation oder dein Unternehmenskonto SSH-Zertifikate bereitstellen, mit denen Mitglieder unter Verwendung von Git auf deine Ressourcen zugreifen können.'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SSH certificate authorities
ms.openlocfilehash: c4940399efa3c1e88c68224c421de7f43f7ea89b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061980'
---
## Informationen zu SSH-Zertifizierungsstellen

Ein SSH-Zertifikat ist ein Mechanismus, mit dem ein SSH-Schlüssel einen anderen SSH-Schlüssel signieren kann. Wenn du eine SSH-Zertifizierungsstelle (CA) verwendest, um den Mitgliedern deiner Organisation signierte SSH-Zertifikate bereitzustellen, kannst du die Zertifizierungsstelle zu deinem Enterprise-Konto oder deiner Organisation hinzufügen, damit die Organisationsmitglieder mit ihren Zertifikaten auf die Ressourcen der Organisation zugreifen können. 

{% data reusables.organizations.ssh-ca-ghec-only %}

Wenn du eine SSH-Zertifizierungsstelle zu deiner Organisation oder deinem Enterprise-Konto hinzugefügt hast, kannst du mit der Zertifizierungsstelle Client-SSH-Zertifikate für Organisationsmitglieder signieren. Organisationsmitglieder können mit den signierten Zertifikaten mit Git auf die Repositorys deiner Organisation (und nur auf diese) zugreifen. Optional kannst du festlegen, dass Mitglieder SSH-Zertifikate verwenden müssen, um auf Organisationsressourcen zuzugreifen. Weitere Informationen findest du unter [Verwalten der SSH-Zertifizierungsstellen deiner Organisation](/articles/managing-your-organizations-ssh-certificate-authorities) und [Erzwingen von Richtlinien für die Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).

Du kannst beispielsweise ein internes System einrichten, das jeden Morgen ein neues Zertifikat für deine Entwickler herausgibt. Die Entwickler*innen können mit ihrem aktuellen Zertifikat in den Repositorys deiner Organisation auf {% data variables.product.product_name %} arbeiten. Am Ende des Tages läuft das Zertifikat automatisch ab. So werden deine Repositorys geschützt, falls das Zertifikat zu einem späteren Zeitpunkt kompromittiert wird.

{% ifversion ghec %} Organisationsmitglieder können ihre signierten Zertifikate selbst dann zur Authentifizierung nutzen, wenn du „Einmaliges Anmelden mit SAML“ erzwingst. Sofern du die Verwendung von SSH-Zertifikaten nicht vorschreibst, können Organisationsmitglieder auch weiterhin andere Authentifizierungsmethoden verwenden, um mit Git auf die Ressourcen deiner Organisation zuzugreifen, z. B. ihren Benutzernamen und ihr Passwort, persönliche Zugriffstoken und ihre eigenen SSH-Schlüssel.
{% endif %}

Mitglieder können ihre Zertifikate nicht verwenden, um auf Forks deiner Repositorys zuzugreifen, die sich im Besitz ihrer persönlichen Konten befinden. 

## Informationen zu SSH-URLs mit SSH-Zertifikaten

Falls deine Organisation SSH-Zertifikate verlangt, sollten Organisationsmitglieder eine spezielle URL mit der Organisations-ID verwenden, wenn sie Git-Vorgänge über SSH ausführen. So können Authentifizierungsfehler vermieden werden. Mit dieser speziellen URL können der Client und der Server einfacher aushandeln, welche Schlüssel auf dem Computer des Mitglieds für die Authentifizierung verwendet werden sollen. Wenn ein Mitglied die normale URL verwendet, die mit `git@github.com` anfängt, bietet der SSH-Client möglicherweise den falschen Schlüssel an, wodurch der Vorgang fehlschlägt.

Jeder mit Lesezugriff auf das Repository kann diese URL finden, indem er das Dropdownmenü **Code** auf der Hauptseite des Repositorys auswählt und dann auf **SSH verwenden** klickt.

Wenn deine Organisation keine SSH-Zertifikate verlangt, können Mitglieder weiterhin eigene SSH-Schlüssel oder andere Authentifizierungsmethoden verwenden. In diesem Fall funktioniert entweder die spezielle URL oder die normale URL, die mit `git@github.com` beginnt.

## Ausgabe von Zertifikaten

Beim Herausgeben der einzelnen Zertifikate musst du eine Erweiterung hinzufügen, die festlegt, für welchen {% data variables.product.product_name %}-Benutzer das Zertifikat gedacht ist. Du kannst z. B. den OpenSSH-Befehl `ssh-keygen` verwenden und dabei _KEY-IDENTITY_ durch deine Schlüsselidentität und _USERNAME_ durch einen {% data variables.product.product_name %}-Benutzernamen ersetzen. Das von dir generierte Zertifikat ist berechtigt, im Auftrag dieses Benutzers bzw. dieser Benutzerin für alle Ressourcen deiner Organisation zu handeln. Stelle sicher, dass du die Identität des Benutzers überprüfst, bevor du das Zertifikat ausstellst.

{% note %}

**Hinweis:** Du musst ein Update auf OpenSSH 7.6 oder höher durchführen, um diese Befehle verwenden zu können.

{% endnote %}

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

{% warning %}

**Warnung**: Nachdem ein Zertifikat signiert und ausgestellt wurde, kann das Zertifikat nicht gesperrt werden. Stelle sicher, dass du das Flag -`V` verwendest, um eine Lebensdauer für das Zertifikat zu konfigurieren. Andernfalls kann das Zertifikat unbegrenzt verwendet werden.

{% endwarning %}

Um ein Zertifikat für eine Person auszustellen, die SSH verwendet, um auf mehrere {% data variables.product.company_short %}-Produkte zuzugreifen, kannst du zwei Anmeldeerweiterungen einschließen, um den Benutzernamen für jedes Produkt anzugeben. Zum Beispiel würde der folgende Befehl ein Zertifikat für _USERNAME-1_ für das Benutzerkonto für {% data variables.product.prodname_ghe_cloud %} und _USERNAME-2_ für das Benutzerkonto auf {% data variables.product.prodname_ghe_managed %} oder {% data variables.product.prodname_ghe_server %} auf _HOSTNAME_ ausstellen.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

Mit der Erweiterung `source-address` schränkst du die IP-Adressen ein, von denen aus ein Organisationsmitglied auf die Ressourcen deiner Organisation zugreifen kann. Als Erweiterung ist eine bestimmte IP-Adresse oder ein IP-Adressbereich mit CIDR-Notation zulässig. Sollen mehrere Adressen oder Bereiche angegeben werden, trenne sie durch Komma voneinander ab. Weitere Informationen findest du unter [Klassenloses Routing zwischen Domänen](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) auf Wikipedia.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```
