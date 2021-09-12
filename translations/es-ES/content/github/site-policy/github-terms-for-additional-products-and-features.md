---
title: Condiciones de GitHub para las características y productos adicionales
redirect_from:
  - /github/site-policy/github-additional-product-terms
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

Fecha de versión en vigor: 26 de mayo de 2021

Cuando utilices GitHub, podría que se te otorgue acceso a muchos productos y características adicionales ("Características y Productos Adicionales"). Ya que muchas de las Características y Productos Adicionales ofrecen funcionalidades diferentes, las condiciones específicas para dicho producto o característica podrán aplicarse adicionalmente a tu contrato principal con nosotros—las Condiciones de Servicio de GitHub, las Condiciones de Servicio Corporativo de GitHub, las Condiciones Generales de GitHub o el acuerdo de licenciamiento por volumen de Microsoft (cada uno de ellos conocidos como el "Acuerdo"). A continuación, listamos aquellos productos y características jutno con las condiciones adicionales correspondientes que aplican al uso que les des.

Al utilizar las características y productos adicionales, también estás de acuerdo con las Condiciones aplicables de GitHub para las características y productos adicionales que se listan a continuación. El violar estas condiciones de GitHub para obtener características y productos adicionales constituye una violación del Acuerdo. Las condiciones en mayúsculas que no se definen aquí tienen el significado que se les otorga en el Acuerdo.

**Para usuarios empresariales**
- Los usuarios de **GitHub Enterprise Cloud** Podrían tener acceso a los siguientes productos y características adicionales: Acciones, Seguridad Avanzada, Base de Datos de Asesorías, Codespaces, Vista Previa del Dependabot, Laboratorio de Aprendizaje, Octoshift, Paquetes y Páginas.

- Los usuarios de **GitHub Enterprise Server** podrían tener acceso a los siguientes productos y características adicionales: Acciones, Seguridad Avanzada, Base de Datos de Asesorías, Connect, Vista Previa del Dependabot, Laboratorio de Aprendizaje, Octoshift, Paquetes, Páginas e Imágenes de SQL Server.

- Los usuarios de **GitHub AE** podrían tener acceso a los siguientes productos y características adicionales: Acciones, Seguridad Avanzada, Base de Datos de Asesorías, {% if currentVersion == "github-ae@next" %}Connect, {% endif %}Vista Previa del Dependabot, Octoshift, Paquetes y Páginas.

### Acciones
Acciones de GitHub te permiten crear flujos de trabajo de ciclo de vida de desarrollo del software personalizado directamente en tu repositorio de GitHub. Las acciones se facturan conforme se utilizan. La [Documentación de las acciones](/actions) incluye detalles como las cantidades de procesamiento y almacenamiento (dependiendo del plan de tu cuenta), y el cómo monitorear el uso de minutos de tus acciones y configurar los límites de uso.

