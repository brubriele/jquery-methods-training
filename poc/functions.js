 // $(".submit-form").click(function(){
    //     let dataId = $('.teste th').attr("data-id");
    //     alert("The data-id of clicked item is: " + dataId);
    // });
    $( "div" ).data( "test", { first: 16, last: "pizza!" } );
    $( "span:first" ).text( $( "div" ).data( "test" ).first );
    $( "span:last" ).text( $( "div" ).data( "test" ).last );
    function getId() {
        let value = parseInt($('#submit-form').val);
        value = isNaN(value) ? 0 : value;
        value++;
        let id = value;
        appendRow(id)
    }

    function getDataId() {
         $("submit-form").click(function(){
        let dataId = $('.teste th').attr("data-id");
        alert("The data-id of clicked item is: " + dataId);
    });
    }