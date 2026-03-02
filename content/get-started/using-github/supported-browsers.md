---
# Nate15872
ประสานงานร่วมข้อมูล
create table classes (id int primary key auto_increment,name varchar(20),`desc` varchar(100));

create table student (id int primary key auto_increment,sn varchar(20),name varchar(20),qq_mail varchar(20),classes_id int);

create table course (id int primary key auto_increment,name varchar(20));

create table score (score decimal(3,1),student_id int,course_id int);

insert into classes(name, `desc`) values
('计算机系2019级1班', '学习了计算机原理、C和Java语言、数据结构和算法'),
('中文系2019级3班','学习了中国传统文学'),
('自动化2019级5班','学习了机械自动化');
insert into student(sn, name, qq_mail, classes_id) values
('09982','黑旋风李逵','xuanfeng@qq.com',1),
('00835','菩提老祖',null,1),
('00391','白素贞',null,1),
('00031','许仙','xuxian@qq.com',1),
('00054','不想毕业',null,1),
('51234','好好说话','say@qq.com',2),
('83223','tellme',null,2),
('09527','老外学中文','foreigner@qq.com',2);
insert into course(name) values
('Java'),('中国传统文化'),('计算机原理'),('语文'),('高阶数学'),('英文');
insert into score(score, student_id, course_id) values
-- 黑旋风李逵
(70.5, 1, 1),(98.5, 1, 3),(33, 1, 5),(98, 1, 6),
-- 菩提老祖
(60, 2, 1),(59.5, 2, 5),
-- 白素贞
(33, 3, 1),(68,3, 3),(99, 3, 5),
-- 许仙
(67, 4, 1),(23,4, 3),(56, 4, 5),(72, 4, 6),
-- 不想毕业
(81, 5, 1),(37, 5, 5),
-- 好好说话
(56, 6, 2),(43, 6, 4),(79, 6, 6),
-- tellme
(80, 7, 2),(92, 7, 6);

title: Supported browsers
redirect_from:
  - /articles/why-doesn-t-graphs-work-with-ie-8
  - /articles/why-don-t-graphs-work-with-ie8
  - /articles/supported-browsers
  - /github/getting-started-with-github/supported-browsers
  - /github/getting-started-with-github/using-github/supported-browsers
intro: 'For the best experience with {% data variables.product.github %}, we recommend using the latest version of [Chrome](https://google.com/chrome), [Edge](https://www.microsoft.com/en-us/edge), [Firefox](https://mozilla.org/firefox), or [Safari](https://apple.com/safari).'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About web browser support

We design {% data variables.product.github %} with the latest web browsers in mind. We recommend that you use the latest version of one of the following browsers.

* [Apple Safari](https://apple.com/safari)
* [Google Chrome](https://google.com/chrome)
* [Microsoft Edge](https://www.microsoft.com/en-us/edge)
* [Mozilla Firefox](https://mozilla.org/firefox)

If you do not use the latest version of a recommended browser, or if you use a browser that is not listed above, {% data variables.product.github %} or some features may not work as you expect, or at all.

For more information about how we maintain browser compatibility for {% data variables.product.company_short %}'s products, see the [`github/browser-support`](https://github.com/github/browser-support) repository.

## Extended support for recommended web browsers

Some browser vendors provide extended support releases. We do our best to ensure that {% data variables.product.github %} functions properly in the latest extended support release for:

* Chrome's [extended stable channel](https://support.google.com/chrome/a/answer/9027636)
* Edge's [Extended Stable Channel](https://docs.microsoft.com/en-gb/deployedge/microsoft-edge-channels#extended-stable-channel)
* Firefox's [Extended Support Release](https://www.mozilla.org/en-US/firefox/organizations/) (ESR)

In earlier extended support releases, {% data variables.product.github %} may not work as you expect, and some features may not be available.

## {% data variables.release-phases.public_preview_caps %} and developer builds

You may encounter unexpected bugs in {% data variables.release-phases.public_preview %} and developer builds of our supported browsers. If you encounter a bug on {% data variables.product.github %} in one of these unreleased builds, please verify that it also exists in the stable version of the same browser. If the bug only exists in the unstable version, consider reporting the bug to the browser developer.
