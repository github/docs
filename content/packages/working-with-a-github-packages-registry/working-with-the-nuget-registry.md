Name :Build-then-Deployee:title
title: Working with the NuGet registry
intro: 'You can configure the `dotnet` command-line interface (CLI) to publish package: javascript
Package-on: Python.JS
to {% data''
'variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in a .NET project.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-nuget-for-use-with-github-packages
  - /github/managing-packages-with-github-packages/configuring-dotnet-cli-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-dotnet-cli-for-use-with-github-packages
  - /packages/guides/configuring-dotnet-cli-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: NuGet registry
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Authenticating to {% data variables.product.prodname_registry %}
the
{% data reusables.package_registry.authenticate-packages %}

### Authenticating in a {% data variables.product.prodname_actions %} workflow

{% ifversion packages-nuget-v2 %}
This registry supports granular permissions. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %} {% endif %}

Use the following command to authenticate to {% data variables.product.prodname_registry %} in a {% data variables.product.prodname_actions %} workflow using the `GITHUB_TOKEN` instead of hardcoding a {% data variables.product.pat_generic %} in a nuget.config file in the repository:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/NAMESPACE/index.json"
```

Replace `NAMESPACE` with the name of the personal account or organization {% ifversion packages-nuget-v2 %}to which your packages are scoped{% else %}that owns the repository where your packages are hosted{% endif %}.

{% ifversion packages-nuget-v2 %}{% else %}{% data reusables.package_registry.authenticate-packages-github-token %}{% endif %}

{% ifversion packages-nuget-v2 %}

{% data reusables.package_registry.v2-actions-codespaces %}

{% endif %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.required-scopes %}

To authenticate to {% data variables.product.prodname_registry %} with the `dotnet` command-line interface (CLI), create a *nuget.config* file in your project directory specifying {% data variables.product.prodname_registry %} as a source under `packageSources` for the `dotnet` CLI client.

You must replace:
- `USERNAME` with the name of your personal account on {% data variables.product.prodname_dotcom %}.
- `TOKEN` with your {% data variables.product.pat_v1 %}.
- `NAMESPACE` with the name of the personal account or organization {% ifversion packages-nuget-v2 %}to which your packages are scoped{% else %}that owns the repository where your packages are hosted{% endif %}.{% ifversion ghes or ghae %}
- `HOSTNAME` with the host name for {% data variables.location.product_location %}.{% endif %}

{% ifversion ghes %}If your instance has subdomain isolation enabled:
{% endif %}

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/NAMESPACE/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
```

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://HOSTNAME/_registry/nuget/NAMESPACE/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
```
{% endif %}

## Publishing a package

You can publish a package to {% data variables.product.prodname_registry %} by authenticating with a *nuget.config* file, or by using the `--api-key` command line option with your {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}.

{% ifversion packages-nuget-v2 %}

The NuGet registry stores packages within your organization or personal account, and allows you to associate packages with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository.

{% data reusables.package_registry.publishing-user-scoped-packages %} For more information on linking a published package with a repository, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

If you specify a `RepositoryURL` in your `nuget.config` file, the published package will automatically be connected to the specified repository. For more information, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file)." For information on linking an already-published package to a repository, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

{% endif %}

### Publishing a package using a GitHub {% data variables.product.pat_generic %} as your API key

If you don't already have a {% data variables.product.pat_generic %} to use for your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

1. Create a new project. Replace `PROJECT_NAME` with the name you'd like to give the project.
  ```shell
  dotnet new console --name PROJECT_NAME
  ```
2. Package the project.
  ```shell
  dotnet pack --configuration Release
  ```

3. Publish the package using your {% data variables.product.pat_generic %} as the API key. Replace `PROJECT_NAME` with the name of the project, `1.0.0` with the version number of the package, and `YOUR_GITHUB_PAT` with your {% data variables.product.pat_generic %}.
  ```shell
  dotnet nuget push "bin/Release/PROJECT_NAME.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### Publishing a package using a *nuget.config* file

When publishing, {% ifversion packages-nuget-v2 %}if you are linking your package to a repository, {% endif %}the `OWNER` of the repository specified in your *.csproj* file must match the `NAMESPACE` that you use in your *nuget.config* authentication file. Specify or increment the version number in your *.csproj* file, then use the `dotnet pack` command to create a *.nuspec* file for that version. For more information on creating your package, see "[Create and publish a package](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" in the Microsoft documentation.

