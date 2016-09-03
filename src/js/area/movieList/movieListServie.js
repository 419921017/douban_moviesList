/**
 * Created by Seele on 2016/9/3.
 */
// 请求数据
angular.module( 'movieListServie', [] )
    .factory( 'listFactory', [ '$http', function ($http) {
        return {
            getAnyData : function () {
                var url = './data.json';
                // 获取本地
                return $http.get(url).success( function (data,header,config,status) {
                        return data;
                    } ).error(function (reason,header,config,status) {
                        return reason;
                    } )
            }
        }
        
    } ] )