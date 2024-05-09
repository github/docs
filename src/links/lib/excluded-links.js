/**
 * This file exports a mix of strings and of regexes. Linkinator relies
 * on this in `src/links/scripts/rendered-content-link-checker-cli.js` when we encounter external
 * links that we *specifically ignore*. That means, that URLs or patterns
 * mentioned in this file might appear within our content but we don't
 * bother checking that they actually work.
 */

/* eslint-disable prefer-regex-literals */

export default [
  // Skip GitHub search links.
  // E.g. https://github.com/search?foo=bar
  regex('https://github.com/search?'),
  regex('https://github.com/github/gitignore/search?'),

  // https://github.com/contact always redirects to support.github.com that
  // is heavily protected by rate limiting.
  regex('https://github.com/contact'),
  // All support.github.com links are currently firewalled and you get a
  // "403 Forbidden" every time.
  regex('https://support.github.com'),

  // These links require auth.
  regex('https://github.com/settings/profile'),
  regex('https://github.com/settings/billing'),
  regex('https://github.com/github/docs/edit'),
  regex('https://github.com/github/insights-releases/releases/latest'),
  regex('https://classroom.github.com/videos'),

  // Oneoff links that link checkers think are broken but are not.
  'https://haveibeenpwned.com/',
  'https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:P029',
  'https://www.linkedin.com/company/github',
  'https://www.facebook.com/',
  'https://ko-fi.com/',
  'https://en.liberapay.com/',
  'https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb',
  'https://www.vmware.com/products/esxi-and-esx.html',
  'https://www.ecfr.gov/cgi-bin/text-idx?SID=ad384e1f1e017076f8c0136f322f0a4c&mc=true&node=pt15.2.744&rgn=div5',
  'https://wiki.oasis-open.org/security',
  'https://www.ipaddressguide.com/cidr',
  'https://crates.io/',
  'https://opensource.org/about',
  'https://www.openstreetmap.org/user/new',
  'https://wiki.debian.org/chroot',
  'https://www.adobe.com/products/coldfusion-builder.html',
  'https://developer.android.com/studio',
  'https://lastpass.com/',
  'https://lastpass.com/auth/',
  'https://zenodo.org/account/settings/github/',
  'https://intellij-support.jetbrains.com/hc/en-us/articles/207241085-Locating-IDE-log-files',
  'https://developer.apple.com/documentation/swift_packages',
  'https://developer.android.com/studio/run/emulator-acceleration',
  'https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord',
  'https://www.microsoft.com/en-us/edge',
  'https://github.com/features/bitbucket-migrations/signup',
  'https://www.servicenow.com/products/devops.html',
  'https://daringfireball.net/projects/markdown/syntax',
  'https://www.microsoft.com/en-us/security/mobile-authenticator-app',
  'https://microsoft.com/powershell',
  'https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_flush_method',
  'https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector',
  'https://www.patreon.com/',
  regex('https://packages.debian.org/'),
  'https://oidref.com/1.3.6.1.2.1.25.4',
  'https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_574717/lang--en/index.htm',
  'https://cdrdv2-public.intel.com/671488/248966-Software-Optimization-Manual-R047.pdf',
  regex('https://www.lumendatabase.org/'),
  regex('https://azure.microsoft.com/'),
  regex('https://support.patreon.com/'),
  'https://moodle.org',
  'https://azure.microsoft.com',
  'https://api.octocorp.ghe.com',
  'https://platform.openai.com/docs/guides/safety-best-practices',
  'https://global.rel.tunnels.api.visualstudio.com/api/version',
]

// Return a regular expression from a URL string that matches the URL
// as a base. It's basically shorthand for "URL.startsWith(BASE_URL)"
// but as a RegExp object.
// For example:
//
//   > regex('https://github.com').test('https://github.com/page')
//   true
//   > regex('https://github.com').test('otherhttps://github.com/page')
//   false
function regex(url) {
  return new RegExp('^' + url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
}
