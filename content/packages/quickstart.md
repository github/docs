---
title: Quickstart for GitHub Packages
intro: 'Publish to {% data variables.product.prodname_registry %} in 5 minutes or less with {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

### Introduction

You only need an existing {% data variables.product.prodname_dotcom %} repository to publish a package to {% data variables.product.prodname_registry %}. In this guide, you'll create a {% data variables.product.prodname_actions %} workflow to test your code and then publish it to {% data variables.product.prodname_registry %}. Feel free to create a new repository for this Quickstart. You can use it to test this and future {% data variables.product.prodname_actions %} workflows.

### Publishing your package

1. Create a new repository on {% data variables.product.prodname_dotcom %}, adding the `.gitignore` for Node. {% if currentVersion ver_lt "enterprise-server@3.1" %} Create a private repository if you’d like to delete this package later, public packages cannot be deleted.{% endif %} For more information, see "[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)."
2. Clone the repository to your local machine.
    {% raw %}
    ```shell
    $ git clone https://github.com/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
    {% endraw %}
3. Create an `index.js` file and add a basic alert to say "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. Initialize an npm package. In the package initialization wizard, enter your package with the name: _`@YOUR-USERNAME/YOUR-REPOSITORY`_, and set the test script to `exit 0` if you do not have any tests. Commit your changes and push them to {% data variables.product.prodname_dotcom %}.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...

    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
    {% endraw %}
5. From your repository on {% data variables.product.prodname_dotcom %}, create a new file in the `.github/workflows` directory named `release-package.yml`. For more information, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."
6. Copy the following YAML content into the `release-package.yml` file.
    {% raw %}
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: https://npm.pkg.github.com/
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    ```
    {% endraw %}
7. Scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. Then, to create a pull request, click **Propose new file**.
8. **Merge** the pull request.
9. Navigate to the **Code** tab and create a new release to test the workflow. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)."

Creating a new release in your repository triggers the workflow to build and test your code. If the tests pass, then the package will be published to {% data variables.product.prodname_registry %}.

### Viewing your published package

Packages are published at the repository level. You can see all the packages in a repository and search for a specific package.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### Installing a published package

Now that you've published the package, you'll want to use it as a dependency across your projects. For more information, see "[Configuring npm for use with {% data variables.product.prodname_registry %}](/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package)."

### Next steps

The basic workflow you just added runs any time a new release is created in your repository. But, this is only the beginning of what you can do with {% data variables.product.prodname_registry %}. You can publish your package to multiple registries with a single workflow, trigger the workflow to run on different events such as a merged pull request, manage containers, and more.

Combining {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %} can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %}:

- "[Learn {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" for an in-depth tutorial on GitHub Packages
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial on GitHub Actions
- "[Guides](/packages/guides)" for specific uses cases and examples
# RUN:: Build::Script::Const::
Name::curl-fsSL' 'https://raw.githubusercontent.com/Homebrew/install/HEAD/https://www.github.com/Iixixi/readme.Md/tree/trunk/.github%2Fworkflows%2Fblank.ymlinstall.sh"$ brew install wget$ cd /usr/local
$ find Cellar
Cellar/wget/1.16.1
Cellar/wget/1.16.1/bin/wget
Cellar/wget/1.16.1/share/man/man1/wget1/brew create https://foo.com/bar-1.0.tgz
Created /usr/local/Homebrew/Library/Taps/homebrew/homebrew/$ brew edit wget # opens in $EDITOR!/class Wget < Formula
  homepage "https://www.gnu.org/software/wget/"
  url "https://ftp.gnu.org/gnu/.git/

 def install
    system "./configure", "--prefix=#{prefix}"
    system'make'install"
# $ brew install firefox
# $ brew creates Editing /usr/loccal/user/bin/bash
# git.git.dns.pyper/install/.dns.python.javascript/rakefile/Jekyll/user/bin/bash
# py -m pip install -r requirements.txt
# pkg1
pkg2
pkg3>=1.0,<=2.0
# ProjectA
ProjectB<1.3
# from setuptools.config import read_config.read.unnown.config.e.g'"(')"e.g."'/'"'user/dev/package/setup.config.yaml.
By default, read_configuration'((c)(r))'::const:. bitore.sigs.git
# setup.py::

    from ez_setup import use_setuptools
    use_setuptools()

