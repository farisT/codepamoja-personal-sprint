module.exports = function(grunt) {

    //config
    grunt.initConfig({

    })
    //Load plugins
    // grunt.loadNpmTasks('')

    //register tasks
    grunt.registerTask('run', function(){
        console.log('Grunt is up and running')
    })
    grunt.registerTask('sleep', function(){
        console.log('Grunt is sleeping')
    })

    grunt.registerTask('all',['sleep','run'])
};
