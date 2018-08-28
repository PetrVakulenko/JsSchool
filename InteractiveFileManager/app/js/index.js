window.addEventListener('load', () => {
    var folders = document.getElementsByClassName('folder');
    for(var i = 0; i < folders.length; i++) {
        var folder = folders[i];
        folder.onclick = function() {
            var closeparent = this.closest('div.folder-container');
            var parentdepth = closeparent.getAttribute('depth');

            var childs = Array.prototype.slice.call(
                closeparent.getElementsByTagName('div')
            );

            if (closeparent.classList.contains('opened-folder')) {

                closeparent.classList.remove('opened-folder');
                closeparent.classList.add('closed-folder');
                childs.forEach(function(elem) {
                    if (
                        !elem.classList.contains('folder') &&
                        parseInt(elem.getAttribute('depth')) === parseInt(parentdepth)+1
                    ) {
                        elem.style.display = 'none';
                    }
                });
            } else if (closeparent.classList.contains('closed-folder')) {
                closeparent.classList.remove('closed-folder');
                closeparent.classList.add('opened-folder');
                childs.forEach(function(elem) {
                    if (
                        !elem.classList.contains('folder') &&
                        parseInt(elem.getAttribute('depth')) === parseInt(parentdepth)+1
                    ) {
                        elem.style.display = 'block';
                    }
                });
            }
        }
    }
});
