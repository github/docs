---
title: Borrar un codespace
intro: Puedes borrar un codespace que ya no necesites.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Delete a codespace
ms.openlocfilehash: b55d350e439953defac182eae23423b839ff7cf7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '145126103'
---
{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**Nota:** Solo el usuario que ha creado un codespace puede eliminarlo. Actualmente no hay forma de que los propietarios de las organizaciones borren los codespaces que se crearon dentro de su organización.

{% endnote %}

## <a name="deleting-a-codespace"></a>Borrar un codespace

{% webui %}

1. Vaya a la página "Sus codespaces" en [github.com/codespaces](https://github.com/codespaces).

2. A la derecha del codespace que quiera eliminar, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y después en **{% octicon "trash" aria-label="The trash icon" %} Eliminar**

   ![Botón Eliminar](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Para eliminar un codespace, use el subcomando `gh codespace delete` y, después, elija un codespace en la lista que se muestra.

```shell
gh codespace delete
```

Si tienes cambios sin guardar, se te pedirá confirmar el borrado. Puede usar la marca `--force` para forzar la eliminación y evitar este aviso.

Para más información sobre este comando, vea [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## <a name="bulk-deleting-codespaces"></a>Eliminación masiva de codespaces

{% webui %}

Puedes usar {% data variables.product.prodname_cli %} para eliminar varios o todos los codespaces con un solo comando. Para obtener más información, haz clic en la pestaña **{% data variables.product.prodname_cli %}** que se encuentra cerca de la parte superior de esta página.

{% endwebui %}

{% vscode %}

Puedes usar {% data variables.product.prodname_cli %} para eliminar varios codespaces con un solo comando, o todos ellos. Para obtener más información, haz clic en la pestaña **{% data variables.product.prodname_cli %}** que se encuentra cerca de la parte superior de esta página.

{% endvscode %}


{% cli %}

Puedes eliminar varios codespaces, o todos ellos, con un solo comando mediante `gh codespace delete` seguido de una de estas marcas:

`--all`: elimina todos los codespaces.

`--repo REPOSITORY`: elimina todos los codespaces de este repositorio. O bien, úsalo junto con la marca `--days` para filtrar por antigüedad del codespace.

`--days NUMBER`: elimina todos los codespaces anteriores al número de días especificado. Se puede usar junto con la marca `--repo`.

De manera predeterminada, se te pedirá que confirmes la eliminación de los codespaces que contengan cambios no guardados. Puedes usar la marca `--force` para omitir esta confirmación. 

### <a name="example"></a>Ejemplo

Elimina todos los codespaces del repositorio `octo-org/octo-repo` que has creado hace más de 7 días.

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## <a name="further-reading"></a>Información adicional
- [Ciclo de vida de Codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)
