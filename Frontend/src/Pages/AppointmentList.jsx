import { useEffect, useState } from "react";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Appointments</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-xl overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Phone</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, idx) => (
              <tr key={idx} className="border-t text-center hover:bg-gray-100">
                <td className="p-3">{appt.name}</td>
                <td className="p-3">{appt.service}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3">{appt.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