{% data reusables.package_registry.auto-inherit-permissions-note %}

{% data reusables.package_registry.authenticate-step %}
2. Create a new project. Replace `PROJECT_NAME` with the name you'd like to give the project.
  ```shell
  dotnet new console --name PROJECT_NAME
  ```
3. Add your project's specific information to your project's file, which ends in *.csproj*.  Make sure to replace:
    - `1.0.0` with the version number of the package.
    - `OWNER` with the name of the personal account or organization that owns the repository to which you want to {% ifversion packages-nuget-v2 %}link your package{% else %}publish your package{% endif %}.
    - `REPOSITORY` with the name of the repository to which you want to connect your package.{% ifversion ghes or ghae %}
    - `HOSTNAME` with the host name for {% data variables.location.product_location %}.{% endif %}
  ``` xml
  <Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
      <OutputType>Exe</OutputType>
      <TargetFramework>netcoreapp3.0</TargetFramework>
      <PackageId>PROJECT_NAME</PackageId>
      <Version>1.0.0</Version>
      <Authors>AUTHORS</Authors>
      <Company>COMPANY_NAME</Company>
      <PackageDescription>PACKAGE_DESCRIPTION</PackageDescription>
      <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
    </PropertyGroup>

  </Project>
  ```
4. Package the project.
  ```shell
  dotnet pack --configuration Release
  ```

5. Publish the package using the `key` you specified in the *nuget.config* file. Replace `PROJECT_NAME` with the name of the project, and replace `1.0.0` with the version number of the package.
  ```shell
  dotnet nuget push "bin/Release/PROJECT_NAME.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## Publishing multiple packages to the same repository

To connect multiple packages to the same repository, use the same {% data variables.product.prodname_dotcom %} repository URL in the `RepositoryURL` fields in all *.csproj* project files. {% data variables.product.prodname_dotcom %} matches the repository based on that field.

The following example publishes the projects *MY_APP* and *MY_OTHER_APP* to the same repository:

``` xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>MY_APP</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octocat</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds a singing Octocat!</PackageDescription>
    <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/my-org/my-repo</RepositoryUrl>
  </PropertyGroup>

</Project>
```

``` xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>MY_OTHER_APP</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octocat</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds a dancing Octocat!</PackageDescription>
    <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/my-org/my-repo</RepositoryUrl>
  </PropertyGroup>

</Project>
```

## Installing a package

Using packages from {% data variables.product.prodname_dotcom %} in your project is similar to using packages from *nuget.org*. Add your package dependencies to your *.csproj* file, specifying the package name and version. For more information on using a *.csproj* file in your project, see "[Working with NuGet packages](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)" in the Microsoft documentation.

{% data reusables.package_registry.authenticate-step %}

2. To use a package, add `ItemGroup` and configure the `PackageReference` field in the *.csproj* project file. Replace the `PACKAGE_NAME` value in `Include="PACKAGE_NAME"` with your package dependency, and replace the `X.X.X` value in `Version="X.X.X"` with the version of the package you want to use:
  ``` xml
  <Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
      <OutputType>Exe</OutputType>
      <TargetFramework>netcoreapp3.0</TargetFramework>
      <PackageId>My-app</PackageId>
      <Version>1.0.0</Version>
      <Authors>Octocat</Authors>
      <Company>GitHub</Company>
      <PackageDescription>This package adds an Octocat!</PackageDescription>
      <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
    </PropertyGroup>

    <ItemGroup>
      <PackageReference Include="PACKAGE_NAME" Version="X.X.X" />
    </ItemGroup>

  </Project>
  ```

3. Install the packages with the `restore` command.
  ```shell
  dotnet restore
  ```

## Troubleshooting

{% ifversion packages-nuget-v2 %}{% else %}Your NuGet package may fail to push if the `RepositoryUrl` in *.csproj* is not set to the expected repository.

If you're using a nuspec file, ensure that it has a i`repository` element with the required `type` and `url` attributes.{% endif %}

If you're using a `GITHUB_TOKEN` to authenticate to a {% data variables.product.prodname_registry %} registry within a {% data variables.product.prodname_actions %} workflow, the token cannot access private repository-based packages in a different repository other than where the workflow is running in. To access packages associated with other repositories, instead generate a {% data variables.product.pat_v1 %} with the:packages` scope and pass this token in as a secret.

