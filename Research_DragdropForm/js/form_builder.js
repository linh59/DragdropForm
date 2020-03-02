$(document).ready(function () {


    sortableRow();
    
    $(document).on('click', '.remove_bal_field', function (e) {
        e.preventDefault();
        var field = $(this).attr('data-field');
        $(this).closest('.li_' + field).hide('400', function () {
            $(this).remove();

        });
    });

    $(document).on('click', '.edit_bal_field', function (e) {
        e.preventDefault();
        var field = $(this).attr('data-field');
        $(this).closest('.li_' + field).find(".holder").toggle('400');
        $(this).closest('.li_' + field).find(".prev-holder").toggle('400');
    });

    $(document).on('click', '.add_col_table', function (e) {
        e.preventDefault();    
        var field = $(this).attr('data-field');
        var html_col = `<th class="form-builder">                                        
                            <button type="button" class="btn btn-primary btn-sm remove_col_table pull-right" data-field="` + field + `">X</button>                                       </th>
                </th>`;
       
        $(this).closest('.li_' + field).find("table thead tr th:last-child").after(html_col);
    });

    $(document).on('click', '.remove_col_table', function (e) {
        e.preventDefault();
        $(this).parent().hide('400', function () {
            $(this).remove();

        });
    });

});

function sortableRow() {
    $(".layout-builder").sortable({
        connectWith: ".layout-builder"  ,
        placeholder: "placeholder-highlight" ,
        
        cursor: 'move',
        opacity: 0.9,
        revert: 150,
        start: function (event, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        },
        stop: function (event, ui) {
        
        }
    });

    $(".components-nav .component-col-1").draggable({
        helper: function () {
            return getRow_1_dHTML();
        },
        connectToSortable: ".layout-builder",
        start: function (event, ui) {
           
        },
        stop: function(event, ui) {
            sortableForm();
        }
    });

    $(".components-nav .component-col-2").draggable({
        helper: function () {
            return getRow_2_dHTML();
        },
        connectToSortable: ".layout-builder",
        start: function (event, ui) {
           
        },
        stop: function(event, ui) {
            sortableForm();
        }
    });

    $(".components-nav .component-col-3").draggable({
        helper: function () {
            return getRow_3_dHTML();
        },
        connectToSortable: ".layout-builder",
        start: function (event, ui) {
           
        },
        stop: function(event, ui) {
            sortableForm();
        }
    });

    $(".components-nav .component-table").draggable({
        helper: function () {
            return getTabledHTML();
        },
        revert: true,
        connectToSortable: ".layout-builder",
        start: function (event, ui) {
           
        },
        stop: function(event, ui) {
            sortableForm();
        } 
    });
   
    $( ".layout-builder" ).disableSelection();
}