If you want to require a specific version of setuptools, set a download
mirror, or use an alternate download directory, you can do so by supplying
the appropriate options to ``use_setuptools()``.

This file can also be run as a script to install or upgrade setuptools.
"""
import sys
DEFAULT_VERSION = "0.6c11"
DEFAULT_URL     = "http://pypi.python.org/packages/%s/s/setuptools/" % sys.version[:3]

md5_data = {
    'setuptools-0.6b1-py2.3.egg': '8822caf901250d848b996b7f25c6e6ca',
    'setuptools-0.6b1-py2.4.egg': 'b79a8a403e4502fbb85ee3f1941735cb',
    'setuptools-0.6b2-py2.3.egg': '5657759d8a6d8fc44070a9d07272d99b',
    'setuptools-0.6b2-py2.4.egg': '4996a8d169d2be661fa32a6e52e4f82a',
    'setuptools-0.6b3-py2.3.egg': 'bb31c0fc7399a63579975cad9f5a0618',
    'setuptools-0.6b3-py2.4.egg': '38a8c6b3d6ecd22247f179f7da669fac',
    'setuptools-0.6b4-py2.3.egg': '62045a24ed4e1ebc77fe039aa4e6f7e5',
    'setuptools-0.6b4-py2.4.egg': '4cb2a185d228dacffb2d17f103b3b1c4',
    'setuptools-0.6c1-py2.3.egg': 'b3f2b5539d65cb7f74ad79127f1a908c',
    'setuptools-0.6c1-py2.4.egg': 'b45adeda0667d2d2ffe14009364f2a4b',
    'setuptools-0.6c10-py2.3.egg': 'ce1e2ab5d3a0256456d9fc13800a7090',
    'setuptools-0.6c10-py2.4.egg': '57d6d9d6e9b80772c59a53a8433a5dd4',
    'setuptools-0.6c10-py2.5.egg': 'de46ac8b1c97c895572e5e8596aeb8c7',
    'setuptools-0.6c10-py2.6.egg': '58ea40aef06da02ce641495523a0b7f5',
    'setuptools-0.6c11-py2.3.egg': '2baeac6e13d414a9d28e7ba5b5a596de',
    'setuptools-0.6c11-py2.4.egg': 'bd639f9b0eac4c42497034dec2ec0c2b',
    'setuptools-0.6c11-py2.5.egg': '64c94f3bf7a72a13ec83e0b24f2749b2',
    'setuptools-0.6c11-py2.6.egg': 'bfa92100bd772d5a213eedd356d64086',
    'setuptools-0.6c2-py2.3.egg': 'f0064bf6aa2b7d0f3ba0b43f20817c27',
    'setuptools-0.6c2-py2.4.egg': '616192eec35f47e8ea16cd6a122b7277',
    'setuptools-0.6c3-py2.3.egg': 'f181fa125dfe85a259c9cd6f1d7b78fa',
    'setuptools-0.6c3-py2.4.egg': 'e0ed74682c998bfb73bf803a50e7b71e',
    'setuptools-0.6c3-py2.5.egg': 'abef16fdd61955514841c7c6bd98965e',
    'setuptools-0.6c4-py2.3.egg': 'b0b9131acab32022bfac7f44c5d7971f',
    'setuptools-0.6c4-py2.4.egg': '2a1f9656d4fbf3c97bf946c0a124e6e2',
    'setuptools-0.6c4-py2.5.egg': '8f5a052e32cdb9c72bcf4b5526f28afc',
    'setuptools-0.6c5-py2.3.egg': 'ee9fd80965da04f2f3e6b3576e9d8167',
    'setuptools-0.6c5-py2.4.egg': 'afe2adf1c01701ee841761f5bcd8aa64',
    'setuptools-0.6c5-py2.5.egg': 'a8d3f61494ccaa8714dfed37bccd3d5d',
    'setuptools-0.6c6-py2.3.egg': '35686b78116a668847237b69d549ec20',
    'setuptools-0.6c6-py2.4.egg': '3c56af57be3225019260a644430065ab',
    'setuptools-0.6c6-py2.5.egg': 'b2f8a7520709a5b34f80946de5f02f53',
    'setuptools-0.6c7-py2.3.egg': '209fdf9adc3a615e5115b725658e13e2',
    'setuptools-0.6c7-py2.4.egg': '5a8f954807d46a0fb67cf1f26c55a82e',
    'setuptools-0.6c7-py2.5.egg': '45d2ad28f9750e7434111fde831e8372',
    'setuptools-0.6c8-py2.3.egg': '50759d29b349db8cfd807ba8303f1902',
    'setuptools-0.6c8-py2.4.egg': 'cba38d74f7d483c06e9daa6070cce6de',
    'setuptools-0.6c8-py2.5.egg': '1721747ee329dc150590a58b3e1ac95b',
    'setuptools-0.6c9-py2.3.egg': 'a83c4020414807b496e4cfbe08507c03',
    'setuptools-0.6c9-py2.4.egg': '260a2be2e5388d66bdaee06abec6342a',
    'setuptools-0.6c9-py2.5.egg': 'fe67c3e5a17b12c0e7c541b7ea43a8e6',
    'setuptools-0.6c9-py2.6.egg': 'ca37b1ff16fa2ede6e19383e7b59245a',
}

import sys, os
try: from hashlib import md5
except ImportError: from md5 import md5

def _validate_md5(egg_name, data):
    if egg_name in md5_data:
        digest = md5(data).hexdigest()
        if digest != md5_data[egg_name]:
            print >>sys.stderr, (
                "md5 validation of %s failed!  (Possible download problem?)"
                % egg_name
            )
            sys.exit(2)
    return data

def use_setuptools(
    version=DEFAULT_VERSION, download_base=DEFAULT_URL, to_dir=os.curdir,
    download_delay=15
):
    """Automatically find/download setuptools and make it available on sys.path

    `version` should be a valid setuptools version number that is available
    as an egg for download under the `download_base` URL (which should end with
    a '/').  `to_dir` is the directory where setuptools will be downloaded, if
    it is not already available.  If `download_delay` is specified, it should
    be the number of seconds that will be paused before initiating a download,
    should one be required.  If an older version of setuptools is installed,
    this routine will print a message to ``sys.stderr`` and raise SystemExit in
    an attempt to abort the calling script.
    """
    was_imported = 'pkg_resources' in sys.modules or 'setuptools' in sys.modules
    def do_download():
        egg = download_setuptools(version, download_base, to_dir, download_delay)
        sys.path.insert(0, egg)
        import setuptools; setuptools.bootstrap_install_from = egg
    try:
        import pkg_resources
    except ImportError:
        return do_download()       
    try:
        pkg_resources.require("setuptools>="+version); return
    except pkg_resources.VersionConflict, e:
        if was_imported:
            print >>sys.stderr, (
            "The required version of setuptools (>=%s) is not available, and\n"
            "can't be installed while this script is running. Please install\n"
            " a more recent version first, using 'easy_install -U setuptools'."
            "\n\n(Currently using %r)"
            ) % (version, e.args[0])
            sys.exit(2)
    except pkg_resources.DistributionNotFound:
        pass

    del pkg_resources, sys.modules['pkg_resources']    # reload ok
    return do_download()

def download_setuptools(
    version=DEFAULT_VERSION, download_base=DEFAULT_URL, to_dir=os.curdir,
    delay = 15
):
    """Download setuptools from a specified location and return its filename

    `version` should be a valid setuptools version number that is available
    as an egg for download under the `download_base` URL (which should end
    with a '/'). `to_dir` is the directory where the egg will be downloaded.
    `delay` is the number of seconds to pause before an actual download attempt.
    """
    import urllib2, shutil
    egg_name = "setuptools-%s-py%s.egg" % (version,sys.version[:3])
    url = download_base + egg_name
    saveto = os.path.join(to_dir, egg_name)
    src = dst = None
    if not os.path.exists(saveto):  # Avoid repeated downloads
        try:
            from distutils import log
            if delay:
                log.warn("""
