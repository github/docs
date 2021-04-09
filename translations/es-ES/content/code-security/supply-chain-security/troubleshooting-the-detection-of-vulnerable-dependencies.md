---
title: Solucionar problemas en la detección de dependencias vulnerables
intro: 'Si la información de la dependencia que reportó {% data variables.product.product_name %} no es lo que esperabas, hay varios puntos a considerar y varias cosas que puedes revisar.'
shortTitle: Solución de problemas de las detecciones
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  free-pro-team: '*'
topics:
  - seguridad
---

Los resultados de la detección de dependencias que reporta {% data variables.product.product_name %} pueden ser diferentes a aquellos que devuelven otras herramientas. Esto está justificado y es útil el entender cómo {% data variables.product.prodname_dotcom %} determina las dependencias para tu proyecto.

### ¿Por qué parece que faltan algunas dependencias?

{% data variables.product.prodname_dotcom %} genera y muestra los datos de las dependencias de forma diferente a otras herramientas. En consecuencia, si has estado utilizando otra herramienta para identificar dependencias, muy probablemente encuentres resultados diferentes. Considera lo sigueinte:

*   {% data variables.product.prodname_advisory_database %} es una de las fuentes de datos que utiliza {% data variables.product.prodname_dotcom %} para identificar las dependencias vulnerables. Es una base de datos de información de vulnerabilidades orgtanizada y gratuita para los ecosistemas de paquetes comunes en {% data variables.product.prodname_dotcom %}. Esta incluye tanto los datos reportados directamente a {% data variables.product.prodname_dotcom %} desde {% data variables.product.prodname_security_advisories %}, así como las fuentes oficiales y las comunitarias. {% data variables.product.prodname_dotcom %} revisa y organiza estos datos para garantizar que la información falsa o inprocesable no se comparta con la comunidad de desarrollo. Para obtener más información, consulta las secciones "[Buscar vulnerabilidades de seguridad en la {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)" y [Acerca de las {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
*   La gráfica de dependencias analiza todos los archivos de manifiesto de paquetes conocidos en un repositorio de usuario. Por ejemplo, para npm analizará el archivo _package-lock.json_. Construye una gráfica de todas las dependencias del repositorio y de los dependientes públicos. Esto sucede cuando habilitas la gráfica de dependencias y cuando alguien hace cargas a la rama predeterminada, y esto incluye a las confirmaciones que hacen cambios a un formato de manifiesto compatible. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
*   {% data variables.product.prodname_dependabot %} escanea cualquier subida a la rama predeterminada que contenga un archivo de manifiesto. Cuando se agrega un registro de vulnerabilidad nuevo, este escanea todos los repositorios existentes y genera una alerta para cada repositorio vulnerable. Las {% data variables.product.prodname_dependabot_alerts %} se agregan a nivel del repositorio, en vez de crear una alerta por cada vulnerabilidad. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".
*   Las {% data variables.product.prodname_dependabot_security_updates %} se activan cuando recibes una alerta sobre una dependencia vulnerable en tu repositorio. Cuando sea posible, el {% data variables.product.prodname_dependabot %} creará una solicitud de cambios en tu repositorio para actualizar la dependencia vulnerable a la versión segura mínima posible que se requiere para evitar la vulnerabilidad. Para obtener más información, consulta las secciones "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)" y "[Solucionar problemas en los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)".

    El {% data variables.product.prodname_dependabot %} no escanea los repositorios para encontrar dependencias vulnerables bajo ninguna programación, sino cuando algo cambia. Por ejemplo, se activa un escaneo cuando se agrega una dependencia ({% data variables.product.prodname_dotcom %} verifica esto en cada subida), o cuando se descubre una vulnerabilidad nueva y ésta se agrega en la base de datos de asesorías.

### ¿Por qué no me llegan alertas de vulnerabilidades de algunos ecosistemas?

{% data variables.product.prodname_dotcom %} limita su soporte para alertas de vulnerabilidades a un conjunto de ecosistemas donde podemos proporcionar datos procesables de alta calidad. Las vulnerabilidades que se organizan en la {% data variables.product.prodname_advisory_database %}, la gráfica de dependencias, las alertas de {% data variables.product.prodname_dependabot_alerts %}, y las actualizaciones de seguridad del {% data variables.product.prodname_dependabot %} se proporcionan para varios ecosistemas, incluyendo Maven de Java, npm y Yarn de JavaScript, NuGet de .NET, pip de Python, RubyGems de Ruby y Composer de PHP. Seguiremos agregando soporte para más ecosistemas a la larga. Para obtener una vista general de los ecosistemas de paquete que soportamos, consulta la sección "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

Vale la pena señalar que podrían existir [Asesorías de Seguridad de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories) para otros ecosistemas. La información en una asesoría de seguridad la porporcionan los mantenedores de un repositorio específico. Estos datos no se organizan de la misma forma que la información para los ecosistemas compatibles.

**Verifica**: ¿Acaso la vulnerabilidad que no se detectó aplica a algún ecosistema no compatible?

### ¿Acaso la gráfica de dependencias solo encuentra depedencias en los manifiestos y lockfiles?

La gráfica de dependencias incluye información sobre las dependencias, la cual se declara explícitamente en tu ambiente. Esto es, dependencias que se especifican en un manifiesto o en un lockfile. La gráfica de dependencias también incluye dependencias transitivas generalmente, aún cuando no se especifican en un lockfile, mediante la revisión de las dependencias de las dependencias en un archivo de manifiesto.

Las {% data variables.product.prodname_dependabot_alerts %} te asesoran sobre las dependencias que debes actualizar, incluyendo aquellas transitivas en donde la versión se puede determinar desde un manifiesto o lockfile. Las alertas de seguridad de {% data variables.product.prodname_dependabot %} solo sugieren un cambio en donde puedan "arreglar" directamente la dependencia, esto es cuando estas son:
* Dependencias directas declaradas explícitamente en un manifiesto o lockfile
* Dependencias transitivas declaradas en un lockfile

La gráfica de dependencias no incluye las dependencias "sueltas". Las dependencias "sueltas" son archivos individuales que se copian de otra fuernte y se revisan directamente en el repositorio o dentro de un archivo (tal como un archivo ZIP o JAR) en ves de que se referencien en un manifiesto de paquete de administrador o en un lockfile.

**Verifica**; ¿Acaso no se especifica la vulnerabilidad no detectada para un componente en el manifiesto o lockfile del repositorio?

### ¿Acaso la gráfica de dependencias detecta dependencias que se especifican utilizando variables?

La gráfica de dependencias analiza los manifiestos mientras se suben a {% data variables.product.prodname_dotcom %}. Por lo tanto, la gráfica de dependencias no tiene acceso al ambiente de compilación del proyecto, así que no puede resolver variables que se utilizan dentro de los manifiestos. Si utilizas variables dentro de un manifiesto para especificar el nombre, o más comunmente la versión de una dependencia, entonces dicha dependencia no se incluirá en la gráfica de dependencias.

**Verifica**: ¿Acaso la dependencia faltante se declara en el manifiesto utilizando una variable para su nombre o versión?

### ¿Existen límites que afecten los datos de la gráfica de dependencias?

Sí, la gráfica de dependencias tiene dos categorías de límites:

1. **Límites de procesamiento**

    Estos afectan la gráfica de dependencias que se muestra dentro de {% data variables.product.prodname_dotcom %} y también previenen la creación de {% data variables.product.prodname_dependabot_alerts %}.

    Los manifiestos mayores a 0.5 MB solo se procesan para las cuentas empresariales. En el caso de otras cuentas, los manifiestos mayores a 0.5 MB se ingoran y no crearán {% data variables.product.prodname_dependabot_alerts %}.

    Predeterminadamente, {% data variables.product.prodname_dotcom %} no procesará más de 20 manifiestos por repositorio. Las {% data variables.product.prodname_dependabot_alerts %} no deben crearse para los manifiestos mas allá de éste límite. Si necesitas incrementar el límite, contacta a {% data variables.contact.contact_support %}.

2. **Límites de visualización**

    Estos afectan a lo que se muestra en la gráfica de dependencias dentro de {% data variables.product.prodname_dotcom %}. Sin embargo, estos no afectan las {% data variables.product.prodname_dependabot_alerts %} que se crean.

    La vista de dependencias de la gráfica de dependencias para un repositorio solo muestra 1000 manifiestos. Habitualmente, esto es tan adecuado como es significativamente más alto que el límite de procesamiento descrito anteriormente. En situaciones en donde le límite de procesamiento es mayor a 100, las {% data variables.product.prodname_dependabot_alerts %} se crearán aún para cualquier manifiesto que no se muestre dentro de {% data variables.product.prodname_dotcom %}.

**Verifica**: ¿La dependencia faltante está en un archivo de manifiesto que tiene más de 0.5 MB, o en un repositorio con una gran cantidad de manifiesto?

### ¿Acaso el {% data variables.product.prodname_dependabot %} genera alertas para vulnerabilidades que se han conocido por muchos años?

La {% data variables.product.prodname_advisory_database %} se lanzó en noviembre de 2019 e incialmente rellenó la inclusión de vulnerabilidades informáticas para los ecosistemas compatibles, comenzando en 2017. Cuando agregas CVE a la base de datos, priorizamos la organización de CVE nuevos y los CVE que afecten las versiones nuevas del software.

Alguna información sobre las vulnerabilidades antiguas se encuentra disponible, especialmente en donde estos CVE se diseminan específicamente, sin embargo, algunas vulnerabilidades no se incluyen en la {% data variables.product.prodname_advisory_database %}. Si hay una vulnerabilidad antigua específica la cual necesites incluir en la base de datos, contacta a {% data variables.contact.contact_support %}.

**Verifica**: ¿Acaso la vulnerabilidad no detectada tiene una fecha depublicación más antigua de 2017 en la Base de Datos de Vulnerabilidades Nacional?

### Por qué la {% data variables.product.prodname_advisory_database %} utiliza un subconjunto de datos de vulnerabilidades publicados?

Algunas herramientas de terceros utilizan datos de CVE sin organizar y no las verificó ni filtró un humano. Esto significa que los CVE con errores de etiquetado o de severidad, o con cualquier problema de calidad, causarán alertas más frecuentes, ruidosas y menos útiles.

Ya que {% data variables.product.prodname_dependabot %} utiliza datos organizado en la {% data variables.product.prodname_advisory_database %}, la cantidad de alertas podría ser menor, pero las alertas que sí recibas serán exactas y relevantes.

### ¿Acaso cada vulnerabilidad de la dependencia genera una alerta separada?

Cuadno una dependencia tiene vulnerabilidades múltiples, solo se genera una alerta agregada para esta dependencia en vez de una por cada vulnerabilidad.

Las {% data variables.product.prodname_dependabot_alerts %} cuentan en {% data variables.product.prodname_dotcom %} y muestran un total para la cantidad de alertas, es decir, la cantidad de dependencias con vulnerabilidades y no la cantidad de vulnerabilidades.

![Vista de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/repository/dependabot-alerts-view.png)

Cuando das clic para mostrar los detalles de la alerta puedes ver cuántas vulnerabilidades se incluyen en la misma.

![Vulnerabilidades múltiples para una alerta de {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/dependabot-vulnerabilities-number.png)

**Verifica**: Si hay una discrepancia en la cantidad total que ves, verifica si no estás comparando la cantidad de alertas con la cantidad de vulnerabilidades.

### Leer más

- "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Administrar la configuración de seguridad y de análisis para tu organización](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solucionar problemas de los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"
