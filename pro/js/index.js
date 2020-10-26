$(function() {
    $('.ah-tab-wrapper').horizontalmenu({
        itemClick: function(item) {
            $('.ah-tab-content-wrapper .ah-tab-content').removeAttr('data-ah-tab-active');
            $('.ah-tab-content-wrapper .ah-tab-content:eq(' + $(item).index() + ')').attr('data-ah-tab-active', 'true');
            return false;
        }
    });

});