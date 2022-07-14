---
title: Acerca de Git
intro: 'Aprende sobre el sistema de control de versiones, Git y cómo funciona con {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
  - Git
miniTocMaxHeadingLevel: 3
---

## Acerca del control de versiones y de Git

Un sistema de control de versiones o VCS (Version Control System, por sus siglas en inglés), rastrea el historial de cambios conforme las personas y los equipos colaboran juntos en los proyectos. Conforme los desarrolladores hacen cambios al proyecto, cualquier versión anterior de este puede recuperarse en cualquier momento.

Los desarrolladores pueden revisar el historial de proyectos para averiguar:

- ¿Qué cambios se hicieron?
- ¿Quién los hizo?
- ¿Cuándo se hicieron?
- ¿Por qué se necesitaban?

Los VCS le proporcionan a cada contribuyente una vista consistente y unificada de un proyecto, lo cual muestra el trabajo que ya está en progreso. El ver un historial de cambios transparente, quién los hizo y cómo contribuyen al desarrollo de un proyecto, ayuda a que los miembros de los equipos se alineen mientras trabajan independientemente.

En un sistema de control de versiones distribuido, cada desarrollador tiene una copia integral del proyecto y del historial del mismo. A diferencia de los sistemas de control de versiones centralizados populares, los DVCS necesitan una conexión constante a un repositorio central. Git es el sistema de control de versiones distribuido más popular. Git se utiliza habitualmente tanto para el desarrollo de proyectos de código abierto como comerciales y tiene beneficios significativos para los individuos, equipos y negocios.

- Git permite que los desarrolladores vean la línea de tiempo completa para los cambios, decisiones y progresión de cualquier proyecto en un solo lugar. Desde el momento en el que acceden al historial de un proyecto, el desarrollador tiene todo el contexto que necesitan para entenderlo y comenzar a contribuir.

- Los desarrolladores trabajan en todos los husos horarios. Con un DVCS como Git, las colaboraciones pueden tomar lugar en cualquier momento, mientras se mantiene la integridad del código fuente. Al utilizar las ramas, los desarrolladores pueden proponer cambios al código de producción de forma segura.

- Los negocios que utilizan Git pueden derribar las barreras de comunicación entre los equipos y mantenerlos enfocados en que realicen su mejor trabajo. Además, Git permite alinear a expertos a lo largo de los negocios para que colaboren en los proyectos principales.

## Acerca de los repositorios

Un repositorio o proyecto de Git comprende toda la colección de archivos y carpetas asociados con un proyecto, en conjunto con el historial de revisión de cada archivo. El historial del archivo se muestra como capturas de pantalla en el tiempo, las cuales se denominan "confirmaciones". Estas confirmaciones pueden organizarse en varias líneas de desarrollo, llamadas "ramas". Ya que Git es un DVCS, los repositorios son unidades auto-contenidas y cualquiera que tenga una copia del repositorio puede acceder a toda la base de código y a su historial. Utilizando la línea de comandos o cualquier otra interfaz de facilidad de uso, un repositorio de Git también permite: interactuar con el historial, clonar el repositorio, crear ramas, confirmar, fusionar y comparar cambios entre las versiones del código y más.

A través de plataformas como {% data variables.product.product_name %}, Git también proporciona más oportunidades para la transparencia y colaboración en los proyectos. Los repositorios públicos hacen que los equipos trabajen en conjunto para crear el mejor producto final posible.

## Cómo funciona {% data variables.product.product_name %}

{% data variables.product.product_name %} hospeda repositorios de Git y proporciona a los desarrolladores las herramientas para generar un código mejor mediante características de línea de comandos, propuestas (debates en hilo), solicitudes de cambio, revisión de código o el uso de un conjunto de apps gratuitas y de pago en {% data variables.product.prodname_marketplace %}. Con las capas de colaboración tales como el flujo de {% data variables.product.product_name %}, una comunidad de 15 millones de desarrolladores y un ecosistema con cientos de integraciones, {% data variables.product.product_name %} cambia la forma en la que se crea el software.

{% data variables.product.product_name %} crea una colaboración directamente en el proceso de desarrollo. El trabajo se organiza en los repositorios donde los desarrolladores pueden describir los requisitos o la dirección y marcar las expectativas para los miembros de los equipos. Posteriormente, utilizando el flujo de {% data variables.product.product_name %}, los desarrolladores simplemente crean una rama para trabajar en las actualizaciones, confirmar cambios para guardarlos, abrir una solicitud de cambios para proponerlos y debatirlos y fusionar solicitudes de cambio una vez que todos estén de acuerdo. Para obtener más información, consulta la sección "[Flujo de GitHub](/get-started/quickstart/github-flow)".

## {% data variables.product.product_name %} y la línea de comandos

### Comandos básicos de Git

Para utilizar Git, los desarrolladores utilizan comandos específicos para copiar, crear, cambiar y combinar el código. Estos comandos pueden ejecutarse directamente desde la línea de comandos o utilizando una aplicación como {% data variables.product.prodname_desktop %}. Aquí tienes algunos comandos comunes para utilizar Git:

- `git init` inicializa un repositorio nuevo de Git y comienza a rastrear el directorio existente. Este agrega una subcarpeta oculta dentro del directorio existente que hospeda la estructura de datos interna que se requiere para el control de versiones.

