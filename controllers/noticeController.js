const Notice = require('../models/Notice');

exports.postNotice = async (req, res) => {
  try {
    const { authorName, noticeTitle, noticeDescription } = req.body;
    const newNotice = new Notice({ authorName, noticeTitle, noticeDescription });
    const savedNotice = await newNotice.save();
    res.json(savedNotice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNotice = await Notice.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedNotice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    await Notice.findByIdAndDelete(id);
    res.json({ message: 'Notice deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
