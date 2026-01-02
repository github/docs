---
title: Authenticating ARC to the GitHub API
shortTitle: Authenticate to the API
intro: 'Learn how to authenticate {% data variables.product.prodname_actions_runner_controller %} to the {% data variables.product.company_short %} API.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Actions Runner Controller
defaultPlatform: linux
redirect_from:
  - /actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/authenticating-to-the-github-api
  - /actions/how-tos/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/authenticating-to-the-github-api#deploying-using-personal-access-token-classic-authentication
  - /actions/tutorials/actions-runner-controller/authenticating-arc-to-the-github-api
---

You can authenticate {% data variables.product.prodname_actions_runner_controller %} (ARC) to the {% data variables.product.prodname_dotcom %} API by using a {% data variables.product.prodname_github_app %} or by using a {% data variables.product.pat_v1 %}.

> [!NOTE]
> You cannot authenticate using a {% data variables.product.prodname_github_app %} for runners at the enterprise level. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#about-runner-groups).

## Authenticating ARC with a {% data variables.product.prodname_github_app %}

1. Create a {% data variables.product.prodname_github_app %} that is owned by an organization. For more information, see [AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app). Configure the {% data variables.product.prodname_github_app %} as follows.

   1. For "Homepage URL," enter `https://github.com/actions/actions-runner-controller`.

   1. Under "Permissions," click **Repository permissions**. Then use the dropdown menus to select the following access permissions.
      * **Administration:** Read and write

        > [!NOTE]
        > `Administration: Read and write` is only required when configuring {% data variables.product.prodname_actions_runner_controller %} to register at the repository scope. It is not required to register at the organization scope.

      * **Metadata:** Read-only

   1. Under "Permissions," click **Organization permissions**. Then use the dropdown menus to select the following access permissions.
      * **Self-hosted runners:** Read and write

{% data reusables.actions.arc-app-post-install-steps %}

1. In the menu at the top-left corner of the page, click **Install app**, and next to your organization, click **Install** to install the app on your organization.

1. After confirming the installation permissions on your organization, note the app installation ID. You will use it later. You can find the app installation ID on the app installation page, which has the following URL format:

   `https://{% data variables.product.product_url %}/organizations/ORGANIZATION/settings/installations/INSTALLATION_ID`

{% data reusables.actions.arc-app-post-install-set-secrets %}

## Authenticating ARC with a {% data variables.product.pat_v1 %}

ARC can use {% data variables.product.pat_v1_plural %} to register self-hosted runners.

{% ifversion ghec or ghes %}

> [!NOTE]
> Authenticating ARC with a {% data variables.product.pat_v1 %} is the only supported authentication method to register runners at the enterprise level.

{% endif %}

1. Create a {% data variables.product.pat_v1 %} with the required scopes. The required scopes are different depending on whether you are registering runners at the repository{% ifversion ghec or ghes %}, organization, or enterprise{% else %} or organization{% endif %} level. For more information on how to create a {% data variables.product.pat_v1 %}, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic).

    The following is the list of required {% data variables.product.pat_generic %} scopes for ARC runners.
    * Repository runners: `repo`
    * Organization runners: `admin:org`
    {% ifversion ghec or ghes %}
    * Enterprise runners: `manage_runners:enterprise`
    {% endif %}
1. To create a Kubernetes secret with the value of your {% data variables.product.pat_v1 %}, use the following command.

   {% data reusables.actions.arc-runners-namespace %}

   ```bash copy
   kubectl create secret generic pre-defined-secret \
      --namespace=arc-runners \
      --from-literal=github_token='YOUR-PAT'
   ```

1. In your copy of the [`values.yaml`](https://github.com/actions/actions-runner-controller/blob/master/charts/gha-runner-scale-set/values.yaml) file, pass the secret name as a reference.

   ```yaml
   githubConfigSecret: pre-defined-secret
   ```

   {% data reusables.actions.actions-runner-controller-helm-chart-options %}

## Authenticating ARC with a {% data variables.product.pat_v2 %}

ARC can use {% data variables.product.pat_v2_plural %} to register self-hosted runners.

{% ifversion ghec or ghes %}

> [!NOTE]
> Authenticating ARC with a {% data variables.product.pat_v1 %} is the only supported authentication method to register runners at the enterprise level.

{% endif %}

1. Create a {% data variables.product.pat_v2 %} with the required scopes. The required scopes are different depending on whether you are registering runners at the repository or organization level. For more information on how to create a {% data variables.product.pat_v2 %}, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token).

    The following is the list of required {% data variables.product.pat_generic %} scopes for ARC runners.

    * Repository runners:
      * **Administration:** Read and write

    * Organization runners:
      * **Administration:** Read
      * **Self-hosted runners:** Read and write

