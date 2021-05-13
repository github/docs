---
title: Generar licencia para un repositorio
intro: 'Los repositorios públicos de GitHub se suelen utilizar para compartir software de código abierto. Para que tu repositorio sea verdaderamente de código abierto, tendrás que generarle una licencia. De este modo, las demás personas podrán usar, modificar y distribuir el software con libertad.'
redirect_from:
  - /articles/open-source-licensing/
  - /articles/licensing-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Repositories
---

### Elegir la licencia correcta

Creamos [choosealicense.com](http://choosealicense.com), para ayudarte a entender cómo generar una licencia para tu código. Una licencia de software les informa a las demás personas lo que pueden y no pueden hacer con tu código fuente; por lo tanto, es importante tomar una decisión informada.

No tienes la obligación de elegir una licencia. Sin embargo, sin una licencia, se aplican las leyes de derecho de autor predeterminadas, lo que implica que conservas todos los derechos de tu código fuente, y nadie puede reproducir, distribuir o crear trabajos a partir de tu trabajo. Si estás creando un proyecto de código abierto, te alentamos fuertemente a que incluyas una licencia de código abierto. La [Guía de código abierto](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) brinda más orientación para elegir la licencia correcta para tu proyecto.

{% note %}

**Nota:** Si publicas tu código fuente en un repositorio público de GitHub, {% if currentVersion == "free-pro-team@latest" %}de acuerdo con los [Términos de servicio](/articles/github-terms-of-service), {% endif %}otros usuarios de GitHub tienen derecho a visualizar y bifurcar tu repositorio dentro del sitio de GitHub. Si ya has creado un repositorio público y no quieres que los usuarios sigan teniendo acceso a él, puedes volver privado tu repositorio. Cuando conviertes un repositorio público en un repositorio privado, las bifurcaciones existentes o las copias locales creadas por otros usuarios seguirán existiendo. Para obtener más información, consulta "[Hacer que un repositorio público se vuelva privado](/articles/making-a-public-repository-private)".

{% endnote %}

### Determinar la ubicación de tu licencia

La mayoría de las personas coloca su texto de licencia en un archivo denominado`LICENSE.txt` (o `LICENSE.md`) en la raíz del repositorio; [aquí hay un ejemplo de Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

Algunos proyectos incluyen información acerca de sus licencias en sus README. Por ejemplo, el README de un proyecto puede incluir una nota que diga "Este proyecto cuenta con licencia conforme a los términos de la licencia MIT".

Como buena práctica, te alentamos a que incluyas el archivo de licencia en tu proyecto.

### Buscar en GitHub por tipo de licencia

Puedes filtrar repositorios en función de su licencia o familia de licencia usando el calificador de `licencia` y la palabra clave exacta de la licencia:

| Licencia | Palabra clave de la licencia                                  |
| -------- | ------------------------------------------------------------- |
|          | Academic Free License v3.0 | `afl-3.0`                        |
|          | Apache license 2.0 | `apache-2.0`                             |
|          | Artistic license 2.0 | `artistic-2.0`                         |
|          | Boost Software License 1.0 | `bsl-1.0`                        |
|          | BSD 2-clause "Simplified" license | `bsd-2-clause`            |
|          | BSD 3-clause "New" or "Revised" license | `bsd-3-clause`      |
|          | BSD 3-clause Clear license | `bsd-3-clause-clear`             |
|          | Creative Commons license family | `cc`                        |
|          | Creative Commons Zero v1.0 Universal | `cc0-1.0`              |
|          | Creative Commons Attribution 4.0 | `cc-by-4.0`                |
|          | Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
|          | Do What The F*ck You Want To Public License | `wtfpl`         |
|          | Educational Community License v2.0 | `ecl-2.0`                |
|          | Eclipse Public License 1.0 | `epl-1.0`                        |
|          | European Union Public License 1.1 | `eupl-1.1`                |
|          | GNU Affero General Public License v3.0 | `agpl-3.0`           |
|          | GNU General Public License family | `gpl`                     |
|          | GNU General Public License v2.0 | `gpl-2.0`                   |
|          | GNU General Public License v3.0 | `gpl-3.0`                   |
|          | GNU Lesser General Public License family | `lgpl`             |
|          | GNU Lesser General Public License v2.1 | `lgpl-2.1`           |
|          | GNU Lesser General Public License v3.0 | `lgpl-3.0`           |
|          | ISC | `isc`                                                   |
|          | LaTeX Project Public License v1.3c | `lppl-1.3c`              |
|          | Microsoft Public License | `ms-pl`                            |
|          | MIT | `mit`                                                   |
|          | Mozilla Public License 2.0 | `mpl-2.0`                        |
|          | Open Software License 3.0 | `osl-3.0`                         |
|          | PostgreSQL License | `postgresql`                             |
|          | SIL Open Font License 1.1 | `ofl-1.1`                         |
|          | University of Illinois/NCSA Open Source License | `ncsa`      |
|          | The Unlicense | `unlicense`                                   |
|          | zLib License | `zlib`                                         |

Cuando busques por una licencia de familia, los resultados incluirán todas las licencias de esa familia. Por ejemplo, cuando utilices la consulta `license:gpl`, los resultados incluirán los repositorios con licencia de GNU General Public License v2.0 y GNU General Public License v3.0. Para obtener más información, consulta "[Buscar repositorios](/articles/searching-for-repositories/#search-by-license)."

### Detectar una licencia

[El titular de licencia de la gema de código abierto Ruby](https://github.com/benbalter/licensee) compara el archivo *LICENSE* (LICENCIA) del repositorio con una lista corta de licencias conocidas. El titular de licencia también proporciona las [API de licencias](/v3/licenses/) y [nos da información sobre las licencias que tienen los repositorios de {% data variables.product.product_name %}](https://github.com/blog/1964-open-source-license-usage-on-github-com). Si tu repositorio utiliza una licencia que no está detallada en el [Sitio web Choose a License](http://choosealicense.com/appendix/), puedes[solicitar incluir la licencia](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

Si tu repositorio utiliza una licencia que está detallada en el sitio web Choose a License y no se muestra claramente en la parte superior de la página del repositorio, puede que contenga múltiples licencias u otra complejidad. Para que se detecten tus licencias, simplifica tu archivo *LICENSE* y anota la complejidad en algún otro lado, como en el archivo *README* de tu repositorio.

### Aplicar una licencia a un repositorio con una licencia existente

El selector de licencias solo está disponible cuando creas un proyecto nuevo en GitHub. Puedes agregar manualmente una licencia utilizando el buscador. Para obtener más información acerca de agregar una licencia a un repositorio, consulta "[Agregar una licencia a un repositorio](/articles/adding-a-license-to-a-repository)."

![Captura de pantalla del selector de licencias en GitHub.com](/assets/images/help/repository/repository-license-picker.png)

### Descargo

El objetivo de los esfuerzos de generación de licencias de código abierto de GitHub es proporcionar un punto de partida para ayudarte a hacer una elección informada. GitHub muestra información de licencias para ayudar a los usuarios a obtener información acerca de las licencias de código abierto y los proyectos que las utilizan. Esperamos que te sea útil, pero ten presente que no somos abogados y que cometemos errores como todo el mundo. Por ese motivo, GitHub proporciona la información sobre una base hipotética de "cómo es" y no da garantías al respecto de ninguna información o licencia proporcionada en función o a través de esta. Tampoco se hace responsable de los daños que surjan por el uso de la información de la licencia. Si tienes alguna pregunta al respecto de la licencia correcta para tu código o cualquier otro problema legal relacionado con esto, siempre es mejor consultar con un profesional.

### Leer más

- La sección de Guías de código abierto "[La parte legal del código abierto](https://opensource.guide/legal/)"{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
