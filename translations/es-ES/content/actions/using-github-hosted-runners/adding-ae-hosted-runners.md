---
title: Agregar ejecutores hospedados en AE
intro: 'Puedes agregar un {% data variables.actions.hosted_runner %} a una organización o empresa.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

{% note %}

**Nota:** Para agregar {% data variables.actions.hosted_runner %} a {% data variables.product.prodname_ghe_managed %}, tendrás que contactar al soporte de {% data variables.product.prodname_dotcom %}. Este artículo describe la información que necesitará soporte para completar este proceso.

{% endnote %}

Los {% data variables.actions.hosted_runner %} pueden utilizar la simagenes base de sistema operativo de Azure, o puedes crear tus propias imágenes personalizadas.

### Agregar un {% data variables.actions.hosted_runner %} desde la imagen base de Azure

Puedes agregar {% data variables.actions.hosted_runner %} que utilicen las imágenes base del sistema operativo de Azure. Para agregar {% data variables.actions.hosted_runner %} a tu organización o empresa, contacta al soporte de {% data variables.product.prodname_dotcom %} y ten a la mano la siguiente información:
 - Sistema operativo requerido: Se listan las opciones disponibles en ["Especificaciones de software](/actions/using-github-hosted-runners/about-ae-hosted-runners#software-specifications)".
 - Elige un nombre para cada agrupación de {% data variables.actions.hosted_runner %}. Estos nombres se crean como etiquetas, lo cual te permite enrutar tus flujos de trabajo a estos ejecutores. Para obtener más información, consulta la sección "[Utilizar {% data variables.actions.hosted_runner %} en un flujo de trabajo](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)".
 - Dónde agregar el {% data variables.actions.hosted_runner %}: Identifica los nombres de las organizaciones y empresas que recibirán los ejecutores.

### Agregar un {% data variables.actions.hosted_runner %} con una imagen personalizada

Para crear una imagen de sistema operativo personalizada, consulta los pasos en ["Crear imágenes personalizadas"](/actions/using-github-hosted-runners/creating-custom-images).

Una vez que hayas creado una imagen personalizado utilizando los pasos anteriores, contacta a soporte de {% data variables.product.prodname_dotcom %} y proporciona los siguientes detalles:

  - La URI de SAS que generaste cuando seguiste los pasos de creación de la imagen personalizada.
  - Teclea el sistema operativo que utiliza la imagen: Este puede ser Linux o Windows.
  - Nombre de imagen.
  - Versión.
  - SKU de la MV para la agrupación nueva.
  - Elige un nombre para cada agrupación de {% data variables.actions.hosted_runner %}. Estos nombres se crean como etiquetas, lo cual te permite enrutar tus flujos de trabajo a estos ejecutores. Para obtener más información, consulta la sección "[Utilizar {% data variables.actions.hosted_runner %} en un flujo de trabajo](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)".
  - Dónde agregar el {% data variables.actions.hosted_runner %}: Identifica los nombres de las organizaciones y empresas que recibirán los ejecutores.

### Revisar tus {% data variables.actions.hosted_runner %}

Una vez que el soporte de {% data variables.product.prodname_dotcom %} agregue tus ejecutores, podrás encontrarlos en tu lista de ejecutores:

{% data reusables.github-actions.hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.hosted-runner-list %}
