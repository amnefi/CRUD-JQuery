jQuery(function(){
    $("form").submit(function(e){
        e.preventDefault();
        var nombre = $("input[name=nombre]").val().toUpperCase();
        var email = $("input[name=email]").val();
        $(".data-table tbody").append("<tr data-name='" + nombre + "' data-email='" + email + "'><td>" + nombre + "</td><td>" + email +"</td><td><button class='btn btn-info btn-xs btn-edit'>Editar</button><button class='btn btn-danger btn-xs btn-delete'>Eliminar</button></td></tr>");
        $("input[name=nombre]").val('');
        $("input[name=email]").val('');
    });

    $("body").on("click",".btn-delete",function(){
        if(window.confirm("Esta seguro de Eliminar el registro?"))
            $(this).parents("tr").remove();
    });

    $("body").on("click",".btn-edit",function(){
        var nombre = $(this).parents("tr").attr("data-name");
        var email = $(this).parents("tr").attr("data-email");

        $(this).parents("tr").find("td:eq(0)").html('<input name="editar_nombre" value="' + nombre +'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="editar_email" value="' + email +'">');

        $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Actualizar</button><button class='btn btn-warning btn-xs btn-cancel'>Cancelar</button>");
        $(this).hide();

    });

    $("body").on("click",".btn-cancel",function(){
        var nombre = $(this).parents("tr").attr("data-name");
        var email = $(this).parents("tr").attr("data-email");

        $(this).parents("tr").find("td:eq(0)").text(nombre);
        $(this).parents("tr").find("td:eq(1)").text(email);

        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();

    });

    $("body").on("click",".btn-update",function(){
        var nombre = $(this).parents("tr").find("input[name=editar_nombre]").val().toUpperCase();
        var email = $(this).parents("tr").find("input[name=editar_email]").val();

        $(this).parents("tr").find("td:eq(0)").text(nombre);
        $(this).parents("tr").find("td:eq(1)").text(email);

        $(this).parents("tr").attr('data-name',nombre);
        $(this).parents("tr").attr('data-email',email);
        
        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();         
        
    });
})