function sortableForm(){
    var components = [
        {
            type: 'text',
            template: 
				  '<div class="holder">'
                + '    <div class="form-group">'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '    </div>'
                + '</div>'
                + '<div class="prev-holder">'
                + '    <div class="form-group" type="text" >'
                + '          <i>Text</i>'
                + '          <input type="text" placeholder="Enter text" bind="title" >'
                + '          <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '      </div>'
                + '</div>',
        },
        {
            type: 'input',
            template: 				  
                '<div class="holder">'
                + '    <div class="form-group" >'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '        <input type="text">'
                + '    </div>'
                + '</div>'
                + '<div class="prev-holder">'                  
                + '    <div class="form-group" type="input" >'
                + '          <i>input</i>'
                + '          <input type="text" placeholder="Enter text" bind="title">'
                + '          <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '      </div>'
                + '</div>',
        },
        {
            type: 'textarea',
            template: 				  
                '<div class="holder">'
                + '    <div class="form-group">'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '        <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '    </div>'
                + '</div>'
                + '<div class="prev-holder">'                  
                + '    <div class="form-group" type="textarea" >'
                + '          <i>textarea</i>'
                + '          <input type="text" placeholder="Enter text" bind="title">'
                + '          <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '      </div>'
                + '</div>',
        },
        {
            type: 'datepicker',
            template: 				  
                '<div class="holder">'
                + '    <div class="form-group">'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '        <div class="date datepicker-group position-relative">'
                + '            <input class="form-control salary-date w-100" type="text" name="date" placeholder="dd/mm/yy" id="birthday" required>'
                + '            <span class="icon-calendar input-group-addon"></span>'
                + '        </div>  '
                + '    </div>'
                + '</div>'
                + '<div class="prev-holder">'                  
                + '    <div class="form-group" type="datepicker" >'
                + '          <i>datepicker</i>'
                + '          <input type="text" placeholder="Enter text" bind="title">'
                + '          <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '      </div>'
                + '</div>',
        },
        {
            type: 'table',
            template: 				  
                '<div class="holder">'
                + '    <div class="form-group">'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '          <div class="table-responsive table_` + field + `" >'
                + '                <table class="table">'
                + '                    <thead>'
                + '                        <tr>'
                + '                            <th class="form-builder">'
                + '                            </th>'
                + '                            <th class="form-builder">'
                + '                            </th>'
                + '                        </tr>'
                + '                    </thead>'
                + '                </table>'
                + '            </div>'
                + '    </div>'
                + '</div>'
                + '<div class="prev-holder">'                  
                + '    <div class="form-group" type="datepicker" >'
                + '          <div class="table-responsive table_` + field + `" >'
                + '                <table class="table">'
                + '                    <thead>'
                + '                        <tr>'
                + '                            <th class="form-builder">'
                + '                                <button type="button" class="remove_col_table" data-field="` + field + `">X</button>'                                
                + '                            </th>'
                + '                            <th class="form-builder">'
                + '                                <button type="button" class=" remove_col_table " data-field="` + field + `">X</button>'                                       
                + '                            </th>'
                + '                        </tr>'
                + '                    </thead>'
                + '                </table>'
                + '            </div>'
                + '      </div>'
                + '</div>',
        }
    ]

  
    console.log(components);

    $(".form-builder").sortable({
        connectWith: ".form-builder"  ,
        placeholder: "placeholder-highlight" ,
        items: "div:not(.holder-line)",
        cursor: 'move',
        opacity: 0.9,
        revert: 150,
        // beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
        // start: (evt, ui) => h.startMoving.call(h, evt, ui),
        // stop: (evt, ui) => h.stopMoving.call(h, evt, ui),
        //  cancel: ['input', 'select', 'textarea', '.disabled-field', '.form-elements', '.btn', 'button', '.is-locked'].join(
        // ', ',
        // ),
        start: function (event, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
             //$(ui.helper).addClass("ui-draggable-helper");
        },
        stop: function (event, ui) {
        
        }
    });

    $(".components-nav .component").draggable({
        helper: function () {
            var field = generateField();
            var html = `<div class="btns-section">
                            <button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                            <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                        </div>`;
            return $('<div data-field="' + field + '">').addClass('li_' + field + ' form_builder_field').html(html);
    
        },       
        connectToSortable: ".form-builder",       
        start: function (event, ui) {          
            $.each(components, function(i, e) {
                var typeComponent = "component-"+ e.type;
                
                if(typeComponent === event.target.id){                    
                    var html = ui.helper.append(e.template);
                    
                    var bindTitle = 'title-' + $(html).attr("data-field");
                    var bindDesc = 'desc-' + $(html).attr("data-field");

                    $(html).find(".form-group > [bind=title]").each(function(i,e){
                        $(this).attr("bind",bindTitle);
                    });
                    $(html).find(".form-group > [bind=desc]").each(function(i,e){
                        $(this).attr("bind",bindDesc);
                    });
                }
            });             
        },
        stop: function(event, ui) {
            var pos = ui.helper.position(); 
             twoWayBinding();

             $.each(components, function(i, e) {
                var typeComponent = "component-"+ e.type;
                
                if(typeComponent === ''){                    
                    modifyDatapicker();
                }
            });  
             
            // console.log(ui.helper.parent());
            // var col = ui.helper.parent().prevAll().length;
              
            //   var headerObj = ui.helper.parent().parents('table').find('td').eq(col);
            //   return headerObj.append("<div>Hello</div>");
              // A quick test!
            //   console.log("My cell td is called: " + headerObj.text());
            //var pos = ui.helper.position(); // just get pos.top and pos.left
        }
    });


    $( ".form-builder" ).disableSelection();


    // $(".components-nav .component-text").draggable({
    //     helper: function () {
    //         return getTextFieldHTML();
    //     },
    //     connectToSortable: ".form-builder",
    //     start: function (event, ui) {
           
    //     },
    //     stop: function(event, ui) {
    //         var pos = ui.helper.position(); 
    //         twoWayBinding();
    //     }
    // });

    // $(".components-nav .component-input").draggable({
    //     helper: function () {
    //         return getInputFieldHTML();
    //     },
    //     connectToSortable: ".form-builder",
    //     stop: function(event, ui) {
    //         var pos = ui.helper.position(); 
    //         twoWayBinding();
    //     }
    // });

    // $(".components-nav .component-textarea").draggable({
    //     helper: function () {
    //         return getTextAreaFieldHTML();
    //     },
    //     connectToSortable: ".form-builder",
    //     stop: function(event, ui) {
    //         var pos = ui.helper.position(); 
    //         twoWayBinding();
    //     }
    // });

    // $(".components-nav .component-datepicker").draggable({
    //     helper: function () {
    //         return getDatePickerFieldHTML();
    //     },
    //     connectToSortable: ".form-builder",
    //     stop: function(event, ui) {
    //         var pos = ui.helper.position(); 
    //         twoWayBinding();
    //         modifyDatapicker();
    //     }
    // });


    

}

