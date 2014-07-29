module.exports = function(grunt) {

  // All configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'js/*.js', // All JS in the js folder
        ],
        dest: 'js/build/production.js',
      }
    }, // End Concat

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    }, // End Uglify

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/compressed/'
        }]
      }
    }, // End Imagemin

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
        tasks: ['concat', 'uglify'],
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task registration
  grunt.registerTask('default', ['concat', 'uglify', /*'imagemin',*/ 'watch']);

};