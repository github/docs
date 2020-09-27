---
title: GitHub Enterprise Server-Quellinstanz vorbereiten
intro: 'Bevor Sie Daten von {{ site.data.variables.product.prodname_ghe_server }} migrieren, sollten Sie sicherstellen, dass Sie über den entsprechenden Authentifizierungs- und Verwaltungszugriff auf die Instanz verfügen.'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
versions:
  enterprise-server: '*'
---

1. Verifizieren Sie, dass Sie auf der {{ site.data.variables.product.prodname_ghe_server }}-Quelle ein Websiteadministrator sind. Dazu empfiehlt es sich zu verifizieren, dass Sie eine [SSH-Verbindung zur Instanz herstellen können](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

2. {{ site.data.reusables.enterprise_migrations.token-generation }} auf der {{ site.data.variables.product.prodname_ghe_server }}-Quellinstanz.

{{ site.data.reusables.enterprise_migrations.make-a-list }}
