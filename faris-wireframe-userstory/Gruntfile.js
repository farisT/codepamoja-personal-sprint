
module.exports = function(grunt) {
const sass = require('node-sass');
    //config
    grunt.initConfig({
        sass: {
            build: {
                options: {
                    implementation: sass,
                    sourceMap: true
                },
                files: [{
                    src:'public/main.scss',
                    dest:'public/main.css'
                }]
            }
        }
    })
    //Load plugins
    // grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-sass')

    //register tasks
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('run', function(){
        console.log('Grunt is up and running')
    })
    grunt.registerTask('sleep', function(){
        console.log('Grunt is sleeping')
    })

    grunt.registerTask('all',['sleep','run'])


};
