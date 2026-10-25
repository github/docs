---
title: Hiểu về GitHub Actions
shortTitle: Hiểu về GitHub Actions
intro: 'Tìm hiểu những kiến thức cơ bản về GitHub Actions, bao gồm các khái niệm cốt lõi và thuật ngữ thiết yếu.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
  - /actions/learn-github-actions/understanding-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

## Tổng quan

{% data reusables.actions.about-actions %} Bạn có thể tạo workflow để build và kiểm thử mỗi pull request vào repository, hoặc triển khai pull request đã merge lên môi trường production.

GitHub Actions không chỉ đơn thuần là DevOps — nó còn cho phép bạn chạy workflow khi có các sự kiện khác xảy ra trong repository. Ví dụ: bạn có thể chạy workflow để tự động thêm nhãn phù hợp mỗi khi có người tạo issue mới trong repository.

GitHub cung cấp máy ảo Linux, Windows và macOS để chạy workflow, hoặc bạn có thể host runner tự quản lý trong trung tâm dữ liệu hoặc hạ tầng đám mây của riêng mình.

## Các thành phần của GitHub Actions

Bạn có thể cấu hình _workflow_ GitHub Actions để kích hoạt khi có _sự kiện_ xảy ra trong repository — ví dụ như mở pull request hoặc tạo issue. Workflow chứa một hoặc nhiều _job_ có thể chạy theo thứ tự tuần tự hoặc song song. Mỗi job sẽ chạy bên trong _runner_ máy ảo riêng của nó, hoặc bên trong container, và có một hoặc nhiều _step_ thực thi script do bạn định nghĩa hoặc chạy _action_ — phần mở rộng có thể tái sử dụng giúp đơn giản hóa workflow.

![Sơ đồ hiển thị một sự kiện kích hoạt runner 1 với Job 1, và runner 2 với Job 2. Mỗi job được chia thành nhiều bước.](/assets/images/help/actions/overview-actions-simple.png)

### Workflow

Workflow là quy trình tự động hóa có thể cấu hình, chạy một hoặc nhiều job. Workflow được định nghĩa bằng file YAML được lưu trong repository và sẽ chạy khi có sự kiện trong repository kích hoạt, hoặc có thể kích hoạt thủ công, hoặc theo lịch đã định.

Workflow được định nghĩa trong thư mục `.github/workflows` của repository. Một repository có thể có nhiều workflow, mỗi workflow thực hiện một tập hợp tác vụ khác nhau. Ví dụ: một workflow build và kiểm thử pull request, workflow khác triển khai ứng dụng mỗi khi có release, và workflow thứ ba thêm nhãn khi có người mở issue.

Bạn có thể tham chiếu một workflow bên trong workflow khác. Để biết thêm thông tin, xem [AUTOTITLE](/actions/using-workflows/reusing-workflows).

Để biết thêm về workflow, xem [AUTOTITLE](/actions/using-workflows).

### Sự kiện (Events)

