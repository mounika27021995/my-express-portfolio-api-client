var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();

router.get('/', function (req, res, next) {
    client.get("http://localhost:3030/blogs", function (jsonData, response) {
        // parsed response body as js object
        console.log(jsonData);
        // raw response
        // console.log(response);
        res.render('blog', { 
            title: 'Blog', 
            navBlogs: true, 
            showFooter: true, 
            extraCss: ['/css/blog.css'],
            categories:null,
            featuredBlog: null,
             blog: null,
            blog : jsonData.data
        });
    });
});
  
router.get('/:blogAlias', function (req, res, next) {
    client.get("http://localhost:3030/blogs/"+ req.params.blogsAlias, 
        function (jsonData, response) {
            // parsed response body as js object
            console.log(jsonData);
            // raw response
            // console.log(response);

            res.render('blog-detail', { 
                title: blog.name ,
                navBlog: true, 
                showFooter: true, 
                extraCss: ['/css/blog.css'],
                blog:  blog,
                categories: data.blogCategories
              });
        });
});
  
// router.get('/:projectAlias/demo', function (req, res, next) {
//     function renderDemo(error, project){  
//         console.log(project);
//         res.render('demo', { 
//             layout: 'layout-demo',
//             title: project.name,
//             project: project
//         });
//     };
//     projectService.getProjectByAlias(req.params.projectAlias, renderDemo);
// });

module.exports = router;