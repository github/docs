<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta name=Generator content="Microsoft Word 12 (filtered)">
<style>
</style>
<link rel="stylesheet" href="https://www.w3.org/StyleSheets/TR/W3C-ED.css" type="text/css">
</head>

<body lang=EN-US>

<div class=Section1>

<div >

<H1>CSS 3 Tables Algorithms</H1>

</div>

<p  ><b><span >This version: </span></b></p>

<p  ><a
href="http://www.w3.org/Style/Group/css3-src/css3-template/%5bVERSION%5d"><span>http://www.w3.org/Style/Group/css3-src/css3-template/[VERSION]</span></a><span
> </span></p>

<p  ><b><span lang=DE >Latest version: </span></b></p>

<p  ><a
href="http://www.w3.org/TR/css3-template"><span lang=DE >http://www.w3.org/TR/css3-template</span></a><span
> </span></p>

<p  ><b><span >Previous version: </span></b></p>

<p  ><a
href="http://www.w3.org/Style/Group/css3-src/css3-template/%5bhttp:/www.w3.org/PreviousVersionURI%5d"><span
>[http://www.w3.org/PreviousVersionURI]</span></a><span
> </span></p>

<p  ><b><span >Editors: </span></b></p>
<p  ><a
href="mailto:salonir@microsoft.com"><span >Saloni Mira Rai</span></a><span >
&nbsp;&nbsp;&nbsp;&nbsp;
&lt;salonir@microsoft.com&gt; </span></p>

<p  ><b><span >Authors: </span></b></p>
<p  ><a
href="mailto:shuodong@microsoft.com"><span >Shuo Dong</span></a><span >
&nbsp;&nbsp;&nbsp;&nbsp;
&lt;shuodong@microsoft.com&gt; </span></p>

<p  ><a
href="mailto:edoyle@microsoft.com"><span lang=DE >Erika Doyle</span></a><span lang=DE
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&lt;edoyle@microsoft.com&gt;</span></p>

<p  ><b><span >Former Editors: </span></b></p>
<p  ><a
href="mailto:mmielke@microsoft.com"><span lang=DE >Markus Mielke</span></a><span
> </span><span
lang=DE >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&lt;mmielke@microsoft.com&gt; </span></p>


<p  ><span >&nbsp;&nbsp;
</span></p>

<details class="annoying-warning">
  <summary>This document is obsolete.</summary>
  This specification is not being actively maintained, and should not be used as a guide for implementations.  It may be revived in the future, but for now should be considered obsolete.  <br>If you have questions or comments on this specification, please send an email to the CSS Working Group's mailing list at <a href="mailto:www-style@w3.org">www-style@w3.org</a>.  (Before sending mail for the first time, you have to subscribe at <a href="http://lists.w3.org/Archives/Public/www-style/">http://lists.w3.org/Archives/Public/www-style/</a>.)
</details>

<h1>Abstract</h1>

<p >The intent of this document is to provide a set of detailed
algorithms which describe certain table layout behaviors that are common to most
major browsers today and propose additional standard behaviors in order to
achieve full browser interoperability in table layout.&nbsp; The Table layout
algorithm is one of the most used and most difficult to understand features in
HTML, as there are no common behavior descriptions in either HTML or CSS. The
goal of this document is to introduce a focused discussion around a unified
table behavior with the goal of getting agreement on a set of scenarios for
integration into the CSS 3 Tables specification.&nbsp; </p>

<p >This document is not complete but it tries to capture the
most common scenarios in which browsers have achieved interoperability. Our
hope is that this document is seen as a starting point to provide at least a
partial definition of table layout behavior, ten years after its introduction
into the market.&nbsp; </p>

<h1>Captions in visual formatting model</h1>

<p >Captions above or below a 'table' element are formatted very
much as if they were a block element before or after the table, except that (1)
they inherit inheritable properties from the table, (2) they are not considered
to be a block box for the purposes of any 'compact' or 'run-in' element that
may precede the table, and (3) they use the width of the anonymous box as input
for its available width calculations. </p>

<p >The width of the anonymous box is the border-edge width of
the table box inside it, as described by CSS 2.1 section 17.4. Percentages on
'width' and 'height' properties of the table are relative to the anonymous
box's containing block, not the anonymous box itself.</p>

<p >This algorithm follows the CSS 2.1 specification of the
caption-side property, where the only possible values are top, bottom and
inherit. CSS 3 will also add left and right. Thus in the algorithm
presented here, the caption width will not affect the table auto layout
algorithm in any way. However, the output of the table auto layout algorithm
may affect the sizing of table caption, since it determines the anonymous table
box size.</p>
Edgar Manuel Ruiz Arias edgarplasticos3@hotmail.com @Edgarruiz856
<p ><span >In
the following example, the </span><a href=""><span
>'caption-side'</span></a><span > property places captions on top of tables.
The caption will be as wide as the anonymous box of the table, and caption text
will be left-justified. </span></p>

<pre class="example"><span >caption { caption-side: top;<br>
<br>
 width: auto;<br>
<br>
 text-align: left }</span></pre>

<p><span >Example of
the visual model:</span></p>

<p><span ><img border=0
width=533 height=483
src="image002.jpg"
alt="A table with a caption above&#10;it"></span></p>

<p><span >Note: CSS3
might want to define a property that enables the developer to use the table's
parent width instead of the anonymous box width as an input in the caption
width algorithm.</span></p>

<h3>Considerations for the caption width algorithm</h3>

<ol  start=1 type=1>
 <li  >Caption has either auto width
     or a specified width unit value.</li>
 <li  >Padding, margin and border
     should behave like a normal block box and are covered by the CSS Box Model
     calculations. </li>
</ol>

<h3>Inputs</h3>

<ol  start=1 type=1>
 <li  >Table used width </li>
 <li  >Caption specified width (if
     any) </li>
</ol>

<h3>Output</h3>

<p >Caption's used width</p>

<h3>Naming conventions<span >&nbsp;</span></h3>

<table Table border=1 cellspacing=0 cellpadding=0 width="100%"
 >
 <tr >
  <td width="21%" valign=top >
  <p ><b>Name</b></p>
  </td>
  <td width="78%" valign=top >
  <p ><b>Explanation</b></p>
  </td>
 </tr>
 <tr >
  <td width="21%" valign=top >
  <p >captionSpecifiedWidth</p>
  </td>
  <td width="78%" valign=top >
  <p >Input provided byEdgarruiz856 the width property.</p>
  </td>
 </tr>
 <tr >
  <td width="21%" valign=top >
  <p >captionUsedWidth</p>
  </td>
  <td width="78%" valign=top >
  <p >Output that determines the width of the caption algorithm.</p>
  </td>
 </tr>
 <tr >
  <td width="21%" valign=top >
  <p >contentMinWidth</p>
  </td>
  <td width="78%" valign=top >
  <p >The minimal unit of breakable text (in most cases, the smallest
  word in the caption).</p>
  </td>
 </tr>
 <tr >
  <td width="21%" valign=top >
  <p >tableUsedWidth</p>
  </td>
  <td width="78%" valign=top >
  <p >Input provided by Edgarruiz856 table auto layout algorithm. This is the
  width actually used by the table.</p>
  </td>
 </tr>
</table>

<p><span >&nbsp;</span></p>

<h3 >Algorithm</h3>

<p ><span >The
caption sizing algorithm can be summarized like this (ignoring possible constraints
set by the min-width and max-width properties)</span><span
class=MsoFootnoteReference><span > <a name="_ftnref1"></a><a href="#_ftn1" title=""><span
>[1]</span></a></span></span><span >:</span></p>

<p><span >&nbsp;</span></p>

<p  ><span >IF
captionSpecifiedWidth exist&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; captionUsedWidth =
captionSpecifiedWidth<br>
ELSE<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; captionUsedWidth
=&nbsp;tableUsedWidth</span></p>

<h3 >Observations</h3>

<ol  start=1 type=1>
 <li  >If&nbsp; captionSpecifiedWidth &lt; contentMinWidth, caption's
     content&nbsp;may stick out of the caption's box (overflow will then
     apply).&nbsp; </li>
 <li  >When captionSpecifiedWidth &gt;
     tableUsedWidth, caption and its content may stick out of the table's inner
     box (i.e., the caption will be wider than the table). </li>
 <li  >If tableUsedWidth &lt;
     contentMinWidth overflow will occur. This is the same as with normal block
     level elements </li>
 <li  >Specified Percentage width will
     be calculated based on tableUsedWidth </li>
