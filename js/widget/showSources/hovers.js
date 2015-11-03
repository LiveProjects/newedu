avalon.ready(function(){
    (function() {

        function init() {
            var speed = 250,
                easing = mina.easeinout;

            [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
                var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                    pathConfig = {
                        from : path.attr( 'd' ),
                        to : el.getAttribute( 'data-path-to' )
                    };

                el.addEventListener( 'mouseenter', function() {
                    path.animate( { 'path' : pathConfig.to }, speed, easing );
                } );

                el.addEventListener( 'mouseleave', function() {
                    path.animate( { 'path' : pathConfig.from }, speed, easing );
                } );
            } );
        };

        function init() {
            var speed = 250,
                easing = 'swing';

            [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
                var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                    pathConfig = {
                        from : path.attr( 'd' ),
                        to : el.getAttribute( 'data-path-hover' )
                    };

                el.addEventListener( 'mouseenter', function() {
                    path.animate( { 'path' : pathConfig.to }, speed, easing );
                } );

                el.addEventListener( 'mouseleave', function() {
                    path.animate( { 'path' : pathConfig.from }, speed, easing );
                } );
            } );
        };


        init();

    })();
});