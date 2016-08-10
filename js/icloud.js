// var todo=[
//     {
//         id:1,
//         title:"新列表111",
//         color:"#b14bc9",
//         list:[
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             }
//         ]
//     },
//     {
//         id:2,
//         title:"新列表222",
//         color:"#49bf1f",
//         list:[
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             }
//         ]
//     },
//     {
//         id:3,
//         title:"新列表333",
//         color:"#1badf8",
//         list:[
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             }
//         ]
//     },
//     {
//         id:4,
//         title:"新列表444",
//         color:"#e0ac00",
//         list:[
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             }
//         ]
//     },
//     {
//         id:5,
//         title:"新列表555",
//         color:"#a2845e",
//         list:[
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             }
//         ]
//     },
//     {
//         id:6,
//         title:"新列表333",
//         color:"#ff2968",
//         list:[
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             }
//         ]
//     },
//     {
//         id:7,
//         title:"新列表444",
//         color:"#ff7f00",
//         list:[
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:true
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             },
//             {
//                 content:"aaaaa",
//                 date:"14444444444444",
//                 done:false
//             }
//         ]
//     }
// ]
function getData(){
    if(JSON.parse(localStorage.getItem("todos"))==null){
        alert(1);
        var td=[
            {
                id:1,
                title:"新列表111",
                color:"#b14bc9",
                list:[
                    {
                        content:"aaaaa",
                        date:"14444444444444",
                        done:true
                    },
                    {
                        content:"aaaaa",
                        date:"14444444444444",
                        done:true
                    },
                    {
                        content:"aaaaa",
                        date:"14444444444444",
                        done:true
                    },
                    {
                        content:"aaaaa",
                        date:"14444444444444",
                        done:false
                    },
                    {
                        content:"aaaaa",
                        date:"14444444444444",
                        done:false
                    }
                ]
            }
        ]
        saveData(td);
    }
    return JSON.parse(localStorage.getItem("todos"))||[];
}
function saveData(data){
    localStorage.setItem("todos",JSON.stringify(data));
}

angular.module("app",[]).controller("mc",function($scope){
    $scope.color=["#b14bc9","#49bf1f","#1badf8","#e0ac00","#a2845e","#ff2968","#ff7f00"];
    $scope.todo=getData();
    $scope.ids=$scope.todo.length;
    $scope.index=0;
    $scope.flag=false;//已经完成打开或关闭
    $scope.f=false;// 选项开关
    // 左侧添加项目
    $scope.add=function () {
        $scope.ids=$scope.ids+1;
        $scope.index=$scope.ids-1;
        $scope.todo.push({
            id:$scope.ids,
            title:"新列表"+$scope.ids,
            color:$scope.color[$scope.index%7],
            list:[]
        })
        getNum ()
    }
    // 过滤器已完成
    $scope.done=function (val,index,arr) {
        if(val.done==true){
            return true;
        }
    }
    // 过滤器未完成
    $scope.doing=function (val,index,arr) {
        if(val.done==false){
            return true;
        }
    }
    // 左侧点击事件
    $scope.change=function (i) {
        $scope.index=i;
        getNum ()
        $scope.f=false;
    }
    getNum ()
    // 已完成数量
    function getNum (){
        $scope.num=0;
        angular.forEach($scope.todo[$scope.index].list,function(o,i){
            if(o.done==true){
                $scope.num++;
            }
        })
    }
    // 改变状态完成/未完成
    $scope.changeStatus=function(o,sta){
        o.done=sta;
        getNum();
    }
    // 添加新项目
    $scope.addProject=function(i){
        var j=$scope.todo[i].list.push({
            content:"",
            date:new Date(),
            done:false
        })
        console.log(j)
    }
    // 点击选项
    $scope.option=function (i) {
        $scope.f=!$scope.f;
        $scope.fontColor=$scope.todo[i].color;
        $scope.fontVal=$scope.todo[i].title;
    }
    // 点击颜色变化
    $scope.changeColor=function (v) {
        $scope.fontColor=v;
    }
    // 完成
    $scope.finish=function (i) {
        $scope.f=false;
        $scope.todo[i].color=$scope.fontColor;
        $scope.todo[i].title=$scope.fontVal;
    }
    // 删除
    $scope.del=function (i) {
        $scope.f=false;
        $scope.todo.splice(i,1)
    }
    // 检测todo变化
    $scope.$watch("todo",function(nv,ov){
        saveData($scope.todo);
        getData();
    },true)

})