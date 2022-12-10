BEGIN
Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
clearlinux-pkgs
/
protobuf
Public
Code
Pull requests
Actions
Projects
Security
Insights
[update to 3.11.1] Fix to allow a compilation under mips big endian w…
…ith gcc

Aaron Bray (2):
      Use NoLocalStrtod for international compliance
      Add strtod to libprotobuf-lite

Aaron Patterson (1):
      Convert Google::Protobuf.deep_copy to pure Ruby

Abdel Younes (1):
      fix: cmake install

Adam Cozzette (51):
      Updated PHP generated code for timestamp.proto
      Updated generate_changelog.py
      Added Clang thread-safety annotations in mutex.h
      Require C++11 and pass -std=c++11
      Set LIBPROTOBUF_EXPORT on GzipOutputStream::Options
      Updated Docker setup to use GCC 4.8
      Updated release documentation (#4973)
      Added support for building the aarch64 and ppcle64 protoc binaries with Kokoro
      Set LIBPROTOBUF_EXPORT on GzipOutputStream::Options
      Removed unnecessary includes from stubs/common.h
      Integrated internal changes from Google
      Updated checked-in generated code
      Removed scc.cc
      Added new JS test protos to gulpfile.js
      Updated Makefiles
      Updated guava-testlib version in pom.xml
      Fixed Java tests
      Removed stubs/singleton.h
      Make sure to install stubs/strutil.h
      Cherry-picked some internal fixes from Google
      Removed configure check for sched_yield
      Ran ./update_file_lists.sh to update CMake configuration
      Updated Bazel workspace in examples/ to handle zlib dependency
      Removed Kokoro config for 64-bit Linux
      Updated Bazel workspace in examples/ to handle zlib dependency
      Updated googletest submodule to the most recent upstream commit
      Updated Linux cpp_distcheck test to exit immediately on error
      Do "strict" heapcheck instead of "draconian" (#5635)
      Fixed Javadoc errors
      Include Linux ppcle_64 builds and Windows 64-bit builds of protoc
      Updated pom.xml files
      Updated version to 3.7.0rc2
      Fixed infinite recursion problem with Java GeneratedMessageV3 (#5657)
      Include compiler_config_setting.bzl in release tarballs (#5715)
      Avoid passing -Og flag to C++ compiler
      Added io_win32.h to header list in CMake config
      Fix Windows builds with future Bazel changes
      Avoid marking generated C++ messages as final for now (#5928)
      Updated NPM version to 3.7.1
      Avoid linking against libatomic when building protoc (#5922)
      Fixed CI failures with Ruby 2.3 on OSX (#5948)
      Removed duplicate text from WORKSPACE file
      Updated gemspec to require Ruby 2.3 or higher
      Revert "JSON string output funtions should clear() the destination first"
      Include protobuf_deps.bzl in generated release archives
      Added stubs/map_util.h to list of installed headers
      Updated cmake path to io_win32.h (#6397)
      Updated Bazel test script to use most recent Bazel version (#6413)
      Updated issue templates to remove question form (#6576)
      Updated deprecation macros to annotate deprecated code
      Added a descriptor option number for ocaml-protoc-plugin

Adam Liddell (5):
      Fix usage of six in //:protobuf_python rule and add import (#6310)
      Remove zlib copts flags when on Windows
      Update six version to 1.12.0 and fix legacy_create_init issue
      Move six.BUILD to third_party and update paths
      Remove duplicate six http_archive definition

Adrián Nieto Rodríguez (1):
      Fix Javadoc typo (#5280)

Alan Wu (1):
      Remove unused argument to avoid UB

Aleix Conchillo Flaque (1):
      compiler/cpp: replace NULL with nullptr

Aleksej Kazmin (1):
      Fix typo in FieldMaskTree.java warning

Alex Konradi (1):
      Add extension number for protoc-gen-validate

Allen Webb (1):
      cpp_generator: Add support for --cpp_out=speed:...

Amit Portnoy (1):
      avoid error when compiling with MSVC2010

Andrei Shevtsov (2):
      Fix scope resolution for Google namespace
      Fix ruby proto3 extension support (#6369)

Andrei-Florin BENCSIK (1):
      Remove unused function and add more UTs

Andrzej Hunt (1):
      ObjC: avoid assign for object properties

Ankit Singh (1):
      Removes unused code and lint warnings (#5773)

Anuraag Agrawal (1):
      Remove unsafe no-copy String allocation since it's not useful in recent Java versions.

Arun Olappamanna Vasudevan (2):
      pyext needs c++11 in linux and mac. (#4930)
      Add overrides in C++ code.

Asim Shankar (1):
      Graceful failure in SerializeToArray().

Asra Ali (1):
      fix ubsan warning

BSBandme (2):
      Fix cpp benchmark dependency on mac
      Fix cpp_distcheck

Ben Bader (2):
      Fix builtin_atomics check in CMakeLists.txt
      Fix unused-parameter clang warnings in arena.h and map_type_handler.h

Ben Boeckel (4):
      command_line_interface: check if __APPLE__ is defined
      mathlimits: check for _WIN32 and __MINGW32__ existence
      mathlimits: remove unused code
      mathlimits: remove no-op macro expansion code

Ben Gordon (1):
      Requesting extension id 1072

Ben Webb (1):
      Add Python 3.7 compatibility (#4862)

Ben Wolsieffer (1):
      Link to libatomic when necessary (eg. on armv6l)

Benjamin Barenblat (1):
      objectivec: Quash -Wself-assign and -Wvla (#4897)

Benjamin Krämer (1):
      Ported FieldMaskUtil from Java to C# (#5045)

Benjamin Peterson (6):
      Remove 2to3 code from setup.py. (#5114)
      Fix "the the".
      Treat plugins as host tools.
      Treat plugins as host tools.
      Improve the grammar of the unused import message.
      Import MutableSequence from collections.abc on Python 3. (#6272)

Bhargava Shastry (1):
      Fixes warnings in https://github.com/google/oss-fuzz/issues/864#issuecomment-458596374

Bo Yang (18):
      Fix setup.py for windows build.
      Bump version number to 3.5.2
      Add missing ruby/tests/test_ruby_package.proto
      Implement array constructor in php c extension.
      Fix php tests
      Fix 32bit php tests
      Fix json parsing of wrapper values
      Down-integrate internal changes to github.
      Revert change to map_lite_test.proto
      Convert integer to string if field is string field in json
      phpunit-5.6.10 link is broken
      Divide commands into separate lines
      Update version to 3.7.0rc3
      Sync latest upb changes
      Update upb for ruby
      Update upb for ruby
      Fix ruby conformance test on mac
      Use mktime

Brandon Cole (3):
      Add unit test for loading unknown fields in Any messages
      Code fixes for the original unit test.
      Also make sure known fields come across as expected

Brent Shaffer (2):
      PHP array constructors for protobuf messages (#4530)
      PHP namespaces for nested messages and enums (#4536)

Brian Silverman (3):
      Fix broken test of const repeated field iterators
      Remove unused types
      Avoid octal constants in strutil.cc

Calder Coalson (1):
      Declare 'google' namespace when importing Python protobuf via Bazel.

Cameron Taggart (1):
      enable source link for csharp (#4179)

Carlos O'Ryan (1):
      Fix RPATH when CMAKE_INSTALL_LIBDIR != lib.

Carmi Grushko (1):
      Add `protobuf_java_lite` Bazel target

Changming Sun (1):
      Fix #6098

Charles Hardin (1):
      Fix to allow a compilation under mips big endian with gcc

Chris Bacon (3):
      C#: Optimize parsing of some primitive and wrapper types
      Allow extra fields in wrapper messages, more tests.
      Remove unneeded exception methods

Chris Gaffney (1):
      ruby: Improve performance of Google::Protobuf::Timestamp#to_time (#6360)

Christian Maurer (4):
      Removed unused-parameter warning
      c++ remove conversion warning in MapEntryFuncs::ByteSizeLong
      c++ remove unused parameters
      c++ remove warning switch contains default but no case

Christian von Arnim (3):
      cmake: Use GENERATE_EXTENSIONS parameter in protobuf_generate
      cmake: Add parameter PROTOC_OUT_DIR to protobuf_generate
      cmake: Fix DEPENDS of add_custom_command in protobuf_generate

Cliff Burdick (1):
      Fixed unsigned warning

Cody Schroeder (2):
      Add Bazel config for zlib support (#5389)
      Add Bazel config for zlib support (#5389)

Cory McLean (1):
      Make proto_api target visible

Cy (1):
      Update third party implementation links (#5702)

DNKpp (1):
      add Map forward declaration in arena.h

Dalvin (1):
      Enhance java-lite documentation (#5743)

Daniel Johansen (1):
      update Cmake example to build Visual Studio to newest 2019 version.

Daniel Kurka (3):
      Revert "Remove unused f expression from jscode gen. (#5573)"
      Remove unused import from message.
      Remove unused import in message.js.

Daniel Ruoso (1):
      `Libs` should not include `@PTHREAD_CFLAGS@`

Dave MacLachlan (3):
      Fix bugs in our keyword conversion support for objectivec
      Make sure Objective C Proto compiler doesn't "duplicate" prefixes unnecessarily.
      Minimize amount of filepaths being copied into protos.

David Ostrovsky (2):
      Bazel: Add dependency to error_prone_annotations
      Bazel: Add dependency to error_prone_annotations

David Supplee (2):
      Add terminating character to zend_lookup_class call (#5871)
      Add terminating character to zend_lookup_class call (#5871) (#5885)

Denis Smirnov (1):
      should close protocolbuffers#6095

Dhruv (1):
      4593 Replace all occurrences of "NULL" to nullptr in src/google/protobug/stubs

Dmitry Lomov (3):
      Migrate to supported version of http_archive
      Fix typo
      Update build file locations.

Donald Chai (1):
      Add com.google.truth as test dependencies

Dragos Carp (1):
      Add reference to protobuf-d

Duncan McGreggor (1):
      Added a link for another Clojure protobuf project (#4906)

EFanZh (3):
      Cast size_t type to int type explicitly
      Update signatures of UTF-8 string functions to accept size_t type sizes
      Revert "Update signatures of UTF-8 string functions to accept size_t type sizes"

Elliotte Harold (2):
      update version
      remove obsolete parent

Elliotte Rusty Harold (13):
      update to Guava 20
      java: add BOM (#5117)
      Update gson
      Update guava
      Update version in README
      Update to Guava 28
      Update to Truth 1.0
      Update versions to 3.9.1
      Update version number
      Update to 3.9.2
      Update to Guava 28.1-android
      Update to 3.10.0 in docs
      update error_prone and gson

Eric Anderson (1):
      protoc-artifacts: Update centos base from 6.6 to 6.9

Erik Benoist (3):
      Allows the json marshaller to be passed json marshal options (#4252)
      Adds a base class for all explicitly raised TypeErrors (#4255)
      Adds the ability to ignore unknown fields on parse

Erik Moqvist (1):
      Added pbtools to third party implementations list.

Eugene Hermann (1):
      Remove undefined behavior from the hash function.

Ewout (1):
      Ruby JSON encoding omits zero-length repeated fields by default.

Fahrzin Hemmati (8):
      Handle srcs in generated files by cd'ing in and out
      Strip trailing / from path
      Handle multiple outs per input (for plugins)
      Track outputs correctly
      Only use realpath when in gendir, and use the original ctx.action if not in gendir
      Add unittest build rules
      Fix moving generated files onto themselves
      Fix generated_protos_proto deps

Feng Xiao (28):
      Add kokoro configs for bazel build.
      Delete jruby kokoro tests.
      Remove jruby badge from our README.md.
      Remove js_embed binary. (#4709)
      Fix incorrect link.
      Add github issue templates
      Add global extension registry to the repo.
      Fix bazel build of examples.
      Make ruby release configs consistent with protoc.
      Update protoc build scripts.
      Add cpp tests under release docker image.
      Add protoc release script for Linux build.
      Run autogen.sh in release script.
      Comment out unused command from release script.
      Delete unused files. (#4942)
      Remove/replace travis references (#4953)
      Down-integrate from google3.
      Update generated descriptors.
      Cleanup kokoro scripts.
      Fix failing tests.
      Down-integrate proto2 namespace fix.
      Update build files.
      Add status badge for bazel build.
      Fix issues discovered in up-integration.
      Replace repo links.
      Revert changed links in Dockerfiles.
      Fix go tests.
      Add constributing guidelines.

Florian Enner (1):
      added manifest entries to set jigsaw module names

Gaël Delalleau (1):
      Fix a Python extension crash in the descriptor's nested types container code (#6455)

GitHubGanesh (1):
      Update mutex.h

Gohar Aziz (1):
      Update options.md | fix website url for C# port

Greg Engle (1):
      removed dead link to ProtoSharp (#5610)

GregTho (1):
      Use ::_close rather than ::close in Win32 stubs.

Gregor Jasny (1):
      Disable thread local storage for OSX < 10.7

Gregory Haskins (1):
      Add Protojure to third-party wiki (#6554)

Hans Wennborg (1):
      Add wire_format_lite_inl.h include to implicit_weak_message.cc

Hao Nguyen (104):
      Make Protobuf compatible with C# 6
      Fix TimestampPartial operator == overload implementation: Cannot call == inside it, otherwise it would cause stack overflow
      Add <LangVersion>6</LangVersion> to the core protobuf C# project to prevent future incompatibility
      Create a script to help update the version automatically (#5454)
      Use docker for csharp, java_compatibility, and python_compatibility. Remove prepare_build_linux_rc that is no longer needed.
      Replace update_version shell script with a python script, which is much better at handling XML rewrite. Update the PHP version too. As part of rewrite, some XML file format will change a little, but the semantics is still the same so it should be okay.
      Make sure to add a new line at the end of XML files
      Add conformance test for enum alias of the same name with different case
      Add conformance test for enum alias with same name but different case
      Do not require ruby enum to be uppercase
      Do not require Ruby enum to be upper case
      Lower the severity of lower-case ruby enum to warning. Add conformance test for allow_alias with lower_case enums
      Add dependency to AliasedEnum in PHP
      Down-integrate internal changes to github. (#5527)
      Create test for protoc with tcmalloc (#5612)
      Fix protoc release (#5615)
      Update version to 3.7.0
      Include version change for src/google/protobuf/port_def.inc
      Update version number in java/bom/pom.xml
      Update generated codes
      Update more files in update_version.py
      Update gauva version to 26
      Update guava version
      Update CHANGES.txt
      Fix python release build. (#5636)
      Fix MacOS protoc release (#5638)
      Fix python release build. (#5636)
      Fix MacOS protoc release (#5638)
      Support rc version in update_version.py (#5750)
      Support rc version in update_version.py (#5750)
      Down integrate to Github (#5839)
      Create test to verify that the dist artifact can be installed. (#5854)
      Update CONTRIBUTING.md to recommend applying the appropriate labels
      Down integrate to Github
      Fix CMake conflict
      Undelete python/google/protobuf/pyext/proto2_api_test.proto that was accidentally removed from file_list
      Update conformance test failures
      Update generated descriptor files
      Upgrade the closure compiler version (#5955)
      Down integrate to Github
      Add module for JavaLite and fix builds
      Revert accidentally commit
      Down integrate to Github
      Add module for JavaLite and fix builds
      Update documentation for JavaLite
      Add a link to the older version of JavaLite
      Add Mergeable config
      Down integrate to Github
      Update generated proto and remove a test from failure_list
      Remove Required.Proto3.JsonInput.EmptyFieldMask.JsonOutput from ruby_mac too
      Replace SimpleItoa with StrCat
      Down integrate to Github
      Remove Required.Proto3.JsonInput.EmptyFieldMask.JsonOutput from failure list since it is now passing for Ruby
      Down integrate to GitHub
      Remove passing test from failure_list_ruby again.
      Down integrate to GitHub
      Update version to 3.8.0
      Update java lite version
      Update the version for JavaLite in update_version script
      Add a new conformance test for top level JSON null (#5966)
      Update generated files
      Revert "Replaced all instances of Simple{IDF}toa with StrCat."
      Only replace SimpleItoa with StrCat
      Remove unused files from lite's pom.xml
      Remove unused files from lite's pom.xml
      Update change log for 3.8.0
      Change update_version to update the generated codes too
      Down integrate to GitHub
      Upgrade gulp version
      Fix gulpfile to use gulp 4 API
      Down integrate to GitHub
      Update BUILD file to match the changes in cmake files for lite
      Update php/release.sh to be executable and create a new branch for the new version
      Update instruction on how to use JavaLite runtime
      Fix update version to use the appropriate rc style for C#
      Down integrate to GitHub
      Remove inline from generated_message_reflection
      Move CreateUnknownEnumValues to anonymous namespace
      Make sure to include zlib.BUILD in our distribution
      Make sure to return the updated line when modifying .pb.h file
      Down integrate to GitHub
      Update protobuf version
      Revert "Add new file to package.xml (#6116)"
      Revert "Update protobuf version"
      Revert "Revert "Add new file to package.xml (#6116)""
      Update protobuf version
      Down integrate to GitHub
      Update generated files
      Fix gulpfile to use gulp 4 API
      Upgrade gulp version
      Down integrate to GitHub
      Include the new Java util files in Makefile.am
      Add dependency to truth in test
      Update CONTRIBUTING.md
      Fix JavaLite version
      Add AM_SILENT_RULES([yes]) to configure.ac
      Down integrate to GitHub
      Remove unused fields
      Update version to 3.9.0
      Update GSON version
      Update version on type.pb.h
      Update C# generated proto file
      Down integrate to GitHub
      Remove map_test.util.cc from BUILD

Harshit Chopra (1):
      Adds support for proto2 syntax for Ruby gem.

Harvey Tuch (6):
      json: include field name in InvalidName status messages.
      Additional whitespace.
      protostream_objectsource: preserve print options across Any.
      protostream_objectwriter: fix bug when Any is directly embedded in a map.
      Added TODO for grouping options.
      Fix some UBSAN warnings.

Ittai Zeidman (1):
      remove PACKAGE_NAME and REPOSITORY_NAME deprecated usage (#4650)

Ivan Pizhenko (1):
      Fix GetErrno() to be const (#5595)

Ivan Shynkarenka (3):
      Appveyor MinGW build
      Fix issue with version.rc
      OnShutdownDelete shadowing issue

James DeFelice (1):
      options: reserved extension range for CSI

James Judd (1):
      Change deprecated Bazel single file attr param

James Moore (1):
      Don't look for sched_yield on Android.

Jan Tattermusch (26):
      fix syntax error in BUILD file
      add scripts for automated building of C# nuget on Kokoro
      Fix C# nuget build on Kokoro (#4912)
      add scripts for automated building of C# nuget on Kokoro
      fix build_nuget.bat
      overcome the global.json constraint with a hack
      use SDK version available on Kokoro
      Revert "overcome the global.json constraint with a hack"
      upgrade dotnet SDK to 2.1.3 on kokoro linux
      experimental collect_all_artifacts script
      upport kokoro/release/python from 3.6.x branch
      add scripts for C# windows tests
      use netcoreapp2.1 for testing
      C#: set some dotnet options when testing
      test all frameworks on windows
      update csharp_EXTRA_DIST
      make check for distinct hashcode optional
      add missing C# windows presubmit.cfg file (#5894)
      fix source stepping by upgrading sourcelink (#5891)
      add System.Memory dependency (#5835)
      C#: add System.Memory dependency for net45 too (#6317)
      add wrapper_benchmark_messages.proto
      add benchmark for wrapper type parsing
      add regenerate C# protos
      update Makefile.am
      C# upgrade dotnet SDK (#6877)

Jeffrey Walton (3):
      Mostly fix Sun Studio configuration using SunCC compiler
      Fix compile error in common.cc
      Fix compile error in generated_message_util.cc

Jie Luo (7):
      Disable surrogate check for ucs2 (#5039)
      Add csharp compatibility tests between last released and the current version (#6407)
      compatibility test between last released and current for java python php (#6441)
      Merge 3.9.x 201908071359 to master (#6484)
      Add missing files under benchmarks/ to the dist (#6580)
      Update to 3.10.0-rc0 (#6660)
      Revert "C# upgrade dotnet SDK (#6877)" (#6888)

Jingwen Chen (1):
      Use versions module from Skylib for version checking

Jisi Liu (1):
      Cat the test-suite.log on errors for presubits

Joe Bolinger (20):
      Add more descriptive error messages to init methods in Ruby (#5659)
      implement to_s for message types (#5710)
      add eql? method (#5730)
      Allow repeated fields in Ruby to accept multiple arguments on push (#5736)
      Raise error for JSON overflow encoding in Ruby (#5752)
      Fix Ruby module name generation when the ruby_package option is used (#5735)
      Generate extra enum method helpers for Ruby (#5670)
      Add frozen checks in Ruby (#5726)
      Fix Ruby module name generation when the ruby_package option is used (again) (#5794)
      remove return 0 (#5840)
      make tests work on older rubies (#5823)
      add more descriptive error messages to init methods
      add type errors test to Makefile.am
      fix tests for older rubies
      cherry-pick test fix from #5853
      Allow Java reserved keywords to be used in extensions (#5709)
      Add native type setters for Timestamp and Duration in Ruby (#5751)
      Add wrapper type helpers for Ruby (#5739)
      fix null terminated string (#6370)
      Support hashes for struct initializers (#5716)

Joe Tsai (1):
      Document wrapper non-uses

Johan Nordberg (1):
      Add wsrpc

John D. Pope (1):
      allow copy and paste from readme

John Standish (1):
      Update third_party.md

John W. Bruce (1):
      Fix Alphabetization of BUILD

Jon Brandvein (1):
      Migrate to new `ctx.actions` API (#5367)

Jon Skeet (17):
      Support creating FileDescriptors dynamically from binary data.
      Cross-link descriptor when building from byte strings
      Provide simple access to descriptor declarations in C#
      Add comment about FileDescriptor not exposing a declaration
      Simplify descriptor tests
      Add files to Makefile.am to fix dist targets
      Add more detailed comments for declaration properties
      Test locations, and add comment to clarify testing
      Increase C# default recursion limit to 100 (#5339)
      First pass at benchmarking for C#
      Add C# benchmark files to EXTRA_DIST in Makefile.am
      Make the C# benchmarks non-packable
      Add braces around single-statement if/foreach
      Tests for issue 6822
      Ignore incomplete extensions when building a FileDescriptor
      Avoid NullReferenceException when accessing CustomOptions
      Fix Makefile.am by adding generated files

Jonathan Haber (1):
      Store the class object itself (#4927)

Jonathan Leitschuh (1):
      Compatibility tests pull artifacts over HTTPS

Jonathan White (1):
      Update add_person.dart

Josh Haberman (16):
      Added cmake build files for the conformance test runner.
      Added missing file to Makefile.am.
      Down-integrate from google3.
      Regenerated C# protos.
      Reverted changes to map_lite_test.proto.
      Removed obsolete hash_map header that was breaking the compile.
      Regenerated Objective C protos.
      Fixed Python extension compile.
      Added conformance tests to Bazel BUIDL file.
      Added visibility.
      Some changes to the ObjC code generator to support importing into Google.
      Rename StringPieceTrimWhitespace() for rewriting purposes.
      More fixes for import.
      More fixes.
      More fixes.
      Replaced all instances of Simple{IDF}toa with StrCat.

Josh Humphries (2):
      don't emit location for label unless label is present
      add test

Josh Kelley (1):
      ParseFromString returns bytes parsed (#5166)

Joshua Haberman (34):
      Added conformance test impl file to CMake.
      Fixed compile warnings for PHP extension. (#5589)
      Updated upb from defcleanup branch and modified Ruby to use it (#5539)
      PHP updates for new upb APIs (#5604)
      Revert "Updated upb from defcleanup branch and modified Ruby to use it (#5539)" (#5848)
      Cleanups to allow for import by Copybara. (#5826)
      Added conformance tests to Bazel BUILD file (#6126)
      Fixed typo: conformance_test_runner should be a binary, not library.
      Revert "Convert Google::Protobuf.deep_copy to pure Ruby"
      Removed all use of STLDelete*() in ObjC and C# Generators.
      Optimized away the creation of empty string objects.
      Roll forward Ruby upb changes now that protobuf Ruby build is fixed (#5866)
      Put oneof case offset in separate oneof table.
      Optimized layout_mark to not iterate over the msgdef.
      WIP.
      Bugfix for GC mark of oneof fields.
      Fixed some lint errors seen in google3. (#6520)
      Fix for race in lazy initialization of handlers.
      layout_init() optimization works!
      Removed commented-out code.
      Re-add memset() that seemed redundant but is necessary in case of GC.
      Fix for GC of Ruby map frames. (#6533)
      Removed ByteCountInt64.  This is a transitional typedef that should not be released.
      Fixed crash bug and moved initialization into init method.
      Fixed leap year handling by reworking upb_mktime() -> upb_timegm(). (#6695)
      Fixed bug in Ruby DSL when no names are defined in a file.
      Ported names fix for Ruby to the release branch.
      WIP: first steps towards lazily creating wrappers.
      Tests pass for all common operations.
      Fixed equality, and extended to repeated fields and maps.
      Nearly all known cases (map, repeated field, and top-level) have been addressed.
      Fixed the oneof case for lazy wrappers.
      Fixed conformance test regression: empty string wrapper.
      Fixed the case of multi-line strings in JSON.

Jozef Izso (6):
      Using binary one's complement to negate an unsigned int
      Add file information to Windows binaries
      Include file information in all DLL and EXE outputs
      Include version.rc.in in distribution package
      Fix appveyor documentation
      Backport the PR #4579 to 3.6.x branch

Julien Poumailloux (1):
      ObjC: avoid assign for object properties (part 2)

Julio Monteiro (1):
      Add source code URI to the Ruby gemspec file (#6466)

Juraj Lutter (1):
      Include cmath instead of math.h

Justin Buchanan (2):
      Emit annotations for generated C++ extension identifiers
      emit annotations for oneof field accessors in c++

Keith Moyer (2):
      Rely on no-writable-strings synonym
      Satisfy GCC class-memaccess warnings

Keith Smiley (9):
      Make cold_threshold_ look used to fix warning
      Remove unused constants
      Fix more warnings
      Use GetArena instead
      Add -Werror for CI builds
      Remove -Wall from default build options
      Move tool out of inputs in bazel config
      Move tool out of inputs in bazel config
      bazel: Change zlib URL to GitHub

Kenneth Lundin (1):
      Update third_party.md regarding Erlang

Kent Ross (1):
      create importable function for defining zlib

Kevin James (1):
      fix(python): fix deprecated collections.abc usage (#5195)

Khuzema Pithewan (1):
      Add "override" for overridden virtual functions

Kyle Krueger (1):
      Update README.md with gradle instructions for java

Laszlo Csomor (8):
      Windows: expand wildcard arguments
      Windows: expand path names on command line
      Delete vim scratch files.
      Address reviewer comments.
      Rename expand_wildcards to correct style
      Use C++11 enum class
      Remove shortpath-related code from ExpandWildcards
      "enum class" instead of "enum"

Leon Barrett (2):
      Fix parsing empty Struct Values from Json (#5211)
      Fix assignment between Python protobuf Structs (#6377)

Leonard Hecker (2):
      php: Added nanosecond support for Timestamp (#3972)
      php: Fix formatting of Duration (#6155)

Liam Miller-Cushon (2):
      Format with buildifier
      Use proto_library in proto_lang_toolchain.blacklisted_protos

Lian Duan (1):
      Fixed JS parsing of default map values (#6394)

Lily Li (1):
      add compatibility check badges to README

Loo Rong Jie (1):
      Align Bazel on Windows with CMake's MSVC flags (#4720)

M. Tong (1):
      Fix SFINAE in 'RepeatedPtrFieldBase::Add'

Maik Riechert (1):
      make use of RDTSC optional as it may not be available

Marco Ferrer (1):
      add kotlin kroto plus

Markov Vladislav (1):
      Simplify string_values_ vector in default_value_objectwriter

Markus Heß (3):
      protobuf_generate(): add relative path to output dir
      Revert "protobuf_generate(): add relative path to output dir"
      Windows: install missing headers

Mathias LANG (1):
      Remove duplicate entry in third party list

Matthew Paletta (1):
      Added Optional GRPC library to third party docs

Michael Matthew Mitchell (1):
      Swapped libprotoc and libprotobuf

Michael Shields (2):
      Update comments to discuss leap smearing in detail.
      Regenerate C# and Objective-C.

Michael Thomsen (1):
      Dart build status

Michal Matuszak (1):
      Removed forward declaration of MemBlock class

Michał Janiszewski (2):
      Add missing include guard to zip_writer.h
      Remove superfluous const from return type in json_stream_parser.h (#5295)

Mickaël Schoentgen (1):
      Fix several DeprecationWarning: invalid escape sequence (#5897)

Mike Moore (1):
      Remove Ruby to_hash methods

Mikhail Morgunov (1):
      Actualizing RubyGems link in README.md (#5378)

Mizux (1):
      CMake OSX rpath  management (#4620)

Mohamed Heikal (6):
      Fix order of export and capability macros on WrappedMutex
      clang-cl requires fully qualified name for friend class declarations
      Add ovrride keyword for overriden functions
      Enable PROTOBUF_EXPORT/PROTOBUF_USE_DLL on clang/gcc
      Simplify template exporting macros
      Simplify template exporting macros

Nazarbek Altybay (1):
      Fixed typo (#5206)

Nehal J Wani (2):
      Set LIBPROTOBUF_EXPORT on GenericTypeHandler<class google::protobuf::Message>
      Set LIBPROTOBUF_EXPORT on GenericTypeHandler<class google::protobuf::Message>

Nic McDonald (1):
      comply with Bazel recommendations

NickFengIBM (1):
      re-write int128 long division to avoid license impact from stackoverflow references (#4633)

Nickolay Mazurkin (1):
      [issue-2108] [protoc/java] Excessive copying on buildPartial()

Nicolás Elliott (1):
      Fix Issue #5345 (#5381)

Nikhil Pothuru (1):
      Update README.md (#6708)

NulAsh (1):
      Change cerr to cout in PrintHelpText again

ObsidianMinor (1):
      Make extension container classes public and modify conformance to test proto2 messages

Oleg Malyavkin (1):
      Update third_party.md

Oliver Bristow (1):
      Add EnumTypeWrapper.__getattr__ to access values (#5234)

Oskar Świtalski (1):
      Add guards against bswap_XX redefnitions

Parnic (3):
      Added missing include to satisfy certain versions of clang
      Replaced unavailable include with struct definition for Xbox One
      Don't build io_win32 for Xbox One

Parveen Bhatia (1):
      Added safety checks when malloc returns nil in GPBDescriptor

Pat Moroney (1):
      rename duplicate testMessageSetNullFail function (#3669)

Paul Beusterien (1):
      Override CocoaPods module to lowercase (#6464)

Paul Yang (117):
      Adopt php_metadata_namespace in php code generator (#4622)
      Adopt ruby_package in ruby generated code. (#4627)
      Fix array constructor in c extension for compatibility (#4667)
      Add back GeneratedClassName to public (#4686)
      Fix php memory leak test (#4692)
      Move methods out of class (#4697)
      Add -Og to no-warning-test (#4830)
      Add continuous test for ruby 2.3, 2.4 and 2.5 (#4829)
      Enable ignoring unknown in json parsing in php (#4839)
      Check the message to be encoded is the wrong type. (#4885)
      Add conformance test for php c back (#4966)
      Give a specific category to each test. (#4965)
      Update php package.xml to 3.6.1 (#5000)
      Python wheel kokoro dev (#5002)
      Python wheel kokoro for mac (#5017)
      Python wheel kokoro for windows (#5034)
      Add missing reference to conformanc_test_impl.cc in Makefile (#5100)
      Fix well known type class not inheriting Message (#5095)
      Add source dependency of test suite implementation to main function (#5069)
      Adopt upb change for timestamp and duration json to php (#5106)
      Fix broken tests by #4816 (#5221)
      Fix broken ruby test (#5235)
      Add ruby2.3,2.4.2.5 test on Mac and disable ruby2.1,2.2 test on Linux (#5250)
      Sync upb for unknown fix (#5240)
      Add ruby 2.3, 2.4 and 2.5 test for linux. (#5256)
      Remove ruby21 and ruby22 tests (#5277)
      Change MACOSX_DEPLOYMENT_TARGET to 10.9 (#5406)
      Add docker file for php testing. (#5447)
      Add composer config to Dockerfile (#5451)
      Compile php source to enable openssl and add php7.3 support (#5466)
      Down-integrate internal changes (#5467)
      Php 7.3 fix (#5434)
      Rebuild python docker image (#5475)
      Update kokoro badges for python tests (#5495)
      Fix Any json encoding/decoding in php (#5496)
      Revert "Enable the ignore_unknown_field option in the Ruby unmarshal options" (#5511)
      Ruby build fix mac 3.7.x (#5519)
      Add ruby 2.6 test (#5528)
      Add ruby 2.6 gem build for linux (#5537)
      Revert "Revert "Enable the ignore_unknown_field option in the Ruby unmarshal options" (#5511)" (#5533)
      Fix Empty ListValue/Struct json encoding (#5532)
      Fix field mask for php in json (#5591)
      Fix Any json encoding/decoding for ruby. (#5592)
      Revert "doc: apply consistent indentation to Any examples (#5597)"
      Fix c extension doesn' allow message reference in array (#5599)
      Fix empty FieldMask json encoding/decoding (#5605)
      Fix more issues for reference values (#5613)
      Allow internalAddGeneratedFile to depend on new nested message name (#5629)
      Default values should also be serialized for json map key/value (#5643)
      Default values should also be serialized for json map key/value (#5643)
      Use gnu for ruby build because strptime is provided by posix (#5660)
      Update php version number to 3.7.0RC2 (#5666)
      Add several fixes for python toolchain (#5667)
      Add config files for testing csharp artifact (#5683)
      RC release should use beta for api version (#5695)
      Fix oneof message in array constructor (#5727)
      Revert "Add stack overflow protection for text format"
      Update version to 3.7.0 (#5749)
      Date and time need to be before version (#5777)
      Add a script to mirror php changes to protobuf-php (#5778)
      Revert "Fix Ruby module name generation when the ruby_package option is used (#5735)"
      Update version number to 3.7.0 (#5793)
      Add link to continuous test badges (#5855)
      Fix ruby continuous tests (#5853)
      Encode empty ListValue (#5857)
      Parse nested listvalue in json for ruby (#5867)
      Remove GPBWrapperUtil from generated code (#5880)
      Fix macros in header of generated code (#5881)
      Revert "Updating Iterators to be compatible with C++17 in MSVC"
      Replace strptime with custom implementation (#5906)
      Allow bytes field to be longer than 16000 bytes (#5924)
      Update version number to 3.7.1 (#5947)
      Update version for podspec to not include dot (#6111)
      Custom mktime to fix issue on mac (#6118)
      Add new file to package.xml (#6116)
      Append field number to accessors if there is conflict (#6169)
      Add use_nested to internalAddGeneratedFile for php implementation (#6117)
      Update gem to 2.7.9 (#6265)
      Change offset of Timestamp conformance test to distinguish from the default (#6263)
      Change int64 json encoding to be string for php and ruby (#6251)
      Make php message class final to avoid mocking (#6277)
      Revert "Append field number to accessors if there is conflict (#6169)" (#6282)
      Rename get/setXXXValue to get/setXXXUnwrapped (#6295)
      Down Integrate to GitHub (#6414)
      Drop building wheel for python 3.4 (#6406)
      Add conformance test for binary string (#6415)
      Add binary conformance test case for bytes field (#6428)
      Add binary conformance test for enum fields. (#6434)
      Add binary conformance test for message type. (#6435)
      Add binary conformance test for default repeated fields (#6440)
      Conformance packed (#6447)
      Revert "Fixed JS parsing of default map values (#6394)" (#6468)
      No free when construct was not done (#6483)
      Reinstall wget on mac (#6505)
      Accept string for int64 wrappers (#6491)
      Remove stale comment (#6552)
      No need to have a separate ruby conformance test on Mac (#6555)
      Test singular fields are encoded in canonical way (#6553)
      Sync upb (#6577)
      Fix issues for php map when parsing missing key/value (#6588)
      Fix the issue for parsing zero length message (#6592)
      Add binary conformance tests for map fields (#6560)
      Sync upb (#6614)
      Sync upb (#6614)
      Implement binary conformance test for oneof fields (#6622)
      Down Integrate Internal Changes (#6634)
      Add license (#6651)
      Fix incorrect leap day for Timestamp in php (#6696)
      Add document for php development (#6694)
      Initialize well known type values (#6713)
      Initialize well known type values (#6713) (#6714)
      Fix conformance test (#6750)
      Avoid too much overhead in layout_init (#6716)
      Lazily Create Singular Wrapper Message (#6833)
      Persistent Descriptor Pool (#6899)
      Extern declare protobuf_globals (#6946)
      Add php 7.4 to docker image (#6971) (#6975)

Pavel Perestoronin (1):
      Update third_party.md

Per Lundberg (1):
      Fix typo

Peter Ebden (1):
      Fix for construction of messages in the C++ Python implementation. (#2299)

Peter Marton (4):
      Feat: add import-style=commonjs_strict option to the compiler
      Test: cover import_style=commonjs_strict
      Fix strict JS generator with import in a protofile
      fix(js_generator): check for proto

Peter Sobot (1):
      Allowed json_format.ParseDict to parse extensions with scalar types. (#5609)

Petros Pissias (1):
      Update third party RPC implementations list (#4977)

Phani Rithvij (1):
      fix dart example readme typo

Phillipp Schoppmann (1):
      Update file list for protobuf_lite

Po-Chuan Hsieh (1):
      Fix test on FreeBSD

Rafi Kamal (30):
      Down integrate to GitHub
      Change update_version to update the generated code
      Update CHANGES.txt for version 3.10.0
      Update protobuf version
      Update protobuf version
      Fix update_version.py, so that PROTOBUF_VERSION is always a 9 digit number.
      Update protobuf version
      Update CHANGES.txt with changes since 3.10.0-RC1
      Update version to 3.11.0-RC0
      Removed unnecessary conflict files
      Change Protobuf BOM license from Apache to BSD
      Down integrate to GitHub
      Reverted changes in conformance/failure_list_js.txt
      Down Integrate Internal Changes
      Add proguard.pgcfg to EXTRA_DIST in Makefile.am
      Whitelist newly added conformance test failures for Ruby, C#, and PHP
      Remove java/lite/proguard.pgcfg from EXTRA_DIST since it's not part of
      Update Xcode version needed to run Kokoro tests and replace deprecated rubygem options (#6890)
      Down integrate to GitHub (#6893)
      Update protobuf version (#6898)
      Update CHANGES.txt with 3.11.0-RC1 release notes (#6909)
      Revert "Make shared libraries be able to link to MSVC static runtime libraries, so that VC runtime is not required." (#6914)
      Marked update_compatibility_version.py as executable (#6916)
      Update protobuf version (#6927)
      Implement lazy loading of php class for proto messages (#6911) (#6925)
      Remove add_proto_enumdesc and get_proto_enumdesc (#6931)
      Update protobuf version to 3.11.0 (#6943)
      Update CHANGES.txt for 3.11.0 stable release (#6944)
      Update protobuf version to 3.11.1 (#6972)
      Update CHANGES.txt for 3.11.1 release (#6973)

Ricky Pai (1):
      export third_party BUILD files so they are accessible to users

Robert Hancock (1):
      Declare some generated C++ methods as static #4602

Rodrigo Hernandez (2):
      Updating Iterators to be compatible with C++17
      Reinstate value_type as non-const.

Roger Chen (1):
      Import versions from @bazel_skylib//lib:versions.bzl

Roman Kamyk (1):
      Fix small style issues in the dart example, following Effective Dart:

Roman Popov (1):
      tests: fix link failure and stack overflow on Mingw w64

Ruslan Manaev (1):
      Fix compilation error with SDL check flag in Visual Studio

Ryland Degnan (1):
      Update options.md (#4952)

ST-DDT (5):
      Draft: Fix javadoc warnings in generated files
      Switch to using enum based methods
      Use parameter name comment
      Follow line length guidelines
      Fix broken javadoc generation for repeated enum values

Sam Saccone (1):
      Remove unused f expression from jscode gen. (#5573)

Sam Smith (2):
      Fix TryCreateParentDirectory on Windows
      Always spilt on '\' and '/'

Sankate Sharma (1):
      Fix typo in the doc

Sarah Zakarias (3):
      Add Dart example.
      comments and formatting
      comments

Sebastian Lövdahl (1):
      Remove unnecessary cast in generated Java code

Sebastian Schuberth (1):
      Remove the executable bit from several source code files

Sergio Campamá (1):
      Update code to work for Xcode 10b1 (#4729)

Seth Girvan (2):
      Revert "protobuf.pc.in does not reflect CXXFLAGS"
      Revert "protobuf.pc.in does not reflect CXXFLAGS"

Seth Greenstein (1):
      Change "python" to "python_headers" in comment (#6046)

Sigurd Meldgaard (2):
      On Windows invoke plugins using cmd.exe
      Add option for dart

Sorah Fukumori (1):
      Fix TypeError on decoding enum map values in Ruby (#6262)

Steffen Wittmeier (1):
      Fixed protobuf_generate output definition for files relative to the protobuf_generate command

Stephane Moore (2):
      [protobuf/objc] Introduce a protobuf-specific deprecation annotation ⚠️
      [protos/objc] Include more context in deprecation messages ⚠️

Stephen Oberholtzer (1):
      When running unit tests, read reference files in text mode

Steve Manuel (1):
      include Protolock utility

Steven Peters (1):
      remove comment about wire_format_lite_inl.h

Sydney Acksman (63):
      Add msbuild targets to C# tools for protoc compilers (#4648)
      Remove protoc conditional properties (#4817)
      C# Proto2 feature : Field presence and default values (#4642)
      Add C# compiler option to add System.SerializableAttribute to generated message classes (#5208)
      Add method for Any.Is (#5207)
      C# Proto2 feature : Groups (#5183)
      Refactor how group endings are detected in generated C# code (#5686)
      Refactor how group endings are detected in generated C# code (#5686)
      Change MessageType != null in IsInitialized to FieldType == Message || Group (#5688)
      Add some exceptions for MessageParser.ParseFrom (#5588)
      Bump target frameworks of C# programs from netcoreapp1.0 to netcoreapp2.1 (#5838)
      C# Proto2 feature : Extensions (#5350)
      Fix binary compatibility in FieldCodec factory methods (#6380)
      Add proto2 doc
      Remove internal constraint on descriptor proto
      Remove proto2 check from generator
      Reapply custom option accessors from previous PR along with CustomOptions accessor deprecations
      Uncomment option code in OneofDescriptor
      Add checks to make sure values retrieved from CustomOptions match extension values
      Add test protos to test project
      Fix incorrect code gen for string fields with default values
      Add tests for field presence and default values
      Added FieldDescriptor.IsExtension and sealed ExtensionCollection
      file descriptors and the syntax field are really weird with proto2
      Fix issues from interactive rebase and regenerate code
      Added group roundtrip tests and fixed any issues discovered
      Change input message to UnknownFieldSet tests to proto2 test message to test groups.
      Add private "_Extensions" property to speed up IsInitialized checks
      Fix RepeatedExtensionValue.IsInitialized
      Remove unnecessary check in GetIsExtensionsInitialized
      Remove dead HasValue code for ExtensionValue and add null-checks to ExtensionSet.Set
      Add ExtensionSet tests and add checks that non-message extension fields don't fail initialization checks
      Add tests for extension accessor
      Make extension reflection helper use GetOrRegisterExtension
      Reorganize some tests
      Add missing files to Makefile.am
      Regenerate testprotos.pb
      Review changes
      Fix default extension values being unused in FieldCodec
      Revert changes for FieldPresenceAccessor
      Rename ExtensionRegistry.Add(IEnumerable<Extension>) overload to AddRange
      Fix readability in FieldCodec.ForMessage/Group factories
      Fix comment on IExtendableMessage.GetOrRegisterExtension
      GetOrRegisterExtension -> GetOrInitializeExtension
      Add GeneratedMessageTest.Proto2.cs to EXTRA_DIST
      Expose Extension field in FieldDescriptor
      Use proto2 and proto3 in unknown field tests
      Update proto2.md
      Update proto2.md
      Remove wording indicating proto2 support is reimplemented
      Fix many proto2 C# doc comments
      Add length checks to ExtensionCollection
      Use 3 parameter Encoding.FromBytes for default string values
      Change _Extensions property to normal body rather than expression
      Move generated test code to a seperate lib
      Rebase on master
      Add comment to summarize project
      Move generated files in Makefile.am
      Rename Google.Protobuf.Test.CodeGen to Google.Protobuf.Test.TestProtos
      Add project to solution
      Fix typos
      Rename .CodeGen to .TestProtos in Makefile and script
      Add project to Makefile.am

Tapasweni Pathak (4):
      Fix: Undefined behavior in UTF8GenericScanFastAscii
      address review
      fix check for undefined behavior
      fix one more line

TechProofreader (2):
      Update performance.md
      Update performance.md

Thomas BARBIER (1):
      Fix error: unused parameter 'arena' and 'default_value' [-Werror=unused-parameter]

Thomas Colthurst (4):
      Introduce Proto C API; based on cl/198113115 by amauryfa
      Remove cycle in dependency graph
      Fix capsule name. (#4836)
      Update message_module.cc (#4835)

Thomas Van Lenten (38):
      Remove stray 'return'.
      Turn off ALWAYS_SEARCH_USER_PATHS.
      Copy the value when setting message/data fields.
      Add tests to confirm strings/bytes are copied.
      Collapse :protobuf_objc and :objectivec targets.
      Add more Xcode versions to the objc build script.
      Support suppressing the objc package prefix checks on a list of files.
      Let the 9.4 migrator migrate the Swift source.
      Fix up the Xcode project.
      In debug builds output a warning about NSCoding and extensions.
      Improve comment about warning being incomplete.
      Add the missing newlines between repeated extension files.
      TextFormat extension printing fix.
      Add a unittest for ObjC TextFormat extension support.
      ObjC: small improvement to extension serialization.
      Annotate the GPBArray enumerate* apis with NS_NOESCAPE.
      Annotate the GPBDictionary enumerate* apis with NS_NOESCAPE.
      [ObjC] Properly annotate extensions for ARC.
      Small fix to -[GPBEnumDescriptor getValue:forEnumTextFormatName:]
      If enum aliases overlap in ObjC names skip generating the extras.
      [ObjC] Add the jspb cases to the switches so they are complete.
      Remove stale target reference.
      ObjC: Add a Xcode project for tvOS.
      Comments on the next line will go to the next field.
      [ObjC] add support for the TextFormat constants.
      Document why no enum_extensibility is needed for Swift. (#5680)
      Stop enabling more warnings for CXX compiles.
      Use runtime_error vs just exiting for some issues.
      Update some tests for newer clang error messages.
      Add Xcode 11 support to the script.
      Revert bad change to objc conformance test in #6199
      Fix enum writing.
      Add an explicit test using secure coding for added safety.
      Fix typo that snuck in with last commit.
      [ObjC] Don't use unions and instead use memcpy for the type swaps. (#6672)
      [ObjC] Don't use unions and instead use memcpy for the type swaps. (#6672)
      General Xcode 11 support for picking iOS simulators to test against.
      Fix decoding of overencoded booleans.

Tim Gates (1):
      Fix up simple typo: invididual -> individual

Timothy Younger (1):
      Update Composer config in PHP module (#3829)

Toby Hsieh (2):
      Fix RepeatedField#first in Ruby gem (#5293)
      Fix most of the unused variable warnings in Ruby tests (#5313)

Toby Schneider (1):
      Update options.md

Tomo Suzuki (12):
      To setup JDK8
      backslash at the end of the comment
      reverted 64-bit/Dockerfile
      uncomented jdk7
      java_stretch
      build.sh to use linux/dockerfile/test/java_stretch
      continuous.cfg
      Kokoro: run Linkage Monitor on presubmit (#6318)
      Added linkage monitor badge (#6327)
      Local install before changing version
      MVN
      Installing BOM before running Java test

Tristan Pratt (1):
      c# feature(RepeatedField): Capacity property to resize the internal array

Vasiliy Kudryavtsev (1):
      Mark sun.misc dependency as optional

Vitaly Buka (2):
      Parse unknown enum values if target is proto3
      Add stack overflow protection for text format

Vladimir Kovpak (1):
      Improved install command. (#4106)

Vperus (1):
      [csharp] Fix typo

Wang Kirin (4):
      fix typos in examples/README.md
      compelete fix issue 5060: change CodedOutputStream to CodedOutputStream*
      fix typo in io/printer.h
      add test case in cpp_bootstrap_unittest.cc

Wang Qilin (1):
      fix no check for null pointer in encode_decode.c (#6578)

Warren Falk (2):
      fix index out of range error in C# generation using msvc (#1329)
      implement IComparable and comparison operators on Timestamp (#4318)

William Jagels (1):
      Stop unused parameter warnings for generated code in RegisteredArenaDtor

WilliamWhispell (1):
      Use fixed size for bool, float and double field in codec (#5810)

Xiang Dai (2):
      Remove whitespace following trailing backslash
      delete all duplicate empty blanks (#5758)

Yannic (3):
      Update protobuf_deps.bzl
      Update six.BUILD
      Update six.BUILD

Yannic Bonenberger (9):
      [bazel] Use strip_import_prefix for wkp instead of copying them
      [bazel] Add fixes for --incompatible_load_{cc,java,proto}_rules_from_bzl
      Add test to verify BUILD- and cmake-files are in sync with src/Makefile.am
      Address review comments
      Print logs of failing tests
      Copy files to temp-dir for testing
      [bazel] Add fixes for --incompatible_load_{cc,java,proto}_rules_from_bzl (Part 2)
      [bazel] Load python rules from @rules_python
      [bazel] Add `strip_prefix` to download of @six

Yilun Chong (39):
      Fix python install, cat java error log for kokoro build
      Fix java benchmark bug, fix python library_path
      Fix python benchmark build
      Add proto2 to proto3 util
      Fix
      fix commonjs js provide GOOGLE_CHECK
      fix linux kokoro build in docker
      fix python cpp kokoro build
      fix golang kokoro linux build
      add php benchmark
      Sync internal benchmark changes
      Add JS and Protobuf.js benchmark
      fix third_party/benchmark init
      Fix js reader.js's skipGroup
      fix
      fix
      fix
      fix
      fix filename and newline
      fix java build by changing mvn to online
      Add node and php to benchmark dashboard
      fix comment out
      fix function names
      fix
      Fix benchmark to use docker image on kokoro (#5481)
      Fix python benchmark throughput; Change back to not using docker for benchmar (#5503)
      Down-integrate internal changes to github. (#5555)
      Down-integrate internal changes to github. (#5566)
      Down-integrate internal changes to github. (#5575)
      down integration from internal
      Fix failure test by regenerating descriptor and revert golden file (#5762)
      fix macos build for High Sierra (#5780)
      fix csharp by regenerate descriptor
      fix conformance test for text format
      fix BUILD for adding any_lite.cc
      fix mac python cpp building (#5786)
      fix macos build for High Sierra (#5780)
      fix mac python cpp building (#5786)
      vaccum commit

Yuchen Xie (1):
      Update minimal Python version to 2.7 (#4207)

Yun Peng (2):
      Exclude command_line_interface_unittest.cc in MSVC build
      Add "src/**/*.inc" to //:protobuf_headers

Yuri Vanin (1):
      Use cached value for type safety check during unpacking of Any message (#5698)

Yuzhang Hu (1):
      Ignore python .egg file to make git status clean #5004

Zachary Anker (1):
      When initializing a message, skip a field if value is nil (#3693)

bitspill (1):
      doc: apply consistent indentation to Any examples (#5597)

bmoyles0117 (1):
      Raise error for JSON overflow encoding in Ruby (#5752) (#5861)

boscosiu (2):
      JSON string output funtions should clear() the destination first
      link libatomic on systems without adequate builtin atomics

cburdick (1):
      Used C++ style casts

cclauss (3):
      import inspect (#3507)
      print() is a function in Python 3 (#4754)
      global __version__ In setup.py (#4753)

debugx (1):
      fixed typo

depristo (1):
      Remove write-strings warning from COPTs.

dickmao (1):
      protobuf.pc.in does not reflect CXXFLAGS

dmaclach (3):
      Add header need for module maps.
      Remove OSReadLittle* due to alignment requirements (#6678)
      Remove OSReadLittle* due to alignment requirements (#6678)

dyyap (1):
      Updated README.md (#5366)

frrakn (1):
      Fix documentation on message differencer. (#5788)

giokara-oqton (1):
      fix json_format.ParseDict modifies input (#5267)

grindhold (1):
      pyext: missing cast to constant char* (#5713)

haoyuanli (1):
      Fix typo 'pythong'

i9 (1):
      Add proto3 to solidity link

igorpeshansky (1):
      Add Google::Protobuf::Any.pack convenience class method. (#4719)

johnlow95 (1):
      adding of hyperlink of the PHP (#4985)

leovitch (1):
      [ObjC] Add ability to introspect list of enum values (#4678)

marwan-at-work (1):
      Add twirpql ID to global registry

mdepristo (1):
      Remove unclear comment.

medinandres (1):
      proto_writer.h: RenderBytes is an override. Marking it. (#4707)

michaelbausor (4):
      PHP: Add support for primitive types in setters (#5126)
      PHP: Add Enum methods for converting to/from strings (#5342)
      PHP: Exclude repeated and map fields from normalization in constructor (#5723)
      PHP: Exclude repeated and map fields from normalization in constructor (#5723)

micw523 (1):
      Remove Debug Statement for Win/MinGW (#5283)

ming (2):
      check provided size
      not empty

mkosieradzki (1):
      Added support for Visual Studio 2017 in gitignore

myd7349 (2):
      No define strtoll/strtoull for VS2013 and above
      No define strtoll/strtoull for VS2013 and above

parker (1):
      Google::Protobuf::Struct can access a missing key (#3846)

reed-lau (4):
      Add move constructor for Reflection's SetString
      add movable String interface Reflection
      use move method for SetString
      replace 'const std::string&' with 'std::string'(by value)

rmstar (1):
      Add podspec for C++ (#6404)

salamaniibm (1):
      adding protoc support for s390x

scentini (2):
      use flag_values = {"@bazel_tools//tools/cpp:compiler": "x"} for compiler config_settings
      Create compiler_config_setting.bzl

senhalil (1):
      Small patch to handle -Wfloat-equal warnings

toc007 (1):
      Ruby nested msg caps (#5564)

veawor (1):
      Make shared libraries be able to link to MSVC static runtime libraries, so that VC runtime is not required.

vervaekejonathan (1):
      Fix parameters declaration

vijay-bhatt (1):
      Ignore unknown enum received in json when ignoreUnknownFields flag is set (#4825)

woegster (2):
      avoid c++ macro redifitnion on windows
      more potential windows macro redefinition

xuwei-k (1):
      update ScalaPB url

yejianwu (1):
      support specify C++ STL for android

吕海涛 (1):
      add JSON_UNESCAPED_UNICODE option (#4191)
 main
 21.8-92 
…
 3.11.1-58
@fenrus75
@clrpackages
fenrus75 authored and clrpackages committed on Dec 10, 2019 
1 parent 1268224 commit 6235656fd35a22e202cf7770046b91cc4b4ee227
Show file tree Hide file tree
Showing 9 changed files with 6,017 additions and 6,325 deletions.
 2  
Makefile
@@ -1,5 +1,5 @@
PKG_NAME := protobuf
URL = https://github.com/protocolbuffers/protobuf/releases/download/v3.6.1/protobuf-all-3.6.1.tar.gz
URL = https://github.com/protocolbuffers/protobuf/releases/download/v3.11.1/protobuf-all-3.11.1.tar.gz
ARCHIVES = 

include ../common/Makefile.common
 1  
configure_misses
@@ -1,2 +1,3 @@
Configure miss: whether __SUNPRO_CC is declared
Configure miss: whether -latomic is needed
Configure miss: gtest-config
  5  
options.conf
@@ -1,8 +1,9 @@
[package]
name = protobuf
url = https://github.com/protocolbuffers/protobuf/releases/download/v3.6.1/protobuf-all-3.6.1.tar.gz
url = https://github.com/protocolbuffers/protobuf/releases/download/v3.11.1/protobuf-all-3.11.1.tar.gz
archives = 
giturl = https://github.com/google/protobuf.git
domain = 

[autospec]
# build 32 bit libraries
@@ -17,7 +18,7 @@ autoupdate = false
broken_c++ = false
# disable parallelization during build
broken_parallel_build = false
# this package is a library compatability package and only ships versioned library files
# this package is a library compatibility package and only ships versioned library files
compat = false
# set conservative build flags
conservative_flags = false
  65  
protobuf.spec
@@ -3,11 +3,11 @@
# Generated by: autospec.py
#
Name     : protobuf
Version  : 3.6.1
Release  : 54
URL      : https://github.com/protocolbuffers/protobuf/releases/download/v3.6.1/protobuf-all-3.6.1.tar.gz
Source0  : https://github.com/protocolbuffers/protobuf/releases/download/v3.6.1/protobuf-all-3.6.1.tar.gz
Summary  : Google's Data Interchange Format
Version  : 3.11.1
Release  : 55
URL      : https://github.com/protocolbuffers/protobuf/releases/download/v3.11.1/protobuf-all-3.11.1.tar.gz
Source0  : https://github.com/protocolbuffers/protobuf/releases/download/v3.11.1/protobuf-all-3.11.1.tar.gz
Summary  : Protocol Buffers - Google's data interchange format
Group    : Development/Tools
License  : Apache-2.0 BSD-3-Clause
Requires: protobuf-bin = %{version}-%{release}
@@ -33,8 +33,13 @@ Patch2: 0002-Ensure-everything-can-build-in-tree.patch
Patch3: 0003-Add-gtest-symlink-to-account-for-the-rest-of-the-bro.patch

%description
The Google Mock class generator is an application that is part of cppclean.
visit http://code.google.com/p/cppclean/
This directory contains the Protocol Buffers runtime implementation via both a
pure PHP package and a native c extension. The pure PHP package is intended to
provide usability to wider range of PHP platforms, while the c extension is
intended to provide higher performance. Both implementations provide the same
runtime APIs and share the same generated code. Users don’t need to re-generate
code for the same proto definition when they want to switch the implementation
later.

%package bin
Summary: bin components for the protobuf package.
@@ -52,6 +57,7 @@ Requires: protobuf-lib = %{version}-%{release}
Requires: protobuf-bin = %{version}-%{release}
Provides: protobuf-devel = %{version}-%{release}
Requires: protobuf = %{version}-%{release}
Requires: protobuf = %{version}-%{release}

%description dev
dev components for the protobuf package.
@@ -93,7 +99,8 @@ python3 components for the protobuf package.


%prep
%setup -q -n protobuf-3.6.1
%setup -q -n protobuf-3.11.1
cd %{_builddir}/protobuf-3.11.1
%patch1 -p1
%patch2 -p1
%patch3 -p1
@@ -103,7 +110,8 @@ export http_proxy=http://127.0.0.1:9/
export https_proxy=http://127.0.0.1:9/
export no_proxy=localhost,127.0.0.1,0.0.0.0
export LANG=C.UTF-8
export SOURCE_DATE_EPOCH=1569439675
export SOURCE_DATE_EPOCH=1575545692
# -Werror is for werrorists
export GCC_IGNORE_WERROR=1
export CFLAGS="$CFLAGS -fno-lto "
export FCFLAGS="$CFLAGS -fno-lto "
@@ -113,13 +121,13 @@ export CXXFLAGS="$CXXFLAGS -fno-lto "
make  %{?_smp_mflags}

%install
export SOURCE_DATE_EPOCH=1569439675
export SOURCE_DATE_EPOCH=1575545692
rm -rf %{buildroot}
mkdir -p %{buildroot}/usr/share/package-licenses/protobuf
cp LICENSE %{buildroot}/usr/share/package-licenses/protobuf/LICENSE
cp third_party/googletest/googlemock/LICENSE %{buildroot}/usr/share/package-licenses/protobuf/third_party_googletest_googlemock_LICENSE
cp third_party/googletest/googlemock/scripts/generator/LICENSE %{buildroot}/usr/share/package-licenses/protobuf/third_party_googletest_googlemock_scripts_generator_LICENSE
cp third_party/googletest/googletest/LICENSE %{buildroot}/usr/share/package-licenses/protobuf/third_party_googletest_googletest_LICENSE
cp %{_builddir}/protobuf-3.11.1/LICENSE %{buildroot}/usr/share/package-licenses/protobuf/1b5a14d06dd784e88dadc5c68344be2dc13875b6
cp %{_builddir}/protobuf-3.11.1/third_party/googletest/googlemock/LICENSE %{buildroot}/usr/share/package-licenses/protobuf/5a2314153eadadc69258a9429104cd11804ea304
cp %{_builddir}/protobuf-3.11.1/third_party/googletest/googlemock/scripts/generator/LICENSE %{buildroot}/usr/share/package-licenses/protobuf/1d4719e04eaa4909ab5a59ef5cb04d2a5517716e
cp %{_builddir}/protobuf-3.11.1/third_party/googletest/googletest/LICENSE %{buildroot}/usr/share/package-licenses/protobuf/5a2314153eadadc69258a9429104cd11804ea304
%make_install
## install_append content
pushd python
@@ -174,6 +182,7 @@ popd
/usr/include/google/protobuf/empty.pb.h
/usr/include/google/protobuf/empty.proto
/usr/include/google/protobuf/extension_set.h
/usr/include/google/protobuf/extension_set_inl.h
/usr/include/google/protobuf/field_mask.pb.h
/usr/include/google/protobuf/field_mask.proto
/usr/include/google/protobuf/generated_enum_reflection.h
@@ -186,6 +195,7 @@ popd
/usr/include/google/protobuf/inlined_string_field.h
/usr/include/google/protobuf/io/coded_stream.h
/usr/include/google/protobuf/io/gzip_stream.h
/usr/include/google/protobuf/io/io_win32.h
/usr/include/google/protobuf/io/printer.h
/usr/include/google/protobuf/io/strtod.h
/usr/include/google/protobuf/io/tokenizer.h
@@ -203,6 +213,10 @@ popd
/usr/include/google/protobuf/message_lite.h
/usr/include/google/protobuf/metadata.h
/usr/include/google/protobuf/metadata_lite.h
/usr/include/google/protobuf/parse_context.h
/usr/include/google/protobuf/port.h
/usr/include/google/protobuf/port_def.inc
/usr/include/google/protobuf/port_undef.inc
/usr/include/google/protobuf/reflection.h
/usr/include/google/protobuf/reflection_ops.h
/usr/include/google/protobuf/repeated_field.h
@@ -219,14 +233,15 @@ popd
/usr/include/google/protobuf/stubs/hash.h
/usr/include/google/protobuf/stubs/logging.h
/usr/include/google/protobuf/stubs/macros.h
/usr/include/google/protobuf/stubs/map_util.h
/usr/include/google/protobuf/stubs/mutex.h
/usr/include/google/protobuf/stubs/once.h
/usr/include/google/protobuf/stubs/platform_macros.h
/usr/include/google/protobuf/stubs/port.h
/usr/include/google/protobuf/stubs/singleton.h
/usr/include/google/protobuf/stubs/status.h
/usr/include/google/protobuf/stubs/stl_util.h
/usr/include/google/protobuf/stubs/stringpiece.h
/usr/include/google/protobuf/stubs/strutil.h
/usr/include/google/protobuf/stubs/template_util.h
/usr/include/google/protobuf/text_format.h
/usr/include/google/protobuf/timestamp.pb.h
@@ -244,7 +259,6 @@ popd
/usr/include/google/protobuf/util/type_resolver_util.h
/usr/include/google/protobuf/wire_format.h
/usr/include/google/protobuf/wire_format_lite.h
/usr/include/google/protobuf/wire_format_lite_inl.h
/usr/include/google/protobuf/wrappers.pb.h
/usr/include/google/protobuf/wrappers.proto
/usr/lib64/libprotobuf-lite.so
@@ -255,19 +269,18 @@ popd

%files lib
%defattr(-,root,root,-)
/usr/lib64/libprotobuf-lite.so.17
/usr/lib64/libprotobuf-lite.so.17.0.0
/usr/lib64/libprotobuf.so.17
/usr/lib64/libprotobuf.so.17.0.0
/usr/lib64/libprotoc.so.17
/usr/lib64/libprotoc.so.17.0.0
/usr/lib64/libprotobuf-lite.so.22
/usr/lib64/libprotobuf-lite.so.22.0.1
/usr/lib64/libprotobuf.so.22
/usr/lib64/libprotobuf.so.22.0.1
/usr/lib64/libprotoc.so.22
/usr/lib64/libprotoc.so.22.0.1

%files license
%defattr(0644,root,root,0755)
/usr/share/package-licenses/protobuf/LICENSE
/usr/share/package-licenses/protobuf/third_party_googletest_googlemock_LICENSE
/usr/share/package-licenses/protobuf/third_party_googletest_googlemock_scripts_generator_LICENSE
/usr/share/package-licenses/protobuf/third_party_googletest_googletest_LICENSE
/usr/share/package-licenses/protobuf/1b5a14d06dd784e88dadc5c68344be2dc13875b6
/usr/share/package-licenses/protobuf/1d4719e04eaa4909ab5a59ef5cb04d2a5517716e
/usr/share/package-licenses/protobuf/5a2314153eadadc69258a9429104cd11804ea304

%files python
%defattr(-,root,root,-)
 2  
release
@@ -1 +1 @@
54
55
 12,260  
symbols
Large diffs are not rendered by default.

 2  
upstream
@@ -1 +1 @@
d403d06a8775375e7fe2557b38733205dfbc2e9e/protobuf-all-3.6.1.tar.gz
88e481e9a3966a485a146416d0b1839a1d59e7af/protobuf-all-3.11.1.tar.gz
 2  
versions
@@ -1 +1 @@
3.6.1
3.11.1
 3  
whatrequires
@@ -1,6 +1,7 @@
# This file contains recursive sources that require this package
apache-hadoop
deprecated-python-dldt
dldt
dldt-model-optimizer
grpc
grpcio
onnx
1 comment on commit 6235656
@zakwarlord7
zakwarlord7 commented on 6235656 25 seconds ago
'require' :' 'test'+| Security enhanced document. See back for details NO.name: lint

on: [push, pull_request]

jobs:
check-formatting:
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v2
- uses: actions/setup-python@v3
with:
python-version: "3.8"
- name: Install dependencies
run: |
python -m pip install flake8
- name: Analysing the code with Flake8
run: |
flake8 $(git ls-files '*.py')

@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
 You’re not receiving notifications from this thread.
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
[update to 3.11.1] Fix to allow a compilation under mips big endian w… · clearlinux-pkgs/protobuf@6235656 :
  ---
title: Working with the RubyGems registry
intro: 'You can configure RubyGems to publish a package to {% data variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in a Ruby project with Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: RubyGems registry
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Prerequisites

- You must have RubyGems 2.4.1 or higher. To find your RubyGems version:

  ```shell
  $ gem --version
  ```

- You must have bundler 1.6.4 or higher. To find your Bundler version:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

To publish and install gems, you can configure RubyGems or Bundler to authenticate to {% data variables.product.prodname_registry %} using your {% data variables.product.pat_generic %}.

To publish new gems, you need to authenticate to {% data variables.product.prodname_registry %} with RubyGems by editing your *~/.gem/credentials* file to include your {% data variables.product.pat_v1 %}. Create a new *~/.gem/credentials* file if this file doesn't exist.

For example, you would create or edit a *~/.gem/credentials* to include the following, replacing *TOKEN* with your {% data variables.product.pat_generic %}.

```shell
---
:github: Bearer TOKEN
```

To install gems, you need to authenticate to {% data variables.product.prodname_registry %} by updating your gem sources to include `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. You must replace:
  - `USERNAME` with your {% data variables.product.prodname_dotcom %} username.
  - `TOKEN` with your {% data variables.product.pat_v1 %}.
  - `OWNER` with the name of the user or organization account that owns the repository containing your project.{% ifversion ghes %}
  - `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the hostname of your {% data variables.product.prodname_ghe_server %} instance.
{% elsif ghae %}
  - `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.location.product_location %}.
{% endif %}

If you would like your package to be available globally, you can run the following command to add your registry as a source.
```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
```

To authenticate with Bundler, configure Bundler to use your {% data variables.product.pat_v1 %}, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your {% data variables.product.pat_generic %}, and *OWNER* with the name of the user or organization account that owns the repository containing your project.{% ifversion ghes %} Replace `REGISTRY-URL` with the URL for your instance's RubyGems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the hostname of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %}Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.location.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
```

## Publishing a package

{% data reusables.package_registry.default-name %} For example, when you publish `<GEM NAME>` to the `octo-org` organization, {% data variables.product.prodname_registry %} publishes the gem to the `octo-org/<GEM NAME>` repository. For more information on creating your gem, see "[Make your own gem](http://guides.rubygems.org/make-your-own-gem/)" in the RubyGems documentation.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Build the package from the *gemspec* to create the *.gem* package.
  ```
  gem build <GEM NAME>.gemspec
  ```
3. Publish a package to {% data variables.product.prodname_registry %}, replacing `OWNER` with the name of the user or organization account that owns the repository containing your project and `<GEM NAME>` with the name of your gem package.{% ifversion ghes %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.location.product_location %}.{% endif %}

  ```
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
  <GEM NAME>-0.0.1.gem
  ```

## Publishing multiple packages to the same repository

To publish multiple gems to the same repository, you can include the URL to the {% data variables.product.prodname_dotcom %} repository in the `github_repo` field in `gem.metadata`. If you include this field, {% data variables.product.prodname_dotcom %} matches the repository based on this value, instead of using the gem name.{% ifversion ghes or ghae %} Replace *HOSTNAME* with the host name of {% data variables.location.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Installing a package

You can use gems from {% data variables.product.prodname_registry %} much like you use gems from *rubygems.org*. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the *~/.gemrc* file or by using Bundler and editing your *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. For Bundler, add your {% data variables.product.prodname_dotcom %} user or organization as a source in your *Gemfile* to fetch gems from this new source. For example, you can add a new `source` block to your *Gemfile* that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing *GEM NAME* with the package you want to install from {% data variables.product.prodname_registry %} and *OWNER* with the user or organization that owns the repository containing the gem you want to install.{% ifversion ghes %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.location.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. For Bundler versions earlier than 1.7.0, you need to add a new global `source`. For more information on using Bundler, see the [bundler.io documentation](https://bundler.io/gemfile.html).

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Install the package:
  ```
  $ gem install <GEM NAME> --version "0.1.1"
  ```

## Further reading

- "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)"

