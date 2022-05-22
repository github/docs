---
title: Fortalecimiento de seguridad para GitHub Actions
shortTitle: Fortalecimiento de seguridad
intro: 'Buenas prácticas de seguridad para utilizar las características de las {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Resumen

Esta guía explica cómo configurar el fortalecimiento de seguridad para ciertas características de las {% data variables.product.prodname_actions %}. Si no estás familiarizado con los conceptos de las {% data variables.product.prodname_actions %}, consulta la sección "[Conceptos principales para GitHub Actions](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

### Utilizar secretos

Los valores sensibles jamás deben almacenarse como texto simple e archivos de flujo de trabajo, sino más bien como secretos. Los [Secretos](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) pueden configurarse a nivel de la organización{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}, repositorio o ambiente{% else %} o repositorio{% endif %}, y permitirte almacenar información sensible en {% data variables.product.product_name %}.

Los secretos utilizan [Cajas selladas de libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) de manera que se cifran antes de llegar a {% data variables.product.product_name %}. Esto ocurre cuando el secreto se emite [utilizando la IU](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) o a través de la [API de REST](/rest/reference/actions#secrets). Este cifrado del lado del cliente ayuda a minimizar los riesgos relacionados con el registro accidental (por ejemplo, bitácoras de exepción y de solicitud, entre otras) dentro de la infraestructura de {% data variables.product.product_name %}. Una vez que se carga el secreto, {% data variables.product.product_name %} puede entonces descifrarlo para que se pueda inyectar en el tiempo de ejecución del flujo de trabajo.

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
- **Audita y rota los secretos registrados**
    - Revisa con frecuencia los secretos que se han registrado para confirmar que aún se requieran. Elimina aquellos que ya no se necesiten.
    - Rota los secretos con frecuencia para reducir la ventana de tiempo en la que un secreto puesto en riesgo es aún válido.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
- **Considera requerir revisiones para el acceso a los secretos**
    - Puedes utilizar revisiones requeridas para proteger los secretos del ambiente. Un job del flujo de trabajo no podrá acceder a los secretos del ambiente hasta que el revisor otorgue la aprobación. Para obtener más información acerca de almacenar secretos en los ambientes o requerir revisiones para ellos, consulta las secciones "[Secretos cifrados](/actions/reference/encrypted-secrets)" y "[Ambientes](/actions/reference/environments)".
{% endif %}

### Utilizar acciones de terceros

Los jobs individuales en un flujo de trabajo pueden interactuar con (y ponerse enriesgo con) otros jobs. Por ejemplo, un job que consulta las variables de mabiente que se utilizan por otro job subsecuente, escribir archivos en un directorio compartido que el job subsecuente procesa, o aún de forma ás directa si interactúa con el conector de Docker e inspecciona a otros contenedores en ejecución y ejecuta comandos en ellos.

Esto significa que el poner en riesgo una sola acción dentro de un flujo de trabajo puede ser bastante significativo, ya que dicha acción en riesgo tendrá acceso a todos los secretos que configuras en tu repositorio, y puede utilizar el `GITHUB_TOKEN` para escribir en el repositorio. Por consiguiente, hay un riesgo significativo en suministrar acciones de repositorios de terceros en {% data variables.product.prodname_dotcom %}. Puedes ayudar a mitigar este riesgo si sigues estas buenas prácticas:

* **Fija las acciones a un SHA de confirmación de longitud completa**

  Fijar una acción a un SHA de confirmación de longitud completa es actualmente la única forma de utilizar una acción como un lanzamiento inmutable. Fijar las acciones a un SHA en particular ayuda a mitigar el riesgo de que un actor malinencionado agregue una puerta trasera al repositorio de la acción, ya que necesitarían generar una colisión de SHA-1 para una carga útil vlálida de un objeto de Git.

  {% if currentVersion ver_lt "enterprise-server@3.1" %}
  {% warning %}

  **Advertencia:** La versión corta del SHA de confirmación no es segura y jamás debería utilizarse para especificar la referencia de Git de una acción. Debido a cómo funcionan las redes de los repositorios, cualquier usuario puede bifurcar el repositorio y cargar una confirmación creada a éste, la cual colisione con el SHA corto. Esto causa que fallen los clones subsecuentes a ese SHA, debido a que se convierte en una confirmación ambigua. Como resultado, cualquier flujo de trabajo que utilice el SHA acortado fallará de inmediato.

  {% endwarning %}
  {% endif %}


* **Audita el código fuente de la acción**

  Asegúrate de que la acción está manejando los secretos y el contenido de tu repositorio como se espera. Por ejemplo, verifica que los secretos no se envíen a hosts no deseados, o que no se registren inadvertidamente.

* **Fija las acciones a una etiqueta únicamente si confías en el creador**

  Aunque fijar el SHA de una confirmación es la opción más segura, especificar una etiqueta es más conveniente y se utiliza ampliamente. Si te gustaría especificar una etiqueta, entonces asegúrate de que confías en los creadores de la acción. La insignia de ‘Verified creator’ en {% data variables.product.prodname_marketplace %} es una señal útil, ya que te indica que la acción viene de un equipo cuya identidad verificó {% data variables.product.prodname_dotcom %}. Nota que este acercamiento sí tiene riesgos aún si confías en el autor, ya que una etiqueta se puede mover o borrar en caso de que un actor malicioso consiga acceso al repositorio que almacena la acción.

### Considerar acceso entre repositorios

{% data variables.product.product_name %} tiene un alcance intencional para un solo repositorio por vez. El `GITHUB_TOKEN` otorga el mismo nivel de acceso de un usuario con permisos de escritura, ya que cualquier usuario con dicho permisopuede acceder a este token si crea o modifica los archivos del flujo de trabajo. Los usuarios tienen permisos específicos para cada repositorio, así que, el hacer que el `GITHUB_TOKEN` para un repositorio otorgue acceso a otro impactaría el modelo de permisos de {% data variables.product.prodname_dotcom %} si no se implementa cuidadosamente. De forma similar, se debe tener cuidado al agregar tokens de autenticación de {% data variables.product.prodname_dotcom %} a un flujo de trabajo, ya que esto también puede afectar el modelo de permisos de {% data variables.product.prodname_dotcom %} al otorgar inadvertidamente un acceso amplio a los colaboradores.

Tenemos [un plan en el itinerario de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap/issues/74) para compatibilizar un flujo que permita acceso entre repositorios dentro de {% data variables.product.product_name %}, pero aún no es una característica compatible. Actualmente, la única forma de realizar interacciones privilegiadas entre repositorios es colocar un token de autenticación de {% data variables.product.prodname_dotcom %} o llave SSH como un secreto dentro del flujo de trabajo. Ya que muchos tipos de tokens de autenticación no permiten el acceso granular a recursos específicos, existe un riesgo significativo en el utilizar el tipo incorrecto de token, ya que puede otorgr un acceso mucho más amplio que lo que se espera.

Esta lista describe los acercamientos recomendatos para acceder alos datos de un repositorio dentro de un flujo de trabjajo, en orden descendente de preferencia:

1. **El `GITHUB_TOKEN`**
    -  Este token tiene un alcance intencional para el repositorio único que invocó el flujo de trabajo, y tiene el mismo nivel de acceso que el de un usuario con acceso de escritura en el repositorio. El token se crea antes de que inicie cada job y caduca cuando dicho job finaliza. Para obtener más información, consulta "[Autenticar con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".
    - El `GITHUB_TOKEN` debe utilizarse cada que sea posible.
2. **Llave de despliegue del repositorio**
    - Las llaves de despliegue son uno de los únicos tipos de credenciales que otorgan acceso de lectura o escritura en un solo repositorio, y pueden utilizarse para interactuar con otro repositorio dentro de un flujo de trabajo. Para obtener más información, consulta la sección "[Administrar las llaves de despliegue](/developers/overview/managing-deploy-keys#deploy-keys)".
    - Nota que las llaves de despliegue solo pueden clonarse y subirse al repositorio utilizando Git, y no pueden utilizarse para interactuar con las API de REST o de GraphQL, así que puede no sean adecuadas para tus necesidades.
3. **Tokens de {% data variables.product.prodname_github_app %}**
    - Las {% data variables.product.prodname_github_apps %} pueden instalarse en los repositorios seleccionados, e incluso tienen permisos granulares en los recursos dentro de ellos. Puedes crear una {% data variables.product.prodname_github_app %} interna a tu organización, instalarla en los repositorios a los que necesites tener acceso dentro de tu flujo de trabajo, y autenticarte como la instalación dentro del flujo de trabajo para acceder a esos repositorios.
4. **Tokens de acceso personal**
    - Jamás debes utilizar tokens de acceso personal desde tu propia cuenta. Estos tokens otorgan acceso a todos los repositorios dentro de las organizaciones a las cuales tienes acceso, así como a los repositorios en tu cuenta de usuario. Esto otorga indirectamente un acceso amplio a todos los usuarios con acceso de escritura en el repositorio en el cual está el flujo de trabajo. Adicionalmente, si sales de una organización más adelante, los flujos de trabajo que utilicen este token fallarán inmediatamente, y depurar este problema puede ser difícil.
    - Si se utiliza un token de acceso personal, debe ser uno que se haya generado para una cuenta nueva a la que solo se le haya otorgado acceso para los repositorios específicos que se requieren para el flujo de trabajo. Nota que este acercamiento no es escalable y debe evitarse para favorecer otras alternativas, tales como las llaves de despliegue.
5. **Llaves SSH en una cuenta de usuario**
    - Los flujos de trabajo nunca deben utilizar las llaves SSH en una cuenta de usuario. De forma similar a los tokens de acceso personal, estas otorgan permisos de lectura/escritura a todos tus repositorios personales así como a todos los repositorios a los que tengas acceso mediante la membercía de organización.  Esto otorga indirectamente un acceso amplio a todos los usuarios con acceso de escritura en el repositorio en el cual está el flujo de trabajo. Si pretendes utilizar una llave SSH porque solo necesitas llevar a cabo clonados de repositorio o subidas a éste, y no necesitas interactuar con una API pública, entonces mejor deberías utilizar llaves de despliegue individuales.

### Fortalecimiento para los ejecutores auto-hospedados

Los ejecutores **hospedados en {% data variables.product.prodname_dotcom %}** ejecutan código dentro de máquinas virtuales aisladas, limpias y efímeras, lo cual significa que no hay forma de poner este ambiente en riesgo de forma persistente, o de obtener acceso de otra forma a más información de la que se colocó en este ambiente durante el proceso de arranque.

Los ejecutores **auto-hospedados** eb {% data variables.product.product_name %} no tienen garantías sobre la ejecución en máquinas virtuales limpias y efímeras, y pueden estar en riesgo persistentemente debido al código no confiable en un flujo de trabajo.

Como resultado, los ejecutores auto-hospedados no deberán [utilizarse casi nunca para repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) en {% data variables.product.product_name %}, ya que cualquier usuario puede abrir solicitudes de extracción contra este repositorio y poner en riesgo el ambiente. De forma similar, ten cuidado cuando utilices ejecutores auto-hospedados en repositorios privados, ya que cualquiera que pueda bifurcar el repositorio y abrir una solicitud de extracción (generalmente aquellos con acceso de lectura en el repositorio) podrá también poner en riesgo el ambiente del ejecutor auto-hospedado, incluyendo el obtener acceso a los secretos y al `GITHUB_TOKEN` más privilegiado que otorga permisos de acceso de escritura en el repositorio.

Cuando se define un ejecutor auto-hospedado a nivel de organización o de empresa, {% data variables.product.product_name %} puede programar flujos de trabajo de repositorios múltiples en el mismo ejecutor. Como consecuencia, si se pone en riesgo la seguridad de estos ambientes, se puede ocasionar un impacto amplio. Para ayudar a reducir el alcance de esta vulneración, puedes crear límites si organizas tus ejecutores auto-hospedados en grupos separados. Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

También deberás considerar el ambiente de las máquinas del ejecutor auto-hospedado:
- ¿Qué información sensible reside en la máquina configurada como el ejecutor auto-hospedado? Por ejemplo, llaves SSH privadas, tokens de acceso a la API, entre otros.
- ¿La máquina tiene acceso a la red para servicios sensibles? Por ejemplo, servicios de metadatos de Azure o de AWS. La cantidad de información sensible en este ambiente debe ser mínima, y siempre debes estar consciente de que cualquier usuario capaz de invocar flujos de trabajo tendrá acceso a este ambiente.

Algunos clientes podrían intentar mitigar estos riesgos parcialmente implementando sistemas que destruyan al ejecutor auto-hospedado automáticamente después de cada ejecución de un job. Sin embargo, este acercamiento podría no ser tan efectivo como se pretende, ya que no hay forma de garantizar que un ejecutor auto-hospedado ejecute solamente un job.

### Auditar eventos de {% data variables.product.prodname_actions %}

Puedes utilizar la bitácora de auditoría para monitorear las tareas administrativas en una organización. La bitácora de auditoría registra el tipo de acción, cuándo se ejecutó, y qué cuenta de usuario la realizó.

Por ejemplo, puedes utilizar la bitácora de auditoría para rastrear el evento `action:org.update_actions_secret`, el cual rastrea los cambios a los secretos de la organización: ![Entradas de la bitácora de auditoría](/assets/images/help/repository/audit-log-entries.png)

Las siguientes tablas describen los eventos de {% data variables.product.prodname_actions %} que puedes encontrar en la bitácora de auditoría. For more information on using the audit log, see "[Reviewing the audit log for your organization](/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)."

#### Eventos para la administración de secretos
| Acción                              | Descripción                                                                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action:org.create_actions_secret`  | Se activa cuando un administrador de la organización [crea un secreto de {% data variables.product.prodname_actions %}](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization). |
| `action:org.remove_actions_secret`  | Se activa cuando un administrador de la organización elimina un secreto de {% data variables.product.prodname_actions %}.                                                                                     |
| `action:org.update_actions_secret`  | Se activa cuando un administrador de la organización actualiza un secreto de {% data variables.product.prodname_actions %}.                                                                                   |
| `action:repo.create_actions_secret` | Se activa cuando un administrador del repositorio [crea un secreto de {% data variables.product.prodname_actions %}](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).       |
| `action:repo.remove_actions_secret` | Se activa cuando un administrador del repositorio elimina un secreto de {% data variables.product.prodname_actions %}.                                                                                        |
| `action:repo.update_actions_secret` | Se activa cuando un administrador del repositorio actualiza un secreto de {% data variables.product.prodname_actions %}.                                                                                      |

#### Eventos para ejecutores auto-hospedados
| Acción                                    | Descripción                                                                                                                                                                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action:org.register_self_hosted_runner`  | Se activa cuando un propietario de la organización [registra un ejecutor auto-hospedado nuevo](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization). |
| `action:org.remove_self_hosted_runner`    | Se activa cuando un propietario de la organización [elimina un ejecutor auto-hospedado](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).              |
| `action:repo.register_self_hosted_runner` | Se activa cuando un administrador del repositorio [registra un ejecutor auto-hospedado nuevo](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).     |
| `action:repo.remove_self_hosted_runner`   | Se activa cuando un administrador del repositorio [elimina un ejecutor auto-hospedado](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).                  |

#### Eventos para grupos de ejecutores auto-hospedados
| Acción                                    | Descripción                                                                                                                                                                                                                                        |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action:org.runner_group_created`         | Se activa cuando un administrador de la organización [crea un grupo de ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization). |
| `action:org.runner_group_removed`         | Se activa cuando un administrador de la organización elimina el grupo de ejecutores auto-hospedados.                                                                                                                                               |
| `action:org.runner_group_renamed`         | Se activa cuando un administrador de la organización renombra un grupo de ejecutores auto-hospedados.                                                                                                                                              |
| `action:org.runner_group_runners_added`   | Se activa cuando un administrador de la organización [agrega un ejecutor auto-hospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).                 |
| `action:org.runner_group_runners_removed` | Se activa cuando un administrador de la organización elimina un ejecutor auto-hospedado de un grupo.                                                                                                                                               |
