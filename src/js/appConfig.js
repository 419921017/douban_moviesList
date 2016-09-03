
// 项目全局配置模块
angular.module( 'appConfig', [] )
    .constant( 'configConstant' , {
        SERVER_PATH : 'https://api.douban.com',
        PORT : 8011,
        VERSION : '0.1'
    } )