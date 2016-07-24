$(document).ready(function(){
    if (localStorage.getItem("messageRead") === null ||localStorage.getItem("messageRead")=='0' ) {
        $('#msgModal').modal('toggle');
    }else{
        $('#msgModal').modal('hide');
    }
})

$('#messageOk').click(function(){
    $('#msgModal').modal('hide');
    localStorage.setItem("messageRead",'1')
})