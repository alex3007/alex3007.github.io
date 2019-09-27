$('document').ready(function () {

    var el = $('.blur');


    setTimeout(function funcUp1() {
        el.css({
            'filter': "progid: DXImageTransform.Microsoft.Blur(PixelRadius = '2')",
            'filter': 'blur(2px)',
            '- webkit - filter': 'blur(2 px)'
        });

        
    }, 60);


    setTimeout(function funcUp1() {
        el.css({
            'filter': "progid: DXImageTransform.Microsoft.Blur(PixelRadius = '1.5')",
            'filter': 'blur(1.5px)',
            '- webkit - filter': 'blur(1.5 px)'
        });

        
    }, 60);


    setTimeout(function funcUp1() {
        el.css({
            'filter': "progid: DXImageTransform.Microsoft.Blur(PixelRadius = '1')",
            'filter': 'blur(1px)',
            '- webkit - filter': 'blur(1 px)'
        });
        
    }, 60);




    setTimeout(function funcUp1() {
        el.css({
            'filter': "progid: DXImageTransform.Microsoft.Blur(PixelRadius = '0.5')",
            'filter': 'blur(0.5px)',
            '- webkit - filter': 'blur(0.5 px)'
        });

       
    }, 60);


    setTimeout(function funcUp1() {
        el.css({
            'filter': "progid: DXImageTransform.Microsoft.Blur(PixelRadius = '0')",
            'filter': 'blur(0px)',
            '- webkit - filter': 'blur(0 px)'
        });

        
    }, 60);


})