</ol>

<p><span >In the
absence of a specified width, the caption is sized to the tableUsedWidth, which
in general follows the behavior of block level elements as described in 10.3.3
in the CSS2.1 specifications:</span></p>

<p><span >&nbsp;</span></p>

<p  ><a
href="http://www.w3.org/TR/CSS21/box.html#propdef-margin-left"><span
>'margin-left'</span></a> + <a
href="http://www.w3.org/TR/CSS21/box.html#propdef-border-left-width"><span
>'border-left-width'</span></a> + <a
href="http://www.w3.org/TR/CSS21/box.html#propdef-padding-left"><span
>'padding-left'</span></a> + <a
href="http://www.w3.org/TR/CSS21/visudet.html#propdef-width"><span
>'width'</span></a> + <a
href="http://www.w3.org/TR/CSS21/box.html#propdef-padding-right"><span
>'padding-right'</span></a> + <a
href="http://www.w3.org/TR/CSS21/box.html#propdef-border-right-width"><span
>'border-right-width'</span></a> +
<a href="http://www.w3.org/TR/CSS21/box.html#propdef-margin-right"><span
>'margin-right'</span></a> +
scrollbar width (if any) = tableUsedWidth</p>

<p><span >If 'width'
is not 'auto' and 'border-left-width' + 'padding-left' + 'width' +
'padding-right' + 'border-right-width' + scrollbar width (if any) (plus any of
'margin-left' or 'margin-right' that are not 'auto') is larger than the width
of the tableUsedWidth, then any 'auto' values for 'margin-left' or
'margin-right' are, for the following rules, treated as zero. </span></p>

