
// 2018/04/12
// Dynamic List showing.
// Filtering by type.

var type = $('#ID of <div> option:selected').val();

var data = {
        'size': 30,
        'type': type
    };

$.ajax({
    type: 'GET',
    url: 'api url',
    data: data,
    success: function(data){

        var dataList = "";
        var showingList = "";

        if(length of data list > 0){
            for(var i = 0; i < length of data list; i++){
                 dataList = ' <div> ' +
                           // Dynamic List HTML CODE ...생략
                            switch(data[i].type) {
                                 case 'type ex) type1, type2 ... and so on':
                                    data[i].type = "type 1";
                                    break;
                                 // case문 ...생략
                                 case 'type ex) type1, type2 ... and so on':
                                    dataItem[i].type = "type n";
                                    break;
                            }

                            data[i].content
                           // Dynamic List HTML CODE ...생략
                           ' </div>';
               }
               showingList += dataList;
           }
           $("#ID of <div>").html(showingList);
        } else{
           // HTML code when there is no data List
        }

    }, error: function(err){
        alert('Please try again in a few minutes');
    }
});
