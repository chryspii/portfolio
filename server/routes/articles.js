const express = require('express');
const router = express.Router();

const articlecontroller = require('./../controllers/article.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();

router.get('/', articlecontroller.getAll);
router.post('/', multipartWare, articlecontroller.addArticle);
router.post('/clap', articlecontroller.clapArticle);
router.post('/comment', articlecontroller.commentArticle);
router.post('/:id', articlecontroller.getArticle);

module.exports = router;