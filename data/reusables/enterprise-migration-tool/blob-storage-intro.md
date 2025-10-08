You must store your repository data in a place that {% data variables.product.prodname_dotcom %} can access. If your {% data variables.product.prodname_ghe_server %} instance is behind a firewall, you may need to set up blob storage with an external cloud service.

First, you must set up blob storage with a supported provider. Then, if you're using a cloud provider, you must configure your credentials for the storage provider in the {% data variables.enterprise.management_console %} or {% data variables.product.prodname_cli %}.

{% data reusables.enterprise-migration-tool.supported-blob-storage-providers %}

* Local storage on the GHES instance (GHES **3.16** and later). We recommend using this option with {% data variables.product.prodname_ghos %}.
