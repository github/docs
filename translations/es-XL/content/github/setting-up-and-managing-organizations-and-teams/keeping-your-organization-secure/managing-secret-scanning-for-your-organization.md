---
title: Administrar el escaneo de secretos para tu organización
intro: 'Puedes controlar qué repositorios en tu organización escaneará {% data variables.product.product_name %} en busca de secretos.'
permissions: 'Los propietarios de la organización pueden administrar el {% data variables.product.prodname_secret_scanning %} para los repositorios que le pertenecen a ésta.'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
---
{% data reusables.secret-scanning.beta %}

### Acerca de la administración del {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} te puede ayudar a mitigar el impacto de los secretos que se filtran en los repositorios de tu organización. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

Puedes administrar cómo {% data variables.product.prodname_dotcom %} escanea los secretos en los repositorios existentes dentro de tu organización. También puedes habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %} predeterminado para cualquier repositorio nuevo que creen los miembros dentro de tu organización.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% note %}

**Nota**: El {% data variables.product.prodname_secret_scanning_caps %} se habilita predeterminadamente para los repositorios públicos en tu organización y no puede inhabilitarse. Para obtener más información, consulta la sección "[Acerca del escaneo de secretos para los repositorios públicos](/github/administering-a-repository/about-secret-scanning#about-secret-scanning-for-public-repositories)".

{% endnote %}

### Habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %} para los repositorios privados existentes

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. A la derecha de "Escaneo de secretos", da clic en **Inhabilitar todos** o **Habilitar todos**. ![Botón de "Habilitar todos" o "Inhabilitar todos" para el escaneo de secretos](/assets/images/help/organizations/security-and-analysis-disable-or-enable-secret-scanning.png)
6. Opcionalmente, habilita el {% data variables.product.prodname_secret_scanning %} predeterminado para los repositorios en tu organización. ![Opción de "Habilitar predeterminadamente" para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default.png)
7. Da clic en **Inhabilitar el escaneo de secretos** o en **Habilitar el escaneo de secretos** para inhabilitar o habilitar esta característica en todos los repositorios de tu organización. ![Botón para inhabilitar o habilitar el {% data variables.product.prodname_secret_scanning %} ](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning.png)

### Habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %} para los repositorios privados

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. A la derecha de "Escaneo de secretos", habilita o inhabilita la característica predeterminada para los repositorios privados nuevos en tu organización. ![Casilla para habilitar o inhabilitar una característica para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
