---
title: Privaten Modus aktivieren
intro: 'Im privaten Modus erfordert {% data variables.product.prodname_ghe_server %}, dass sich jeder Benutzer anmeldet, um auf die Installation zuzugreifen.'
redirect_from:
  - /enterprise/admin/articles/private-mode/
  - /enterprise/admin/guides/installation/security/
  - /enterprise/admin/guides/installation/securing-your-instance/
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
---

Sie müssen den privaten Modus aktivieren, wenn {% data variables.product.product_location %} über das Internet öffentlich zugänglich ist. Im privaten Modus ist es Benutzern nicht möglich, Repositorys anonym über `git://` zu klonen. Wenn die integrierte Authentifizierung aktiviert ist, muss ein Administrator neue Benutzer einladen, um ein Konto auf der Instanz zu erstellen. Weitere Informationen finden Sie unter „[Integrierte Authentifizierung verwenden](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-built-in-authentication)“.

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

Wenn der private Modus aktiviert ist, können Sie festlegen, dass nicht authentifizierte Git-Vorgänge (und jedermann mit Netzwerkzugriff auf {% data variables.product.product_location %}) mit aktiviertem anonymem Git-Lesezugriff den Code eines öffentlichen Repositorys auf Ihrer Instanz lesen können. Weitere Informationen finden Sie unter „[Administratoren das Aktivieren des anonymen Git-Lesezugriffs auf öffentliche Repositorys erlauben](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)“.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. Wählen Sie **Private mode** (Privater Modus) aus. ![Kontrollkästchen zum Aktivieren des privaten Modus](/assets/images/enterprise/management-console/private-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
