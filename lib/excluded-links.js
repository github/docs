// Linkinator treats the following as regex.
export default [
  // Skip GitHub search links.
  'https://github.com/search\\?',
  'https://github.com/github/gitignore/search\\?',

  // These links require auth.
  'https://github.com/settings/profile',
  'https://github.com/github/docs/edit',
  'https://github.com/github/insights-releases/releases/latest',
  'https://classroom.github.com/videos',

  // Oneoff links that link checkers think are broken but are not.
  'https://haveibeenpwned.com/',
  'https://www.ilo.org/dyn/normlex/en/f\\?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:P029',
  'https://www.linkedin.com/company/github',
  'https://www.facebook.com/',
  'https://ko-fi.com/',
  'https://en.liberapay.com/',
  'https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb',
  'https://www.vmware.com/products/esxi-and-esx.html',
]
