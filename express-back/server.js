const express = require('express')
const proxy = require('http-proxy-middleware')
const app=express()
app.get('/',(req,res)=>{
  res.send('hello world 我是一个nodejs服务')
})
app.use('/maoyan',proxy({
  target:'http://m.maoyan.com',
  changeOrigin:true,
  pathRewrite:{
    '^/maoyan':''
  }
}))
app.listen(9090)

