---
title: Agregar ejecutores autoalojados
intro: 'Puedes agregar un ejecutor auto-hospedado a {{ site.data.variables.product.prodname_actions }}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Puedes agregar un ejecutor auto-hospedado a {{ site.data.variables.product.prodname_actions }}.

So eres un administrador de alguna organización o empresa, podría que quisieras agregar tus ejecutores auto-hospedados a nivel organizacional o empresarial. Este acercamiento hace que el ejecutor esté disponible para múltiples repositorios en tu organización o empresa y también te permite administrar tus ejecutores en un solo lugar.

Para obtener información sobre los sistemas operativos compatibles con los ejecutores auto-hospedados o sobre el uso de ejecutores auto-hospedados con un servidor proxy, consulta "[Acerca de los ejecutores auto-hospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

{% warning %}

**Advertencia:** {% data reusables.github-actions.self-hosted-runner-security %}

Para obtener más información, consulta la sección "[Acerca de los ejecutores auto-hospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)".

{% endwarning %}

### Agregar un ejecutor auto-hospedado a un repositorio

Puedes agregar ejecutores auto-hospedados a un solo repositorio. Para agregar un ejecutor auto-hospedado a un repositorio de usuario, debes ser el dueño del mismo. Para los repositorios organizacionales, debes ser el propietario de la organización o tener acceso de administrador a éste.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de "ejecutores auto-hospedados", da clic en **Agregar ejecutor**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

### Agregar un ejecutor auto-hospedado a una organización

Puedes agregar ejecutores auto-hospedados a nivel organizacional, en donde se podrán utilizar para procesar jobs para varios repositorios en una organización. Para agregar un ejecutor auto-hospedado a una organización, debes ser el dueño de la misma.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de "Ejecutores auto-hospedados", da clic en **Agregar nuevo** y luego en **Ejecutor nuevo**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

{% data reusables.github-actions.self-hosted-runner-public-repo-access %}

### Agregar un ejecutor auto-hospedado a una empresa

Puedes agregar ejecutores auto-hospedados a una empresa, en donde pueden asignarse a organizaciones múltiples. Los administradores de la organización podrán controlar entonces qué repositorios pueden utilizarlo.

{% if currentVersion == "free-pro-team@latest" %}
Para agregar un ejecutor auto-hospedado a una cuenta empresarial, debes ser un propietario de la empresa.
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21"%}
Para agregar un ejecutor auto-hospedado a nivel empresarial de
{% data variables.product.product_location %}, debes ser un administrador de sitio.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Da clic en la pestaña de **Ejecutores auto-hospedados**.
1. Da clic en **Agregar nuevo** y luego en **Ejecutor nuevo**. Los ejecutores nuevos se asignan al grupo predeterminado. Puedes modificar el grupo del ejecutor después de que lo hayas registrado. Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

{% data reusables.github-actions.self-hosted-runner-public-repo-access %}

#### Hacer que los ejecutores empresariales estén disponibles para los repositorios

Predeterminadamente, los ejecutores en un grupo de ejecutores auto hospedados "Predeterminado" de una empresa se encontrarán disponibles para todas las organizaciones de ésta, pero no así para todos los repositorios en cada una de las organizaciones.

Para que un grupo de ejecutores auto-hospedados a nivel empresarial se encuentre disponible para el repositorio de una organización, podría que necesites cambiar la configuración heredada de dicha organización para que el grupo de ejecutores pueda poner el ejecutor disponible para sus repositorios.

Para obtener más información acerca de cómo cambiar la configuración de acceso en un grupo de ejecutores, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados utilizando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