Las acciones y cualquier elemento del servicio de ellas no puede utilizarse para violar el acuerdo, las [Políticas de uso aceptable de GitHub](/github/site-policy/github-acceptable-use-policies), ni las limitaciones del servicio de Github, las cuales se establecen en la [Documentación de las acciones](/actions/reference/usage-limits-billing-and-administration). Además, las acciones no deben utilizarse para:
- criptominería;
- utilizar nuestros servicios para perturbar u obtener o intentar obtener acceso no autorizado a cualquier servicio, dispositivo, datos, cuenta o red (diferente a aquellas que utiliza el [programa de recompensas de bugs de GitHub](https://bounty.github.com));
- el aproviosionamiento de las aplicaciones autónomas o integradas o del servicio que ofrece acciones o cualquier elemento de ellas para propósitos comerciales;
- cualquier actividad que coloque un peso en nuestros servidores, ya sea que dicho peso sea excesivo para los beneficios que se proporcionan a los usuarios (por ejemplo, no utilizamos acciones como una red de entrega de contenido o como parte de una aplicación sin servidores, pero una acción de beneficio mínimo podría estar bien si también implica un peso mínimo); o
- cualquier otra actividad no relacionada con la producción, prueba, despliegue o publicación del proyecto de software asociado con el repositorio donde se utilizan las Acciones de GitHub.

Para evitar violaciones de estas limitaciones y abuso de las Acciones de GitHub, GitHub puede controlar tu uso de Acciones de GitHub. El mal uso de las GitHub Actions podría dar como resultado la terminación de jobs, restricciones en tu capacidad para utilizar las GitHub Actions, o inhabilitar los repositorios que se crearon para ejecutar las acciones de una forma que viole estas condiciones.


### Advanced Security
GitHub hace características de seguridad adicionales para los clientes bajo una licencia de Seguridad Avanzada. Estas características incluyen el escaneo de código, escaneo de secretos y revisión de dependencias. La [Documentación de la seguridad avanzada](/github/getting-started-with-github/about-github-advanced-security) proporciona más detalles.

Se otorgan licencias para la Seguridad Avanzada con base en "Confirmantes únicos". Un "Confirmador único" es un usuario con licencia de GitHub Enterprise, GitHub Enterprise Cloud, GitHub Enterprise Server, o GitHub AE, quien realizó una confirmación de código en los últimos 90 días para cualquier repositorio con cualquier funcionalidad de GitHub Advanced Security activada. Debes adquirir una licencia de usuario de GitHub Advanced Security para cada uno de tus Confirmadores Únicos. Solo puedes utilizar GitHub Advanced Security en las bases de código que desarrollas o que se desarrollan para ti. En el caso de los usuarios de GitHub Enterprise Cloud, algunas características de la Seguridad Avanzada también requieren utilizar las GitHub Actions.

### Base de datos consultiva
La base de datos de asesorías de GitHub te permite buscar manualmente o por coincidencia las vulnerabilidades que afectan los proyectos de código abierto en GitHub.

_Licencia otorgada_

Necesitamos el derecho legal de enviar tus contribuciones a la base de datos consultiva de GitHub a los conjuntos de datos de dominio público como la [Base de datos nacional de vulnerabilidad](https://nvd.nist.gov/) y para licenciar la base de datos consultiva de GitHub bajo condiciones abiertas para su uso por investigadores de seguridad, la comunidad de código abierto, la industria y el público. Aceptas publicar tus contribuciones a la base de datos consultiva de GitHub bajo la [licencia Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/).

_Licencia para la base de datos consultiva de GitHub_

La base de datos consultiva de GitHub está bajo la licencia [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). La condición de la atribución se puede cumplir enlazando a la base de datos consultiva de GitHub en [https://github. om/advisories](https://github.com/advisories) o a registros individuales de la base de datos consultiva de GitHub usada, con la calificación de <https://github.com/advisories>.

### Conexión
Con GitHub Connect, puedes compartir algunas características y datos entre tu instancia de GitHub Enterprise Server {% if currentVersion == "github-ae@next" %}o de GitHub AE {% endif %} y tu cuenta empresarial u organizacional de GitHub Enterprise Cloud en GitHub.com. Para habilitar GitHub Connect, debes tener por lo menos una (1) cuenta en GitHub Enterprise Cloud o en GitHub.com y una (1) instancia con licencia de GitHub Enterprise Server{% if currentVersion == "github-ae@next" %} o de GitHub AE{% endif %}. Ti isp de GitHub Enterprise Cloud o de GitHub.com a través de Connect se rige por los términos bajo los cuales obtengas la licencia de GitHub Enterprise Cloud o GitHub.com. El uso de los datos personales se rige de acuerdo con la [Declaración de privacidad de GitHub](/github/site-policy/github-privacy-statement).

### Vista previa de Dependabot
Puedes utilizar al Dependabot para mantener los paquetes que utilizas actualizados en sus versiones más recientes. Tu uso de la vista previa de Dependabot se rige por los [Términos de Servicio](https://dependabot.com/terms) y la [Política de Privacidad](https://dependabot.com/privacy) por separado.

### Laboratorio de aprendizaje
El Laboratorio de Aprendizaje de GiThub ofrece cursos interactivos gratuitos que se incorporan en GitHub con retroalimentación automática y ayuda instantáneas.

*Materiales del curso.* GitHub es el propietario de los materiales de los cursos que proporciona y te garantiza una licencia sin sujeción a regalías, no transferible, por tiempo limitado, no exclusiva para copiar, mantener, utilizar y ejecutar dichos materiales para tus necesidades de negocio internas asociadas con el uso del Laboratorio de Aprendizaje.

Las condiciones de licencia de código abierto podrían aplicar a porciones del código fuente que se proporcionan en los materiales del curso.

Eres el propietario de los materiales del curso que tú mismo crees y para los cuales proporciones a GitHub una licencia mundial, no exclusiva, perpetua, no transferible y sin regalías para copiarlos, mantenerlos, utilizarlos, hospedarlos y ejecutarlos.

El utilizar los materiales del curso de GitHub y crear y almacenar los materiales de tu propio curso no constituyen una propiedad conjunta de ninguna propiedad intelectual respectiva de las partes.

El uso de los datos personales se rige de acuerdo con la [Declaración de privacidad de GitHub](/github/site-policy/github-privacy-statement).

### npm
npm es un servicio de hospedaje de paquetes de software que te permite hospedar tus paquetes de software de forma privada o pública y utilizarlos como dependencias en tus proyectos. npm es el registro de registros para el ecosistema de JavaScript. Utilizar el registro público es gratuito, pero se facturará a los clientes si quieren publicar o administrar paquetes privados que utilicen equipos. La [documentación de npm](https://docs.npmjs.com/) incluye los detalles sobre la limitación de los tipos de cuenta y de como administrar los [paquetes privados](https://docs.npmjs.com/about-private-packages) y [organizaciones](https://docs.npmjs.com/organizations). El uso aceptable del registrio npm se detalla en las [condiciones de código abierto](https://www.npmjs.com/policies/open-source-terms). Hay condiciones adicionales tanto para los planes [solo](https://www.npmjs.com/policies/solo-plan) y [org](https://www.npmjs.com/policies/orgs-plan) de npm. Las [Condiciones de uso](https://www.npmjs.com/policies/terms) de npm aplican a tu uso de este.

### Octoshift
Octoshift es un marco de trabajo para exportar datos desde otras fuentes e importarlos en la plataforma de GitHub. Se proporciona Octoshift "TAL COMO ESTÁ".

### Paquetes
GitHub Packages es un servicio de hospedaje de paquetes de software que te permite hospedar tus paquetes de software de forma privada o pública y utilizar los paquetes como dependencias en tus proyectos. GitHub Packages se factura de acuerdo con su uso. La [Documentación de paquetes](/packages/learn-github-packages/introduction-to-github-packages) incluye los detalles como las cantidades de ancho de banda y almacenamiento (dependiendo del plan de tu cuenta), y la forma en la que puedes monitorear el uso de los paquetes y configurar los límites de uso. El uso de ancho de banda de los paquetes se limita por las [Políticas de uso aceptable de GitHub](/github/site-policy/github-acceptable-use-policies).

### Pages

Cada cuenta incluye acceso al [servicio de hospedaje estático de GitHub pages](/github/working-with-github-pages/about-github-pages). Se pretende que GitHub pages hospede páginas web estáticas, pero es primeramente para mostrar proyectos organizacionales y personales.

No se pretende ni se permite que las Páginas de GitHub se utilicen como un servicio de alojamiento web gratuito para ejecutar tus negocios en línea, ni como un sitio de comercio electrónico ni ningún otro tipo de sitio web que se dirija principalmente ya sea a facilitartransacciones comerciales o a proporcionar software comercial como un servicio (SaaS). Se permiten algunas iniciativas de monetización en las Páginas, tales como botones de donación y enlaces de financiación colectiva.

#### a. Límites de uso y de ancho de banda
Las páginas de GitHub están sujetas a algunos límites específicos de ancho de banda y de uso, y podrían no ser adecuadas para algunos usos de ancho de banda alto. Consulte nuestras [directrices de páginas de GitHub](/github/working-with-github-pages/about-github-pages) para obtener más información.

#### b. Usos prohibidos
Los usos prohiubidos de las Páginas de GitHub incluyen
- Contenido o actividad que es prohibida o ilegal de acuerdo con nuestras [Condiciones de Servicio](/github/site-policy/github-terms-of-service), [Políticas de Uso Aceptable](/github/site-policy/github-acceptable-use-policies) o [Lineamientos Comunitarios](/github/site-policy/github-community-guidelines)
- el contenido o la actividad violentas o amenazadoras
- la actividad masiva automatizada excesiva (por ejemplo, envío de spam)
- la actividad que comprometa a los usuarios o los servicios de GitHub
- los esquemas del tipo 'hágase rico rápidamente'
- el contenido sexualmente obsceno
- el contenido que falsea de manera fraudulenta tu identidad o el propósito del sitio

Si tienes dudas sobre si el uso real o previsto de este servicio cae en alguna de estas categorías, por favor, contacta al [Soporte de GitHub](https://support.github.com/contact) o al [Soporte Premium de GitHub](https://premium.githubsupport.com/). GitHub se reserva el derecho en todo momento de reclamar cualquier subdominio de GitHub sin responsabilidad.

### Programa de patrocinadores

GitHub Sponsors permite a la comunidad de desarrolladores apoyar financieramente al personal y organizaciones que diseñan, crean y mantienen los proyectos de código abierto de los cuales dependen, directamente en GitHub. Para convertirse en un Desarrollador Patrocinado, debes aceptar los [Términos Adicionales del Programa de Patrocinadores de GitHub](/github/site-policy/github-sponsors-additional-terms).

### Imagenes de SQL Server

Puedes descargar la imagen de contenedor de la Edición Estándar de Microsoft SQL Server para archivos Linux ("SQL Server Images"). Debes desinstalar las imagenes de SQL Server cuando termine tu derecho de utilizar el software. Microsoft Corporation puede inhabilitar las imágenes de SQL Server en cualquier momento.
