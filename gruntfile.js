module.exports = function(grunt) {

  // All configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    }, // End Compass

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        options: {
          spawn: false,
        },
      }, 
      css: {
        files: ['**/*.scss'],
        tasks: ['compass']
      },
      html : {
        files: ['index.html','**/*.css'],
        options: {
          livereload: true,
        },
      },
    }, // End Watch

  }); // End Configuration

  // Plugin references
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task registration
  grunt.registerTask('default', ['watch']);

};