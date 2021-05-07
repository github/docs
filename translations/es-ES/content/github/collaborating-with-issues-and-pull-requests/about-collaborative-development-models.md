---
title: Acerca de los modelos de desarrollo colaborativo
intro: El modo en que usas las solicitudes de extracción depende del tipo de modelo de desarrollo que uses en tu proyecto.
redirect_from:
  - /articles/types-of-collaborative-development-models/
  - /articles/about-collaborative-development-models
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Hay dos tipos principales de modelos de desarrollo con los cuales usar las solicitudes de extracción. En el *modelo de bifurcación y extracción*, cualquiera puede bifurcar un repositorio existente y subir los cambios a su bifurcación personal. No necesitas permiso del repositorio fuente para subir información a una bifurcación que sea propiedad del usuario. El mantenedor del proyecto puede extraer los cambios hacia el repositorio de origen. Cuando abres una solicitud de extracción que proponga cambios desde la bifurcación que es propiedad de tu usuario para ramificar en el repositorio fuente (ascendente), puedes permitir que cualquiera con acceso de escritura en éste haga cambios en dicha solicitud.  Este modelo es muy usado con los proyectos de código abierto, ya que reduce la cantidad de fricción para los colaboradores nuevos y le permite a las persona trabajar de forma independiente sin una coordinación inicial.

{% tip %}

**Sugerencia:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning-lab %}

{% endtip %}

En el *modelo de repositorio compartido*, se le otorga a los colaboradores acceso de escritura a un único repositorio compartido y las ramas de tema son creadas cuando es necesario hacer cambios. Las solicitudes de extracción son útiles en este modelo ya que inician la revisión de código y el debate general acerca de un conjunto de cambios antes de que los mismos sean fusionados en la rama de desarrollo principal. Este modelo es más frecuente con las organizaciones y los equipos pequeños que colaboran en proyectos privados.

### Leer más

- "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)"
- "[Crear una solicitud de extracción desde una bifurcación](/articles/creating-a-pull-request-from-a-fork)"
- "[Permitir cambios en una rama de solicitud de extracción creada desde una bifurcación](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