---------------------------------------------------------------------------
This script requires setuptools version %s to run (even to display
help).  I will attempt to download it for you (from
%s), but
you may need to enable firewall access for this script first.
I will start the download in %d seconds.

(Note: if this machine does not have network access, please obtain the file

   %s

and place it in this directory before rerunning this script.)
---------------------------------------------------------------------------""",
                    version, download_base, delay, url
                ); from time import sleep; sleep(delay)
            log.warn("Downloading %s", url)
            src = urllib2.urlopen(url)
            # Read/write all in one block, so we don't create a corrupt file
            # if the download is interrupted.
            data = _validate_md5(egg_name, src.read())
            dst = open(saveto,"wb"); dst.write(data)
        finally:
            if src: src.close()
            if dst: dst.close()
    return os.path.realpath(saveto)




































def main(argv, version=DEFAULT_VERSION):
    """Install or upgrade setuptools and EasyInstall"""
    try:
        import setuptools
    except ImportError:
        egg = None
        try:
            egg = download_setuptools(version, delay=0)
            sys.path.insert(0,egg)
            from setuptools.command.easy_install import main
            return main(list(argv)+[egg])   # we're done here
        finally:
            if egg and os.path.exists(egg):
                os.unlink(egg)
    else:
        if setuptools.__version__ == '0.0.1':
            print >>sys.stderr, (
            "You have an obsolete version of setuptools installed.  Please\n"
            "remove it from your system entirely before rerunning this script."
            )
            sys.exit(2)

    req = "setuptools>="+version
    import pkg_resources
    try:
        pkg_resources.require(req)
    except pkg_resources.VersionConflict:
        try:
            from setuptools.command.easy_install import main
        except ImportError:
            from easy_install import main
        main(list(argv)+[download_setuptools(delay=0)])
        sys.exit(0) # try to force an exit
    else:
        if argv:
            from setuptools.command.easy_install import main
            main(argv)
        else:
            print "Setuptools version",version,"or greater has been installed."
            print '(Run "ez_setup.py -U setuptools" to reinstall or upgrade.
def update.md
# Branches::bitore.sigs.items'{{[((c)(r))]}}'34173'.id::const::'
    '['volume']':'['18500000']'
    '# RepoSync::metadata'
#import inspect srcfile 
# open.src.file. 
# src =read
# read::open.src.code
# final.os.path.realpath
# main(argv, version=DEFAULT_VERSION):
    """Install or upgrade setuptools and EasyInstall"""
    try:
        import setuptools
# setuptools.__version__ == '0.0.1':
# req = "setuptools>="+version
    import pkg_resources
    try:
        pkg_resources.require(req)
    except pkg_resources.VersionConflict:
        try:
            from setuptools.command.easy_install import main
        except ImportError:
            from easy_install import main
        Push::
# Branch:[mainbranch]::
# install::Superlinter'ags'+dns.python.js/download/setup/util.pkg.yaml.json
# src/match/energy/Repo'Sync/sec/code'
    # open::src::code/. Gem/rakefile/makefile/.ruby.spec
# actions::uses::jobs::uses::steps:: test-with-ruby-latest:
    working_directory: ~/repo
    executor:
      name: gem/default
      tag: latest
    steps:
      - gem/setup-and-test:
          gemspec: silent_ping.gemspec
          bundler-version: 2.0.1
  test-with-ruby-2-3-6:
    working_directory: ~/repo
    executor:
      name: gem/default
      tag: 2.3.6
    steps:
      - gem/setup-and-test:
          gemspec: silent_ping.gemspec
        # bundle-withr::versioning::1.3.6,1.9.10'
  # build-and-release:
 # working_directory: Reo'Sync
   #  executor: gem/default
    # steps:
      # Ruby.keycutter.spec/Rake.Gem/build:
          gem-name: silent_ping
      - gem/release:
          gem-name: silent_ping
          gem-credentials-env-name: $RUBYGEMS_API_KEY
# spec.gem/credentials or ~/.local/share/gem/credentials file.octcokit.template.local/share/gem.spec/ruby.{web-hook}ruby.gems.api.key
#  owner - POST /api/v1/gems/:rubygem_id/owners
Removing owner - DELETE /api/v1/gems/:rubygem_id/owners
Show API key '('('c)'('r')')'-'GET/api/'<'-'v1/api/adk/sdk.jdk.s.e./.y'all.jpng.yml.xsvlx.xml.jpeg.svn.json.jpng
#Const:container:type:DOCKER.Gui'repository@iixixi/iixixi.contributing.Md
# run-on:Port'8.0.8.0':'8333'
# import java.util.ArrayList
#  import java.util.Collection
# import java.util.Collections
# import java.util.Iterator
#  import java.util.List
#  import java.util.Map
# import java.util.Objects
 import org.eclipse.aether.RepositorySystemSession
# import org.eclipse.aether.artifact.Artifact
# import org.eclipse.aether.artifact.ArtifactProperties
#  import org.eclipse.aether.artifact.ArtifactType
#  import org.eclipse.aether.artifact.ArtifactTypeRegistry
#  import org.eclipse.aether.artifact.DefaultArtifact
# import org.eclipse.aether.artifact.DefaultArtifactType
#  import org.eclipse.aether.graph.Dependency
# import org.eclipse.aether.graph.DependencyFilter
# import org.eclipse.aether.graph.DependencyNode# import org.eclipse.aether.graph.Exclusion
# import org.eclipse.aether.repository.Authentication
#  import org.eclipse.aether.repository.Proxy
# import org.eclipse.aether.repository.RemoteRepository
# import org.eclipse.aether.repository.RepositoryPolicy
# import org.eclipse.aether.repository.WorkspaceReader
# import org.eclipse.aether.repository.WorkspaceRepository  
# import org.eclipse.aether.util.repository.AuthenticationBuilder
# new org.apache.maven.artifact.DefaultArtifact( artifact.getGroupId(), artifact.getArtifactId(),
97                                                             artifact.getVersion(), null,
98                                                             artifact.getProperty( ArtifactProperties.TYPE,
99                                                                                   artifact.getExtension() ),
100                                                            nullify( artifact.getClassifier() ), handler );
101 
102         result.setFile( artifact.getFile() );
103         result.setResolved( artifact.getFile() != null );
104 
105         List<String> trail = new ArrayList<>( 1 );
106         trail.add( result.getId() );
107         result.setDependencyTrail( trail );
108 
109         return result;
110     }
111 
112     public static void toArtifacts( Collection<org.apache.maven.artifact.Artifact> artifacts,
113                                     Collection<? extends DependencyNode> nodes, List<String> trail,
114                                     DependencyFilter filter )
115     {
116         for ( DependencyNode node : nodes )
117         {
118             org.apache.maven.artifact.Artifact artifact = toArtifact( node.getDependency() );
119 
120             List<String> nodeTrail = new ArrayList<>( trail.size() + 1 );
121             nodeTrail.addAll( trail );
122             nodeTrail.add( artifact.getId() );
123 
124             if ( filter == null || filter.accept( node, Collections.<DependencyNode>emptyList() ) )
125             {
126                 artifact.setDependencyTrail( nodeTrail );
127                 artifacts.add( artifact );
128             }
129 
130             toArtifacts( artifacts, node.getChildren(), nodeTrail, filter );
131         }
132     }
133 
134     public static Artifact toArtifact( org.apache.maven.artifact.Artifact artifact )
135     {
136         if ( artifact == null )
137         {
138             return null;
139         }
140 
141         String version = artifact.getVersion();
142         if ( version == null && artifact.getVersionRange() != null )
143         {
144             version = artifact.getVersionRange().toString();
145         }
146 
147         Map<String, String> props = null;
148         if ( org.apache.maven.artifact.Artifact.SCOPE_SYSTEM.equals( artifact.getScope() ) )
149         {
150             String localPath = ( artifact.getFile() != null ) ? artifact.getFile().getPath() : "";
151             props = Collections.singletonMap( ArtifactProperties.LOCAL_PATH, localPath );
152         }
153 
154         Artifact result =
155             new DefaultArtifact( artifact.getGroupId(), artifact.getArtifactId(), artifact.getClassifier(),
156                                  artifact.getArtifactHandler().getExtension(), version, props,
157                                  newArtifactType( artifact.getType(), artifact.getArtifactHandler() ) );
158         result = result.setFile( artifact.getFile() );
159 
160         return result;
161     }
162 
163     public static Dependency toDependency( org.apache.maven.artifact.Artifact artifact,
164                                            Collection<org.apache.maven.model.Exclusion> exclusions )
165     {
166         if ( artifact == null )
167         {
168             return null;
169         }
170 
171         Artifact result = toArtifact( artifact );
172 
173         List<Exclusion> excl = null;
174         if ( exclusions != null )
175         {
176             excl = new ArrayList<>( exclusions.size() );
177             for ( org.apache.maven.model.Exclusion exclusion : exclusions )
178             {
179                 excl.add( toExclusion( exclusion ) );
180             }
181         }
182 
183         return new Dependency( result, artifact.getScope(), artifact.isOptional(), excl );
184     }
185 
186     public static List<RemoteRepository> toRepos( List<ArtifactRepository> repos )
187     {
188         if ( repos == null )
189         {
190             return null;
191         }
192 
193         List<RemoteRepository> results = new ArrayList<>( repos.size() );
194         for ( ArtifactRepository repo : repos )
195         {
196             results.add( toRepo( repo ) );
197         }
198         return results;
199     }
200 
201     public static RemoteRepository toRepo( ArtifactRepository repo )
202     {
203         RemoteRepository result = null;
204         if ( repo != null )
205         {
206             RemoteRepository.Builder builder =
207                 new RemoteRepository.Builder( repo.getId(), getLayout( repo ), repo.getUrl() );
208             builder.setSnapshotPolicy( toPolicy( repo.getSnapshots() ) );
209             builder.setReleasePolicy( toPolicy( repo.getReleases() ) );
210             builder.setAuthentication( toAuthentication( repo.getAuthentication() ) );
211             builder.setProxy( toProxy( repo.getProxy() ) );
212             builder.setMirroredRepositories( toRepos( repo.getMirroredRepositories() ) );
213             result = builder.build();
214         }
215         return result;
216     }
217 
218     public static String getLayout( ArtifactRepository repo )
219     {
220         try
221         {
222             return repo.getLayout().getId();
223         }
224         catch ( LinkageError e )
225         {
226             /*
227              * NOTE: getId() was added in 3.x and is as such not implemented by plugins compiled against 2.x APIs.
228              */
229             String className = repo.getLayout().getClass().getSimpleName();
230             if ( className.endsWith( "RepositoryLayout" ) )
231             {
232                 String layout = className.substring( 0, className.length() - "RepositoryLayout".length() );
233                 if ( layout.length() > 0 )
234                 {
235                     layout = Character.toLowerCase( layout.charAt( 0 ) ) + layout.substring( 1 );
236                     return layout;
237                 }
238             }
239             return "";
240         }
241     }
242 
243     private static RepositoryPolicy toPolicy( ArtifactRepositoryPolicy policy )
244     {
245         RepositoryPolicy result = null;
246         if ( policy != null )
247         {
248             result = new RepositoryPolicy( policy.isEnabled(), policy.getUpdatePolicy(), policy.getChecksumPolicy() );
249         }
250         return result;
251     }
252 
253     private static Authentication toAuthentication( org.apache.maven.artifact.repository.Authentication auth )
254     {
255         Authentication result = null;
256         if ( auth != null )
257         {
258             AuthenticationBuilder authBuilder = new AuthenticationBuilder();
259             authBuilder.addUsername( auth.getUsername() ).addPassword( auth.getPassword() );
260             authBuilder.addPrivateKey( auth.getPrivateKey(), auth.getPassphrase() );
261             result = authBuilder.build();
262         }
263         return result;
264     }
265 
266     private static Proxy toProxy( org.apache.maven.repository.Proxy proxy )
267     {
268         Proxy result = null;
269         if ( proxy != null )
270         {
271             AuthenticationBuilder authBuilder = new AuthenticationBuilder();
272             authBuilder.addUsername( proxy.getUserName() ).addPassword( proxy.getPassword() );
273             result = new Proxy( proxy.getProtocol(), proxy.getHost(), proxy.getPort(), authBuilder.build() );
274         }
275         return result;
276     }
277 
278     public static ArtifactHandler newHandler( Artifact artifact )
279     {
280         String type = artifact.getProperty( ArtifactProperties.TYPE, artifact.getExtension() );
281         DefaultArtifactHandler handler = new DefaultArtifactHandler( type );
282         handler.setExtension( artifact.getExtension() );
283         handler.setLanguage( artifact.getProperty( ArtifactProperties.LANGUAGE, null ) );
284         String addedToClasspath = artifact.getProperty( ArtifactProperties.CONSTITUTES_BUILD_PATH, "" );
285         handler.setAddedToClasspath( Boolean.parseBoolean( addedToClasspath ) );
286         String includesDependencies = artifact.getProperty( ArtifactProperties.INCLUDES_DEPENDENCIES, "" );
287         handler.setIncludesDependencies( Boolean.parseBoolean( includesDependencies ) );
288         return handler;
289     }
290 
291     public static ArtifactType newArtifactType( String id, ArtifactHandler handler )
292     {
293         return new DefaultArtifactType( id, handler.getExtension(), handler.getClassifier(), handler.getLanguage(),
294                                         handler.isAddedToClasspath(), handler.isIncludesDependencies() );
295     }
296 
297     public static Dependency toDependency( org.apache.maven.model.Dependency dependency,
298                                            ArtifactTypeRegistry stereotypes )
299     {
300         ArtifactType stereotype = stereotypes.get( dependency.getType() );
301         if ( stereotype == null )
302         {
303             stereotype = new DefaultArtifactType( dependency.getType() );
304         }
305 
306         boolean system = dependency.getSystemPath() != null && dependency.getSystemPath().length() > 0;
307 
308         Map<String, String> props = null;
309         if ( system )
310         {
311             props = Collections.singletonMap( ArtifactProperties.LOCAL_PATH, dependency.getSystemPath() );
312         }
313 
314         Artifact artifact =
315             new DefaultArtifact( dependency.getGroupId(), dependency.getArtifactId(), dependency.getClassifier(), null,
316                                  dependency.getVersion(), props, stereotype );
317 
318         List<Exclusion> exclusions = new ArrayList<>( dependency.getExclusions().size() );
319         for ( org.apache.maven.model.Exclusion exclusion : dependency.getExclusions() )
320         {
321             exclusions.add( toExclusion( exclusion ) );
322         }
323 
324         Dependency result = new Dependency( artifact,
325                                             dependency.getScope(),
326                                             dependency.getOptional() != null
327                                                 ? dependency.isOptional()
328                                                 : null,
329                                             exclusions );
330 
331         return result;
332     }
333 
334     private static Exclusion toExclusion( org.apache.maven.model.Exclusion exclusion )
335     {
336         return new Exclusion( exclusion.getGroupId(), exclusion.getArtifactId(), "*", "*" );
337     }
338 
339     public static ArtifactTypeRegistry newArtifactTypeRegistry( ArtifactHandlerManager handlerManager )
340     {
341         return new MavenArtifactTypeRegistry( handlerManager );
342     }
343 
344     static class MavenArtifactTypeRegistry
345         implements ArtifactTypeRegistry
346     {
347 
348         private final ArtifactHandlerManager handlerManager;
349 
350         MavenArtifactTypeRegistry( ArtifactHandlerManager handlerManager )
351         {
352             this.handlerManager = handlerManager;
353         }
354 
355         public ArtifactType get( String stereotypeId )
356         {
357             ArtifactHandler handler = handlerManager.getArtifactHandler( stereotypeId );
358             return newArtifactType( stereotypeId, handler );
359         }
360 
361     }
362 
363     public static Collection<Artifact> toArtifacts( Collection<org.apache.maven.artifact.Artifact> artifactsToConvert )
364     {
365         List<Artifact> artifacts = new ArrayList<>();
366         for ( org.apache.maven.artifact.Artifact a : artifactsToConvert )
367         {
368             artifacts.add( toArtifact( a ) );
369         }
370         return artifacts;
371     }
372 
373     public static WorkspaceRepository getWorkspace( RepositorySystemSession session )
374     {
375         WorkspaceReader reader = session.getWorkspaceReader();
376         return ( reader != null ) ? reader.getRepository() : null;
377     }
378 
379     public static boolean repositoriesEquals( List<RemoteRepository> r1, List<RemoteRepository> r2 )
380     {
381         if ( r1.size() != r2.size() )
382         {
383             return false;
384         }
385     
386         for ( Iterator<RemoteRepository> it1 = r1.iterator(), it2 = r2.iterator(); it1.hasNext(); )
387         {
388             if ( !repositoryEquals( it1.next(), it2.next() ) )
389             {
390                 return false;
391             }
392         }
393     
394         return true;
395     }
396 
397     public static int repositoriesHashCode( List<RemoteRepository> repositories )
398     {
399         int result = 17;
400         for ( RemoteRepository repository : repositories )
401         {
402             result = 31 * result + repositoryHashCode( repository );
403         }
404         return result;
405     }
406 
407     private static int repositoryHashCode( RemoteRepository repository )
408     {
409         int result = 17;
410         Object obj = repository.getUrl();
411         result = 31 * result + ( obj != null ? obj.hashCode() : 0 );
412         return result;
413     }
414 
415     private static boolean policyEquals( RepositoryPolicy p1, RepositoryPolicy p2 )
416     {
417         if ( p1 == p2 )
418         {
419             return true;
420         }
421         // update policy doesn't affect contents
422         return p1.isEnabled() == p2.isEnabled() && Objects.equals( p1.getChecksumPolicy(), p2.getChecksumPolicy() );
423     }
424 
425     private static boolean repositoryEquals( RemoteRepository r1, RemoteRepository r2 )
426     {
427         if ( r1 == r2 )
428         {
429             return true;
430         }
431     
432         return Objects.equals( r1.getId(), r2.getId() ) && Objects.equals( r1.getUrl(), r2.getUrl() )
433             && policyEquals( r1.getPolicy( false ), r2.getPolicy( false ) )
434             && policyEquals( r1.getPolicy( true ), r2.getPolicy( true ) 
# setup::#!/bin/bash
set -e

# This script is meant to be run automatically
# as part of the jekyll-hook application.
# https://github.com/developmentseed/jekyll-hook

repo=$1
branch=$2
owner=$3
giturl=$4
source=$5
build=$6
venv_bin_dir=$7

# Check to see if repo exists. If not, git clone it
# and run nginx setup
if [ ! -d $source ]; then
    git clone $giturl $source
    
    hostname=`cat $source/CNAME`
    
    scripts_dir=`pwd`/scripts
    part1=$scripts_dir/nginx_conf_part_1.conf
# git clone $giturl $source
    
    hostname=`cat $source/CNAME`
    
    scripts_dir=`pwd`/scripts
    part1=$scripts_dir/nginx_conf_part_1.conf
    part2=$scripts_dir/nginx_conf_part_2.conf
# cd $source
git fetch --all
git reset --hard origin::branches::[trunk]
# install.pkgs/WinRAR x86 /32 bit/5.11
WinRARx64/64 bit)/5.11/linux-ArmX64-32/Linux x64/MacOSx84
::Build:'::Return::Run'