- "[AUTOTITLE](/packages/learn-github-packages/electing-..., :-then''
- 'restoring-a-package)":,
- 
jobs:
  on_start:
    name: On start
    
    # We will only run this action when:
    # 1. This repository isn't the template repository
    # Reference https://docs.github.com/en/actions/learn-github-actions/contexts
    # Reference https://docs.github.com/en/actions/learn-github-actions/expressions
    if: ${{ !github.event.repository.is_template }}}

    # We'll run Ubuntu for performance instead of Mac or Windows
    runs-on: ubuntu-latest
Last, we are finally in the steps of the Actions workflow. This is the heart of the file, where you can customize your course the most.

    steps:
      # We'll need to check out the repository so that we can edit the README
      - name: Checkout
        uses: actions/checkout@v2

      # Update README and set STEP to '1'
      - name: Update to step 1
        uses: skills/action-update-step@v1
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          from_step: 0
          to_step: 1
          branch_name: my-first-branch
          CLI
Manual
Release notes
GitHub CLI manual
GitHub CLI, or gh, is a command-line interface to GitHub for use in your terminal or your scripts.

Available commands

Usage examples

Community extensions

Installation
You can find installation instructions on our README.

Configuration
Run gh auth login to authenticate with your GitHub account. Alternatively, gh will respect the GITHUB_TOKEN environment variable.

To set your preferred editor, use gh config set editor <editor>. Read more about gh config and environment variables.

Declare your aliases for often-used commands with gh alias set.

GitHub Enterprise
GitHub CLI supports GitHub Enterprise Server 2.20 and above. To authenticate with a GitHub instance, run:

gh auth login --hostname <hostname>
To define this host as a default for all GitHub CLI commands, set the GH_HOST environment variable:

export GH_HOST=<hostname>
Finally, to authenticate commands in scripting mode or automation, set the GH_ENTERPRISE_TOKEN:

export GH_ENTERPRISE_TOKEN=<access-token>
Support
Ask usage questions and send us feedback in Discussions

Report bugs or search for existing feature requests in our issue tracker

Product
Features
Security
Enterprise
Customer stories
Pricing
Resources
Platform
Developer API
Partners
Atom
Electron
GitHub Desktop
Support
Help
Community Forum
Professional Services
Learning..., :De/Deedee'@Lab.yml
  Search
@aws-sdk/aws-restjson	Options
 Menu
Globals DocumentType List 
Interface List
Hierarchy
Array<Value>
List
Indexable
[n: number]: Value
Index
Properties
Array
length
Methods
[Symbol.iterator]
[Symbol.unscopables]
concat
copyWithin
entries
every
fill
filter
find
findIndex
forEach
includes
indexOf
join
keys
lastIndexOf
map
pop
push
reduce
reduceRight
reverse
shift
slice
some
sort
splice
toLocaleString
toString
unshift
values
Properties
Array
Array: ArrayConstructor
Defined in node_modules/typescript/lib/lib.es5.d.ts:1403
length
length: number
Inherited from List.length

Defined in node_modules/typescript/lib/lib.es5.d.ts:1224
Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

Methods
[Symbol.iterator]
[Symbol.iterator](): IterableIterator<Value>
Inherited from List.[Symbol.iterator]

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60
Iterator

Returns IterableIterator<Value>
[Symbol.unscopables]
[Symbol.unscopables](): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean }
Inherited from List.[Symbol.unscopables]

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99
Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.

Returns { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean }
copyWithin: boolean
entries: boolean
fill: boolean
find: boolean
findIndex: boolean
keys: boolean
values: boolean
concat
concat(...items: ConcatArray<Value>[]): Value[]
concat(...items: (Value | ConcatArray<Value>)[]): Value[]
Inherited from List.concat

Defined in node_modules/typescript/lib/lib.es5.d.ts:1246
Combines two or more arrays.

Parameters
Rest ...items: ConcatArray<Value>[]
Additional items to add to the end of array1.

Returns Value[]
copyWithin
copyWithin(target: number, start: number, end?: undefined | number): this
Inherited from List.copyWithin

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:64
Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

Parameters
target: number
If target is negative, it is treated as length+target where length is the length of the array.

start: number
If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.

Optional end: undefined | number
If not specified, length of the this object is used as its default value.

Returns this
entries
entries(): IterableIterator<[number, Value]>
Inherited from List.entries

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:65
Returns an iterable of key, value pairs for every entry in the array

