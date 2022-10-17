---
title: Adición de un distintivo "Abrir en GitHub Codespaces"
shortTitle: Add a Codespaces badge
intro: Puedes agregar un distintivo a un archivo Markdown en el repositorio en el que la gente puede hacer clic para crear un codespace.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 4a45c11adc5d09888e6bb65b49b9f997f5233fea
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147783138'
---
## Información general

Agregar un distintivo "Abrir en {% data variables.product.prodname_github_codespaces %}" a un archivo de Markdown proporciona a la gente una manera fácil de crear un codespace para el repositorio.

![Captura de pantalla de un distintivo de Codespaces en una página LÉAME](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

Al crear un distintivo, puedes elegir opciones de configuración específicas para el codespace que creará el distintivo.

Cuando la gente haga clic en el distintivo, se les dirigirá a la página de opciones avanzadas para la creación del codespace, con las opciones que elegiste preseleccionadas. Para obtener más información sobre la página de opciones avanzadas, consulta "[Creación de un codespace](https://docs-internal-30445-bfc9ce.preview.ghdocs.com/en/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

En la página opciones avanzadas, los usuarios pueden cambiar la configuración preseleccionada si es necesario y, a continuación, hacer clic en **Crear codespace**.

{% note %}

**Nota**: Ten en cuenta que las personas que aún no tienen acceso a {% data variables.product.prodname_github_codespaces %} verán un mensaje 404 si hacen clic en este distintivo.

{% endnote %}

## Creación de un distintivo "Abrir en {% data variables.product.prodname_github_codespaces %}"

{% data reusables.repositories.navigate-to-repo %}
1. Debajo del nombre de repositorio, utiliza el menú desplegable de "Rama" y selecciona aquella en la que quieras crear el distintivo.

   ![Captura de pantalla del menú desplegable Rama](/assets/images/help/codespaces/branch-drop-down.png)

1. Haz clic en el botón **{% octicon "code" aria-label="The code icon" %} Código** y , a continuación, haz clic en la pestaña **Codespaces**.

   ![Captura de pantalla del botón Nuevo codespace](/assets/images/help/codespaces/new-codespace-button.png)

1. Haz clic en la flecha abajo situada al lado del botón **Crear codespace en RAMA**, haz clic en **Configurar y crear codespace** y, a continuación, haz clic en el botón **Configurar y crear codespace**.

   ![Captura de pantalla de la opción "Configurar y crear codespace"](/assets/images/help/codespaces/configure-and-create-option.png)

1. En la página opciones avanzadas para la creación del codespace, selecciona los valores que deseas que se preseleccionen en cada campo.

   ![Captura de pantalla de la página opciones avanzadas](/assets/images/help/codespaces/advanced-options.png)

1. Copie la dirección URL de la barra de direcciones del explorador.
1. Agrega el siguiente markdown a, por ejemplo, el `README.md` archivo del repositorio:

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   Por ejemplo:

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   En el ejemplo anterior, `0000000` será el número de referencia del repositorio. Los demás detalles de la dirección URL vienen determinados por los valores seleccionados en los campos de la página de opciones avanzadas.
