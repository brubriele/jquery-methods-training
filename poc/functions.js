 // $(".submit-form").click(function(){
    //     let dataId = $('.teste th').attr("data-id");
    //     alert("The data-id of clicked item is: " + dataId);
    // });

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

    function replaceRow() {
        $(".fa-sort-up").click(function () {
            var $row = $(this).closest("tr"),        // Finds the closest row <tr> 
                $tds = $row.find("td:nth-child(1)"); // Finds the 2nd <td> element
    
            $.each($tds, function () {   
                var $row =  $(this).parents('table:first');
                if ($row.index() === 1) return; // Don't go above the header
            $row.prev().before($row.get(0))            // Visits every single <td> element
                console.log($(this).text());         // Prints out the text within the <td>
            });
        });
    }
    
    function replaceRowDown() {
        $('.table-down').click(function () {
            var $row = $(this).parents('table:first');
            $row.next().after($row.get(0));
        });
    }




    function replaceRow() {
        $(".fa-sort-up").click(function () {
            alert('oi')
            var $row = $(this).parents('td');
            
            if ($row.index() === 1) return; // Don't go above the header
            $row.prev().before($row.get(0))
        });
    }
    
    function replaceRowDown() {
        $('.table-down').click(function () {
            var $row = $(this).parents('td');
            $row.next().after($row.get(0));
        });
    }
    