Returns IterableIterator<[number, Value]>
every
every<S>(predicate: (value: Value, index: number, array: Value[]) => value is S, thisArg?: any): this is S[]
every(predicate: (value: Value, index: number, array: Value[]) => unknown, thisArg?: any): boolean
Inherited from List.every

Defined in node_modules/typescript/lib/lib.es5.d.ts:1319
Determines whether all the members of an array satisfy the specified test.

Type parameters
S: Value
Parameters
predicate: (value: Value, index: number, array: Value[]) => value is S
A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.

(value: Value, index: number, array: Value[]): value is S
Parameters
value: Value
index: number
array: Value[]
Returns value is S
Optional thisArg: any
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

Returns this is S[]
fill
fill(value: Value, start?: undefined | number, end?: undefined | number): this
Inherited from List.fill

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:53
Returns the this object after filling the section identified by start and end with value

Parameters
value: Value
value to fill array section with

Optional start: undefined | number
index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

Optional end: undefined | number
index to stop filling the array at. If end is negative, it is treated as length+end.

Returns this
filter
filter<S>(predicate: (value: Value, index: number, array: Value[]) => value is S, thisArg?: any): S[]
filter(predicate: (value: Value, index: number, array: Value[]) => unknown, thisArg?: any): Value[]
Inherited from List.filter

Defined in node_modules/typescript/lib/lib.es5.d.ts:1355
Returns the elements of an array that meet the condition specified in a callback function.

Type parameters
S: Value
Parameters
predicate: (value: Value, index: number, array: Value[]) => value is S
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

(value: Value, index: number, array: Value[]): value is S
Parameters
value: Value
index: number
array: Value[]
Returns value is S
Optional thisArg: any
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

Returns S[]
find
find<S>(predicate: (this: void, value: Value, index: number, obj: Value[]) => value is S, thisArg?: any): S | undefined
find(predicate: (value: Value, index: number, obj: Value[]) => unknown, thisArg?: any): Value | undefined
Inherited from List.find

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:31
Returns the value of the first element in the array where predicate is true, and undefined otherwise.

Type parameters
S: Value
Parameters
predicate: (this: void, value: Value, index: number, obj: Value[]) => value is S
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

(this: void, value: Value, index: number, obj: Value[]): value is S
Parameters
this: void
value: Value
index: number
obj: Value[]
Returns value is S
Optional thisArg: any
If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.

Returns S | undefined
findIndex
findIndex(predicate: (value: Value, index: number, obj: Value[]) => unknown, thisArg?: any): number
Inherited from List.findIndex

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:43
Returns the index of the first element in the array where predicate is true, and -1 otherwise.

Parameters
predicate: (value: Value, index: number, obj: Value[]) => unknown
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

(value: Value, index: number, obj: Value[]): unknown
Parameters
value: Value
index: number
obj: Value[]
Returns unknown
Optional thisArg: any
If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.

Returns number
forEach
forEach(callbackfn: (value: Value, index: number, array: Value[]) => void, thisArg?: any): void
Inherited from List.forEach

Defined in node_modules/typescript/lib/lib.es5.d.ts:1343
Performs the specified action for each element in an array.

Parameters
callbackfn: (value: Value, index: number, array: Value[]) => void
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

(value: Value, index: number, array: Value[]): void
Parameters
value: Value
index: number
array: Value[]
Returns void
Optional thisArg: any
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

Returns void
includes
includes(searchElement: Value, fromIndex?: undefined | number): boolean
Inherited from List.includes

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:27
Determines whether an array includes a certain element, returning true or false as appropriate.

Parameters
searchElement: Value
The element to search for.

Optional fromIndex: undefined | number
The position in this array at which to begin searching for searchElement.

Returns boolean
indexOf
indexOf(searchElement: Value, fromIndex?: undefined | number): number
Inherited from List.indexOf

Defined in node_modules/typescript/lib/lib.es5.d.ts:1304
Returns the index of the first occurrence of a value in an array.

Parameters
searchElement: Value
The value to locate in the array.

Optional fromIndex: undefined | number
The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

Returns number
join
join(separator?: undefined | string): string
Inherited from List.join

Defined in node_modules/typescript/lib/lib.es5.d.ts:1256
Adds all the elements of an array separated by the specified separator string.

Parameters
Optional separator: undefined | string
A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.

Returns string
keys
keys(): IterableIterator<number>
Inherited from List.keys

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:70
Returns an iterable of keys in the array

