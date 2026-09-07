When you enable {% data variables.product.prodname_secret_scanning %} for a repository or push commits to a repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents for secrets that match patterns defined by service providers{% ifversion ghes or ghec %} and any custom patterns defined in your enterprise, organization, or repository{% endif %}.

When {% data variables.product.prodname_secret_scanning %} detects a secret, {% data variables.product.prodname_dotcom %} generates an alert.
