import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

// Criar, deletar, modificar infos (CRUD) fica no repositórios, realiza as operações em cima dos dados armazenados
// DTO - Data Transfer Object

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    public async findByDate(date: Date): Promise<Appointment | null> {
        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }
}

export default AppointmentsRepository;
