// ===========================
// 網站保護功能
// ===========================

// 禁用右鍵
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    });
    
    // 禁止拖曳圖片
    document.querySelectorAll("img").forEach(img => {
    img.draggable = false;
    });
    
    document.addEventListener("dragstart", (e) => {
    e.preventDefault();
    });
    
    // 禁止選取文字
    document.addEventListener("selectstart", (e) => {
    e.preventDefault();
    });
    
    // 禁止常見開發者快捷鍵
    document.addEventListener("keydown", (e) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
    }

    // Ctrl + Shift + J
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
    }

    // Ctrl + U
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }

    // Ctrl + S
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }

});      