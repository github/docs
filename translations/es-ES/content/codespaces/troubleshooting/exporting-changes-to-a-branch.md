---
title: Exportar los cambios a una rama
intro: Este artículo proporciona los pasos para exportar los cambios de tu codespace a una rama.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exportar cambios
---

## Exportar los cambios a una rama

Al utilizar {% data variables.product.prodname_codespaces %} podrías querer exportar tus cambios a una rama sin lanzarlos a tu codespace.

Esto puede ser útil cuando hayas llegado a un [límite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) o tengas un problema general para acceder a tu codespace.

Para exportar tus cambios:

1. Navega a la página de "Tus Codespaces" en [github.com/codespaces](https://github.com/codespaces) o, en el caso de un repositorio individual, haz clic en el menú **{% octicon "code" aria-label="The code icon" %} Código**.
2. Haz clic en los puntos suspensivos (**...**) a la derecha del codespace desde el cuál quieras exportar.
3. Selecciona **{% octicon "git-branch" aria-label="The git branch icon" %} Exportar cambios a la rama**.

  ![Exportar cambios a una rama](/assets/images/help/codespaces/export-changes-to-a-branch.png)

4. Desde el anuncio emergente, selecciona **Crear rama**.
