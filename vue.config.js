const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports={
  publicPath:process.envNODE_ENV==='production' 
  ?'https://github.com/Soro-David/Portfolio.git'
  :'/'
}