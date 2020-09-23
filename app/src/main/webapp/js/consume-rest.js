$(document).ready(function(){
    // tag::ajax-method[]
    $.ajax({
    // end::ajax-method[]
    // tag::url[]
    url: "http://localhost:9080/artists",
    // end::url[]
    // tag::get-request[]
    type: 'GET',
    // end::get-request[]
    // tag::data-type[]
    dataType: 'json',
    // end::data-type[]
    
    // tag::success-function[]
    // tag::success-data[]
    success: function(data) {
    // end::success-data[]
    // tag::string[]
    var htmlstring = '';
    // end::string[]

    // tag::jquery-function[]
    jQuery.each(data, function (index, item) {
        var html = '<p> ' + item.name + ' wrote ' + item.albums.length 
                 + ' albums:</p></br>';
    
        var sub = '';
    
        jQuery.each(item.albums, function (index, item) {
        sub = sub + '<p style="text-indent: 20px" >Album titled <b>' 
            + item.title + '</b> by <b>' + item.artist + '</b> contains <b>' 
            + item.ntracks +'</b> tracks</p></br>'
    
        });
    // end::jquery-function[]
    // tag::htmlstring[]
    htmlstring = htmlstring + html + sub
    // end::htmlstring[]

    });
    
    // tag::roottag[]
    $('#roottag').append(htmlstring);
    // end::roottag[]
    
    }
    // end::success-data[]
    });
})