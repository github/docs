---
title: Quickstart for configuring your MinIO storage bucket for GitHub Packages
intro: 'Configure your custom MinIO storage bucket for use with {% data variables.product.prodname_registry %}.'
versions:
  ghes: '*'
type: quick_start
topics:
  - Packages
  - Enterprise
  - Storage
shortTitle: Quickstart for MinIO
---

{% data reusables.package_registry.packages-ghes-release-stage %}

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.product.product_location_enterprise %}, you need to prepare your third-party storage solution.

MinIO offers object storage with support for the S3 API and {% data variables.product.prodname_registry %} on your enterprise.

This quickstart shows you how to set up MinIO using Docker for use with {% data variables.product.prodname_registry %} but you have other options for managing MinIO besides Docker. For more information about MinIO, see the official [MinIO docs](https://docs.min.io/).

## 1. Choose a MinIO mode for your needs

| MinIO mode | Optimized for | Storage infrastructure required |
|----|----|----|
| Standalone MinIO (on a single host) | Fast setup |  N/A |
| MinIO as a NAS gateway |  NAS (Network-attached storage)| NAS devices |
| Clustered MinIO (also called Distributed MinIO)|  Data security | Storage servers running in a cluster |

For more information about your options, see the official [MinIO docs](https://docs.min.io/).

{% warning %}

**Warning**: MinIO has announced removal of MinIO Gateways. Starting June 1st, 2022, support and bug fixes for the current MinIO NAS Gateway implementation will only be available for paid customers via their LTS support contract. If you want to continue using MinIO Gateways with {% data variables.product.prodname_registry %}, we recommend moving to MinIO LTS support. For more information, see [Scheduled removal of MinIO Gateway for GCS, Azure, HDFS](https://github.com/minio/minio/issues/14331) in the minio/minio repository.

Other modes of MinIO remain available with standard support.

{% endwarning %}

## 2. Install, run, and sign in to MinIO

1. Set up your preferred environment variables for MinIO.

    These examples use `MINIO_DIR`:
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. Install MinIO.

    ```shell
    $ docker pull minio/minio
    ```
    For more information, see the official "[MinIO Quickstart Guide](https://docs.min.io/docs/minio-quickstart-guide)."

3. Sign in to MinIO using your MinIO access key and secret.

    {% linux %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endlinux %}

    {% mac %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endmac %}

    You can access your MinIO keys using the environment variables:

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. Run MinIO in your chosen mode.

   * Run MinIO using Docker on a single host:

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     For more information, see "[MinIO Docker Quickstart guide](https://docs.min.io/docs/minio-docker-quickstart-guide.html)."

   * Run MinIO using Docker as a NAS gateway:

     This setup is useful for deployments where there is already a NAS you want to use as the backup storage for {% data variables.product.prodname_registry %}.

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio gateway nas /data
     ```

   * Run MinIO using Docker as a cluster. This MinIO deployment uses several hosts and MinIO's erasure coding for the strongest data protection. To run MinIO in a cluster mode, see the "[Distributed MinIO Quickstart Guide](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)."

## 3. Create your MinIO bucket for {% data variables.product.prodname_registry %}

1. Install the MinIO client.  

    ```shell
    $ docker pull minio/mc
    ```

2. Create a bucket with a host URL that {% data variables.product.prodname_ghe_server %} can access.

   * Local deployments example:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc <em>BUCKET-NAME</em>
     ```

     This example can be used for MinIO standalone or MinIO as a NAS gateway.

   * Clustered deployments example:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

## Next steps

To finish configuring storage for {% data variables.product.prodname_registry %}, you'll need to copy the MinIO storage URL:

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

For the next steps, see "[Enabling {% data variables.product.prodname_registry %} with  MinIO](/admin/packages/enabling-github-packages-with-minio)."
