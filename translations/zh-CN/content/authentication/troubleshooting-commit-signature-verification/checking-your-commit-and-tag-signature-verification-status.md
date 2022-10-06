---
title: Checking your commit and tag signature verification status
intro: 'You can check the verification status of your commit and tag signatures on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Check verification status
---
## Checking your commit signature verification status

1. On {% data variables.product.product_name %}, navigate to your pull request.
{% data reusables.repositories.review-pr-commits %}
3. Next to your commit's abbreviated commit hash, there is a box that shows whether your commit signature is verified{% ifversion fpt or ghec %}, partially verified,{% endif %} or unverified.
![Signed commit](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. To view more detailed information about the commit signature, click **Verified**{% ifversion fpt or ghec %}, **Partially verified**,{% endif %} or **Unverified**.
  GPG signed commits will show the ID of the key that was used.
  ![Verified GPG signed commit](/assets/images/help/commits/gpg-signed-commit_verified_details.png)
{% ifversion ssh-commit-verification %}
  SSH signed commits will show the signature of the public key that was used.
  ![Verified SSH signed commit](/assets/images/help/commits/ssh-signed-commit-verified-details.png)
{% endif %}

## Checking your tag signature verification status

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. At the top of the Releases page, click **Tags**.
![Tags page](/assets/images/help/releases/tags-list.png)
3. Next to your tag description, there is a box that shows whether your tag signature is verified{% ifversion fpt or ghec %}, partially verified,{% endif %} or unverified.
![verified tag signature](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. To view more detailed information about the tag signature, click **Verified**{% ifversion fpt or ghec %}, **Partially verified**,{% endif %} or **Unverified**. 
![Verified signed tag](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## Further reading

- "[About commit signature verification](/articles/about-commit-signature-verification)"
- "[Signing commits](/articles/signing-commits)"
- "[Signing tags](/articles/signing-tags)"