function getRow_1_dHTML() {
    var field = generateField();
    var html = `<div class="layout li_` + field + `">
                     <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>              
                    <div class="row">
                        <div class="form-builder col-12">

                        </div>
                    </div>
                </div>`;
    return html;
};

function getRow_2_dHTML() {
    var field = generateField();
    var html = `<div class="layout li_` + field + `">
                     <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>              
                    <div class="row">
                        <div class="form-builder col-lg-6 col-md-6 col-12"></div>
                        <div class="form-builder col-lg-6 col-md-6 col-12"></div>
                    </div>
                </div>`;
    return html;
};

function getRow_3_dHTML() {
    var field = generateField();
    var html = `<div class="layout li_` + field + `">
                     <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>              
                    <div class="row">
                        <div class="form-builder col-lg-4 col-md-4 col-12"></div>
                        <div class="form-builder col-lg-4 col-md-4 col-12"></div>
                        <div class="form-builder col-lg-4 col-md-4 col-12"></div>
                    </div>
                </div>`;
    return html;
};

// function getTabledHTML() {
//     var field = generateField();
//     var html = `<div class="layout li_` + field + `">
//                      <button type="button" class="btn btn-primary btn-sm add_col_table pull-right" data-field="` + field + `">Add col</button>              
//                      <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>              
//                      <div class="table-responsive table_` + field + `" >
//                         <table class="table">
//                             <thead>
//                                 <tr>
//                                     <th class="form-builder">
//                                         <button type="button" class="remove_col_table" data-field="` + field + `">X</button>                                       
//                                     </th>
//                                     <th class="form-builder">
//                                         <button type="button" class=" remove_col_table " data-field="` + field + `">X</button>                                       
//                                     </th>
//                                 </tr>
//                             </thead>
//                         </table>
//                     </div>
//                 </div>`;
//     return html;
// };

function getTextFieldHTML() {
    var field = generateField();
    var html = `<div class="btns-section">
                    <button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                    <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                </div>
                <div class="holder">
                    <div class="form-group">
                        <label bind="title-` + field + `"> Title  </label>
                        <i class="small" bind="desc-` + field + `"> Desc </i>
                    </div>
                </div>
                <div class="prev-holder">
                    <div class="form-group" type="text" >
                          <i>Text</i>
                          <input type="text" placeholder="Enter text"  bind="title-` + field + `">
                          <textarea name="" id="" cols="30" rows="10" bind="desc-` + field + `"></textarea>
                      </div>
                </div>`;
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","text").html(html);
};