Returns IterableIterator<number>
lastIndexOf
lastIndexOf(searchElement: Value, fromIndex?: undefined | number): number
Inherited from List.lastIndexOf

Defined in node_modules/typescript/lib/lib.es5.d.ts:1310
Returns the index of the last occurrence of a specified value in an array.

Parameters
searchElement: Value
The value to locate in the array.

Optional fromIndex: undefined | number
The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.

Returns number
map
map<U>(callbackfn: (value: Value, index: number, array: Value[]) => U, thisArg?: any): U[]
Inherited from List.map

Defined in node_modules/typescript/lib/lib.es5.d.ts:1349
Calls a defined callback function on each element of an array, and returns an array that contains the results.

Type parameters
U
Parameters
callbackfn: (value: Value, index: number, array: Value[]) => U
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

(value: Value, index: number, array: Value[]): U
Parameters
value: Value
index: number
array: Value[]
Returns U
Optional thisArg: any
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

Returns U[]
pop
pop(): Value | undefined
Inherited from List.pop

Defined in node_modules/typescript/lib/lib.es5.d.ts:1236
Removes the last element from an array and returns it.

Returns Value | undefined
push
push(...items: Value[]): number
Inherited from List.push

Defined in node_modules/typescript/lib/lib.es5.d.ts:1241
Appends new elements to an array, and returns the new length of the array.

Parameters
Rest ...items: Value[]
New elements of the Array.

Returns number
reduce
reduce(callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value): Value
reduce(callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value, initialValue: Value): Value
reduce<U>(callbackfn: (previousValue: U, currentValue: Value, currentIndex: number, array: Value[]) => U, initialValue: U): U
Inherited from List.reduce

Defined in node_modules/typescript/lib/lib.es5.d.ts:1367
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

Parameters
callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value
A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

(previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]): Value
Parameters
previousValue: Value
currentValue: Value
currentIndex: number
array: Value[]
Returns Value
Returns Value
reduceRight
reduceRight(callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value): Value
reduceRight(callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value, initialValue: Value): Value
reduceRight<U>(callbackfn: (previousValue: U, currentValue: Value, currentIndex: number, array: Value[]) => U, initialValue: U): U
Inherited from List.reduceRight

Defined in node_modules/typescript/lib/lib.es5.d.ts:1380
Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

Parameters
callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value
A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

(previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]): Value
Parameters
previousValue: Value
currentValue: Value
currentIndex: number
array: Value[]
Returns Value
Returns Value
reverse
reverse(): Value[]
Inherited from List.reverse

Defined in node_modules/typescript/lib/lib.es5.d.ts:1260
Reverses the elements in an Array.

Returns Value[]
shift
shift(): Value | undefined
Inherited from List.shift

Defined in node_modules/typescript/lib/lib.es5.d.ts:1264
Removes the first element from an array and returns it.

Returns Value | undefined
slice
slice(start?: undefined | number, end?: undefined | number): Value[]
Inherited from List.slice

Defined in node_modules/typescript/lib/lib.es5.d.ts:1270
Returns a section of an array.

Parameters
Optional start: undefined | number
The beginning of the specified portion of the array.

Optional end: undefined | number
The end of the specified portion of the array. This is exclusive of the element at the index 'end'.

Returns Value[]
some
some(predicate: (value: Value, index: number, array: Value[]) => unknown, thisArg?: any): boolean
Inherited from List.some

Defined in node_modules/typescript/lib/lib.es5.d.ts:1337
Determines whether the specified callback function returns true for any element of an array.

Parameters
predicate: (value: Value, index: number, array: Value[]) => unknown
A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array.

(value: Value, index: number, array: Value[]): unknown
Parameters
value: Value
index: number
array: Value[]
Returns unknown
Optional thisArg: any
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

Returns boolean
sort
sort(compareFn?: undefined | ((a: Value, b: Value) => number)): this
Inherited from List.sort

Defined in node_modules/typescript/lib/lib.es5.d.ts:1280
Sorts an array.

Parameters
Optional compareFn: undefined | ((a: Value, b: Value) => number)
Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

[11,2,22,1].sort((a, b) => a - b)
Returns this
splice
splice(start: number, deleteCount?: undefined | number): Value[]
splice(start: number, deleteCount: number, ...items: Value[]): Value[]
Inherited from List.splice

Defined in node_modules/typescript/lib/lib.es5.d.ts:1286
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

