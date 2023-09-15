{% ifversion ghes-actions-storage-oidc %}
- If you are using OIDC for the connection to your storage provider, you must expose the following OIDC token service URLs on {% data variables.location.product_location_enterprise %} to the public internet:

  ```text
  https://HOSTNAME/_services/token/.well-known/openid-configuration
  https://HOSTNAME/_services/token/.well-known/jwks
  ```

  This ensures that the storage provider can contact {% data variables.location.product_location_enterprise %} for authentication.
{%- endif %}
