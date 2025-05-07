By default, {% data variables.product.prodname_dotcom %}-hosted runners have access to the public internet. However, you may also want these runners to access resources on your private network, such as a package registry, a secret manager, or other on-premise services.

{% data variables.product.prodname_dotcom %}-hosted runners are shared across all {% data variables.product.prodname_dotcom %} customers. However with private networking, you can configure hosted runners to be exclusively used to connect to your private network and resources while they are running your workflows.
