// All rights reserved (c) Jok.ge
// Idea by: Levan Ilashvili

try {
    if (window.location.host == 'www.facebook.com') {
        var url = window.location.host;
        var request = {
          url: url   
        };

        var container = document.getElementById('pagelet_ego_pane_w').children[0].children[0];
        var lastChild = container.lastChild
        var node = document.createElement('div');
        node.innerText = 'Hello FB :))';

        container.insertBefore(node, lastChild);
        //chrome.extension.sendRequest(request, function(response) {});
    }
}
catch (err) {
    // TODO: logging remote server
}