function getInputFieldHTML() {
    var field = generateField();
    
    var html = `<button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                <div class="holder">
                    <div class="form-group" type="input" >
                        <label bind="title-` + field + `"> Title  </label>
                        <i class="small" bind="desc-` + field + `"> Desc </i>
                        <input type="text">
                    </div>
                </div>
                <div class="prev-holder">                  
                    <div class="form-group" type="input" >
                          <i>input</i>
                          <input type="text" placeholder="Enter text" bind="title-` + field + `">
                          <textarea name="" id="" cols="30" rows="10" bind="desc-` + field + `"></textarea>
                      </div>
                </div>`;

               
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","text").html(html);
};

function getTextAreaFieldHTML() {
    var field = generateField();
    var html = `<button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                <div class="holder">
                    <div class="form-group">
                        <label bind="title-` + field + `"> Title  </label>
                        <i class="small" bind="desc-` + field + `"> Desc </i>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="prev-holder">
                     <div class="form-group" type="textarea">
                          <i>textarea</i>
                          <input type="text" bind="title-` + field + `">
                          <textarea name="" id="" cols="30" rows="10" bind="desc-` + field + `"></textarea>
                      </div>
                </div>`;
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","textarea").html(html);
};

function getDatePickerFieldHTML() {
    var field = generateField();
    
    var html = `<button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                <div class="holder">
                    <div class="form-group">
                        <label bind="title-` + field + `"> Title </label>
                        <i class="small" bind="desc-` + field + `"> Desc </i>
                        <div class="date datepicker-group position-relative">
                            <input class="form-control salary-date w-100" type="text" name="date" placeholder="dd/mm/yy" id="birthday" required>
                            <span class="icon-calendar input-group-addon"></span>
                        </div>  
                        
                        <div class="dx-field">
                        <div class="dx-field-label">Date</div>
                        <div class="dx-field-value">
                            <div class="dev-datepicker"></div>
                        </div>
                    </div> 
                    
                </div>
                <div class="prev-holder">                  
                    <div class="form-group" type="datepicker" >
                          <i>datepicker</i>
                          <input type="text" placeholder="Enter text" bind="title-` + field + `">
                          <textarea name="" id="" cols="30" rows="10" bind="desc-` + field + `"></textarea>
                      </div>
                </div>`;

               
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","text").html(html);
};

function getCheckBoxFieldHTML() {
    var field = generateField();
    var html = `<div class="prev-holder">
                    <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                    <div class="formbuilder-checkbox-group form-group field-checkbox-group-` + field + `-preview">
                        <label for="checkbox-group-` + field + `-preview" class="formbuilder-checkbox-group-label">sddad</label>
                        <div class="checkbox-group">
                            <div class="formbuilder-checkbox">
                                <input name="checkbox-group-` + field + `-preview[]" access="false" multiple="false" class="" id="checkbox-group-` + field + `-preview-0" value="option-1" type="checkbox" checked="checked">
                                <label for="checkbox-group-` + field + `-preview-0">Option 1</label>
                            </div>
                            <div class="formbuilder-checkbox">
                                <input name="checkbox-group-` + field + `-preview[]" access="false" multiple="false" class="" id="checkbox-group-` + field + `-preview-0" value="option-1" type="checkbox" checked="">
                                <label for="checkbox-group-` + field + `-preview-0">Option 1</label>
                            </div>
                        </div>
                    </div>
                </div>`;
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","checkbox-group").html(html);
};

function generateField() {
    return Math.floor(Math.random() * (100000 - 1 + 1) + 57);
};

function getList(){
    var formList = [];
    var formProperties = {};  
    var masterList = [];
    var detailList = [];
   
    $('.convertable-section .master-section .prev-holder .form-group').each(function(i, e) {
        var properties = {};  
        properties['type'] = $(this).attr("type"); 
        properties['title'] =  $(this).find('input').val();
        properties['desc'] =  $(this).find('textarea').val();
        masterList.push(properties);               
    });
    $('.convertable-section .detail-section .prev-holder .form-group').each(function(i, e) {
        var properties = {};  
        properties['type'] = $(this).attr("type"); 
        properties['title'] =  $(this).find('input').val();
        properties['desc'] =  $(this).find('textarea').val();
        detailList.push(properties);               
    });

    formProperties['master'] = masterList;
    formProperties['detail'] = detailList;
    formList.push(formProperties); 

    var JsonString = JSON.stringify(formList, undefined, 2);
    console.log(JsonString);
   return JsonString;
}

