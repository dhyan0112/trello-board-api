const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController');

router.post('/post-notice', noticeController.postNotice);
router.get('/get-notices', noticeController.getNotices);
router.put('/edit-notice/:id', noticeController.editNotice);
router.delete('/delete-notice/:id', noticeController.deleteNotice);

module.exports = router;
