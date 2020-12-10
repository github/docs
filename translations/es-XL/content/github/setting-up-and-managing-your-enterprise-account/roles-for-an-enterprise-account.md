---
title: Roles para una cuenta de empresa
intro: 'Para controlar el acceso a los parámetros y los datos de tu cuenta de empresa, les puedes otorgar diferentes roles a las personas de la cuenta de empresa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para obtener más información acerca de agregar personas a tu cuenta de empresa, consulta "[Invitar personas a administrar tu cuenta de empresa](/articles/inviting-people-to-manage-your-enterprise-account)".

### Acerca de los roles para una cuenta de empresa

Las cuentas de empresa vienen con un conjunto de roles de administrador que puedes asignarles a los usuarios de tu empresa. Cada rol de administrador se mapea con las funciones comerciales y proporciona permisos para hacer tareas específicas dentro de la cuenta de empresa.

{% data reusables.enterprise-accounts.enterprise-administrators %}

### Propietario de empresa

Los propietarios de empresa tienen control total sobre la cuenta de empresa y pueden hacer todas las acciones, incluidas las siguientes:
- Gestionar administradores
- Agregar organizaciones a la empresa y eliminarlas
- Administrar parámetros de la empresa
- Aplicar políticas en las organizaciones
- Administrar parámetros de facturación

Los propietarios de empresa no pueden acceder a los parámetros o el contenido de la organización, a menos que se conviertan en propietarios de la organización o que se les otorgue acceso directo al repositorio que le pertenece a una organización. Del mismo modo, los propietarios de organizaciones en tu cuenta de empresa no tienen acceso a la cuenta de empresa en sí misma, a menos que los conviertas en propietarios de la empresa.

Puedes agregar a tantos propietarios de empresa como desees para tu cuenta de empresa. Los propietarios de empresa deben tener una cuenta personal en {% data variables.product.prodname_dotcom %}. Como buena práctica, recomendamos que conviertas solo a algunas personas de tu empresa en propietarios de empresa para reducir el riesgo al que se expone tu negocio.

### Miembros de empresa

Los miembros de las organizaciones que le pertenecen a tu cuenta de empresa, automáticamente, se vuelven miembros de la cuenta de empresa. Los miembros pueden colaborar en las organizaciones y pueden ser propietarios de la organización, pero no pueden acceder a los parámetros de la cuenta de empresa ni configurarlos, incluidos los parámetros de facturación.

Las personas de tu cuenta de empresa pueden tener diferentes niveles de acceso a las varias organizaciones que le pertenecen a tu cuenta de empresa y a los repositorios dentro de esas organizaciones. Puedes ver los recursos a los que tiene acceso cada persona. Para obtener más información, consulta "[Ver personas en tu cuenta de empresa](/articles/viewing-people-in-your-enterprise-account)."

Para obtener más información acerca de los permisos al nivel de la organización, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization)".

Las personas con acceso de colaborador externo a los repositorios que le pertenecen a tu organización también se detallan en la pestaña People (Personas) de tu cuenta de empresa, pero no son miembros de la empresa y no tienen ningún acceso a la cuenta de empresa. Para obtener más información sobre los colaboradores externos, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization)".

### Gerente de facturación

Los gerentes de facturación solo tienen acceso a los parámetros de facturación de tu cuenta de empresa. Los gerentes de facturación de tu cuenta de empresa pueden hacer lo siguiente:
- Ver y administrar las licencias de usuario, {% data variables.large_files.product_name_short %} los paquetes y otros parámetros de facturación
- Ver una lista de gerentes de facturación
- Agregar o eliminar otros gerentes de facturación

Los gerentes de facturación no tienen acceso a las organizaciones o repositorios de tu cuenta de empresa y no pueden agregar o eliminar propietarios de empresa. Los gerentes de facturación deben tener una cuenta personal en {% data variables.product.prodname_dotcom %}.

### Leer más

- "[Acerca de las cuentas de empresa](/articles/about-enterprise-accounts)"
