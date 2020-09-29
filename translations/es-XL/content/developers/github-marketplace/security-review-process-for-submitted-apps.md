---
title: Proceso de revisión de seguridad para las apps emitidas
intro: 'El equipo de seguridad de GitHub revisa todas las apps emitidas a {% data variables.product.prodname_marketplace %} para garantizar que cumplen los requisitos de seguridad. Sigue estas mejores prácticas para estar preparado para el proceso de revisión.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
versions:
  free-pro-team: '*'
---



Después de que hayas emitido tu app para su aprobación, el equipo de seguridad de GitHub te solicitará que completes un cuestionario de seguridad acerca de tu app y de un programa general de seguridad. Como parte de la revisión, tendrás la opción de prorporcionar documetnación para apoyar tus respuestas. Debes emitir dos documentos necesarios para que tu app se apruebe en {% data variables.product.prodname_marketplace %}: un [plan de respuesta a incidentes](#incident-response-plan) y un [flujo de trabajo para administración de vulnerabilidades](#vulnerability-management-workflow).


### Mejores prácticas de seguridad

Sigue estas mejores prácticas para tener éxito en tu revisión de seguridad y para proporcionar una experiencia de usuario segura.

#### Autorización, autenticación, y control de accesos

Te recomendamos emitir una GitHub App en vez de una App de OAuth. {% data reusables.marketplace.github_apps_preferred %}. Consulta la sección "[Diferencias entre las GitHub Apps y las Apps de OAuth](/apps/differences-between-apps/)" para encontrar más detalles.
- Las apps deben utilizar el "[principio del menor privilegio necesario](https://en.wikipedia.org/wiki/Principle_of_least_privilege)" y únicamente deben solicitar los alcances de OAuth y los permisos de GitHub Apps que la app necesite para llevar a cabo su funcionalidad prevista.
- Las apps deben proporcionar a los clientes una forma de borrarla de sus cuentas sin tener que mandar un correo electrónico o llamar al personal de soporte.
- Las apps no deben compartir tokens entre las diferentes implementaciones de la misma. Por ejemplo, una app de escritorio debe tener un token separado de aquella que es basada en web. Los tokens individuales permiten a cada app solicitar el acceso necesario a los recursos de GitHub por separado.
- Diseña tu app con diferentes roles de usuario, dependiendo de la funcionalidad que necesita cada tipo de usuario. Por ejemplo, un usuario estándar no debe tener acceso a la funcionalidad de administrador, y los gerentes de facturación podrían no requerir acceso de carga al código de un repositorio.
- Tu app no debe compartir cuentas de servicio tales como el correo electrónico o los servicios de base de datos para administrar tu servicio de SaaS.
- Todos los servicios que se utilicen en tu app deben contar con credenciales únicas de nombre de inicio de sesión y contraseña.
- El acceso privilegiado de administrador para la infraestructura de alojamiento productiva solo se deberá otorgar a los ingenieros y empleados con obligaciones administrativas.
- Las apps no pueden utilizar tokens de acceso personal para autenticarse, y deben hacerlo como una [App de OAuth](/apps/about-apps/#about-oauth-apps) o una [GitHub App](/apps/about-apps/#about-github-apps):
  - Las Apps de OAuth deben autenticarse utilizando un [Token de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).
  - Las GitHub Apps deben autenticarse utilizando ya sea un [Token Web de JSON (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), un [Token de OAuth](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/), o un[token de acceso a la instalación](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

#### Protección de datos

- Las apps deben cifrar los datos que transfieran a través del internet público utilizando HTTPS, con SSH o con un certificado TLS válido para Git.
- Las apps deben almacenar las llaves secretas de ID y de cliente de manera segura. Te recomendamos almacenarlas como [variables de ambiente](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables).
- Las apps deben borrar todos los datos del usuario de GitHub en los primeros 30 días de recibir la solicitud de dicho cliente, o dentro de los primeros 30 días del final de la relación legal del usuario para con GitHub.
- Las apps no pueden requerir que el usuario proporcione su contraseña de GitHub.
- Las apps deben cifrar los tokens, ID de cliente y secretos de cliente.

#### Registro y monitoreo

- Las apps deben tener la capacidad de registro y monitoreo. Las bitácoras de la app deben conservarse por lo menos por 30 días y archivarse por lo menos durante un año. Un log de seguirdad debería incluir:
  - Eventos de autenticación y autorización
  - Cambios a la configuración del servicio
  - Escritura y lectura de objetos
  - Todos los cambios de permisos de usuarios y grupos
  - Elevación de rol a aquel de administrador
  - Marca de tiempo consistente para cada evento
  - Usuarios orgien, direcciones IP, y/o nombres de host para todas las acciones registradas

#### Flujo de trabajo de respuesta a incidentes

- Para asociarte con GitHub se te solicita tener un [plan de respuesta a incidentes](#incident-response-plan) activo antes de emitir tu listado de app de {% data variables.product.prodname_marketplace %}.
- Te recomendamos tener un equipo de respuesta a incidentes para operaciones y de seguridad en tu compañía en vez de utilizar un proveedor tercero.
- Debes poder notificar a Github dentro de las primeras 24 horas de que se confirme un incidente.
- Debes familiarizarte con las secciones 3.7.5 - 3.7.5.6 del [Acuerdo de Desarrollador de {% data variables.product.prodname_marketplace %}](/github/site-policy/github-marketplace-developer-agreement#3-restrictions-and-responsibilities), el cual incluye detalles adicionales sobre los requisitos del flujo de trabajo para respuesta a incidentes.

#### Administración de vulnerabilidades y flujo de trabajo de parchado

- Debes llevar a cabo escaneos de vulnerabilidades frecuentes para la infraestructura productiva.
- Debes clasificar los resultados de los escaneos de vulnerabilidades y definir un tiempo en el que acuerdes remediar dichas vulnerabilidades.
- Debes familiarizarte con la sección 3.7.3 del [Acuerdo de Desarrollador de {% data variables.product.prodname_marketplace %}](/github/site-policy/github-marketplace-developer-agreement#3-restrictions-and-responsibilities), la cual incluye detalles adicionales sobre los requisitos de la administración de vulnerabilidades y de los flujos de trabajo del parchado.

### Documentación del programa de seguridad

Durante la revisión de seguridad de Marketplace, se te solicitará emitir tu plan de respuesta a incidentes y el flujo de trabajo de la administración de vulnerabilidades. Cada documento debe incluir una declaración con la marca de la compañía y con la firma y fecha por parte de la gerencia.

#### Plan de respuesta a incidentes
Tu documentación del plan de respuesta a incidentes debe incluir el proceso actual que sigue tu compañía, quién es el responsable, y la persona a contactar o de la cual esperar el contacto en caso de que ocurra un incidente. La "[Guía de Seguridad para Gestión de Incidentes del NIST](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf)" es un excelente ejemplo de un documento que cubre los temas generales sobre la respuesta a incidentes. La sección 2.3 "Creación de Políticas, Planes y Procedimientos para la Respuesta a Incidentes" cubre específicamente la política. Otro excelente ejemplo es la "[Política de Respuesta a Filtraciones de Datos del SANS](https://www.sans.org/security-resources/policies/general/pdf/data-breach-response)".

#### Flujo de trabajo para la administración de vulnerabilidades
Tu documentación del flujo de trabajo para la administración de vulnerabilidades debe incluir los procesos actuales que sigue tu compañía para la administración de vulnerabilidades, así como para el proceso de parchado que utiliza. Si no tienes un programa de administración de vulnerabilidades completo, sería de gran ayuda el comenzar a crear un proceso de parchado. Para obtener orientación sobre la creación de una política de administración de parches, lee el artículo "[Establecer una política de administración de parches](https://www.techrepublic.com/blog/it-security/establish-a-patch-management-policy-87756/)".

{% note %}

**Nota:** No se espera que los documentos del flujo de trabajo para respuesta a incidentes y de administración de vulnerabilidades constituyan una documentación de programación o una política formal masivos. Es más valioso tener una o dos páginas acerca de lo que haces que una plantilla de política extensa.

{% endnote %}

#### Cuestionario del programa de seguridad de GitHub Marketplace

Durante el proceso de emisión de la app, nuestro equipo de incorporación de {% data variables.product.prodname_marketplace %} también te enviará un cuestionario solicitando información acerca de tus prácticas de seguridad. Este documento servirá como un registro escrito que da fe de:

- El método de autenticación y alcances que requiere tu app.
- Que no estás solicitando más alcances o acceso a {% data variables.product.product_name %} de lo que tu app requiere para llevar a cabo su funcionalidad esperada, tomando en consideración las limitaciones de OAuth y el uso de las {% data variables.product.prodname_github_app %}.
- La utilización de cualquier servicio o infraestructura de terceros, tales como SaaS, PaaS, o LaaS.
- Que existe un procedimiento de respuesta a incidentes.
- El método de tu app para gestionar llaves/tokens.
- Que existe una política y proceso de divulgación responsables, o bien, planes para implementarla en los próximos seis meses.
- Tu programa o flujo de trabajo de administración de vulnerabilidades.
- Que tienes capacidades de registro y monitoreo. También debes proprocionar evidencia de que cualquier bitácora relevante de la app se mantiene por lo menos por 30 días y se archiva por lo menos por un año.
