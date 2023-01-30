function template(id, data) {
    var str = document.getElementById(id).innerHTML;
    // 正则表达式
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/;

    var pattResult = null;
    while (pattResult = pattern.exec(str)) {
        str = str.replace(pattResult[0], data[pattResult[1]]);

    }
    console.log(str);
}