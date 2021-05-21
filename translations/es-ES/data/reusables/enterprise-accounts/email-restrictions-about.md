When you restrict email notifications, enterprise members can only use an email address in a verified or approved domain to receive email notifications about activity in organizations owned by your enterprise account.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

Los dominios se pueden heredar desde la cuenta empresarial, o los puedes configurar una organización específica. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)" and "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

{% data reusables.notifications.email-restrictions-verification %}

Si se habilitan las restricciones de correo electrónico para una cuenta empresarial, los propietarios de la organización no las pueden inhabilitar para ninguna organización que pertenezca a la cuenta empresarial. If changes occur that result in an organization having no verified or approved domains, either inherited from an enterprise account that owns the organization or for the specific organization, email restrictions will be disabled for the organization.
