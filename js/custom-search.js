// 自定义搜索功能
document.addEventListener('DOMContentLoaded', function() {
  // 创建搜索按钮添加到导航栏
  const navbarRight = document.querySelector('.navbar-nav');
  
  if (navbarRight) {
    const searchBtn = document.createElement('button');
    searchBtn.className = 'search-btn';
    searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    searchBtn.setAttribute('aria-label', '搜索');
    navbarRight.appendChild(searchBtn);
  
    // 为搜索按钮添加点击事件
    searchBtn.addEventListener('click', function() {
      window.location.href = '/search/';
    });
  }
  
  // 添加键盘快捷键 Ctrl+K 打开搜索
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      window.location.href = '/search/';
    }
  });
  
  // 检查是否在首页
  const isHomePage = document.querySelector('.home-container') || 
                     document.querySelector('.index-page') || 
                     (window.location.pathname === '/' || window.location.pathname === '/index.html');
  
  // 为首页添加搜索框
  if (isHomePage) {
    const banner = document.querySelector('.banner') || document.querySelector('header') || document.querySelector('.main-content > .container');
    
    if (banner) {
      const searchContainer = document.createElement('div');
      searchContainer.className = 'home-search-container';
      
      searchContainer.innerHTML = `
        <div class="home-search-box">
          <input type="text" class="home-search-input" placeholder=" " autocomplete="off">
          <i class="fas fa-search home-search-icon"></i>
          <div class="home-search-placeholder">搜索文章标题和内容...</div>
          <div class="home-search-shortcut">Ctrl+K</div>
        </div>
      `;
      
      // 在banner后插入搜索框
      banner.parentNode.insertBefore(searchContainer, banner.nextSibling);
      
      // 为首页搜索框添加事件
      const homeSearchInput = document.querySelector('.home-search-input');
      
      if (homeSearchInput) {
        // 点击搜索框时自动获取焦点
        searchContainer.addEventListener('click', function() {
          homeSearchInput.focus();
        });
        
        // 监听回车事件
        homeSearchInput.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query.length > 0) {
              window.location.href = `/search/?q=${encodeURIComponent(query)}`;
            }
          }
        });
      }
    }
  }
});

// 检查是否在搜索页面
const isSearchPage = window.location.pathname.includes('/search/');

if (isSearchPage) {
  // 获取搜索框和清除按钮
  const searchInput = document.getElementById('search-input');
  const clearButton = document.querySelector('.clear-button');
  
  if (searchInput && clearButton) {
    // 监听输入事件
    searchInput.addEventListener('input', function() {
      if (this.value.trim().length > 0) {
        this.classList.add('has-text');
      } else {
        this.classList.remove('has-text');
      }
    });
    
    // 清除按钮点击事件
    clearButton.addEventListener('click', function() {
      searchInput.value = '';
      searchInput.classList.remove('has-text');
      searchInput.focus();
      
      // 触发input事件以更新搜索结果
      searchInput.dispatchEvent(new Event('input'));
    });
    
    // 初始检查是否有值
    if (searchInput.value.trim().length > 0) {
      searchInput.classList.add('has-text');
    }
  }
} 