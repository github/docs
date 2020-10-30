---
title: Informationen zu SSH-Zertifizierungsstellen
intro: 'Mit einer SSH-Zertifizierungsstelle kann Deine Organisation oder Dein Enterprise-Konto SSH-Zertifikate bereitstellen, mit denen Mitglieder mit Git auf Deine Ressourcen zugreifen können.'
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/about-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.19'
---

Ein SSH-Zertifikat ist ein Mechanismus, mit dem ein SSH-Schlüssel einen anderen SSH-Schlüssel signieren kann. Wenn Du eine SSH-Zertifizierungsstelle (CA) verwendest, um den Mitgliedern Deiner Organisation signierte SSH-Zertifikate bereitzustellen, kannst Du die Zertifizierungsstelle zu Deinem Enterprise-Konto oder Deiner Organisation hinzufügen, damit die Organisationsmitglieder mit ihren Zertifikaten auf die Ressourcen der Organisation zugreifen können. Weitere Informationen findest Du unter „[SSH-Zertifizierungsstellen Deiner Organisation verwalten](/articles/managing-your-organizations-ssh-certificate-authorities).“

Wenn Du eine SSH-Zertifizierungsstelle zu Deiner Organisation oder Deinem Enterprise-Konto hinzugefügt hast, kannst Du mit der Zertifizierungsstelle Client-SSH-Zertifikate für Organisationsmitglieder signieren. Organisationsmitglieder können mit den signierten Zertifikaten mit Git auf die Repositorys Deiner Organisation (und nur auf diese) zugreifen. Du kannst vorschreiben, dass die Mitglieder SSH-Zertifikate für den Zugriff auf die Organisationsressourcen verwenden müssen.{% if currentVersion == "free-pro-team@latest" %} Weitere Informationen findest Du unter „[Sicherheitseinstellungen für Organisationen in Deinem Enterprise-Konto erzwingen](/articles/enforcing-security-settings-in-your-enterprise-account#managing-your-enterprise-accounts-ssh-certificate-authorities)“.{% endif %}

Du kannst beispielsweise ein internes System einrichten, das jeden Morgen ein neues Zertifikat für Deine Entwickler herausgibt. Die Entwickler können dann mit ihren täglichen Zertifikaten in den Repositorys Deiner Organisation auf {% data variables.product.product_name %} arbeiten. Am Ende des Tages läuft das Zertifikat automatisch ab. So werden Deine Repositorys geschützt, falls das Zertifikat zu einem späteren Zeitpunkt kompromittiert wird.

Beim Herausgeben der einzelnen Zertifikate musst Du eine Erweiterung hinzufügen, die festlegt, für welchen {% data variables.product.product_name %}-Benutzer das Zertifikat gedacht ist. Du kannst beispielsweise den OpenSSH-Befehl `ssh-keygen` verwenden und dabei _KEY-IDENTITY_ durch Deine Schlüssel-Identität und _USERNAME_ durch einen {% data variables.product.product_name %}-Benutzernamen ersetzen:

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME</em> ./user-key.pub
```

Soll ein Zertifikat für eine Person mit unterschiedlichen Benutzernamen für {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} ausgegeben werden, kannst Du zwei Anmeldeerweiterungen angeben.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>CLOUD-USERNAME</em> extension:login@<em>HOSTNAME</em>=<em>SERVER-USERNAME</em> ./user-key.pub
```

Mit der Erweiterung `source-address` schränkst Du die IP-Adressen ein, von denen aus ein Organisationsmitglied auf die Ressourcen Deiner Organisation zugreifen kann. Als Erweiterung ist eine bestimmte IP-Adresse oder ein IP-Adressbereich mit CIDR-Notation zulässig. Sollen mehrere Adressen oder Bereiche angegeben werden, trenne sie durch Komma voneinander ab. Weitere Informationen findest Du unter „[Classless Inter-Domain Routing](https://de.wikipedia.org/wiki/Classless_Inter-Domain_Routing)“ auf Wikipedia.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```

Organisationsmitglieder können ihre signierten Zertifikate selbst dann zur Authentifizierung nutzen, wenn Du SAML Single Sign-On erzwingst. Sofern Du die Verwendung von SSH-Zertifikaten nicht vorschreibst, können Organisationsmitglieder auch weiterhin andere Authentifizierungsmethoden verwenden, um mit Git auf die Ressourcen Deiner Organisation zuzugreifen, z. B. ihren Benutzernamen und ihr Passwort, persönliche Zugriffstoken und ihre eigenen SSH-Schlüssel.

Als Vorbeugung gegen Authentifizierungsfehler sollten die Organisationsmitglieder spezielle URLs einsetzen, welche die Organisations-ID enthält, wenn sie Repositorys mit signierten Zertifikaten klonen wollen. Alle Benutzer mit Lesezugriff auf das Repository finden diese URL auf der Repository-Seite. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.
