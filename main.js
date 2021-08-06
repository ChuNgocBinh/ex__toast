function showSuccess() {
    showToast({
        title: "Thành công!",
        message: "Bạn đã đăng ký thành công tài khoản tại F8.",
        type: "success"
    })
}
function showError() {
    showToast({
        title: "Thất bại!",
        message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
        type: "error"
    })
}

const toastTotal = document.getElementById("toast__total");
function showToast({ title, message, type }) {
    const icons = {
        success: "fa-check-circle",
        error: "fa-exclamation-circle"
    }
    const icon = icons[type]
    const main = document.createElement("div");
    main.innerHTML = `
    <div class="toast toast--${type}">
    <div class="toast__icon toast__icon--${type}">
    <i class="fas ${icon}"></i>
    </div>
    <div class="toast__content">
    <h3>${title}</h3>
    <p>${message}</p>
    </div>
    <div class="toast__close">
    <i class="fas fa-times"></i>
    </div>
    </div>
    `
    toastTotal.appendChild(main)
    const autoremove = setTimeout(() => {
        toastTotal.removeChild(main)
    }, 6000)

    main.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
            toastTotal.removeChild(main);
            clearTimeout(autoremove);
        }

    }
}
