/* eslint global-require: 0 */
/* eslint func-names: 0 */

module.exports = function (grunt) {
  const sass = require('node-sass');
  // config
  grunt.initConfig({
    sass: {
      build: {
        options: {
          implementation: sass,
          sourceMap: true,
        },
        files: [{
          src: 'public/main.scss',
          dest: 'public/main.css',
        }],
      },
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
      },
    },
  });
  // Load plugins
  // grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register tasks
  grunt.registerTask('default', ['watch']);

  // grunt.registerTask('run', function(){
  //     console.log('Grunt is up and running')
  // })
  // grunt.registerTask('sleep', function(){
  //     console.log('Grunt is sleeping')
  // })

  // grunt.registerTask('all',['sleep','run'])
};
