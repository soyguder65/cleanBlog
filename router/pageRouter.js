const router=require('express').Router();
const pageController=require('../controller/pageController');
const postController=require('../controller/postController');

router.get('/',pageController.home);
router.get('/about',pageController.about);
router.get('/add_post',pageController.add_post);



router.post('/new-post',postController.newPost);
router.get('/mesajlarim/:id',postController.getPage);





module.exports=router;