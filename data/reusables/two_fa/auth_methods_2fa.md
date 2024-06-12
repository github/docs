{% ifversion ghes %}

### Authentication methods that support 2FA

| Authentication Method | Description  | Two-factor authentication support |
|-----------------------|--------------|-----------------------------------|
| Built-in | Authentication is performed against personal accounts that are stored on the {% data variables.product.prodname_ghe_server %} appliance. | Supported and managed on the {% data variables.product.prodname_ghe_server %} appliance. Organization owners can require 2FA to be enabled for members of the organization. |
| {% ifversion ghes %} |
| Built-in authentication with an identity provider| Authentication is performed against accounts that are stored on the identity provider. | Dependent on the identity provider. |
| {% endif %} |
| LDAP | Allows integration with your company directory service for authentication. | Supported and managed on the {% data variables.product.prodname_ghe_server %} appliance. Organization owners can require 2FA to be enabled for members of the organization. |
| SAML | Authentication is performed on an external identity provider. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %} |
| CAS | Single sign-on service is provided by an external server. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
