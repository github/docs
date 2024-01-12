---
title: Troubleshooting secret scanning
shortTitle: Troubleshoot secret scanning
intro: 'If you have problems with {% data variables.product.prodname_secret_scanning %}, you can use these tips to help resolve issues.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Troubleshooting
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Detection of pattern pairs

{% data variables.product.prodname_secret_scanning_caps %} will only detect pattern pairs, such as AWS Access Keys and Secrets, if the ID and the secret are found in the same file, and both are pushed to the repository. Pair matching helps reduce false positives since both elements of a pair (the ID and the secret) must be used together to access the provider's resource.

Pairs pushed to different files, or not pushed to the same repository, will not result in alerts. For more information about the supported pattern pairs, see the table in "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns)."

{% ifversion secret-scanning-validity-check %}

## About legacy GitHub tokens

For {% data variables.product.prodname_dotcom %} tokens, we check the validity of the secret to determine whether the secret is active or inactive. This means that for legacy tokens, {% data variables.product.prodname_secret_scanning %} won't detect a {% data variables.product.prodname_ghe_server %} {% data variables.product.pat_generic %} on {% data variables.product.prodname_ghe_cloud %}. Similarly, a {% data variables.product.prodname_ghe_cloud %} {% data variables.product.pat_generic %} won't be found on {% data variables.product.prodname_ghe_server %}.

{% endif %}
{% ifversion secret-scanning-push-protection %}

## Push protection limitations

If push protection did not detect a secret that you think should have been detected, then you should first check that push protection supports the secret type in the list of supported secrets. For further information, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

If your secret is in the supported list, there are various reasons why push protection may not detect it.

- Push protection only blocks leaked secrets on a subset of the most identifiable user-alerted patterns. Contributors can trust security defenses when such secrets are blocked as these are the patterns that have the lowest number of false positives.
- The version of your secret may be old. {% data reusables.secret-scanning.push-protection-older-tokens %}
- The push may be too large, for example, if you're trying to push thousands of large files. A push protection scan may time out and not block a user if the push is too large. {% data variables.product.prodname_dotcom %} will still scan and create alerts, if needed, after the push.
- If the push results in the detection of over five new secrets, we will only show you the first five (we will always show you a maximum of five secrets at one time).
- If a push contains over 1,000 existing secrets (that is, secrets for which alerts have already been created), push protection will not block the push.

{% endif %}
