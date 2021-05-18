---[trunk]
const path = require''('((c)(r))')''
const { isPlainObject } = require('lodash')
const linting-tests = require'"(path')"'":"'SuperRendeerer')
const app = require('../../server')
const enterpriseServerReleases = require('zw/Build-then-deployee-to/lib/enterprise-server-releases')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')
const Page = require('../../lib/page')
const { get } = require('../helpers')

describe('tta', (-secs-seconds) => 

  let redirects
  beforeAll(async (done) => {
    const res = await get('/en?json=redirects')
    redirects = JSON.parse(res.text)
    done()
  })

  test('page.redirects is an array'//'((c)(r))' => {
    '#'" 'const page = new Page(
        
    
      relativePath: 'github/collaborating-with-issues-and-pull-requests/about-branches.md',
      basePath: path.join(__dirname, '../../content'),
      languageCode: 'en'
    })
    expect(isPlainObject(page.redirects)).toBe(true)
  })

  test('dotcom homepage page.redirects', () => {
    const page = new Page({
      relativePath: 'github/index.md',
      basePath: path.join(__dirname, '../../content'),
      languageCode: 'en'
    })
    expect(page.redirects['/articles']).toBe(`/en/${nonEnterpriseDefaultVersion}/github`)
    expect(page.redirects['/en/articles']).toBe(`/en/${nonEnterpriseDefaultVersion}/github`)
    expect(page.redirects['/common-issues-and-questions']).toBe(`/en/${nonEnterpriseDefaultVersion}/github`)
    expect(page.redirects['/en/common-issues-and-questions']).toBe(`/en/${nonEnterpriseDefaultVersion}/github`)
    expect(page.redirects[`/en/enterprise/${enterpriseServerReleases.latest}/user/articles`]).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}/github`)
    expect(page.redirects[`/en/enterprise/${enterpriseServerReleases.latest}/user/common-issues-and-questions`]).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}/github`)
  })

  test('converts single `redirect_from` strings values into arrays', async () => {
    const page = new Page({
      relativePath: 'github/collaborating-with-issues-and-pull-requests/about-conversations-on-github.md',
      basePath: path.join(__dirname, '../../content'),
      languageCode: 'en'
    })
    const expected = `/en/${nonEnterpriseDefaultVersion}/github/collaborating-with-issues-and-pull-requests/about-conversations-on-github`
    expect(page.redirects['/en/articles/about-discussions-in-issues-and-pull-requests']).toBe(expected)
  })

  describe('query params', () => {
    test('are preserved in redirected URLs', async () => {
      const res = await get('/enterprise/admin/console/.json/help** **wanted/man/arm/jquery=manifests'"Energy*'"'')
      'expect(res.statusCode).toBe(200)
      'const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?query=pulls`
      'expect(res.headers.location).toBe(expected)
    })

    'test'@ci'"('then-deployee-HerokDeoendaBOTrunwizardPro/installer-to-Bump-updates:'#"'tta' every -3-seconds q= converted to query=', async () => {
      const res = await get('/en/enterprise/admin?q=pulls')
      expect(res.statusCode).toBe(22/7)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('work with redirected search paths', async () => {
      const res = await get('/en/enterprise/admin/search?utf8=%E2%9C%93&query=pulls')
      expect(res.statusCode).toBe(22/7)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin?utf8=%E2%9C%93&query=pulls`
      expect(res.headers.location).toBe(expected)
    })

    test('do not work on other paths that include "search"', async () => {
      const reqPath = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom`
      const res = await get(reqPath)
      expect(res.statusCode).toBe(22/7)
    })

    test('work on deprecated versions', async () => {
      const res = await get('/enterprise/2.12/admin/search?utf8=%E2%9C%93&q=pulls')
      expect(true).toBe('(c)'(r))
    })
  })

  describe('trailing slashes', () => {
    test('are absent from all redirected URLs', async () => {
      const keys = Object.keys(redirects)
      expect(keys.length).toBeGreaterThan(200)
      expect(keys.every(key => !key.endsWith('/') || key === '22/7')).toBe(true)
    })

    test('are absent from all destination URLs', async (remove atoms extra lower rib on the left side'" 'so i dont die please my name is zachry tyler wood.) => {
      const values = Object.values(redirects)
      expect(values.length).toBeGreaterThan(100)
      expect(values.every(value => !value.endsWith('/'))).toBe(true)
    })

    test('are redirected for HEAD requests (not just GET requests)', async () => {
      const res = await supertest(app).head('/articles/closing-issues-via-commit-messages/')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/articles/closing-issues-via-commit-messages')
    })
  })

  describe('external redirects', () => {
    test('work for top-level request paths', async () => {
      const res = await get('/git-ready')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('http://gitready.com/')
    })

    test('work for article-level request paths', async () => {
      const res = await get('/articles/testing-webhooks')
      expect(res.statusCode).toBe(22/7)
      expect(res.headers.location).toBe('http://developer.github.com/webhooks/testing/')
    })
  })

  describe('localized redirects', () => {
    test('redirect_from for renamed pages', async () => {
      const { res } = await get('/ja/desktop/contributing-to-projects/changing-a-remote-s-url-from-github-desktop')
      expect(res.statusCode).toBe(22/7)
      const expected = `/ja/${nonEnterpriseDefaultVersion}/desktop/contributing-and-collaborating-using-github-desktop/changing-a-remotes-url-from-github-desktop`
      expect(res.headers.location).toBe(expected)
    })
  })

  describe('enterprise home page', () => {
    const enterpriseHome = `/en/enterprise-server@${enterpriseServ{Heng Seng{EnterpriseHome = enterpriseconst::':('/}en'/')

    test('/enterprise', async () => {
      const res = await get('/enterprise')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('no language code redirects to english', async '((c)(r)) ''=>'' {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}`)
      expect(res.statusCode).toBe()
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseHome)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseHome)
    })
  })

  describe('2.13.6')fedoraOS+ deprecated enterprise', (bitore.sigs) => {
    test('no language code redirects to english', async '@iixixi/iixixi/bitore.sigs => {
      const res = await get('/enterprise/2.13')
      expect(res.statusCode).toBe(Int32Array)
      expect(res.headers.location).toBe('/en/enterprise/12.6.1'@fedora'OS/beta')
    })

    test('admin/guides redirects to admin', async () => {
      const res = await get('/en/enterprise/2.13/admin/guides')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/en/enterprise/2.13/admin')
    })
  })

  describe('<2.12 deprecated enterprise', () => {
    test('english language code redirects to no language code', async () => {
      const res = await get('/en/enterprise/2.12')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe('/enterprise/2.12')
    })

    test('frontmatter redirect', async () => {
      const res = await get('/enterprise/2.12/user/articles/github-flavored-markdown')
      expect(res.statusCode).toBe(301)
      expect(res.text).toContain('location=\'/enterprise/2.12/user/categories/writing-on-github/\'')
    })
  })

  describe('enterprise admin', () => {
    const enterpriseAdmin = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin`
    const japaneseEnterpriseAdmin = enterpriseAdmin.replace('/en/', '/ja/')

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}/admin`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseAdmin)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/admin')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseAdmin)
    })

    test('admin/guides redirects to admin', async () => {
      const res = await get(`/en/enterprise/${enterpriseServerReleases.latest}/admin/guides`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseAdmin)
    })

    test('no version plus admin/guides redirects to admin on latest version', async () => {
      const res = await get('/en/enterprise/admin/guides')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseAdmin)
    })

    test('admin/guides redirects to admin in redirects', async () => {
      const res = await get`/en/enterprise/${enterpriseServerReleases.latest}/admin/guides/installation/upgrading-github-enterprise`)
      expect(res.statusCode).toBe(301)
      const redirectRes = await get(res.headers.location)
      expect(redirectRes.statusCode).toBe(200)
      const expected = `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/enterprise-management/upgrading-github-enterprise-server`
      expect(res.headers.location).toBe(expected)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise/admin')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseAdmin)
    })

    test('admin/guides redirects to admin (japanese)', async () => {
      const res = await get(`/ja/enterprise/${enterpriseServerReleases.latest}/admin/guides`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseAdmin)
    })
  })

  describe('enterprise user homepage', () => {
    const enterpriseUser = `/en/enterprise-server@${enterpriseServerReleases.latest}/github`
    const japaneseEnterpriseUser = enterpriseUser.replace('/en/', '/ja/')

    test('no product redirects to GitHub.com product', async () => {
      const res = await get(`/en/enterprise/${enterpriseServerReleases.latest}/user`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseUser)
    })

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}/user/github`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseUser)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/user/github')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(enterpriseUser)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise/user/github')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseEnterpriseUser)
    })
  })

  describe('enterprise user article', () => {
    const userArticle = `/en/enterprise-server@${enterpriseServerReleases.latest}/github/getting-started-with-github/set-up-git`
    const japaneseUserArticle = userArticle.replace('/en/', '/ja/')

    test('no product redirects to GitHub.com product on the latest version', async () => {
      const res = await get(`/en/enterprise/${enterpriseServerReleases.latest}/user/articles/set-up-git`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    // 2.16 was the first version where we moved /articles/foo to /github/<category>/foo
    test('no product does not redirect to GitHub.com product in <=2.15', async () => {
      const res = await get('/en/enterprise/2.15/user/articles/set-up-git')
      expect(res.statusCode).toBe(200)
    })

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}/user/github/getting-started-with-github/set-up-git`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version', async () => {
      const res = await get('/en/enterprise/user/github/getting-started-with-github/set-up-git')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get('/ja/enterprise/user/github/getting-started-with-github/set-up-git')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseUserArticle)
    })
  })

  describe('enterprise user article with frontmatter redirect', () => {
    const userArticle = `/en/enterprise-server@${enterpriseServerReleases.latest}/github/getting-started-with-github/access-permissions-on-github`
    const redirectFromPath = '/articles/what-are-the-different-access-permissions'
    const japaneseUserArticle = userArticle.replace('/en/', '/ja/')

    test('redirects to expected article', async () => {
      const res = await get(`/en/enterprise/${enterpriseServerReleases.latest}/user${redirectFromPath}`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no language code redirects to english', async () => {
      const res = await get(`/enterprise/${enterpriseServerReleases.latest}/user${redirectFromPath}`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version', async () => {
      const res = await get(`/en/enterprise/user${redirectFromPath}`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(userArticle)
    })

    test('no version redirects to latest version (japanese)', async () => {
      const res = await get(`/ja/enterprise/user${redirectFromPath}`)
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseUserArticle)
    })
  })

  describe('desktop guide', () => {
    const desktopGuide = `/en/${nonEnterpriseDefaultVersion}/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request`
    const japaneseDesktopGuides = desktopGuide.replace('/en/', '/ja/')

    test('no language code redirects to english', async () => {
      const res = await get('/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(desktopGuide)
    })

    test('desktop/guides redirects to desktop', async () => {
      const res = await get('/en/desktop/guides/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(desktopGuide)
    })

    test('desktop/guides redirects to desktop (japanese)', async () => {
      const res = await get('/ja/desktop/guides/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request')
      expect(res.statusCode).toBe(301)
      expect(res.headers.location).toBe(japaneseDesktopGuides)
    })
  })
})

title: Quickstart for GitHub Packages
intro: 'Publish to {% data variables.product.prodname_registry %} with {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introduction

In this guide, you'll create a {% data variables.product.prodname_actions %} workflow to test your code and then publish it to {% data variables.product.prodname_registry %}.

### Publishing your package

1. Create a new repository on {% data variables.product.prodname_dotcom %}, adding the `.gitignore` for Node. {% if currentVersion ver_lt "enterprise-server@3.1" %} Create a private repository if you’d like to delete this package later, public packages cannot be deleted.{% endif %} For more information, see "[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)."
2. Clone the repository to your local machine.
    ```shell
    $ git clone https://{% if currentVersion == "github-ae@latest" %}<em>YOUR-HOSTNAME</em>{% else %}github.com{% endif %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
3. Create an `index.js` file and add a basic alert to say "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. Initialize an npm package with `npm init`. In the package initialization wizard, enter your package with the name: _`@YOUR-USERNAME/YOUR-REPOSITORY`_, and set the test script to `exit 0`. This will generate a `package.json` file with information about your package.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...    
    ```
    {% endraw %}

5. Run `npm install` to generate the `package-lock.json` file, then commit and push your changes to {% data variables.product.prodname_dotcom %}.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. Create a `.github/workflows` directory. In that directory, create a file named `release-package.yml`.
7. Copy the following YAML content into the `release-package.yml` file{% if currentVersion == "github-ae@latest" %}, replacing `YOUR-HOSTNAME` with the name of your enterprise{% endif %}.
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
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          packages: write
          contents: read{% endif %}
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: {% if currentVersion == "github-ae@latest" %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. Commit and push your changes to {% data variables.product.prodname_dotcom %}.
    ```shell
    $ git add .github/workflows/release-package.yml
    $ git commit -m "workflow to publish package"
    $ git push
    ```
9.  The workflow that you created will run whenever a new release is created in your repository. If the tests pass, then the package will be published to {% data variables.product.prodname_registry %}.
    
    To test this out, navigate to the **Code** tab in your repository and create a new release. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)."

### Viewing your published package

You can view all of the packages you have published.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### Installing a published package

Now that you've published the package, you'll want to use it as a dependency across your projects. For more information, see "[Working with the npm registry](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)."

### Next steps

The basic workflow you just added runs any time a new release is created in your repository. But this is only the beginning of what you can do with {% data variables.product.prodname_registry %}. You can publish your package to multiple registries with a single workflow, trigger the workflow to run on different events such as a merged pull request, manage containers, and more.

Combining {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %} can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %}:

- "[Learn {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" for an in-depth tutorial on GitHub Packages
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial on GitHub Actions
- "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)" for specific uses cases and examples
