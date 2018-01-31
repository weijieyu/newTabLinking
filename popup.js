window.onload = function(){

    var a = document.getElementsByTagName("a");

    for (i=0;i<a.length;i++) {
        console.log(i)
        a[i].target = '_blank';
    }

}


