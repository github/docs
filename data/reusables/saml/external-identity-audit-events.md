| Action | Description
|------------------|-------------------
| `external_identity.deprovision` | Triggered when a user is removed from your Okta group and is subsequently deprovisioned from {% data variables.product.prodname_ghe_managed %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)."
| `external_identity.provision` | Triggered when an Okta user is added to your Okta group and is subsequently provisioned to the mapped team on {% data variables.product.prodname_ghe_managed %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)."
| `external_identity.update` | Triggered when an Okta user's settings are updated. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)."
