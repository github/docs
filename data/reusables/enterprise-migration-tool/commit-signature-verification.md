Commit signatures are verified against the signing keys known to the destination, so verification does not always carry over when you migrate.

* **Commits signed by {% data variables.product.company_short %}.** Commits created through the web interface are signed with a web commit signing key for the deployment where the commit was made. {% data variables.product.prodname_dotcom_the_website %}, each {% data variables.product.prodname_ghe_server %} instance, and {% data variables.enterprise.data_residency_site %} use different keys. Keys can also differ between {% data variables.enterprise.data_residency_site %} regions.

  As a result, migrated web commits may show as "Unverified" at the destination.

  * On {% data variables.product.prodname_ghe_server %}, web commit signing is optional. A site administrator configures the key and the account that holds it, so an administrator can add a key.
  * On {% data variables.product.prodname_dotcom_the_website %} and {% data variables.enterprise.data_residency_site %}, the account is owned by {% data variables.product.company_short %}. If your destination is one of these platforms and your commits are affected, contact {% ifversion fpt %}{% data variables.contact.contact_support_page %}{% else %}{% data variables.contact.contact_ent_support %}{% endif %}.

* **Commits signed by users.** Users' GPG and SSH signing keys are not migrated. For their migrated commits to show as "Verified", users must:

  * Add their signing key to their account at the destination
  * Verify the commit's committer email address on that account

  After users complete both steps, the "Verified" status is restored on commits that have already been migrated. You do not need to migrate again. See [AUTOTITLE](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account), [AUTOTITLE](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account), and [AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key). 

Migrations between organizations within {% data variables.product.prodname_dotcom_the_website %} are not affected, because the source and the destination use the same web commit signing key, and users' own signing keys remain on their accounts.

For more information about how verification works, see [AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification).
