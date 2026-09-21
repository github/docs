The {% data variables.product.prodname_codeql_cli %} download package is a tar archive containing tools, scripts, and
various {% data variables.product.prodname_codeql %}-specific files. If you don’t have a {% data variables.product.prodname_enterprise %} license then, by
downloading this archive, you are agreeing to the [{% data variables.product.prodname_dotcom %} {% data variables.product.prodname_codeql %} Terms and
Conditions](https://securitylab.github.com/tools/codeql/license).

You should download the {% data variables.product.prodname_codeql %} bundle from https://github.com/github/codeql-action/releases. The bundle contains:

* {% data variables.product.prodname_codeql_cli %} product
* A compatible version of the queries and libraries from https://github.com/github/codeql
* Precompiled versions of all the queries included in the bundle

{% ifversion ghes %}

> [!NOTE]
> For {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }}, we recommend {% data variables.product.prodname_codeql_cli %} version {% data variables.product.codeql_cli_ghes_recommended_version %}.

{% endif %}

You should always use the {% data variables.product.prodname_codeql %} bundle. This ensures compatibility and gives much better performance than a separate download of the {% data variables.product.prodname_codeql_cli %} and checkout of the {% data variables.product.prodname_codeql %} queries. Download the `codeql-bundle-PLATFORM.tar.zst` file for the platform where you will run the CLI. Replace `PLATFORM` with `linux64` for Linux x64, `linux-arm64` for Linux ARM64, `osx64` for macOS, or `win64` for Windows.

The all-platforms bundle (`codeql-bundle.tar.zst` and `codeql-bundle.tar.gz`) is closing down and will stop being published in a future release. Download the per-platform `codeql-bundle-PLATFORM.tar.zst` file instead. In {% data variables.product.prodname_codeql_cli %} 2.27.0 and later, running the CLI from an all-platforms distribution produces a warning.

There are also `tar.gz` variants of the bundle, which are identical to the `tar.zst` variants except compressed using the less efficient gzip algorithm. The only reason to download the `tar.gz` variants is if you are using older decompression tools that do not support the Zstandard compression algorithm.
