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
        node.innerHTML = '<iframe src="https://jok.ge/Ads/FacebookFrame" style="border: 0px; width: 244px; overflow: hidden; border-bottom: 1px solid #e9e9e9; border-top: 1px solid #e9e9e9;"></iframe>';

        container.insertBefore(node, lastChild);
    }

    if (window.location.host == 'www.odnoklassniki.ru') {
        document.getElementById('fthColWrp').innerHTML = '<iframe src="https://jok.ge/Ads/OdnoklasnikiFrame" style="border: 0px; width: 240px; overflow: hidden; border-bottom: 1px solid #e9e9e9; border-top: 1px solid #e9e9e9;"></iframe>' + document.getElementById('fthColWrp').innerHTML;
    }
}
catch (err) {
    // TODO: logging remote server
}
