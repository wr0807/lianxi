<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script type="text/javascript">
        //如何检测一个已经定义的变量是一个字符串并且它不为空？
        function checkString(s) {
            if (typeof s != "undefined" && Object.prototype.toString.call(s) == "[object String]" && s.length>0){
                return true
            }else {
                return false

            }
        }
        var flag = checkString("ds")
        alert(flag)

        // function checkString(s) {
        //     if (typeof s != 'undefined' && Object.prototype.toString.call(s) == "[object String]" && s.length > 0) {
        //         return true
        //     } else {
        //         return false
        //     }
        //
        // }
        // var flag = checkString("ds")
        // alert(flag)

    </script>
</body>
</html>