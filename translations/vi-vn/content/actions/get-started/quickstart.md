---
title: Bắt đầu nhanh với GitHub Actions
shortTitle: Bắt đầu nhanh
intro: 'Thử các tính năng cốt lõi của GitHub Actions trong vài phút.'
redirect_from:
  - /actions/quickstart
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
---

## Giới thiệu

GitHub Actions là nền tảng tích hợp liên tục và phân phối liên tục (CI/CD) cho phép bạn tự động hóa quy trình build, kiểm thử và triển khai. Bạn có thể tạo workflow chạy kiểm thử mỗi khi push thay đổi vào repository, hoặc triển khai pull request đã được merge lên môi trường production.

Hướng dẫn bắt đầu nhanh này hướng dẫn cách sử dụng giao diện người dùng của GitHub để thêm workflow minh họa các tính năng thiết yếu của GitHub Actions.

Để bắt đầu với workflow đã được cấu hình sẵn, hãy duyệt qua danh sách mẫu trong repository [actions/starter-workflows](https://github.com/actions/starter-workflows). Để biết thêm thông tin, xem [Sử dụng mẫu workflow](/vi/actions/how-tos/write-workflows/use-workflow-templates).

Để có cái nhìn tổng quan về workflow của GitHub Actions, xem [Workflows](/vi/actions/concepts/workflows-and-actions/workflows). Nếu bạn muốn tìm hiểu về các thành phần tạo nên GitHub Actions, xem [Hiểu về GitHub Actions](/vi/actions/get-started/understand-github-actions).

## Sử dụng mẫu workflow

GitHub cung cấp các mẫu workflow được cấu hình sẵn mà bạn có thể dùng ngay hoặc tùy chỉnh để tạo workflow riêng. GitHub phân tích code của bạn và hiển thị các mẫu workflow có thể hữu ích cho repository của bạn. Ví dụ: nếu repository chứa code Node.js, bạn sẽ thấy gợi ý cho các dự án Node.js.

Các mẫu workflow này được thiết kế để giúp bạn bắt đầu nhanh chóng, cung cấp nhiều cấu hình khác nhau như:

* CI: [Workflow tích hợp liên tục](https://github.com/actions/starter-workflows/tree/main/ci)
* Deployments: [Workflow triển khai](https://github.com/actions/starter-workflows/tree/main/deployments)
* Automation: [Tự động hóa workflow](https://github.com/actions/starter-workflows/tree/main/automation)
* Code Scanning: [Workflow quét code](https://github.com/actions/starter-workflows/tree/main/code-scanning)
* Pages: [Workflow cho Pages](https://github.com/actions/starter-workflows/tree/main/pages)

Hãy dùng các workflow này làm điểm khởi đầu để xây dựng workflow tùy chỉnh của bạn, hoặc dùng ngay như hiện tại. Bạn có thể xem toàn bộ danh sách mẫu workflow trong repository [actions/starter-workflows](https://github.com/actions/starter-workflows).

## Điều kiện tiên quyết

Hướng dẫn này giả định rằng:

* Bạn có ít nhất kiến thức cơ bản về cách sử dụng GitHub. Nếu chưa có, hãy đọc một số bài viết trong tài liệu về repository và pull request trước. Ví dụ: xem [Bắt đầu nhanh với repository](/vi/repositories/creating-and-managing-repositories/quickstart-for-repositories), [Nhánh](/vi/pull-requests/reference/branches), và [Pull request](/vi/pull-requests/reference/pull-requests).
* Bạn có một repository trên GitHub nơi bạn có thể thêm file.
* Bạn có quyền truy cập vào GitHub Actions.

  > [!NOTE] Nếu tab **Actions** không hiển thị dưới tên repository của bạn trên GitHub, có thể là vì Actions đã bị tắt cho repository đó. Để biết thêm thông tin, xem [Quản lý cài đặt GitHub Actions cho repository](/vi/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository).

## Tạo workflow đầu tiên của bạn

1. Trong repository trên GitHub, tạo file workflow có tên `github-actions-demo.yml` trong thư mục `.github/workflows`. Để thực hiện:
   * Nếu thư mục `.github/workflows` đã tồn tại, điều hướng đến thư mục đó trên GitHub, nhấp **Add file** (Thêm file), sau đó nhấp **Create new file** (Tạo file mới), và đặt tên file là `github-actions-demo.yml`.

   * Nếu repository chưa có thư mục `.github/workflows`, vào trang chính của repository trên GitHub, nhấp **Add file**, sau đó nhấp **Create new file**, và đặt tên file là `.github/workflows/github-actions-demo.yml`. Thao tác này tạo thư mục `.github` và `workflows` cùng với file `github-actions-demo.yml` trong một bước duy nhất.

   > [!NOTE]
   > Để GitHub phát hiện bất kỳ workflow GitHub Actions nào trong repository, bạn phải lưu file workflow vào thư mục có tên `.github/workflows`.
   >
   > Bạn có thể đặt tên file workflow tùy ý, nhưng phải dùng `.yml` hoặc `.yaml` làm phần mở rộng. YAML là ngôn ngữ đánh dấu thường được dùng cho các file cấu hình.

2. Sao chép nội dung YAML sau vào file `github-actions-demo.yml`:

   ```yaml copy
   name: GitHub Actions Demo
   run-name: ${{ github.actor }} is testing out GitHub Actions 🚀
   on: [push]
   jobs:
     Explore-GitHub-Actions:
       runs-on: ubuntu-latest
       steps:
         - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
         - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
         - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
         - name: Check out repository code
           uses: actions/checkout@v6
         - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
         - run: echo "🖥️ The workflow is now ready to test your code on the runner."
         - name: List files in the repository
           run: |
             ls ${{ github.workspace }}
         - run: echo "🍏 This job's status is ${{ job.status }}."
   ```

   Ở bước này, bạn chưa cần hiểu chi tiết về workflow. Hiện tại, bạn chỉ cần sao chép và dán nội dung vào file. Sau khi hoàn thành hướng dẫn bắt đầu nhanh này, bạn có thể tìm hiểu về cú pháp của file workflow trong [Workflows](/vi/actions/concepts/workflows-and-actions/workflows), và để hiểu về các context của GitHub Actions như `${{ github.actor }}` và `${{ github.event_name }}`, xem [Tài liệu tham khảo Context](/vi/actions/reference/workflows-and-actions/contexts).

3. Nhấp **Commit changes** (Lưu thay đổi).

4. Trong hộp thoại "Propose changes" (Đề xuất thay đổi), chọn tùy chọn commit trực tiếp vào nhánh mặc định hoặc tạo nhánh mới và bắt đầu pull request. Sau đó nhấp **Commit changes** hoặc **Propose changes**.

   ![Ảnh chụp màn hình hộp thoại "Propose changes" với các vùng được đề cập được tô sáng bằng viền màu cam.](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Việc commit file workflow vào một nhánh trong repository sẽ kích hoạt sự kiện `push` và chạy workflow của bạn.

Nếu bạn chọn tạo pull request, bạn có thể tiếp tục và tạo pull request, nhưng điều này không cần thiết cho mục đích của hướng dẫn bắt đầu nhanh này vì commit vẫn đã được thực hiện vào một nhánh và sẽ kích hoạt workflow mới.

## Xem kết quả workflow của bạn

1. Trên GitHub, điều hướng đến trang chính của repository.

2. Dưới tên repository, nhấp **Actions** (Hành động).

   ![Ảnh chụp màn hình các tab của repository "github/docs". Tab "Actions" được tô sáng bằng viền màu cam.](/assets/images/help/repository/actions-tab-global-nav-update.png)

3. Trong thanh bên trái, nhấp workflow bạn muốn hiển thị, trong ví dụ này là "GitHub Actions Demo."

   ![Ảnh chụp màn hình trang "Actions". Tên của workflow ví dụ "GitHub Actions Demo" được tô sáng bằng viền màu cam đậm.](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)

4. Từ danh sách các lần chạy workflow, nhấp tên của lần chạy bạn muốn xem, trong ví dụ này là "USERNAME is testing out GitHub Actions."

5. Trong thanh bên trái của trang workflow run, dưới phần **Jobs** (Công việc), nhấp job **Explore-GitHub-Actions**.

   ![Ảnh chụp màn hình trang "Workflow run". Trong thanh bên trái, job "Explore-GitHub-Actions" được tô sáng bằng viền màu cam đậm.](/assets/images/help/repository/actions-quickstart-job.png)

6. Nhật ký hiển thị cách từng bước được xử lý. Mở rộng bất kỳ bước nào để xem chi tiết.

   ![Ảnh chụp màn hình các bước được chạy bởi workflow.](/assets/images/help/repository/actions-quickstart-logs.png)

   Ví dụ: bạn có thể thấy danh sách các file trong repository:

   ![Ảnh chụp màn hình bước "List files in the repository" được mở rộng để hiển thị đầu ra nhật ký. Đầu ra của bước được tô sáng bằng viền màu cam.](/assets/images/help/repository/actions-quickstart-log-detail.png)

Workflow ví dụ bạn vừa thêm được kích hoạt mỗi khi code được push vào nhánh, và cho thấy cách GitHub Actions có thể hoạt động với nội dung trong repository của bạn. Để có hướng dẫn chuyên sâu, xem [Hiểu về GitHub Actions](/vi/actions/get-started/understand-github-actions).

## Các bước tiếp theo

GitHub Actions có thể giúp bạn tự động hóa gần như mọi khía cạnh của quy trình phát triển ứng dụng. Sẵn sàng bắt đầu chưa? Dưới đây là một số tài nguyên hữu ích để tiến xa hơn với GitHub Actions:

* Để tạo workflow GitHub Actions, xem [Sử dụng mẫu workflow](/vi/actions/how-tos/write-workflows/use-workflow-templates).
* Để tạo workflow tích hợp liên tục (CI), xem [Build và kiểm thử code của bạn](/vi/actions/tutorials/build-and-test-code).
* Để build và xuất bản package, xem [Xuất bản package](/vi/actions/tutorials/publish-packages).
* Để triển khai dự án, xem [Triển khai lên nền tảng bên thứ ba](/vi/actions/how-tos/deploy/deploy-to-third-party-platforms).
* Để tự động hóa các nhiệm vụ và quy trình trên GitHub, xem [Quản lý công việc với GitHub Actions](/vi/actions/tutorials/manage-your-work).
* Để xem các ví dụ minh họa các tính năng phức tạp hơn của GitHub Actions, xem [Chọn những gì workflow của bạn thực hiện](/vi/actions/how-tos/write-workflows/choose-what-workflows-do). Các ví dụ chi tiết này giải thích cách kiểm thử code trên runner, truy cập GitHub CLI, và sử dụng các tính năng nâng cao như đồng thời và ma trận kiểm thử.
* Để chứng nhận năng lực của bạn trong việc tự động hóa workflow và tăng tốc phát triển với GitHub Actions, hãy lấy chứng chỉ GitHub Actions với GitHub Certifications. Để biết thêm thông tin, xem [Giới thiệu về GitHub Certifications](/vi/get-started/showcase-your-expertise-with-github-certifications/about-github-certifications).
