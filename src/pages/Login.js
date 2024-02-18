
import AppointmentForm from '../components/AppointmentForm'
import AvailableAppointments from '../components/AvailableAppointments'
import "../assets/AppointmentStyles.css"
import React, {useState } from 'react'


    const Login = () => {


        const [appointments, setAppointments] = useState([]);
     
        const addAppointment = (appointment) => {
            setAppointments([...appointments, appointment]);
        };
     
        const deleteAppointment = (index) => {
            const deletedAppointments = [...appointments];
            deletedAppointments.splice(index, 1);
            setAppointments(deletedAppointments);
        };
     
        const editAppointment = (index, editedName, editedDate) => {
            const updatedAppointments = [...appointments];
            updatedAppointments[index] = {
                name: editedName,
                date: editedDate,
            };
            setAppointments(updatedAppointments);
        };
     
        const clearAppointments = () => {
            setAppointments([]);
        };

     

     
        return (
            <>

<div>
                <h1 >Appointment Management System</h1>
                <AppointmentForm addAppointment={addAppointment} />
                <AvailableAppointments
                    appointments={appointments}
                    deleteAppointment={deleteAppointment}
                    clearAppointments={clearAppointments}
                    editAppointment={editAppointment}
                />
                
                
            </div>



           
            </>
        );
    };
    export default  Login;