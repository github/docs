---
title: Botón para mostrar un patrocinador en tu repositorio
intro: Puedes agregar un botón de patrocinador en tu repositorio para aumentar la visibilidad de las opciones de financiación para tu proyecto de código abierto.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
ms.openlocfilehash: 8fce9d4fe2b4aa697fa5d5a0ef0dfafb1caa4844
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147558346'
---
## Acerca de los archivos FUNDING

Puede configurar el botón de patrocinador si edita un archivo _FUNDING.yml_ en la carpeta `.github` del repositorio, en la rama predeterminada. Puedes configurar el botón para que incluya programadores patrocinados en {% data variables.product.prodname_sponsors %}, plataformas de financiamiento externo o URL de financiamiento personalizadas. Para más información sobre {% data variables.product.prodname_sponsors %}, vea "[Acerca de los patrocinadores de GitHub](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)".

Puedes agregar un nombre de usuario, un nombre de paquete o un nombre de proyecto por plataforma de financiamiento externo y hasta cuatro URL personalizadas. Puede añadir una organización y hasta cuatro desarrolladores patrocinadores en {% data variables.product.prodname_sponsors %}. Agrega cada plataforma en una línea nueva, usando la siguiente sintaxis:

Plataforma | Sintaxis
-------- | -----
[LFX Mentorship (antes CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` o `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
Dirección URL personalizada | `custom: LINK1` o `custom: [LINK1, LINK2, LINK3, LINK4]`

Para Tidelift, use la sintaxis `platform-name/package-name` con los siguientes nombres de plataforma:

Idioma | Nombre de la plataforma.
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

Este es un archivo _FUNDING.yml_ de ejemplo:
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Nota:** Si una dirección URL personalizada de una matriz incluye `:`, debe encapsular la dirección URL entre comillas. Por ejemplo, `"https://www.paypal.me/octocat"`.

{% endnote %}

Puedes crear un botón de patrocinador predeterminado para tu organización o cuenta personal. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% note %}

Los enlaces de financiamiento permiten que los proyectos de código abierto reciban apoyo financiero directo de su comunidad. El uso de enlaces de financiamiento para otros fines, como la publicidad o el apoyo a grupos solidarios, comunitarios o políticos no está admitido. Si tienes consultas acerca de si los fines con que deseas usar estos enlaces está admitido, comunícate con {% data variables.contact.contact_support %}.

{% endnote %}

## Botón para mostrar un patrocinador en tu repositorio

Cualquier usuario que cuente con permisos de administración puede habilitar un botón de patrocinador en un repositorio.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En Características, seleccione **Patrocinios**.
  ![Casilla para habilitar Patrocinios](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. En "Patrocinios", haga clic en **Configurar botón de patrocinador** o **Invalidar vínculos de financiación**.
  ![Botón para configurar el botón del patrocinador](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. En el editor de archivos, siga la instrucciones del archivo _FUNDING.yml_ para agregar vínculos a las ubicaciones de financiación.
  ![Edición del archivo FUNDING para agregar vínculos a ubicaciones de financiación](/assets/images/help/sponsors/funding-yml-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Información adicional
- "[Acerca de {% data variables.product.prodname_sponsors %} para colaboradores de código abierto](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)".
- "[Preguntas más frecuentes con el equipo de {% data variables.product.prodname_sponsors %}](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)" en {% data variables.product.prodname_blog %}
