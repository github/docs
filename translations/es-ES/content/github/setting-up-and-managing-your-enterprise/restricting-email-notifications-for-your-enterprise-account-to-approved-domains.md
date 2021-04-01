---
title: Restringir las notificaciones de correo electrónico para tu cuenta empresarial a los dominios aprobados
intro: Puedes prevenir que exista una fuga de la información de tu empresa en las cuentas personales si restringes las notificaciones de correo electrónico sobre la actividad en las organizaciones que le pertenecen a tu cuenta empresarial para que solo se acepten los dominios verificados.
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: Los propietarios de las empresas pueden restringir las notificaciones por correo electrónico para una cuenta empresarial.
topics:
  - empresa
---

### Acerca de las restricciones para tu cuenta empresarial

Cuando restringes las notificaciones por correo electrónico para los dominios verificados, los miembros empresariales solo pueden utilizar la dirección de correo electrónico asociada con un dominio verificado para recibir notificaciones por este medio sobre la actividad en las organizaciones que le pertenezcan a tu cuenta empresarial. Los dominios se pueden heredar desde la cuenta empresarial, o los puedes configurar una organización específica. Para obtener más información sobre las restricciones de correo electrónico para las organizaciones, consulta la sección "[Restringir las notificaciones de correo electrónico a un dominio aprobado](/github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain)".

Si se habilitan las restricciones de correo electrónico para una cuenta empresarial, los propietarios de la organización no las pueden inhabilitar para ninguna organización que pertenezca a la cuenta empresarial. Si ocurre cualquier cambio que dé como resultado que una organización tenga dominios sin verificar, ya se que los herede de una cuenta empresarial que sea propietaria de la organización o que se configuren para la organización específica, las restricciones por correo electrónico se ihabilitarán para dicha organización.

### Restringir las notificaciones por correo electrónico para tu cuenta empresarial

Antes de que puedas restringir las notificaciones por correo electrónico para tu cuenta empresarial, debes verificar por lo menos un dominio para esta. Para obtener más información, consulta la sección "[Verificar el dominio de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. Haz clic en **Save ** (guardar).
