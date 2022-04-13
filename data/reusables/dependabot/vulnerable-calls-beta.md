{% if dependabot-alerts-vulnerable-calls %}

{% note %}

**Notes:** 

- The detection of calls to vulnerable functions by {% data variables.product.prodname_dependabot %} is in beta and subject to change.

- During the beta release, this feature is available only for new Python advisories created _after_ April 7, 2022, and for a prioritized set of critical historic Python advisories. Vulnerable calls are highlighted only on the {% data variables.product.prodname_dependabot_alerts %} pages.

- {% data reusables.gated-features.dependency-vulnerable-calls %}

{% endnote %}

{% endif %}