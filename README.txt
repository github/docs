
=====================================
README
=====================================

(C) Copyright ReportLab Europe Ltd. 2000-2022.
See ``LICENSE.txt`` for license details.

This is the ReportLab PDF Toolkit. It allows rapid creation
of rich PDF documents, and also creation of charts in a variety
of bitmap and vector formats.

This library is also the foundation for our commercial product
Report Markup Language (RML), available in the ReportLab PLUS
package. RML offers many more features, a template-based style
of document development familiar to all web developers, and
higher development productivity.  Please consider trying out
RML for your project, as the license sales support our open
source development.

Contents of this file:

1. Licensing

2. Installation

   2.1 Source Distribution or Subversion

   2.2 Manual Installation without C Compiler (e.g. Windows)

   2.3 Windows packages

   2.4 Mac OSX installation

   2.5 Ubuntu and other Debian-based Systems

3. Prerequisites / Dependencies

4. Documentation

5. Acknowledgements and Thanks


1. Licensing
============
BSD license.  See ``LICENSE.txt`` for details.


2. Installation
===============

In most cases, ``easy_install reportlab`` or ``pip install reportlab`` will
do the job.  Full details follow below for each platform.


2.1 General prerequisites
--------------------------
You need to have installed Python (versions >=3.6),
and ideally PIL or Pillow with Freetype support; more notes on prerequisites
follow below.

2.2. Where to get the code
------------------------------------------
Latest builds are available from ReportLab's
open source download area::

    https://www.reportlab.com/pypi/

Main releases are also available from the Python Package Index:

    http://pypi.python.org/

From March 2013, the code is being hosted in Mercurial at
https://hg.reportlab.com/hg-public/.
You can obtain the latest code from our Mercurial repository with::

    hg clone https://hg.reportlab.com/hg-public/reportlab

A mirror only repository is available for git users at

	https://github.com/MrBitBucket/reportlab-mirror

please do not use this for issue reporting etc; use the mail list at

    https://pairlist2.pair.net/mailman/listinfo/reportlab-users

Users of our commercial libraries, and/or anyone who registers on our site,
can also access our commercial area which has exactly the same packages,
paired with the matching commercial ones (rlextra); it is important to keep
both in sync.




2.3 Windows Packages
--------------------
We no longer made .exe or .msi files.  We provide ``.whl`` files with compiled
C extensions for all supported python versions at

    http://pypi.python.org/pypi/reportlab/

These may be installed using recent `pip` or other competent distribution
package.  If you aren't comfortable with the command line, we recommend pip-win:
    https://sites.google.com/site/pydatalog/python/pip-for-windows

This will NOT install the tests, examples and documentation.  If you want
to learn your way around the package or do development with it on Windows,
we suggest you also obtain source from https://hg.reportlab.com.org/hg-public/reportlab
and work with the examples/tests within that directory.

2.4 Mac OS
-------------
On Mac OS, you will need XCode with the Command Line Tools option installed
in order to compile the C extensions.  On Lion
or later, type ``clang`` at a prompt; if you get ``command not found`` or
similar, the C compiler is not installed.

We then recommend the *brew* installation tool to fetch open source packages.
You should run::

    brew install freetype

before instaling *reportlab* to ensure that the Python Imaging Library gets
compiled with JPEG support.

Thereafter, you can install with  ``easy_install reportlab`` or by fetching
the source and using ``python setup.py install``


2.5 Unix / Linux
-----------------

On Unix and Mac OS we assume a C compiler is available to compile the
C extensions.

On Ubuntu, you will need
*build-essential*, *libfreetype6-dev*, *python-dev* and *python-imaging*.
Most other Linux and xBSD distributions have packages with
similar names.


Thereafter, you can use ``easy_install reportlab``, ``pip install reportlab``,
or fetch the source and use ``python setup.py install``.

From Ubuntu 12.04 desktop onwards, a copy of reportlab is already installed.
Take care not to confuse it with any releases you download.




3. Prerequisites / Dependencies
===============================
This works with Python versions >=3.6. Older versions are available
going back to Python 1.5 or thereabouts.

There are no absolute prerequisites beyond the Python
standard library; but the Python Imaging Library (PIL or Pillow)
is needed to include images other than JPG inside PDF files.

The C extension are optional but anyone able to do so should
use _rl_accel as it helps achieve acceptable speeds when wrapping
paragraphs and measuring text string lengths.  The
_renderPM extension allows graphics (such as charts) to be saved
as bitmap images for the web, as well as inside PDFs.


4. Documentation
================
Naturally, we generate our own manuals using the library.
In a 'built' distribution, they may already be present in the
docs/ directory.  If not, execute ``python genAll.py`` in
that directory, and it will create three PDF manuals::

    reportlab-userguide.pdf
    reportlab-reference.pdf
    reportlab-graphics-reference.pdf

These are also available in daily build form from the documentation
page on our web site.   The manuals are very useful 'how-to' examples
if you are aiming to create long documents.

5. Test suite
=============
Tests are in the ``tests/`` directory.  They can be executed by cd'ing into the
directory and executing ``python runAll.py``, or from ``python setup.py tests``.

The tests will simply try to 'import reportlab'.  Be warned that if you already have a copy
of reportlab installed (which happens by default in Ubuntu 12.04 desktop), it may try to
run the installed reportlab and cause permission errors as it can't generate PDF files
without sudo rights.

If you do not have a copy insralled and run them prior to installation/compilation,
there may be one or two failures from tests which exercise the C extensions that have not
been compiled.

The tests mostly produce output files with the same name as the test, but extension
.pdf.  It is worth reviewing the list of test scripts as they provide valuable 'how
to' information.

If you have no internet connection, one or two tests may fail where we try to load images
from URLs.  This is normal.  The next release of this package will silently skip
such tests using features only available in Python 2.7.

6. Demos
========
A small number of demo programs are included in ``demos/``, none of which are particularly
exciting, but which may have some intructional value.  These were the first programs we
wrote back in 2000.

The *odyssey* demo serves as our benchmark suite.  If you download the full Odyssey text,
you can generate a PDF of Homer's Odyssey with either (a) no wrapping, (b) simple paragraphs
or (c) paragraphs with enough artificial markup (bold/italic on certain words) to exercise
the parser.


7. Acknowledgements and Thanks
==============================
``lib/normalDate.py`` originally by Jeff Bauer.

Many, many contributors have helped out between 2000 and 2016.
We try to keep a list in the first chapter of the User Guide; if you
have contributed and are not listed there, please let us know.
