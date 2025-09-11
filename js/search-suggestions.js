// Search suggestions and autocomplete
class SearchSuggestions {
  constructor() {
    this.suggestions = [];
    this.loadSuggestions();
  }

  async loadSuggestions() {
    try {
      const response = await fetch('/search.xml');
      const data = await response.text();
      const searchData = new DOMParser().parseFromString(data, 'text/xml');
      
      const entries = searchData.getElementsByTagName('entry');
      const suggestions = new Set();
      
      for (let entry of entries) {
        const title = entry.getElementsByTagName('title')[0].textContent;
        const content = entry.getElementsByTagName('content')[0].textContent;
        
        // Extract keywords from title
        title.split(/\s+/).forEach(word => {
          if (word.length > 2) {
            suggestions.add(word.toLowerCase());
          }
        });
        
        // Extract categories and tags
        const categories = entry.getElementsByTagName('category');
        const tags = entry.getElementsByTagName('tag');
        
        for (let cat of categories) {
          suggestions.add(cat.textContent.toLowerCase());
        }
        
        for (let tag of tags) {
          suggestions.add(tag.textContent.toLowerCase());
        }
      }
      
      this.suggestions = Array.from(suggestions).sort();
    } catch (error) {
      console.error('Failed to load search suggestions:', error);
    }
  }

  getSuggestions(query) {
    if (!query || query.length < 2) return [];
    
    const queryLower = query.toLowerCase();
    return this.suggestions
      .filter(suggestion => suggestion.includes(queryLower))
      .slice(0, 8); // Limit to 8 suggestions
  }

  createSuggestionsDropdown(inputElement, suggestions) {
    // Remove existing dropdown
    const existingDropdown = document.querySelector('.search-suggestions-dropdown');
    if (existingDropdown) {
      existingDropdown.remove();
    }

    if (suggestions.length === 0) return;

    const dropdown = document.createElement('div');
    dropdown.className = 'search-suggestions-dropdown';
    
    suggestions.forEach(suggestion => {
      const item = document.createElement('div');
      item.className = 'search-suggestion-item';
      item.textContent = suggestion;
      
      item.addEventListener('click', () => {
        inputElement.value = suggestion;
        inputElement.dispatchEvent(new Event('input'));
        dropdown.remove();
      });
      
      dropdown.appendChild(item);
    });
    
    // Position dropdown
    const inputRect = inputElement.getBoundingClientRect();
    dropdown.style.position = 'absolute';
    dropdown.style.top = `${inputRect.bottom + window.scrollY}px`;
    dropdown.style.left = `${inputRect.left + window.scrollX}px`;
    dropdown.style.width = `${inputRect.width}px`;
    
    document.body.appendChild(dropdown);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
      if (!dropdown.contains(e.target) && e.target !== inputElement) {
        dropdown.remove();
        document.removeEventListener('click', closeDropdown);
      }
    });
  }
}

// Initialize search suggestions
document.addEventListener('DOMContentLoaded', function() {
  const searchSuggestions = new SearchSuggestions();
  const searchInput = document.getElementById('search-input');
  
  if (searchInput) {
    let suggestionTimeout;
    
    searchInput.addEventListener('input', function() {
      const query = this.value.trim();
      
      clearTimeout(suggestionTimeout);
      suggestionTimeout = setTimeout(() => {
        const suggestions = searchSuggestions.getSuggestions(query);
        searchSuggestions.createSuggestionsDropdown(this, suggestions);
      }, 200);
    });
  }
});
