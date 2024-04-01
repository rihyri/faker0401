$(function () {
    $(".year a").click(function (e) {
        e.preventDefault();
        $(".year a").removeClass("active");
        $(this).addClass("active");

        const idx = $(this).index();

        $(".s3 .history > div").hide();
        $(".s3 .history > div").eq(idx).fadeIn();
    });

    let scroll = document.querySelectorAll(".scroll-element");

    let elementView = (e, div = 1) => {
        let elementTop = e.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight / div)
        );
    }

    let elementOutView = (e) => {
        let elementTop = e.getBoundingClientRect().top;
        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight / div));
    }

    let displayScroll = (e) => {
        e.classList.add("scrolled");
    }

    let hideScroll = (e) => {
        e.classList.remove("scrolled");
    }

    let scrollAni = () => {
        scroll.forEach(e => {
            if (elementView(e, 1.25)) {
                displayScroll(e);
            } else if (elementOutView(e)) {
                hideScroll(e);
            }
        });
    }
    window.addEventListener("scroll", function () {
        scrollAni();
    });

    $('header nav ul li a').on('click', function(e) {
        e.preventDefault();
        var targetSection = $(this).attr('href');
        var headerHeight = 100; // 헤더의 높이를 여기에 지정하세요.
        
        // 헤더의 높이를 고려하여 스크롤 위치 조정
        var scrollToPosition = $(targetSection).offset().top - headerHeight;
    
        $('html, body').animate({
            scrollTop: scrollToPosition
        }, 1000);
    });
});


