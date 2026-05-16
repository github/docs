Build and Install
=================

This document describes installation on all supported operating
systems: the Unix/Linux family (including macOS), OpenVMS,
and Windows.

Table of Contents
=================

 - [Prerequisites](#prerequisites)
 - [Notational Conventions](#notational-conventions)
 - [Quick Installation Guide](#quick-installation-guide)
   - [Building OpenSSL](#building-openssl)
   - [Installing OpenSSL](#installing-openssl)
 - [Configuration Options](#configuration-options)
   - [API Level](#api-level)
   - [Cross Compile Prefix](#cross-compile-prefix)
   - [Build Type](#build-type)
   - [Directories](#directories)
   - [Compiler Warnings](#compiler-warnings)
   - [ZLib Flags](#zlib-flags)
   - [Seeding the Random Generator](#seeding-the-random-generator)
   - [Setting the FIPS HMAC key](#setting-the-FIPS-HMAC-key)
   - [Enable and Disable Features](#enable-and-disable-features)
   - [Displaying configuration data](#displaying-configuration-data)
 - [Installation Steps in Detail](#installation-steps-in-detail)
   - [Configure](#configure-openssl)
   - [Build](#build-openssl)
   - [Test](#test-openssl)
   - [Install](#install-openssl)
 - [Advanced Build Options](#advanced-build-options)
   - [Environment Variables](#environment-variables)
   - [Makefile Targets](#makefile-targets)
   - [Running Selected Tests](#running-selected-tests)
 - [Troubleshooting](#troubleshooting)
   - [Configuration Problems](#configuration-problems)
   - [Build Failures](#build-failures)
   - [Test Failures](#test-failures)
 - [Notes](#notes)
   - [Notes on multi-threading](#notes-on-multi-threading)
   - [Notes on shared libraries](#notes-on-shared-libraries)
   - [Notes on random number generation](#notes-on-random-number-generation)
   - [Notes on assembler modules compilation](#notes-on-assembler-modules-compilation)

Prerequisites
=============

To install OpenSSL, you will need:

 * A "make" implementation
 * Perl 5 with core modules (please read [NOTES-PERL.md](NOTES-PERL.md))
 * The Perl module `Text::Template` (please read [NOTES-PERL.md](NOTES-PERL.md))
 * an ANSI C compiler
 * a development environment in the form of development libraries and C
   header files
 * a supported operating system

For additional platform specific requirements, solutions to specific
issues and other details, please read one of these:

 * [Notes for UNIX-like platforms](NOTES-UNIX.md)
 * [Notes for Android platforms](NOTES-ANDROID.md)
 * [Notes for Windows platforms](NOTES-WINDOWS.md)
 * [Notes for the DOS platform with DJGPP](NOTES-DJGPP.md)
 * [Notes for the OpenVMS platform](NOTES-VMS.md)
 * [Notes on Perl](NOTES-PERL.md)
 * [Notes on Valgrind](NOTES-VALGRIND.md)

Notational conventions
======================

Throughout this document, we use the following conventions.

Commands
--------

Any line starting with a dollar sign is a command line.

    $ command

The dollar sign indicates the shell prompt and is not to be entered as
part of the command.

Choices
-------

Several words in curly braces separated by pipe characters indicate a
**mandatory choice**, to be replaced with one of the given words.
For example, the line

    $ echo { WORD1 | WORD2 | WORD3 }

represents one of the following three commands

    $ echo WORD1
    - or -
    $ echo WORD2
    - or -
    $ echo WORD3

One or several words in square brackets separated by pipe characters
denote an **optional choice**.  It is similar to the mandatory choice,
but it can also be omitted entirely.

So the line

    $ echo [ WORD1 | WORD2 | WORD3 ]

represents one of the four commands

    $ echo WORD1
    - or -
    $ echo WORD2
    - or -
    $ echo WORD3
    - or -
    $ echo

Arguments
---------

**Mandatory arguments** are enclosed in double curly braces.
A simple example would be

    $ type {{ filename }}

which is to be understood to use the command `type` on some file name
determined by the user.

**Optional Arguments** are enclosed in double square brackets.

    [[ options ]]

Note that the notation assumes spaces around `{`, `}`, `[`, `]`, `{{`, `}}` and
`[[`, `]]`.  This is to differentiate from OpenVMS directory
specifications, which also use [ and ], but without spaces.

Quick Installation Guide
========================

If you just want to get OpenSSL installed without bothering too much
about the details, here is the short version of how to build and install
OpenSSL.  If any of the following steps fails, please consult the
[Installation in Detail](#installation-steps-in-detail) section below.

Building OpenSSL
----------------

Use the following commands to configure, build and test OpenSSL.
The testing is optional, but recommended if you intend to install
OpenSSL for production use.

### Unix / Linux / macOS

    $ ./Configure
    $ make
    $ make test

### OpenVMS

Use the following commands to build OpenSSL:

    $ perl Configure
    $ mms
    $ mms test

### Windows

If you are using Visual Studio, open a Developer Command Prompt and
issue the following commands to build OpenSSL.

    $ perl Configure
    $ nmake
    $ nmake test

As mentioned in the [Choices](#choices) section, you need to pick one
of the four Configure targets in the first command.

Most likely you will be using the `VC-WIN64A` target for 64bit Windows
binaries (AMD64) or `VC-WIN32` for 32bit Windows binaries (X86).
The other two options are `VC-WIN64I` (Intel IA64, Itanium) and
`VC-CE` (Windows CE) are rather uncommon nowadays.

Installing OpenSSL
------------------

The following commands will install OpenSSL to a default system location.

**Danger Zone:** even if you are impatient, please read the following two
paragraphs carefully before you install OpenSSL.

For security reasons the default system location is by default not writable
for unprivileged users.  So for the final installation step administrative
privileges are required.  The default system location and the procedure to
obtain administrative privileges depends on the operating system.
It is recommended to compile and test OpenSSL with normal user privileges
and use administrative privileges only for the final installation step.

On some platforms OpenSSL is preinstalled as part of the Operating System.
In this case it is highly recommended not to overwrite the system versions,
because other applications or libraries might depend on it.
To avoid breaking other applications, install your copy of OpenSSL to a
[different location](#installing-to-a-different-location) which is not in
the global search path for system libraries.

Finally, if you plan on using the FIPS module, you need to read the
[Post-installation Notes](#post-installation-notes) further down.

### Unix / Linux / macOS

Depending on your distribution, you need to run the following command as
root user or prepend `sudo` to the command:

    $ make install

By default, OpenSSL will be installed to

    /usr/local

More precisely, the files will be installed into the  subdirectories

    /usr/local/bin
    /usr/local/lib
    /usr/local/include
    ...

depending on the file type, as it is custom on Unix-like operating systems.

### OpenVMS

Use the following command to install OpenSSL.

    $ mms install

By default, OpenSSL will be installed to

    SYS$COMMON:[OPENSSL]

### Windows

If you are using Visual Studio, open the Developer Command Prompt _elevated_
and issue the following command.

    $ nmake install

The easiest way to elevate the Command Prompt is to press and hold down both
the `<CTRL>` and `<SHIFT>` keys while clicking the menu item in the task menu.

The default installation location is

    C:\Program Files\OpenSSL

for native binaries, or

    C:\Program Files (x86)\OpenSSL

for 32bit binaries on 64bit Windows (WOW64).

#### Installing to a different location

To install OpenSSL to a different location (for example into your home
directory for testing purposes) run `Configure` as shown in the following
examples.

The options `--prefix` and `--openssldir` are explained in further detail in
[Directories](#directories) below, and the values used here are mere examples.

On Unix:

    $ ./Configure --prefix=/opt/openssl --openssldir=/usr/local/ssl

On OpenVMS:

    $ perl Configure --prefix=PROGRAM:[INSTALLS] --openssldir=SYS$MANAGER:[OPENSSL]

Note: if you do add options to the configuration command, please make sure
you've read more than just this Quick Start, such as relevant `NOTES-*` files,
the options outline below, as configuration options may change the outcome
in otherwise unexpected ways.

Configuration Options
=====================

There are several options to `./Configure` to customize the build (note that
for Windows, the defaults for `--prefix` and `--openssldir` depend on what
configuration is used and what Windows implementation OpenSSL is built on.
For more information, see the [Notes for Windows platforms](NOTES-WINDOWS.md).

API Level
---------

    --api=x.y[.z]

Build the OpenSSL libraries to support the API for the specified version.
If [no-deprecated](#no-deprecated) is also given, don't build with support
for deprecated APIs in or below the specified version number.  For example,
adding

    --api=1.1.0 no-deprecated

will remove support for all APIs that were deprecated in OpenSSL version
1.1.0 or below.  This is a rather specialized option for developers.
If you just intend to remove all deprecated APIs up to the current version
entirely, just specify [no-deprecated](#no-deprecated).
If `--api` isn't given, it defaults to the current (minor) OpenSSL version.

Cross Compile Prefix
--------------------

    --cross-compile-prefix=<PREFIX>

The `<PREFIX>` to include in front of commands for your toolchain.

It is likely to have to end with dash, e.g. `a-b-c-` would invoke GNU compiler
as `a-b-c-gcc`, etc.  Unfortunately cross-compiling is too case-specific to put
together one-size-fits-all instructions.  You might have to pass more flags or
set up environment variables to actually make it work.  Android and iOS cases
are discussed in corresponding `Configurations/15-*.conf` files.  But there are
cases when this option alone is sufficient.  For example to build the mingw64
target on Linux `--cross-compile-prefix=x86_64-w64-mingw32-` works.  Naturally
provided that mingw packages are installed.  Today Debian and Ubuntu users
have option to install a number of prepackaged cross-compilers along with
corresponding run-time and development packages for "alien" hardware.  To give
another example `--cross-compile-prefix=mipsel-linux-gnu-` suffices in such
case.

For cross compilation, you must [configure manually](#manual-configuration).
Also, note that `--openssldir` refers to target's file system, not one you are
building on.

Build Type
----------

    --debug

Build OpenSSL with debugging symbols and zero optimization level.

    --release

Build OpenSSL without debugging symbols.  This is the default.

Directories
-----------

### libdir

    --libdir=DIR

The name of the directory under the top of the installation directory tree
(see the `--prefix` option) where libraries will be installed.  By default
this is `lib`. Note that on Windows only static libraries (`*.lib`) will
be stored in this location. Shared libraries (`*.dll`) will always be
installed to the `bin` directory.

Some build targets have a multilib postfix set in the build configuration.
For these targets the default libdir is `lib<multilib-postfix>`. Please use
`--libdir=lib` to override the libdir if adding the postfix is undesirable.

### openssldir

    --openssldir=DIR

Directory for OpenSSL configuration files, and also the default certificate
and key store.  Defaults are:

    Unix:           /usr/local/ssl
    Windows:        C:\Program Files\Common Files\SSL
    OpenVMS:        SYS$COMMON:[OPENSSL-COMMON]

For 32bit Windows applications on Windows 64bit (WOW64), always replace
`C:\Program Files` by `C:\Program Files (x86)`.

### prefix

    --prefix=DIR

The top of the installation directory tree.  Defaults are:

    Unix:           /usr/local
    Windows:        C:\Program Files\OpenSSL
    OpenVMS:        SYS$COMMON:[OPENSSL]

Compiler Warnings
-----------------

    --strict-warnings

This is a developer flag that switches on various compiler options recommended
for OpenSSL development.  It only works when using gcc or clang as the compiler.
If you are developing a patch for OpenSSL then it is recommended that you use
this option where possible.

ZLib Flags
----------

### with-zlib-include

    --with-zlib-include=DIR

The directory for the location of the zlib include file.  This option is only
necessary if [zlib](#zlib) is used and the include file is not
already on the system include path.

### with-zlib-lib

    --with-zlib-lib=LIB

**On Unix**: this is the directory containing the zlib library.
If not provided the system library path will be used.

**On Windows:** this is the filename of the zlib library (with or
without a path).  This flag must be provided if the
[zlib-dynamic](#zlib-dynamic) option is not also used. If `zlib-dynamic` is used
then this flag is optional and defaults to `ZLIB1` if not provided.

**On VMS:** this is the filename of the zlib library (with or without a path).
This flag is optional and if not provided then `GNV$LIBZSHR`, `GNV$LIBZSHR32`
or `GNV$LIBZSHR64` is used by default depending on the pointer size chosen.

Seeding the Random Generator
----------------------------

    --with-rand-seed=seed1[,seed2,...]

A comma separated list of seeding methods which will be tried by OpenSSL
in order to obtain random input (a.k.a "entropy") for seeding its
cryptographically secure random number generator (CSPRNG).
The current seeding methods are:

### os

Use a trusted operating system entropy source.
This is the default method if such an entropy source exists.

### getrandom

Use the [getrandom(2)][man-getrandom] or equivalent system call.

[man-getrandom]: http://man7.org/linux/man-pages/man2/getrandom.2.html

### devrandom

Use the first device from the `DEVRANDOM` list which can be opened to read
random bytes.  The `DEVRANDOM` preprocessor constant expands to

    "/dev/urandom","/dev/random","/dev/srandom"

on most unix-ish operating systems.

### egd

Check for an entropy generating daemon.
This source is ignored by the FIPS provider.

### rdcpu

Use the `RDSEED` or `RDRAND` command if provided by the CPU.

### librandom

Use librandom (not implemented yet).
This source is ignored by the FIPS provider.

### none

Disable automatic seeding.  This is the default on some operating systems where
no suitable entropy source exists, or no support for it is implemented yet.
This option is ignored by the FIPS provider.

For more information, see the section [Notes on random number generation][rng]
at the end of this document.

[rng]: #notes-on-random-number-generation

Setting the FIPS HMAC key
-------------------------

    --fips-key=value

As part of its self-test validation, the FIPS module must verify itself
by performing a SHA-256 HMAC computation on itself. The default key is
the SHA256 value of "the holy handgrenade of antioch" and is sufficient
for meeting the FIPS requirements.

To change the key to a different value, use this flag. The value should
be a hex string no more than 64 characters.

Enable and Disable Features
---------------------------

Feature options always come in pairs, an option to enable feature
`xxxx`, and an option to disable it:

    [ enable-xxxx | no-xxxx ]

Whether a feature is enabled or disabled by default, depends on the feature.
In the following list, always the non-default variant is documented: if
feature `xxxx` is disabled by default then `enable-xxxx` is documented and
if feature `xxxx` is enabled by default then `no-xxxx` is documented.

### no-afalgeng

Don't build the AFALG engine.

This option will be forced on a platform that does not support AFALG.

### enable-ktls

Build with Kernel TLS support.

This option will enable the use of the Kernel TLS data-path, which can improve
performance and allow for the use of sendfile and splice system calls on
TLS sockets.  The Kernel may use TLS accelerators if any are available on the
system.  This option will be forced off on systems that do not support the
Kernel TLS data-path.

### enable-asan

Build with the Address sanitiser.

This is a developer option only.  It may not work on all platforms and should
never be used in production environments.  It will only work when used with
gcc or clang and should be used in conjunction with the [no-shared](#no-shared)
option.

### enable-acvp-tests

Build support for Automated Cryptographic Validation Protocol (ACVP)
tests.

This is required for FIPS validation purposes. Certain ACVP tests require
access to algorithm internals that are not normally accessible.
Additional information related to ACVP can be found at
<https://github.com/usnistgov/ACVP>.

### no-asm

Do not use assembler code.

This should be viewed as debugging/troubleshooting option rather than for
production use.  On some platforms a small amount of assembler code may still
be used even with this option.

### no-async

Do not build support for async operations.

### no-autoalginit

Don't automatically load all supported ciphers and digests.

Typically OpenSSL will make available all of its supported ciphers and digests.
For a statically linked application this may be undesirable if small executable
size is an objective.  This only affects libcrypto.  Ciphers and digests will
have to be loaded manually using `EVP_add_cipher()` and `EVP_add_digest()`
if this option is used.  This option will force a non-shared build.

### no-autoerrinit

Don't automatically load all libcrypto/libssl error strings.

Typically OpenSSL will automatically load human readable error strings.  For a
statically linked application this may be undesirable if small executable size
is an objective.

### no-autoload-config

Don't automatically load the default `openssl.cnf` file.

Typically OpenSSL will automatically load a system config file which configures
default SSL options.

### enable-buildtest-c++

While testing, generate C++ buildtest files that simply check that the public
OpenSSL header files are usable standalone with C++.

Enabling this option demands extra care.  For any compiler flag given directly
as configuration option, you must ensure that it's valid for both the C and
the C++ compiler.  If not, the C++ build test will most likely break.  As an
alternative, you can use the language specific variables, `CFLAGS` and `CXXFLAGS`.

### --banner=text

Use the specified text instead of the default banner at the end of
configuration.

### --w

On platforms where the choice of 32-bit or 64-bit architecture
is not explicitly specified, `Configure` will print a warning
message and wait for a few seconds to let you interrupt the
configuration. Using this flag skips the wait.

### no-bulk

Build only some minimal set of features.
This is a developer option used internally for CI build tests of the project.

### no-cached-fetch

Never cache algorithms when they are fetched from a provider.  Normally, a
provider indicates if the algorithms it supplies can be cached or not.  Using
this option will reduce run-time memory usage but it also introduces a
significant performance penalty.  This option is primarily designed to help
with detecting incorrect reference counting.

### no-capieng

Don't build the CAPI engine.

This option will be forced if on a platform that does not support CAPI.

### no-cmp

Don't build support for Certificate Management Protocol (CMP)
and Certificate Request Message Format (CRMF).

### no-cms

Don't build support for Cryptographic Message Syntax (CMS).

### no-comp

Don't build support for SSL/TLS compression.

If this option is enabled (the default), then compression will only work if
the zlib or `zlib-dynamic` options are also chosen.

### enable-crypto-mdebug

This now only enables the `failed-malloc` feature.

### enable-crypto-mdeb