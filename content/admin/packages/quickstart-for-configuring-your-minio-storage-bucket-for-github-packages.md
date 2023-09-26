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

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.location.product_location_enterprise %}, you need to prepare your third-party storage solution.

MinIO offers object storage with support for the S3 API and {% data variables.product.prodname_registry %} on your enterprise.

This quickstart shows you how to set up MinIO using Docker for use with {% data variables.product.prodname_registry %} but you have other options for managing MinIO besides Docker. For more information about MinIO, see the official [MinIO docs](https://docs.min.io/).

## 1. Choose a MinIO mode for your needs

| MinIO mode | Optimized for | Storage infrastructure required |
|----|----|----|
| Standalone MinIO (on a single host) | Fast setup |  Not applicable |
| Clustered MinIO (also called Distributed MinIO)|  Data security | Storage servers running in a cluster |

For more information about your options, see the official [MinIO docs](https://docs.min.io/).

## 2. Install, run, and sign in to MinIO

1. Set up your preferred environment variables for MinIO.

    These examples use `MINIO_DIR`:

    ```shell
    export MINIO_DIR=$(pwd)/minio
    mkdir -p $MINIO_DIR
    ```

1. Install MinIO.

    ```shell
    docker pull minio/minio
    ```

    For more information, see the official "[MinIO Quickstart Guide](https://docs.min.io/docs/minio-quickstart-guide)."

1. Sign in to MinIO using your MinIO access key and secret.

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
    echo $MINIO_ACCESS_KEY
    echo $MINIO_SECRET_KEY
    ```

1. Run MinIO in your chosen mode.

   - Run MinIO using Docker on a single host:

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     For more information, see "[MinIO Docker Quickstart guide](https://docs.min.io/docs/minio-docker-quickstart-guide.html)."

   - Run MinIO using Docker as a cluster. This MinIO deployment uses several hosts and MinIO's erasure coding for the strongest data protection. To run MinIO in a cluster mode, see the "[Distributed MinIO Quickstart Guide](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)."

## 3. Create your MinIO bucket for {% data variables.product.prodname_registry %}

1. Install the MinIO client.

    ```shell
    docker pull minio/mc
    ```

1. Create a bucket with a host URL that {% data variables.product.prodname_ghe_server %} can access.

   - Local deployments example:

     ```shell
     export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     docker run minio/mc BUCKET-NAME
     ```

     This example can be used for MinIO standalone.

   - Clustered deployments example:

     ```shell
     export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     docker run minio/mc mb packages
     ```

## Next steps

To finish configuring storage for {% data variables.product.prodname_registry %}, you'll need to copy the MinIO storage URL:

```shell
echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
```

For the next steps, see "[AUTOTITLE](/admin/packages/enabling-github-packages-with-minio)."
