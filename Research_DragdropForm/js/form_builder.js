$(document).ready(function () {
    // $("#timetable .items").sortable({
    //     connectWith: "ul"   
    // });

    // $("ul[id^='available'] li").draggable({
    //     helper: function () {
    //         return getTextFieldHTML();
    //     },
    //     connectToSortable: ".items"
    // });

    // $( "#timetable .items" ).disableSelection();


    $(".form-builder").sortable({
        connectWith: ".form-builder"  ,
        placeholder: "placeholder-highlight" ,
        start: function (event, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        },
        stop: function (event, ui) {
            addtoJson();
        }
    });

    $(".components-nav .component-text").draggable({
        helper: function () {
            return getTextFieldHTML();
        },
        connectToSortable: ".form-builder",
        stop: function(event, ui) {
            var pos = ui.helper.position(); // just get pos.top and pos.left
        }
    });

    $(".components-nav .component-textarea").draggable({
        helper: function () {
            return getTextAreaFieldHTML();
        },
        connectToSortable: ".form-builder"
    });

    $( ".form-builder" ).disableSelection();

    function getTextFieldHTML() {
        var field = generateField();
        var html = `<div>
                        <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <input type="text" name="label_52879" class="form-control form_input_label" value="Label" data-field="` + field + `">
                        </div>
                    </div>`;
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }

    function getTextAreaFieldHTML() {
        var field = generateField();
        var html = `<div>
                        <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <textarea class="form-control" rows="5" id="comment"></textarea>
                        </div>
                    </div>`;
        return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    }

    function generateField() {
        return Math.floor(Math.random() * (100000 - 1 + 1) + 57);
    }

    $(document).on('click', '.remove_bal_field', function (e) {
        e.preventDefault();
        var field = $(this).attr('data-field');
        console.log(field);
        $(this).closest('.li_' + field).hide('400', function () {
            $(this).remove();

        });
    });

    function addtoJson(){
        // var images = ["A", "B", "C"]
        // console.log(images);
        // src = [];
        // data = {}
        // for (var i = 0; i < images.length; i++) {
        //     data = {
        //         src: images[i] 
        //     };
        //     // Here data is an object with 1 key only.

        //     src.push(data);
        // }
        //     // Here - after the loop - the src variable will contain all of the values that you want.
        //     console.log(src.data[1]);

        var map = { };

        $('.test').children().each(function(_, node) {
           
            //map[ _ ] = { };
            map[ _ ][ node.nodeName ] = node.textContent;
            console.log(node.nodeName);
        });

        console.log(map);
        
    }


});

// [
//     {
//       "type": "text",
//       "required": false,
//       "label": "Text Field",
//       "className": "form-control",
//       "name": "text-1581059093271",
//       "access": false,
//       "subtype": "text"
//     }
//   ]