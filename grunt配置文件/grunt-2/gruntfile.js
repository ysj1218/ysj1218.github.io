/*
 	grunt配置文件：
 		功能：
 			(1) 将es6的代码转换为es5的代码
 			(2) 将css文件以及转换为es5的代码进行压缩
 			(3) 将html代码进行压缩
 */
module.exports = function(grunt){  
    grunt.initConfig({  
        pkg:grunt.file.readJSON('package.json'),  

		babel: {
			options: {
				sourceMap: false,
				presets: ['env']
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.js',
					dest: 'es5/'
				}]
			}
		},
				
        uglify: {  
            options: {  
                stripBanners: true,  
                banner: '/*!<%=pkg.name%>-<%=pkg.version%>.common <%=grunt.template.today("yyyy-mm-dd")%>*/\n'  
            },  
            my_target: {  
               files: [{  
                   expand: true, 
                   cwd: 'es5/',  
                   src: '**/*.js',  
                   dest: 'dist/' 
               }]  
  
            }  
        },  
        
        cssmin: {
        	options: {
        		stripBanners: true,
        		 banner: '/*!<%=pkg.name%>-<%=pkg.version%>.common <%=grunt.template.today("yyyy-mm-dd")%>*/\n' 
        	},
        	my_target: {
        		files: [{
        			expand: true,
        			cwd: 'src/',
        			src: '**/*.css',
        			dest: 'dist/'
        		}]
        	}
        },
        
        htmlmin: {  
            options: {  
                removeComments: false, //移除注释  
                removeCommentsFromCDATA: false,//移除来自字符数据的注释  
                collapseWhitespace: true,//无用空格  
                collapseBooleanAttributes: false,//失败的布尔属性  
                removeAttributeQuotes: false,//移除属性引号      有些属性不可移走引号  
                removeRedundantAttributes: false,//移除多余的属性  
                useShortDoctype: false,//使用短的跟元素  
                removeEmptyAttributes: false,//移除空的属性  
                removeOptionalTags: false//移除可选附加标签  
            },  
            my_target: {  
                files: [{  
                    expand: true,  
                    cwd: 'src/',  
                    src: '**/*.html',  
                    dest: 'dist/'  
                }]  
  
            }  
        },  
        
        watch: {  
            js: {  
                files: ['src/**/*.js','src/**/*.css' , 'src/**/*.html'],  
                tasks: ['babel', 'uglify','cssmin','htmlmin'],  
                options: {
                	spawn: false, 
                	livereload: false
                }
            },
            babel: {
            	files: ['src/**/*.js'],
            	tasks: ['babel']
            }
        }  
  
    });  
    //告诉grunt我们将使用插件  
    grunt.loadNpmTasks('grunt-babel'); 
    grunt.loadNpmTasks('grunt-contrib-uglify');  
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');  
    grunt.loadNpmTasks('grunt-contrib-watch');  
    //告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）  
    grunt.registerTask('default', ['babel', 'uglify', 'cssmin' , 'htmlmin', 'watch']);  
};  