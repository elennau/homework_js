module.exports = function(grunt) {

    // 1. ��� ��������� ��������� �����
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
		dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
		}
	},
		uglify: {
		build: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
		}
	}

    });

    // 3. ��� �� ��������� Grunt, ��� ����� ������������ ���� ������
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
    // 4. ���������, ����� ������ �����������, ����� �� ������ �grunt� � ���������
    grunt.registerTask('default', ['concat', 'uglify']);

};