1. To create a Kubernetes secret with the value of your {% data variables.product.pat_v2 %}, use the following command.

   {% data reusables.actions.arc-runners-namespace %}

   ```bash copy
   kubectl create secret generic pre-defined-secret \
      --namespace=arc-runners \
      --from-literal=github_token='YOUR-PAT'
   ```

1. In your copy of the [`values.yaml`](https://github.com/actions/actions-runner-controller/blob/master/charts/gha-runner-scale-set/values.yaml) file, pass the secret name as a reference.

   ```yaml
   githubConfigSecret: pre-defined-secret
   ```

   {% data reusables.actions.actions-runner-controller-helm-chart-options %}

## Authenticating ARC with vault secrets

> [!NOTE]
> Vault integration is currently available in public preview with support for Azure Key Vault.

Starting with gha-runner-scale-set version 0.12.0, ARC supports retrieving GitHub credentials from an external vault. Vault integration is configured per runner scale set. This means you can run some scale sets using Kubernetes secrets while others use vault-based secrets, depending on your security and operational requirements.

### Enabling Vault Integration

To enable vault integration for a runner scale set:

1. **Set the `githubConfigSecret` field** in your `values.yaml` file to the name of the secret key stored in your vault. This value must be a string.
1. **Uncomment and configure the `keyVault` section** in your `values.yaml` file with the appropriate provider and access details.
1. **Provide the required certificate** (`.pfx`) to both the controller and the listener. You can do this by:
   *Rebuilding the controller image with the certificate included, or
   *Mounting the certificate as a volume in both the controller and the listener using the `listenerTemplate` and `controllerManager` fields.

### Secret Format

The secret stored in Azure Key Vault must be in JSON format. The structure depends on the type of authentication you are using:

#### Example: GitHub Token

```json
{
  "github_token": "TOKEN"
}
```

#### Example: GitHub App

```json
{
  "github_app_id": "APP_ID_OR_CLIENT_ID",
  "github_app_installation_id": "INSTALLATION_ID",
  "github_app_private_key": "PRIVATE_KEY"
}
```

### Configuring `values.yaml` for Vault Integration

The certificate is stored as a .pfx file and mounted to the container at /akv/cert.pfx. Below is an example of how to configure the keyVault section to use this certificate for authentication:

```yaml
keyVault:
  type: "azure_key_vault"
  proxy:
    https:
      url: "PROXY_URL"
      credentialSecretRef: "PROXY_CREDENTIALS_SECRET_NAME"
    http: {}
    noProxy: []
  azureKeyVault:
    clientId: <AZURE_CLIENT_ID>
    tenantId: <AZURE_TENANT_ID>
    url: <AZURE_VAULT_URL>
    certificatePath: "/akv/cert.pfx"
```

### Providing the Certificate to the Controller and Listener

ARC requires a `.pfx` certificate to authenticate with the vault. This certificate must be made available to both the controller and the listener components during controller installation.
You can do this by mounting the certificate as a volume using the `controllerManager` and `listenerTemplate` fields in your `values.yaml` file:

```yaml
volumes:
  - name: cert-volume
    secret:
      secretName: my-cert-secret
volumeMounts:
  - mountPath: /akv
    name: cert-volume
    readOnly: true

listenerTemplate:
  volumeMounts:
    - name: cert-volume
      mountPath: /akv/certs
      readOnly: true
  volumes:
    - name: cert-volume
      secret:
        secretName: my-cert-secret
```

The code below is an example of a scale set `values.yml` file.

```yaml
listenerTemplate:
  spec:
    containers:
      - name: listener
        volumeMounts:
          - name: cert-volume
            mountPath: /akv
            readOnly: true
    volumes:
      - name: cert-volume
        secret:
          secretName: my-cert-secret
```

## Legal notice

{% data reusables.actions.actions-runner-controller-legal-notice %}
