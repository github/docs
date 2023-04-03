---
title: Creating CodeQL databases
intro: 'You can build a {% data variables.product.prodname_codeql %} database containing the data needed to query your code.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---
<!--The CodeQL CLI man pages include a link to a section in this article. If you rename this article,
make sure that you also update the MS short link: https://aka.ms/codeql-docs/indirect-tracing.-->

{% data reusables.codeql-cli.codeql-site-migration-note %}

## About creating {% data variables.product.prodname_codeql %} databases

{% data reusables.code-scanning.codeql-cli-version-ghes %}

Before you analyze your code using {% data variables.product.prodname_codeql %}, you need to create a {% data variables.product.prodname_codeql %} database containing all the data required to run queries on your code. You can create {% data variables.product.prodname_codeql %} databases yourself using the {% data variables.product.prodname_codeql_cli %}, or download them from {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.product.prodname_codeql %} analysis relies on extracting relational data from your code, and using it to build a [{% data variables.product.prodname_codeql %} database](https://codeql.github.com/docs/codeql-overview/codeql-glossary/#codeql-database). {% data variables.product.prodname_codeql %} databases contain all of the important information about a codebase, which can be analyzed by executing {% data variables.product.prodname_codeql %} queries against it. {% data variables.product.prodname_dotcom %} creates and stores {% data variables.product.prodname_codeql %} databases for a large number of open-source projects. For more information, see "[Downloading {% data variables.product.prodname_codeql %} databases from {% data variables.product.prodname_dotcom_the_website %}](/code-security/codeql-cli/using-the-codeql-cli/creating-codeql-databases#downloading-databases-from-githubcom)."

You can also create {% data variables.product.prodname_codeql %} databases yourself using the {% data variables.product.prodname_codeql_cli %}. Before you generate a {% data variables.product.prodname_codeql %} database, you need to:

- Install and set up the {% data variables.product.prodname_codeql_cli %}. For more information, see "[Getting started with the {% data variables.product.prodname_codeql_cli %}](/code-security/codeql-cli/using-the-codeql-cli/getting-started-with-the-codeql-cli)."
- Check out the version of your codebase you want to analyze. The directory should be ready to build, with all dependencies already installed.

For information about using the {% data variables.product.prodname_codeql_cli %} in a third-party CI system to create results to display in {% data variables.product.prodname_dotcom %} as code scanning alerts, see [Configuring {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system). For information about enabling {% data variables.product.prodname_codeql %} code scanning using {% data variables.product.prodname_actions %}, see [Setting up code scanning for a repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository).

## Running `codeql database create`

{% data variables.product.prodname_codeql %} databases are created by running the following command from the checkout root of your project:

```
codeql database create <database> --language=<language-identifier>
```

You must specify:

- `<database>`: a path to the new database to be created. This directory will be created when you execute the command—you cannot specify an existing directory.
- `--language`: the identifier for the language to create a database for. When used with `--db-cluster`, the option accepts a comma-separated list, or can be specified more than once. {% data variables.product.prodname_codeql %} supports creating databases for the following languages:

| Language | Identifier
|------------------|-------------------
| C/C++ | `cpp`
| C# | `csharp`
| Go | `go`
| Java{% ifversion codeql-kotlin-beta %}/Kotlin{% endif %} | `java`
| JavaScript/TypeScript | `javascript`
| Python | `python`
| Ruby | `ruby`

{% data reusables.code-scanning.beta-kotlin-support %}
{% data reusables.code-scanning.beta-ruby-support %}

You can specify additional options depending on the location of your source file, if the code needs to be compiled, and if you want to create {% data variables.product.prodname_codeql %} databases for more than one language:

- `--source-root`: the root folder for the primary source files used in database creation. By default, the command assumes that the current directory is the source root—use this option to specify a different location.
- `--db-cluster`: use for multi-language codebases when you want to create databases for more than one language.
- `--command`: used when you create a database for one or more compiled languages, omit if the only languages requested are Python and JavaScript. This specifies the build commands needed to invoke the compiler. Commands are run from the current folder, or `--source-root` if specified. If you don’t include a `--command`, {% data variables.product.prodname_codeql %} will attempt to detect the build system automatically, using a built-in autobuilder.
- `--no-run-unnecessary-builds`: used with `--db-cluster` to suppress the build command for languages where the {% data variables.product.prodname_codeql_cli %} does not need to monitor the build (for example, Python and JavaScript/TypeScript).

You can specify extractor options to customize the behavior of extractors that create {% data variables.product.prodname_codeql %} databases. For more information, see
"[Extractor options](/code-security/codeql-cli/using-the-codeql-cli/extractor-options)."

For full details of all the options you can use when creating databases, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/database-create/)."

## Progress and results

Errors are reported if there are any problems with the options you have specified. For interpreted languages, the extraction progress is displayed in the console—for each source file, it reports if extraction was successful or if it failed. For compiled languages, the console will display the output of the build system.

When the database is successfully created, you’ll find a new directory at the path specified in the command. If you used the `--db-cluster` option to create more than one database, a subdirectory is created for each language. Each {% data variables.product.prodname_codeql %} database directory contains a number of subdirectories, including the relational data (required for analysis) and a source archive—a copy of the source files made at the time the database was created—which is used for displaying analysis results.

## Creating databases for non-compiled languages

The {% data variables.product.prodname_codeql_cli %} includes extractors to create databases for non-compiled languages—specifically, JavaScript (and TypeScript), Python, and Ruby. These extractors are automatically invoked when you specify JavaScript, Python, or Ruby as the `--language` option when executing `database create`. When creating databases for these languages you must ensure that all additional dependencies are available.

   {% note %}

   **Note:** When you run `database create` for JavaScript, TypeScript, Python, and Ruby, you should not specify a `--command` option. Otherwise this overrides the normal extractor invocation, which will create an empty database. If you create databases for multiple languages and one of them is a compiled language, use the `--no-run-unnecessary-builds` option to skip the command for the languages that don’t need to be compiled.

   {% endnote %}

### JavaScript and TypeScript

Creating databases for JavaScript requires no additional dependencies, but if the project includes TypeScript files, you must install Node.js 6.x or later. In the command line you can specify `--language=javascript` to extract both JavaScript and TypeScript files:

```
codeql database create --language=javascript --source-root <folder-to-extract> <output-folder>/javascript-database
```

Here, we have specified a `--source-root` path, which is the location where database creation is executed, but is not necessarily the checkout root of the codebase.

By default, files in `node_modules` and `bower_components` directories are not extracted.

### Python

When creating databases for Python you must ensure:

- You have Python 3 installed and available to the {% data variables.product.prodname_codeql %} extractor.
- You have the version of Python used by your code installed.
- You have access to the [pip](https://pypi.org/project/pip/) packaging management system and can install any packages that the codebase depends on.
- You have installed the [virtualenv](https://pypi.org/project/virtualenv/) pip module.

In the command line you must specify `--language=python`. For example:

```
codeql database create --language=python <output-folder>/python-database
```

This executes the `database create` subcommand from the code’s checkout root, generating a new Python database at `<output-folder>/python-database`.

### Ruby

Creating databases for Ruby requires no additional dependencies. In the command line you must specify `--language=ruby`. For example:

```
codeql database create --language=ruby --source-root <folder-to-extract> <output-folder>/ruby-database
```

Here, we have specified a `--source-root` path, which is the location where database creation is executed, but is not necessarily the checkout root of the codebase.

## Creating databases for compiled languages

For compiled languages, {% data variables.product.prodname_codeql %} needs to invoke the required build system to generate a database, therefore the build method must be available to the CLI.

### Detecting the build system

   {% note %}

   **Note:** {% data variables.product.prodname_codeql %} analysis for Kotlin is currently in beta. During the beta, analysis of Kotlin code, and the accompanying documentation, will not be as comprehensive as for other languages.

   {% endnote %}

The {% data variables.product.prodname_codeql_cli %} includes autobuilders for C/C++, C#, Go, and Java code. {% data variables.product.prodname_codeql %} autobuilders allow you to build projects for compiled languages without specifying any build commands. When an autobuilder is invoked, {% data variables.product.prodname_codeql %} examines the source for evidence of a build system and attempts to run the optimal set of commands required to extract a database.

An autobuilder is invoked automatically when you execute `codeql database create` for a compiled `--language` if don’t include a
`--command` option. For example, for a Java codebase, you would simply run:

```
codeql database create --language=java <output-folder>/java-database
```

If a codebase uses a standard build system, relying on an autobuilder is often the simplest way to create a database. For sources that require non-standard build steps, you may need to explicitly define each step in the command line.

   {% note %}

   **Notes:**

   - If you are building a Go database, install the Go toolchain (version 1.11 or later) and, if there are dependencies, the appropriate dependency manager (such as [dep](https://golang.github.io/dep/)).
   - The Go autobuilder attempts to automatically detect code written in Go in a repository, and only runs build scripts in an attempt to fetch dependencies. To force {% data variables.product.prodname_codeql %} to limit extraction to the files compiled by your build script, set the environment variable `CODEQL_EXTRACTOR_GO_BUILD_TRACING=on` or use the `--command` option to specify a build command.

   {% endnote %}

### Specifying build commands

The following examples are designed to give you an idea of some of the build commands that you can specify for compiled languages.

   {% note %}

   **Note:** The `--command` option accepts a single argument—if you need to use more than one command, specify `--command` multiple times. If you need to pass subcommands and options, the whole argument needs to be quoted to be interpreted correctly.

   {% endnote %}

- C/C++ project built using `make`:

   ```
   codeql database create cpp-database --language=cpp --command=make
   ```

- C# project built using `dotnet build`:

   It is a good idea to add `/t:rebuild` to ensure that all code will be built, or do a prior `dotnet clean` (code that is not built will not be included in the {% data variables.product.prodname_codeql %} database):

   ```
   codeql database create csharp-database --language=csharp --command='dotnet build /t:rebuild'
   ```

- Go project built using the `CODEQL_EXTRACTOR_GO_BUILD_TRACING=on` environment variable:

   ```
   CODEQL_EXTRACTOR_GO_BUILD_TRACING=on codeql database create go-database --language=go
   ```

- Go project built using a custom build script:

   ```
   codeql database create go-database --language=go --command='./scripts/build.sh'
   ```

- Java project built using Gradle:

   ```
   # Use `--no-daemon` because a build delegated to an existing daemon cannot be detected by CodeQL:
   codeql database create java-database --language=java --command='gradle --no-daemon clean test'
   ```

- Java project built using Maven:

   ```
   codeql database create java-database --language=java --command='mvn clean install'
   ```

- Java project built using Ant:

   ```
   codeql database create java-database --language=java --command='ant -f build.xml'
   ```

- Project built using Bazel:

   ```
   # Navigate to the Bazel workspace.

   # Before building, remove cached objects
   # and stop all running Bazel server processes.
   bazel clean --expunge

   # Build using the following Bazel flags, to help {% data variables.product.prodname_codeql %} detect the build:
   # `--spawn_strategy=local`: build locally, instead of using a distributed build
   # `--nouse_action_cache`: turn off build caching, which might prevent recompilation of source code
   # `--noremote_accept_cached`, `--noremote_upload_local_results`: avoid using a remote cache
   codeql database create new-database --language=<language> \
   --command='bazel build --spawn_strategy=local --nouse_action_cache --noremote_accept_cached --noremote_upload_local_results //path/to/package:target'

   # After building, stop all running Bazel server processes.
   # This ensures future build commands start in a clean Bazel server process
   # without {% data variables.product.prodname_codeql %} attached.
   bazel shutdown
   ```

- Project built using a custom build script:

   ```
   codeql database create new-database --language=<language> --command='./scripts/build.sh'
   ```

This command runs a custom script that contains all of the commands required to build the project.

<!-- Anchor to maintain the CodeQL CLI manual pages link: https://aka.ms/codeql-docs/indirect-tracing -->

<a name="using-indirect-build-tracing"></a>

### Using indirect build tracing

If the {% data variables.product.prodname_codeql_cli %} autobuilders for compiled languages do not work with your CI workflow and you cannot wrap invocations of build commands with `codeql database trace-command`, you can use indirect build tracing to create a {% data variables.product.prodname_codeql %} database. To use indirect build tracing, your CI system must be able to set custom environment variables for each build action.

To create a {% data variables.product.prodname_codeql %} database with indirect build tracing, run the following command from the checkout root of your project:

```
codeql database init ... --begin-tracing <database>
```

You must specify:

- `<database>`: a path to the new database to be created. This directory will be created when you execute the command—you cannot specify an existing directory.
- `--begin-tracing`: creates scripts that can be used to set up an environment in which build commands will be traced.

You may specify other options for the `codeql database init` command as normal.

   {% note %}

   **Note:** If the build runs on Windows, you must set either `--trace-process-level <number>` or `--trace-process-name <parent process name>` so that the option points to a parent CI process that will observe all build steps for the code being analyzed.

   {% endnote %}

The `codeql database init` command will output a message:

```
Created skeleton <database>. This in-progress database is ready to be populated by an extractor. In order to initialise tracing, some environment variables need to be set in the shell your build will run in. A number of scripts to do this have been created in <database>/temp/tracingEnvironment. Please run one of these scripts before invoking your build command.

Based on your operating system, we recommend you run: ...
```

The `codeql database init` command creates `<database>/temp/tracingEnvironment` with files that contain environment variables and values that will enable {% data variables.product.prodname_codeql %} to trace a sequence of build steps. These files are named `start-tracing.{json,sh,bat,ps1}`. Use one of these files with your CI system’s mechanism for setting environment variables for future steps. You can:

- Read the JSON file, process it, and print out environment variables in the format expected by your CI system. For example, Azure DevOps expects `echo "##vso[task.setvariable variable=NAME]VALUE"`.
- Or, if your CI system persists the environment,  source the appropriate `start-tracing` script to set the {% data variables.product.prodname_codeql %} variables in the shell environment of the CI system.

Build your code; optionally, unset the environment variables using an `end-tracing.{json,sh,bat,ps1}` script from the directory where the `start-tracing` scripts are stored; and then run the command `codeql database finalize <database>`.

Once you have created a {% data variables.product.prodname_codeql %} database using indirect build tracing, you can work with it like any other {% data variables.product.prodname_codeql %} database. For example, analyze the database, and upload the results to {% data variables.product.prodname_dotcom %} if you use code scanning.

### Example of creating a {% data variables.product.prodname_codeql %} database using indirect build tracing

The following example shows how you could use indirect build tracing in an Azure DevOps pipeline to create a {% data variables.product.prodname_codeql %} database:

```
steps:
    # Download the {% data variables.product.prodname_codeql_cli %} and query packs...
    # Check out the repository ...

    # Run any pre-build tasks, for example, restore NuGet dependencies...

    # Initialize the {% data variables.product.prodname_codeql %} database.
    # In this example, the {% data variables.product.prodname_codeql_cli %} has been downloaded and placed on the PATH.
    - task: CmdLine@1
       displayName: Initialize {% data variables.product.prodname_codeql %} database
      inputs:
          # Assumes the source code is checked out to the current working directory.
          # Creates a database at `<current working directory>/db`.
          # Running on Windows, so specifies a trace process level.
          script: "codeql database init --language csharp --trace-process-name Agent.Worker.exe --source-root . --begin-tracing db"

    # Read the generated environment variables and values,
    # and set them so they are available for subsequent commands
    # in the build pipeline. This is done in PowerShell in this example.
    - task: PowerShell@1
       displayName: Set {% data variables.product.prodname_codeql %} environment variables
       inputs:
          targetType: inline
          script: >
             $json = Get-Content $(System.DefaultWorkingDirectory)/db/temp/tracingEnvironment/start-tracing.json | ConvertFrom-Json
             $json.PSObject.Properties | ForEach-Object {
                 $template = "##vso[task.setvariable variable="
                 $template += $_.Name
                 $template += "]"
                 $template += $_.Value
                 echo "$template"
             }

    # Execute the pre-defined build step. Note the `msbuildArgs` variable.
    - task: VSBuild@1
        inputs:
          solution: '**/*.sln'
          msbuildArgs: /p:OutDir=$(Build.ArtifactStagingDirectory)
          platform: Any CPU
          configuration: Release
          # Execute a clean build, in order to remove any existing build artifacts prior to the build.
          clean: True
       displayName: Visual Studio Build

    # Read and set the generated environment variables to end build tracing. This is done in PowerShell in this example.
    - task: PowerShell@1
       displayName: Clear {% data variables.product.prodname_codeql %} environment variables
       inputs:
          targetType: inline
          script: >
             $json = Get-Content $(System.DefaultWorkingDirectory)/db/temp/tracingEnvironment/end-tracing.json | ConvertFrom-Json
             $json.PSObject.Properties | ForEach-Object {
                 $template = "##vso[task.setvariable variable="
                 $template += $_.Name
                 $template += "]"
                 $template += $_.Value
                 echo "$template"
             }

    - task: CmdLine@2
       displayName: Finalize {% data variables.product.prodname_codeql %} database
       inputs:
          script: 'codeql database finalize db'

    # Other tasks go here, for example:
    # `codeql database analyze`
    # then `codeql github upload-results` ...
```

## Downloading databases from {% data variables.product.prodname_dotcom_the_website %}

{% data variables.product.prodname_dotcom %} stores {% data variables.product.prodname_codeql %} databases for over 200,000 repos on {% data variables.product.prodname_dotcom_the_website %}, which you can download using the REST API. The list of repos is constantly growing and evolving to make sure that it includes the most interesting codebases for security research.

You can check if a repository has any {% data variables.product.prodname_codeql %} databases available for download using the `/repos/<owner>/<repo>/code-scanning/codeql/databases` endpoint. For example, to check for {% data variables.product.prodname_codeql %} databases using the [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_api) you would run:

```
gh api /repos/<owner>/<repo>/code-scanning/codeql/databases/
```

This command returns information about any {% data variables.product.prodname_codeql %} databases that are available for a repository, including the language the database represents, and when the database was last updated. If no {% data variables.product.prodname_codeql %} databases are available, the response is empty.

When you have confirmed that a {% data variables.product.prodname_codeql %} database exists for the language you are interested in, you can download it using the following command:

```
gh api /repos/<owner>/<repo>/code-scanning/codeql/databases/<language> -H 'Accept: application/zip' > path/to/local/database.zip
```

For more information, see the documentation for the [Get {% data variables.product.prodname_codeql %} database endpoint](/rest/code-scanning?apiVersion=2022-11-28#get-a-codeql-database-for-a-repository).

Before running an analysis with the {% data variables.product.prodname_codeql_cli %}, you must unzip the databases.

## Further reading

- "[Analyzing your projects in {% data variables.product.prodname_codeql %} for VS Code](https://codeql.github.com/docs/codeql-for-visual-studio-code/analyzing-your-projects/#analyzing-your-projects)"