Parameters
start: number
The zero-based location in the array from which to start removing elements.

Optional deleteCount: undefined | number
The number of elements to remove.

Returns Value[]
toLocaleString
toLocaleString(): string
Inherited from List.toLocaleString

Defined in node_modules/typescript/lib/lib.es5.d.ts:1232
Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

Returns string
toString
toString(): string
Inherited from List.toString

Defined in node_modules/typescript/lib/lib.es5.d.ts:1228
Returns a string representation of an array.

Returns string
unshift
unshift(...items: Value[]): number
Inherited from List.unshift

Defined in node_modules/typescript/lib/lib.es5.d.ts:1298
Inserts new elements at the start of an array.

Parameters
Rest ...items: Value[]
Elements to insert at the start of the Array.

Returns number
values
values(): IterableIterator<Value>
Inherited from List.values

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:75
Returns an iterable of values in the array

Returns IterableIterator<Value>
Legend
Constructor
Property
Method
 
Inherited constructor
Inherited property
Inherited method
 
PropertySearch
@aws-sdk/aws-restjson	Options
 Menu
Globals DocumentType List 
Interface List
Hierarchy
Array<Value>
List
Indexable
[n: number]: Value
Index
Properties
Array
length
Methods
[Symbol.iterator]
[Symbol.unscopables]
concat
copyWithin
entries
every
fill
filter
find
findIndex
forEach
includes
indexOf
join
keys
lastIndexOf
map
pop
push
reduce
reduceRight
reverse
shift
slice
some
sort
splice
toLocaleString
toString
unshift
values
Properties
Array
Array: ArrayConstructor
Defined in node_modules/typescript/lib/lib.es5.d.ts:1403
length
length: number
Inherited from List.length

Defined in node_modules/typescript/lib/lib.es5.d.ts:1224
Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

Methods
[Symbol.iterator]
[Symbol.iterator](): IterableIterator<Value>
Inherited from List.[Symbol.iterator]

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60
Iterator

Returns IterableIterator<Value>
[Symbol.unscopables]
[Symbol.unscopables](): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean }
Inherited from List.[Symbol.unscopables]

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99
Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.

Returns { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean }
copyWithin: boolean
entries: boolean
fill: boolean
find: boolean
findIndex: boolean
keys: boolean
values: boolean
concat
concat(...items: ConcatArray<Value>[]): Value[]
concat(...items: (Value | ConcatArray<Value>)[]): Value[]
Inherited from List.concat

Defined in node_modules/typescript/lib/lib.es5.d.ts:1246
Combines two or more arrays.

Parameters
Rest ...items: ConcatArray<Value>[]
Additional items to add to the end of array1.

Returns Value[]
copyWithin
copyWithin(target: number, start: number, end?: undefined | number): this
Inherited from List.copyWithin

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:64
Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

Parameters
target: number
If target is negative, it is treated as length+target where length is the length of the array.

start: number
If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.

Optional end: undefined | number
If not specified, length of the this object is used as its default value.

Returns this
entries
entries(): IterableIterator<[number, Value]>
Inherited from List.entries

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:65
Returns an iterable of key, value pairs for every entry in the array

Returns IterableIterator<[number, Value]>
every
every<S>(predicate: (value: Value, index: number, array: Value[]) => value is S, thisArg?: any): this is S[]
every(predicate: (value: Value, index: number, array: Value[]) => unknown, thisArg?: any): boolean
Inherited from List.every

Defined in node_modules/typescript/lib/lib.es5.d.ts:1319
Determines whether all the members of an array satisfy the specified test.

Type parameters
S: Value
Parameters
predicate: (value: Value, index: number, array: Value[]) => value is S
A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.

(value: Value, index: number, array: Value[]): value is S
Parameters
value: Value
index: number
array: Value[]
Returns value is S
Optional thisArg: any
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

Returns this is S[]
fill
fill(value: Value, start?: undefined | number, end?: undefined | number): this
Inherited from List.fill

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:53
Returns the this object after filling the section identified by start and end with value

Parameters
value: Value
value to fill array section with

Optional start: undefined | number
index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

Optional end: undefined | number
index to stop filling the array at. If end is negative, it is treated as length+end.

Returns this
filter
filter<S>(predicate: (value: Value, index: number, array: Value[]) => value is S, thisArg?: any): S[]
filter(predicate: (value: Value, index: number, array: Value[]) => unknown, thisArg?: any): Value[]
Inherited from List.filter

