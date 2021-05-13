---
title: Administrar el acceso y la seguridad de los Codespaces
intro: Puedes administrar los repositorios a los cuales pueden acceder los codespaces.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% note %}

**Nota:** El acceso y la seguridad para los {% data variables.product.prodname_codespaces %} se encuentra actualmente en beta y está sujeta a cambios.

{% endnote %}

### Administrar la seguridad y el acceso para tu cuenta de usuario

Cuando habilitas el acceso y la seguridad para un repositorio que pertenezca a tu cuenta de usuario, cualquier codespace que crees para éste tendrá permisos de lectura y escritura en el resto de los repositorios que te pertenezcan. Puedes habilitar el acceso y la seguridad para que no se aplique en ninguno de tus repositorios, para que se aplique en todos ellos, o solo para algunos específicos. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Debajo de "Acceso y seguridad"; selecciona la configuración que quieras para tu cuenta de usurio. ![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. Si eliges "Repositorios seleccionados", selecciona el menú desplegable y luego da clic en un repositorio para permitir que los codespaces de éste accedan al resto de los repositorios que te pertenecen. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de tus repositorios. ![Menú desplegable de "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

### Administrar la seguridad y el acceso para tu organización

Los propietarios de las organizaciones pueden administrar la seguridad y el acceso para los {% data variables.product.prodname_codespaces %}.

Cuando habilitas el acceso y la seguridad para un repositorio que pertenece a tu organización, cualquier codespace que se cree para dicho repositorio tendrá permisos de lectura y escritura en el resto de los repositorios que le pertenezcan a la organización. Puedes habilitar el acceso y la seguridad para que no se aplique en ninguno de los repositorios de la organización, para que se aplique en todos ellos, o solo para algunos específicos. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.click-codespaces %}
5. Para aprobar las [condiciones de servicio del programa de prelanzamientos](/github/site-policy/github-pre-release-program) en nombre de tu organización y habilitar los {% data variables.product.prodname_codespaces %}, debajo de "Permisos de usuario", selecciona **Usuarios seleccionados**, y teclea el nombre de usuario de cada una de las personas a las cuales quieras otorgar acceso. Repite esto para todos los usuarios que quieras que tengan acceso a los codespaces de tu organización.  
   ![Botón radial para los "Usuarios seleccionados"](/assets/images/help/organizations/select-selected-users-radio-button.png)
1. Debajo de "Acceso y seguridad", selecciona la configuración que quieras para tu organización.![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. Si eliges "Repositorios seleccionados"; entonces selecciona el menú desplegable y da clic en un repositorio para permitir que los codespaces de éste accedan al resto de los repositorios que pertenecen a tu organización. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de los repositorios. ![Menú desplegable para los "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
