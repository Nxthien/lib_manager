!function(t){t.fn.basictable=function(a){var e=function(a,e){var i=[];e.tableWrap&&a.wrap('<div class="bt-wrapper"></div>');var r="";r=a.find("thead tr th").length?"thead th":a.find("tbody tr th").length?"tbody tr th":a.find("th").length?"tr:first th":"tr:first td",t.each(a.find(r),function(){var a=t(this),e=parseInt(a.attr("colspan"),10)||1,n=a.closest("tr").index();i[n]||(i[n]=[]);for(var r=0;r<e;r++)i[n].push(a)}),t.each(a.find("tbody tr"),function(){n(t(this),i,e)}),t.each(a.find("tfoot tr"),function(){n(t(this),i,e)})},n=function(a,e,n){a.children().each(function(){var a=t(this);if(""!==a.html()&&"&nbsp;"!==a.html()||n.showEmptyCells){for(var i=a.index(),r="",o=0;o<e.length;o++){0!=o&&(r+=": ");r+=e[o][i].text()}a.attr("data-th",r),n.contentWrap&&!a.children().hasClass("bt-content")&&a.wrapInner('<span class="bt-content" />')}else a.addClass("bt-hide")})},i=function(a){t.each(a.find("td"),function(){var a=t(this),e=a.children(".bt-content").html();a.html(e)})},r=function(a,e){e.forceResponsive?null!==e.breakpoint&&t(window).width()<=e.breakpoint||null!==e.containerBreakpoint&&a.parent().width()<=e.containerBreakpoint?o(a,e):s(a,e):a.removeClass("bt").outerWidth()>a.parent().width()?o(a,e):s(a,e)},o=function(t,a){t.addClass("bt"),a.tableWrap&&t.parent(".bt-wrapper").addClass("active")},s=function(t,a){t.removeClass("bt"),a.tableWrap&&t.parent(".bt-wrapper").removeClass("active")},l=function(t,a){t.find("td").removeAttr("data-th"),a.tableWrap&&t.unwrap(),a.contentWrap&&i(t),t.removeData("basictable")},c=function(t){t.data("basictable")&&r(t,t.data("basictable"))};this.each(function(){var n=t(this);if(0===n.length||n.data("basictable"))return n.data("basictable")&&("destroy"==a?l(n,n.data("basictable")):"start"===a?o(n,n.data("basictable")):"stop"===a?s(n,n.data("basictable")):r(n,n.data("basictable"))),!1;var i=t.extend({},t.fn.basictable.defaults,a),b={breakpoint:i.breakpoint,containerBreakpoint:i.containerBreakpoint,contentWrap:i.contentWrap,forceResponsive:i.forceResponsive,noResize:i.noResize,tableWrap:i.tableWrap,showEmptyCells:i.showEmptyCells};null===b.breakpoint&&null===b.containerBreakpoint&&(b.breakpoint=568),n.data("basictable",b),e(n,n.data("basictable")),b.noResize||(r(n,n.data("basictable")),t(window).bind("resize.basictable",function(){c(n)}))})},t.fn.basictable.defaults={breakpoint:null,containerBreakpoint:null,contentWrap:!0,forceResponsive:!0,noResize:!1,tableWrap:!1,showEmptyCells:!1}}(jQuery);