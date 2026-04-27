---
title: config
section: 7
description: More than you probably want to know about npm configuration
---

### Description

npm gets its configuration values from the following sources, sorted by priority:

#### Command Line Flags

Putting `--foo bar` on the command line sets the `foo` configuration
parameter to `"bar"`.  A `--` argument tells the cli parser to stop
reading flags.  Using `--flag` without specifying any value will set
the value to `true`.

Example: `--flag1 --flag2` will set both configuration parameters
to `true`, while `--flag1 --flag2 bar` will set `flag1` to `true`,
and `flag2` to `bar`.  Finally, `--flag1 --flag2 -- bar` will set
both configuration parameters to `true`, and the `bar` is taken
as a command argument.

#### Environment Variables

Any environment variables that start with `npm_config_` will be
interpreted as a configuration parameter.  For example, putting
`npm_config_foo=bar` in your environment will set the `foo`
configuration parameter to `bar`.  Any environment configurations that
are not given a value will be given the value of `true`.  Config
values are case-insensitive, so `NPM_CONFIG_FOO=bar` will work the
same. However, please note that inside [`scripts`](/using-npm/scripts)
npm will set its own environment variables and Node will prefer
those lowercase versions over any uppercase ones that you might set.
For details see [this issue](https://github.com/npm/npm/issues/14528).

Notice that you need to use underscores instead of dashes, so `--allow-same-version`
would become `npm_config_allow_same_version=true`.

#### npmrc Files

The four relevant files are:

* per-project configuration file (`/path/to/my/project/.npmrc`)
* per-user configuration file (defaults to `$HOME/.npmrc`; configurable via CLI
  option `--userconfig` or environment variable `$NPM_CONFIG_USERCONFIG`)
* global configuration file (defaults to `$PREFIX/etc/npmrc`; configurable via
  CLI option `--globalconfig` or environment variable `$NPM_CONFIG_GLOBALCONFIG`)
* npm's built-in configuration file (`/path/to/npm/npmrc`)

See [npmrc](/configuring-npm/npmrc) for more details.

#### Default Configs

Run `npm config ls -l` to see a set of configuration parameters that are
internal to npm, and are defaults if nothing else is specified.

### Shorthands and Other CLI Niceties

The following shorthands are parsed on the command-line:

* `-a`: `--all`
* `--enjoy-by`: `--before`
* `-c`: `--call`
* `--desc`: `--description`
* `-f`: `--force`
* `-g`: `--global`
* `--iwr`: `--include-workspace-root`
* `-L`: `--location`
* `-d`: `--loglevel info`
* `-s`: `--loglevel silent`
* `--silent`: `--loglevel silent`
* `--ddd`: `--loglevel silly`
* `--dd`: `--loglevel verbose`
* `--verbose`: `--loglevel verbose`
* `-q`: `--loglevel warn`
* `--quiet`: `--loglevel warn`
* `-l`: `--long`
* `-m`: `--message`
* `--local`: `--no-global`
* `-n`: `--no-yes`
* `--no`: `--no-yes`
* `-p`: `--parseable`
* `--porcelain`: `--parseable`
* `-C`: `--prefix`
* `--readonly`: `--read-only`
* `--reg`: `--registry`
* `-S`: `--save`
* `-B`: `--save-bundle`
* `-D`: `--save-dev`
* `-E`: `--save-exact`
* `-O`: `--save-optional`
* `-P`: `--save-prod`
* `-?`: `--usage`
* `-h`: `--usage`
* `-H`: `--usage`
* `--help`: `--usage`
* `-v`: `--version`
* `-w`: `--workspace`
* `--ws`: `--workspaces`
* `-y`: `--yes`

If the specified configuration param resolves unambiguously to a known
configuration parameter, then it is expanded to that configuration
parameter.  For example:

```bash
npm ls --par
# same as:
npm ls --parseable
```

If multiple single-character shorthands are strung together, and the
resulting combination is unambiguously not some other configuration
param, then it is expanded to its various component pieces.  For
example:

```bash
npm ls -gpld
# same as:
npm ls --global --parseable --long --loglevel info
```

### Config Settings

#### `_auth`

* Default: null
* Type: null or String

A basic-auth string to use when authenticating against the npm registry.
This will ONLY be used to authenticate against the npm registry. For other
registries you will need to scope it like "//other-registry.tld/:_auth"

Warning: This should generally not be set via a command-line option. It is
safer to use a registry-provided authentication bearer token stored in the
~/.npmrc file by running `npm login`.



#### `access`

* Default: 'public' for new packages, existing packages it will not change the
  current level
* Type: null, "restricted", or "public"

If you do not want your scoped package to be publicly viewable (and
installable) set `--access=restricted`.

Unscoped packages can not be set to `restricted`.

Note: This defaults to not changing the current access level for existing
packages. Specifying a value of `restricted` or `public` during publish will
change the access for an existing package the same way that `npm access set
status` would.



#### `all`

* Default: false
* Type: Boolean

When running `npm outdated` and `npm ls`, setting `--all` will show all
outdated or installed packages, rather than only those directly depended
upon by the current project.



#### `allow-same-version`

* Default: false
* Type: Boolean

Prevents throwing an error when `npm version` is used to set the new version
to the same value as the current version.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `audit-level`

* Default: null
* Type: null, "info", "low", "moderate", "high", "critical", or "none"

The minimum level of vulnerability for `npm audit` to exit with a non-zero
exit code.



#### `auth-type`

* Default: "web"
* Type: "legacy" or "web"

What authentication strategy to use with `login`. Note that if an `otp`
config is given, this value will always be set to `legacy`.



#### `before`

* Default: null
* Type: null or Date

If passed to `npm install`, will rebuild the npm tree such that only
versions that were available **on or before** the `--before` time get
installed. If there's no versions available for the current set of direct
dependencies, the command will error.

If the requested version is a `dist-tag` and the given tag does not pass the
`--before` filter, the most recent version less than or equal to that tag
will be used. For example, `foo@latest` might install `foo@1.2` even though
`latest` is `2.0`.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `browser`

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: null, Boolean, or String

The browser that is called by npm commands to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.



#### `ca`

* Default: null
* Type: null or String (can be set multiple times)

The Certificate Authority signing certificate that is trusted for SSL
connections to the registry. Values should be in PEM format (Windows calls
it "Base-64 encoded X.509 (.CER)") with newlines replaced by the string
"\n". For example:

```ini
ca="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```

Set to `null` to only allow "known" registrars, or to a specific CA cert to
trust only that specific signing authority.

Multiple CAs can be trusted by specifying an array of certificates:

```ini
ca[]="..."
ca[]="..."
```

See also the `strict-ssl` config.



#### `cache`

* Default: Windows: `%LocalAppData%\npm-cache`, Posix: `~/.npm`
* Type: Path

The location of npm's cache directory.



#### `cafile`

* Default: null
* Type: Path

A path to a file containing one or multiple Certificate Authority signing
certificates. Similar to the `ca` setting, but allows for multiple CA's, as
well as for the CA information to be stored in a file on disk.



#### `call`

* Default: ""
* Type: String

Optional companion option for `npm exec`, `npx` that allows for specifying a
custom command to be run along with the installed packages.

```bash
npm exec --package yo --package generator-node --call "yo node"
```



#### `cidr`

* Default: null
* Type: null or String (can be set multiple times)

This is a list of CIDR address to be used when configuring limited access
tokens with the `npm token create` command.



#### `color`

* Default: true unless the NO_COLOR environ is set to something other than '0'
* Type: "always" or Boolean

If false, never shows colors. If `"always"` then always shows colors. If
true, then only prints color codes for tty file descriptors.



#### `commit-hooks`

* Default: true
* Type: Boolean

Run git commit hooks when using the `npm version` command.



#### `cpu`

* Default: null
* Type: null or String

Override CPU architecture of native modules to install. Acceptable values
are same as `cpu` field of package.json, which comes from `process.arch`.



#### `depth`

* Default: `Infinity` if `--all` is set, otherwise `1`
* Type: null or Number

The depth to go when recursing packages for `npm ls`.

If not set, `npm ls` will show only the immediate dependencies of the root
project. If `--all` is set, then npm will show all dependencies by default.



#### `description`

* Default: true
* Type: Boolean

Show the description in `npm search`



#### `diff`

* Default:
* Type: String (can be set multiple times)

Define arguments to compare in `npm diff`.



#### `diff-dst-prefix`

* Default: "b/"
* Type: String

Destination prefix to be used in `npm diff` output.



#### `diff-ignore-all-space`

* Default: false
* Type: Boolean

Ignore whitespace when comparing lines in `npm diff`.



#### `diff-name-only`

* Default: false
* Type: Boolean

Prints only filenames when using `npm diff`.



#### `diff-no-prefix`

* Default: false
* Type: Boolean

Do not show any source or destination prefix in `npm diff` output.

Note: this causes `npm diff` to ignore the `--diff-src-prefix` and
`--diff-dst-prefix` configs.



#### `diff-src-prefix`

* Default: "a/"
* Type: String

Source prefix to be used in `npm diff` output.



#### `diff-text`

* Default: false
* Type: Boolean

Treat all files as text in `npm diff`.



#### `diff-unified`

* Default: 3
* Type: Number

The number of lines of context to print in `npm diff`.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `editor`

* Default: The EDITOR or VISUAL environment variables, or
  '%SYSTEMROOT%\notepad.exe' on Windows, or 'vi' on Unix systems
* Type: String

The command to run for `npm edit` and `npm config edit`.



#### `engine-strict`

* Default: false
* Type: Boolean

If set to true, then npm will stubbornly refuse to install (or even consider
installing) any package that claims to not be compatible with the current
Node.js version.

This can be overridden by setting the `--force` flag.



#### `fetch-retries`

* Default: 2
* Type: Number

The "retries" config for the `retry` module to use when fetching packages
from the registry.

npm will retry idempotent read requests to the registry in the case of
network failures or 5xx HTTP errors.



#### `fetch-retry-factor`

* Default: 10
* Type: Number

The "factor" config for the `retry` module to use when fetching packages.



#### `fetch-retry-maxtimeout`

* Default: 60000 (1 minute)
* Type: Number

The "maxTimeout" config for the `retry` module to use when fetching
packages.



#### `fetch-retry-mintimeout`

* Default: 10000 (10 seconds)
* Type: Number

The "minTimeout" config for the `retry` module to use when fetching
packages.



#### `fetch-timeout`

* Default: 300000 (5 minutes)
* Type: Number

The maximum amount of time to wait for HTTP requests to complete.



#### `force`

* Default: false
* Type: Boolean

Removes various protections against unfortunate side effects, common
mistakes, unnecessary performance degradation, and malicious input.

* Allow clobbering non-npm files in global installs.
* Allow the `npm version` command to work on an unclean git repository.
* Allow deleting the cache folder with `npm cache clean`.
* Allow installing packages that have an `engines` declaration requiring a
  different version of npm.
* Allow installing packages that have an `engines` declaration requiring a
  different version of `node`, even if `--engine-strict` is enabled.
* Allow `npm audit fix` to install modules outside your stated dependency
  range (including SemVer-major changes).
* Allow unpublishing all versions of a published package.
* Allow conflicting peerDependencies to be installed in the root project.
* Implicitly set `--yes` during `npm init`.
* Allow clobbering existing values in `npm pkg`
* Allow unpublishing of entire packages (not just a single version).

If you don't have a clear idea of what you want to do, it is strongly
recommended that you do not use this option!



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `format-package-lock`

* Default: true
* Type: Boolean

Format `package-lock.json` or `npm-shrinkwrap.json` as a human readable
file.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `git`

* Default: "git"
* Type: String

The command to use for git commands. If git is installed on the computer,
but is not in the `PATH`, then set this to the full path to the git binary.



#### `git-tag-version`

* Default: true
* Type: Boolean

Tag the commit when using the `npm version` command. Setting this to false
results in no commit being made at all.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `globalconfig`

* Default: The global --prefix setting plus 'etc/npmrc'. For example,
  '/usr/local/etc/npmrc'
* Type: Path

The config file to read for global config options.



#### `heading`

* Default: "npm"
* Type: String

The string that starts all the debugging log output.



#### `https-proxy`

* Default: null
* Type: null or URL

A proxy to use for outgoing https requests. If the `HTTPS_PROXY` or
`https_proxy` or `HTTP_PROXY` or `http_proxy` environment variables are set,
proxy settings will be honored by the underlying `make-fetch-happen`
library.



#### `if-present`

* Default: false
* Type: Boolean

If true, npm will not exit with an error code when `run-script` is invoked
for a script that isn't defined in the `scripts` section of `package.json`.
This option can be used when it's desirable to optionally run a script when
it's present and fail if the script fails. This is useful, for example, when
running scripts that may only apply for some builds in an otherwise generic
CI setup.

This value is not exported to the environment for child processes.

#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `include-staged`

* Default: false
* Type: Boolean

Allow installing "staged" published packages, as defined by [npm RFC PR
#92](https://github.com/npm/rfcs/pull/92).

This is experimental, and not implemented by the npm public registry.



#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `init-author-email: ruizariasedgarmanuel@gmail.com`

* Default: ""
* Type: String

The value `npm init` should use by default for the package author's email.



#### `init-author-name`

* Default: ""
* Type: String

The value `npm init` should use by default for the package author's name.



#### `init-author-url:https://github.com/Edgarruiz8585`

* Default: ""
* Type: "" or URL

The value `npm init` should use by default for the package author's
homepage.



#### `init-license`

* Default: "ISC"
* Type: String

The value `npm init` should use by default for the package license.



#### `init-module`

* Default: "~/.npm-init.js"
* Type: Path

A module that will be loaded by the `npm init` command. See the
documentation for the
[init-package-json](https://github.com/npm/init-package-json) module for
more information, or [npm init](/commands/npm-init).



#### `init-version`

* Default: "1.0.0"
* Type: SemVer string

The value that `npm init` should use by default for the package version
number, if not already set in package.json.



#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `legacy-peer-deps`

* Default: false
* Type: Boolean

Causes npm to completely ignore `peerDependencies` when building a package
tree, as in npm versions 3 through 6.

If a package cannot be installed because of overly strict `peerDependencies`
that collide, it provides a way to move forward resolving the situation.

This differs from `--omit=peer`, in that `--omit=peer` will avoid unpacking
`peerDependencies` on disk, but will still design a tree 