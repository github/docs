To add OIDC integration to your cloud deployment workflows, you will need to add the following code changes:

- Grant permission to fetch the token from the {% data variables.product.prodname_dotcom %} OIDC provider:
  - The workflow needs a `permissions` setting with a defined `id-token` value. This lets you fetch the OIDC token from every job in the workflow. If you only need to fetch an OIDC token for a single job, then this permission can be set within that job.
- Request the JSON Web Token (JWT) from the {% data variables.product.prodname_dotcom %} OIDC provider, and present it to your cloud provider to receive an access token:
  - You could use the Actions toolkit to fetch the tokens in your job, or you can use the official action created by your cloud provider to fetch the JWT and receive the access token from the cloud.
