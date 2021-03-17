---
title: Botón para mostrar un patrocinador en tu repositorio
intro: Puedes agregar un botón de patrocinador en tu repositorio para aumentar la visibilidad de las opciones de financiación para tu proyecto de código abierto.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
versions:
  free-pro-team: '*'
---

### Acerca de los archivos FUNDING

Puedes configurar tu botón de patrocinador editando un archivo _FUNDING.yml_ en la carpeta `.github` de tu repositorio, o bien en la rama predeterminada. Puedes configurar el botón para que incluya programadores patrocinados en {% data variables.product.prodname_sponsors %}, plataformas de financiamiento externo o URL de financiamiento personalizadas. Para obtener mas información acerca de {% data variables.product.prodname_sponsors %}, consulta "[Acerca de los patrocinadores de GitHub](/articles/about-github-sponsors)".

Puedes agregar un nombre de usuario, un nombre de paquete o un nombre de proyecto por plataforma de financiamiento externo y hasta cuatro URL personalizadas. Puedes añadir hasta cuatro organizaciones o desarrolladores patrocinadores en {% data variables.product.prodname_sponsors %}. Agrega cada plataforma en una línea nueva, usando la siguiente sintaxis:

| Plataforma                                                                    | Sintaxis                                                                |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [CommunityBridge](https://communitybridge.org)                                | `community_bridge: PROJECT-NAME`                                        |
| [{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` o `github: [USERNAME, USERNAME, USERNAME, USERNAME]` |
| [IssueHunt](https://issuehunt.io/)                                            | `issuehunt: USERNAME`                                                   |
| [Ko-fi](https://ko-fi.com/)                                                   | `ko_fi: USERNAME`                                                       |
| [Liberapay](https://en.liberapay.com/)                                        | `liberapay: USERNAME`                                                   |
| [Open Collective](https://opencollective.com/)                                | `open_collective: USERNAME`                                             |
| [Otechie](https://otechie.com/)                                               | `otechie: USERNAME`                                                     |
| [Patreon](https://www.patreon.com/)                                           | `patreon: USERNAME`                                                     |
| [Tidelift](https://tidelift.com/)                                             | `tidelift: PLATFORM-NAME/PACKAGE-NAME`                                  |
| URL personalizada                                                             | `custom: LINK1` or `custom: [LINK1, LINK2, LINK3, LINK4]`               |

Para Tidelift, usa la sintaxis `platform-name/package-name` con los siguientes nombres de plataforma:

| Lenguaje   | Nombre de la plataforma |
| ---------- | ----------------------- |
| JavaScript | `npm`                   |
| Python     | `pypi`                  |
| Ruby       | `rubygems`              |
| Java       | `maven`                 |
| PHP        | `packagist`             |
| C#         | `nuget`                 |

A continuación, un ejemplo de un archivo _FUNDING.yml_:
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Nota:** Si una URL personalizada en una matriz incluye `:`, debes encerrar la URL entre comillas. Por ejemplo, `"https://www.paypal.me/octocat"`.

{% endnote %}

Puedes crear un botón patrocinador predeterminado para tu organización o cuenta de usuario. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% note %}

Los enlaces de financiamiento permiten que los proyectos de código abierto reciban apoyo financiero directo de su comunidad. El uso de enlaces de financiamiento para otros fines, como la publicidad o el apoyo a grupos solidarios, comunitarios o políticos no está admitido. Si tienes consultas acerca de si los fines con que deseas usar estos enlaces está admitido, comunícate con {% data variables.contact.contact_support %}.

{% endnote %}

### Botón para mostrar un patrocinador en tu repositorio

Cualquier usuario que cuente con permisos de administración puede habilitar un botón de patrocinador en un repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En Características, selecciona **Patrocinios**. ![Casilla de verificación para habilitar Patrocinios](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. Da clic en **Configurar botón de patrocinador** o **Invalidad enlaces de financiamiento** debajo de la opción "Patrocionios". ![Botón para configurar el botón del patrocinador](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. En el editor de archivos, sigue la instrucciones en el archivo _FUNDING.yml_ para agregar enlaces a las ubicaciones de tus fuentes de financiamiento. ![Edita el archivo FUNDING para añadir enlaces a ubicaciones de fondeo](/assets/images/help/sponsors/funding-yml-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Leer más
- "[Acerca de {% data variables.product.prodname_sponsors %} para colaboradores de código abierto](/github/supporting-the-open-source-community-with-github-sponsors/about-github-sponsors-for-open-source-contributors)"
- "[Preguntas frecuentes con el equipo {% data variables.product.prodname_sponsors %} ](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)" en {% data variables.product.prodname_blog %}
