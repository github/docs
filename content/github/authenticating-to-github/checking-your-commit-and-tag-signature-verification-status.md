---
title: Checking your commit and tag signature verification status
intro: 'You can check the verification status of your commit and tag signatures on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Checking your commit signature verification status

1. On {% data variables.product.product_name %}, navigate to your pull request.
{% data reusables.repositories.review-pr-commits %}
3. Next to your commit's abbreviated commit hash, there is a box that shows whether your commit signature is verified or unverified.
![Signed commit](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. To view more detailed information about the commit signature, click **Verified** or **Unverified**.
![Verified signed commit](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

If your commit signature is unverified, you can learn more about why by clicking the **Unverified** box.
![Unverified signed commit](/assets/images/help/commits/gpg-signed-commit-unverified-details.png)

### Checking your tag signature verification status

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. At the top of the Releases page, click **Tags**.
![Tags page](/assets/images/help/releases/tags-list.png)
3. Next to your tag description, there is a box that shows whether your tag signature is verified or unverified.
![verified tag signature](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. To view more detailed information about the tag signature, click **Verified** or **Unverified**. If your tag signature is unverified, you can learn more about why by clicking the **Unverified** box.
![Verified signed tag](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### Further reading

- "[About commit signature verification](/articles/about-commit-signature-verification)"
- "[Signing commits](/articles/signing-commits)"
- "[Signing tags](/articles/signing-tags)"
