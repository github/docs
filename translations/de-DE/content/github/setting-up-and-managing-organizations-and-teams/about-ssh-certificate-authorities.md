---
title: Informationen zu SSH-Zertifizierungsstellen
intro: 'Mit einer SSH-Zertifizierungsstelle kann Deine Organisation oder Dein Enterprise-Konto SSH-Zertifikate bereitstellen, mit denen Mitglieder mit Git auf Deine Ressourcen zugreifen können.'
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/about-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

Ein SSH-Zertifikat ist ein Mechanismus, mit dem ein SSH-Schlüssel einen anderen SSH-Schlüssel signieren kann. Wenn Du eine SSH-Zertifizierungsstelle (CA) verwendest, um den Mitgliedern Deiner Organisation signierte SSH-Zertifikate bereitzustellen, kannst Du die Zertifizierungsstelle zu Deinem Enterprise-Konto oder Deiner Organisation hinzufügen, damit die Organisationsmitglieder mit ihren Zertifikaten auf die Ressourcen der Organisation zugreifen können. Weitere Informationen findest Du unter „[SSH-Zertifizierungsstellen Deiner Organisation verwalten](/articles/managing-your-organizations-ssh-certificate-authorities).“

Wenn Du eine SSH-Zertifizierungsstelle zu Deiner Organisation oder Deinem Enterprise-Konto hinzugefügt hast, kannst Du mit der Zertifizierungsstelle Client-SSH-Zertifikate für Organisationsmitglieder signieren. Organisationsmitglieder können mit den signierten Zertifikaten mit Git auf die Repositorys Deiner Organisation (und nur auf diese) zugreifen. You can require that members use SSH certificates to access organization resources.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Enforcing security settings in your enterprise account](/articles/enforcing-security-settings-in-your-enterprise-account#managing-your-enterprise-accounts-ssh-certificate-authorities)."{% endif %}

Du kannst beispielsweise ein internes System einrichten, das jeden Morgen ein neues Zertifikat für Deine Entwickler herausgibt. Die Entwickler können mit ihrem aktuellen Zertifikat in den Repositorys Ihrer Organisation auf {% data variables.product.product_name %} arbeiten. Am Ende des Tages läuft das Zertifikat automatisch ab. So werden Deine Repositorys geschützt, falls das Zertifikat zu einem späteren Zeitpunkt kompromittiert wird.

Beim Herausgeben der einzelnen Zertifikate musst Du eine Erweiterung hinzufügen, die festlegt, für welchen {% data variables.product.product_name %}-Benutzer das Zertifikat gedacht ist. Sie können z. B. den OpenSSH-Befehl `ssh-keygen` verwenden und dabei _KEY-IDENTITY_ durch Ihre Schlüssel-Identität und _USERNAME_ einen {% data variables.product.product_name %}-Benutzernamen ersetzen.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

To issue a certificate for someone who uses SSH to access multiple {% data variables.product.company_short %} products, you can include two login extensions to specify the username for each product. For example, the following command would issue a certificate for _USERNAME-1_ for the user's account for {% data variables.product.prodname_ghe_cloud %}, and _USERNAME-2_ for the user's account on {% data variables.product.prodname_ghe_managed %} or {% data variables.product.prodname_ghe_server %} at _HOSTNAME_.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

Mit der Erweiterung `source-address` schränkst Du die IP-Adressen ein, von denen aus ein Organisationsmitglied auf die Ressourcen Deiner Organisation zugreifen kann. Als Erweiterung ist eine bestimmte IP-Adresse oder ein IP-Adressbereich mit CIDR-Notation zulässig. Sollen mehrere Adressen oder Bereiche angegeben werden, trenne sie durch Komma voneinander ab. Weitere Informationen findest Du unter „[Classless Inter-Domain Routing](https://de.wikipedia.org/wiki/Classless_Inter-Domain_Routing)“ auf Wikipedia.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```

{% if currentVersion == "free-pro-team@latest" %}

Organisationsmitglieder können ihre signierten Zertifikate selbst dann zur Authentifizierung nutzen, wenn Sie SAML Single Sign-On erzwingen. Sofern Sie die Verwendung von SSH-Zertifikaten nicht vorschreiben, können Organisationsmitglieder auch weiterhin andere Authentifizierungsmethoden verwenden, um mit Git auf die Ressourcen Ihrer Organisation zuzugreifen, z. B. ihren Benutzernamen und ihr Passwort, persönliche Zugriffstoken und ihre eigenen SSH-Schlüssel.

{% endif %}

Als Vorbeugung gegen Authentifizierungsfehler sollten die Organisationsmitglieder spezielle URLs einsetzen, welche die Organisations-ID enthält, wenn sie Repositorys mit signierten Zertifikaten klonen wollen. Alle Benutzer mit Lesezugriff auf das Repository finden diese URL auf der Repository-Seite. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.