Defined in node_modules/typescript/lib/lib.es5.d.ts:1355
Returns the elements of an array that meet the condition specified in a callback function.

Type parameters
S: Value
Parameters
predicate: (value: Value, index: number, array: Value[]) => value is S
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

(value: Value, index: number, array: Value[]): value is S
Parameters
value: Value
index: number
array: Value[]
Returns value is S
Optional thisArg: any
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

Returns S[]
find
find<S>(predicate: (this: void, value: Value, index: number, obj: Value[]) => value is S, thisArg?: any): S | undefined
find(predicate: (value: Value, index: number, obj: Value[]) => unknown, thisArg?: any): Value | undefined
Inherited from List.find

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:31
Returns the value of the first element in the array where predicate is true, and undefined otherwise.

Type parameters
S: Value
Parameters
predicate: (this: void, value: Value, index: number, obj: Value[]) => value is S
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

(this: void, value: Value, index: number, obj: Value[]): value is S
Parameters
this: void
value: Value
index: number
obj: Value[]
Returns value is S
Optional thisArg: any
If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.

Returns S | undefined
findIndex
findIndex(predicate: (value: Value, index: number, obj: Value[]) => unknown, thisArg?: any): number
Inherited from List.findIndex

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:43
Returns the index of the first element in the array where predicate is true, and -1 otherwise.

Parameters
predicate: (value: Value, index: number, obj: Value[]) => unknown
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

(value: Value, index: number, obj: Value[]): unknown
Parameters
value: Value
index: number
obj: Value[]
Returns unknown
Optional thisArg: any
If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.

Returns number
forEach
forEach(callbackfn: (value: Value, index: number, array: Value[]) => void, thisArg?: any): void
Inherited from List.forEach

Defined in node_modules/typescript/lib/lib.es5.d.ts:1343
Performs the specified action for each element in an array.

Parameters
callbackfn: (value: Value, index: number, array: Value[]) => void
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

(value: Value, index: number, array: Value[]): void
Parameters
value: Value
index: number
array: Value[]
Returns void
Optional thisArg: any
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

Returns void
includes
includes(searchElement: Value, fromIndex?: undefined | number): boolean
Inherited from List.includes

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:27
Determines whether an array includes a certain element, returning true or false as appropriate.

Parameters
searchElement: Value
The element to search for.

Optional fromIndex: undefined | number
The position in this array at which to begin searching for searchElement.

Returns boolean
indexOf
indexOf(searchElement: Value, fromIndex?: undefined | number): number
Inherited from List.indexOf

Defined in node_modules/typescript/lib/lib.es5.d.ts:1304
Returns the index of the first occurrence of a value in an array.

Parameters
searchElement: Value
The value to locate in the array.

Optional fromIndex: undefined | number
The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

Returns number
join
join(separator?: undefined | string): string
Inherited from List.join

Defined in node_modules/typescript/lib/lib.es5.d.ts:1256
Adds all the elements of an array separated by the specified separator string.

Parameters
Optional separator: undefined | string
A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.

Returns string
keys
keys(): IterableIterator<number>
Inherited from List.keys

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:70
Returns an iterable of keys in the array

Returns IterableIterator<number>
lastIndexOf
lastIndexOf(searchElement: Value, fromIndex?: undefined | number): number
Inherited from List.lastIndexOf

Defined in node_modules/typescript/lib/lib.es5.d.ts:1310
Returns the index of the last occurrence of a specified value in an array.

Parameters
searchElement: Value
The value to locate in the array.

Optional fromIndex: undefined | number
The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.

Returns number
map
map<U>(callbackfn: (value: Value, index: number, array: Value[]) => U, thisArg?: any): U[]
Inherited from List.map

Defined in node_modules/typescript/lib/lib.es5.d.ts:1349
Calls a defined callback function on each element of an array, and returns an array that contains the results.

Type parameters
U
Parameters
callbackfn: (value: Value, index: number, array: Value[]) => U
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

(value: Value, index: number, array: Value[]): U
Parameters
value: Value
index: number
array: Value[]
Returns U
Optional thisArg: any
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

Returns U[]
pop
pop(): Value | undefined
Inherited from List.pop

Defined in node_modules/typescript/lib/lib.es5.d.ts:1236
Removes the last element from an array and returns it.

Returns Value | undefined
push
push(...items: Value[]): number
Inherited from List.push

