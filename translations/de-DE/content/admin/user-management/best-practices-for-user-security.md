---
title: Best Practices für die Benutzersicherheit
intro: 'Abgesehen von den Sicherheitsmaßnahmen (SSL, Subdomain-Isolation, Firewallkonfiguration) auf Instanzebene, die von einem Websiteadministrator implementiert werden können, können Ihre Benutzer weitere Maßnahmen ergreifen, um die {% data variables.product.product_location_enterprise %}-Instanz zu schützen.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
versions:
  enterprise-server: '*'
---

### Zwei-Faktor-Authentifizierung aktivieren

Mittels Zwei-Faktor-Authentifizierung (2FA) können Sie sich bei Websites und Diensten anmelden, die zusätzlich zur Eingabe eines Passworts zur Authentifizierung einen zweiten Faktor vorschreiben. Im Falle von {% data variables.product.prodname_ghe_server %} ist dieser zweite Faktor ein einmaliger Authentifizierungscode, der von einer Anwendung auf dem Smartphone eines Benutzers generiert wird. Sie sollten unbedingt festlegen, dass Benutzer die Zwei-Faktor-Authentifizierung für ihre Konten aktivieren müssen. Mit der Zwei-Faktor-Authentifizierung müssten das Passwort des Benutzers und dessen Smartphone kompromittiert werden, damit das Konto an sich kompromittiert werden kann.

Weitere Informationen zum Konfigurieren der Zwei-Faktor-Authentifizierung finden Sie unter „[Informationen zur Zwei-Faktor-Authentifizierung](/enterprise/{{ currentVersion }}/user/articles/about-two-factor-authentication)“.

### Passwort-Manager vorschreiben

Sie sollten Ihre Benutzer unbedingt auffordern, einen Passwort-Manager (z. B. [LastPass](https://lastpass.com/), [1Password](https://1password.com/) oder [Keeper](https://keepersecurity.com/)) auf dem Computer zu verwenden, auf dem sie sich mit {% data variables.product.product_location_enterprise %} verbinden. Dadurch wird gewährleistet, dass Passwörter sicherer sind und es unwahrscheinlicher ist, dass sie kompromittiert oder gestohlen werden.

### Zugriff auf Teams und Repositorys einschränken

Um im Falle einer Sicherheitsverletzung die potenzielle Angriffsfläche zu begrenzen, sollten Sie Benutzern unbedingt nur den Zugriff auf Teams und Repositorys gewähren, den sie zum Erledigen ihrer Arbeit unbedingt benötigen. Da Mitglieder mit der Inhaberrolle auf alle Teams und Repositorys in der Organisation zugreifen können, wird dringend empfohlen, dieses Team möglichst klein zu halten.

Weitere Informationen zum Konfigurieren von Teams und Teamberechtigungen finden Sie unter „[Berechtigungsebenen für die Repositorys einer Organisation](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)“.
