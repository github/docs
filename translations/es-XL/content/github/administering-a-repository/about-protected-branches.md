---
title: Acerca de las ramas protegidas
intro: 'Las ramas protegidas garantizan que los colaboradores en tu repositorio no puedan realizar cambios irrevocables a las ramas. Activar las ramas protegidas también te permite activar otros requisitos y verificaciones opcionales, como las verificaciones de estado requeridas y as revisiones requeridas.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.pull_requests.about-protected-branches %} Puedes decidir imponer restricciones de cómo se fusionan las solicitudes de extracción en tu repositorio.

Los propietarios del repositorio y las personas con permisos de administrador para un repositorio pueden implementar ciertos flujos de trabajo o requisitos, antes de que un colaborador pueda fusionar una rama en tu repositorio al crear las reglas de rama protegida.

{% data reusables.repositories.branch-rules-example %} Para obtener más información, consulta "[Configurar ramas protegidas](/articles/configuring-protected-branches/)".

### Priorización de las reglas de la rama protegida

Si un repositorio tiene varias reglas de rama protegida que afectan las mismas ramas, las reglas que incluyen el nombre de una rama específica tienen la mayor prioridad. Si hay más de una regla de rama protegida que hace referencia al mismo nombre de rama específico, entonces la regla de rama creada primera tendrá la prioridad más alta.

Las reglas de rama protegida que mencionen un caracter especial, como `*`, `?` o `]`, se aplican en el orden que fueron creadas, así que las reglas más antiguas con estos caracteres tienen la prioridad más alta.

### Parámetros de protección de rama

Cuando creas una regla de protección de rama en un repositorio, los colaboradores no pueden forzar la subidas de información en ramas protegidas, ni borrar las ramas {% if currentVersion == "free-pro-team@latest" %} predeterminadamente {% endif %}. Puedes habilitar otras configuraciones de protección de rama. Para obtener más información, consulta "[Definir la capacidad de fusión de las solicitudes de extracción](/github/administering-a-repository/defining-the-mergeability-of-pull-requests)."

### Leer más

- "[Acerca de las verificaciones de estado requeridas](/articles/about-required-status-checks)"
- "[Acerca de las revisiones requeridas para las solicitudes de extracción](/articles/about-required-reviews-for-pull-requests)"
- "[Acerca de la firma de confirmación requerida](/articles/about-required-commit-signing)"
