// DoctorList.js
import React, { useState } from 'react';
import BookingForm from '../Booking/bookingForm';

const doctorsData = [
  { id: 1, name: 'Dr. Smith', specialization: 'Cardiologist' },
  { id: 2, name: 'Dr. Johnson', specialization: 'Dermatologist' },
  { id: 3, name: 'Dr. Williams', specialization: 'Pediatrician' }
];

function DoctorList() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div>
      <h2>Available Doctors</h2>
      <ul>
        {doctorsData.map((doctor) => (
          <li key={doctor.id} onClick={() => handleDoctorSelect(doctor)}>
            {doctor.name} - {doctor.specialization}
          </li>
        ))}
      </ul>
      {selectedDoctor && <BookingForm doctor={selectedDoctor} />}
    </div>
  );
}

export default DoctorList;