<p><span >&nbsp;If
all of the above have a computed value other than 'auto', the values are said
to be &quot;over-constrained&quot; and one of the used values will have to be
different from its computed value. If the </span><a
href="http://www.w3.org/TR/CSS21/visuren.html#propdef-direction"><span
>'direction'</span></a><span > property of the containing block has the
value 'ltr', the specified value of </span><a
href="http://www.w3.org/TR/CSS21/box.html#propdef-margin-right"><span
>'margin-right'</span></a><span > is ignored and the value is calculated so
as to make the equality true. If the value of </span><a
href="http://www.w3.org/TR/CSS21/visuren.html#propdef-direction"><span
>'direction'</span></a><span > is 'rtl', this happens to </span><a
href="http://www.w3.org/TR/CSS21/box.html#propdef-margin-left"><span
>'margin-left'</span></a><span > instead. </span></p>

<p><span >&nbsp;If
there is exactly one value specified as 'auto', its used value follows from
the equality. </span></p>

<p><span >If </span><a
href="http://www.w3.org/TR/CSS21/visudet.html#propdef-width"><span
>'width'</span></a><span > is set to 'auto', all other 'auto' values
become '0' and </span><a
href="http://www.w3.org/TR/CSS21/visudet.html#propdef-width"><span
>'width'</span></a><span > follows from the resulting equality. </span></p>

<p><span >If both </span><a
href="http://www.w3.org/TR/CSS21/box.html#propdef-margin-left"><span
>'margin-left'</span></a><span > and </span><a
href="http://www.w3.org/TR/CSS21/box.html#propdef-margin-right"><span
>'margin-right'</span></a><span > are 'auto', their used values are equal.
This horizontally centers the element with respect to the edges of the
tableUsedWidth. </span></p>

<p><span >The
&quot;scrollbar width&quot; value is only relevant if the user agent uses a
scrollbar as its scrolling mechanism. See the definition of the </span><a
href="http://www.w3.org/TR/CSS21/visufx.html#propdef-overflow"><span
>'overflow'</span></a><span > property. &nbsp;</span></p>

<h1>Automatic Table Layout Algorithm Overview</h1>