function previewList(){
    $(".preview-section .master-section").empty();
    $(".preview-section .detail-section table").empty();
    var jsonForm = getList();
    
    var obj = JSON.parse(jsonForm);
    
    for(var i = 0; i < obj[0].master.length; i++){        
        var html ;
        var condition = obj[0].master[i].type;
        switch (condition) {
            case (condition = "text"):                   
                html = `<div class="form-group" type="text" >
                            <label>` + obj[0].master[i].title + `</label>
                            <i>` + obj[0].master[i].desc + `</i>
                        </div>`;
                break;
            case (condition = "input"):                   
                html = `<div class="form-group" type="input" >
                            <label>` + obj[0].master[i].title + `</label>
                            <i>` + obj[0].master[i].desc + `</i>
                            <input type="text" placeholder="Enter text">
                        </div>`;
                break;
            case (condition = "textarea"):   
                html = `<div class="form-group" type="textarea" >
                            <label>` + obj[0].master[i].title + `</label>
                            <i>` + obj[0].master[i].desc + `</i>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
                        </div>`;
                break;
            case (condition = "radio"):
                html = `<div class="form-group" type="input" >
                            <label>` + obj[0].master[i].title + `</label>
                            <i>` + obj[0].master[i].desc + `</i>
                            <input type="text" placeholder="Radio">
                        </div>`;
                break;
            case (condition = "group"):
                html = `<div class="form-group" type="input" >
                            <label>` + obj[0].master[i].title + `</label>
                            <i>` + obj[0].master[i].desc + `</i>
                            <input type="text" placeholder="group">
                        </div>`;
                break;
           
        }
       // var div = "<div class='whoWrap'>" + listP.PEOPLE[j].name + " " + j + "</div>"
        $(".preview-section .master-section").append(html);
    }

    /* Append to table */
    var $tableHeader = $('<tr/>');
    for(var i = 0; i < obj[0].detail.length; i++){      
        $tableHeader.append( '<th>' + obj[0].detail[i].title + '</th>' );
    }
    var $tableBody = $('<tr/>');
    for(var i = 0; i < obj[0].detail.length; i++){
        var html ;
        var condition = obj[0].detail[i].type;
        switch (condition) {
            case (condition = "text"):                   
                html = `<div class="form-group" type="text" >
                            <label>` + obj[0].detail[i].title + `</label>
                        </div>`;
                break;
            case (condition = "input"):                   
                html = `<div class="form-group" type="input" >
                            <input type="text" placeholder="Enter text">
                        </div>`;
                break;
            case (condition = "textarea"):   
                html = `<div class="form-group" type="input" >
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
                        </div>`;
                break;
           
        }
      
        $tableBody.append( '<td>' + html + '</td>' );
    }

    $('#here_table').append($tableHeader);
    $('#here_table').append($tableBody);
}

function addRow(){
    var jsonForm = getList();
    
    var obj = JSON.parse(jsonForm);

    var $tableBody = $('<tr/>');
    for(var i = 0; i < obj[0].detail.length; i++){
        var html ;
        var condition = obj[0].detail[i].type;
        switch (condition) {
            case (condition = "text"):                   
                html = `<div class="form-group" type="text" >
                            <label>` + obj[0].detail[i].title + `</label>
                        </div>`;
                break;
            case (condition = "input"):                   
                html = `<div class="form-group" type="input" >
                            <input type="text" placeholder="Enter text">
                        </div>`;
                break;
            case (condition = "textarea"):   
                html = `<div class="form-group" type="input" >
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
                        </div>`;
                break;
           
        }
      
        $tableBody.append( '<td>' + html + '</td>' );
    }
    $('#here_table').append($tableBody);
    
}

function twoWayBinding(){
     $("*[bind]").on('change keyup', function (e) {
        var to_bind = $(this).attr('bind');
        $("*[bind='"+to_bind+"']").html($(this).val());
        $("*[bind='"+to_bind+"']").val($(this).val());
       })

}

function modifyDatapicker() {
    $(".datepicker-group").datepicker({
        format: "dd-mm-yyyy",
        language: "vi",
        startDate: new Date()
    });

    $(".dev-datepicker").dxDateBox({
        type: "date",
    });
   
}

