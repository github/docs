---
title: Niveles de permiso para un repositorio de cuenta de usuario
intro: 'Un repositorio que es propiedad de una cuenta de usuario tiene dos niveles de permiso: el *del propietario del repositorio* y *de los colaboradores*.'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Sugerencia:** si requieres más acceso pormenorizado de lectura/escritura a un repositorio propiedad de una cuenta de usuario, contempla transferir el repositorio a una organización. Para obtener más información, consulta "[Transferir un repositorio](/articles/transferring-a-repository).

{% endtip %}

#### Acceso de propietario sobre un repositorio propiedad de una cuenta de usuario

El propietario del repositorio tiene control completo del repositorio. Además de todos los permisos admitidos por los colaboradores del repositorio, el propietario del repositorio puede:

- {% if currentVersion == "free-pro-team@latest" %}[Invitar colaboradores](/articles/inviting-collaborators-to-a-personal-repository){% else %}[Agregar colaboradores](/articles/inviting-collaborators-to-a-personal-repository){% endif %}
- Cambiar la visibilidad del repositorio (de [público a privado](/articles/making-a-public-repository-private), o de [privado a público](/articles/making-a-private-repository-public)){% if currentVersion == "free-pro-team@latest" %}
- [Limitar las interacciones con un repositorio](/articles/limiting-interactions-with-your-repository)"{% endif %}
- Fusionar una solicitud de extracción sobre una rama protegida, incluso si no hay revisiones de aprobación
- [Eliminar el repositorio](/articles/deleting-a-repository)
- [Administrar los temas de un repositorio](/articles/classifying-your-repository-with-topics){% if currentVersion == "free-pro-team@latest" %}
- Administrar la configuración de seguridad y análisis. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)".{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [Habilitar el gráfico de dependencia](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository) para un repositorio privado{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- Borrar paquetes. Para obtener más información, consulta la sección "[Eliminar un paquete](/github/managing-packages-with-github-packages/deleting-a-package)".{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
- Crear y editar las tarjetas sociales de un repositorio. Para obtener más información, consulta "[Personalizar la vista preliminar de las redes sociales de tu repositorio](/articles/customizing-your-repositorys-social-media-preview)."
- Convertir al repositorio en una plantilla. Para obtener más información, consulta la sección "[Crear un repositorio plantilla](/articles/creating-a-template-repository)".{% endif %}
- Recibe las [{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de seguridad{% endif %} para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) en un repositorio{% if currentVersion == "free-pro-team@latest" %}
- Ignora las {% data variables.product.prodname_dependabot_alerts %} en tu repositorio. Para obtener más información, consulta la sección "[Visualizar y actualizar las dependencias vulnerables en tu repositiorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)".
- [Administrar el uso de datos para tu repositorio privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository){% endif %}
- [Definir propietarios del código para un repositorio](/articles/about-code-owners)
- [Archivar repositorios](/articles/about-archiving-repositories){% if currentVersion == "free-pro-team@latest" %}
- Crear asesorías de seguridad. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
- Mostrar el botón del patrocinador. Para obtener más información, consulta "[Mostrar un botón de patrocinador en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %}

Solamente hay un **único propietario** de un repositorio propiedad de una cuenta de usuario; este permiso no puede compartirse con otra cuenta de usuario. Para transferir la propiedad de un repositorio a otro usuario, consulta "[Cómo transferir un repositorio](/articles/how-to-transfer-a-repository)."

#### Acceso de colaborador sobre un repositorio propiedad de una cuenta de usuario

{% note %}

**Nota:** en un repositorio privado, los propietarios del repositorio solo pueden otorgar acceso de escritura a los colaboradores. Los colaboradores no pueden tener acceso de solo lectura a los repositorio propiedad de una cuenta de usuario.

{% endnote %}

Los colaboradores de un repositorio personal pueden:

- Subir (escribir), extraer (lectura) y bifurcar (copiar) el repositorio
- Crear, aplicar y eliminar etiquetas e hitos
- Abrir, cerrar, volver a abrir y asignar propuestas
- Editar y eliminar comentarios en confirmaciones, solicitudes de extracción y propuestas
- Marcar una propuesta o solicitud de extracción como un duplicado. Para obtener más información, consulta [Acerca de duplicar propuestas y solicitudes de extracción](/articles/about-duplicate-issues-and-pull-requests)."
- Open, merge and close pull requests
- Aplicar cambios sugeridos a solicitudes de extracción. Para obtener más información, consulta "[Incorporar opiniones en tu solicitud de extracción](/articles/incorporating-feedback-in-your-pull-request)."
- Enviar solicitudes de extracción desde bifurcaciones del repositorio {% if currentVersion == "free-pro-team@latest" %}
- Publicar, ver e instalar paquetes. Para obtener más información, consulta la sección "[Publicar y administrar paquetes](/github/managing-packages-with-github-packages/publishing-and-managing-packages)".{% endif %}
- Crear y editar Wikis
- Crear y editar lanzamientos. Para obtener más información, consulta "[Gestionar los lanzamientos en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository).
- Eliminarse como colaboradores del repositorio
- Enviar una revisión sobre una solicitud de extracción que afectará su capacidad de fusión
- Actuar como un propietario de código designado para un repositorio. Para obtener más información, consulta "[Acerca de los propietarios del código](/articles/about-code-owners)."
- Bloquear una conversación. Para obtener más información, consulta "[Bloquear conversaciones](/articles/locking-conversations)."{% if currentVersion == "free-pro-team@latest" %}
- Informar contenido ofensivo a {% data variables.contact.contact_support %}. Para obtener más información, consulta "[Informar abuso o spam](/articles/reporting-abuse-or-spam)".{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
- Transferir una propuesta a un repositorio diferente. Para obtener más información, consulta "[Transferir una propuesta a otro repositorio](/articles/transferring-an-issue-to-another-repository)."{% endif %}

### Leer más

- "[Invitar colaboradores a un repositorio personal](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization)"