<p >The design of the following algorithm is based upon the CSS
2.1 recommended algorithm (http://www.w3.org/TR/CSS21/tables.html#width-layout),
the HTML 4.1 recommended algorithm
(http://www.w3.org/TR/REC-html40/appendix/notes.html#h-B.5.2 ), and an
interoperability analysis of Internet Explorer 7, Firefox 3 Alpha, Opera 9,
&nbsp;and Safari 3 Beta. The goal of this design is to stick to the CSS 2.1 and
HTML 4.1 recommendations as close as possible while also accommodating the
common behaviors of the major browsers. </p>

<p >The algorithm proposed in this document uses several types of
inputs: &nbsp;the intrinsic characteristics of table cells (i.e., the minimum
and maximum widths of their content), the value of each cells column-spanning
(colspan) attribute (if any is set), and the specified width, minimum width
(min-width) and maximum width (max-width) of each table cell and the table
itself. The output of the algorithm is the final used width of the table and
each of its columns. </p>

<h1>List of scenarios handled by this algorithm</h1>

<p >This document is considering the following author <b>inputs</b>
into the algorithm:</p>

<table Table border=0 cellspacing=0 cellpadding=0
 >
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >Cell</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Unit value</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Percentage</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Auto</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >min-width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  >N/A*</p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >max-width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  >N/A*</p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >Width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
 </tr>
</table>

<p >* Due to the current lack of implementations, percentage
values are not defined</p>

<table Table border=0 cellspacing=0 cellpadding=0
 >
 <tr >
  <td width=160 valign=top >
  <p  ><b><span >Col/ColGroup</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Unit value</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Percentage</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Auto</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >min-width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded **</p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded</p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded</p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >max-width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded</p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded</p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded</p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >Width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded</p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded</p>
  </td>
  <td width=160 valign=top >
  <p  >Cascaded</p>
  </td>
 </tr>
</table>

<p >** A Cell value will overwrite Col value, which will overwrite
ColGroup as part of the cascade. This is an alternative proposal to the current
CSS2.1 definition</p>

<table Table border=0 cellspacing=0 cellpadding=0
 >
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >Table</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Unit value</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Percentage</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><b><span >Auto</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >min-width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >max-width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
 </tr>
 <tr>
  <td width=160 valign=top >
  <p  ><b><span >Width</span></b></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
  <td width=160 valign=top >
  <p  ><span ></span></p>
  </td>
 </tr>
</table>

<p  >The <b>output</b>
will be:</p>

<p class=MsoListParagraph ><span
></span><span >
</span>The tables final used width</p>

<p class=MsoListParagraph ><span
></span><span >
</span>Each columns final used width</p>

<p >&nbsp;</p>

<p >This will enable the following <b>scenarios</b>:</p>

<p class=MsoListParagraph ><span ></span><span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Table with the above specified inputs</p>

<p class=MsoListParagraph ><span ></span><span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Column-spanning scenarios, where the width on column spans can be expressed
in a unit value, auto or percentages</p>

<p class=MsoListParagraph ><span ></span><span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Simple nested table scenarios, as long as the intrinsic content width
can be determined</p>

<p >Still open issues:</p>

<div class="issue">

<p class="issue">Issue #1: <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Overlapping
spans (these work but do not produce an exact result) </p>

<p class="issue">Issue #2: <span >&nbsp;&nbsp;&nbsp;&nbsp; </span>Border
width(not taken into account, as it should be an easy addition)</p>

<p class="issue">Issue #3: <span >&nbsp;&nbsp;&nbsp;&nbsp; </span>Cell
padding (in both specified unit and percent values)</p>

<p class="issue">Issue #4: <span >&nbsp;&nbsp;&nbsp;&nbsp; </span>Cellspacing
/ border-spacing</p>

</div>

<h1>&nbsp;</h1>

<p >&nbsp;</p>

<p >&nbsp;</p>

<h1>Algorithm Summary </h1>

<p >Table auto layout calculation is achieved with the following
steps. </p>

<p class=MsoListParagraph >1.<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Calculate each cells minimum width, preferred width and preferred
percent</b> by examining the cells content and its width/min-with/max-width
properties.</p>

<p class=MsoListParagraph >2.<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Identify the minimum width, preferred width and preferred percent of
each column</b> in the table by finding the largest minimum width, largest
preferred width and largest preferred percent among all cells in the column. In
this step, the algorithm first goes over all cells with colspan equal to one,
and then distributes the minimum width, preferred width and preferred percent
of each cell with colspan &gt; 1 among the columns it spans over. </p>

<p class=MsoListParagraph >3.<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>With each columns minimum width, preferred width<b> </b>and preferred
percent,<b> calculate the tables minimum width and preferred width</b></p>

<p class=MsoListParagraph >4.<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Determine the tables final used width</b> by attempting to satisfy
each columns preferred width (or preferred percent if it has one) to the
greatest extent possible.</p>

<p class=MsoListParagraph >5.<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Decide how to <b>distribute the tables final used width among all the
columns</b>. During this process, columns with specified percentage width are
given first priority, followed by the columns with specified unit value width.
Columns with unspecified width (or width set to auto) has the lowest
priority.</p>

<p class=MsoListParagraph >6.<span 
by: Edgar Manuel Ruiz Arias 