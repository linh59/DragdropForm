$(document).ready(function () {

    $('th').click(function(){
        var col = $(this).prevAll().length;
        console.log(col);
        var headerObj = $(this).parents('table').find('td').eq(col);
        // A quick test!
        console.log("My cell td is called: " + headerObj.text());
        });

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

    var components = [
        {
            type: 'text',
            template: '<div>'
                        +'<div class="form-group">'
                        + '<label for="comment">Comment:</label>'
                        +    '<input type="text" name="label_52879" class="form-control form_input_label" value="Label" >'
                        + '</div>'
                        +'</div>',
        },
        {
            type: 'textarea',
            template: '<div>'
            +'<div class="form-group">'
            +'<label for="comment">Comment:</label>'
            +' <textarea class="form-control" rows="5" id="comment"></textarea>            '
            + '</div>'
            +'</div>',
        }
    ]



    

    $(".components-nav .component").draggable({
        helper: function () {
            var field = generateField();
            var html = `<button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>`;
            return $('<div>').addClass('li_' + field + ' form_builder_field').html(html);
    
        },
        
        connectToSortable: ".form-builder",
       
        start: function (event, ui) {
            
            $.each(components, function(i, e) {
                var typeComponent = "component-"+ e.type;
                if(typeComponent === event.target.id){
                    return ui.helper.append(e.template);
                }
              });
              

        

        },
        stop: function(event, ui) {
            console.log(ui.helper.parent());
            var col = ui.helper.parent().prevAll().length;
              
              var headerObj = ui.helper.parent().parents('table').find('td').eq(col);
              return headerObj.append("<div>Hello</div>");
              // A quick test!
              console.log("My cell td is called: " + headerObj.text());
            //var pos = ui.helper.position(); // just get pos.top and pos.left
        }
    });



    $( ".form-builder" ).disableSelection();


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