Sự kiện là hoạt động cụ thể trong repository kích hoạt chạy workflow. Ví dụ: hoạt động có thể bắt nguồn từ GitHub khi có người tạo pull request, mở issue, hoặc push commit vào repository. Bạn cũng có thể kích hoạt workflow chạy theo lịch, bằng cách [POST vào REST API](/rest/repos/repos#create-a-repository-dispatch-event), hoặc thủ công.

Để xem danh sách đầy đủ các sự kiện có thể dùng để kích hoạt workflow, xem [Sự kiện kích hoạt workflow](/actions/reference/events-that-trigger-workflows).

### Job

Job là tập hợp các _step_ trong workflow chạy trên cùng một runner. Mỗi step là script shell sẽ được thực thi, hoặc là một _action_ sẽ được chạy. Các step được thực thi theo thứ tự và phụ thuộc lẫn nhau. Vì mỗi step chạy trên cùng runner, bạn có thể chia sẻ dữ liệu từ step này sang step khác. Ví dụ: một step build ứng dụng và step tiếp theo kiểm thử ứng dụng đã build.

Bạn có thể cấu hình job phụ thuộc vào job khác; theo mặc định, các job không có phụ thuộc chạy song song nhau. Khi một job phụ thuộc job khác, nó sẽ chờ job phụ thuộc hoàn thành trước khi có thể chạy. Ví dụ: bạn có nhiều job build cho các kiến trúc khác nhau không có phụ thuộc, và một job đóng gói phụ thuộc vào các job đó. Các job build sẽ chạy song song nhau, và khi tất cả hoàn thành, job đóng gói mới chạy.

Để biết thêm về job, xem [AUTOTITLE](/actions/using-jobs).

### Action

_Action_ là ứng dụng tùy chỉnh cho nền tảng GitHub Actions thực hiện tác vụ phức tạp thường xuyên lặp lại. Dùng action để giảm lượng code lặp lại trong file workflow. Action có thể pull repository từ GitHub, thiết lập toolchain phù hợp cho môi trường build của bạn, hoặc thiết lập xác thực với nhà cung cấp đám mây.

Bạn có thể viết action của riêng mình, hoặc tìm action dùng trong workflow tại GitHub Marketplace.

{% data reusables.actions.internal-actions-summary %}

Để biết thêm thông tin, xem [AUTOTITLE](/actions/creating-actions).

### Runner

{% data reusables.actions.about-runners %} Mỗi runner có thể chạy một job duy nhất tại một thời điểm. GitHub cung cấp runner Ubuntu Linux, Microsoft Windows và macOS để chạy workflow; mỗi lần chạy workflow sử dụng một máy ảo mới được cung cấp sạch. GitHub cũng cung cấp runner lớn hơn, có sẵn theo các cấu hình khác nhau. Để biết thêm thông tin, xem [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners). Nếu bạn cần hệ điều hành khác hoặc cần cấu hình phần cứng cụ thể, bạn có thể host runner của riêng mình. Để biết thêm thông tin về runner tự quản lý, xem [AUTOTITLE](/actions/hosting-your-own-runners).

## Tạo workflow ví dụ

GitHub Actions dùng cú pháp YAML để định nghĩa workflow. Mỗi workflow được lưu dưới dạng file YAML riêng trong thư mục `.github/workflows` trong code repository.

Bạn có thể tạo workflow ví dụ trong repository kích hoạt tự động một số lệnh `echo` mỗi khi code được push. Trong ví dụ này, GitHub Actions kiểm tra out (lấy về) code của bạn, cài đặt [bats](https://www.npmjs.com/package/bats) framework kiểm thử, và chạy lệnh bats xuất ra phiên bản phần mềm: `bats -v`.

1. Trong repository, tạo thư mục `.github/workflows/` để lưu file workflow.
1. Trong thư mục `.github/workflows/`, tạo file mới tên `learn-github-actions.yml` và thêm code sau.

   ```yaml
   name: learn-github-actions
   run-name: ${{ github.actor }} is learning GitHub Actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '20'
         - run: npm install -g bats
         - run: bats -v
   ```

1. Commit các thay đổi và push lên repository GitHub.

File workflow mới của bạn giờ đã được cài đặt trong repository và sẽ tự động chạy mỗi khi có người push thay đổi vào repository.

Để xem chi tiết lịch sử thực thi của workflow, xem [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/viewing-workflow-run-history).

## Hiểu về file workflow

Để giúp bạn hiểu cách cú pháp YAML được dùng để tạo file workflow, phần này giải thích từng dòng của ví dụ giới thiệu:

```yaml
name: learn-github-actions
```

_Tùy chọn_ — Tên của workflow như hiển thị trong tab Actions của repository GitHub. Nếu trường này bị bỏ qua, tên workflow sẽ là đường dẫn tương đối của file workflow tính từ thư mục gốc repository.

```yaml
run-name: ${{ github.actor }} is learning GitHub Actions
```

_Tùy chọn_ — Tên cho các lần chạy workflow được tạo từ workflow này, như hiển thị trong danh sách lần chạy workflow trên tab Actions của repository. Ví dụ này dùng biểu thức với context `github` để hiển thị tên tài khoản GitHub của người dùng đã kích hoạt lần chạy workflow.

```yaml
on: [push]
```

Chỉ định trigger cho workflow này. Ví dụ này dùng sự kiện `push`, vì vậy lần chạy workflow được kích hoạt mỗi khi có người push thay đổi vào repository hoặc merge pull request. Đây là trigger dựa trên push vào mọi nhánh; để xem ví dụ về cú pháp chỉ chạy khi push vào nhánh, file, hoặc thẻ cụ thể, xem [AUTOTITLE](/actions/reference/events-that-trigger-workflows).

```yaml
jobs:
```

Nhóm tất cả job chạy trong workflow `learn-github-actions`.

```yaml
  check-bats-version:
```

Định nghĩa một job tên `check-bats-version`. Các key con sẽ định nghĩa thuộc tính của job.

```yaml
    runs-on: ubuntu-latest
```

Cấu hình job chạy trên phiên bản Ubuntu Linux runner mới nhất. Điều này có nghĩa job sẽ chạy trên máy ảo mới được cung cấp bởi GitHub.

```yaml
    steps:
```

Nhóm tất cả các step chạy trong job `check-bats-version`. Mỗi mục được lồng dưới phần này là một action hoặc script shell riêng.

```yaml
      - uses: actions/checkout@v4
```

Từ khóa `uses` chỉ định rằng step này sẽ chạy `v4` của action `actions/checkout`. Đây là action kiểm tra repository của bạn lên runner, cho phép bạn chạy script hoặc action khác trên code của mình (như công cụ build và kiểm thử). Bạn nên dùng action checkout bất cứ khi nào workflow của bạn sẽ chạy trên code của repository.

```yaml
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
```

Step này dùng action `actions/setup-node@v4` để cài đặt phiên bản Node.js được chỉ định trên runner, cho phép bạn truy cập lệnh `npm`.

```yaml
      - run: npm install -g bats
```

Từ khóa `run` yêu cầu job thực thi lệnh trên runner. Trong trường hợp này, bạn đang dùng `npm` để cài đặt gói kiểm thử phần mềm `bats`.

```yaml
      - run: bats -v
```

Cuối cùng, bạn chạy lệnh `bats` với tham số xuất ra phiên bản phần mềm.

### Trực quan hóa file workflow

Trong sơ đồ này, bạn có thể thấy file workflow vừa tạo và cách các thành phần GitHub Actions được tổ chức theo thứ bậc. Mỗi bước thực thi một action hoặc script shell riêng. Các bước 1 và 2 chạy action, còn các bước 3 và 4 chạy script shell. Để tìm thêm action được xây dựng sẵn cho workflow, xem [AUTOTITLE](/actions/learn-github-actions/finding-and-customizing-actions).

![Sơ đồ hiển thị trigger, runner, và job của workflow ví dụ. Job gồm 4 bước.](/assets/images/help/actions/overview-actions-event.png)

## Xem hoạt động lần chạy workflow

Khi workflow được kích hoạt, _lần chạy workflow_ thực thi workflow sẽ được tạo. Sau khi lần chạy workflow bắt đầu, bạn có thể xem biểu đồ trực quan về tiến trình chạy và xem hoạt động của từng bước trên GitHub.

{% data reusables.repositories.navigate-to-repo %}
1. Dưới tên repository, nhấp **Actions**.

   ![Ảnh chụp màn hình các tab của repository "github/docs". Tab "Actions" được tô sáng bằng viền màu cam.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. Trong thanh bên trái, nhấp workflow bạn muốn xem.

   ![Ảnh chụp màn hình thanh bên trái trong tab "Actions". Workflow "learn-github-actions" được tô sáng bằng viền màu cam đậm.](/assets/images/help/actions/learn-github-actions-workflow.png)

1. Trong "Workflow runs" (Các lần chạy workflow), nhấp tên lần chạy bạn muốn xem.

1. Trong "Jobs", nhấp job `check-bats-version`.

1. Nhật ký hiển thị cách từng step được xử lý. Nhấp vào bất kỳ step nào để mở rộng xem chi tiết.

   ![Ảnh chụp màn hình kết quả từ workflow ví dụ.](/assets/images/help/actions/learn-github-actions-workflow-run-revised.png)

## Các bước tiếp theo

Để tiếp tục học GitHub Actions, xem [AUTOTITLE](/actions/learn-github-actions/finding-and-customizing-actions).
