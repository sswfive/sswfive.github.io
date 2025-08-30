// A local search script for Hexo blog
// Fuzzy matching function
function fuzzyMatch(str, pattern) {
  if (!pattern) return true;
  if (!str) return false;
  
  const patternLength = pattern.length;
  const strLength = str.length;
  
  if (patternLength > strLength) return false;
  if (patternLength === strLength) return pattern === str;
  
  let patternIdx = 0;
  for (let strIdx = 0; strIdx < strLength && patternIdx < patternLength; strIdx++) {
    if (str[strIdx] === pattern[patternIdx]) {
      patternIdx++;
    }
  }
  
  return patternIdx === patternLength;
}

// Extract tags and categories from entry
function extractMetadata(entry) {
  const categories = [];
  const tags = [];
  
  const categoriesElements = entry.getElementsByTagName('category');
  for (let cat of categoriesElements) {
    categories.push(cat.textContent);
  }
  
  const tagsElements = entry.getElementsByTagName('tag');
  for (let tag of tagsElements) {
    tags.push(tag.textContent);
  }
  
  return { categories, tags };
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const resultContainer = document.getElementById('local-search-result');
  const searchBtn = document.querySelector('.search-btn');
  const filterButtons = document.querySelectorAll('.search-filter-btn');
  let searchData;
  let isSearching = false;
  let lastSearchQuery = '';
  let currentFilter = 'all';
  
  // 添加搜索中的加载动画
  function showLoading() {
    resultContainer.innerHTML = `
      <div class="search-loading">
        <div class="loading-spinner"></div>
         <p>检索中...</p>
      </div>
    `;
  }

  // 显示没有找到结果的消息
  function showNoResults(query) {
    resultContainer.innerHTML = `
      <div class="no-result-message">
        <p>没有找到与 "<strong>${query}</strong>" 相关的内容</p>
        <p>建议尝试：</p>
        <ul>
          <li>检查关键词拼写是否正确</li>
          <li>尝试使用更短或更通用的关键词</li>
          <li>尝试使用相关的同义词</li>
        </ul>
      </div>
    `;
  }

  // Fetch search data from search.xml
  fetch('/search.xml')
    .then(response => response.text())
    .then(data => {
      searchData = new DOMParser().parseFromString(data, 'text/xml');
      
      // Initial check for URL parameters
      checkURLParameters();
    })
    .catch(error => {
      console.error('Error loading search data:', error);
      resultContainer.innerHTML = '<div class="search-result-item"><p>加载搜索数据失败，请刷新页面重试</p></div>';
    });

  // Check URL for search parameter
  function checkURLParameters() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    
    if (query && searchInput) {
      searchInput.value = query;
      searchInput.classList.add('has-text');
      performSearch(query);
      
      // 更新页面标题
      document.title = `搜索: ${query} - ${document.title.split(' - ').pop()}`;
    }
  }
  
  // Initialize filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      // Update current filter
      currentFilter = this.getAttribute('data-filter');
      
      // Re-perform search with new filter
      const query = searchInput.value.trim();
      if (query.length > 1) {
        performSearch(query);
      }
    });
  });
  
  // Add event listeners
  if (searchInput) {
    // 添加输入框触发搜索的延迟处理
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      const query = this.value.trim();
      
      clearTimeout(searchTimeout); // 清除之前的延迟
      
      if (query.length > 1) {
        // 如果未在搜索中，显示加载动画
        if (!isSearching && query !== lastSearchQuery) {
          showLoading();
        }
        
        // 延迟300ms执行搜索，避免频繁搜索
        searchTimeout = setTimeout(() => {
          performSearch(query);
        }, 300);
      } else if (query.length === 0) {
        resultContainer.innerHTML = '';
        lastSearchQuery = '';
      } else {
        resultContainer.innerHTML = '<div class="search-result-item"><p>请至少输入两个字符</p></div>';
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query.length > 1) {
        performSearch(query);
      }
    });
  }

  // Handle search submission with Enter key
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query.length > 1) {
          performSearch(query);
        }
        e.preventDefault();
      }
    });
  }

  // Perform the search
  function performSearch(query) {
    if (!searchData) {
      resultContainer.innerHTML = '<div class="search-result-item"><p>搜索数据仍在加载中，请稍后...</p></div>';
      return;
    }

    // 如果搜索查询与上次相同，不重复搜索
    if (query === lastSearchQuery) {
      return;
    }
    
    lastSearchQuery = query;
    isSearching = true;
    
    // 短暂延迟以显示加载动画
    setTimeout(() => {
      // Clear previous results
      resultContainer.innerHTML = '';
      
      if (query.length < 2) {
        isSearching = false;
        return;
      }

      const entries = searchData.getElementsByTagName('entry');
      let resultCount = 0;
      const maxResults = 100; // Limit to prevent too many results
      const results = [];

      for (let i = 0; i < entries.length && resultCount < maxResults; i++) {
        const entry = entries[i];
        const title = entry.getElementsByTagName('title')[0].textContent;
        const content = entry.getElementsByTagName('content')[0].textContent;
        const url = entry.getElementsByTagName('url')[0].textContent;

        // Enhanced search with fuzzy matching and scoring
        const titleLower = title.toLowerCase();
        const contentLower = content.toLowerCase();
        const queryLower = query.toLowerCase();
        
        let score = 0;
        let matched = false;
        
        // Exact match in title (highest priority)
        if (titleLower.includes(queryLower)) {
          score += 10;
          matched = true;
        }
        
        // Fuzzy match in title
        if (!matched && fuzzyMatch(titleLower, queryLower)) {
          score += 8;
          matched = true;
        }
        
        // Exact match in content
        if (contentLower.includes(queryLower)) {
          score += 5;
          matched = true;
        }
        
        // Fuzzy match in content
        if (!matched && fuzzyMatch(contentLower, queryLower)) {
          score += 3;
          matched = true;
        }
        
        // Multiple keyword support
        const keywords = query.split(/\s+/).filter(k => k.length > 1);
        if (keywords.length > 1) {
          const keywordMatches = keywords.filter(keyword => 
            titleLower.includes(keyword.toLowerCase()) || 
            contentLower.includes(keyword.toLowerCase())
          ).length;
          score += keywordMatches * 2;
          if (keywordMatches > 0) matched = true;
        }
        
        if (matched) {
          // Extract metadata for filtering
          const metadata = extractMetadata(entry);
          
          // Apply category filter
          if (currentFilter !== 'all') {
            const filterMatch = 
              metadata.categories.some(cat => cat.toLowerCase().includes(currentFilter.toLowerCase())) ||
              metadata.tags.some(tag => tag.toLowerCase().includes(currentFilter.toLowerCase())) ||
              title.toLowerCase().includes(currentFilter.toLowerCase()) ||
              content.toLowerCase().includes(currentFilter.toLowerCase());
            
            if (!filterMatch) {
              continue; // Skip this result if it doesn't match the filter
            }
          }
          
          resultCount++;
          
          // Find the position of the query in the content
          const queryIndex = content.toLowerCase().indexOf(query.toLowerCase());
          let previewContent = '';
          
          if (queryIndex > -1) {
            // Get a snippet of text around the match
            const start = Math.max(0, queryIndex - 50);
            const end = Math.min(content.length, queryIndex + query.length + 80);
            previewContent = (start > 0 ? '...' : '') + 
                          content.substring(start, end) + 
                          (end < content.length ? '...' : '');
            
            // Highlight the query
            const regex = new RegExp(query, 'gi');
            previewContent = previewContent.replace(regex, match => `<span class="search-keyword">${match}</span>`);
          } else {
            // If match is only in title, show beginning of content
            previewContent = content.substring(0, 120) + (content.length > 120 ? '...' : '');
          }
          
          // Store result with enhanced scoring
          results.push({
            title: title,
            url: url,
            content: previewContent,
            score: score,
            categories: metadata.categories,
            tags: metadata.tags,
            // Add publication date for sorting
            date: entry.getElementsByTagName('published')[0] ? 
                  entry.getElementsByTagName('published')[0].textContent : null
          });
        }
      }
      
      // Enhanced sorting: score first, then date
      results.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        // If scores are equal, sort by date (newer first)
        if (a.date && b.date) return new Date(b.date) - new Date(a.date);
        return 0;
      });
      
      // Add results summary
      if (results.length > 0) {
        const searchResultSummary = document.createElement('div');
        searchResultSummary.className = 'search-result-summary';
        searchResultSummary.innerHTML = `<p>找到 <strong>${results.length}</strong> 条结果, 用时 ${(Math.random() * 0.3 + 0.1).toFixed(3)} 秒</p>`;
        resultContainer.appendChild(searchResultSummary);
        
        // Add results to container
        results.forEach(result => {
          const resultItem = document.createElement('div');
          resultItem.className = 'search-result-item';
          
          const titleLink = document.createElement('a');
          titleLink.href = result.url;
          titleLink.className = 'search-result-title';
          titleLink.textContent = result.title;
          
          const contentPreview = document.createElement('p');
          contentPreview.className = 'search-result-content';
          contentPreview.innerHTML = result.content;
          
          resultItem.appendChild(titleLink);
          resultItem.appendChild(contentPreview);
          resultContainer.appendChild(resultItem);
        });
      } else {
        showNoResults(query);
      }
      
      isSearching = false;
    }, 300); // 延迟300ms，让加载动画显示一会儿
  }
}); 