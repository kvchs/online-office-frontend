let proxyObj={}

proxyObj['/']={
    // websocket
    ws:false,
    // 目标地址
    target: 'http://127.0.0.1:8081',
    // 发送请求头host会设置target
    changeOrigin:true,
    // 不重写请求地址
    pathReWrite:{
        '^/': '/'
    }

}

module.exports = {
    devServer: {
        host:'127.0.0.1',
        port: 8080,
        proxy: proxyObj
    }
}

// export const devServer = {
//     host: 'localhost',
//     port: 8080,
//     proxy: proxyObj
// }