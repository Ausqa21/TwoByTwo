$(document).ready(function() {
    const form2 = $("#form2"),
          form3 = $("#form3"),
          form4 = $("#form4");

    form2.submit(function(event) {
        event.preventDefault();
    
        const actionEndpoint = $(this).attr("action"),
                httpMethod = $(this).attr("method"),
                formData = $(this).serialize();
    
        $.ajax({
            url: actionEndpoint,
            method: httpMethod,
            data: formData,
            success: function(data) {
                $("#output2").html(data.value);
                $("#output2").css({'border': '1px solid grey', 'background-color': 'green', 'color': 'white', 'padding-left': '1rem', 'border-radius': '3px 3px 3px 3px'});
            },
            error: function(errorData) {
                console.log(errorData);
            }
        })
    })
        
        
    form3.submit(function(event) {
        event.preventDefault();
    
        const actionEndpoint = $(this).attr("action"),
                httpMethod = $(this).attr("method"),
                formData = $(this).serialize();
    
        $.ajax({
            url: actionEndpoint,
            method: httpMethod,
            data: formData,
            success: function(data) {
                $("#output3").html(data.value);
                $("#output3").css({'border': '1px solid grey', 'background-color': 'green', 'color': 'white', 'padding-left': '1rem', 'border-radius': '3px 3px 3px 3px'});
            },
            error: function(errorData) {
                console.log(errorData);
            }
        })
    })
        
        
    form4.submit(function(event) {
        event.preventDefault();
    
        const actionEndpoint = $(this).attr("action"),
                httpMethod = $(this).attr("method"),
                formData = $(this).serialize();
    
        $.ajax({
            url: actionEndpoint,
            method: httpMethod,
            data: formData,
            success: function(data) {
                $("#output4").html(data.value);
                $("#output4").css({'border': '1px solid grey', 'background-color': 'green', 'color': 'white', 'padding-left': '1rem', 'border-radius': '3px 3px 3px 3px'});
            },
            error: function(errorData) {
                console.log(errorData);
            }
        })
    })
})