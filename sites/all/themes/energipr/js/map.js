(function($) {
    $(function(){

        if($("#map-toronto").length > 0)
        {
            createMap(43.643487,-79.393510,'#map-toronto');
        }

        if($("#map-montreal").length > 0)
        {
            createMap(45.500999,-73.557950,"#map-montreal");
        }

        mapSwitch();

        $(window).on('resize',function () {
            
            mapSwitch();

        });

        function mapSwitch()
        {
            if($(window).width() < 767)
            {
                $('#map-toronto').insertAfter('#block-block-7');
                $('#map-montreal').insertAfter('#block-block-8');
            }
            else
            {   
                var $div = $('#map-toronto,#map-montreal');
                console.log($div);
                $('#block-block-9 .content').append($div);
            }
        }
    });

    function createMap(lat,lon,div)
    {
        var location = new google.maps.LatLng(lat,lon);
        var mapOptions = {
            zoom: 16,
            center: location,
            draggable: false,   
            scrollwheel: false,
        }

        var styles = [
                          {
                            stylers:  [
                                    {
                                        saturation: -50

                                    },
                                    {
                                        gamma: 2
                                    }
                                ]
                          },
                          {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                              { lightness: 16 },
                              {color:"#cccccc"},
                              { visibility: "simplified" }
                            ]
                          },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "lightness": 20, 
                                         color:"#000000"
                                    }
                                ]
                            },
                          
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f3dbc8"
                                    },
                                    {
                                        "lightness": 0
                                    }
                                ]
                            }
                         
                    ];

          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(location);
        });
        var image = '/sites/all/themes/energipr/images/map-marker.png';
    
        var map = new google.maps.Map($(div).get(0),
                        mapOptions);

        var marker = new google.maps.Marker({
            position: location, 
            map: map,
            icon: image,
            title: "energiPR"
        });

       marker.setMap(map,marker);
       map.setOptions({styles: styles});
    }
}(jQuery));
