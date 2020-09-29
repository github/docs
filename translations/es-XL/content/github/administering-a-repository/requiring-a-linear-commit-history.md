---
title: Requerir un historial de confirmaciones linear
intro: Puedes requerir un historial de confirmaciones linear para bloquear todas las confirmaciones de fusión en una rama protegida.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Cualquiera con permisos de administrador para un repositorio puede requerir un historial de confirmaciones lineal.

### Acerca de imponer un historial de confirmaciones linear

Imponer un historial de confirmaciones linear previene que las confirmaciones de fusión se suban a la rama protegida. Esto significa que cualquier solicitud de extracción fusionada con la rama protegida deberá utilizar una fusión combinada o una fusión de rebase. Un historial de confirmaciones estrictamente linear puede ayudar a que los equipos retrocedan los cambios de manera más eficiente. Para obtener más información acerca de los métodos de fusión, consulta "[Acerca de la fusión de solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)."

{% data reusables.repositories.protected-branches-options %}

Antes de poder requerir un historial de confirmaciones linear, tu repositorio deberá permitir fusiones combinadas o fusiones de rebase. Para obtener más información, consulta "[Configurar las fusiones de solicitud de extracción](/github/administering-a-repository/configuring-pull-request-merges)."


### Implementar un historial de commit lineal

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Debajo de "Proteger ramas correspondientes", selecciona **Requerir historial linear**. ![Opción para requerir historial linear](/assets/images/help/repository/required-linear-history.png)
{% data reusables.repositories.include-administrators %}
7. Haz clic en **Create** (crear).
