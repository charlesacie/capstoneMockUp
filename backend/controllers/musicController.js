const Music = require('../models/musicModel');

const getAllMusic = async (req, res) => {
  try {
    const music = await Music.find();
    res.status(200).json(music);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createMusic = async (req, res) => {
  const { title, artist, url, genre } = req.body;
  try {
    const newMusic = new Music({ title, artist, url, genre });
    await newMusic.save();
    res.status(201).json(newMusic);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateMusic = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMusic = await Music.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedMusic);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteMusic = async (req, res) => {
  const { id } = req.params;
  try {
    await Music.findByIdAndDelete(id);
    res.status(200).json({ msg: 'Music deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
module.exports= {
    getAllMusic, 
    createMusic,
    deleteMusic,
    updateMusic,
}