---
title: Standardmäßige Sichtbarkeit neuer Repositorys auf Ihrer Appliance konfigurieren
intro: 'Sie können die standardmäßige Sichtbarkeit für alle neuen Repositorys als privat oder öffentlich festlegen, die über die Weboberfläche auf Ihrer {% data variables.product.prodname_ghe_server %}-Appliance erstellt wurden.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
versions:
  enterprise-server: '*'
---

Jedes Mal, wenn jemand ein neues Repository auf {% data variables.product.product_location_enterprise %} anlegt, muss diese Person eine Sichtbarkeit für das Repository auswählen. Wenn Du eine Standard-Sichtbarkeitseinstellung für die Instanz einstellst, wählst Du aus, welche Sichtbarkeit standardmäßig gilt. Weitere Informationen zu Repository-Sichtbarkeiten findest Du unter „[Informationen zur Sichtbarkeit eines Repositorys](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)“.

Wenn ein Site-Administrator Mitgliedern das Erstellen bestimmter Arten Repositorys verwehrt, werden Mitglieder nicht in der Lage sein, ein Repository dieser Art zu erstellen, selbst wenn die Einstellung zur Sichtbarkeit diesen Typ als Standard vorgibt. Weitere Informationen finden Sie unter „[Repository-Erstellung auf Ihrer Instanz einschränken](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)“.

{% tip %}

**Tipp:** Sie können festlegen, dass nur die Websiteadministratoren die Sichtbarkeit des Repositorys ändern können. Weitere Informationen finden Sie unter „[Benutzerbedingte Änderung der Sichtbarkeit eines Repositorys verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility)“.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Verwende unter „Default repository visibility“ (Standardmäßige Sichtbarkeit für Repositorys) das Dropdown-Menü und wähle eine Standardsichtbarkeit. ![Dropdownmenü zum Auswählen der standardmäßigen Repository-Sichtbarkeit für Ihre Instanz](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}
