$(function(){
    // NAV
    $('nav').mouseenter(function(){
        $('.sub').stop(true).slideDown(100)
    }).mouseleave(function(){
        $('.sub').stop(true).slideUp(100)
    })

    // SLIDES
    setInterval(function(){
        $('.slides').animate({'margin-left':'-100%'}, function(){
            $('.slide:first').appendTo('.slides')
            $('.slides').css({'margin-left':'0%'})
        })
    }, 3000)

    // TABS
    $('.gallery>a>h3').click(function(){
        $(this).addClass('active')
        $('.notice>a>h3').removeClass('active')
        $('.notice>ul').stop(true).fadeOut(100)
        $('.gallery>ul').stop(true).fadeIn(100)        
    })
    $('.notice>a>h3').click(function(){
        $(this).addClass('active')
        $('.gallery>a>h3').removeClass('active')
        $('.gallery>ul').stop(true).fadeOut(100)
        $('.notice>ul').stop(true).fadeIn(100)        
    })

    // POPUP
    $('.notice>ul>li:first').click(function(){
        $('.popup').stop(true).fadeIn(100)
    })
    $('.btn').click(function(){
        $('.popup').stop(true).fadeOut(100)
    })
})