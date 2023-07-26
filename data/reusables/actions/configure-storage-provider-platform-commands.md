- Azure Blob Storage:

  ```shell copy
  ghe-config secrets.actions.storage.blob-provider "azure"
  ```

- Amazon S3:

  ```shell copy
  ghe-config secrets.actions.storage.blob-provider "s3"
  ```

{%- ifversion actions-ghes-gcp-storage %}
- Google Cloud Storage:
  
    ```shell copy
    ghe-config secrets.actions.storage.blob-provider "gcs"
    ```

{%- endif %}
