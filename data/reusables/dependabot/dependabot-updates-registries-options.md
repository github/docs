You use the following options to specify access settings. Registry settings must contain a `type` and a `url`, and typically either a `username` and `password` combination or a `token`.

| Parameters | Purpose |
|:---|:---|
| `REGISTRY_NAME` | **Required:** Defines an identifier for the registry. |
| `type`                     | **Required:** Identifies the type of registry.|
| Authentication details                 | **Required:** The parameters supported for supplying authentication details vary for registries of different types. |
| `url`                      | **Required:** The URL to use to access the dependencies in this registry. The protocol is optional. If not specified, `https://` is assumed. {% data variables.product.prodname_dependabot %} adds or ignores trailing slashes as required. |
| `replaces-base`            | If the boolean value is `true`, {% data variables.product.prodname_dependabot %} resolves dependencies using the specified `url` rather than the base URL of that ecosystem. |
