// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/barbershop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appointmentSchema = new mongoose.Schema({
  name: String,
  service: String,
  date: String,
  time: String,
  contact: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Get all appointments
app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get available time slots for a given date
app.get('/api/available-times', async (req, res) => {
  const { date } = req.query;
  if (!date) return res.status(400).json({ success: false, message: "Date is required" });

  try {
    const bookings = await Appointment.find({ date });
    const bookedTimes = bookings.map(b => b.time);

    const allSlots = [
      "10:00", "10:30", "11:00", "11:30", "12:00",
      "12:30", "13:00", "13:30", "14:00", "14:30",
      "15:00", "15:30", "16:00", "16:30", "17:00",
      "17:30", "18:00", "18:30", "19:00", "19:30"
    ];

    const available = allSlots.filter(slot => !bookedTimes.includes(slot));
    res.json({ success: true, slots: available });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Book an appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const { name, service, date, time, contact } = req.body;
    const conflict = await Appointment.findOne({ date, time });

    if (conflict) {
      return res.status(400).json({ success: false, message: 'Time slot already booked.' });
    }

    const newAppointment = new Appointment({ name, service, date, time, contact });
    await newAppointment.save();
    res.status(201).json({ success: true, message: 'Appointment booked!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin route to get all bookings
app.get('/api/admin/bookings', async (req, res) => {
  try {
    const bookings = await Appointment.find().sort({ date: 1, time: 1 });
    res.json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));