- `git clone` crea una copia local de un proyecto que ya existe remotamente. El clon incluye todos los archivos, historial y ramas del proyecto.

- `git add` prueba un cambio. Git rastrea los cambios que se hacen a la base de código de un desarrollador, pero es necesario probarlos y tomar una captura de pantalla de ellos para incluirla en el historial del proeycto. Este comando realiza pruebas, la primera parte de este proceso de dos pasos. Cualquier cambio que se pruebe, se convertirá en parte de la siguiente captura de pantalla y también del historial del proyecto. Las pruebas y confirmaciones por separado otorgan a los desarrolladores el control completo sobre el historial y sobre el proyecto sin cambiar la forma en la que codifican y trabajan.

- `git commit` guarda la captura de pantalla del historial del proeycto y completa el proceso de rastreo de cambios. En resumen, una confirmación funciona tal como el tomar una fotografía. Todo lo que se pruebe con `git add` se convertirá en parte de la captura de pantalla con `git commit`.

- `git status` muestra el estado de los cambios como "sin rastrear", "modificados" o "probados".

- `git branch` muestra las ramas en las que se está trabajando localmente.

- `git merge` fusiona las líneas de desarrollo juntas. Este comando habitualmente se utiliza para combinar los cambios que se realizan en dos ramas distintas. Por ejemplo, un desarrollador podría hacer una fusión cuando necesite combinar los cambios de una rama de característica en la rama de desarrollo principal.

- `git pull` actualiza la línea de desarrollo local con actualizaciones de sus contrapartes remotas. Los desarrolladores utilizan este comando si un compañero de equipo hizo confirmaciones en una rama en un repositorio remoto y quieren reflejarlos en su ambiente local.

- `git push` actualiza el repositorio remoto con cualquier confirmación que se haga localmente a una rama.

Para obtener más información, consulta la [guía de referencia completa para los comandos de Git](https://git-scm.com/docs).

### Ejemplo: Contribuir con un repositorio existente

```bash
# download a repository on {% data variables.product.product_name %} to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch
```

### Ejemplo: Comienza un repositorio nuevo y publícalo en {% data variables.product.product_name %}

Primero, necesitas crear un repositorio nuevo en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Hello World](/get-started/quickstart/hello-world)". **No** inicialices el repositorio con un archivo README, .gitignore o de licencia. Este repositorio vacío esperará tu código.

```bash
# create a new directory, and initialize it with git-specific functions
git init my-repo

# change into the `my-repo` directory
cd my-repo

# create the first file in the project
touch README.md

# git isn't aware of the file, stage it
git add README.md

# take a snapshot of the staging area
git commit -m "add README to initial commit"

# provide the path for the repository you created on github
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# push changes to github
git push --set-upstream origin main
```

### Ejemplo: contribuye con una rama existente en {% data variables.product.product_name %}

Este ejemplo asumen que ya tienes un proyecto llamado `repo` en la máquina y que se subió una rama nueva a {% data variables.product.product_name %} desde la última vez que se realizaron los cambios localmente.

```bash
# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```

## Modelos para el desarrollo colaborativo

Hay dos formas principales para que las personas colaboren en {% data variables.product.product_name %}:

1. Un repositorio compartido
2. Bifurcar y extraer

Con un repositorio compartido, los individuos y equipos se designan explícitamente como contribuyentes con acceso de lectura, escritura o administrativo. Esta estructura de permisos simple, en combinación con características como las ramas protegidas, ayuda a que los equipos progresen rápidamente cuando adoptan {% data variables.product.product_name %}.

Para un proyecto de código abierto o para aquellos en los que cualquiera puede contribuir, el administrar los permisos individuales puede ser retador, pero un modelo de bifurcación y extracción permite que cualquiera que pueda ver el proyecto contribuya con este. Una bifurcación es una copia de un proyecto en una cuenta personal de un desarrollador. Cada desarrollador tiene control total de su bifurcación y puede implementar una corrección o característica nueva. El trabajo que se completa en las bifurcaciones se mantiene por separado o se vuelve a llevar al proyecto original con una solicitud de cambios. Allí, los mantenedores pueden revisar los cambios sugeridos antes de que se fusionen. Para obtener más información, consulta la sección "[Contribuir con los proyectos](/get-started/quickstart/contributing-to-projects)".

## Leer más

El equipo de {% data variables.product.product_name %} creó una librería de videos educativos y guías para ayudar a que los usuarios sigan desarrollando sus habilidades y creando software mejor.

- [Proyectos de principiante a explorar](https://github.com/showcases/great-for-new-contributors)
- [Video guías de {% data variables.product.product_name %}](https://youtube.com/githubguides)

Para obtener una vista detallada de las prácticas de Git, los siguientes videos muestran cómo obtener el mayor provecho de algunos de sus comandos.

- [Trabajar localmente](https://www.youtube.com/watch?v=rBbbOouhI-s&index=2&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git status`](https://www.youtube.com/watch?v=SxmveNrZb5k&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=3)
- [Confirmaciones de dos pasos](https://www.youtube.com/watch?v=Vb0Ghkkc2hk&index=4&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git pull` y `git push`](https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
