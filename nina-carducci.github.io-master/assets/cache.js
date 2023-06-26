document.addEventListener('DOMContentLoaded', function() {
    if ('caches' in window) {
        caches.open('nina-caches').then(function(cache) {
            let link = document.getElementsByTagName('link');
            let script = document.getElementsByTagName('script');
            let img = document.getElementsByTagName('img');
            let extensions = ['.css', '.js', '.webp'];
            let filesToCache = [];

            extensions.forEach(function(extention) {
                if (extension === '.css') {
                    elements = link;
                }else if (extension === '.js') {
                    elements = script;
                }else if (extension === '.webp') {
                    elements = img;
                }

                if (elements) {
                    Array.from(elements).forEach(function(element) {
                        let src = element.getAttribute('src') || element.getAttribute('href');

                        if (src && src.endsWith(extension)) {
                            filesToCache.push(src);
                        };
                    });
                }
            });
            cache.addAll(filesToCache);
        });
    }
});