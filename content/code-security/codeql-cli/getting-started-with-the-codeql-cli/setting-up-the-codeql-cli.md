---
title: Setting up the CodeQL CLI
intro: 'To get started with the {% data variables.product.prodname_codeql_cli %}, you need to download and set up the CLI so that it can access the tools and libraries required to create and analyze databases.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/using-the-codeql-cli/getting-started-with-the-codeql-cli
 
---

## Setting up the {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.codeql-cli-version-ghes %}

To run {% data variables.product.prodname_codeql %} commands, you need to set up the CLI so that it can access
the tools, queries, and libraries required to create and analyze databases.

The {% data variables.product.prodname_codeql_cli %} can be set up to support many different use cases and directory
structures. To get started quickly, we recommend adopting a relatively simple
setup, as outlined in the steps below.

If you use Linux, Windows, or macOS version 10.14 ("Mojave") or earlier, simply
follow the steps below. For macOS version 10.15 ("Catalina") or newer, there are additional notes for some of the steps. If you are using macOS
on Apple Silicon (for example, Apple M1), ensure that the [Xcode command-line developer
tools](https://developer.apple.com/downloads/index.action) and [Rosetta 2](https://support.apple.com/en-us/HT211861) are installed.

{% note %}

**Note:** The {% data variables.product.prodname_codeql_cli %} is currently not compatible with non-glibc Linux distributions such as (muslc-based) Alpine Linux.

{% endnote %}

For information about installing the {% data variables.product.prodname_codeql_cli %} in a CI system to create results to display in {% data variables.product.prodname_dotcom %} as code scanning alerts, see "[AUTOTITLE](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

### 1. Download the {% data variables.product.prodname_codeql_cli %} zip package

The {% data variables.product.prodname_codeql_cli %} download package is a zip archive containing tools, scripts, and
various {% data variables.product.prodname_codeql %}-specific files. If you don’t have a {% data variables.product.prodname_enterprise %} license then, by
downloading this archive, you are agreeing to the [{% data variables.product.prodname_dotcom %} {% data variables.product.prodname_codeql %} Terms and
Conditions](https://securitylab.github.com/tools/codeql/license).

You should download the {% data variables.product.prodname_codeql %} bundle from https://github.com/github/codeql-action/releases. The bundle contains:

- {% data variables.product.prodname_codeql_cli %} product
- A compatible version of the queries and libraries from https://github.com/github/codeql
- Precompiled versions of all the queries included in the bundle

{% ifversion ghes or ghae %}

{% note %}
For {% data variables.product.product_name %}{% ifversion ghes %} {{ allVersions[currentVersion].currentRelease }}{% endif %}, we recommend {% data variables.product.prodname_codeql_cli %} version {% data variables.product.codeql_cli_ghes_recommended_version %}.
{% endnote %}

{% endif %}

You should always use the {% data variables.product.prodname_codeql %} bundle as this ensures compatibility and also gives much better performance than a separate download of the {% data variables.product.prodname_codeql_cli %} and checkout of the {% data variables.product.prodname_codeql %} queries. If you will only be running the CLI on one specific platform, download the appropriate `codeql-bundle-PLATFORM.tar.gz` file. Alternatively, you can download `codeql-bundle.tar.gz`, which contains the CLI for all supported platforms.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

#### Download information for macOS "Catalina" (or newer) users

From macOS version 10.15 ("Catalina") onwards you need to ensure that your web browser does not automatically extract zip files. If you use Safari, complete the following steps before downloading the {% data variables.product.prodname_codeql_cli %} zip archive:

1. Open Safari.
1. From the Safari menu, select **Preferences...** or **Settings...** (version 13 "Ventura" onwards).
1. Click the **General** Tab.
1. Ensure the check-box labeled **Open "safe" files after downloading** is unchecked.

### 2. Extract the zip archive

For Linux, Windows, and macOS users (version 10.14 "Mojave", and earlier) simply extract the zip archive.

#### Extraction information for macOS "Catalina" (or newer) users

macOS "Catalina", "Big Sur", "Monterey", or "Ventura" users should run the following commands in the Terminal, where `${extraction-root}` is the path to the directory where you will extract the {% data variables.product.prodname_codeql_cli %} zip archive:

1. `mv ~/Downloads/codeql\*.zip ${extraction-root}`
1. `cd ${extraction-root}`
1. `/usr/bin/xattr -c codeql\*.zip`
1. `unzip codeql\*.zip`

### 3. Launch `codeql`

Once extracted, you can run {% data variables.product.prodname_codeql %} processes by running the `codeql` executable in a couple of ways:

- By executing `<extraction-root>/codeql/codeql`, where `<extraction-root>` is the folder where you extracted the {% data variables.product.prodname_codeql_cli %}
package.
- By adding `<extraction-root>/codeql` to your `PATH`, so that you
can run the executable as just `codeql`.

At this point, you can execute {% data variables.product.prodname_codeql %} commands. For a full list of the {% data variables.product.prodname_codeql_cli %} commands, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual)."

{% note %}

**Note:** If you add `codeql` to your `PATH`, it can be accessed by {% data variables.product.prodname_codeql %} for Visual Studio Code to compile and run queries.
 For more information about configuring VS Code to access the {% data variables.product.prodname_codeql_cli %}, see "[Setting up {% data variables.product.prodname_codeql %} in Visual Studio Code](https://codeql.github.com/docs/codeql-for-visual-studio-code/setting-up-codeql-in-visual-studio-code/#setting-up-codeql-in-visual-studio-code)."

 {% endnote %}

## Testing the {% data variables.product.prodname_codeql_cli %} configuration

After you extract the {% data variables.product.prodname_codeql_cli %} bundle, you can run the following command to verify that the CLI is correctly configured to create and analyze databases:

- `codeql resolve qlpacks` if `/<extraction-root>/codeql` is on the `PATH`.
- `/<extraction-root>/codeql/codeql resolve qlpacks` otherwise.

Extract from successful output:
```shell
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

You should check that the output contains the expected languages and also that the directory location for the qlpack files is correct. The location should be within the extracted {% data variables.product.prodname_codeql_cli %} bundle, shown in the earlier example as `<extraction root>`, unless you are using a checkout of `github/codeql`. If the {% data variables.product.prodname_codeql_cli %} is unable to locate the qlpacks for the expected languages, check that you downloaded the {% data variables.product.prodname_codeql %} bundle and not a standalone copy of the {% data variables.product.prodname_codeql_cli %}.

You can also run `codeql resolve languages` to show which languages are available for database creation. This will list the languages supported by default in your {% data variables.product.prodname_codeql_cli %} package.

{% ifversion codeql-packs %}
(Optional) You can download some "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs)" containing pre-compiled queries you would like to run. To do this, run `codeql pack download <pack-name> [...pack-name]`, where `pack-name` is the name of the pack you want to download. The core query packs are a good place to start. They are:

  - `codeql/cpp-queries`
  - `codeql/csharp-queries`
  - `codeql/go-queries`
  - `codeql/java-queries`
  - `codeql/javascript-queries`
  - `codeql/python-queries`
  - `codeql/ruby-queries`

Alternatively, you can download query packs during the analysis by using the `--download` flag of the `codeql database analyze` command.

{% endif %}

## Generating a token for authentication with {% data variables.product.product_name %}

If you eventually want to upload your results to {% data variables.product.product_name %} to display as code scanning alerts, you will need to generate a {% data variables.product.pat_generic %} with the `security_events` write permission. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

If you have installed the {% data variables.product.prodname_codeql_cli %} in a third-party CI system to create results to display in {% data variables.product.prodname_dotcom %} as code scanning alerts, you can use a {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} to upload results to {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)."

## Checking out the {% data variables.product.prodname_codeql %} source code directly

Some users prefer working with {% data variables.product.prodname_codeql %} query sources directly in order to work on or contribute to the Open Source shared queries. In order to do this, the following steps are recommended. Note that the following instructions are a slightly more complicated alternative to working with {% data variables.product.prodname_codeql %} packages as explained above.

### 1. Download the {% data variables.product.prodname_codeql_cli %} zip

Follow [step 1 from the previous section](#1-download-the-codeql-cli-zip-package).

### 2. Create a new {% data variables.product.prodname_codeql %} directory

Create a new directory where you can place the CLI and any queries and libraries
you want to use. For example, `$HOME/codeql-home`.

The CLI’s built-in search operations automatically look in all of its sibling
directories for the files used in database creation and analysis. Keeping these
components in their own directory prevents the CLI searching unrelated sibling
directories while ensuring all files are available without specifying any
further options on the command line.

### 3. Obtain a local copy of the {% data variables.product.prodname_codeql %} queries

The [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql) contains
the queries and libraries required for {% data variables.product.prodname_codeql %} analysis of all supported languages.
Clone a copy of this repository into `codeql-home`.

By default, the root of the cloned repository will be called `codeql`.
Rename this folder `codeql-repo` to avoid conflicting with the {% data variables.product.prodname_codeql_cli %} that you will extract in step 1. If you use git on the command line, you can
clone and rename the repository in a single step by running
`git clone git@github.com:github/codeql.git codeql-repo` in the `codeql-home` folder.

{% ifversion ghae < 3.6 %}
{% note %}

**Note:** The {% data variables.product.prodname_codeql %} libraries and queries for Go analysis used to live in a separate [{% data variables.product.prodname_codeql %} for Go repository](https://github.com/github/codeql-go/). These have been moved to the `github/codeql` repository. It is no longer necessary to clone the `github/codeql-go` into a separate `codeql-home/codeql-go` folder.

For more information, see the [Relocation announcement](https://github.com/github/codeql-go/issues/741).

{% endnote %}
{% endif %}

{% ifversion codeql-packs %}

Within this repository, the queries and libraries are organized into {% data variables.product.prodname_codeql %}
packs. Along with the queries themselves, {% data variables.product.prodname_codeql %} packs contain important metadata
that tells the {% data variables.product.prodname_codeql_cli %} how to process the query files. For more information,
see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs)."
{% endif %}

{% note %}

**Note:** There are different versions of the {% data variables.product.prodname_codeql %} queries available for different users. Check out the correct version for your use case:

- For the queries that are intended to be used with the latest {% data variables.product.prodname_codeql_cli %} release, check out the branch tagged `codeql-cli/latest`. You should use this branch for databases you’ve built using the {% data variables.product.prodname_codeql_cli %}, fetched from code scanning on {% data variables.product.prodname_dotcom %}, or recently downloaded from {% data variables.product.prodname_dotcom_the_website %}.
- For the most up to date {% data variables.product.prodname_codeql %} queries, check out the `main` branch. This branch represents the very latest version of {% data variables.product.prodname_codeql %}’s analysis.

{% endnote %}

### 4. Extract the zip archive

For Linux, Windows, and macOS users (version 10.14 "Mojave", and earlier) simply extract the zip archive into the directory you created in step 2.

For example, if the path to your copy of the {% data variables.product.prodname_codeql %} repository is `$HOME/codeql-home/codeql-repo`, then extract the CLI into
`$HOME/codeql-home/`.

### 5. Launch `codeql`

See [step 3 from the previous section](#3-launch-codeql).

### 6. Verify your {% data variables.product.prodname_codeql_cli %} setup

{% data variables.product.prodname_codeql_cli %} has subcommands you can execute to verify that you are correctly set up to create and analyze databases:

- Run `codeql resolve languages` to show which languages are available for database creation. This will list the languages supported by default in your {% data variables.product.prodname_codeql_cli %} package.
- Run `codeql resolve qlpacks` to show which {% data variables.product.prodname_codeql %} packs the CLI can find. This will display the names of all the {% data variables.product.prodname_codeql %} packs directly available to the {% data variables.product.prodname_codeql_cli %}. This should include:
- Query packs for each supported language, for example, `codeql/{language}-queries`. These packs contain the standard queries that will be run for each analysis.
- Library packs for each supported language, for example,  `codeql/{language}-all`. These packs contain query libraries, such as control flow and data flow libraries, that may be useful to query writers.
- Example packs for each supported language, for example, `codeql/{language}-examples`. These packs contain useful snippets of {% data variables.product.prodname_codeql %} that query writers may find useful.
- Legacy packs that ensure custom queries and libraries created using older products are compatible with your version of {% data variables.product.prodname_codeql %}.

## Using two versions of the {% data variables.product.prodname_codeql_cli %}

If you want to use the latest {% data variables.product.prodname_codeql %} features to execute queries or {% data variables.product.prodname_codeql %} tests, but also want to prepare databases that are compatible with a specific version of {% data variables.product.prodname_codeql %} code scanning on {% data variables.product.prodname_ghe_server %}, you may need to install two versions of the CLI. The recommended directory setup depends on which versions you want to install:

- If both versions are 2.0.2 (or newer), you can unpack both CLI archives in the same parent directory.
- If at least one of the versions is 2.0.1 (or older), the unpacked CLI archives cannot be in the same parent directory, but they can share the same grandparent directory. For example, if you unpack version 2.0.2 into `$HOME/codeql-home/codeql-cli`, the older version should be unpacked into `$HOME/codeql-older-version/old-codeql-cli`. Here, the common grandparent is the `$HOME` directory.
