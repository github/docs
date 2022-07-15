---
title: Disaster recovery for GitHub Codespaces
intro: 'Este artículo describe la guía para una situación de recuperación de desastres, cuando toda una región experimenta una interrupción debido a un desastre natural mayor o una interrupción de servicios extendida.'
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
shortTitle: Recuperación de desastres
redirect_from:
  - /codespaces/codespaces-reference/disaster-recovery-for-codespaces
---

Nos esforzamos para asegurarnos de que {% data variables.product.prodname_github_codespaces %} siempre esté disponible. Sin embargo, por causas de fuerza mayor que salen de nuestro control, algunas veces se impacta el servicio en formas qeu pueden causar interrupciones de servicio no planeadas.

Aunque los casos de recuperación de desastres son ocurrencias extraordinarias, te recomendamos que te prepares para la posibilidad de que exista una interrupción en una región entera. Si una región completa experimenta una interrupción de servicio, las copias locales redundantes de tus datos se encontrarán temporalmente no disponibles.

La siguiente orientación proporciona opciones sobre cómo manejar la interrupción del servicio para toda la región en donde se desplegó tu codespace.

{% note %}

**Nota:** Puedes reducir el impacto potencial de las interrupciones a lo largo del servicio si haces subidas frecuentes a los repositorios remotos.

{% endnote %}

## Opción 1: Crea un codespace nuevo en otra región

En caso de que haya una interrupción regional, te sugerimos volver a crear tu codespace en una región no afectada para seguir trabajando. Este codespace nuevo tendrá todos los cambios desde tu última subida en {% data variables.product.prodname_dotcom %}. For information on manually setting another region, see "[Setting your default region for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)."

Puedes optimizar el tiempo de recuperación si configuras un `devcontainer.json` en el repositorio de un proyecto, el cual te permita definir las herramientas, tiempos de ejecución, configuración del editor, extensiones y otros tipos de configuración necesarios para restablecer el ambiente de desarrollo automáticamente. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

## Opción 2: esperar para la recuperación

En este caso, no se requiere que tomes acción alguna. Debes saber que estamos trabajando diligentemente para restaurar la disponibilidad del servicio.

Puedes verificar el estado de servicio actual en el [Tablero de estado](https://www.githubstatus.com/).

## Opción 3: Clona el repositorio localmente o edítalo en el buscador

Mientras que los {% data variables.product.prodname_codespaces %} proporcinan el beneficio de un ambiente de desarrollador pre-configurado, siempre debe poderse acceder a tu código mediante el repositorio que se hospeda en {% data variables.product.prodname_dotcom_the_website %}. En caso de que haya una interrupción de un {% data variables.product.prodname_codespaces %}, aún podrás clonar el repositorio localmente o los archivos de edición en el editor del buscador de {% data variables.product.company_short %}. Para obtener más información, consulta la sección "[Editar archivos](/repositories/working-with-files/managing-files/editing-files)".

Si bien esta opción no te configura un ambiente de desarrollo, te permitirá hacer cambios a tu código fuente conforme los necesites mientras esperas a que se resuelva la interrupción del servicio.

## Opción 4: Utiliza los contenedores remotos y Docker para crear un ambiente contenido local

Si tu repositorio tiene un `devontainer.json`, considera utilizar la [extensión de contenedores remotos](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) en {% data variables.product.prodname_vscode %} para crear y adjuntar un contenedor de desarrollo local para tu repositorio. El tiempo de configuración para esta opción variará dependiendo de tus especificaciones locales y de la complejidad de tu configuración de contenedor dev.

{% note %}

**Nota:** Asegúrate de que tu configuración local cumple con los [requisitos mínimos](https://code.visualstudio.com/docs/remote/containers#_system-requirements) antes de intentar utilizar esta opción.

{% endnote %}
