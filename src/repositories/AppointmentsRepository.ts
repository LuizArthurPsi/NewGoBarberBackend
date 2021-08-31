import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// Criar, deletar, modificar infos (CRUD) fica no repositórios, realiza as operações em cima dos dados armazenados
// DTO - Data Transfer Object

interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find(appointment =>
            isEqual(date, appointment.date),
        );

        return findAppointment || null;
    }

    public create({ provider, date }: CreateAppointmentDTO): Appointment {
        const appointment = new Appointment({ provider, date });

        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentsRepository;
