$(document).ready(function () {
    resizeSlide();
})
$(window).resize(function(){
    resizeSlide();
});
function resizeSlide()
{
    $('.slick-slide').each(function(){
        var width = $(this).width();
        var height = width * 0.75; // 4:3
        $(this).height(width * 0.75);
        $(this).find('div.cld-video-player').height(height);
        $(this).find('.vjs-big-play-button').css("zoom", height/300.0);
    })
}
$(document).ready(function(){
    $('code').each(function() {
        var text = $(this).html();
        console.log(text);
        text = text.replace(' data-v-e3565ce0=""', '').trim();
        $(this).text(text);
        // console.log($(this).html());
        // $(this).text($(this).html().trim());
        // var that = $(this);
        // // cache the content of 'code'
        // var html = that.text().trim();
        // console.log(html);
        // that.empty();
        // // escape the content
        // that.text(html);
    });
})

//   hljs.initHighlightingOnLoad();