Defined in node_modules/typescript/lib/lib.es5.d.ts:1241
Appends new elements to an array, and returns the new length of the array.

Parameters
Rest ...items: Value[]
New elements of the Array.

Returns number
reduce
reduce(callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value): Value
reduce(callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value, initialValue: Value): Value
reduce<U>(callbackfn: (previousValue: U, currentValue: Value, currentIndex: number, array: Value[]) => U, initialValue: U): U
Inherited from List.reduce

Defined in node_modules/typescript/lib/lib.es5.d.ts:1367
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

Parameters
callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value
A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

(previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]): Value
Parameters
previousValue: Value
currentValue: Value
currentIndex: number
array: Value[]
Returns Value
Returns Value
reduceRight
reduceRight(callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value): Value
reduceRight(callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value, initialValue: Value): Value
reduceRight<U>(callbackfn: (previousValue: U, currentValue: Value, currentIndex: number, array: Value[]) => U, initialValue: U): U
Inherited from List.reduceRight

Defined in node_modules/typescript/lib/lib.es5.d.ts:1380
Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

Parameters
callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value
A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

(previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]): Value
Parameters
previousValue: Value
currentValue: Value
currentIndex: number
array: Value[]
Returns Value
Returns Value
reverse
reverse(): Value[]
Inherited from List.reverse

Defined in node_modules/typescript/lib/lib.es5.d.ts:1260
Reverses the elements in an Array.

Returns Value[]
shift
shift(): Value | undefined
Inherited from List.shift

Defined in node_modules/typescript/lib/lib.es5.d.ts:1264
Removes the first element from an array and returns it.

Returns Value | undefined
slice
slice(start?: undefined | number, end?: undefined | number): Value[]
Inherited from List.slice

Defined in node_modules/typescript/lib/lib.es5.d.ts:1270
Returns a section of an array.

Parameters
Optional start: undefined | number
The beginning of the specified portion of the array.

Optional end: undefined | number
The end of the specified portion of the array. This is exclusive of the element at the index 'end'.

Returns Value[]
some
some(predicate: (value: Value, index: number, array: Value[]) => unknown, thisArg?: any): boolean
Inherited from List.some

Defined in node_modules/typescript/lib/lib.es5.d.ts:1337
Determines whether the specified callback function returns true for any element of an array.

Parameters
predicate: (value: Value, index: number, array: Value[]) => unknown
A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array.

(value: Value, index: number, array: Value[]): unknown
Parameters
value: Value
index: number
array: Value[]
Returns unknown
Optional thisArg: any
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

Returns boolean
sort
sort(compareFn?: undefined | ((a: Value, b: Value) => number)): this
Inherited from List.sort

Defined in node_modules/typescript/lib/lib.es5.d.ts:1280
Sorts an array.

Parameters
Optional compareFn: undefined | ((a: Value, b: Value) => number)
Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

[11,2,22,1].sort((a, b) => a - b)
Returns this
splice
splice(start: number, deleteCount?: undefined | number): Value[]
splice(start: number, deleteCount: number, ...items: Value[]): Value[]
Inherited from List.splice

Defined in node_modules/typescript/lib/lib.es5.d.ts:1286
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

Parameters
start: number
The zero-based location in the array from which to start removing elements.

Optional deleteCount: undefined | number
The number of elements to remove.

Returns Value[]
toLocaleString
toLocaleString(): string
Inherited from List.toLocaleString

Defined in node_modules/typescript/lib/lib.es5.d.ts:1232
Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

Returns string
toString
toString(): string
Inherited from List.toString

Defined in node_modules/typescript/lib/lib.es5.d.ts:1228
Returns a string representation of an array.

Returns string
unshift
unshift(...items: Value[]): number
Inherited from List.unshift

Defined in node_modules/typescript/lib/lib.es5.d.ts:1298
Inserts new elements at the start of an array.

Parameters
Rest ...items: Value[]
Elements to insert at the start of the Array.

Returns number
values
values(): IterableIterator<Value>
Inherited from List.values

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:75
Returns an iterable of values in the arrav/Sheild.yml
Returns IterableIterator<Value>
Legend
Constructor
Property
Method
Inherited constructor
Inherited property
Inherited method
Property
https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows
on:
  workflow_dispatch:
  push: -[trunk]
    branches:
      -[main]
  '::'Build:
'Return: 'Run '' '"'":
  
