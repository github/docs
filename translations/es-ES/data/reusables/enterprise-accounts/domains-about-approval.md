{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Después de que apruebas los dominios en tu cuenta empresarial, puedes restringir las notificaciones por correo electrónico para la actividad dentro de esta a los usuarios con direcciones de correo electrónico verificadas dentro de los dominios aprobados o verificados. {% ifversion fpt%}For more information, see "[Restricting email notifications for your enterprise account](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."{% endif %}

{% ifversion fpt%}To receive email notifications, the owner of the user account must verify the email address in on {% data variables.product.product_name %}. Para obtener más información, consulta "[Verificar tu dirección de correo electrónico](/github/getting-started-with-github/verifying-your-email-address)".{% endif %}

Los propietarios de la organización no pueden ver la dirección de correo electrónico ni qué cuenta de usuario está asociada con alguna de ellas desde un dominio aprobado.

Los propietarios de organización también pueden aprobar dominios adicionales para sus organizaciones. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".
