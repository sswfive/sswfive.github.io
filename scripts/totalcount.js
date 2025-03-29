'use strict';

hexo.extend.helper.register('totalcount', function(site) {
  var count = 0;
  site.posts.forEach(function(post) {
    var wordCount = post.content ? post.content.length : 0;
    count += wordCount;
  });
  return count;
}); 