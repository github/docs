---
title: Benutzerbedingte Änderung der Sichtbarkeit eines Repositorys verhindern
intro: 'Sie können Mitglieder daran hindern, die Sichtbarkeit der organisationseigenen Repositorys auf Ihrer {% data variables.product.prodname_ghe_server %}-Appliance zu ändern.'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
versions:
  enterprise-server: '*'
---

Wenn Sie Mitglieder daran hindern, die Sichtbarkeit des Repositorys zu ändern, können nur Websiteadministratoren öffentliche Repositorys als privat oder private Repositorys als öffentlich festlegen.

Falls ein Websiteadministrator die Möglichkeit der Repository-Erstellung auf Organisationsinhaber beschränkt hat, können Mitglieder die Sichtbarkeit eines Repositorys nicht ändern. Hat ein Websiteadministrator dagegen die Möglichkeit von Mitgliedern auf die Erstellung privater Repositorys beschränkt, können Mitglieder die Sichtbarkeit eines Repositorys von öffentlich auf privat festlegen. Weitere Informationen finden Sie unter „[Repository-Erstellung auf Ihrer Instanz einschränken](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)“.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfen Sie unter „Repository visibility change“ (Änderung der Repository-Sichtbarkeit) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}
