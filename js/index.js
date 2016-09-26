$('.preactivated').bind('inview', function () { 
    $(this).addClass("activated");
});

function mOver(obj)  {
    obj.style.background="#2196f3";
    obj.style.borderColor="#2196f3";
    ovj.style.color="white";
}
function mOut(obj)  {
    obj.style.background="transparent";
    obj.style.borderColor="white";
}
function dmOut(obj)  {
    obj.style.background="transparent";
    obj.style.borderColor="#ccc";
}

